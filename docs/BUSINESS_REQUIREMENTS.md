# DORA / Operational Resilience Platform — Business Requirements

**Product:** ResilienceOS — DORA Control Tower  
**Document type:** Business Requirements Document (BRD)  
**Target state:** Production enterprise platform, not the public demonstration  
**Status:** Baseline for discovery, legal validation, estimation, and phased delivery  
**Version:** 1.0 — 3 September 2026

## 1. Executive summary

ResilienceOS enables a financial entity to govern digital operational resilience across critical or important functions, ICT assets, incidents, continuity/recovery, testing, risks, controls, evidence, and ICT third parties. It creates an evidence-backed operational model connecting business impact tolerances to the technology and providers that support regulated services.

The production product must replace the demo's synthetic, static data with secure enterprise persistence, integrations, configurable DORA/authority mappings, end-to-end workflows, the Register of Information, incident reporting support, resilience testing, remediation, management-body reporting, and complete audit history.

The platform supports compliance operations but does not determine legal applicability or replace accountable management, risk, compliance, legal, or competent-authority decisions.

## 2. Problems to solve

1. Critical or important functions are not consistently mapped to processes, people, information assets, applications, infrastructure, locations, and third parties.
2. ICT risk, continuity, incident, testing, vendor, contract, and audit evidence is fragmented across many tools and spreadsheets.
3. Recovery objectives and impact tolerances may not reconcile with actual dependencies, redundancy, capacity, and test results.
4. Incident classification and reporting data is assembled manually under strict time pressure.
5. Resilience tests, findings, remediation, retests, and lessons learned are difficult to track end to end.
6. Third-party and subcontractor chains, concentration, contracts, exit plans, and Register of Information data are incomplete or stale.
7. Management bodies lack a current, explainable view of operational-resilience posture and accepted residual risk.
8. Static compliance evidence does not demonstrate that controls operate continuously or that prior findings were effective.

## 3. Regulatory baseline

Regulation (EU) 2022/2554 (DORA) applies from 17 January 2025 and establishes requirements covering ICT risk management, ICT-related incident management/classification/reporting, digital operational resilience testing, ICT third-party risk, and information sharing. The platform must also support relevant delegated/implementing technical standards and competent-authority instructions as approved, effective-dated configuration.

Requirements, report templates, classification thresholds, timelines, proportionality decisions, competent authorities, and local overlays must be configurable and legally approved. The software must not silently substitute vendor interpretation for the financial entity's obligations.

## 4. Product vision

Create the financial entity's operational-resilience control plane: leaders and practitioners can see which critical services matter, what they depend on, whether tolerances are defensible, how incidents/tests affect risk, what third-party exposure exists, and which evidence supports each conclusion.

## 5. Business objectives and success measures

| Objective | Target measure after rollout |
|---|---|
| Complete service mapping | 100% of designated critical/important functions mapped and owner-attested to supporting ICT/third-party dependencies |
| Align tolerances and recovery | 100% of critical functions have approved impact tolerance, RTO/RPO, BIA, continuity, and tested recovery evidence |
| Improve incident readiness | All major/reportable-candidate incidents assessed using approved rules with deadlines and evidence tracked |
| Strengthen testing | Annual/risk-based test plan covers all in-scope systems; findings tracked to validated closure |
| Complete third-party records | Register of Information passes approved completeness/reconciliation controls |
| Reduce concentration risk | Every material concentration/single point of failure has an owner, decision, treatment, and target date |
| Support governance | Management body receives periodic posture, incidents, tests, third parties, risks, exceptions, and recommendations |
| Improve auditability | Every reported posture/decision reproducible from versioned data, rules, evidence, and approvals |

## 6. Stakeholders and personas

| Persona | Primary need |
|---|---|
| Management body/executive | Risk tolerance, posture, material decisions, exceptions, investment, and accountability |
| Operational resilience/BCM | Critical functions, BIA, tolerances, dependencies, scenarios, continuity, and exercises |
| ICT risk/CISO | ICT risk framework, controls, threats, vulnerabilities, exceptions, and treatment |
| Incident manager/NOC/SOC | Classification, impact, timeline, escalation, reporting, and lessons learned |
| Service/application/infrastructure owner | Dependencies, recovery objectives, controls, tests, risks, and remediation |
| Third-party/procurement/legal | Providers, contracts, services, subcontractors, criticality, monitoring, and exit |
| Test manager/red-team/security testing | Risk-based plan, independence, scope, execution, findings, retest, and attestation |
| Compliance/legal/regulatory reporting | Applicability, templates, deadlines, review, submission evidence, and correspondence |
| Internal audit | Independent evidence, framework review, findings, decisions, and immutable history |
| Data steward/platform administrator | Taxonomy, integrations, quality, ownership, access, and reference data |

## 7. Business scope

### 7.1 In scope

- Governance and ICT risk-management framework, strategy, risk appetite/tolerance, policies, controls, exceptions, and periodic review.
- Critical/important function inventory, BIA, impact tolerances, service maps, ICT assets, information assets, sites, people/teams, and third parties.
- Identification, protection/prevention, detection, response/recovery, backup/restoration, learning/evolution, and communications evidence.
- ICT incident intake, chronology, impact, classification, major/reportable assessment, internal escalation, report preparation/submission tracking, and lessons.
- Risk-based resilience testing program, annual coverage, vulnerability/security/recovery/scenario/end-to-end tests, TLPT applicability/support, findings, remediation, and attestation.
- ICT third-party inventory, contracts, due diligence, monitoring, subcontractor chain, concentration, continuity, termination, exit, and Register of Information.
- Scenario/disruption simulation and service impact analysis.
- Dashboards, management-body packs, regulatory/audit evidence, notifications, APIs, integrations, audit, and records management.

### 7.2 Out of scope for the initial production release

- Replacing CMDB, ITSM, SIEM, GRC, procurement/contract, testing, or document-management systems that remain authoritative.
- Automatically deciding that an incident is legally reportable or submitting to an authority without accountable approval.
- Executing disaster recovery, failover, or vendor termination automatically.
- Claiming compliance based only on document presence or a calculated score.

## 8. Required business capabilities

1. **Governance and framework:** accountability, policy/control obligations, risk tolerance, exceptions, and management review.
2. **Critical function and dependency mapping:** business-to-ICT/provider traceability with ownership, criticality, recovery, and evidence.
3. **ICT risk and control management:** risks, assessments, treatments, KRIs/KPIs, control testing, issues, and residual acceptance.
4. **Incident management/reporting:** integrated record, classification, materiality, timelines, templates, approvals, and follow-up.
5. **Continuity and recovery:** BIA, plans, backups, recovery objectives, crisis communications, tests, and capability evidence.
6. **Resilience testing:** risk-based plan, scope, independent execution, findings, remediation, retest, TLPT support, and attestations.
7. **ICT third-party risk:** full service/contract/subcontractor inventory, due diligence, monitoring, concentration, incidents, exit, and Register of Information.
8. **Scenario intelligence:** calculate the business impact of provider, location, platform, application, data, or process disruption.
9. **Evidence and reporting:** show control effectiveness and historical decisions, not only checklist completion.

## 9. Core business processes

### 9.1 Identify and map critical or important functions

Business owners propose functions and criticality, complete BIA and tolerances, map dependencies and owners, reconcile with authoritative inventories, and obtain approval. Periodic attestation and change/incident/test signals keep the map current.

### 9.2 Manage ICT risk and controls

Owners identify risks from assets, changes, threats, incidents, tests, vendors, and quality gaps; assess inherent/residual risk; assign controls/treatments; collect operating evidence; and route acceptance/escalation according to authority.

### 9.3 Manage and report an ICT incident

An incident is created/imported, linked to affected functions/dependencies, and assessed against approved classification criteria. Teams preserve chronology, impact, response, recovery, communications, evidence, and management escalation. If confirmed reportable, authorized users prepare, validate, approve, submit/record submission, and follow required report stages/deadlines.

### 9.4 Plan and execute resilience tests

The test manager builds risk-based coverage, ensures independence, approves scenarios/safety controls, executes or imports results, records findings, tracks remediation/retest, and updates risks, plans, and management reporting.

### 9.5 Govern an ICT third party

The entity records services/contracts/providers/subcontractors, performs due diligence and criticality assessment, verifies contractual requirements, monitors performance/incidents/concentration, maintains Register of Information data, and tests exit/continuity arrangements.

## 10. Business rules

1. A critical/important function must have accountable ownership, approved criticality, BIA, impact tolerance, dependencies, continuity/recovery objectives, and review date.
2. Every dependency/control/risk/evidence item must have source, owner, status, effective period, and audit history.
3. Platform readiness scores are management indicators, not compliance conclusions; calculations must be explainable and versioned.
4. Incident classification/reportability is proposed by rules but confirmed by authorized accountable roles.
5. Regulatory report deadlines/templates must be effective-dated and tied to the competent authority/entity/incident classification.
6. A test finding closes only after remediation evidence and independent/authorized retest validation.
7. Provider criticality and concentration consider services, functions, substitutability, regions, data, subcontractors, and exit feasibility.
8. Register of Information data must reconcile to approved provider/contract/service/entity sources and expose completeness/conflicts.
9. Exceptions/risk acceptances must be time-bound, authority-limited, supported by rationale/compensating controls, and escalated before expiry.
10. Approved/reported incident, test, risk, and management evidence must be immutable under retention policy.

## 11. Security, privacy, and governance outcomes

- Enterprise SSO/MFA, least privilege, segregation of duties, entity/domain/classification controls, and privileged-access review.
- Encryption, secrets/key management, approved residency, evidence protection, masking, export controls, and tamper-evident audit.
- Sensitive incident, vulnerability, security-test, contract, personal, and regulatory data segregated by need to know.
- Secure integration service accounts, read-only default, scoped write-back, monitoring, and credential rotation.
- Retention, legal hold, defensible deletion, and authority-submission evidence controls.

## 12. Risks and mitigations

| Risk | Required mitigation |
|---|---|
| Checklist compliance without resilience | Link obligations to operating data, tests, incidents, outcomes, and effectiveness |
| Stale dependency maps | Automated discovery, owner attestation, freshness/confidence, change integration |
| Missed reporting deadline | Effective-dated rules, timers, escalation, templates, independent review, fallback procedure |
| Incorrect automated classification | Explainable proposal, evidence, human confirmation, versioned thresholds, audit |
| Incomplete provider chain | Contract/provider reconciliation, subcontractor workflow, data-quality controls |
| Sensitive evidence exposure | Fine-grained access, masking, encryption, restricted exports, access monitoring |
| Platform unavailable during crisis | DR, degraded/manual process, offline report/runbook access, tested fallback |

## 13. Business acceptance criteria

1. Every designated critical/important function is traceable to dependencies, owners, risks, controls, tolerances, plans, tests, incidents, and third parties.
2. A reportable-candidate incident can be managed from detection through classification, approval, reporting evidence, recovery, lessons, and action closure.
3. The annual/risk-based test program demonstrates coverage, independence, results, findings, remediation, retest, and management reporting.
4. Register of Information export is generated from reconciled, approved, effective-dated provider/contract/service/entity data.
5. A provider/platform/location disruption scenario identifies affected functions, tolerances, alternatives, risks, owners, and evidence with explainable confidence.
6. Access, audit, resilience, performance, privacy, security, backup/recovery, and degraded-mode tests meet approved targets.

## 14. Authoritative references

- [EUR-Lex — Regulation (EU) 2022/2554 (DORA)](https://eur-lex.europa.eu/eli/reg/2022/2554/oj)
- [European Banking Authority — DORA policy products](https://www.eba.europa.eu/regulation-and-policy/operational-resilience)
- [European Supervisory Authorities — DORA information hub](https://www.esas-joint-committee.europa.eu/activities/digital-operational-resilience-act)

The implementation must use approved current delegated/implementing acts, authority templates, and institution-specific legal interpretation.

