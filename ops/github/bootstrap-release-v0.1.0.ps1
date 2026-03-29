param(
  [string]$Repo = "indigo-services/var1-home-landing",
  [string]$ProjectOwner = "indigo-services",
  [string]$MilestoneTitle = "v0.1.0",
  [switch]$SkipProject
)

$ErrorActionPreference = "Stop"

function Invoke-Gh {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments
  )

  $output = & gh @Arguments 2>&1
  if ($LASTEXITCODE -ne 0) {
    throw "gh $($Arguments -join ' ') failed.`n$output"
  }

  return $output
}

function Ensure-Milestone {
  param(
    [string]$Repository,
    [string]$Title,
    [string]$Description
  )

  $milestones = Invoke-Gh @("api", "repos/$Repository/milestones")
  $existing = ($milestones | ConvertFrom-Json) | Where-Object { $_.title -eq $Title } | Select-Object -First 1
  if ($existing) {
    return $existing
  }

  $created = Invoke-Gh @(
    "api",
    "repos/$Repository/milestones",
    "--method", "POST",
    "-f", "title=$Title",
    "-f", "description=$Description"
  )

  return $created | ConvertFrom-Json
}

function Ensure-Label {
  param(
    [string]$Repository,
    [hashtable]$Label
  )

  Invoke-Gh @(
    "label", "create", $Label.name,
    "--repo", $Repository,
    "--color", $Label.color,
    "--description", $Label.description,
    "--force"
  ) | Out-Null
}

function Ensure-Issue {
  param(
    [string]$Repository,
    [string]$Milestone,
    [hashtable]$Issue
  )

  $issuesJson = Invoke-Gh @("issue", "list", "--repo", $Repository, "--state", "all", "--limit", "200", "--json", "title,number,url")
  $existing = ($issuesJson | ConvertFrom-Json) | Where-Object { $_.title -eq $Issue.title } | Select-Object -First 1
  if ($existing) {
    return $existing
  }

  $createdUrl = Invoke-Gh @(
    "issue", "create",
    "--repo", $Repository,
    "--title", $Issue.title,
    "--body", $Issue.body,
    "--label", ($Issue.labels -join ","),
    "--milestone", $Milestone
  )

  return [pscustomobject]@{
    title = $Issue.title
    url = ($createdUrl -split "`r?`n" | Select-Object -Last 1).Trim()
  }
}

function Ensure-Project {
  param(
    [string]$Owner,
    [string]$Title
  )

  $projectsJson = Invoke-Gh @("project", "list", "--owner", $Owner, "--limit", "100", "--format", "json")
  $existing = ($projectsJson | ConvertFrom-Json).projects | Where-Object { $_.title -eq $Title } | Select-Object -First 1
  if ($existing) {
    return $existing
  }

  $created = Invoke-Gh @("project", "create", "--owner", $Owner, "--title", $Title, "--format", "json")
  return $created | ConvertFrom-Json
}

function Ensure-WorkflowField {
  param(
    [string]$Owner,
    [int]$ProjectNumber
  )

  $fieldsJson = Invoke-Gh @("project", "field-list", "$ProjectNumber", "--owner", $Owner, "--format", "json")
  $fields = $fieldsJson | ConvertFrom-Json
  $existing = $fields.fields | Where-Object { $_.name -eq "Workflow" } | Select-Object -First 1
  if ($existing) {
    return $existing
  }

  $created = Invoke-Gh @(
    "project", "field-create", "$ProjectNumber",
    "--owner", $Owner,
    "--name", "Workflow",
    "--data-type", "SINGLE_SELECT",
    "--single-select-options", "Backlog,Ready,In Progress,In Review,Visual Review,Done",
    "--format", "json"
  )

  return $created | ConvertFrom-Json
}

function Ensure-ProjectItemWorkflow {
  param(
    [string]$Owner,
    [int]$ProjectNumber,
    [string]$ProjectId,
    [string]$WorkflowFieldId,
    [string]$BacklogOptionId,
    [string]$IssueUrl
  )

  $itemJson = Invoke-Gh @("project", "item-add", "$ProjectNumber", "--owner", $Owner, "--url", $IssueUrl, "--format", "json")
  $item = $itemJson | ConvertFrom-Json

  Invoke-Gh @(
    "project", "item-edit",
    "--id", $item.id,
    "--project-id", $ProjectId,
    "--field-id", $WorkflowFieldId,
    "--single-select-option-id", $BacklogOptionId
  ) | Out-Null
}

Invoke-Gh @("auth", "status", "--hostname", "github.com") | Out-Null

$milestone = Ensure-Milestone `
  -Repository $Repo `
  -Title $MilestoneTitle `
  -Description "Convert the current Vite landing page into a Strapi LaunchPad-compatible marketing page using existing LaunchPad page/global protocols only."

$labels = @(
  @{ name = "release:v0.1.0"; color = "5319e7"; description = "Release milestone v0.1.0" },
  @{ name = "type:planning"; color = "0052cc"; description = "Planning and architecture work" },
  @{ name = "type:content-model"; color = "1d76db"; description = "Strapi schema and content modeling work" },
  @{ name = "type:frontend"; color = "0e8a16"; description = "Frontend integration work" },
  @{ name = "type:content-entry"; color = "fbca04"; description = "Content entry and relational data setup" },
  @{ name = "type:qa"; color = "c2e0c6"; description = "Quality assurance and visual review" },
  @{ name = "type:release"; color = "b60205"; description = "Release preparation and closeout" },
  @{ name = "status:backlog"; color = "d4c5f9"; description = "Backlog status" },
  @{ name = "status:ready"; color = "bfdadc"; description = "Ready for work" },
  @{ name = "status:in-progress"; color = "fbca04"; description = "Currently in progress" },
  @{ name = "status:in-review"; color = "f9d0c4"; description = "In code review" },
  @{ name = "status:blocked"; color = "d93f0b"; description = "Blocked work" },
  @{ name = "status:done"; color = "0e8a16"; description = "Completed work" },
  @{ name = "risk:visual"; color = "e99695"; description = "Visual parity risk" },
  @{ name = "risk:integration"; color = "fef2c0"; description = "Integration risk" }
)

foreach ($label in $labels) {
  Ensure-Label -Repository $Repo -Label $label
}

$issues = @(
  @{
    title = "Define LaunchPad-exact section mapping for homepage migration"
    labels = @("type:planning", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Define the exact mapping from the current Vite homepage sections into LaunchPad page/global content.

## Acceptance Criteria
- source sections mapped to LaunchPad blocks/global content
- omitted sections explicitly documented
- final block order agreed
"@
  },
  @{
    title = "Document release gates and visual acceptance criteria for v0.1.0"
    labels = @("type:planning", "type:qa", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Document the review-only release gates for `v0.1.0`.

## Acceptance Criteria
- code review gate defined
- homepage visual review checklist defined
- release pass/fail rules documented
"@
  },
  @{
    title = "Create ApiPagePage content plan for migrated homepage"
    labels = @("type:content-model", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Create the Strapi `ApiPagePage` content plan for the migrated LaunchPad homepage.

## Acceptance Criteria
- slug defined
- seo fields defined
- dynamic zone block order defined
"@
  },
  @{
    title = "Map navbar and footer content into LaunchPad global model"
    labels = @("type:content-model", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Map header and footer content into LaunchPad global content rather than page-local blocks.

## Acceptance Criteria
- global navbar content spec complete
- global footer content spec complete
- no page-local header/footer content remains
"@
  },
  @{
    title = "Prepare relational content entries for testimonials, faqs, and logos"
    labels = @("type:content-model", "type:content-entry", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Prepare the relational entries required by LaunchPad for testimonials, FAQs, and logos.

## Acceptance Criteria
- testimonial entry list complete
- faq entry list complete
- logo entry list complete
"@
  },
  @{
    title = "Verify existing LaunchPad blocks support homepage content set"
    labels = @("type:frontend", "risk:integration", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Verify that LaunchPad supports the planned homepage sections using existing blocks only.

## Acceptance Criteria
- hero/features/how-it-works/testimonials/brands/faq/cta support confirmed
- any frontend gaps listed explicitly
- no custom block required for release scope
"@
  },
  @{
    title = "Integrate migrated homepage into standard LaunchPad page rendering"
    labels = @("type:frontend", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Integrate the migrated homepage into standard LaunchPad marketing page rendering.

## Acceptance Criteria
- page renders through standard marketing route
- page uses `ApiPagePage`
- rendering is driven by existing dynamic-zone conventions
"@
  },
  @{
    title = "Confirm omitted custom sections are excluded from v0.1.0 release"
    labels = @("type:frontend", "risk:visual", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Document and confirm the custom sections intentionally omitted from the `v0.1.0` release.

## Acceptance Criteria
- `PriceEstimator` omitted
- `BeforeAfter` omitted
- `ServiceArea` omitted
- omissions documented in release notes
"@
  },
  @{
    title = "Run homepage visual review against agreed LaunchPad target"
    labels = @("type:qa", "risk:visual", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Run the page-level visual review for the migrated LaunchPad homepage.

## Acceptance Criteria
- hero, features-derived sections, process, testimonials, faq, brands, and cta verified
- global navbar/footer verified
- no placeholder content remains
"@
  },
  @{
    title = "Publish v0.1.0 release notes and close milestone"
    labels = @("type:release", "release:v0.1.0", "status:backlog")
    body = @"
## Summary
Publish `v0.1.0` release notes and close the milestone after all required reviews pass.

## Acceptance Criteria
- release notes summarize included and omitted sections
- all milestone issues closed
- release status marked complete
"@
  }
)

$createdIssues = @()
foreach ($issue in $issues) {
  $createdIssues += Ensure-Issue -Repository $Repo -Milestone $MilestoneTitle -Issue $issue
}

if (-not $SkipProject) {
  $project = Ensure-Project -Owner $ProjectOwner -Title "LaunchPad Homepage Conversion"
  $workflowField = Ensure-WorkflowField -Owner $ProjectOwner -ProjectNumber $project.number
  $backlogOption = $workflowField.options | Where-Object { $_.name -eq "Backlog" } | Select-Object -First 1

  if (-not $backlogOption) {
    throw "Workflow field was created but the Backlog option could not be resolved."
  }

  foreach ($issue in $createdIssues) {
    Ensure-ProjectItemWorkflow `
      -Owner $ProjectOwner `
      -ProjectNumber $project.number `
      -ProjectId $project.id `
      -WorkflowFieldId $workflowField.id `
      -BacklogOptionId $backlogOption.id `
      -IssueUrl $issue.url
  }
}

Write-Host "Release bootstrap complete for $Repo / $MilestoneTitle"
