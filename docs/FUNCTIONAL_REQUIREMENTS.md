# ResilienceOS — Functional Requirements and Implementation Backlog

**Target state:** Enterprise DORA/operational-resilience platform  
**Related document:** [Business Requirements](./BUSINESS_REQUIREMENTS.md)  
**Version:** 1.0 — 3 September 2026

## 1. System context

The platform includes a secured web application, versioned API, workflow/rules engine, operational database, evidence/object store, dependency/impact service, analytics/reporting layer, scheduler/notifications, integration workers, regulatory content configuration, and immutable audit. It integrates with authoritative CMDB/architecture, ITSM/SIEM, monitoring, GRC, BCM, test, procurement/contract, HR/identity, vulnerability, and document systems.

## 2. Roles

`Platform Administrator`, `DORA/Compliance Administrator`, `Management Body Member`, `Operational Resilience/BCM Manager`, `ICT Risk Manager`, `CISO/Security Reviewer`, `Incident Manager`, `Service/Function Owner`, `Asset/Application Owner`, `Test/TLPT Manager`, `Independent Tester/Validator`, `Third-Party/Vendor Manager`, `Procurement/Legal Reviewer`, `Regulatory Reporting Approver`, `Internal Auditor`, `Read-Only Regulator`, and scoped `Integration Service Account`.

## 3. Functional requirements

### 3.1 Identity, entity, and regulatory administration

- **FR-ADM-001:** Authenticate through enterprise OIDC/SAML SSO and enforce MFA/session/device/network policy.
- **FR-ADM-002:** Support groups, legal entities, branches, jurisdictions, competent authorities, business units, environments, and delegated administration.
- **FR-ADM-003:** Enforce RBAC/ABAC and segregation of duties across records, fields, evidence, reports, APIs, exports, and entity scope.
- **FR-ADM-004:** Version DORA obligations, technical-standard/authority mappings, classifications, thresholds, timelines, templates, workflows, and effective dates.
- **FR-ADM-005:** Configure proportionality/applicability decisions with legal approval, rationale, scope, review, and immutable history.
- **FR-ADM-006:** Simulate regulatory/configuration changes against existing records before activation and create reassessment tasks.

### 3.2 Governance and ICT risk framework

- **FR-GOV-001:** Maintain management responsibilities, committees, policies, standards, procedures, risk appetite/tolerance, strategy, objectives, KPIs/KRIs, and review schedules.
- **FR-GOV-002:** Map obligations to policies, controls, accountable roles, evidence, tests, risks, findings, and reports.
- **FR-GOV-003:** Manage policy/control attestations, approval, effective date, version, exceptions, and overdue escalation.
- **FR-RISK-001:** Register risks with source, scenario, asset/function/provider scope, threat, vulnerability, likelihood, impact, inherent/residual ratings, owner, treatment, controls, target, and review.
- **FR-RISK-002:** Support configurable qualitative/quantitative assessment methods and preserve rules/version behind scores.
- **FR-RISK-003:** Ingest or create risks from incidents, tests, vulnerabilities, changes, providers, audits, and mapping/quality gaps.
- **FR-RISK-004:** Manage treatment actions, risk acceptance authority, compensating controls, expiry, escalation, and effectiveness review.

### 3.3 Critical/important functions and dependency mapping

- **FR-MAP-001:** Register business functions/services, products, processes, customers/markets, owners, criticality rationale, and regulatory/entity scope.
- **FR-MAP-002:** Capture BIA data, qualitative/quantitative impacts by time horizon, impact tolerance, MTPD where used, RTO, RPO, minimum service level, peak/cutoff periods, and dependencies.
- **FR-MAP-003:** Map people/teams, facilities, information/data assets, applications, APIs/services, infrastructure, networks, cloud/locations, and third parties/subcontractors.
- **FR-MAP-004:** Record dependency type, direction, environment, criticality, redundancy/substitutability, capacity, recovery objective, source, confidence, and validity.
- **FR-MAP-005:** Import and reconcile authoritative and observed topology, detect conflicts/duplicates/gaps, and route stewardship issues.
- **FR-MAP-006:** Require owner attestation after material change and periodically; retain historical service-map snapshots.
- **FR-MAP-007:** Detect missing recovery data, single points of failure, shared dependencies, geographic/provider concentration, and tolerance mismatch.

### 3.4 ICT assets, protection, detection, continuity, and recovery

- **FR-ICT-001:** Maintain/link ICT assets, classification, owner, location, lifecycle, vulnerability/patch, backup, monitoring, change, configuration, and supported function.
- **FR-ICT-002:** Map preventive/protective/detective/respond/recover controls to assets/functions and collect operating evidence.
- **FR-ICT-003:** Maintain continuity, response, recovery, restoration, crisis communication, and backup plans with version, owner, scope, invocation, dependencies, contacts, and review/test history.
- **FR-ICT-004:** Track backup coverage, integrity, isolation, restore tests, recovery capacity, and exceptions.
- **FR-ICT-005:** Link detection mechanisms, alert thresholds, coverage, owners, tests, and monitoring gaps.
- **FR-ICT-006:** Assess material changes for resilience impact and reopen affected maps, risks, plans, and tests.

### 3.5 ICT incident management and reporting

- **FR-INC-001:** Create/import all ICT-related incidents and significant cyber-threat records with stable identity and source links.
- **FR-INC-002:** Capture type, detection/source, chronology, affected entities/functions/assets/providers, duration, geography, customers/transactions, economic/data/reputation impact, criticality, cause, response, recovery, communications, and evidence.
- **FR-INC-003:** Propose classification/materiality using effective-dated criteria and show each threshold/input/missing value.
- **FR-INC-004:** Require authorized confirmation/override with rationale, evidence, and segregation of duties.
- **FR-INC-005:** Calculate report stages/deadlines from authority/entity/classification/detection/awareness inputs and escalate risk of breach.
- **FR-INC-006:** Populate current approved report templates, validate completeness/consistency, and preserve version/source lineage.
- **FR-INC-007:** Support review, approval, secure submission/export, acknowledgment/rejection/correction, and exact submitted-artifact retention.
- **FR-INC-008:** Manage internal/external/client/counterparty/media communications approvals and evidence.
- **FR-INC-009:** Record root cause, lessons, corrective actions, risk/control/map/plan updates, management reporting, and closure.

### 3.6 Resilience testing

- **FR-TST-001:** Build risk-based multi-year/annual test programs mapped to critical functions, assets, risks, controls, regulatory obligations, and required frequency.
- **FR-TST-002:** Identify coverage gaps and enforce at least the institution-approved minimum annual coverage for systems supporting critical/important functions.
- **FR-TST-003:** Manage vulnerability, scanning, physical, network, gap, source-code, scenario, compatibility, performance, end-to-end, penetration, recovery, and other approved test types.
- **FR-TST-004:** Record scope, objectives, method, environment, safety, data, participants, independence/conflicts, provider involvement, schedule, approvals, and expected evidence.
- **FR-TST-005:** Capture execution, observations, evidence, result, impacted services/tolerances, disruption, and tester conclusion.
- **FR-TST-006:** Create findings with severity, root cause, action, owner, due date, acceptance, retest, validation, and closure approval.
- **FR-TST-007:** Manage TLPT applicability, scoping, testers, control team, authority interactions, remediation plan, summary, and attestation evidence without exposing restricted detail improperly.
- **FR-TST-008:** Feed lessons/findings into risks, controls, plans, maps, strategy, and management reporting.

### 3.7 ICT third-party risk and Register of Information

- **FR-TPR-001:** Maintain legal entities, providers, ICT services, functions supported, contracts/arrangements, countries/regions, data, locations, criticality, substitutability, and owners.
- **FR-TPR-002:** Record complete subcontractor chains and services/locations/data dependencies with effective periods.
- **FR-TPR-003:** Perform due diligence and ongoing assessment covering security, resilience, audit/access, incident, data, concentration, continuity, financial/operational, compliance, and exit risk.
- **FR-TPR-004:** Assess contracts against approved mandatory provisions; track gaps, amendments, obligations, renewals, notices, SLA, audit rights, termination, and exit.
- **FR-TPR-005:** Monitor provider performance, incidents, service changes, certifications, financial/risk signals, and contractual breaches.
- **FR-TPR-006:** Calculate concentration by provider/group, service, technology, region, function, subcontractor, and substitutability.
- **FR-TPR-007:** Manage exit/transition plans, alternatives, data portability/deletion, dependencies, triggers, costs, tests, and approval.
- **FR-ROI-001:** Generate the applicable Register of Information templates from versioned reconciled data with validation and lineage.
- **FR-ROI-002:** Import/compare prior returns, show row/field differences, completeness, referential integrity, conflicts, and source freshness.
- **FR-ROI-003:** Route data-quality issues to owners, require approval, and retain exact submitted export/acknowledgment.

### 3.8 Scenarios and impact analysis

- **FR-SIM-001:** Define disruption scenarios for provider, region, facility, network, application, data, cyber event, capacity, people, or multiple simultaneous failures.
- **FR-SIM-002:** Traverse approved dependencies and calculate affected functions, customers/markets, tolerances, recovery objectives, alternatives, open risks, controls, plans, tests, and owners.
- **FR-SIM-003:** Show graph/version, assumptions, included/excluded paths, confidence, missing data, and score logic.
- **FR-SIM-004:** Compare alternative mitigations/recovery sequences and save immutable scenario results/decisions.
- **FR-SIM-005:** Convert approved gaps into risks/actions/tests without silently changing source records.

### 3.9 Evidence, reporting, notifications, and APIs

- **FR-EVD-001:** Store/link evidence with source, owner, period, scope, classification, integrity metadata, reviewer, expiry, and control/obligation mapping.
- **FR-EVD-002:** Malware-scan uploads and prevent expired/rejected/out-of-scope evidence from satisfying requirements.
- **FR-REP-001:** Provide posture dashboards for critical functions, tolerances, ICT risks, controls, incidents/reporting, tests/findings, third parties/concentration, ROI quality, actions, exceptions, and deadlines.
- **FR-REP-002:** Generate management-body, committee, audit, authority, service-owner, and third-party reports with as-of date and source links.
- **FR-NOT-001:** Notify/escalate assignments, report deadlines, incidents, tolerance breaches, tests, findings, expiring evidence/contracts/exceptions, connector failures, and data-quality gaps.
- **FR-API-001:** Expose versioned scoped APIs/webhooks for functions/maps, risks/controls, incidents, tests, providers/contracts, ROI, evidence metadata, actions, and reports.
- **FR-AUD-001:** Audit access to restricted data, all changes/decisions, rule/configuration, evidence, classification, report generation/submission, exports, APIs, and integrations.
- **FR-AUD-002:** Apply retention, legal hold, tamper-evidence, and defensible deletion according to record type/authority policy.

## 4. Core data entities

`LegalEntity`, `CompetentAuthority`, `RegulatoryRequirement`, `Policy`, `Control`, `ControlTest`, `ManagementResponsibility`, `CriticalFunction`, `BusinessImpactAnalysis`, `ImpactTolerance`, `Dependency`, `ICTAsset`, `InformationAsset`, `Facility`, `Owner`, `Risk`, `Treatment`, `Exception`, `Plan`, `Backup`, `DetectionControl`, `ICTIncident`, `IncidentClassification`, `RegulatoryReport`, `Communication`, `TestProgram`, `TestCase`, `TestExecution`, `Finding`, `RemediationAction`, `Provider`, `ICTService`, `Contract`, `Subcontractor`, `DueDiligence`, `ExitPlan`, `RegisterOfInformationRecord`, `Scenario`, `Evidence`, `Approval`, `Notification`, and `AuditEvent`.

## 5. Non-functional requirements

- **NFR-001 Availability:** at least 99.9% with crisis/degraded-mode procedures and offline access to approved critical templates/runbooks.
- **NFR-002 Recovery:** approved RTO/RPO, encrypted backups, tested restoration, region/failure-domain recovery, and evidence preservation.
- **NFR-003 Performance:** p95 common reads under 2 seconds; bounded impact analysis under agreed target; large imports/reports asynchronous with progress and retry.
- **NFR-004 Security:** least privilege, entity/field segregation, encryption, secrets rotation, secure SDLC, vulnerability management, penetration testing, and access monitoring.
- **NFR-005 Privacy/confidentiality:** residency, minimization, masking, retention, legal hold, restricted exports, and need-to-know control for incident/test/contract data.
- **NFR-006 Integrity:** versioned rules/templates, referential integrity, reconciled ROI/report totals, immutable submissions/approvals, and no silent partial success.
- **NFR-007 Scale:** horizontal job processing and capacity for agreed entities, assets, dependencies, incidents, tests, providers, contracts, evidence, and historical versions.
- **NFR-008 Observability:** metrics/logs/traces, integration freshness, deadline monitoring, correlation IDs, SLOs, alerts, and runbooks.
- **NFR-009 Accessibility:** WCAG 2.2 AA including accessible alternatives to dependency diagrams.
- **NFR-010 Maintainability:** configurable regulatory content, modular integrations, automated regression, schema/version migration, and tested rollback.

## 6. Implementation backlog

Priority: **P0** mandatory foundation, **P1** production expansion, **P2** advanced analysis.

### Epic DOR-01 — Foundation and governance

- **DOR-001 (P0):** Implement enterprise SSO, RBAC/ABAC, entity/field scopes, segregation of duties, privileged access, and audit.
- **DOR-002 (P0):** Build effective-dated DORA/authority requirement, threshold, deadline, template, workflow, and applicability configuration.
- **DOR-003 (P0):** Manage governance structure, responsibilities, policies, strategy, risk appetite/tolerance, controls, KPIs/KRIs, and review.
- **DOR-004 (P0):** Implement secure evidence, retention, legal hold, immutable decision/submission records, and audit ledger.
- **DOR-005 (P1):** Add regulatory-content impact simulation and reassessment workflow.

### Epic DOR-02 — Critical functions and ICT risk

- **DOR-006 (P0):** Register/approve critical or important functions and owners with criticality rationale.
- **DOR-007 (P0):** Implement BIA, time-horizon impacts, tolerance, RTO/RPO, minimum service, peak/cutoff, and approval.
- **DOR-008 (P0):** Map/reconcile people, facilities, data, applications, infrastructure, locations, providers, and subcontractors.
- **DOR-009 (P0):** Detect mapping gaps, stale ownership, single points, concentration, and recovery/tolerance mismatch.
- **DOR-010 (P0):** Implement ICT risk assessment, controls, treatment, exceptions, acceptance authority, and review.
- **DOR-011 (P1):** Add scheduled owner attestation and historical map comparison.

### Epic DOR-03 — Continuity and incident management

- **DOR-012 (P0):** Manage continuity/response/recovery/backup/crisis-communication plans and test history.
- **DOR-013 (P0):** Track backup coverage, integrity, isolation, restore evidence, recovery capacity, and exceptions.
- **DOR-014 (P0):** Integrate/create ICT incidents with complete chronology, impact, dependencies, response, recovery, and evidence.
- **DOR-015 (P0):** Implement explainable classification/materiality proposals and human confirmation/override.
- **DOR-016 (P0):** Calculate/report deadlines, populate/validate approved templates, route review/approval, and preserve submission/acknowledgment.
- **DOR-017 (P0):** Manage root cause, lessons, corrective actions, control/risk/map/plan updates, and closure.
- **DOR-018 (P1):** Integrate ITSM/SIEM/monitoring and communications channels with idempotent synchronization.

### Epic DOR-04 — Resilience testing

- **DOR-019 (P0):** Build risk-based multi-year/annual test program and critical-system coverage analysis.
- **DOR-020 (P0):** Manage test scope/method/environment/safety/data/independence/approvals/evidence.
- **DOR-021 (P0):** Record execution/results and generate findings with remediation, retest, validation, and closure.
- **DOR-022 (P0):** Feed test outcomes into risks, controls, plans, maps, strategy, and management reporting.
- **DOR-023 (P1):** Support TLPT applicability, scope, tester/authority evidence, remediation summary, and attestation with restricted access.
- **DOR-024 (P1):** Integrate vulnerability, test-management, CI/CD, recovery, and security-testing sources.

### Epic DOR-05 — ICT third parties and ROI

- **DOR-025 (P0):** Build provider/service/contract/function/entity/location/data/criticality/substitutability inventory.
- **DOR-026 (P0):** Manage due diligence, contract requirement gaps, obligations, SLA, incidents, renewals, and monitoring.
- **DOR-027 (P0):** Model subcontractor chains and calculate multi-dimensional concentration exposure.
- **DOR-028 (P0):** Manage exit/transition plans, alternatives, triggers, data portability/deletion, and tests.
- **DOR-029 (P0):** Generate/validate/reconcile current Register of Information templates with lineage and owner workflow.
- **DOR-030 (P0):** Compare prior/current ROI, approve/export, and retain exact submission/acknowledgment.
- **DOR-031 (P1):** Integrate procurement/contract/vendor-risk sources and provider notifications.

### Epic DOR-06 — Scenario and reporting

- **DOR-032 (P1):** Simulate provider/region/facility/network/application/data/cyber/multi-failure scenarios against versioned maps.
- **DOR-033 (P1):** Explain affected functions, tolerances, alternatives, risks, controls, plans, tests, owners, confidence, and gaps.
- **DOR-034 (P0):** Deliver dashboards for posture, functions/tolerances, risks/controls, incidents, tests/findings, third parties/concentration, ROI, and actions.
- **DOR-035 (P0):** Generate management-body/committee/audit/authority packs with as-of date, approvals, and source evidence.
- **DOR-036 (P1):** Provide scoped APIs/webhooks and scheduled notifications/reports.

### Epic DOR-07 — Enterprise hardening

- **DOR-037 (P0):** Implement connector framework, source reconciliation, checkpoints, monitoring, idempotency, and credential rotation.
- **DOR-038 (P0):** Add end-to-end observability, SLOs, deadline alerts, integration freshness, and operational runbooks.
- **DOR-039 (P0):** Complete threat model, privacy/confidentiality review, vulnerability/penetration test, and remediation.
- **DOR-040 (P0):** Load-test maps, imports, reports, evidence, incidents, and concurrent workflows.
- **DOR-041 (P0):** Exercise backup/restore, DR, degraded incident/reporting process, and operational handover.
- **DOR-042 (P0):** Complete WCAG 2.2 AA, migration/reconciliation, legal/configuration validation, and production-readiness acceptance.

## 7. Definition of done

Each story requires approved acceptance criteria; authorization/segregation and immutable-audit tests; effective-date/version regression; error/degraded-mode testing; security/privacy/accessibility review; observability/runbooks; migration/rollback where applicable; and product/control-owner acceptance. Regulatory classifications, deadlines, templates, and reports also require authorized legal/compliance validation.

## 8. Recommended delivery sequence

1. DOR-001–022, DOR-025–030, DOR-034–035, DOR-037–042.
2. DOR-018, DOR-023–024, DOR-031–033, DOR-036 after core data ownership and reporting configuration are approved.
3. Advanced scenario automation only after map, control, incident, test, and ROI data quality are stable.

