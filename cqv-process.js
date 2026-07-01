/* cqv-process.js  (auto-split from index.html)  2 consts */
const PROCESS = {
  requal: {"name": "Requalification & Periodic Review", "sub": "Keeping a system in a validated state over its life", "desc": "Qualification proves a system is fit for use on day one. Requalification and periodic review are how it stays proven. Periodic review is the scheduled, risk-based assessment that looks at everything that happened since the last review, changes, deviations, maintenance, calibration, and performance trends, and decides whether the system is still in a validated state. Requalification is the re-execution of qualification tests when that review, a significant change, or observed drift says it is needed. EU GMP Annex 15 gives requalification its own chapter and requires systems to be evaluated at an appropriate frequency to confirm they remain in a state of control. Validation is a lifecycle, not a one-time event.", "accent": "#b57fd0", "icon": "requal", "sections": [{"title": "Two linked activities, not the same thing", "body": "Periodic review and requalification are often said in one breath, but they are different jobs. The review is the assessment that decides; the requalification is the testing that follows if the decision calls for it. Keeping them distinct is what makes the program defensible.", "cols": [{"kind": "pro", "h": "Periodic review", "items": ["A scheduled, documented assessment of a system's history since the last review.", "Looks at changes, deviations and CAPAs, calibration and maintenance, excursions, and performance trends (plus access and audit trails for computerised systems).", "Ends in a clear decision: validated state maintained, partial requalification needed, or full revalidation needed.", "Does not necessarily involve re-testing; it decides whether re-testing is warranted."]}, {"kind": "con", "h": "Requalification", "items": ["The re-execution of qualification tests (all or a targeted subset) against approved acceptance criteria.", "Confirms the system still performs as it did when first qualified.", "Triggered by the periodic review, by a significant change, or by drift seen in the data.", "Requalification of equipment is the parallel to revalidation of a process; the same lifecycle idea, applied to the system."]}], "note": "A useful split: periodic review is a paper-and-data exercise that asks 'is anything telling us this drifted?'; requalification is the physical re-test that answers 'prove it still meets spec.'"}, {"title": "What Annex 15 requires", "body": "The 2015 revision of Annex 15 gave requalification its own section. The wording sets two obligations and deliberately does not set a number.", "bullets": ["Equipment, facilities, utilities, and systems should be evaluated at an appropriate frequency to confirm they remain in a state of control.", "Where requalification is performed at a set time period, that period must be justified and the criteria for evaluation defined.", "There is no regulatory fixed interval. The frequency is a risk-based decision the site makes and documents.", "Undocumented maintenance undermines a requalification: the system's technical history is what the review interprets, so gaps in that history invalidate the conclusion."], "note": "Some sterile-area tests do carry specific expected frequencies from other guidance (for example, the FDA aseptic guidance expects HEPA filters in an ISO 5 zone to be tested twice a year). Those are the exception; most intervals are set by risk, not by rule."}, {"title": "What triggers requalification", "body": "Requalification is driven by events and by time, both filtered through risk. The change-control system is the most common entry point.", "table": {"cols": ["Trigger", "Example", "Typical response"], "rows": [["Significant change", "Component swapped for a different specification, relocation, major repair, control-system modification, or a change to operating parameters.", "Change-control assessment decides the scope of requalification (see the Change Control page)."], ["Drift in the data", "Periodic-review trends show the system moving toward its limits; repeated excursions on a chamber.", "Targeted requalification of the affected function, or tighter controls."], ["Justified time interval", "A risk-based periodic requalification cycle for a critical system.", "Re-execute the defined test subset; confirm still in a state of control."], ["End of validated life / cumulative small changes", "Many minor repairs and tweaks that individually seemed irrelevant.", "Review the aggregate impact; requalify or revalidate as the assessment directs."]]}}, {"title": "How the periodic review is run", "steps": ["Schedule the review on a risk-based frequency (more often for higher-risk or newly commissioned systems, less often for simple stable ones).", "Gather the history since the last review: change controls, deviations, OOS/OOT events, CAPAs, calibration and maintenance records, alarms and excursions, and for computerised systems the access reviews and audit-trail checks.", "Trend it, do not just list it. The point is to catch recurrence and drift, not to tick a box that events occurred.", "Assess the aggregate impact on the validated state, including small changes that add up.", "Reach a documented decision: validated state maintained with no further action, partial requalification of specific functions, or full revalidation.", "Feed the outcome back: update alert and action levels, maintenance intervals, and the requalification plan as needed."], "note": "The review must end with an explicit decision statement. A periodic review completed as a checklist with no real analysis of changes, trends, and data integrity is one of the most common weak spots inspectors probe."}, {"title": "Where it connects, and common pitfalls", "bullets": ["The VMP sets the requalification and periodic-review policy; the per-system plans carry the intervals and criteria (see the VMP page).", "Change control is the main trigger and must include a formal requalification-assessment step (see the Change Control page).", "Deviations and their trends are core review inputs; a pattern of excursions is a signal, not just a log (see the Deviations & CAPA page).", "The most serious mistake is a VMP that promises one thing ('requalify every two years') and a practice that does another ('when we have time'). That gap is a reliable inspection finding.", "Do not let the review become a formality: no trending, weak conclusions, missing changes, or ignored data-integrity checks all hollow it out.", "Justify the frequency. A high-risk system reviewed too rarely, or any interval with no documented rationale, will be challenged."]}], "refs": [{"label": "EU GMP Annex 15 - Qualification and Validation (2015), requalification section", "link": "https://health.ec.europa.eu/document/download/7c6c5b3c-4902-46ea-b7ab-7608682fb68d_en?filename=2015-10_annex15.pdf"}, {"label": "EU GMP Annex 11 - Computerised Systems (periodic evaluation)", "link": "https://health.ec.europa.eu/publications/eudralex-volume-4-annex-11-computerised-systems_en"}, {"label": "FDA - Process Validation: General Principles and Practices (2011), Stage 3 CPV", "link": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices"}, {"label": "ICH Q10 - Pharmaceutical Quality System (ongoing state of control)", "link": "https://www.ich.org/page/quality-guidelines"}], "example": {"label": "What a periodic review outcome looks like", "docTitle": "Periodic review record extract (illustrative - WFI system)", "meta": [["Document", "Periodic Review PR-WFI-01"], ["System", "Water for Injection loop"], ["Period reviewed", "Since last review (risk-based interval)"], ["Owner / oversight", "System owner / Engineering, with QA"]], "blocks": [{"h": "Inputs assessed", "cols": ["Input", "Finding", "Signal?"], "rows": [["Change controls", "One sanitisation-frequency change, assessed and approved", "Minor; no requal needed"], ["Deviations / excursions", "Two TOC alerts, both investigated, no action-limit breach", "Trend flat; no drift"], ["Calibration / maintenance", "All on schedule and documented", "History intact"], ["Alert / action levels", "Reviewed against a full year of data", "Levels remain appropriate"]]}, {"h": "Decision", "text": "The WFI system remained in a state of control over the review period. Changes were controlled, deviations did not trend toward limits, and the technical history is complete. Decision: validated state maintained; no requalification required this cycle. Alert and action levels confirmed; next review scheduled at the justified risk-based interval."}, {"h": "If the decision had gone the other way", "text": "Had the TOC trend been climbing toward the action level, or had an undocumented repair been found, the outcome would instead have been partial requalification of the affected function (or revalidation), with the scope set by a change-control and risk assessment rather than assumed."}]}},
  rtm: {"name": "Requirements Traceability Matrix (RTM)", "sub": "The thread from every requirement to the test that proves it", "desc": "A table that links each requirement to where it is designed, where it is tested, and the result, so that nothing specified is left unverified and nothing is tested that was never required. It runs both ways: forward from a user requirement down to the qualification test that proves it, and backward from a test or design element up to the requirement that justifies it. In a qualification package it maps the URS through the FS and DS to the IQ, OQ, and PQ tests, and it is the thread an inspector follows to confirm the requirements were met. The best practice is to build it live as the work proceeds, not assemble it afterward.", "accent": "#e69a5a", "icon": "rtm", "sections": [{"title": "What it does", "body": "The RTM answers two questions that a pile of protocols cannot on their own: was every requirement tested, and does every test trace back to a requirement? It links the specification chain to the verification chain so coverage is visible in one view. There is no single mandated format; what matters is that the traceability is complete and runs in both directions.", "cols": [{"kind": "pro", "h": "Forward traceability", "items": ["Starts at a requirement (a URS line) and follows it down to the test that proves it.", "Catches requirements with no linked test: a coverage gap, something specified but never verified.", "Confirms that everything the user asked for was designed and tested."]}, {"kind": "con", "h": "Backward traceability", "items": ["Starts at a test or design element and follows it up to the requirement that justifies it.", "Catches tests or features that trace to no requirement: usually scope creep, effort spent on the unasked-for.", "Confirms nothing was built or tested without a documented reason."]}], "note": "Doing both at once is bidirectional traceability, the standard for a regulated package. A one-directional matrix only tells half the story."}, {"title": "How it maps the qualification chain", "body": "In a CQV package the RTM is the table that ties the left arm of the V-model to the right. Each requirement is carried across to its specification, its design, and the qualification phase that verifies it. This is the same DS-to-IQ, FS-to-OQ, URS-to-PQ pairing the spec and qualification pages describe, made explicit row by row.", "table": {"cols": ["Trace element", "Where it comes from", "Verified by"], "rows": [["User requirement", "URS (what the user needs)", "PQ (performance in real use)"], ["Functional requirement", "FS (what the system must do)", "OQ (functions across the operating range)"], ["Design element", "DS (how it is built and installed)", "IQ (installed per the design)"], ["Risk control / critical aspect", "Risk assessment, critical-aspect register", "The qualification test that challenges it"], ["Result", "Protocol execution", "Pass / fail, with a reference to the evidence"]]}}, {"title": "What a row carries", "body": "A workable RTM row holds enough to follow the thread without opening every document. Sites design their own columns; a typical set is below.", "bullets": ["A unique requirement ID and a short description.", "The source of the requirement (which URS or risk-assessment line it came from) for backward tracing.", "The specification and design references that address it (FS, DS).", "The protocol and test-case reference that verifies it (IQ, OQ, or PQ step).", "The result: pass or fail, with a link to the executed evidence.", "The status, and where relevant a link to any deviation raised against that test."], "note": "Add an execution-status and deviation column and the RTM doubles as a live progress view during execution: what is tested, what passed, and what is still open."}, {"title": "Why it earns its place", "bullets": ["Coverage: forward tracing proves every requirement has a test. A requirement with no test is the gap the matrix exists to catch.", "Scope control: backward tracing proves every test has a requirement. A test with no requirement is effort outside the agreed scope.", "Impact analysis on change: when a requirement changes, the RTM shows every design element, test, and result that has to be reassessed (see the Change Control page).", "Audit readiness: an inspector asks where a requirement came from and how you know it was met. The RTM answers both in one line, which is why it is central to the summary report (see the VSR page).", "It is the spine of the whole package: the VMP references it, the protocols populate it, and the VSR concludes against it."]}, {"title": "Getting it right, and common pitfalls", "bullets": ["Build it live. A matrix assembled after execution to make the package look complete is a common finding and a weak control. Populate it as requirements, specs, and tests are written.", "Keep it bidirectional. A forward-only matrix misses scope creep; a backward-only one misses coverage gaps.", "Trace to the test step, not just the protocol. 'OQ-001' is not traceability; the specific OQ step that proves the requirement is.", "Keep it current through change. An RTM that no longer matches the specs or the executed tests points to documentation that needs correcting, not a matrix to be quietly patched.", "Every requirement gets a row. An untraced requirement is either untested or should not have been a requirement; either way the matrix should force the question.", "For computerised systems, the live RTM is expected. Retroactively assembling it is a frequent inspection observation (see the CSV and Validation Software pages)."]}], "refs": [{"label": "EU GMP Annex 15 - Qualification and Validation (2015)", "link": "https://health.ec.europa.eu/document/download/7c6c5b3c-4902-46ea-b7ab-7608682fb68d_en?filename=2015-10_annex15.pdf"}, {"label": "ISPE GAMP 5 (2nd ed) - traceability across the specification and verification chain", "link": "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition"}, {"label": "EU GMP Annex 11 - Computerised Systems", "link": "https://health.ec.europa.eu/publications/eudralex-volume-4-annex-11-computerised-systems_en"}, {"label": "FDA 21 CFR Part 11 - Electronic Records; Electronic Signatures", "link": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11"}], "example": {"label": "What an RTM extract looks like", "docTitle": "Requirements Traceability Matrix extract (illustrative - stability chamber SC-01)", "meta": [["Document", "RTM-SC-01"], ["System", "Stability chamber SC-01 (URS-EQ-014)"], ["Trace", "Bidirectional: URS <-> FS/DS <-> IQ/OQ/PQ"], ["Status", "Live (updated through execution)"]], "blocks": [{"h": "Trace rows", "cols": ["Req ID", "Requirement", "Spec/Design", "Verified by", "Result"], "rows": [["URS-014-01", "Maintain 25 C +/- 2 C across the working volume", "FS-03 / DS-07", "OQ-SC-01 step 4 (empty mapping)", "Pass"], ["URS-014-02", "Maintain 60 %RH +/- 5 %RH", "FS-04 / DS-08", "OQ-SC-01 step 5 (humidity mapping)", "Pass"], ["URS-014-03", "Alarm on excursion beyond limits", "FS-07 / DS-11", "OQ-SC-01 step 8 (alarm challenge)", "Pass"], ["URS-014-04", "Hold uniformity under a representative load", "FS-03 / DS-07", "PQ-SC-01 step 3 (loaded study)", "Pass"]]}, {"h": "Reading the matrix", "text": "Forward: every URS line has a verifying test, so coverage is complete. Backward: every listed test traces to a URS line, so nothing outside scope was tested. URS-014-01 links FS-03 and DS-07 to OQ step 4; if the temperature requirement changed, those specs and that test would all be flagged for reassessment. The VSR concludes against this matrix, confirming all requirements were met."}]}},
  vsr: {"name": "Validation Summary Report (VSR)", "sub": "The closeout that declares a system validated and fit for use", "desc": "The report that draws a line under a qualification or validation effort. It summarises what was planned, what was executed, every deviation and how it was resolved, confirms the requirements were met, and ends with a formal statement that the system is validated and released for its intended use. It is high-level: it references the protocols, results, and records rather than reprinting them, and it is what an inspector reads to see the whole exercise and its conclusion in one place. If the Validation Master Plan is the plan at the start, the VSR is the evidence-backed closeout at the end.", "accent": "#5ec98f", "icon": "vsr", "sections": [{"title": "What it is, and where it sits", "body": "A VSR is the summary-and-conclusion document for a validation exercise. It brings together everything produced across the lifecycle, presents the outcome, and makes a release recommendation for approval. It closes a single system or project; a VMP governs the whole program. The thread runs plan to protocols to results to report: the VMP scopes it, the URS/FS/DS specify it, the IQ/OQ/PQ protocols test it, and the VSR ties the executed evidence back to the requirements and declares the result.", "note": "Names vary: Validation Summary Report, Validation Report, Summary Report, VSR, VR, SR. For a purely computerised system it is often paired with a Validation Plan as VP and VSR. For equipment it may summarise a DQ/IQ/OQ/PQ set. The function is the same: summarise, conclude, and release."}, {"title": "What goes in it", "body": "Published VSR templates converge on a common structure. Keep it high-level; the detail lives in the protocols and records the VSR points to.", "table": {"cols": ["Section", "What it states"], "rows": [["Executive summary", "A concise overview of the exercise and its outcome, for readers who will not go into the detail."], ["Purpose and scope", "What system was validated, what was in and out of scope, and the applicable regulations and procedures."], ["Validation approach", "The methodology and risk basis used, referencing the VMP or validation plan the work followed."], ["Deliverables and protocols executed", "The list of protocols (DQ/IQ/OQ/PQ, or the CSV set) with their execution status and pass/fail outcome."], ["Deviations and their resolution", "Every deviation and discrepancy encountered, its investigation, and its final disposition."], ["Traceability", "Confirmation that the requirements were tested and met, referencing the Requirements Traceability Matrix."], ["Conclusion and release statement", "The formal statement that acceptance criteria were met, the system is fit for use, and it is released for its intended purpose."], ["Approvals", "Signatures of the responsible roles: typically the validation lead, the system or process owner, and QA."]]}}, {"title": "Deviations are the part that gets read", "body": "The section that carries the most weight is the handling of deviations. A VSR that reports a clean run is easy; the test of the document is how it presents what did not go to plan. Some sites capture this in a dedicated Deviation Summary Report referenced by the VSR; either way the content is the same.", "bullets": ["Every deviation appears with its cause, the investigation, and its disposition, not just a count.", "For each one the report reaches a conclusion on whether the data is still valid or the affected testing had to be repeated (see the Deviations & CAPA page, the execution-discrepancy section).", "Open items are not hidden. A conditional pass carrying a punch-list item must show the item and its closure plan, and genuinely open items block release (see the Commissioning and FAT pages).", "Unresolved critical deviations mean the system is not released. The release statement is earned by the evidence, not assumed."], "note": "The cardinal rule from protocol execution carries through to the report: an acceptance criterion is never relaxed after the fact to turn a failing result into a pass. A deviation that could not be resolved is reported as such."}, {"title": "The release statement", "body": "The VSR ends with the statement that actually lets the system be used. It confirms that all qualification activities were performed per the approved protocols, that the acceptance criteria were met, that the system complies with the applicable requirements, and that on approval of the report the system is released for its intended use. That statement, once the report is approved by the responsible roles, is the authorisation to move the system into routine GMP use.", "note": "This is the point of the whole document. Everything above it exists to support a defensible, evidence-backed release decision. Approval of the VSR is the gate between qualification and routine operation."}, {"title": "Getting it right, and common pitfalls", "bullets": ["Keep it a summary. A VSR that reprints every test result buries the conclusion. Summarise outcomes, reference the detail, state the result.", "Make the traceability real. The report should let a reader follow a requirement from the URS to the test that proved it to the trace matrix entry. A VSR that asserts success without that thread is weak.", "Do not close over open deviations. Releasing a system while a critical deviation is unresolved is a serious finding; the report must reflect the true state.", "Approve at the right level. The release statement needs the signatures that carry the authority to put the system into use, QA among them.", "Write it against the plan. The VSR should answer the VMP or validation plan point for point: what was planned, what happened, and the conclusion. A report that does not map back to its plan leaves gaps.", "One system, one clear conclusion. If several systems are summarised together, each still needs an unambiguous released or not-released outcome."]}], "refs": [{"label": "EU GMP Annex 15 - Qualification and Validation (2015)", "link": "https://health.ec.europa.eu/document/download/7c6c5b3c-4902-46ea-b7ab-7608682fb68d_en?filename=2015-10_annex15.pdf"}, {"label": "FDA - Process Validation: General Principles and Practices (2011)", "link": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices"}, {"label": "ISPE GAMP 5 (2nd ed) - Validation Plan / Summary Report for computerised systems", "link": "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition"}, {"label": "EU GMP Annex 11 - Computerised Systems", "link": "https://health.ec.europa.eu/publications/eudralex-volume-4-annex-11-computerised-systems_en"}], "example": {"label": "What a VSR extract looks like", "docTitle": "Validation Summary Report extract (illustrative - a stability chamber, SC-01)", "meta": [["Document", "Validation Summary Report VSR-SC-01"], ["System", "Stability chamber SC-01 (URS-EQ-014)"], ["Plan reference", "Site VMP; protocols DQ/IQ/OQ/PQ-SC-01"], ["Approval", "Validation Lead, Equipment Owner, QA"]], "blocks": [{"h": "Protocols executed", "cols": ["Protocol", "Status", "Outcome"], "rows": [["IQ-SC-01", "Executed", "Pass"], ["OQ-SC-01", "Executed", "Pass (1 deviation, resolved)"], ["PQ-SC-01", "Executed", "Pass"]]}, {"h": "Deviations and disposition", "cols": ["Ref", "Description", "Disposition"], "rows": [["DEV-01", "OQ humidity uniformity exceeded the limit at one sensor before airflow balancing", "Root cause corrected (balancing), affected test re-executed and passed; data valid"], ["PL-01", "Minor labelling discrepancy noted at FAT", "Punch-list item closed before PQ; no impact on qualification"]]}, {"h": "Traceability", "text": "All URS requirements for SC-01 were traced to a qualification test and confirmed met, per the Requirements Traceability Matrix (RTM-SC-01). No requirement was left untested."}, {"h": "Conclusion and release", "text": "All qualification activities were performed per the approved protocols and met their acceptance criteria. The one deviation was investigated and resolved with the affected test re-executed. SC-01 meets its URS and, on approval of this report, is released for its intended use in GMP stability storage. Periodic requalification applies per the site program."}]}},
  vmp: {"name": "Validation Master Plan (VMP)", "sub": "The governing plan for the whole validation program", "desc": "The top-level document that sets out how a site runs qualification and validation: what is in scope, the risk-based approach, who is responsible, what gets produced, and on what schedule. It does not test anything itself. It is the map that every protocol, report, and qualification hangs from, and the first document an inspector asks for to see whether the program is organised and under control. EU GMP Annex 15 requires the key elements of the site programme to be captured in a VMP or equivalent document. Some sites split a Qualification Master Plan (equipment/facilities/utilities) from a broader VMP (adding process, cleaning, method, and computer validation); the requirements apply the same way to both.", "accent": "#c7923f", "icon": "vmp", "sections": [{"title": "What it is, and what it is not", "body": "A VMP is a summary and a strategy, not a protocol. It states what the site will validate, why, how, by whom, and when, and it points to the detailed documents rather than repeating them. Kept short and current, it is the single place a reviewer sees the whole program at a glance. Let it swell into a document nobody opens and it stops doing its job.", "cols": [{"kind": "pro", "h": "A VMP does", "items": ["Define the scope: the facilities, utilities, systems, equipment, processes, cleaning, methods, and computer systems that need validating.", "State the risk-based approach and the acceptance philosophy up front.", "Fix roles and responsibilities across Engineering, Production, QC, and QA.", "List the deliverables and the schedule, usually as a matrix, and give the current status of each item.", "Reference the SOPs, policies, and documents that govern how the work is done."]}, {"kind": "con", "h": "A VMP does not", "items": ["Contain the actual test steps or acceptance limits (those live in the protocols).", "Record results or evidence (that is the protocol execution and the summary report).", "Replace the URS, the risk assessment, or any qualification document.", "Get written once and shelved: it is a living document, reviewed and revised as the program moves.", "Need to be a single file for a whole company; large sites use a site VMP with sub-plans (a QMP, a CSV master plan, and so on)."]}]}, {"title": "Why it exists (the regulatory basis)", "body": "The VMP is where the regulations expect the program to be defined. EU GMP Annex 15 section 1.4 states that the key elements of the site qualification and validation programme should be clearly defined and documented in a validation master plan or equivalent. Section 1.5 then lists what that document should include or reference. PIC/S PI 006 gives the detailed recommendation on VMP content. In the US the requirement is indirect: process validation is mandated by the Food, Drug, and Cosmetic Act and 21 CFR 210/211, and FDA expects a planned, documented program, which the VMP provides. ICH Q10 frames the whole thing as part of the Pharmaceutical Quality System.", "note": "There is no single global 'VMP' format. Annex 15 asks for the elements to be defined in a VMP or equivalent; the structure is the site's to design, as long as the essential content is there and it is approved by authorised personnel."}, {"title": "What Annex 15 says it must include or reference", "body": "Annex 15 section 1.5 sets the minimum content. A VMP should define the qualification and validation system and include or reference information on at least the following. Cross-references to existing documents are allowed, so a VMP can point to a Site Master File, SOPs, and policies rather than repeat them.", "table": {"cols": ["Annex 15 element", "What goes here"], "rows": [["Validation policy", "The site's stated commitment and overall approach to qualification and validation."], ["Organisational structure", "Roles and responsibilities for validation activities: who authors, reviews, executes, and approves."], ["Summary of facilities, equipment, systems, processes", "An inventory of what is on site and its current qualification / validation status."], ["Documentation format", "The format used for protocols and reports, and how they are controlled."], ["Planning and scheduling", "The programme of activities, usually a matrix or Gantt, with priorities."], ["Change control and deviation management", "How changes and deviations affecting validation are handled (links to the change and deviation systems)."], ["Guidance on acceptance criteria", "The general basis for setting and approving acceptance criteria."]]}}, {"title": "A typical VMP structure", "body": "Real site VMPs converge on a common table of contents. This is a representative structure, not a mandated one; scale it to the site and drop sections that do not apply. Items marked essential map to the Annex 15 section 1.5 list above.", "steps": ["Introduction and validation policy: purpose, the site's commitment, approval signatures.", "Scope: what is covered and, just as important, what is excluded and why (a documented rationale for every inclusion and exclusion).", "Organisation and responsibilities: the departments and roles, often with an org chart and a responsibility matrix.", "Site and process description: the facility, the utilities, the systems, and the products and processes made there.", "Validation approach: the risk-based methodology (QRM, impact and criticality, or critical aspects) that decides how much each item gets.", "Qualification: the URS -> DQ -> FAT/SAT -> IQ -> OQ -> PQ chain and the criteria for which systems get qualified.", "The other validation streams: process validation, cleaning validation, analytical method validation, computer system validation, plus utilities, temperature mapping, and transport as applicable.", "Acceptance criteria: the general basis for setting and approving limits.", "Documentation and matrix: the deliverables list with current status, and the schedule.", "Change control, deviations, and revalidation: how the program stays in a state of control over time.", "Supporting programs and references: calibration, preventive maintenance, training, and the governing SOPs."], "note": "The validation matrix (systems down one axis, deliverables and status across the other) is the working heart of most VMPs. It is where the scope, the schedule, and the current state of the program are visible in one view."}, {"title": "How the VMP sits above everything else", "body": "The VMP is the parent document. The lifecycle documents this app covers are its children: the VMP names them, sets their approach, and schedules them; they carry the detail and the evidence.", "bullets": ["The VMP scopes and schedules; the URS, FS, and DS specify; the IQ, OQ, and PQ protocols test; the summary report closes each one out.", "The risk and impact work (see the Risk and Impact & Criticality pages) feeds the VMP's approach section and decides what makes the scope.", "Change control and deviation handling (see those pages) are named in the VMP and keep the program current after the initial pass.", "Requalification and periodic review keep systems in a validated state; the VMP sets the policy, the per-system plans carry the intervals.", "For computerised systems the VMP points to GAMP 5 and the CSV approach; for analytical instruments, to USP <1058>. It matches the framework to the system type rather than forcing one model onto everything."]}, {"title": "Getting it right, and common pitfalls", "bullets": ["Keep it lean. Annex 15 describes the content as brief, concise, and clear. A VMP so large that staff never open it has failed its purpose.", "Justify the scope both ways. The rationale for excluding a system is as important as the list of what is included, and it must be risk-based and defensible.", "Keep the status current. A matrix that no longer reflects what has been qualified is a classic inspection finding; the VMP is only useful if it is true.", "Approve it at the right level. Annex 15 expects the VMP to be approved by authorised personnel; QA ownership and management sign-off signal real commitment.", "Reference, do not repeat. Point to SOPs, the Site Master File, and policies. Duplication is how a VMP goes stale in two places at once.", "Split when it helps. Large or complex sites use a site VMP with focused sub-plans (a QMP for equipment, a CSV master plan, a cleaning validation master plan). Clear cross-referencing is then mandatory."]}], "refs": [{"label": "EU GMP Annex 15 - Qualification and Validation (2015), sec 1.4-1.5", "link": "https://health.ec.europa.eu/document/download/7c6c5b3c-4902-46ea-b7ab-7608682fb68d_en?filename=2015-10_annex15.pdf"}, {"label": "PIC/S PI 006 - Recommendations on Validation Master Plan, IQ/OQ, Process & Cleaning Validation", "link": "https://picscheme.org/en/publications"}, {"label": "ICH Q10 - Pharmaceutical Quality System", "link": "https://www.ich.org/page/quality-guidelines"}, {"label": "FDA - Process Validation: General Principles and Practices (2011)", "link": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices"}], "example": {"label": "What a VMP extract looks like", "docTitle": "Validation Master Plan extract (illustrative - a small sterile site)", "meta": [["Document", "Site Validation Master Plan"], ["Owner / approval", "QA (author), Validation Lead (review), Head of Quality (approve)"], ["Basis", "EU GMP Annex 15; PIC/S PI 006"], ["Review", "At least annually, or on significant change"]], "blocks": [{"h": "Scope: in and out (with rationale)", "cols": ["Item", "In scope?", "Rationale"], "rows": [["WFI system, autoclave, filling line, Grade A/B HVAC", "In", "Direct impact on sterile product quality; full qualification"], ["Process validation, cleaning validation, CSV of the MES", "In", "Required for the products and systems on site"], ["Bench pH meters, gauges, general-area HVAC", "Out (this VMP)", "Covered by the calibration program / no product-quality impact; documented exclusion"]]}, {"h": "Validation matrix (deliverables and status)", "cols": ["System", "URS", "IQ", "OQ", "PQ", "Status"], "rows": [["WFI system", "Done", "Done", "Done", "Phase 3 (in progress)", "Ongoing (3-phase PQ)"], ["Autoclave (SC-lot)", "Done", "Done", "Done", "Approved", "Qualified"], ["Filling line", "Done", "Done", "In progress", "Planned Q3", "In qualification"]]}, {"h": "Responsibilities (extract)", "cols": ["Activity", "Owner"], "rows": [["Author and maintain the VMP; approve protocols for quality", "QA"], ["Generate and execute qualification protocols; engineering content", "Validation / Engineering"], ["Provide process knowledge and operate systems under test", "Production"]]}, {"h": "Change control and revalidation (statement)", "text": "Changes to validated systems are handled through the site change control procedure; the impact on validated status is assessed and the need for and extent of requalification is decided on risk. Periodic review confirms systems remain in a validated state. This VMP is reviewed at least annually and revised on significant change, and the matrix status is kept current."}]}},
  impact: {"name": "Impact & Criticality", "sub": "Scoping what gets qualified", "desc": "The classification step that decides how much qualification a system and its parts actually need, before any protocol is written. Two linked questions: does this system affect product quality (system impact), and within a system that does, which components actually matter (component criticality)? The answers size the qualification effort. This page covers the legacy ISPE Baseline Guide 5 (1st ed) impact and criticality model, the modern ASTM E2500 / ISPE BG5 (2nd ed) critical-aspects model, and how to run the assessment. See also the Risk page (the QRM engine behind these calls) and the BG5 page (where classification sits inside the integrated C&Q process).", "accent": "#e0935a", "icon": "verify", "sections": [{"title": "What it decides", "body": "Before you size IQ/OQ/PQ you decide how much qualification each system and component needs. Two questions do the scoping. System impact: does the system have a bearing on product quality? Component criticality: within a system that does, which parts actually drive or prove a quality attribute? Everything downstream rides on these answers - the depth of the V-model, the size of the protocol set, and how much you can leverage from commissioning and good engineering.", "note": "This is upstream of qualification, not part of it. The Risk page is the quality risk management engine that supports these calls (ICH Q9). The BG5 page explains where system classification fits in the integrated C&Q workflow. This page is the practical assessment itself, and the bridge between the older impact model and the newer critical-aspects model."}, {"title": "System impact: Direct, Indirect, No-Impact", "body": "The legacy ISPE Baseline Guide 5 (1st ed) model, still in wide use as a first triage. Each system is classified into one of three buckets, which sets how much rigor it gets.", "table": {"cols": ["Class", "Definition", "What it gets", "Example"], "rows": [["Direct Impact", "Expected to have a direct effect on product quality (a CQA).", "Full C&Q (qualified).", "Sterilizer, bioreactor, WFI system, HVAC serving a Grade A/B area."], ["Indirect Impact", "Supports a direct system but does not itself contact or set product quality; a failure shows up in the controlled parameter, not the product.", "Good Engineering Practice and commissioning, not formal qualification.", "Plant steam to a jacket, chilled water feeding a jacket, raw-water supply to a CIP skid."], ["No Impact", "No bearing on product quality at all.", "Good Engineering Practice only.", "Office or general-area HVAC, shop compressed air for tools."]]}}, {"title": "Component criticality: Critical vs Non-Critical", "body": "Within a Direct Impact system you do not qualify every bolt. You classify components and functions. A component is critical when its operation, product contact, control action, alarm, or failure can affect a CQA or CPP, or the data that proves one. Critical components get qualified and, where they measure, calibrated; non-critical components get good engineering.", "cols": [{"h": "Critical if it...", "items": ["Contacts the product (a wetted surface, 316L, a gasket).", "Controls a critical process parameter (a temperature, pH, or pressure loop).", "Measures or records a parameter used to prove quality (a chamber probe, a conductivity meter).", "Provides an alarm or interlock that protects the product.", "Holds the data that demonstrates a critical aspect was met."]}, {"h": "Non-critical if it...", "items": ["Has no product contact and no quality role (a support frame, a cosmetic panel).", "Is used only for maintenance or local indication (a local gauge read by a technician).", "Provides operator convenience or safety only, with no product-quality bearing (a sight-glass light).", "Can fail without affecting a CQA, CPP, or the record of either."]}]}, {"title": "The legacy model vs the modern model", "body": "Two routes to the same destination: where does qualification effort go? The older impact and criticality model and the newer critical-aspects model answer the same question with different language, and many sites run a hybrid.", "cols": [{"h": "Legacy (BG5 1st ed)", "items": ["System Impact Assessment classifies systems Direct / Indirect / No-Impact.", "For Direct systems, a Component Criticality Assessment marks each component critical or non-critical.", "Qualify the direct systems and their critical components; leave the rest to GEP.", "Deliverables: the SIA and CCA documents."]}, {"h": "Modern (E2500 / BG5 2nd ed)", "items": ["A system-level risk assessment grounded in product and process knowledge (QbD + ICH Q9).", "Identify Critical Aspects: the functions and features that ensure product quality and patient safety.", "The design features that deliver them are Critical Design Elements (CDEs), and those get verified.", "Impact language is de-emphasized; risk and critical aspects do the scoping."]}], "note": "The bridge: a Direct Impact system is one that has critical aspects; a critical component is one that delivers a Critical Design Element. The calls line up. See the BG5 page (Critical Aspects vs Critical Design Elements) and the E2500 page (Critical Aspects) for the modern side."}, {"title": "How to run the assessment", "steps": ["Define the system boundaries and gather the product and process knowledge (the CQAs and CPPs at stake).", "Classify each system: Direct, Indirect, or No-Impact (or, in the modern model, run the system risk assessment).", "For Direct systems, assess each component and function: critical or non-critical (or identify the Critical Aspects and the CDEs that deliver them).", "Document the rationale for every call. That record is the SIA / CCA deliverable, or the system risk assessment and critical-aspect register.", "Carry the critical items into the design (DQ), the specifications (FS/DS), and the qualification scope (IQ/OQ); leverage commissioning and GEP for everything else.", "Re-assess on change: a change to the product, process, or design can move a system or component across the line."]}, {"title": "Why it matters and pitfalls", "bullets": ["Over-classifying (calling everything Direct or critical) buries you in redundant qualification; under-classifying misses a real risk. The discipline is a defensible rationale, not a default to either side.", "The classification scopes everything downstream: the V-model depth, the protocol set, and how much commissioning you can leverage (see the Commissioning page and the gold BG5 button on each equipment page).", "Indirect and non-critical items still get good engineering and commissioning. Not qualified is not the same as not engineered.", "Lab and analytical instruments are usually scoped through USP <1058> analytical instrument qualification rather than the Direct/Indirect/No-Impact model; match the framework to the system type.", "Keep the assessment living. It is the first thing to revisit when product, process, or design changes."]}], "refs": [{"label": "ISPE Baseline Guide Vol. 5 - Commissioning & Qualification (2nd ed)", "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"}, {"label": "ASTM E2500-25 - Specification, Design & Verification", "link": "https://store.astm.org/e2500-25.html"}, {"label": "ICH Q9(R1) - Quality Risk Management", "link": "https://www.ich.org/page/quality-guidelines"}, {"label": "USP <1058> - Analytical Instrument Qualification", "link": "https://www.usp.org/"}], "example": {"label": "What an impact + criticality assessment looks like", "docTitle": "Impact and criticality extract (illustrative - a jacketed bioreactor)", "meta": [["Step", "Scope the qualification"], ["Basis", "ISPE BG5 / ASTM E2500"]], "blocks": [{"h": "System impact", "cols": ["System", "Impact", "Rationale", "Gets"], "rows": [["Bioreactor (product contact, controls CPPs)", "Direct", "Controls temperature, pH, and DO that drive product CQAs", "Full C&Q"], ["Jacket chilled-water supply", "Indirect", "Supports the jacket; no product contact; failure shows in the controlled parameter", "GEP / commissioning"], ["Plant compressed air (tools)", "No impact", "No bearing on product quality", "GEP only"]]}, {"h": "Component criticality (within the bioreactor)", "cols": ["Component", "Critical?", "Rationale", "Gets"], "rows": [["pH probe + control loop", "Critical", "Controls a CPP that affects a CQA", "Qualified + calibrated"], ["Jacket temperature sensor", "Critical", "Defines the controlled condition", "Qualified + calibrated"], ["Sight-glass light", "Non-critical", "No product-quality impact", "GEP"]]}, {"h": "The bridge to the modern model", "text": "In E2500 / BG5 2nd ed terms the same calls fall out of a system risk assessment: temperature and pH control are Critical Aspects, the sensor and loop that deliver them are Critical Design Elements and are verified, and the sight-glass light is left to good engineering. Impact and criticality are the legacy route to the same qualification scope."}]}},
  commissioning: {"name": "Commissioning", "sub": "Engineering handover before qualification", "desc": "The well-planned, documented engineering work of installing, starting up, setting to work, and verifying a system against its engineering design before qualification begins. It is the C in C&Q. Under risk-based approaches (ASTM E2500, ISPE Baseline Guide 5 2nd ed) commissioning is Good Engineering Practice that generates evidence you can leverage into qualification instead of re-running it. This page is the umbrella over the commissioning deliverables: the Commissioning Plan, FAT and SAT, pre-functional and functional checks, the system turnover package, and the punch list.", "accent": "#e0935a", "icon": "verify", "sections": [{"title": "What it is", "body": "Commissioning is the engineering process that takes a newly installed system from construction-complete to ready-for-qualification. Construction and installation put the system in; commissioning proves it was installed per the design and that it actually works the way the engineering intended: utilities connected, instruments installed and calibrated, control loops tuned, alarms and interlocks functioning, and sequences running. It is performed under Good Engineering Practice by the project and vendor teams, not as a GMP test.", "note": "Commissioning and qualification answer different questions. Commissioning asks: is it built and working as engineered? Qualification asks: is it fit for its intended GMP use, and does it protect product quality and patient safety? Under ASTM E2500 and ISPE BG5 (2nd ed) the two are planned together so commissioning evidence can be leveraged and the formal qualification effort lands only where it matters."}, {"title": "The commissioning deliverables", "body": "A commissioning package is a defined document set. The core deliverables:", "table": {"cols": ["Deliverable", "When", "What it proves"], "rows": [["Commissioning Plan", "Project planning, before execution", "Scope, systems, roles, test strategy, acceptance criteria, and which evidence is intended for leverage into qualification."], ["FAT (Factory Acceptance Test)", "At the vendor, before shipment", "The system meets its purchase specification before it leaves the factory. See the FAT page."], ["SAT (Site Acceptance Test)", "On site, after installation", "It arrived intact, is installed correctly, and integrates with site utilities and systems. See the SAT page."], ["Pre-functional checks", "After install, before energizing", "Static verification: installed per the P&ID and drawings, correct materials, utilities landed, instruments present and calibrated, no leaks."], ["Functional checks", "After pre-functional", "Dynamic verification: the system runs, loops respond, alarms and interlocks act, and the operating sequences perform."], ["Commissioning test sheets", "During execution", "The recorded result of each pre-functional and functional check, signed by the engineer."], ["System Turnover Package (TOP / TOR)", "At handover", "The compiled, organized evidence and documentation for the system, handed from the project team to the owner for qualification."], ["Punch list", "Throughout, closed at handover", "The outstanding or deficient items, classified by severity and tracked to closure."]]}}, {"title": "Pre-functional vs functional", "body": "Two stages, in order. Pre-functional (static) checks verify the install with the system at rest: lines and instruments match the P&ID, materials and welds are correct, utilities are landed, loops are wired, and instruments are calibrated. Functional (dynamic) checks then verify the system in operation: loops control to setpoint, alarms and interlocks trip at the right points, valves and drives sequence correctly, and the system holds its design conditions. You do not run functional checks until the pre-functional checks pass."}, {"title": "How it leverages into qualification", "body": "This is the whole point under a risk-based approach. Once a system's Critical Aspects are known, from the design and the risk assessment, commissioning evidence can be leveraged for the parts that do not bear on a Critical Design Element rather than re-executed as formal IQ/OQ. Assessed vendor documentation, FAT/SAT, and the pre-functional and functional checks become the verification record for those aspects.", "bullets": ["Leverage is planned upfront in the C&Q or project validation plan, not decided after the fact.", "Only good-quality commissioning can be leveraged: executed by qualified people, documented, with calibrated instruments and a clear acceptance basis.", "Leverage shrinks the formal protocol set; it does not eliminate qualification. The Critical Design Elements are still verified formally, and PQ is always retained.", "In this app, the gold BG5 button on each equipment page flags exactly which IQ/OQ tests are typically leveraged from commissioning, FAT/SAT, and vendor docs rather than re-run."]}, {"title": "Turnover and punch list", "body": "At handover the project team compiles the System Turnover Package (sometimes a Turnover Package, TOP, and a Turnover Record, TOR): the as-built drawings, material and calibration certificates, completed test sheets, and the punch list. The punch list captures every item not yet complete or not yet meeting spec, classified by severity so the team and quality know what blocks progress.", "bullets": ["Category A: must be corrected and verified before qualification can start.", "Category B: must be corrected before the system is released for PQ or routine use.", "Category C: minor or cosmetic; tracked to closure but not blocking.", "Open items and their dispositions are carried into the Validation Summary Report at closeout."]}, {"title": "Good practice and pitfalls", "bullets": ["Decide the leverage strategy in the plan, before FAT, so commissioning is executed to a standard you can rely on.", "Keep commissioning records to a documentation standard close to GMP if you intend to leverage them; thin or unsigned records cannot be leveraged.", "Calibrate the instruments used in commissioning and record traceability, or the data is not usable for qualification.", "Map each Critical Aspect to either leveraged commissioning evidence or a formal qualification test, not both, so the same thing is not tested twice.", "A clean commissioning package is the cheapest path to a fast qualification; a messy one pushes the work into IQ/OQ where it costs more."]}], "refs": [{"label": "ISPE Baseline Guide Vol. 5 - Commissioning & Qualification (2nd ed)", "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"}, {"label": "ASTM E2500-25 - Specification, Design & Verification", "link": "https://store.astm.org/e2500-25.html"}, {"label": "ISPE Good Practice Guide - Good Engineering Practice", "link": "https://ispe.org/publications/guidance-documents"}, {"label": "ICH Q9(R1) - Quality Risk Management", "link": "https://www.ich.org/page/quality-guidelines"}], "example": {"label": "What a commissioning check sheet looks like", "docTitle": "Commissioning extract - pre-functional and functional checks with punch-list dispositions (illustrative - a process skid)", "meta": [["Performed by", "Project / vendor engineers (GEP)"], ["Feeds", "Site IQ/OQ via leverage"]], "blocks": [{"h": "Checks", "cols": ["Check", "Type", "Acceptance", "Result"], "rows": [["Installed per P&ID rev C", "Pre-functional", "Lines, valves, instruments match the drawing", "Pass"], ["Material / weld certs present", "Pre-functional", "316L certs and weld log complete", "Pass"], ["Instruments calibrated", "Pre-functional", "Calibration current and traceable", "Pass"], ["Control loops respond", "Functional", "Each loop controls to setpoint", "Pass"], ["Alarms and interlocks", "Functional", "Trip at the design points", "Punch-list (1 alarm delay)"], ["CIP sequence runs", "Functional", "Steps execute in order, no faults", "Pass"]]}, {"h": "Disposition", "text": "The alarm-delay item is logged on the punch list as Category B (correct before PQ), corrected, and re-checked. The completed check sheets, certs, and closed punch list go into the System Turnover Package. Under E2500 the assessed pre-functional and functional records are leveraged into IQ/OQ for the non-critical aspects, so the formal protocol verifies only the Critical Design Elements. IQ remains the first formal GMP phase."}]}},
  sterilization: {
    "name": "Sterilization",
    "sub": "Death kinetics, F0, and the major methods",
    "desc": "Sterilization renders a product free of viable microorganisms to a defined probability - never an absolute zero. This page covers the kinetics behind it (D and z values), the lethality metric that turns a cycle into a single number (F and F0), how overkill and bioburden studies prove a cycle works, and how the main methods - steam, dry heat, radiation, ethylene oxide, filtration, and vapor-phase - actually kill and where each one fits.",
    "accent": "#e0726a",
    "icon": "steril",
    "sections": [
      {
        "title": "What sterilization is (and why it is never 'zero')",
        "body": "Sterilization is any validated process that inactivates or removes all viable microorganisms - bacteria, fungi, and their far more resistant spores. The catch is that microbial death is statistical: you can always drive the surviving population lower, but never provably to zero. So sterility is expressed as a probability - the Sterility Assurance Level (SAL), the chance that a given unit still carries one viable organism. The pharma and device standard is SAL <= 10^-6: no more than a one-in-a-million chance of a non-sterile unit.",
        "bullets": [
          "Terminal sterilization (sterilise the product in its final, sealed container) is always the regulator's preference - EU GMP Annex 1 expects it wherever the product can withstand it, because it sterilises the actual finished unit.",
          "Aseptic processing (sterilise the components separately, then fill / assemble under grade A conditions) is the fallback only when the product cannot survive any terminal method - it controls contamination rather than proving a final-container SAL.",
          "How much lethality you deliver is set by one of two study designs - overkill or bioburden (next sections) - both aimed at the same 10^-6 target."
        ],
        "note": "SAL is a probability, not a measurement - you never test a finished unit and 'find it sterile'. You prove the PROCESS delivers enough lethality, then control it. That is why qualification (mapping, F0, BIs) carries the whole weight here."
      },
      {
        "title": "Microbial death is logarithmic - the D-value",
        "body": "Under a constant lethal condition, a fixed FRACTION of the surviving population dies each unit of time (or dose), not a fixed number. That makes the survivor curve a straight line on a log scale: every equal interval knocks off another decade. The decimal reduction value, the D-value, is the time (or dose) that cuts the population by 90%, i.e. one log. D is condition-specific - D121 means the D-value in saturated steam at 121 C. A resistant biological indicator (BI) with a known D and starting count is what you challenge the cycle with.",
        "svg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Microbial survivor curve - log surviving organisms versus time\"><line x1=\"46\" y1=\"24.63\" x2=\"304\" y2=\"24.63\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"27.63\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10⁶</text><line x1=\"46\" y1=\"41.88\" x2=\"304\" y2=\"41.88\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"44.88\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10⁵</text><line x1=\"46\" y1=\"59.13\" x2=\"304\" y2=\"59.13\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"62.13\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10⁴</text><line x1=\"46\" y1=\"76.38\" x2=\"304\" y2=\"76.38\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"79.38\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10³</text><line x1=\"46\" y1=\"93.63\" x2=\"304\" y2=\"93.63\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"96.63\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10²</text><line x1=\"46\" y1=\"110.88\" x2=\"304\" y2=\"110.88\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"113.88\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10¹</text><line x1=\"46\" y1=\"128.13\" x2=\"304\" y2=\"128.13\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"131.13\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10⁰</text><line x1=\"46\" y1=\"145.38\" x2=\"304\" y2=\"145.38\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"41\" y=\"148.38\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10⁻¹</text><line x1=\"46\" y1=\"16\" x2=\"46\" y2=\"154\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"46\" y1=\"154\" x2=\"304\" y2=\"154\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"46\" y1=\"154\" x2=\"46\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"82.86\" y1=\"154\" x2=\"82.86\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"119.71\" y1=\"154\" x2=\"119.71\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"156.57\" y1=\"154\" x2=\"156.57\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"193.43\" y1=\"154\" x2=\"193.43\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"230.29\" y1=\"154\" x2=\"230.29\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"267.14\" y1=\"154\" x2=\"267.14\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"304\" y1=\"154\" x2=\"304\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"175\" y=\"183\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"var(--muted)\">Time  (each tick = one D-value)</text><text x=\"11\" y=\"85\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"var(--muted)\" transform=\"rotate(-90 11 85)\">Surviving organisms</text><line x1=\"46\" y1=\"128.13\" x2=\"304\" y2=\"128.13\" stroke=\"#e0726a\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><text x=\"302\" y=\"124.13\" text-anchor=\"end\" font-size=\"8\" fill=\"#e0726a\">1 organism - below here it is a probability (SAL)</text><line x1=\"46\" y1=\"24.63\" x2=\"304\" y2=\"145.38\" stroke=\"#58e6a8\" stroke-width=\"2.3\"/><circle cx=\"46\" cy=\"24.63\" r=\"2.6\" fill=\"#58e6a8\"/><line x1=\"119.71\" y1=\"59.13\" x2=\"156.57\" y2=\"59.13\" stroke=\"var(--text)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" opacity=\"0.8\"/><line x1=\"156.57\" y1=\"59.13\" x2=\"156.57\" y2=\"76.38\" stroke=\"var(--text)\" stroke-width=\"1.2\"/><text x=\"160.57\" y=\"70.75\" font-size=\"8\" fill=\"var(--text)\">one D = one log</text></svg>",
        "caption": "Survivor curve. The population falls one log per D-value and never reaches zero - below one organism it becomes a probability, which is why sterility is stated as a SAL, not a guarantee.",
        "note": "Because the curve is log-linear, there is no 'finish line' where the last organism dies - only ever-smaller probability. Killing 10^6 spores to a 10^-6 chance of one survivor is a 12-log journey, not 6."
      },
      {
        "title": "The z-value - how resistance changes with temperature",
        "body": "D tells you how fast you kill at one temperature. The z-value tells you how that killing rate shifts as the temperature changes: it is the temperature change (in C) that moves the D-value by a factor of ten. For saturated steam against Geobacillus stearothermophilus the convention is z = 10 C, so every extra 10 C makes the kill ten times faster (D drops ten-fold). Dry heat is far less temperature-sensitive - its z is about 20 C - which is one reason dry-heat cycles run much hotter and longer.",
        "svg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"D-value versus temperature showing the z-value\"><line x1=\"48\" y1=\"16\" x2=\"304\" y2=\"16\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"43\" y=\"19\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">100</text><line x1=\"48\" y1=\"56.59\" x2=\"304\" y2=\"56.59\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"43\" y=\"59.59\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">10</text><line x1=\"48\" y1=\"97.18\" x2=\"304\" y2=\"97.18\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"43\" y=\"100.18\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">1</text><line x1=\"48\" y1=\"137.76\" x2=\"304\" y2=\"137.76\" stroke=\"rgba(150,160,175,0.16)\" stroke-width=\"1\"/><text x=\"43\" y=\"140.76\" text-anchor=\"end\" font-size=\"8.5\" fill=\"var(--muted)\">0.1</text><line x1=\"48\" y1=\"16\" x2=\"48\" y2=\"154\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"48\" y1=\"154\" x2=\"304\" y2=\"154\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"58.67\" y1=\"154\" x2=\"58.67\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"58.67\" y=\"167\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">110</text><line x1=\"112\" y1=\"154\" x2=\"112\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"112\" y=\"167\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">115</text><line x1=\"165.33\" y1=\"154\" x2=\"165.33\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"165.33\" y=\"167\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">120</text><line x1=\"218.67\" y1=\"154\" x2=\"218.67\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"218.67\" y=\"167\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">125</text><line x1=\"272\" y1=\"154\" x2=\"272\" y2=\"157\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"272\" y=\"167\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">130</text><text x=\"176\" y=\"184\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"var(--muted)\">Temperature  (°C)</text><text x=\"11\" y=\"85\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"var(--muted)\" transform=\"rotate(-90 11 85)\">D-value  (min, log scale)</text><line x1=\"69.33\" y1=\"49.44\" x2=\"282.67\" y2=\"130.62\" stroke=\"#58e6a8\" stroke-width=\"2.3\"/><circle cx=\"176\" cy=\"90.03\" r=\"2.8\" fill=\"#58e6a8\"/><text x=\"180\" y=\"86.03\" font-size=\"8\" fill=\"var(--text)\">D₁₂₁ ≈ 1.5 min</text><line x1=\"176\" y1=\"130.62\" x2=\"282.67\" y2=\"130.62\" stroke=\"#e0935a\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><line x1=\"282.67\" y1=\"90.03\" x2=\"282.67\" y2=\"130.62\" stroke=\"#e0935a\" stroke-width=\"1.2\"/><text x=\"229.33\" y=\"141.62\" text-anchor=\"middle\" font-size=\"8\" fill=\"#e0935a\">z = 10 °C  → D ×/÷ 10</text></svg>",
        "caption": "D-value versus temperature. A 10 C rise (z = 10) divides the D-value by ten - the steep temperature dependence that makes a few degrees matter so much in steam sterilisation.",
        "note": "Real G. stearothermophilus spores often show a z nearer 6-9, but the z = 10 convention is what F0 is built on - which is exactly why a biological F-value and a calculated F0 can differ even when both are calibrated correctly."
      },
      {
        "title": "F and F0 - turning a whole cycle into equivalent minutes",
        "body": "A real cycle ramps up, holds, and cools - lethality is being delivered the whole time, just at wildly different rates. The F-value collapses that entire time-temperature history into a single number: the equivalent minutes at a reference temperature that would have done the same killing, for a given z. F0 is the specific case for moist heat - reference 121.1 C (250 F), z = 10 C. Each data point's temperature is converted to a lethal rate L = 10^((T - 121.1)/10) and summed over time: F0 = sum of L x dt. The same F0 can be reached many ways - 121.1 C for 3 min, 115 C for ~12 min, or 124 C for ~2 min all give F0 = 3.",
        "svg": "<svg viewBox=\"0 0 320 196\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Temperature and cumulative F0 during a steam cycle\"><rect x=\"117.89\" y=\"22\" width=\"92.37\" height=\"140\" fill=\"#58e6a8\" opacity=\"0.06\"/><line x1=\"44\" y1=\"162\" x2=\"278\" y2=\"162\" stroke=\"rgba(150,160,175,0.14)\" stroke-width=\"1\"/><text x=\"40\" y=\"165\" text-anchor=\"end\" font-size=\"8\" fill=\"#58e6a8\">0</text><line x1=\"44\" y1=\"122\" x2=\"278\" y2=\"122\" stroke=\"rgba(150,160,175,0.14)\" stroke-width=\"1\"/><text x=\"40\" y=\"125\" text-anchor=\"end\" font-size=\"8\" fill=\"#58e6a8\">40</text><line x1=\"44\" y1=\"82\" x2=\"278\" y2=\"82\" stroke=\"rgba(150,160,175,0.14)\" stroke-width=\"1\"/><text x=\"40\" y=\"85\" text-anchor=\"end\" font-size=\"8\" fill=\"#58e6a8\">80</text><line x1=\"44\" y1=\"42\" x2=\"278\" y2=\"42\" stroke=\"rgba(150,160,175,0.14)\" stroke-width=\"1\"/><text x=\"40\" y=\"45\" text-anchor=\"end\" font-size=\"8\" fill=\"#58e6a8\">120</text><line x1=\"44\" y1=\"40.9\" x2=\"278\" y2=\"40.9\" stroke=\"#58e6a8\" stroke-width=\"0.8\" stroke-dasharray=\"2 3\" opacity=\"0.6\"/><line x1=\"278\" y1=\"162\" x2=\"281\" y2=\"162\" stroke=\"#e0935a\" stroke-width=\"1\"/><text x=\"283\" y=\"165\" text-anchor=\"start\" font-size=\"8\" fill=\"#e0935a\">0</text><line x1=\"278\" y1=\"127\" x2=\"281\" y2=\"127\" stroke=\"#e0935a\" stroke-width=\"1\"/><text x=\"283\" y=\"130\" text-anchor=\"start\" font-size=\"8\" fill=\"#e0935a\">5</text><line x1=\"278\" y1=\"92\" x2=\"281\" y2=\"92\" stroke=\"#e0935a\" stroke-width=\"1\"/><text x=\"283\" y=\"95\" text-anchor=\"start\" font-size=\"8\" fill=\"#e0935a\">10</text><line x1=\"278\" y1=\"57\" x2=\"281\" y2=\"57\" stroke=\"#e0935a\" stroke-width=\"1\"/><text x=\"283\" y=\"60\" text-anchor=\"start\" font-size=\"8\" fill=\"#e0935a\">15</text><line x1=\"278\" y1=\"22\" x2=\"281\" y2=\"22\" stroke=\"#e0935a\" stroke-width=\"1\"/><text x=\"283\" y=\"25\" text-anchor=\"start\" font-size=\"8\" fill=\"#e0935a\">20</text><line x1=\"44\" y1=\"22\" x2=\"44\" y2=\"162\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"278\" y1=\"22\" x2=\"278\" y2=\"162\" stroke=\"rgba(224,168,94,0.55)\" stroke-width=\"1\"/><line x1=\"44\" y1=\"162\" x2=\"278\" y2=\"162\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><line x1=\"44\" y1=\"162\" x2=\"44\" y2=\"165\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"44\" y=\"174\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">0</text><line x1=\"105.58\" y1=\"162\" x2=\"105.58\" y2=\"165\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"105.58\" y=\"174\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">10</text><line x1=\"167.16\" y1=\"162\" x2=\"167.16\" y2=\"165\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"167.16\" y=\"174\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">20</text><line x1=\"228.74\" y1=\"162\" x2=\"228.74\" y2=\"165\" stroke=\"rgba(150,160,175,0.5)\" stroke-width=\"1\"/><text x=\"228.74\" y=\"174\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">30</text><text x=\"161\" y=\"191\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"var(--muted)\">Time  (min)</text><path d=\"M44 142L47.08 137.79L50.16 133.57L53.24 129.36L56.32 125.15L59.39 120.94L62.47 116.73L65.55 112.51L68.63 108.3L71.71 104.09L74.79 99.88L77.87 95.66L80.95 91.45L84.03 87.24L87.11 83.03L90.18 78.81L93.26 74.6L96.34 70.39L99.42 66.18L102.5 61.96L105.58 57.75L108.66 53.54L111.74 49.33L114.82 45.11L117.89 40.9L120.97 40.9L124.05 40.9L127.13 40.9L130.21 40.9L133.29 40.9L136.37 40.9L139.45 40.9L142.53 40.9L145.61 40.9L148.68 40.9L151.76 40.9L154.84 40.9L157.92 40.9L161 40.9L164.08 40.9L167.16 40.9L170.24 40.9L173.32 40.9L176.39 40.9L179.47 40.9L182.55 40.9L185.63 40.9L188.71 40.9L191.79 40.9L194.87 40.9L197.95 40.9L201.03 40.9L204.11 40.9L207.18 40.9L210.26 40.9L213.34 43.13L216.42 45.36L219.5 47.6L222.58 49.83L225.66 52.06L228.74 54.29L231.82 56.52L234.89 58.75L237.97 60.99L241.05 63.22L244.13 65.45L247.21 67.68L250.29 69.91L253.37 72.15L256.45 74.38L259.53 76.61L262.61 78.84L265.68 81.07L268.76 83.3L271.84 85.54L274.92 87.77L278 90\" fill=\"none\" stroke=\"#58e6a8\" stroke-width=\"2\"/><path d=\"M44 162L47.08 162L50.16 162L53.24 162L56.32 162L59.39 162L62.47 162L65.55 162L68.63 162L71.71 162L74.79 162L77.87 162L80.95 162L84.03 162L87.11 162L90.18 162L93.26 162L96.34 161.99L99.42 161.98L102.5 161.96L105.58 161.88L108.66 161.69L111.74 161.19L114.82 159.86L117.89 156.36L120.97 152.86L124.05 149.36L127.13 145.86L130.21 142.36L133.29 138.86L136.37 135.36L139.45 131.86L142.53 128.36L145.61 124.86L148.68 121.36L151.76 117.86L154.84 114.36L157.92 110.86L161 107.36L164.08 103.86L167.16 100.36L170.24 96.86L173.32 93.36L176.39 89.86L179.47 86.36L182.55 82.86L185.63 79.36L188.71 75.86L191.79 72.36L194.87 68.86L197.95 65.36L201.03 61.86L204.11 58.36L207.18 54.86L210.26 51.36L213.34 49.27L216.42 48.02L219.5 47.27L222.58 46.82L225.66 46.55L228.74 46.39L231.82 46.3L234.89 46.24L237.97 46.2L241.05 46.18L244.13 46.17L247.21 46.16L250.29 46.16L253.37 46.16L256.45 46.16L259.53 46.15L262.61 46.15L265.68 46.15L268.76 46.15L271.84 46.15L274.92 46.15L278 46.15\" fill=\"none\" stroke=\"#e0935a\" stroke-width=\"2\"/><text x=\"164.08\" y=\"31\" text-anchor=\"middle\" font-size=\"8\" fill=\"var(--muted)\">121 °C hold</text><circle cx=\"278\" cy=\"46.15\" r=\"2.6\" fill=\"#e0935a\"/><text x=\"278\" y=\"41.15\" text-anchor=\"end\" font-size=\"8\" fill=\"#e0935a\">F0 ≈ 16.5</text><rect x=\"48\" y=\"20\" width=\"9\" height=\"3\" fill=\"#58e6a8\"/><text x=\"60\" y=\"23\" font-size=\"8\" fill=\"var(--muted)\">Temp</text><rect x=\"96\" y=\"20\" width=\"9\" height=\"3\" fill=\"#e0935a\"/><text x=\"108\" y=\"23\" font-size=\"8\" fill=\"var(--muted)\">Cumulative F0</text></svg>",
        "caption": "Lethality accumulates almost entirely during the 121 C hold - the ramp and cool-down barely move F0, because at lower temperatures the lethal rate L is a small fraction of one.",
        "note": "Dry heat has its own equivalent, FH (reference 170 C, z = 20). Depyrogenation is different again - it runs at ~250 C and is judged by a >= 3-log endotoxin reduction, not by F0."
      },
      {
        "title": "Overkill, bioburden, and the half-cycle method",
        "body": "Two study designs prove a cycle hits SAL 10^-6, and they differ in what they assume about the product's own microbial load. The overkill approach ignores the actual bioburden and instead delivers enough lethality to wipe out a resistant BI (commonly 10^6 G. stearothermophilus spores, D121 ~ 1 min) with a large margin - a >= 12-log (12 spore-log-reduction) process. Kill 10^6 highly resistant spores and add six more logs of headroom, and any real, lower, less-resistant bioburden is guaranteed to land below 10^-6. The bioburden approach instead characterises the actual count and resistance and delivers only the lethality needed to reach 10^-6 from there - a gentler cycle for fragile products, at the cost of tight, routine bioburden control.",
        "table": {
          "cols": [
            "Approach",
            "What it proves",
            "Routine bioburden control",
            "Best for"
          ],
          "rows": [
            [
              "Overkill",
              ">= 12-log kill of a resistant BI; product bioburden ignored",
              "Minimal",
              "Heat / dose-tolerant product; the default for devices and most steam loads"
            ],
            [
              "Bioburden",
              "Lethality set to reach SAL 10^-6 from the measured bioburden",
              "Tight and routine",
              "Heat / dose-sensitive product that cannot take an overkill cycle"
            ],
            [
              "Bioburden / BI",
              "Reduced lethality vs overkill, using a BI of known resistance >= bioburden",
              "Moderate",
              "A middle path when full overkill is too harsh"
            ]
          ]
        },
        "note": "The half-cycle method is the usual way to demonstrate overkill: run the cycle at HALF the routine exposure and show complete kill of the 10^6 BI. If half the cycle already gives >= 6 logs to zero, the full routine cycle delivers >= 12 logs. It is the standard demonstration for EtO (ISO 11135) and for steam overkill - and equivalently, an F0 >= 12 (with D121 = 1) is a 12-log process, with F0 >= 15 commonly targeted for margin."
      },
      {
        "title": "The methods at a glance",
        "body": "No single method suits everything - the choice is driven by what the product can survive. Moist heat is first choice whenever heat and water are tolerable; everything else exists for the cases where they are not.",
        "table": {
          "cols": [
            "Method",
            "How it kills",
            "Typical conditions",
            "Control metric / BI",
            "Best for",
            "Watch-outs"
          ],
          "rows": [
            [
              "Moist heat (steam)",
              "Saturated steam denatures / coagulates proteins; moisture catalyses",
              "121 C / 15 min (or 134 C); saturated steam, air removed",
              "F0 (>= 12-15); G. stearothermophilus",
              "Heat- and moisture-stable: aqueous products, glassware, hard goods",
              "Trapped air / non-condensables defeat it; not for dry or heat-labile items"
            ],
            [
              "Dry heat",
              "Oxidation at high temperature",
              "160-180 C sterilise; >= 250 C to depyrogenate",
              "FH (z = 20); B. atrophaeus; endotoxin LRV for depyro",
              "Oils, powders, glass, metal that moisture would harm",
              "Slow; needs much higher temperature than steam"
            ],
            [
              "Radiation (gamma / E-beam / X-ray)",
              "Ionising radiation breaks DNA directly and via radicals; a cold process",
              "Validated dose range, commonly 25 kGy (Co-60, E-beam, X-ray)",
              "Delivered dose (kGy) + dosimetry; ISO 11137",
              "Single-use plastics, pre-packed disposables, heat-sensitive devices",
              "Can embrittle / discolour polymers; some APIs and proteins are radiosensitive"
            ],
            [
              "Ethylene oxide (EtO)",
              "Alkylates DNA and proteins; low-temperature gas",
              "~37-63 C, controlled RH + gas conc; precondition / expose / aerate",
              "Half-cycle / overkill; B. atrophaeus (ATCC 9372); ISO 11135",
              "Complex devices, lumens, heat-sensitive assemblies",
              "Toxic / flammable / carcinogenic gas; residual EO + ECH limited (ISO 10993-7); long aeration"
            ],
            [
              "Sterilising filtration",
              "Physically REMOVES organisms - it does not kill them",
              "0.22 (0.2) um membrane; integrity-tested",
              "Bacterial challenge B. diminuta >= 10^7/cm2 (ASTM F838); ISO 13408",
              "Heat-labile liquids: biologics, sera (then aseptic fill)",
              "Does not remove mycoplasma / virus (needs 0.1 um or extra steps); needs aseptic downstream"
            ],
            [
              "Vaporised H2O2 (VHP / VPHP)",
              "Oxidising vapour damages cell components; low-temperature",
              "Conditioning / gassing / aeration in a sealed enclosure",
              "G. stearothermophilus; ISO 22441",
              "Isolators, RABS, transfer chambers, surfaces, some devices",
              "Material compatibility; condensation; cycle development per load"
            ]
          ]
        },
        "note": "Other low-temperature gas methods (chlorine dioxide, nitrogen dioxide, ozone) and hydrogen-peroxide gas plasma fill niche roles. Filtration is the odd one out - a removal step, not an inactivation step - so it is validated by bacterial challenge, not by a lethality calculation."
      },
      {
        "title": "Choosing a method",
        "body": "The decision is a cascade, and it almost always starts with the same question.",
        "steps": [
          "Can the product withstand heat AND moisture? If yes, use moist heat (steam) - it is the cheapest, fastest, most reliable, non-toxic option, and the regulatory default.",
          "Heat-stable but moisture-sensitive (oils, powders, dry goods)? Use dry heat.",
          "A heat-sensitive solid, device, or single-use disposable? Use radiation if the materials tolerate the dose, or EtO if they do not (and a gas can reach the surfaces that matter).",
          "A heat-sensitive liquid (most biologics)? Use sterilising filtration, then fill aseptically.",
          "A surface, enclosure, isolator, or cleanroom? Use a vapour-phase method such as VHP."
        ],
        "note": "Terminal beats aseptic whenever it is achievable (Annex 1), and within terminal options the order above roughly tracks cost, robustness, and regulatory comfort. Whatever you pick, the method is only as good as its qualification - mapping, F0 or dose, integrity or BI challenge - which is what the equipment pages in this reference build out."
      }
    ],
    "refs": [
      {
        "label": "USP <1229> - Sterilization of Compendial Articles (and the <1229.x> family)",
        "link": "https://www.uspnf.com/"
      },
      {
        "label": "ISO 17665 - Moist heat sterilization of health care products",
        "link": "https://www.iso.org/standard/81077.html"
      },
      {
        "label": "ISO 11137 - Radiation sterilization of health care products",
        "link": "https://www.iso.org/standard/33952.html"
      },
      {
        "label": "ISO 11135 - Ethylene oxide sterilization of health care products",
        "link": "https://www.iso.org/standard/56137.html"
      },
      {
        "label": "ASTM F838 - Bacterial retention of membrane filters for liquid filtration",
        "link": "https://www.astm.org/f0838-20.html"
      },
      {
        "label": "EU GMP Annex 1 - Manufacture of sterile medicinal products (2022)",
        "link": "https://health.ec.europa.eu/document/download/e05af55b-38e9-42bf-8495-194bbf0b9262_en"
      }
    ],
    "example": {
      "label": "F0 of a steam cycle - worked example",
      "docTitle": "Converting a time-temperature profile to F0 (illustrative)",
      "meta": [
        [
          "Reference",
          "121.1 °C, z = 10 °C"
        ],
        [
          "Lethal rate",
          "L = 10^((T - 121.1) / 10)"
        ],
        [
          "F0",
          "sum of L × dt over the whole cycle"
        ]
      ],
      "blocks": [
        {
          "h": "Lethality by phase (L = 10⁽ᵀ⁻¹²¹˙¹⁾ᐟ¹⁰, summed over time)",
          "cols": [
            "Cycle phase",
            "Temp (°C)",
            "Lethal rate L",
            "Phase F0 (min)"
          ],
          "rows": [
            [
              "Ramp (0 → 12 min)",
              "20 → 121",
              "rising to 1.0",
              "~0.6"
            ],
            [
              "Hold (12 → 27 min)",
              "121.1",
              "1.00",
              "15.0"
            ],
            [
              "Cool (27 → 38 min)",
              "121 → 72",
              "falling from 1.0",
              "~0.9"
            ],
            [
              "Total",
              "",
              "",
              "≈ 16.5"
            ]
          ]
        },
        {
          "h": "Result",
          "text": "The 15-minute hold at 121.1 C contributes ~15 min of F0 on its own; the ramp and cool-down add only a little more, for a total of about F0 = 16.5. The same lethality could be delivered as ~16 min at 121.1 C, or proportionally longer at a lower temperature - which is the whole point of F0: it lets two different cycles be compared on one scale."
        },
        {
          "h": "Reading it",
          "list": [
            "At 121.1 C the lethal rate is exactly 1, so one minute of hold = one minute of F0.",
            "Ten degrees cooler (z = 10), L falls to 0.1 - ten minutes there buys only one minute of F0.",
            "An overkill target of F0 >= 12 (BI D121 = 1) is a >= 12-log process; F0 >= 15 leaves margin."
          ]
        }
      ]
    }
  },

  tempmap: {
    "name": "Temperature Mapping",
    "sub": "Finding the hot and cold spots",
    "desc": "Temperature mapping is a distribution study that finds the hot and cold spots inside a controlled-temperature space - a fridge, stability chamber, cold room, warehouse, or transport unit - so you know where product actually sits worst and where to put the routine monitoring sensor. It is the method underneath the OQ and PQ mapping tests on nearly every storage unit in this app: the same grid, duration, and worst-case logic, scaled to the space. The setpoint and limits come from the product, never assumed.",
    "accent": "#4fd1c5",
    "icon": "tempmap",
    "sections": [
      {
        "title": "What it is and why",
        "body": "A mapping study places a calibrated sensor array throughout the space, runs it at the operating condition, and analyses how temperature varies by position and over time. It answers three questions: is the whole space within the required band, where are the worst (hottest / coldest) locations, and where should the permanent monitoring probe live so it sees the worst case rather than a comfortable average. You map empty first (the unit's own capability), then loaded (real product, real access)."
      },
      {
        "title": "When you map",
        "steps": [
          "OQ - empty-chamber mapping: characterise the unit's own temperature distribution with no load, at setpoint, to find the inherent hot / cold spots.",
          "PQ - loaded mapping: repeat under representative product load and the routine access pattern (door openings, traffic) over a longer period to prove in-use performance.",
          "Requalification: re-map on a risk-based interval and after any change that could move the air pattern - a layout change, a refrigeration repair, new racking, a relocation, or a control-system change."
        ]
      },
      {
        "title": "How many sensors, and where",
        "body": "Sensor count is risk- and volume-based with a documented justification, not an arbitrary number. A common starting framework:",
        "table": {
          "cols": [
            "Space",
            "Typical sensor count",
            "Placement logic"
          ],
          "rows": [
            [
              "Small chamber (< 2 m³)",
              "9 minimum",
              "8 corners + 1 centre (3D grid)"
            ],
            [
              "Mid chamber (~2-20 m³)",
              "~15",
              "Corners + centre + mid-points; denser where airflow is restricted"
            ],
            [
              "Large room / warehouse",
              "27+ (3x3x3 grid)",
              "Grid plus targeted: doors, defrost coils, external walls, top of high-bay racking"
            ],
            [
              "Any unit",
              "+1 at the control / monitoring probe",
              "Co-locate one sensor with the permanent probe to compare"
            ]
          ]
        },
        "note": "High-bay and racked stores stratify - the top of the racking is often the warmest point and must be covered. Add targeted sensors at the known weak spots (door, defrost, walls) on top of the grid; the grid alone can miss them."
      },
      {
        "title": "How long",
        "body": "Run long enough to capture the unit's full behaviour, including the events that cause the biggest excursions. A common minimum for a chamber is at least 24 hours, extended to capture at least one defrost cycle and any redundant-system switchover. Warehouses and walk-ins are often mapped over about 7 days to capture day / night and HVAC cycling. Loaded studies run over a representative period including routine door openings."
      },
      {
        "title": "What you measure and analyse",
        "bullets": [
          "Uniformity - the spread between the warmest and coolest sensors at any moment; how even the space is.",
          "Stability - how much each position fluctuates over time at its own location.",
          "MKT (mean kinetic temperature) - a single weighted temperature reflecting the cumulative effect of excursions; used for warm / ambient storage and stability.",
          "Time-out-of-range - how long, if ever, any position sat outside the band, so a brief excursion can be evaluated rather than auto-failing the study.",
          "Worst-case position - the hottest (heated / ambient) or coldest (cold storage) location, which sets where the monitoring probe goes."
        ],
        "note": "Worst case depends on what the unit does: for cold storage the coldest spot risks freezing product and the warmest risks the upper limit, so both matter; for a warehouse the hottest spot plus MKT drives it. The monitoring sensor goes at the worst-case location found here, not a convenient one."
      },
      {
        "title": "Mean kinetic temperature (MKT) - what it is and isn't",
        "body": "MKT is a single derived 'virtual' temperature that captures the cumulative HEAT-DRIVEN stress a product saw over a period: the constant temperature that would have done the same chemical damage as the real, fluctuating profile. It comes from the Arrhenius equation (J.D. Haynes, 1971), so higher temperatures are weighted far more heavily than lower ones, and MKT is always higher than the plain arithmetic mean. The usual default activation energy is 83.144 kJ/mol (USP <1079>) when product-specific kinetics are not known.",
        "bullets": [
          "It is not the arithmetic average, and it is not a way to 'average away' an excursion - absolute label / monograph limits still govern, and MKT cannot be used to offset a prior excursion (USP <1079.2>).",
          "It models first-order Arrhenius chemical degradation only. It does NOT capture freezing, freeze-thaw, aggregation, or other physical / phase-change damage, and it ignores humidity, light, and pH.",
          "The activation-energy value barely moves the result (250 vs 83 kJ/mol shifts MKT a few tenths of a degree) - the real limitation is the kinetic-model assumption, not the Ea you pick.",
          "The cold-storage trap: because MKT weights high temperatures heavily and barely registers cold dips, a freezing excursion that ruins a biologic hardly moves the MKT, giving false assurance. MKT answers 'how much heat stress', never 'did it get too cold'."
        ],
        "table": {
          "cols": [
            "Scenario",
            "MKT appropriate?"
          ],
          "rows": [
            [
              "Controlled room temperature (CRT) / warehouse thermal history",
              "Yes - the classic use (USP <1079>, <659>)"
            ],
            [
              "ICH Q1A long-term stability (25 C / 60% RH; MKT not to exceed 25 C)",
              "Yes"
            ],
            [
              "Warm-side excursion in storage / transit (heat-driven degradation)",
              "Yes - includes controlled cold temperature (CCT) warm excursions, 24 h window per USP <1079.2>"
            ],
            [
              "Freezing / sub-zero excursion on a 2-8 C or frozen product",
              "No - freezing is physical damage MKT cannot see; evaluate as a discrete pass / fail"
            ],
            [
              "Photolytic, enzymatic, or microbial degradation",
              "No - not first-order Arrhenius chemical kinetics"
            ]
          ]
        },
        "note": "This is why the mapping data tables in this reference carry MKT (and time-out-of-range) columns for warm storage - warehouse, CRT, and stability chambers - but not for cold-chain or frozen units, where the governing questions are time outside the absolute limits and whether any freeze event occurred. For a 2-8 C product you can still compute MKT to summarise warm excursions, but cold excursions are judged against the hard limits and a freeze is treated as pass / fail, never averaged into a comfortable number."
      },
      {
        "title": "Acceptance, and the measurement-uncertainty point",
        "body": "The acceptance band comes from the URS, which comes from the product's labelled storage condition - it is never assumed (2-8 °C, 15-25 °C, and so on are examples, not defaults). Mapping sensors carry current traceable calibration and are checked before and after the study; their measurement uncertainty is factored into the result. A guard band (uncertainty plus any offset between the worst-case position and the monitoring probe) is applied when setting the routine alarm limits, so the alarm trips before product actually leaves the band.",
        "note": "A mapping study can look compliant on paper while missing a real excursion if the grid is too coarse or the worst spots aren't covered. The defensible study is the one whose sensor count and placement are justified by the space, the airflow, and the risk - not copied from another unit."
      }
    ],
    "refs": [
      {
        "label": "WHO TRS 992 Annex 5 - Qualification of temperature-controlled storage (Supp 7) + Temperature mapping (Supp 8)",
        "link": "https://www.who.int/publications/m/item/trs-992-annex-5"
      },
      {
        "label": "ISPE Good Practice Guide: Controlled Temperature Chambers (2nd ed)",
        "link": "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition"
      },
      {
        "label": "USP <1079> - Good Storage and Distribution Practices",
        "link": "https://www.usp.org/"
      },
      {
        "label": "EU Good Distribution Practice (2013/C 343/01)",
        "link": "https://health.ec.europa.eu/medicinal-products/good-distribution-practice_en"
      },
      {
        "label": "ICH Q1A(R2) - Stability testing of new drug substances and products (MKT definition)",
        "link": "https://www.ich.org/page/quality-guidelines"
      }
    ],
    "example": {
      "label": "What a mapping result looks like",
      "docTitle": "Empty-chamber mapping summary - a 2-8 °C fridge (illustrative)",
      "meta": [
        [
          "Study",
          "OQ empty-chamber, 24 h, 9 sensors + control"
        ],
        [
          "Acceptance",
          "2-8 °C per URS (product-driven)"
        ]
      ],
      "blocks": [
        {
          "h": "Per-position result",
          "cols": [
            "Sensor",
            "Min (°C)",
            "Max (°C)",
            "Mean (°C)",
            "In band?"
          ],
          "rows": [
            [
              "1 top-back-left (warmest)",
              "3.9",
              "7.4",
              "5.8",
              "Yes"
            ],
            [
              "5 centre",
              "3.2",
              "6.1",
              "4.6",
              "Yes"
            ],
            [
              "8 bottom-front-right (coolest)",
              "2.6",
              "5.0",
              "3.7",
              "Yes"
            ],
            [
              "C co-located w/ monitor",
              "3.1",
              "5.9",
              "4.5",
              "Yes"
            ],
            [
              "Spread (warmest - coolest)",
              "-",
              "2.4 °C max",
              "-",
              "<= limit"
            ]
          ]
        },
        {
          "h": "What it concludes",
          "text": "Every position held within 2-8 °C across 24 h including the defrost cycle, so the unit passes. Sensor 1 (top-back) is the warmest spot and sensor 8 (bottom-front) the coolest - the routine monitoring probe goes at the warmest location with a guard band for sensor uncertainty, so the alarm trips before real product reaches 8 °C. The loaded PQ then repeats this with product and door openings."
        }
      ]
    }
  },

  calibration: {
    "name": "Calibration & Metrology",
    "sub": "Trustworthy measurement",
    "desc": "Calibration is comparing an instrument against a more accurate, traceable reference to find its error - and adjusting it if needed - so the numbers it produces can be trusted. Metrology is the wider science of measurement that makes that trust defensible: traceability to national standards, measurement uncertainty, and decision rules. Every acceptance criterion in this app rests on it: a mapping result, an OQ reading, or a release test means nothing if the instrument that produced it was not calibrated.",
    "accent": "#d9b15c",
    "icon": "calib",
    "sections": [
      {
        "title": "What calibration is (and isn't)",
        "body": "Calibration compares the instrument under test to a reference standard of known, better accuracy across the range it is used, records the difference (the error), and - where the instrument is adjustable - corrects it. It is not the same as verification (a check that it is within tolerance) or adjustment (the act of correcting it); a full calibration captures the condition before and after. The output is a certificate stating what was found, against what reference, with what uncertainty."
      },
      {
        "title": "Traceability - the chain",
        "body": "A measurement is only meaningful if it ties back, through an unbroken documented chain, to a national or international standard - in the US, NIST. Each link has its own documented uncertainty; a missing uncertainty at any link breaks the chain's validity. A site instrument is calibrated against a working standard, calibrated against a reference standard, calibrated by an accredited lab against a primary standard traceable to NIST. 'Traceable to NIST' on a certificate means nothing unless each link, with its reference and uncertainty, is documented.",
        "note": "ISO/IEC 17025:2017 (clause 6.5) and ISO 9001:2015 (7.1.5.2) both require measurement traceability to national or international standards. An ISO/IEC 17025-accredited calibration lab is the usual evidence that the chain holds."
      },
      {
        "title": "ISO/IEC 17025 - accredited vs regular calibration",
        "body": "Not every calibration certificate carries the same weight. A regular (or standard) calibration is done by a lab - or in-house - working to its own quality system, and gives a certificate with as-found / as-left data and a claim of traceability. An ISO/IEC 17025 calibration is done by a lab that a recognised accreditation body (A2LA, ANAB, or NVLAP in the US; UKAS, DAkkS, and others abroad) has independently assessed as competent for that specific measurement. The accreditation - not the lab's own word - is the third-party proof of competence and uncertainty.",
        "bullets": [
          "ISO/IEC 17025:2017 is the international standard for the competence of testing and calibration labs - it covers metrological traceability to SI (clause 6.5), evaluation of measurement uncertainty (7.6), and how a conformity (pass / fail) statement is reported (7.8.6).",
          "Accreditation is measurement-specific: the lab has a published Scope of Accreditation and a stated Calibration and Measurement Capability (CMC), its best uncertainty. A result counts as accredited only if that parameter and range fall inside the scope.",
          "The certificate shows the accreditation body's symbol and number, verifiable on the accreditor's site - but an accredited lab can still issue a non-accredited certificate for an out-of-scope parameter, so read the certificate rather than assuming.",
          "Under 7.8.6 the decision rule for a pass / fail statement is agreed with the customer (ILAC P14 guidance) and the lab applies it rather than inventing one. Accredited results are recognised across 100+ economies through the ILAC Mutual Recognition Arrangement (MRA)."
        ],
        "table": {
          "cols": [
            "Aspect",
            "Regular / standard cal",
            "ISO/IEC 17025 accredited"
          ],
          "rows": [
            [
              "Competence",
              "Lab's own quality system (often ISO 9001); self-declared",
              "Independently assessed by an accreditation body for the specific measurement"
            ],
            [
              "Measurement uncertainty",
              "May or may not be reported",
              "Always reported; never smaller than the lab's published CMC"
            ],
            [
              "Decision rule (pass / fail)",
              "Often unstated",
              "Customer-agreed rule applied per 7.8.6 / ILAC P14"
            ],
            [
              "Certificate",
              "Lab letterhead",
              "Accreditation body symbol + number, within the accredited scope"
            ],
            [
              "Recognition",
              "Depends on the customer accepting it",
              "Internationally recognised via the ILAC MRA"
            ]
          ]
        },
        "note": "'NIST-traceable' on its own is not the same as 'accredited' - a non-accredited lab can claim traceability, but accreditation is the independent proof of competence and uncertainty. Risk drives the choice: the reference standards at the top of your traceability chain and instruments tied to critical / regulated measurements usually warrant an accredited (ISO/IEC 17025) calibration, while routine working standards and non-critical instruments may be covered by a documented traceable calibration. ISO/IEC 17025 itself allows non-accredited calibration in limited, justified cases - no accredited provider for the parameter / range, highly specialised equipment, or interim in-house work - so decide it in your quality system, not by price."
      },
      {
        "title": "The vocabulary that matters",
        "bullets": [
          "Accuracy - how close a reading is to the true value. Precision - how repeatable readings are. An instrument can be precise but inaccurate.",
          "Tolerance - the maximum error you will accept for the instrument's use, driven by what the process needs and set in the URS / spec.",
          "Measurement uncertainty - the quantified doubt around a result; every calibration has it, and it must be stated.",
          "As-found / as-left - the condition on receipt (before any adjustment) and after adjustment. As-found is what tells you whether data taken since the last calibration is still valid.",
          "Drift - the gradual change in an instrument's error over time, which is why intervals exist."
        ]
      },
      {
        "title": "The 4:1 rule (TUR)",
        "body": "The reference must be meaningfully better than the instrument it checks. The common convention is a Test Uncertainty Ratio (TUR) of at least 4:1 - the reference standard's expanded uncertainty is no more than a quarter (25 %) of the instrument's tolerance. ANSI/NCSL Z540.3 codified the 4:1 requirement (10:1 is a stronger working target). Where the ratio is tighter, a guard band can be applied - acceptance limits set inside the tolerance - to keep the probability of a false 'pass' acceptably low.",
        "note": "ANSI/NCSL Z540.1 and Z540.3 are in withdrawn status within NCSLI (no longer revised) but are still widely specified, and the 4:1 TUR convention remains standard practice; ISO/IEC 17025:2017 is the active accreditation standard. Cite what your quality system has adopted."
      },
      {
        "title": "Intervals and out-of-tolerance",
        "steps": [
          "Set the interval risk-based: criticality of the measurement, the instrument's stability / drift history, manufacturer guidance, and conditions of use - then adjust it from calibration history (extend if consistently in-tolerance, shorten if it drifts).",
          "Calibrate before use and verify on schedule; instruments controlling or recording critical parameters must be calibrated against traceable standards.",
          "On an out-of-tolerance (OOT) as-found result, run an impact assessment: every measurement taken since the last good calibration is suspect, so assess the effect on product, batches, and qualification data back to that point.",
          "Trigger corrective action (and Change Control / CAPA as needed); an OOT instrument that recorded a critical parameter can put released product in question."
        ]
      },
      {
        "title": "Where it sits in qualification",
        "body": "Calibration threads through every phase here. IQ verifies that controlling and recording instruments are identified and carry current traceable calibration. OQ includes a calibration verification before functional testing, and mapping sensors are checked before and after the study. The instruments must be calibrated for the data to count - which is why an out-of-tolerance finding reaches all the way back to product release.",
        "note": "USP <1058> (Analytical Instrument Qualification) frames instrument qualification and calibration for lab equipment; 21 CFR 211.68 and 211.160(b)(4) require calibration of equipment and instruments under a written programme with records. The bigger 'how to calibrate each unit' detail is equipment-specific - this page is the method behind all of them."
      }
    ],
    "refs": [
      {
        "label": "ISO/IEC 17025:2017 - Competence of testing and calibration laboratories",
        "link": "https://www.iso.org/standard/66912.html"
      },
      {
        "label": "ANSI/NCSL Z540.3 - Requirements for the Calibration of M&TE (4:1 TUR)",
        "link": "https://ncsli.org/"
      },
      {
        "label": "FDA 21 CFR 211.68 - Automatic, mechanical, and electronic equipment (calibration)",
        "link": "https://www.ecfr.gov/current/title-21/section-211.68"
      },
      {
        "label": "USP <1058> - Analytical Instrument Qualification",
        "link": "https://www.usp.org/"
      },
      {
        "label": "ILAC MRA - Mutual Recognition Arrangement (accredited results recognised internationally)",
        "link": "https://ilac.org/ilac-mra-and-signatories/"
      }
    ],
    "example": {
      "label": "What a calibration record looks like",
      "docTitle": "Calibration certificate extract - a temperature probe (illustrative)",
      "meta": [
        [
          "Instrument",
          "Chamber control probe; tolerance ± 0.5 °C"
        ],
        [
          "Reference",
          "NIST-traceable, ISO/IEC 17025 lab"
        ]
      ],
      "blocks": [
        {
          "h": "As-found / as-left",
          "cols": [
            "Test point (°C)",
            "Reference",
            "As-found",
            "As-left",
            "In tol?"
          ],
          "rows": [
            [
              "2.00",
              "2.00",
              "2.63",
              "2.01",
              "No (OOT)"
            ],
            [
              "5.00",
              "5.00",
              "5.71",
              "5.02",
              "No (OOT)"
            ],
            [
              "8.00",
              "8.00",
              "8.66",
              "8.03",
              "No (OOT)"
            ],
            [
              "Tolerance / TUR",
              "± 0.5 °C",
              "ref uncertainty <= 0.125 °C (>= 4:1)",
              "-",
              "-"
            ]
          ]
        },
        {
          "h": "Why as-found matters",
          "text": "The probe came in reading 0.6-0.7 °C high - outside its ± 0.5 °C tolerance. Because the as-found is out of tolerance, every temperature this probe recorded since its last calibration is suspect: an impact assessment back to that date is required (which batches, which qualification data). After adjustment the as-left reads true within tolerance. The reference's uncertainty is a quarter of the tolerance or better - the 4:1 TUR."
        }
      ]
    }
  },

  vlms: {
    name: "Validation Software",
    sub: "Paperless validation (VLMS)",
    desc: "Validation Lifecycle Management Systems (VLMS) are software platforms that digitize the whole validation lifecycle - authoring protocols, routing reviews and approvals, executing tests with electronic signatures, managing exceptions, and keeping a live traceability matrix - replacing the paper-and-spreadsheet way of running IQ/OQ/PQ and CSV. This page explains what they are and how they're used, not which to buy.",
    accent: "#5aa9e6",
    icon: "vlms",
    sections: [
      { title: "What a VLMS is",
        body: "A VLMS is a validated, 21 CFR Part 11 / EU Annex 11-compliant environment for running validation electronically end to end: write the protocol, route it for review and approval, execute it on a tablet on the floor with electronic signatures, capture deviations/exceptions inline, and generate the report - all in one system of record, with a full audit trail. It is the paperless replacement for printed protocols, wet-ink initials, and the binder. Note the difference from THIS app: a VLMS is a system of record that holds your live GxP data; this reference tool deliberately is not (it's a drafting/teaching companion). The executable test views here are meant to be pasted INTO your VLMS or template, not to replace it." },
      { title: "What it does across the lifecycle",
        steps: [
          "Authoring: build protocols from reusable templates, test libraries, and standard entities (systems, equipment, tests, risks).",
          "Review & approval: electronic routing, comments, and e-signatures replace physical sign-off chains.",
          "Execution: testers run protocols on-screen, enter results, attach evidence, and e-sign each step contemporaneously (ALCOA+ by design).",
          "Exceptions/deviations: out-of-spec results and protocol changes are captured, routed, and resolved inside the record.",
          "Traceability: a live Requirements Traceability Matrix (RTM) links every URS requirement to the test that verifies it - built as you go, not assembled afterward.",
          "Reporting & audit: summary reports generate from the captured data; auditors get real-time, searchable access."
        ] },
      { title: "Why companies move off paper",
        bullets: [
          "Cycle time: vendors and case studies commonly cite ~50% reductions in validation cycle time versus paper.",
          "Data integrity: built-in audit trail, access control, and contemporaneous capture make ALCOA+ the default instead of a discipline you enforce by hand.",
          "Consistency: shared templates and test libraries standardize how validation is done across sites.",
          "Audit readiness: live status, searchable records, and an always-current RTM replace the scramble to compile binders.",
          "Less rework: structured data and reuse cut the transcription errors and duplicated effort that plague paper."
        ] },
      { title: "The main platforms (market context, not a recommendation)",
        bullets: [
          "Kneat Gx - a configurable, document-centric VLMS; known for flexibility and a no-code approach to digitizing existing processes.",
          "ValGenesis VLMS - an established enterprise suite; object/process-driven, lifecycle-of-the-asset approach, strong pre-validated templates and governance.",
          "Veeva Vault Validation Management - validation inside the Veeva Vault ecosystem (attractive if you already run Vault QMS/QualityDocs).",
          "MasterControl, GoVal, and others - QMS-plus-validation or purpose-built VLMS options.",
          "All compliant ones share the same job: a validated, Part 11/Annex 11 environment that turns validation into structured, traceable, paperless data. The right fit depends on company size, existing stack, and validation maturity."
        ],
        note: "A VLMS is itself a GAMP-category computerised system that must be validated before it holds GxP records - 'who validates the validation system' is a real vendor-qualification question. Ask to see the platform's own IQ/OQ/PQ, and whether the RTM is built live during execution or assembled afterward (retroactive RTM assembly is a common inspection finding)." },
      { title: "How it relates to everything else in this app",
        body: "A VLMS is the container; the content is everything this reference covers. The equipment IQ/OQ/PQ tests, the risk-based C&Q strategy, the spec-and-qualification chain, the protocols, deviations, and change controls - those are the work a VLMS digitizes. Computer System Validation (CSV/GAMP 5) is also how the VLMS itself gets qualified. Using a VLMS doesn't change WHAT you verify or the science behind the acceptance criteria; it changes how you author, execute, and document it."
      }
    ],
    refs: [
      { label: "FDA 21 CFR Part 11 - Electronic Records & Signatures", link: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11" },
      { label: "EU GMP Annex 11 - Computerised Systems", link: "https://health.ec.europa.eu/system/files/2016-11/2015-11_annex11_en_0.pdf" },
      { label: "ISPE GAMP 5 (2nd ed) - the VLMS is itself a validated system", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" }
    ],
    example: {
      label: "What the digital workflow looks like",
      docTitle: "VLMS workflow - OQ protocol lifecycle (illustrative)",
      meta: [["System", "Validated VLMS"], ["Compliance", "Part 11 / Annex 11"]],
      blocks: [
        { h: "Protocol states", cols: ["Stage", "Who", "Action", "Record"],
          rows: [
            ["Draft", "Author", "Build from template + test library", "Versioned, audit-trailed"],
            ["Approved", "QA", "e-signature pre-execution", "Locked baseline"],
            ["In execution", "Tester", "Enter results, attach evidence, e-sign step", "Contemporaneous, ALCOA+"],
            ["Exception", "Tester/QA", "Log deviation, route, resolve", "Linked to the step"],
            ["Approved/closed", "QA", "Review, approve report", "RTM auto-updated"]
          ] },
        { h: "Note", text: "Each transition is captured with who/what/when and an e-signature. The RTM updates live as tests pass - no end-of-project binder assembly." }
      ]
    }
  },

  dq: {
    name: "DQ",
    sub: "Design Qualification",
    desc: "DQ is documented verification that the proposed design of equipment, a facility, or a system is suitable for its intended use - that it will, on paper, meet the URS before anything is built or bought. It is the second step of qualification (after the URS) and the last chance to catch a design gap cheaply, before steel is cut.",
    accent: "#4fd1c5",
    icon: "pdq",
    sections: [
      { title: "When you do it",
        body: "After the URS and design/functional specs exist, but before fabrication or purchase commitment. Annex 15 places DQ as the step that verifies the user requirements against the proposed design. Catching a gap here costs a document revision; catching it at IQ costs a rebuild." },
      { title: "What DQ verifies",
        steps: [
          "The design meets every URS requirement - a documented trace from each URS line to where the design satisfies it.",
          "Critical Aspects and Critical Design Elements (E2500/BG5) are present and engineered into the design.",
          "Compliance features are designed in: data integrity / Part 11 controls, materials of construction, hygienic design, safety.",
          "The vendor's proposed design, drawings, and specifications are reviewed and approved against the URS.",
          "Gaps, deviations, or requirement changes are captured and resolved before build."
        ] },
      { title: "What it produces",
        body: "A DQ report (or design-review record) that documents the requirement-to-design trace, any gaps found and their resolution, and formal approval that the design is fit to proceed to build/purchase. DQ is the design-side gate; IQ later proves the as-built matches this approved design." }
    ],
    refs: [
      { label: "EU GMP Annex 15 - Qualification and Validation (2015), §3 DQ", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" },
      { label: "ASTM E2500-25 - Specification, Design & Verification (design review)", link: "https://store.astm.org/e2500-25.html" },
      { label: "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed): Critical Design Elements", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" },
      { label: "ICH Q9(R1) - Quality Risk Management (risk-based design)", link: "https://www.ich.org/page/quality-guidelines" }
    ],
    example: {
      label: "What a DQ trace looks like",
      docTitle: "DQ-EQ-014 - Stability Chamber (Design Qualification)",
      meta: [["Doc No", "DQ-EQ-014"], ["Rev", "01"], ["System", "Stability Chamber SC-01"], ["Status", "Approved"]],
      blocks: [
        { h: "Purpose", text: "Verify the proposed design of Stability Chamber SC-01 satisfies URS-EQ-014 before purchase release." },
        { h: "Requirement-to-design trace (extract)", cols: ["URS #", "Requirement", "Design satisfies?", "Evidence"],
          rows: [
            ["3.1", "25 \u00b0C \u00b1 2 \u00b0C, 60 % RH \u00b1 5 %", "Yes", "Vendor spec sheet \u00a72.1; PID control"],
            ["3.4", "Mapping-capable, \u2265 15 sensor ports", "Yes", "GA drawing DWG-114 (16 ports)"],
            ["4.2", "Audit trail, unique logins (Part 11)", "Partial", "Open item OI-02 - confirm e-sig module"],
            ["5.1", "Door-open & power-loss alarm to BMS", "Yes", "Control narrative \u00a74.3"]
          ] },
        { h: "Open items", list: ["OI-02: Vendor to confirm 21 CFR Part 11 e-signature module included before PO release."] },
        { sign: ["Author / Engineering", "Reviewer / Validation", "Approver / QA"] }
      ]
    }
  },

  iq: {
    name: "IQ",
    sub: "Installation Qualification",
    desc: "IQ is documented verification that the equipment, as installed or modified, complies with the approved design and the manufacturer's recommendations - that the right thing was installed, correctly, in the right place, with the right utilities and documentation. It verifies the Design Specification.",
    accent: "#5aa9e6",
    icon: "piq",
    sections: [
      { title: "When you do it",
        body: "After installation, once the system is in place and connected, before operational testing. IQ may be combined with OQ as an IOQ for simpler equipment (Annex 15 permits this). FAT/SAT evidence can be leveraged to lighten IQ where justified and transport hasn't affected the function." },
      { title: "What IQ verifies",
        steps: [
          "Identity: make, model, serial match the purchase order and approved design.",
          "Installation: correctly installed, levelled, located per drawings, with required clearances.",
          "Utilities & connections: power, gases, water, drainage connected and match design.",
          "Components & instruments: an inventory of components and controlling/recording instruments, with calibration status (ID, range, due date).",
          "Materials of construction: product-contact surfaces and finish match the spec (where relevant).",
          "Documentation: manuals, drawings, certificates, spare-parts list, and SOPs present.",
          "Safety features installed (the operational test of them is OQ)."
        ] },
      { title: "What it produces",
        body: "An executed IQ protocol with each item recorded, deviations resolved, and a conclusion that the system is installed correctly and ready for OQ. IQ is the floor everything else stands on - an OQ on a wrongly-installed system proves nothing." }
    ],
    refs: [
      { label: "EU GMP Annex 15 - Qualification and Validation (2015), §4 IQ", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" },
      { label: "ASTM E2500-25 - Specification, Design & Verification", link: "https://store.astm.org/e2500-25.html" },
      { label: "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" }
    ],
    example: {
      label: "What an IQ test page looks like",
      docTitle: "IQ-EQ-014 - Stability Chamber SC-01",
      meta: [["Doc No", "IQ-EQ-014"], ["Rev", "01"], ["Executed by", "K. ___ / 12-Jun"], ["Phase", "Installation"]],
      blocks: [
        { h: "Instrument inventory (extract)", cols: ["Tag", "Instrument", "Cal ID", "Cal due", "Result"],
          rows: [
            ["TE-01", "Control RTD", "CAL-2291", "2027-01", "Pass"],
            ["RH-01", "Humidity probe", "CAL-2292", "2026-11", "Pass"],
            ["REC-01", "Data recorder", "CAL-2305", "2027-03", "Pass"]
          ] },
        { h: "Installation checks (extract)", cols: ["#", "Check", "Acceptance", "Result"],
          rows: [
            ["1", "Model/serial vs PO", "Matches PO-7741", "Pass"],
            ["2", "Levelled, clearances", "\u2265 100 mm rear", "Pass"],
            ["3", "Power & BMS link", "Per DWG-114", "Pass"],
            ["4", "Manuals & certs present", "All listed", "Pass"]
          ] },
        { h: "Deviations", text: "DEV-01: humidity probe cal cert missing at execution; obtained and attached 13-Jun. Closed." },
        { sign: ["Executed by", "Reviewed by", "QA approval"] }
      ]
    }
  },

  oq: {
    name: "OQ",
    sub: "Operational Qualification",
    desc: "OQ is documented verification that the installed system operates as intended across its full intended operating range - that the controls, alarms, interlocks, and functions work, at the limits, not just at a comfortable setpoint. It verifies the Functional Specification.",
    accent: "#4fd1c5",
    icon: "poq",
    sections: [
      { title: "When you do it",
        body: "After a successful IQ (or together with it as IOQ). OQ challenges function across the range using calibrated test instruments; PQ then follows on a system that has passed OQ." },
      { title: "What OQ verifies",
        steps: [
          "Operating ranges: the system holds and controls across the full intended range, including at the upper and lower limits (worst case), not just nominal.",
          "Control functions: setpoint control, stability, and response behave per the functional spec.",
          "Alarms & interlocks: each alarm triggers at the right threshold; safety interlocks and emergency stops actually stop the right thing.",
          "Operational sequences: cycles, modes, and transitions run correctly.",
          "Data & security functions: recording, audit trail, and access controls operate (Part 11 functions proven here).",
          "SOP confirmation: operating, cleaning, and calibration SOPs are workable as written."
        ] },
      { title: "What it produces",
        body: "An executed OQ protocol proving the system functions across its range, with deviations resolved and a conclusion releasing it to PQ. OQ proves the box can do what it's supposed to; PQ proves it does so reproducibly in real use." }
    ],
    refs: [
      { label: "EU GMP Annex 15 - Qualification and Validation (2015), §5 OQ", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" },
      { label: "ASTM E2500-25 - Specification, Design & Verification", link: "https://store.astm.org/e2500-25.html" },
      { label: "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" }
    ],
    example: {
      label: "What an OQ test looks like",
      docTitle: "OQ-EQ-014 - Stability Chamber SC-01",
      meta: [["Doc No", "OQ-EQ-014"], ["Rev", "01"], ["Test", "Setpoint control & alarms"], ["Phase", "Operational"]],
      blocks: [
        { h: "Test OQ-3: Temperature control at range limits", text: "Set chamber to low and high intended setpoints; record stability over 2 h once stable." },
        { h: "Result", cols: ["Setpoint", "Acceptance", "Observed", "Result"],
          rows: [
            ["25 \u00b0C", "25 \u00b1 2 \u00b0C", "24.6\u201325.3 \u00b0C", "Pass"],
            ["RH 60 %", "60 \u00b1 5 %", "57\u201362 %", "Pass"]
          ] },
        { h: "Test OQ-5: Alarm verification", cols: ["Alarm", "Trigger at", "Observed", "Result"],
          rows: [
            ["High-temp", "\u2265 28 \u00b0C", "28.1 \u00b0C \u2192 alarm + BMS", "Pass"],
            ["Door-open", "> 60 s open", "alarm at 62 s", "Pass"],
            ["Power-loss", "on mains drop", "alarm + log entry", "Pass"]
          ] },
        { h: "Acceptance", text: "All control and alarm functions meet the FS across the intended range." },
        { sign: ["Executed by", "Reviewed by", "QA approval"] }
      ]
    }
  },

  pq: {
    name: "PQ",
    sub: "Performance Qualification",
    desc: "PQ is documented verification that the system performs reproducibly in real, routine use - with actual or representative loads, over enough runs to show consistency. It verifies the URS and closes the V-Model loop. PQ may be combined with OQ or run alongside process validation.",
    accent: "#58e6a8",
    icon: "ppq",
    sections: [
      { title: "When you do it",
        body: "After IQ and OQ are complete and approved. PQ runs under normal operating conditions with real or worst-case loads, typically over several consecutive successful runs to demonstrate reproducibility." },
      { title: "What PQ verifies",
        steps: [
          "Real-use performance: the system meets the URS under actual loaded, routine conditions - not empty-chamber ideal.",
          "Reproducibility: consistent results across multiple consecutive runs (the number and rationale are justified, often three).",
          "Worst case: challenging load patterns, fill levels, or configurations are included.",
          "The complete process: for equipment tied to a process, PQ may merge with process validation (PPQ) to prove the process, not just the box.",
          "Monitoring placement: confirms where routine monitoring sensors should sit (e.g. at the worst-case location found)."
        ] },
      { title: "What it produces",
        body: "An executed PQ protocol (and report) demonstrating reproducible, fit-for-use performance against the URS, releasing the system for routine GMP use. A traceability matrix shows every URS line was ultimately verified - PQ is where the loop closes." }
    ],
    refs: [
      { label: "EU GMP Annex 15 - Qualification and Validation (2015), §6 PQ", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" },
      { label: "FDA Process Validation: General Principles and Practices (2011)", link: "https://www.fda.gov/files/drugs/published/Process-Validation--General-Principles-and-Practices.pdf" },
      { label: "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" },
      { label: "ICH Q8(R2) / Q9(R1) / Q10 - Quality guidelines", link: "https://www.ich.org/page/quality-guidelines" }
    ],
    example: {
      label: "What a PQ run summary looks like",
      docTitle: "PQ-EQ-014 - Stability Chamber SC-01 (loaded mapping)",
      meta: [["Doc No", "PQ-EQ-014"], ["Rev", "01"], ["Load", "Worst-case full"], ["Runs", "3 consecutive"]],
      blocks: [
        { h: "Study", text: "Loaded temperature/humidity mapping at 25 \u00b0C / 60 % RH, 16 sensors, fully loaded chamber, 24 h per run, 3 consecutive runs." },
        { h: "Result summary", cols: ["Run", "Temp range", "RH range", "Max gradient", "Result"],
          rows: [
            ["1", "24.4\u201325.6 \u00b0C", "56\u201363 %", "1.2 \u00b0C", "Pass"],
            ["2", "24.5\u201325.5 \u00b0C", "57\u201362 %", "1.0 \u00b0C", "Pass"],
            ["3", "24.3\u201325.7 \u00b0C", "56\u201363 %", "1.4 \u00b0C", "Pass"]
          ] },
        { h: "Worst-case location", text: "Coldest spot: bottom-rear corner (sensor 14). Routine monitoring probe relocated there." },
        { h: "Conclusion", text: "All runs within URS-EQ-014 limits; performance reproducible. Chamber released for routine use." },
        { sign: ["Executed by", "Reviewed by", "QA approval"] }
      ]
    }
  },

  capa: {
  "name": "Deviations & CAPA",
  "sub": "Investigating and fixing what goes wrong, in operation and in execution",
  "desc": "A deviation is any unplanned departure from an approved procedure or specification; CAPA (Corrective and Preventive Action) is the structured system that investigates it, fixes the root cause, and stops it recurring. Together with Change Control they are the three interlocking quality-system processes that keep a validated state honest in daily operation. Deviations and weak CAPA are among the most-cited areas in FDA warning letters. The same discipline applies during qualification and validation execution, where an unplanned departure from an approved protocol is itself a deviation.",
  "accent": "#e0726a",
  "icon": "capa",
  "sections": [
    {
      "title": "Deviation, OOS, change, CAPA - keep them straight",
      "bullets": [
        "Deviation - an UNPLANNED departure from an approved procedure or spec (a missed step, an alarm, an excursion). Investigated after the fact.",
        "OOS (Out-of-Specification) - a test RESULT that falls outside acceptance criteria. A deviation is a process failure; an OOS is a result failure. Related but distinct (OOS handling has its own expectations, e.g. FDA OOS guidance).",
        "Change control - a PLANNED, intentional change, assessed and approved BEFORE it happens (see the Change Control page). The mirror image of a deviation.",
        "CAPA - the action system triggered by a deviation/OOS/complaint/audit finding once its root cause is known: correct it, and prevent recurrence."
      ]
    },
    {
      "title": "Correction vs corrective vs preventive (the distinction inspectors probe)",
      "bullets": [
        "Correction - the immediate fix / containment (e.g. quarantine the affected batch, re-clean the line). Stops the bleeding; does not address why.",
        "Corrective Action (CA) - eliminates the ROOT CAUSE of the problem that already occurred (e.g. revise the SOP, retrain, re-engineer the step).",
        "Preventive Action (PA) - addresses the systemic cause across SIMILAR processes/equipment to stop it happening elsewhere, before it does. Tracked to independent closure.",
        "A CAPA that only contains a correction ('we retrained the operator') with no real root-cause action is the classic weak CAPA that draws a 483."
      ]
    },
    {
      "title": "Deviation classification",
      "steps": [
        "Minor - no impact on product quality, the validated state, or compliance (e.g. a documentation typo caught and corrected).",
        "Major - potential impact on quality or a GMP system, but not directly on the released product; needs investigation and CAPA.",
        "Critical - direct impact on product quality, patient safety, or data integrity; may trigger batch rejection, recall, or regulatory notification.",
        "Classification sets investigation depth, timeline, and approval level. Get it wrong (downgrading a critical event) and the whole response is undersized - a common finding."
      ]
    },
    {
      "title": "The deviation-to-CAPA lifecycle",
      "steps": [
        "Detect & contain - identify the event, take immediate correction/containment, and record it promptly (contemporaneous, ALCOA+).",
        "Register & classify - log the deviation; assign minor/major/critical and an owner.",
        "Impact assessment - what product, batches, systems, and records are affected? Is anything else at risk?",
        "Root cause analysis - go past 'human error' to the systemic cause using structured tools (5-Why, Ishikawa/fishbone, fault tree analysis).",
        "Define CAPA - corrective action on the root cause plus preventive action across similar areas; assign owners and due dates.",
        "Implement - execute the actions (which may include re-qualification, SOP changes, retraining, or a change control).",
        "Effectiveness check - confirm with objective evidence that the actions worked and created no new problems, before closing.",
        "QA closure - Quality reviews and formally closes; trend the data to catch recurring or systemic issues."
      ],
      "note": "Timeliness matters: investigations are typically expected to close within a defined window (often ~30 days) unless a documented justification extends it. An overdue-CAPA backlog is itself an inspection red flag."
    },
    {
      "title": "Root cause analysis - go deeper than 'operator error'",
      "body": "The quality of a CAPA is the quality of its root-cause analysis. Inspectors repeatedly cite shallow or circular RCA ('the operator made a mistake, so we retrained the operator') that never reaches the systemic cause (why was the SOP ambiguous? why did the design allow the error? why did detection fail?). Structured tools force depth: 5-Why drills down a causal chain, Ishikawa/fishbone organises candidate causes by category (man, machine, method, material, measurement, environment), and fault tree analysis works backward from the failure. The test of a good root cause: if you fixed it, could the event still recur? If yes, you haven't reached it."
    },
    {
      "title": "Regulatory basis and where it connects",
      "body": "21 CFR 211.192 requires that any unexplained discrepancy or batch failure be thoroughly investigated (Part 211 doesn't use the word 'CAPA', but FDA inspects for exactly this capability). ICH Q10 names the CAPA system as a core element of the Pharmaceutical Quality System (alongside process/product monitoring, change management, and management review). EU GMP Chapters 1 and 8 require risk-based detection, investigation, and correction of quality defects. The three operational pillars interlock: a deviation may spawn a CAPA, and a CAPA may require a change control to implement permanently. This page is the 'something went wrong' counterpart to the Change Control page's 'we want to change something on purpose.'"
    },
    {"title": "Discrepancies during qualification execution (the validation-specific case)", "body": "The deviations above are framed for routine operation (batch records, OOS results). A related but distinct case is a discrepancy that happens while a qualification or validation protocol is being executed: a test step cannot be run as written, an acceptance criterion is not met, or the protocol needs a change part-way through. These are handled through the protocol, not only the manufacturing deviation system, and the distinction between a planned and an unplanned change is what decides the route.", "table": {"cols": ["Situation", "When", "How it is handled"], "rows": [["Protocol amendment", "A planned change to the protocol, made after approval but before (or during) execution.", "A controlled change to the protocol, reviewed and approved by the same roles that approved the original, and appended to it. Not a failure."], ["Protocol deviation / test incident", "An unplanned departure during execution: a step done differently, an unexpected event, or a result outside the stated criterion.", "Recorded against the protocol at the point it occurs, investigated, and dispositioned before the summary report can close."], ["Acceptance-criterion failure", "A measured result does not meet the pre-approved limit.", "A deviation is raised and investigated. The limit is never quietly relaxed to pass; changing an acceptance criterion to match an observed result is testing into compliance."]]}, "bullets": ["Every protocol deviation needs a documented cause, the people involved, and an impact assessment on the integrity of the data.", "The key output is a conclusion: given the deviation, is the data still valid, or must that part of the protocol be re-executed? That decision is the point of the investigation.", "Deviations are carried into the qualification or validation summary report, each as its own entry with its disposition, so the report reflects what actually happened, not the ideal run.", "A minor, contained issue found at Factory Acceptance Testing can take a conditional pass with a punch-list item, closed before the summary report signs off (see the Commissioning, FAT, and VSR pages).", "Significant unplanned changes to an approved protocol during execution are documented as deviations with justification (EU GMP Annex 15). A recurring or systemic protocol issue feeds the CAPA system like any other deviation."], "note": "The line is simple: a change you decide on before it happens is a planned change (a protocol amendment, or a change control); a departure you discover during or after execution is an unplanned deviation. A planned deviation never substitutes for change control, and an acceptance criterion is never changed to make a failing result pass."}
  ],
  "refs": [
    {
      "label": "FDA 21 CFR 211.192 - Production Record Review / Investigations",
      "link": "https://www.ecfr.gov/current/title-21/section-211.192"
    },
    {
      "label": "ICH Q10 - Pharmaceutical Quality System (CAPA element)",
      "link": "https://www.ich.org/page/quality-guidelines"
    },
    {
      "label": "EudraLex Volume 4 - EU GMP (Chapters 1 & 8)",
      "link": "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en"
    },
    {
      "label": "ICH Q9(R1) - Quality Risk Management",
      "link": "https://www.ich.org/page/quality-guidelines"
    }
  ],
  "example": {
    "label": "What a deviation to CAPA record looks like",
    "docTitle": "Deviation DEV-2026-042 to CAPA (illustrative)",
    "meta": [
      [
        "Event",
        "Unplanned departure - investigated after the fact"
      ],
      [
        "RCA",
        "Go past 'operator error' to the systemic cause"
      ]
    ],
    "blocks": [
      {
        "h": "The record",
        "cols": [
          "Step",
          "Entry"
        ],
        "rows": [
          [
            "Deviation",
            "Stability samples found at 27 °C - chamber excursion overnight"
          ],
          [
            "Classification",
            "Major (on-test samples potentially affected)"
          ],
          [
            "Correction (immediate)",
            "Move samples to a qualified chamber; quarantine; assess impact"
          ],
          [
            "Root cause (5-why)",
            "Humidifier tray ran dry -> low-water alarm not configured -> config gap at OQ"
          ],
          [
            "Corrective action",
            "Configure + verify low-water / over-temp alarm on this chamber"
          ],
          [
            "Preventive action",
            "Audit alarm config across all stability chambers; add to OQ template"
          ]
        ]
      },
      {
        "h": "The distinction inspectors probe",
        "text": "Correction stops the bleeding (move the samples). Corrective action fixes the root cause here (configure the missing alarm). Preventive action stops it across similar equipment (audit every chamber, fix the template). A CAPA that retrains the operator and stops there never reaches the systemic cause - the classic shallow-RCA finding."
      }
    ]
  }
},

  cleaning: {
  "name": "Cleaning Validation",
  "sub": "Proving equipment is clean enough",
  "desc": "Cleaning validation is documented evidence that a cleaning procedure consistently reduces product, cleaning-agent, and microbial residues on shared equipment to scientifically justified, safe limits. On multi-product equipment it is what stops one product cross-contaminating the next. Annex 15 treats it as a co-equal of process validation, and modern practice is built on health-based exposure limits, not the old arbitrary thresholds.",
  "accent": "#4fd1c5",
  "icon": "clean",
  "sections": [
    {
      "title": "What it protects against",
      "body": "Most equipment in a plant is used for more than one product. Cleaning validation proves that after cleaning, the carryover of Product A onto Product B is low enough that a patient taking B is never exposed to an unsafe amount of A, its degradants, the cleaning agent, or microbial contamination. It applies to product-contact surfaces of shared equipment and is a direct GMP requirement (EU GMP Annex 15; FDA cGMP 21 CFR 211.67 equipment cleaning). The CIP/SIP systems in the equipment menu are the machinery; this is the validation behind them."
    },
    {
      "title": "Health-based limits replaced the old rules",
      "bullets": [
        "Old criteria (largely discontinued): the '10 ppm' rule, '1/1000th of the minimum therapeutic dose', and 'visually clean'. These lacked robust scientific rationale; relying on them now is a common Form 483 finding.",
        "HBEL (Health-Based Exposure Limit) - the modern foundation, expressed as a PDE or ADE.",
        "PDE (Permitted Daily Exposure) / ADE (Acceptable Daily Exposure) - the maximum daily amount of a substance a person can be exposed to over a lifetime with no adverse effect. Derived from toxicological data with justified safety factors.",
        "Visually clean is still used as an ADDITIONAL check, never as the sole acceptance criterion.",
        "Driven by EMA's HBEL guideline, WHO TRS 1033 Annex 2 (2021), PIC/S, and APIC for APIs."
      ]
    },
    {
      "title": "MACO - the carryover limit",
      "body": "MACO (Maximum Allowable Carryover) is the most product A that may remain on shared equipment so that the next patient taking product B stays below A's health-based limit. The HBEL/PDE-based form is essentially: MACO = (PDE of A x batch size of B) / (max daily dose of B). The worst-case pairing (the most potent or hardest-to-clean A into the smallest-ratio B) is chosen so a single validated case covers the group. MACO is then converted into actionable swab and rinse limits using the equipment surface area and sample volumes.",
      "note": "Inspectors look for traceability from toxicology (the PDE) all the way to the swab limit, with every safety/uncertainty factor justified rather than inherited from an old SOP. Increasingly they expect operators, not just QA, to be able to explain why a given MACO number was chosen."
    },
    {
      "title": "Sampling: swab vs rinse",
      "bullets": [
        "Swab sampling - physically wiping a defined area, targeting worst-case hard-to-clean spots (corners, gaskets, dead legs, welds). Direct, location-specific, good for hot spots.",
        "Rinse sampling - analysing the final rinse solution; covers large or inaccessible surfaces the swab can't reach, but is more dilute and indirect.",
        "Most programs use both: swabs on worst-case locations plus a rinse for overall coverage.",
        "Recovery studies are mandatory: spike a known residue onto the surface material (e.g. 316L stainless) and confirm the method recovers a justified amount (commonly >=70%). Limits are corrected for recovery."
      ]
    },
    {
      "title": "Analytical methods",
      "bullets": [
        "TOC (Total Organic Carbon) - fast, sensitive screen for total organic residue (product + cleaning agent); great for rinse samples.",
        "HPLC / UV - specific quantitation of a particular API residue against its limit.",
        "Conductivity / pH - for detecting ionic cleaning-agent residue.",
        "Microbial + endotoxin (e.g. LAL) - bioburden and, for sterile/parenteral equipment, endotoxin limits.",
        "Every method must be validated (specificity, LOD/LOQ, linearity, accuracy) for the residue and limit it's used against."
      ]
    },
    {
      "title": "Worst-case grouping and the lifecycle",
      "body": "You don't validate every product-equipment combination individually. Bracketing/worst-case grouping picks the hardest-to-clean product and the most-challenging equipment to represent a family, with a documented rationale. Like process validation, cleaning validation is a lifecycle: design the cleaning procedure, qualify it (typically across several consecutive successful runs), then maintain it through routine cleaning verification, change control, and periodic review. Annex 15 frames cleaning validation as validation in its own right; Annex 1 (2023) ties it into the overall contamination control strategy for sterile manufacturing.",
      "note": "A change to the product mix, equipment, or cleaning agent feeds straight into Change Control and may demand re-validation. Cleaning validation is not 'done once' - it's a maintained state, exactly like equipment qualification."
    }
  ],
  "refs": [
    {
      "label": "EU GMP Annex 15 - Qualification and Validation (cleaning)",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "WHO TRS 1033 Annex 2 - HBELs in Cleaning Validation (2021)",
      "link": "https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex2-points-to-consider-when-incl-hbels-in-cleaning-validation.pdf"
    },
    {
      "label": "FDA 21 CFR 211.67 - Equipment Cleaning and Maintenance",
      "link": "https://www.ecfr.gov/current/title-21/section-211.67"
    },
    {
      "label": "APIC - Guidance on Cleaning Validation in API Manufacture",
      "link": "https://apic.cefic.org"
    }
  ],
  "example": {
    "label": "What a MACO calculation looks like",
    "docTitle": "Health-based carryover limit - PDE to swab limit (illustrative numbers)",
    "meta": [
      [
        "Basis",
        "HBEL / PDE (WHO TRS 1033 Annex 2)"
      ],
      [
        "Chain",
        "Toxicology -> MACO -> surface -> swab"
      ]
    ],
    "blocks": [
      {
        "h": "Worked calculation",
        "cols": [
          "Step",
          "Value"
        ],
        "rows": [
          [
            "PDE (HBEL) of Product A - from toxicology",
            "0.01 mg/day"
          ],
          [
            "Min batch size of next Product B (MBS)",
            "50 kg"
          ],
          [
            "Max daily dose of Product B (MDD)",
            "500 mg/day"
          ],
          [
            "MACO = PDE x MBS / MDD",
            "1 g per batch of B"
          ],
          [
            "Shared product-contact area",
            "5 m² (50,000 cm²)"
          ],
          [
            "Area limit = MACO / area",
            "20 µg/cm²"
          ],
          [
            "Per-swab limit (25 cm² swab)",
            "500 µg/swab"
          ],
          [
            "Analytical method (TOC / HPLC)",
            "Validated LOQ well below 500 µg/swab"
          ]
        ]
      },
      {
        "h": "The chain is the point",
        "text": "Every step traces from the PDE (toxicology) to the number the analyst actually measures on a swab, each factor justified - that traceability is what inspectors check. Visually-clean stays an additional requirement, never a substitute for the calculated limit. Change the product mix, equipment, or agent and the calculation (and Change Control) re-opens."
      }
    ]
  }
},

  pv: {
  "name": "Annex 15 / PV",
  "sub": "Qualification & Process Validation",
  "desc": "Qualification proves equipment is fit for use; process validation proves the manufacturing process makes a quality product consistently. EU GMP Annex 15 is the European rulebook for both; FDA's Process Validation guidance is the US lifecycle model. This page connects the two and shows where the IQ/OQ/PQ test menu in this app actually sits inside the bigger validation picture.",
  "accent": "#58e6a8",
  "icon": "lifecycle",
  "sections": [
    {
      "title": "Qualification vs validation (the distinction)",
      "body": "They are not synonyms. Qualification is about equipment, utilities, and facilities - proving a specific system is installed, operates, and performs as intended (DQ/IQ/OQ/PQ). Validation is broader - proving a process (manufacturing, cleaning, analytical method, computerised system) reliably produces a defined result. Qualification is usually a prerequisite for validation: you qualify the autoclave (equipment), then validate the sterilization process that runs on it. This entire app's test menu is the qualification layer; PV is the process layer built on top of it."
    },
    {
      "title": "EU GMP Annex 15 - the European rulebook",
      "body": "Annex 15 (Qualification and Validation) was revised 30 March 2015, effective 1 October 2015, replacing the 2001 version. The revision aligned EU qualification with ICH Q8/Q9/Q10/Q11, introduced the URS as a lifecycle reference point, added FAT/SAT as formal stages, and built quality risk management through the whole lifecycle. Critically, it states retrospective validation is no longer an acceptable approach.",
      "note": "A 2026 Annex 15 revision is in motion: a joint EMA-PIC/S concept paper (issued Jan 2026, consultation Feb-Apr 2026) signals expanded expectations on third-party/outsourced validation, deviation handling, and bringing URS/FAT/SAT into the active-substance (API) sector. Treat the 2015 text as current; watch for the revision before it drives a procedure."
    },
    {
      "title": "The Annex 15 qualification stages",
      "steps": [
        "URS - user requirements; the reference point the whole lifecycle verifies back against.",
        "DQ - Design Qualification: documented verification the proposed design is fit for intended use (challenge the engineering before you build).",
        "FAT / SAT - Factory and Site Acceptance Testing; for novel or complex equipment, evaluate at the vendor and on arrival. Where justified and transport doesn't affect function, FAT/SAT results can be leveraged to lighten IQ/OQ instead of repeating them.",
        "IQ - Installation Qualification: installed/modified per approved design (verifies the DS).",
        "OQ - Operational Qualification: operates across the intended range (verifies the FS). Can be combined with IQ as an IOQ for simpler equipment.",
        "PQ - Performance Qualification: performs reproducibly under real/worst-case use (verifies the URS). May be combined with OQ or run alongside process validation.",
        "Requalification - periodic, risk-based re-verification that the qualified state holds."
      ]
    },
    {
      "title": "FDA Process Validation - the lifecycle model (and where qualification lives)",
      "steps": [
        "Stage 1 - Process Design: define the commercial process from development and scale-up knowledge (CQAs, CPPs, the design space).",
        "Stage 2 - Process Qualification: confirm the process reproduces at commercial scale. THIS is where equipment IQ/OQ/PQ and the PPQ (Process Performance Qualification) batches live - the test menu in this app is largely a Stage 2 activity.",
        "Stage 3 - Continued Process Verification (CPV): ongoing assurance during routine production that the process stays in a state of control (statistical trending, monitoring).",
        "The thread: validation is not a one-time event. Stage 2 proves it once; Stage 3 proves it keeps working."
      ],
      "note": "Equipment qualification is a building block of Stage 2, not a parallel track. A flawless IQ/OQ/PQ that isn't connected to the process it serves is an orphan - Annex 15 and the FDA lifecycle both want qualification justified by the process risk it controls."
    },
    {
      "title": "EU vs FDA - the same goal, different shape",
      "bullets": [
        "FDA: one lifecycle model (Stage 1/2/3), applied to all processes.",
        "EU Annex 15: keeps the traditional approach (a defined number of batches, often three) AND allows Continuous Process Verification (CPV, for QbD/ICH Q8 processes) AND a hybrid of the two.",
        "Both reject retrospective validation and both demand QRM throughout.",
        "Practical effect: a global site usually runs an integrated program that satisfies both - lifecycle thinking (FDA) with the EU's explicit batch/CPV/hybrid options documented in the VMP."
      ]
    },
    {
      "title": "The Validation Master Plan (VMP)",
      "body": "The VMP is the site-level document that ties all of this together: scope, organisational responsibilities, the list of systems/processes requiring qualification or validation, the approach for each, acceptance-criteria standards, deviation management, and the requalification/revalidation strategy. Annex 15 expanded VMP expectations in 2015 to explicitly include deviation handling and acceptance-criteria standards. If qualification protocols are the chapters, the VMP is the table of contents and the rules of the book."
    }
  ],
  "refs": [
    {
      "label": "EU GMP Annex 15 - Qualification and Validation (2015)",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "FDA Process Validation: General Principles and Practices (2011)",
      "link": "https://www.fda.gov/files/drugs/published/Process-Validation--General-Principles-and-Practices.pdf"
    },
    {
      "label": "ICH Q8(R2) / Q9(R1) / Q10 / Q11 - Quality guidelines",
      "link": "https://www.ich.org/page/quality-guidelines"
    }
  ],
  "example": {
    "label": "What a VMP extract looks like",
    "docTitle": "Validation Master Plan - systems inventory + approach (extract, illustrative)",
    "meta": [
      [
        "Document",
        "Site Validation Master Plan (VMP)"
      ],
      [
        "Frames",
        "Scope, approach, and responsibility per system"
      ]
    ],
    "blocks": [
      {
        "h": "Systems / processes and their approach",
        "cols": [
          "System / process",
          "Classification",
          "Approach",
          "Stage"
        ],
        "rows": [
          [
            "Purified water loop",
            "Direct impact",
            "IQ/OQ/PQ + phased sampling",
            "Qual + ongoing"
          ],
          [
            "Steriliser (autoclave)",
            "Direct impact",
            "IQ/OQ/PQ + load patterns",
            "Stage 2 qual"
          ],
          [
            "Tablet press",
            "Direct impact",
            "IQ/OQ/PQ feeds PPQ",
            "Stage 2 -> PPQ"
          ],
          [
            "Aseptic fill process",
            "Direct impact",
            "PPQ + media fills (CPV ongoing)",
            "Stage 2 + 3"
          ],
          [
            "Plant cooling water",
            "Not direct impact",
            "Commissioning (GEP) only",
            "n/a"
          ]
        ]
      },
      {
        "h": "Where this app sits",
        "text": "The equipment IQ/OQ/PQ menus here are mostly a Stage 2 (Process Qualification) building block - they prove the box before the PPQ batches prove the process on it. The VMP connects each qualified system to the process it serves, so an IQ/OQ/PQ is never an orphan."
      }
    ]
  }
},

  bg5x: {
  "name": "Running Integrated C&Q",
  "sub": "BG5 / E2500 in practice",
  "desc": "The BG5 and E2500 pages explain what risk-based C&Q is. This page is how you run it: the actual sequence, the decision gates, and the leverage choices that separate an efficient integrated program from a traditional 'qualify everything' one. It's the procedural counterpart to the conceptual approach pages - read those first, then this.",
  "accent": "#9b8bea",
  "icon": "flow",
  "sections": [
    {
      "title": "The mental shift first",
      "body": "Traditional qualification asks 'what tests do we run on this equipment?' and runs the full IQ/OQ/PQ menu under formal protocols. Integrated C&Q (BG5/E2500) asks a different first question: 'what about this system can affect product quality or patient safety, and how do we verify just those things with the right rigor?' Same candidate tests, but now risk decides which become formal qualification and which are covered by good commissioning. The menu in this app never shrinks - your execution plan does."
    },
    {
      "title": "The sequence (how an integrated C&Q project actually runs)",
      "steps": [
        "URS first - capture user requirements, including the quality-critical ones. Everything downstream traces here.",
        "System classification - is this a Direct-Impact system (can affect product quality) or Not-Direct-Impact? Not-direct systems are delivered under GEP/commissioning alone, no formal qualification.",
        "System risk assessment - for direct-impact systems, assess where the real risks to quality are. This is the ICH Q9 step (see the Risk page).",
        "Identify Critical Aspects (CAs) and Critical Design Elements (CDEs) - the specific functions/features that must work to protect quality (CA, from E2500) and the engineered features that deliver them (CDE, BG5's addition).",
        "Design review / DQ - confirm the design satisfies the URS and that CDEs are present and correct. CDEs are reviewed here.",
        "C&Q planning - write the plan that says, per requirement, HOW it will be verified: by commissioning, by qualification, or by leveraging vendor/FAT evidence.",
        "Leverage decision - the heart of efficiency: decide what commissioning, FAT/SAT, and vendor documentation can be USED as verification rather than re-tested. Requires a supplier/vendor assessment and GEP-quality documentation (the Engineering Quality Process makes this defensible).",
        "C&Q testing & documentation - execute. CDEs get verified through formal qualification; non-critical aspects ride on commissioning.",
        "Acceptance & release - quality reviews and releases the system for GMP use, focused on the critical aspects.",
        "Periodic review - maintain the qualified state over the operational life, focused on the CDEs."
      ]
    },
    {
      "title": "The leverage decision (where people get it wrong)",
      "body": "The single biggest efficiency lever - and the single biggest audit risk - is what you leverage. Done right, a vendor's documented FAT or a commissioning loop check counts toward qualification and you don't repeat it. Done wrong, you either (a) repeat everything anyway, losing all the benefit, or (b) leverage evidence that isn't GMP-grade and can't survive an inspection. The dividing line: the upstream work must be performed under established GEP, documented to a defensible standard, and assessed by quality (via the Engineering Quality Process). Leverage is earned by documentation quality, never assumed from a vendor's reputation.",
      "note": "A correct CDE for a sterilizer (e.g. the temperature-control loop) is still formally qualified even in a fully integrated program. Risk-based does NOT mean light-touch on critical aspects - it means concentrating the rigor there and relieving it elsewhere."
    },
    {
      "title": "Common failure modes",
      "bullets": [
        "Pruning the test menu to 'look risk-based' - dropping candidate tests instead of justifying coverage. The menu is the complete set; risk decides execution depth, not menu length.",
        "Leveraging un-GEP'd vendor data - no supplier assessment, no document quality, then it collapses under inspection.",
        "CDEs identified on paper but never traced to a specific verification - the qualification doesn't actually prove the critical aspect.",
        "Treating classification as a formality - calling everything direct-impact (no efficiency gained) or wishfully not-direct (quality risk uncovered).",
        "No periodic review tied to CDEs - the qualified state quietly decays."
      ]
    },
    {
      "title": "How this maps to the equipment menu in this app",
      "body": "Open any equipment page: the IQ/OQ/PQ list is the candidate verification set, and the risk block (archetype questions) is your starting point for classification and CA/CDE thinking. In a traditional program you'd execute most of the menu under formal protocols. In an integrated program you'd run the risk assessment, mark the critical-aspect tests for formal qualification, and plan to leverage the rest from commissioning - same menu, fewer formal protocols, rigor concentrated where it protects the patient. The approach-neutral menu is deliberately built to support both."
    }
  ],
  "refs": [
    {
      "label": "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)",
      "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"
    },
    {
      "label": "ASTM E2500-25 - Specification, Design & Verification",
      "link": "https://store.astm.org/e2500-25.html"
    },
    {
      "label": "ISPE Good Practice Guide: Good Engineering Practice (2nd ed)",
      "link": "https://ispe.org/publications/guidance-documents/good-practice-guide-good-engineering-practice-2nd-edition"
    }
  ],
  "example": {
    "label": "What a leverage decision looks like",
    "docTitle": "Leverage register - what counts toward qualification (illustrative)",
    "meta": [
      [
        "Program",
        "Integrated C&Q (BG5 / E2500)"
      ],
      [
        "Gate",
        "Leverage only with GEP + documented assessment"
      ]
    ],
    "blocks": [
      {
        "h": "Evidence sources and the decision",
        "cols": [
          "Activity / evidence",
          "Leveraged into qualification?",
          "What it requires"
        ],
        "rows": [
          [
            "Vendor FAT - functional checks",
            "Yes (in part)",
            "Vendor assessment + GEP-managed FAT protocol"
          ],
          [
            "Commissioning loop checks",
            "Yes",
            "GEP commissioning records, calibrated tools"
          ],
          [
            "Vendor weld / material certs",
            "Yes",
            "Documented, traceable certs reviewed"
          ],
          [
            "Steriliser temp-control loop (a CDE)",
            "No - qualified formally",
            "Critical Design Element - always verified"
          ],
          [
            "Un-assessed vendor 'test report'",
            "No",
            "No supplier assessment = not leverageable"
          ]
        ]
      },
      {
        "h": "The line",
        "text": "Leverage is the biggest efficiency lever and the biggest audit risk. A commissioning check or vendor FAT counts only when GEP and a documented vendor assessment stand behind it. A CDE (here the steriliser's control loop) is verified formally no matter how good the commissioning was - risk-based never means light-touch on a critical aspect."
      }
    ]
  }
},

  protocol: {
  "name": "Protocol Generation",
  "sub": "Writing & executing qualification protocols",
  "desc": "A qualification protocol is the pre-approved plan that says, before you touch the equipment, exactly what you will test, how, and what counts as passing. Protocols are the working documents this whole app feeds: each IQ/OQ/PQ test string is a candidate line in one. This page covers what they contain, how they're written and approved, how they're executed, and the rules that keep them inspection-ready.",
  "accent": "#e0935a",
  "icon": "protocol",
  "sections": [
    {
      "title": "What a protocol is (and the cardinal rule)",
      "body": "A protocol is an approved, written plan defining the testing for a qualification phase (IQ, OQ, or PQ) - its purpose, scope, tests, methods, and acceptance criteria - authored and signed BEFORE execution begins. The cardinal rule: acceptance criteria are defined and approved up front, never after you see the result. Writing or changing a limit to match an outcome you already observed is 'testing into compliance' and is a serious data-integrity failure. Pre-approval is what makes the result evidence rather than opinion."
    },
    {
      "title": "What a protocol contains",
      "bullets": [
        "Purpose & scope - what's being qualified, boundaries, what's excluded.",
        "References - URS/FS/DS, VMP, SOPs, drawings, vendor manuals, applicable standards.",
        "Roles & responsibilities - who executes, who reviews, who approves (and the QA role).",
        "System description - the equipment, its components, utilities, and software.",
        "Prerequisites - calibration status, training, prior phases complete, safety.",
        "Test cases - each with objective, method/procedure, sample size, the data to record, and a PRE-DEFINED acceptance criterion.",
        "Acceptance criteria - measurable pass/fail conditions traceable to a requirement.",
        "Deviation handling - how out-of-spec results and protocol changes are documented and resolved.",
        "Data capture - attachments, raw-data references, instrument IDs (the ALCOA+ layer).",
        "Approval signatures - author, reviewer, QA, dated, before execution."
      ]
    },
    {
      "title": "The protocol lifecycle",
      "steps": [
        "Author - write the protocol from the URS/FS/DS and a risk-based view of what must be verified; reuse a master/template where one exists.",
        "Review & pre-approve - technical review plus QA approval; signatures and dates applied before any test runs.",
        "Execute - perform each test as written, record raw data contemporaneously, attach evidence, initial/date every entry.",
        "Handle deviations - document any out-of-spec result or any change to the approved protocol, assess impact, resolve and justify before closure.",
        "Compile the report - summarize results against acceptance criteria, list deviations and resolutions, state a clear qualified/not-qualified conclusion.",
        "Final approval & release - QA reviews and approves the report; the system is released for use (or for the next phase).",
        "Archive - store protocol, raw data, and report as GMP records, retrievable for their full retention period."
      ]
    },
    {
      "title": "Protocol vs report (and templates)",
      "body": "The protocol is the pre-approved plan; the report (or executed protocol package) is the post-execution evidence and conclusion. Many sites combine them into one executed document with a results/summary section, but the discipline is the same: plan approved first, results and conclusions approved after. Master protocol templates - a standardized, pre-vetted skeleton reused across similar equipment - are a major efficiency and consistency win, as long as each instance is tailored to the specific system and its risk profile rather than copied blindly.",
      "note": "A template guarantees structure and completeness; it does not excuse thinking. The acceptance criteria and test selection still have to fit the specific equipment, its intended use, and its risk - a generic limit pasted in without justification is a finding waiting to happen."
    },
    {
      "title": "Good documentation practice in execution",
      "body": "Execution is where data integrity is won or lost. Record contemporaneously (at the time of the work), in permanent ink or a validated electronic system; never back-date; correct errors with a single line, initial, date, and reason (never obscure the original); attach raw data and printouts with traceable instrument IDs; and ensure every entry is attributable to a named, trained executor. A technically perfect test with sloppy GDocP is still a deviation. This is the ALCOA+ discipline (see the Data Integrity page) applied at the point of capture."
    }
  ],
  "refs": [
    {
      "label": "EU GMP Annex 15 - Qualification and Validation (protocols)",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "EudraLex Volume 4 - Chapter 4 (Documentation)",
      "link": "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en"
    },
    {
      "label": "PIC/S PI 041 - Good Practices for Data Management & Integrity",
      "link": "https://picscheme.org/en/publications"
    }
  ],
  "example": {
    "label": "What a protocol test step looks like",
    "docTitle": "OQ protocol - one executed test step (extract, illustrative)",
    "meta": [
      [
        "Document",
        "OQ-EQ-014 - Stability Chamber SC-01"
      ],
      [
        "Rule",
        "Approved before execution; recorded contemporaneously"
      ]
    ],
    "blocks": [
      {
        "h": "Test OQ-07: Over-temperature alarm",
        "cols": [
          "Field",
          "Entry"
        ],
        "rows": [
          [
            "Objective",
            "Verify the high-temperature alarm activates at the configured limit"
          ],
          [
            "Method",
            "Drive temp above the alarm limit (setpoint shift / simulator); record activation"
          ],
          [
            "Acceptance criterion",
            "Alarm activates within tolerance of the set limit; local + remote; logged"
          ],
          [
            "Recorded data",
            "Set limit ___ / activated at ___ / local? ___ / remote? ___"
          ],
          [
            "Result",
            "Pass / Fail ___"
          ],
          [
            "Executed by / date",
            "_______   Reviewed by / date  _______"
          ]
        ]
      },
      {
        "h": "Why it is shaped this way",
        "text": "Objective, method, and acceptance criterion are written and approved BEFORE anyone runs it - that pre-approval is the cardinal rule. The data fields are filled contemporaneously, in a validated system or permanent ink, with executor and reviewer signatures. Each equipment page here is the candidate source for the objective + acceptance lines."
      }
    ]
  }
},

  change: {
  "name": "Change Control",
  "sub": "Managing change in the qualified state",
  "desc": "Change control is the formal system that evaluates, approves, and documents any change to a qualified or validated system before it happens - so a 'small tweak' doesn't quietly break the qualified state or product quality. It's the discipline that keeps everything this app helped you qualify actually staying qualified. Required by GMP, central to ICH Q10, and a perennial top source of inspection findings.",
  "accent": "#e0726a",
  "icon": "change",
  "sections": [
    {
      "title": "Why change control exists",
      "body": "Once a system is qualified and a process validated, that 'state of control' is only as durable as your control over changes to it. A new part, a firmware update, a tweaked setpoint, a different supplier, a relocated instrument - any of these can invalidate the qualification or shift product quality. Change control forces the question 'what does this change affect, and what must we re-verify?' to be answered and approved BEFORE the change is made, not discovered afterward in a deviation or an inspection."
    },
    {
      "title": "Planned change vs deviation (don't confuse them)",
      "bullets": [
        "Change control = PLANNED, intentional change, assessed and approved before implementation (e.g. upgrading a controller, changing a vendor).",
        "Deviation = UNPLANNED departure from an approved procedure or specification, investigated after the fact (e.g. an OOS result, a missed step).",
        "They interlink: a deviation investigation may conclude a permanent change is needed, which then goes through change control. But the two systems are distinct and shouldn't be used to substitute for each other.",
        "Using a deviation to back-fill an unapproved change ('we already did it, now document it') is a classic finding."
      ]
    },
    {
      "title": "The change control lifecycle",
      "steps": [
        "Initiate - describe the change, its rationale, and the systems/documents/processes it touches.",
        "Impact / risk assessment - the core step: what's affected? Quality, validated state, regulatory filings, other systems, data integrity? Assess risk (ICH Q9 thinking).",
        "Classify - minor / major (and emergency, where a documented expedited path applies). Classification sets the required approvals and re-qualification scope.",
        "Define actions - what must happen: re-qualification (which phases?), document updates, retraining, supplier qualification, regulatory notification.",
        "Approve - cross-functional review (engineering, QA, and affected areas) BEFORE implementation. QA owns the gate.",
        "Implement - execute the change and the defined actions (including any re-IQ/OQ/PQ).",
        "Verify & close - confirm the actions are complete and effective, the qualified state is restored, documents are updated, then close with QA approval.",
        "(Effectiveness check - for significant changes, confirm later that the change achieved its intent without unintended consequences.)"
      ]
    },
    {
      "title": "What drives the re-qualification scope",
      "body": "Not every change demands a full re-qualification - the scope is risk-based and flows from the impact assessment. A like-for-like part swap on a non-critical component may need only documentation. A change to a Critical Design Element (e.g. the sterilizer's temperature-control logic) likely demands re-OQ and possibly re-PQ. The same CA/CDE thinking from integrated C&Q applies here: concentrate re-verification on what protects product quality. The impact assessment is where this judgment is made and justified - and where inspectors look hardest.",
      "note": "Annex 15 expects change control to be described in the VMP, and EU GMP treats it as part of knowledge management. 'Working within an approved design space is not considered a change' (Annex 15) - but moving outside it is."
    },
    {
      "title": "Change control and ICH Q10",
      "body": "ICH Q10 names change management as one of the four pillars of an effective pharmaceutical quality system (alongside process performance/product quality monitoring, CAPA, and management review). Q10 frames it as a lifecycle enabler: a robust change-management system is what lets a company adopt innovation and continual improvement without losing control. In other words, change control done well isn't just a brake - it's what makes safe change possible. Computerised-system change control (GAMP 5 operation phase) is the same discipline applied to software; SaaS and AI/ML systems make it continuous rather than periodic."
    }
  ],
  "refs": [
    {
      "label": "ICH Q10 - Pharmaceutical Quality System (change management)",
      "link": "https://www.ich.org/page/quality-guidelines"
    },
    {
      "label": "EU GMP Annex 15 - Qualification and Validation (change control)",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "ICH Q9(R1) - Quality Risk Management",
      "link": "https://www.ich.org/page/quality-guidelines"
    }
  ],
  "example": {
    "label": "What a change assessment looks like",
    "docTitle": "Change Control CC-2026-018 - replace chamber controller (illustrative)",
    "meta": [
      [
        "Type",
        "Planned change - assessed before implementation"
      ],
      [
        "Driver",
        "Impact assessment sets the re-qual scope"
      ]
    ],
    "blocks": [
      {
        "h": "The change and its assessment",
        "cols": [
          "Field",
          "Entry"
        ],
        "rows": [
          [
            "Change",
            "Replace temperature controller (obsolete part) with a new model"
          ],
          [
            "Systems / docs touched",
            "Chamber SC-01; DS, OQ, calibration SOP, alarm config"
          ],
          [
            "Impact on validated state",
            "Yes - control + alarm functions change (a CDE)"
          ],
          [
            "Classification",
            "Major"
          ],
          [
            "Re-qualification scope",
            "Partial: re-run OQ control + alarm tests; verify setpoints; update DS"
          ],
          [
            "Not required",
            "Full IQ/OQ/PQ - mechanical install unchanged, mapping unaffected"
          ]
        ]
      },
      {
        "h": "How the scope is set",
        "text": "The impact assessment - not a calendar - drives the work. Because the controller is a Critical Design Element, the control and alarm OQ is re-run, but the unaffected installation and mapping are not. A like-for-like swap of a non-critical part might need only documentation. Classify, justify, then do exactly the re-qualification the risk warrants."
      }
    ]
  }
},

  gmp: {
  "name": "GMP",
  "sub": "Good Manufacturing Practice",
  "desc": "GMP is the legally enforceable baseline for how medicines are made: the system of practices, controls, and documentation that ensures a product is consistently produced and controlled to the quality standards appropriate for its intended use. Everything else in this app - qualification, validation, C&Q, data integrity - exists to satisfy GMP. It is the floor, not a guideline; in the US it is law (21 CFR 210/211), in the EU it is the EudraLex Vol 4 Part I/II, and ICH Q7 covers active ingredients.",
  "accent": "#c08bf0",
  "icon": "gmp",
  "sections": [
    {
      "title": "What GMP actually is",
      "body": "GMP (called cGMP in the US, where 'c' = current, meaning you must use up-to-date methods) is the minimum a manufacturer must do to assure identity, strength, quality, and purity of a drug. It is risk-based but non-negotiable: an inspector can shut a line down for a GMP failure. The premise is that you cannot inspect quality into a finished product by testing alone - you must build it in through controlled processes, qualified equipment, trained people, and complete records. That premise is exactly why IQ/OQ/PQ and data integrity exist."
    },
    {
      "title": "The regulatory stack (who says so)",
      "bullets": [
        "US - 21 CFR Part 210 (general cGMP) and Part 211 (finished pharmaceuticals); Part 212 (PET drugs). Enforced by FDA.",
        "EU - EudraLex Volume 4: Part I (finished products), Part II (active substances / APIs), Part III (supporting documents), plus the Annexes (Annex 1 sterile, Annex 11 computerised, Annex 15 qualification & validation).",
        "ICH Q7 - Good Manufacturing Practice for Active Pharmaceutical Ingredients; the globally harmonised API standard (adopted into EU GMP Part II).",
        "WHO GMP - TRS guidance widely adopted in emerging markets and for prequalification.",
        "PIC/S - harmonises GMP and inspection across 50+ participating authorities (the bridge that keeps these regimes broadly aligned)."
      ],
      "note": "Device GMP differs from drug GMP: US medical-device GMP (21 CFR 820, the Quality System Regulation) was harmonised with ISO 13485:2016 under the FDA Quality Management System Regulation (QMSR), effective 2 February 2026 - relevant where equipment here is device-adjacent. Drug GMP (21 CFR 210/211) is unchanged."
    },
    {
      "title": "The classic '5 P's' (a useful memory hook)",
      "steps": [
        "People - trained, qualified, with defined responsibilities and hygiene controls.",
        "Premises & equipment - designed, qualified, maintained, and calibrated for their use (this is where IQ/OQ/PQ lives).",
        "Processes - defined, controlled, validated, and reproducible.",
        "Procedures - approved SOPs followed as written, with deviations documented.",
        "Products - released only against specifications, with full traceability and retained records.",
        "(Variants list these P's slightly differently, sometimes splitting equipment or plant into its own P; the intent is the same: control every input to quality.)"
      ]
    },
    {
      "title": "GMP vs the pharmaceutical quality system (ICH Q10)",
      "body": "GMP is the regulatory floor; ICH Q10 (Pharmaceutical Quality System) is the management framework wrapped around it, built on the ICH Q8 (development) / Q9 (risk) / Q10 (system) trio. Q10 adds lifecycle thinking, management responsibility, continual improvement, and CAPA on top of the GMP baseline. A site can be GMP-compliant on paper yet have a weak quality system; Q10 is what makes compliance sustainable rather than inspection-driven.",
      "note": "Validation is not separately optional under GMP - it is an explicit expectation. EU GMP Annex 15 and FDA's Process Validation guidance (2011, lifecycle model: Stage 1 design, Stage 2 PPQ, Stage 3 continued verification) are the bridge between the GMP requirement and the qualification work this app catalogues."
    },
    {
      "title": "How GMP drives the test menu",
      "body": "Every IQ/OQ/PQ string in this reference traces back to a GMP expectation: equipment must be installed correctly (IQ), operate across its range (OQ), and perform reproducibly in real use (PQ), all under complete, attributable records (data integrity). The GMP regulations rarely prescribe the specific test - they require the outcome (a controlled, fit-for-use, documented system) and leave the how to GEP, ISPE BG5, ASTM E2500, and your validated procedures. That is why the menu is a candidate set, not a mandate."
    }
  ],
  "refs": [
    {
      "label": "FDA 21 CFR Part 211 - cGMP for Finished Pharmaceuticals",
      "link": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211"
    },
    {
      "label": "EudraLex Volume 4 - EU GMP Guidelines",
      "link": "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en"
    },
    {
      "label": "ICH Q7 - GMP Guide for Active Pharmaceutical Ingredients",
      "link": "https://www.ich.org/page/quality-guidelines"
    },
    {
      "label": "ICH Q10 - Pharmaceutical Quality System",
      "link": "https://www.ich.org/page/quality-guidelines"
    }
  ],
  "example": {
    "label": "How a GMP clause becomes a test",
    "docTitle": "21 CFR 211 (drug GMP) mapped to the qualification activity that satisfies it",
    "meta": [
      [
        "Regime",
        "US cGMP - 21 CFR 211"
      ],
      [
        "Read with",
        "EU Annex 15 / ISPE BG5 / ASTM E2500-25"
      ]
    ],
    "blocks": [
      {
        "h": "Requirement to evidence",
        "cols": [
          "GMP requirement",
          "What it requires",
          "Qualification / validation evidence"
        ],
        "rows": [
          [
            "§211.63 Equipment design",
            "Suitable design, size, location; cleanable",
            "IQ - installation verified vs spec"
          ],
          [
            "§211.68 Automatic / electronic equipment",
            "Reliable performance; calibrated; controls checked",
            "OQ + CSV (GAMP 5); calibration"
          ],
          [
            "§211.100 / .110 Process controls",
            "Written, validated process; in-process control",
            "Process Validation (Stage 1-3)"
          ],
          [
            "§211.113 Microbial / sterile control",
            "Validated aseptic / sterilisation processes",
            "Sterilisation qual; media fills (Annex 1)"
          ],
          [
            "§211.160 / .165 Laboratory controls",
            "Scientifically sound, validated methods",
            "Analytical method validation (ICH Q2)"
          ],
          [
            "§211.180 / .194 Records",
            "Complete, attributable, retained records",
            "Data integrity / ALCOA+ (Part 11)"
          ]
        ]
      },
      {
        "h": "Why this matters",
        "text": "The regulation names the outcome, not the test. The middle column is the GMP expectation; the right column is the work this app catalogues. That gap - outcome required, method left to GEP and your procedures - is exactly why the IQ/OQ/PQ menu is a candidate set, not a mandate."
      }
    ]
  }
},

  gep: {
  "name": "GEP",
  "sub": "Good Engineering Practice",
  "desc": "GEP is the set of established, pragmatic engineering methods and standards used to design, deliver, and operate engineered systems reliably and cost-effectively. It is the foundation that GxP builds upon - not a regulation, but the disciplined engineering underneath qualification. In the modern risk-based model, GEP is the enabler that lets commissioning carry verification weight so qualification effort focuses only where product quality is at stake.",
  "accent": "#58e6a8",
  "icon": "gep",
  "sections": [
    {
      "title": "What GEP is (and isn't)",
      "body": "GEP is defined by the ISPE Good Practice Guide: Good Engineering Practice (2nd edition, 2021; 1st edition 2006). It covers the entire lifecycle of engineering projects and engineered systems - conceptual design through retirement - and includes documentation, design standards, change management, calibration, commissioning, and SOPs. It is not mandated by GxP regulations, but regulators expect it: GEP is frequently described as a prerequisite to compliance. The key idea: well-run engineering produces evidence good enough to leverage, so you don't re-test under qualification what commissioning already proved."
    },
    {
      "title": "GEP as the foundation under GxP",
      "body": "Picture a stack. GEP sits at the bottom - sound engineering applied to every system, critical or not. GMP/GxP sits on top, adding regulatory rigour only where a system can impact product quality or patient safety. A 'not-direct-impact' system (e.g. plant cooling water) is delivered under GEP alone; a 'direct-impact' system (e.g. WFI, sterilisers) gets GEP-based commissioning plus formal qualification of its critical aspects. Same engineering floor, extra quality oversight where it matters.",
      "note": "This is the core economic argument of ISPE BG5 and ASTM E2500: QRM drives effectiveness (verifying the right things), GEP drives efficiency (not verifying the same thing twice). Mature GEP is what makes a risk-based C&Q program defensible."
    },
    {
      "title": "Core concepts of GEP",
      "bullets": [
        "Risk management - focus finite resources on higher-risk aspects; control intensity scales with risk.",
        "Cost management - balance expenditure and activity against benefit; avoid redundant testing.",
        "Organization and control - clear roles, document control, change management, traceability.",
        "Innovation and continual improvement - improve practices and the systems they deliver over time."
      ]
    },
    {
      "title": "Key practice areas (GEP lifecycle)",
      "steps": [
        "System lifecycle processes - requirements, design, delivery, operation, retirement.",
        "Project engineering management - scope, planning, infrastructure, value analysis, monitoring/control.",
        "System design practices - boundary definition, requirements, design development, design review, DQ.",
        "System delivery practices - procurement, construction, installation, commissioning, acceptance.",
        "Operational support practices - maintenance, calibration, change control to keep systems fit for use.",
        "Ancillary support practices - vendor/supplier management, documentation, quality interfaces."
      ]
    },
    {
      "title": "The Engineering Quality Process (EQP)",
      "body": "The EQP is the formal linkage between Engineering (GEP) and Quality (GMP). Its purpose is not to put quality oversight on top of every engineering task, but to give Quality appropriate oversight of how GEP processes are managed - so engineering-generated documentation and testing can be trusted and leveraged in the C&Q of critical systems. A solid EQP is what lets a vendor's factory acceptance test or a commissioning loop check count toward qualification instead of being repeated. Without it, the C&Q team re-does work that GEP already completed - the classic non-value-added redundancy BG5 set out to kill.",
      "note": "The 2025 addendum to ISPE Baseline Guide 5 (2nd ed) sharpened this: commissioning and GEP test documentation does not require prior Quality approval, and the System Owner is accountable for the system's whole lifecycle (specification, risk, change, availability, data integrity), with SMEs defining acceptance criteria and judging results. That is the modern EQP - Quality oversees how GEP is governed, not every GEP document."
    }
  ],
  "refs": [
    {
      "label": "ISPE Good Practice Guide: Good Engineering Practice (2nd ed, 2021)",
      "link": "https://ispe.org/publications/guidance-documents/good-practice-guide-good-engineering-practice-2nd-edition"
    },
    {
      "label": "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)",
      "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"
    },
    {
      "label": "ASTM E2500-25 - Specification, Design & Verification",
      "link": "https://store.astm.org/e2500-25.html"
    }
  ],
  "example": {
    "label": "What an impact assessment looks like",
    "docTitle": "System impact assessment - deciding what gets qualified (illustrative)",
    "meta": [
      [
        "Basis",
        "ISPE BG5 / ASTM E2500-25 - Critical Aspects"
      ],
      [
        "Driver",
        "Impact on product quality / patient safety"
      ]
    ],
    "blocks": [
      {
        "h": "System classification",
        "cols": [
          "System",
          "Can it impact product quality?",
          "Delivered under",
          "Formal qualification?"
        ],
        "rows": [
          [
            "WFI / product-contact",
            "Yes - direct",
            "GEP commissioning + QRM",
            "Yes - CAs / CDEs qualified"
          ],
          [
            "HVAC to a cleanroom",
            "Yes - direct (env. control)",
            "GEP commissioning + QRM",
            "Yes - critical aspects"
          ],
          [
            "Process control / SCADA",
            "Yes - direct (control + data)",
            "GEP + CSV (GAMP 5)",
            "Yes - critical functions"
          ],
          [
            "Plant cooling water",
            "No - indirect / none",
            "GEP alone",
            "No - GEP docs suffice"
          ],
          [
            "Compressed air (non-contact)",
            "Indirect",
            "GEP, QRM-screened",
            "Only if a CA is identified"
          ]
        ]
      },
      {
        "h": "The point",
        "text": "Risk decides the column, not the equipment's size or cost. A 'no-impact' system is delivered and documented under GEP only; a 'direct-impact' system gets the same engineering PLUS qualification of just its critical aspects. Verifying everything equally is the waste BG5 and E2500 set out to remove."
      }
    ]
  }
},

  gamp: {
  "name": "GAMP 5",
  "sub": "Risk-Based GxP Computerized Systems",
  "desc": "GAMP 5 is the industry-standard framework for validating computerized systems used in GxP environments - the practical 'how' behind the regulatory requirement to validate (21 CFR Part 11, EU Annex 11). It applies the V-Model and quality risk management to software, scaling effort to the system's software category and risk. This page goes deeper than the CSV card on the categories, the lifecycle, supplier leverage, and the CSA shift.",
  "accent": "#5aa9e6",
  "icon": "gamp",
  "sections": [
    {
      "title": "What GAMP 5 is",
      "body": "GAMP 5 (Good Automated Manufacturing Practice) is an ISPE guide, currently 2nd edition (2022). It is guidance, not law: Part 11 and Annex 11 require that GxP computerized systems be validated; GAMP 5 gives the risk-based, lifecycle method to do it efficiently. Its four guiding principles are: scale effort to risk and complexity, leverage supplier documentation rather than duplicate it, build quality in across the lifecycle, and apply critical thinking over check-box testing. It applies to MES, LIMS, eQMS, EBR, SCADA/PLC control software, and the embedded software inside qualified equipment.",
      "note": "GAMP 5 2nd ed deliberately shifted emphasis away from document-heavy validation toward critical-thinking-based assurance - the same direction as FDA's Computer Software Assurance (CSA), finalized Sep 2025 and updated Feb 2026 to align with the QMSR (which incorporates ISO 13485:2016 by reference). GAMP 5 did not need revising to align with CSA; the 2nd ed already embodies it."
    },
    {
      "title": "Software categories (drive the effort)",
      "steps": [
        "Category 1 - Infrastructure software: operating systems, databases, middleware, IT platforms. Validated indirectly; you qualify the platform, not the OS.",
        "Category 3 - Non-configured products: used out of the box with default settings. Lighter validation; lean heavily on supplier evidence. (Old Category 2 was retired and merged into 3 - there is no Category 2 in GAMP 5.)",
        "Category 4 - Configured products: standard products tailored to your process (configured LIMS, MES, eQMS). More effort - verify the configuration against your requirements.",
        "Category 5 - Custom / bespoke: software written specifically for you. The most effort - design review, code review, unit testing, and full FAT/SAT before deployment.",
        "Higher category = more rigour. Category plus a risk assessment together decide how much of the V-Model you execute - never the category alone."
      ]
    },
    {
      "title": "The GAMP lifecycle (4 phases)",
      "steps": [
        "Concept - identify the need, capture initial requirements, weigh build vs buy, and screen candidate suppliers.",
        "Project - specify (URS to FS to DS/config spec), assess the supplier, configure or develop, then verify up the V-Model.",
        "Operation - the longest phase: run the system in a validated state with change control, access management, audit-trail review, backup/restore, and periodic review.",
        "Retirement - decommission with controlled data migration/archiving so records stay retrievable and readable for their full retention period."
      ]
    },
    {
      "title": "Supplier leverage (the efficiency engine)",
      "body": "The single biggest lever in GAMP 5 is not duplicating what a competent supplier already did. A documented supplier assessment decides how much vendor evidence - design docs, FAT results, standard test packages - you can fold into your validation instead of repeating it. The more standard the product (Cat 3) and the more capable the supplier's quality system, the more you leverage and the less you re-test. This mirrors GEP's role on the equipment side: trustworthy upstream work becomes verification you don't have to redo.",
      "note": "Leverage is earned, not assumed: it depends on a real supplier assessment and on the documentation actually being fit for your intended use. Cat 5 custom code earns the least automatic trust and gets the most independent verification."
    },
    {
      "title": "Data integrity is the point",
      "body": "Most of what CSV protects is electronic records. GAMP 5 systems must enforce ALCOA+ data integrity: validated audit trails (who/what/when/why), unique-user access control, electronic-signature controls, secure time-stamped records, and tested backup/restore. These controls are written into the URS and proven in OQ. SaaS and AI/ML systems stress this hardest - frequent vendor updates and adaptive models make change control and re-assessment continuous rather than annual. See the Data Integrity / ALCOA+ page for the attribute-by-attribute breakdown."
    }
  ],
  "refs": [
    {
      "label": "ISPE GAMP 5 (2nd ed, 2022) - Risk-Based GxP Computerized Systems",
      "link": "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition"
    },
    {
      "label": "EU GMP Annex 11 - Computerised Systems",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-11_annex11_en_0.pdf"
    },
    {
      "label": "FDA 21 CFR Part 11 - Electronic Records & Signatures",
      "link": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11"
    },
    {
      "label": "FDA CSA Guidance - Computer Software Assurance (final Sep 2025; updated Feb 2026)",
      "link": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/computer-software-assurance-production-and-quality-management-system-software"
    }
  ],
  "example": {
    "label": "What GAMP category screening looks like",
    "docTitle": "GAMP 5 category -> validation effort (illustrative)",
    "meta": [
      [
        "Basis",
        "GAMP 5 2nd ed - software categories"
      ],
      [
        "Rule",
        "Category + risk scale the effort; Cat 2 retired"
      ]
    ],
    "blocks": [
      {
        "h": "Classifying the systems",
        "cols": [
          "System",
          "GAMP category",
          "Validation effort"
        ],
        "rows": [
          [
            "Operating system / database",
            "Cat 1 - infrastructure",
            "Qualify the platform; OS validated indirectly"
          ],
          [
            "Standard balance / pH meter firmware",
            "Cat 3 - non-configured",
            "Light; lean on supplier evidence"
          ],
          [
            "LIMS / MES (configured)",
            "Cat 4 - configured",
            "Verify the configuration against the URS"
          ],
          [
            "Bespoke calculation / custom app",
            "Cat 5 - custom",
            "Full lifecycle; design review + code testing"
          ]
        ]
      },
      {
        "h": "How effort scales",
        "text": "The category sets the starting effort and how much supplier evidence you can lean on. A Cat 3 instrument leans hard on a competent vendor; a Cat 5 custom build earns the least automatic trust and gets the most independent verification. Risk then adjusts within the category. (There is no Category 2 - it was merged into 3 in GAMP 5.)"
      }
    ]
  }
},

  di: {
  "name": "Data Integrity",
  "sub": "ALCOA+ Principles",
  "desc": "Data integrity is the assurance that GxP data are complete, consistent, and trustworthy across their entire lifecycle - from creation to disposal. ALCOA+ is the mnemonic that defines what 'trustworthy' means in nine attributes. It underpins every record this app touches: a perfect qualification means nothing if the data behind it isn't attributable, contemporaneous, and original. Roughly two-thirds of FDA pharma warning letters cite data-integrity findings.",
  "accent": "#e0935a",
  "icon": "dint",
  "sections": [
    {
      "title": "Where ALCOA came from",
      "body": "ALCOA was coined in the early 1990s by Stan W. Woollen, an FDA inspector in the Office of Enforcement, as a memorable aide for training GLP inspectors on data quality (he borrowed the name from the aluminum company). The original five attributes - Attributable, Legible, Contemporaneous, Original, Accurate - were later extended by EMA with four more (Complete, Consistent, Enduring, Available) to give ALCOA+, the current industry standard. It is not itself a regulation; it is the lens regulators use to read the data-integrity expectations already embedded in GMP, GLP, and GCP."
    },
    {
      "title": "The five core attributes (ALCOA)",
      "bullets": [
        "Attributable - every record shows who did it and when (and, where relevant, why). Unique logins, no shared accounts.",
        "Legible - readable and permanent for the full retention period; no pencil, no overwriting, original entry stays visible through any correction.",
        "Contemporaneous - recorded at the time the work is done, not back-filled later.",
        "Original - the first capture (or a verified true copy); raw data, not a transcribed summary that loses the source.",
        "Accurate - correct, complete, and free of errors; reflects what actually happened, with calibrated instruments and reviewed entries."
      ]
    },
    {
      "title": "The four 'plus' attributes (ALCOA+)",
      "bullets": [
        "Complete - all data including repeats, reanalyses, and metadata; nothing selectively dropped.",
        "Consistent - sequence and date/time stamps are logical and uniform across the record.",
        "Enduring - recorded on controlled, durable media that survives the retention period (not a sticky note or scratch paper).",
        "Available - retrievable and readable throughout its lifecycle for review, audit, or inspection."
      ]
    },
    {
      "title": "Paper vs electronic - and the metadata point",
      "body": "ALCOA+ applies equally to paper and electronic records, but electronic systems raise the stakes because of metadata: the audit trail, time stamps, user IDs, and processing history that make a result meaningful. A chromatography peak area is just a number; its metadata (who ran it, when, on what method, with what reprocessing) is what makes it trustworthy. This is why audit-trail review is now an explicit inspection focus and why CSV exists - to validate that the system captures and protects that metadata.",
      "note": "Common failure modes inspectors look for: shared logins, audit trails disabled or not reviewed, 'testing into compliance' (repeating until a passing result, discarding the rest), back-dated records, and original data overwritten or deleted. Most data-integrity citations are process and behavior failures, not software bugs."
    },
    {
      "title": "The regulatory landscape",
      "bullets": [
        "MHRA 'GxP Data Integrity Guidance and Definitions' (2018) - one of the most detailed treatments; stresses permanent, indelible records and unique access.",
        "WHO TRS guidance (e.g. TRS 996 Annex 5, later TRS 1033) - detailed ALCOA discussion, applies equally to paper and electronic.",
        "PIC/S PI 041 (2021) - the inspectorate-harmonised data-integrity guide referenced across PIC/S members.",
        "FDA - 2018 'Data Integrity and Compliance with Drug CGMP: Questions and Answers' guidance.",
        "Emerging: ALCOA++ adds 'Traceable' as a tenth attribute; the EU GMP Chapter 4 (Documentation) draft (Jul 2025) moves to codify all ten in binding regulation."
      ],
      "note": "ALCOA / ALCOA+ / ALCOA++ describe the same intent - pick the term your site SOPs use. The requirement doesn't change with the acronym; confirm the edition and wording your quality system has adopted before it drives a procedure."
    },
    {
      "title": "How it ties back to qualification",
      "body": "Data integrity is the thread running through every other page in this app. IQ/OQ/PQ records, calibration certificates, mapping data, and CSV evidence are all GxP records subject to ALCOA+. A test result is only as good as the integrity of the data behind it - which is why this reference treats data integrity as a first-class topic alongside the test menu, not an afterthought."
    }
  ],
  "refs": [
    {
      "label": "MHRA 'GxP' Data Integrity Guidance and Definitions (2018)",
      "link": "https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity"
    },
    {
      "label": "WHO Guideline on Data Integrity (TRS)",
      "link": "https://www.who.int/publications/m/item/data-integrity-trs-1033-annex-4"
    },
    {
      "label": "PIC/S PI 041 - Good Practices for Data Management & Integrity",
      "link": "https://picscheme.org/en/publications"
    },
    {
      "label": "FDA Data Integrity and Compliance with Drug CGMP (Q&A, 2018)",
      "link": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry"
    }
  ],
  "example": {
    "label": "What an ALCOA+ check looks like",
    "docTitle": "ALCOA+ applied to a chromatography result (illustrative)",
    "meta": [
      [
        "Record",
        "HPLC assay result + its metadata"
      ],
      [
        "Use",
        "Each attribute is a thing an auditor checks"
      ]
    ],
    "blocks": [
      {
        "h": "The record against each attribute",
        "cols": [
          "Attribute",
          "What to check",
          "Pass?"
        ],
        "rows": [
          [
            "Attributable",
            "Unique login on the run; analyst + reviewer identified",
            "Yes"
          ],
          [
            "Legible / Original",
            "Raw data file retained, not just a printed number",
            "Yes"
          ],
          [
            "Contemporaneous",
            "Acquisition timestamp matches the run log",
            "Yes"
          ],
          [
            "Accurate",
            "Calibrated system; integration not manually forced",
            "Yes"
          ],
          [
            "Complete",
            "All injections incl. any aborted / repeat runs kept",
            "Check"
          ],
          [
            "Consistent / Enduring",
            "Audit trail on; stored on controlled media",
            "Yes"
          ],
          [
            "Available",
            "Retrievable for the full retention period",
            "Yes"
          ]
        ]
      },
      {
        "h": "Where it goes wrong",
        "text": "The classic findings live in the metadata: a shared login (fails Attributable), the audit trail switched off, or 'testing into compliance' where failing injections are deleted and only the pass kept (fails Complete). A clean printed number with a dirty audit trail is not data integrity."
      }
    ]
  }
},

  fs: {
    name: "FS",
    sub: "Functional Specification",
    desc: "The FS describes how the system will function to meet each user requirement - the behaviours, sequences, and control functions, derived from the URS. It is the second document on the V-Model's left arm and the specification OQ verifies: OQ challenges these functions across their operating ranges. Usually vendor-authored against the URS and approved by the owner.",
    accent: "#58e6a8",
    icon: "fspec",
    sections: [
      { title: "When you write it",
        body: "After the URS, before the detailed build/design. The URS says what is needed; the FS says how the system will behave to deliver it. The vendor typically writes the FS against your URS, and you review and approve it - confirming each requirement has been translated into a defined, testable function before anything is built." },
      { title: "What goes in it",
        steps: [
          "Functional descriptions: what each function does, each mapped to the URS requirement it satisfies.",
          "Operating modes & sequences: start-up, normal run, hold, alarm, shutdown; recipe/phase behaviour.",
          "Control functions: setpoints, control loops, ranges, and tolerances the system will hold.",
          "Alarms & interlocks: trigger conditions, system responses, required operator actions.",
          "User interface & access: screens, user roles/permissions, what each role can and can't do.",
          "Data & records: what is logged, recording intervals, reports, audit-trail behaviour.",
          "Interfaces: connections to other systems/equipment and what data passes across them."
        ] },
      { title: "How to write each function",
        steps: [
          "Trace every function back to a URS requirement (forward traceability); flag any function with no URS parent.",
          "Make each function testable - OQ must be able to challenge it across its operating range.",
          "Describe behaviour, not the hardware build - the how-it's-built belongs in the DS.",
          "Number every function so it carries into the traceability matrix.",
          "Carry criticality down from the URS so risk drives how deeply OQ exercises each function."
        ] },
      { title: "What verifies it",
        body: "The FS is the specification OQ tests against - OQ challenges the system's functions across their operating ranges and limits. FAT and SAT exercise the same functional behaviour earlier at the vendor and on site. This is the FS↔OQ rung of the V-Model.",
        note: "The FS sits between the URS (what is needed) and the DS (how it's built). Keep all three under change control: a change to a function must trace up to the URS it serves and down to the DS that implements it." }
    ],
    refs: [
      { label: "ISPE GAMP 5 (2nd ed) - Functional Specification", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" },
      { label: "EU GMP Annex 15 - Qualification & Validation", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" }
    ,
      { label: "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" }
    ]
  ,
    example: {"label":"What an FS extract looks like","docTitle":"FS extract - how the cold room delivers the URS (FS-CR-001)","meta":[["Derives from","URS-CR-001"],["Verified by","OQ"]],"blocks":[{"h":"Function to URS mapping","cols":["FS ID","Function","Satisfies","OQ challenge"],"rows":[["FS-001","PID holds 5 °C setpoint within the 2-8 °C band","URS-001","Hold + setpoint step across the empty-chamber range"],["FS-002","Alarm logic latches < 2 / > 8 °C, audible + SMS","URS-002","Force each threshold; confirm annunciation"],["FS-003","Logger 1-min, signed e-records, audit trail","URS-003","Exercise Part 11 functions and access roles"],["FS-004","Door switch raises alarm after 60 s open","URS-004","Hold the door open; time the alarm"]]},{"h":"Note","text":"Each function carries a forward trace to a URS line and is written to be testable. A function with no URS parent is a red flag: either the URS missed a need or the vendor quietly added scope."}]}
  },

  ds: {
    name: "DS",
    sub: "Design Specification",
    desc: "The DS is the detailed build - the hardware, software, components, and configuration that deliver the functions in the FS. It is the third (bottom) document on the V-Model's left arm, at the turn into build, and the specification IQ verifies: IQ confirms the system is installed and configured exactly as designed. Vendor-authored; reviewed by the owner at Design Qualification.",
    accent: "#4fd1c5",
    icon: "dspec",
    sections: [
      { title: "When you write it",
        body: "After the FS, at the bottom of the V - where specification becomes a buildable, configurable design. The FS says how the system functions; the DS says how it is actually built and set up to do so. The vendor authors it; you review it against the URS at Design Qualification (DQ) before fabrication begins." },
      { title: "What goes in it",
        steps: [
          "Equipment & component design: P&IDs, general-arrangement drawings, bill of materials, instrument list.",
          "Software / automation design: control-system architecture, I/O list, code/configuration design, network and interfaces.",
          "Configured parameters: the actual setpoints, alarm limits, and control-loop tuning as built.",
          "Components, make & model: the specific instruments, valves, sensors - the list IQ checks against.",
          "Software/firmware versions and configuration: what is installed, so IQ can confirm and CSV can baseline it.",
          "Utilities & installation: services, connections, layout, and environmental requirements."
        ] },
      { title: "How to write the design",
        steps: [
          "Trace every design element to the FS function it delivers (and through it back to the URS).",
          "For computerised parts, identify each component's GAMP category - it scales design rigour and testing.",
          "Make it installation-verifiable - IQ confirms the system is built/installed exactly as the DS states.",
          "Number design elements for the traceability matrix; mark Critical Design Elements (BG5) that deliver a Critical Aspect.",
          "Keep as-designed and as-built reconciled - IQ is where any difference surfaces."
        ] },
      { title: "What verifies it",
        body: "The DS is the specification IQ tests against - IQ confirms the system is installed and configured as designed (components, drawings, software versions, utilities). Design Qualification reviews the DS against the URS before build. This is the DS↔IQ rung of the V-Model.",
        note: "The DS is the bottom of the V: below it is the physical build, then verification climbs back up (IQ → OQ → PQ). A change to the DS must trace up through the FS to the URS, and may require re-verifying the affected IQ." }
    ],
    refs: [
      { label: "ISPE GAMP 5 (2nd ed) - Design Specification", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" },
      { label: "EU GMP Annex 15 - Qualification & Validation", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" }
    ,
      { label: "ISPE Baseline Guide Vol 5 - Critical Design Elements (2nd ed)", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" }
    ]
  ,
    example: {"label":"What a DS extract looks like","docTitle":"DS extract - the as-built design + GAMP category (DS-CR-001)","meta":[["Reviewed at","DQ"],["Verified by","IQ"]],"blocks":[{"h":"Design element to FS, with GAMP category","cols":["DS ID","Element / make-model","Delivers","GAMP cat","IQ check"],"rows":[["DS-001","Temp-control PLC, firmware v2.3","FS-001","Cat 4 (configured)","Version + config baseline"],["DS-002","6 x Pt100 Class A RTD","FS-001","Instrument","Cal cert + location vs drawing"],["DS-003","Monitoring software v5.1","FS-003","Cat 4","Install qual + CSV baseline"],["DS-004","Door reed switch + relay","FS-004","Cat 1 (infrastructure)","Wiring + function"]]},{"h":"Note","text":"Marking the GAMP category on each computerised element scales the testing: a Category 4 configured product earns configuration verification that a Category 1 component does not. Critical Design Elements (BG5) that deliver a Critical Aspect are flagged here for IQ."}]}
  },

  e2500: {
  "name": "ASTM E2500",
  "sub": "Science- & risk-based verification",
  "desc": "The standard guide that reframed qualification. First issued 2007 (E2500-07), with updates in 2013 and 2020 and a substantive revision in 2025, it sets out how to specify, design, and verify manufacturing systems as fit for their intended use - driven by product/process understanding and Quality Risk Management, and focused on the Critical Aspects that actually protect the product. It is a guide of principles, not a step-by-step procedure.",
  "accent": "#4fd1c5",
  "icon": "verify",
  "sections": [
    {
      "title": "What it is",
      "body": "ASTM E2500 - Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment. It replaces the traditional document-and-test-everything mindset with verification: demonstrating, through risk- and science-based effort, that a system is suitable for its intended use across its design–verification–operation lifecycle. Testing normally thought of as IQ/OQ becomes verification, concentrated where it matters.",
      "note": "The 2025 revision (E2500-25, issued 15 March 2025) is the substantive one. It adds system availability (reliability, uptime, supply continuity) to the suitability-for-intended-use scope alongside product quality and patient safety, and it draws clearer boundaries with neighbouring standards: laboratory instrument qualification stays under USP <1058>, computerised systems and software under ISPE GAMP, and medical-device manufacturing risk under ISO 14971. Facility-wide contamination control strategy sits outside the scope, though its outputs feed system-level risk assessment."
    },
    {
      "title": "Core principles",
      "bullets": [
        "Risk-based: Quality Risk Management (ICH Q9) drives where effort goes.",
        "Science-based: decisions rest on real product and process understanding (QbD).",
        "Critical Aspects: focus on the functions and features that ensure product quality and patient safety.",
        "Good Engineering Practice applied throughout specification, design, and verification.",
        "Subject Matter Experts (SMEs) lead the technical verification.",
        "Vendor documentation and commissioning can be leveraged as evidence.",
        "Continual improvement and disciplined change management over the lifecycle."
      ]
    },
    {
      "title": "Critical Aspects",
      "body": "The pivot of the whole approach. A Critical Aspect is a function, feature, ability, or performance characteristic a system must have to ensure consistent product quality and patient safety. You identify the Critical Aspects from product/process knowledge first, then design for them and verify them - everything else is handled by good engineering, not formal qualification.",
      "note": "If a check doesn't trace to a Critical Aspect, E2500's logic asks why it's in the qualification scope at all. That is the mechanism that cuts redundant testing."
    },
    {
      "title": "The verification lifecycle",
      "steps": [
        "Requirements: define what the system must do, from product/process understanding plus regulatory and company requirements.",
        "Specification & Design: design to meet the requirements, with a documented design review against the Critical Aspects.",
        "Verification: risk-based testing that the built system meets requirements - concentrated on Critical Aspects, leveraging commissioning, GEP, and vendor data where justified.",
        "Acceptance & Release: the Quality Unit accepts the system as fit for GMP use, focusing its approval on the Critical Aspects.",
        "Operation: change management and continual improvement keep it fit over the lifecycle."
      ]
    },
    {
      "title": "Who does what",
      "cols": [
        {
          "kind": "pro",
          "h": "SMEs",
          "items": [
            "Develop and approve verification plans.",
            "Run risk assessments and judge technical acceptability.",
            "Handle changes that don't touch Critical Aspects."
          ]
        },
        {
          "kind": "con",
          "h": "Quality Unit",
          "items": [
            "Approves acceptance criteria for Critical Aspects.",
            "Approves verification plans for systems with Critical Aspects.",
            "Oversight focused on what affects product quality - not everything."
          ]
        }
      ]
    },
    {
      "title": "How it changes the testing",
      "bullets": [
        "IQ/OQ-type checks become verification activities tied to requirements.",
        "Effort concentrates on Critical Aspects; non-critical features go to GEP/commissioning.",
        "Commissioning and assessed vendor documentation can serve as qualification evidence - stop re-testing what good engineering already proved.",
        "Quality Unit review is targeted at Critical Aspects, not every page of every protocol."
      ],
      "note": "E2500 is a guide, not a procedure - it tells you the principles, not the exact steps. That's deliberate, and it's why ISPE Baseline Guide 5 exists: to turn these principles into an executable workflow. The 2025 revision aligns E2500 with ICH Q9(R1), Q10, and EU GMP Annex 1 & 15."
    }
  ],
  "refs": [
    {
      "label": "ASTM E2500-25 - Specification, Design & Verification",
      "link": "https://store.astm.org/e2500-25.html"
    },
    {
      "label": "ICH Q9(R1) - Quality Risk Management",
      "link": "https://www.ich.org/page/quality-guidelines"
    },
    {
      "label": "ICH Q8 / Q10 - Pharmaceutical Development / Quality System",
      "link": "https://www.ich.org/page/quality-guidelines"
    },
    {
      "label": "EU GMP Annex 15 - Qualification & Validation",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    }
  ],
  "example": {
    "label": "What Critical Aspect screening looks like",
    "docTitle": "Critical Aspect identification - what gets verified vs left to GEP (illustrative - a steriliser)",
    "meta": [
      [
        "Basis",
        "ASTM E2500-25 - Critical Aspects"
      ],
      [
        "Test",
        "Does it trace to product quality / patient safety?"
      ]
    ],
    "blocks": [
      {
        "h": "Screening the functions",
        "cols": [
          "System function / feature",
          "Critical Aspect?",
          "Rationale",
          "Handled by"
        ],
        "rows": [
          [
            "Chamber sterilisation temp / time (F0)",
            "Yes",
            "Directly assures sterility (patient safety)",
            "Formal verification (qualification)"
          ],
          [
            "Load-probe temperature accuracy",
            "Yes",
            "Defines the sterilising condition reached",
            "Verification + calibration"
          ],
          [
            "Cycle data recording / audit trail",
            "Yes",
            "Records that prove the CA was met",
            "Verification + CSV (GAMP 5)"
          ],
          [
            "Door interlock / safety",
            "Indirect",
            "Operator safety, not product quality",
            "GEP / commissioning"
          ],
          [
            "Chamber cosmetic finish",
            "No",
            "No product-quality impact",
            "GEP only"
          ]
        ]
      },
      {
        "h": "The mechanism",
        "text": "Identify Critical Aspects from product / process knowledge first, design for them, then verify them. A feature that doesn't trace to a Critical Aspect doesn't belong in the qualification scope - it goes to good engineering. That single screen is what cuts the redundant testing."
      }
    ]
  }
},

  bg5: {
  "name": "ISPE Baseline Guide 5",
  "sub": "Commissioning & Qualification (2nd ed)",
  "desc": "The practical how-to that implements the E2500 paradigm. The 2nd Edition (2019) defines a single, integrated, science- and risk-based Commissioning & Qualification process - replacing the 2001 guide and the two 2011 guides. It adds the System Classification and Critical Design Element machinery that turns E2500's principles into an executable workflow, and a 2025 addendum refines the delivery approach in line with the ASTM E2500-25 revision.",
  "accent": "#b48be6",
  "icon": "guide",
  "sections": [
    {
      "title": "What it is",
      "body": "ISPE Baseline Guide Vol 5: Commissioning and Qualification (2nd Edition). Where E2500 sets the principles, BG5 gives the working manual: how to classify systems, run the risk assessment, identify what to verify, and integrate commissioning with qualification so you produce fewer, combined deliverables. It is the guide most modern projects actually follow."
    },
    {
      "title": "The integrated C&Q process",
      "steps": [
        "URS - user requirements, driven by the process and product.",
        "System Classification - Direct Impact vs Not Direct Impact.",
        "System Risk Assessment - for direct-impact systems, identify the Critical Design Elements.",
        "Design Review & Design Qualification - review the design against the CDEs.",
        "C&Q Planning - plan integrated commissioning and qualification testing.",
        "C&Q Testing & Documentation - execute, leveraging GEP commissioning and vendor data.",
        "Acceptance & Release - accept the system for GMP use.",
        "Periodic Review - keep it qualified over the lifecycle."
      ]
    },
    {
      "title": "System Classification",
      "body": "The first filter, and where most of the efficiency comes from. Classify each system before writing a single protocol:",
      "cols": [
        {
          "kind": "pro",
          "h": "Direct impact",
          "items": [
            "Has a direct effect on product quality.",
            "Commissioned and qualified (typically IQ/OQ).",
            "The focus of the System Risk Assessment."
          ]
        },
        {
          "kind": "con",
          "h": "Not direct impact",
          "items": [
            "No direct product-quality effect.",
            "Commissioned only - no formal qualification.",
            "Shrinks the qualifiable population up front."
          ]
        }
      ]
    },
    {
      "title": "Critical Aspects vs Critical Design Elements",
      "body": "BG5's key addition over E2500. A Critical Aspect says what matters; a Critical Design Element is the specific design feature engineered to deliver and control it - and the CDEs are what you actually verify.",
      "table": {
        "cols": [
          "",
          "What it is",
          "Used for"
        ],
        "rows": [
          [
            "Critical Aspect (CA)",
            "A function/feature/characteristic needed to ensure product quality & patient safety (from E2500)",
            "Frames what must be controlled"
          ],
          [
            "Critical Design Element (CDE)",
            "The design function/feature engineered to deliver a CA (e.g. an alarm, a data-management function)",
            "Reviewed at DQ; verified through C&Q"
          ]
        ]
      },
      "note": "CDEs are identified from the product CQAs, process CPPs, and the equipment/automation design - by SMEs who understand the science of the process running on the system."
    },
    {
      "title": "Support programs that make it work",
      "bullets": [
        "Vendor Assessment for C&Q documentation - so vendor data can be leveraged.",
        "Engineering Quality Process - the quality-managed engineering that lets commissioning count.",
        "Change Management - controlled changes over the lifecycle.",
        "Good Documentation Practice for C&Q - defensible records.",
        "Good Engineering Practice - the foundation under all of it."
      ]
    },
    {
      "title": "How it changes the testing",
      "bullets": [
        "Classify first: not-direct-impact systems are commissioned only - no qualification testing.",
        "Verify the CDEs, not everything: the System Risk Assessment pins them down; testing concentrates there.",
        "Leverage commissioning and assessed vendor data as qualification evidence.",
        "Integrate the documents: one combined C&Q set instead of separate DQ/IQ/OQ/PQ packages.",
        "Periodic review replaces re-qualifying on a fixed calendar where risk allows."
      ],
      "note": "The efficiency is real but conditional: it depends on a robust Engineering Quality Process and documented vendor assessment. Weak classification or a thin risk assessment turns 'leveraging' into an audit finding. BG5 2nd ed allows changes that do not affect CAs/CDEs to be handled by engineering change management rather than full GMP change control; the 2025 addendum further refines the QRM/delivery approach in line with E2500-25."
    }
  ],
  "refs": [
    {
      "label": "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)",
      "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"
    },
    {
      "label": "ASTM E2500-25 - Specification, Design & Verification",
      "link": "https://store.astm.org/e2500-25.html"
    },
    {
      "label": "EU GMP Annex 15 - Qualification & Validation",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "ICH Q9(R1) - Quality Risk Management",
      "link": "https://www.ich.org/page/quality-guidelines"
    }
  ],
  "example": {
    "label": "What a classification + CDE worksheet looks like",
    "docTitle": "System classification and CDE identification (illustrative - a bioreactor)",
    "meta": [
      [
        "Process",
        "ISPE BG5 2nd ed - integrated C&Q"
      ],
      [
        "Step",
        "Classify, then identify CDEs for direct-impact systems"
      ]
    ],
    "blocks": [
      {
        "h": "1. Classify the systems",
        "cols": [
          "System",
          "Classification",
          "C&Q treatment"
        ],
        "rows": [
          [
            "Bioreactor (product contact)",
            "Direct impact",
            "Commission + qualify CDEs"
          ],
          [
            "CIP skid serving it",
            "Direct impact",
            "Commission + qualify CDEs"
          ],
          [
            "Plant steam (non-contact)",
            "Not direct impact",
            "Commission only"
          ],
          [
            "Equipment-room HVAC",
            "Not direct impact",
            "Commission only"
          ]
        ]
      },
      {
        "h": "2. CDEs for the direct-impact bioreactor",
        "cols": [
          "Critical Aspect",
          "Critical Design Element",
          "Verified by"
        ],
        "rows": [
          [
            "Maintain sterile barrier",
            "Filter integrity; SIP cycle control",
            "C&Q + integrity test"
          ],
          [
            "Hold culture temperature",
            "Jacket temp loop + calibrated probe",
            "Verification + calibration"
          ],
          [
            "Control dissolved O2 / pH",
            "DO / pH loops + alarms",
            "Verification of the control function"
          ],
          [
            "Record batch parameters",
            "Historian / audit trail",
            "Verification + CSV (GAMP 5)"
          ]
        ]
      },
      {
        "h": "Read it",
        "text": "Classification removes plant steam and HVAC from the qualifiable population before a protocol exists. For the bioreactor that stays in, you verify the CDEs - the specific design features that deliver each Critical Aspect - not every function. That is the BG5 efficiency, and it only holds with a documented risk assessment behind it."
      }
    ]
  }
},

  risk: {
  "name": "Approaching Risk",
  "sub": "Quality risk management for qualification (ICH Q9(R1))",
  "desc": "Risk is what decides how much of the test menu you actually run. Under ICH Q9(R1) the question is always the same: if this fails, what is the harm to product quality, patient safety, or data integrity - how likely is it, and would we catch it in time? You then concentrate effort where that answer is worst. This page is the method and the tables; each equipment page carries the questions to ask for that type.",
  "accent": "#e0935a",
  "icon": "scale",
  "sections": [
    {
      "title": "How to approach it",
      "body": "Quality Risk Management (ICH Q9, revised 2023 as Q9(R1)) runs in three moves: identify what could go wrong, analyze it (severity × probability, and in many tools detectability), and evaluate it against criteria you set in advance. Risk is the combination of the severity of a harm and the probability it occurs; detectability adjusts the priority. Effort is proportionate - formal and deep where harm is high, light where it is not. The output drives both the C&Q approach (does this even get qualified?) and the depth of each IQ/OQ/PQ test.",
      "note": "Q9(R1) sharpened several things the 2005 original left fuzzy - among them how much formality a given assessment needs, and how to curb subjectivity in scoring (it also addresses risk-based decision-making and product-availability risk). Tie scores to real product/process understanding, not opinion."
    },
    {
      "title": "The questions every assessment answers",
      "bullets": [
        "Identify: what can fail, and what harm does that cause downstream?",
        "Severity: how bad is the harm to product quality / patient safety / data integrity?",
        "Probability: how likely is the failure given the design and existing controls?",
        "Detectability: would we catch it before the product is affected or released?",
        "Evaluate: does the combined risk exceed the criteria - and what do we do about it?"
      ]
    },
    {
      "title": "Pick a tool to match the question",
      "table": {
        "cols": [
          "Tool",
          "Best for"
        ],
        "rows": [
          [
            "FMEA / FMECA",
            "Ranking failure modes of a system or process; adds criticality (S×P×D) to a score (IEC 60812)"
          ],
          [
            "Risk ranking & filtering",
            "Comparing and prioritising many systems/parameters against set criteria"
          ],
          [
            "HACCP",
            "Identifying and controlling critical control points in a process"
          ],
          [
            "FTA",
            "Tracing a defined failure back to root causes / combinations (IEC 61025)"
          ],
          [
            "PHA / risk question",
            "A quick, documented assessment when full FMEA is disproportionate"
          ]
        ]
      }
    },
    {
      "title": "Severity - how bad is the harm",
      "table": {
        "cols": [
          "Level",
          "Meaning"
        ],
        "rows": [
          [
            "High",
            "Direct impact on product quality or patient safety (sterility, dose, identity, critical data)"
          ],
          [
            "Medium",
            "Indirect or recoverable impact; could affect quality if left uncontrolled"
          ],
          [
            "Low",
            "No credible product-quality, safety, or data-integrity impact"
          ]
        ]
      }
    },
    {
      "title": "Probability - how likely",
      "table": {
        "cols": [
          "Level",
          "Meaning"
        ],
        "rows": [
          [
            "High",
            "Expected to occur without controls; a known weak point"
          ],
          [
            "Medium",
            "Could occur occasionally"
          ],
          [
            "Low",
            "Unlikely given the design and controls in place"
          ]
        ]
      }
    },
    {
      "title": "Detectability - would we catch it",
      "table": {
        "cols": [
          "Level",
          "Meaning"
        ],
        "rows": [
          [
            "Low (worse)",
            "Failure can reach the product undetected"
          ],
          [
            "Medium",
            "Detected by routine checks before release"
          ],
          [
            "High (better)",
            "Detected immediately / automatically (alarm, interlock, in-line check)"
          ]
        ]
      }
    },
    {
      "title": "Risk rating - severity × probability",
      "matrix": {
        "cols": [
          "Prob Low",
          "Prob Med",
          "Prob High"
        ],
        "rows": [
          {
            "label": "Sev High",
            "cells": [
              {
                "v": "Med",
                "lvl": "med"
              },
              {
                "v": "High",
                "lvl": "high"
              },
              {
                "v": "High",
                "lvl": "high"
              }
            ]
          },
          {
            "label": "Sev Med",
            "cells": [
              {
                "v": "Low",
                "lvl": "low"
              },
              {
                "v": "Med",
                "lvl": "med"
              },
              {
                "v": "High",
                "lvl": "high"
              }
            ]
          },
          {
            "label": "Sev Low",
            "cells": [
              {
                "v": "Low",
                "lvl": "low"
              },
              {
                "v": "Low",
                "lvl": "low"
              },
              {
                "v": "Med",
                "lvl": "med"
              }
            ]
          }
        ]
      },
      "note": "Read the cell for your severity/probability pair, then shift the priority for detectability: poor detectability pushes a borderline case up; strong automatic detection can pull it down. This is the relative score, not an acceptance limit."
    },
    {
      "title": "Turning the rating into action",
      "cols": [
        {
          "kind": "pro",
          "h": "Lower risk",
          "items": [
            "Commission under Good Engineering Practice; little or no formal qualification.",
            "Leverage vendor data where a documented assessment supports it.",
            "Record the rationale - low risk still needs to be justified."
          ]
        },
        {
          "kind": "con",
          "h": "Higher risk",
          "items": [
            "Qualify the Critical Aspects deeply; challenge worst case.",
            "Add controls, alarms, or redundancy to lower severity or probability.",
            "Tighten detection (in-line check, alarm, second review) and re-rate."
          ]
        }
      ]
    },
    {
      "title": "Tie it back to the test menu",
      "body": "The IQ/OQ/PQ entries on each equipment page are the candidate verifications. The risk rating tells you which of them to execute as formal qualification, how deep to push each, and which to leave to commissioning. The test definitions don't change with risk - the selection, depth, and evidence source do.",
      "note": "Risk-based does not mean test-less by default. You reduce or leverage only where a documented rationale and a robust engineering/quality process support it; a thin risk assessment turns 'leveraging' into an audit finding."
    }
  ],
  "refs": [
    {
      "label": "ICH Q9(R1) - Quality Risk Management (2023)",
      "link": "https://www.ich.org/page/quality-guidelines"
    },
    {
      "label": "EU GMP Annex 15 - Qualification & Validation",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "ISPE Baseline Guide Vol 5 - Commissioning & Qualification",
      "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"
    },
    {
      "label": "ASTM E2500-25 - Specification, Design & Verification",
      "link": "https://store.astm.org/e2500-25.html"
    }
  ],
  "example": {
    "label": "What a scored risk assessment looks like",
    "docTitle": "Mini FMEA - a 2-8 °C cold store (illustrative, S/P/D scoring)",
    "meta": [
      [
        "Tool",
        "FMEA (severity x probability x detectability)"
      ],
      [
        "Scale",
        "H / M / L per the tables above"
      ]
    ],
    "blocks": [
      {
        "h": "Scored failure modes",
        "cols": [
          "Failure mode",
          "Sev",
          "Prob",
          "Detect",
          "Risk",
          "Action / where it lands"
        ],
        "rows": [
          [
            "Compressor fails, temp rises",
            "High",
            "Med",
            "High (alarm)",
            "Med",
            "Qualify alarm + recovery (OQ); power-loss test"
          ],
          [
            "Door left ajar, slow warming",
            "High",
            "Med",
            "High (door alarm)",
            "Med",
            "Verify door-ajar alarm; map door zone (PQ)"
          ],
          [
            "Sensor drifts out of cal",
            "High",
            "Low",
            "Low (silent)",
            "Med-High",
            "Tighten cal interval; pre / post-study cal check"
          ],
          [
            "Cabinet light fails",
            "Low",
            "Med",
            "High",
            "Low",
            "Commission under GEP - no qualification"
          ]
        ]
      },
      {
        "h": "Read it",
        "text": "Severity stays High for anything that lets product leave 2-8 °C, but detectability moves the priority: the alarmed failures are manageable, while a silent sensor drift (poor detection) is pushed up and drives a tighter calibration control. The light failure scores Low and drops to commissioning. The score chooses which menu items become formal qualification - and how deep."
      }
    ]
  }
},

  cq: {
  "name": "C&Q Approaches Compared",
  "sub": "V-Model vs ASTM E2500 vs ISPE Baseline Guide 5",
  "desc": "Three ways the industry gets to a qualified system - and the choice changes how much you test, what you call it, and what you can lean on as evidence. The traditional V-Model is the prescriptive baseline. ASTM E2500 (2007) introduced the science- and risk-based paradigm it calls verification. ISPE Baseline Guide Vol 5, 2nd Edition (2019) turns that paradigm into a practical, integrated C&Q process. E2500 and BG5 are complementary, not rivals: E2500 sets the principles, BG5 is the how-to. The real contrast is traditional qualification vs the modern risk-based approach the two jointly define.",
  "accent": "#e6c45a",
  "icon": "scale",
  "sections": [
    {
      "title": "The three, in one line",
      "cols": [
        {
          "kind": "pro",
          "h": "Lineage",
          "items": [
            "V-Model: traditional prescriptive qualification (DQ/IQ/OQ/PQ).",
            "ASTM E2500 (2007; rev. 2013, 2020, 2025): the paradigm shift - verify fit for intended use via Quality Risk Management.",
            "ISPE BG5, 2nd ed (2019): operationalizes E2500 into an integrated C&Q lifecycle."
          ]
        },
        {
          "kind": "con",
          "h": "Don't confuse",
          "items": [
            "BG5 = the C&Q Baseline Guide for facilities, systems, utilities, equipment.",
            "GAMP 5 = a different guide, for computerised systems (see the CSV card).",
            "Both are ISPE; both are 'risk-based'; they cover different scope."
          ]
        }
      ]
    },
    {
      "title": "Side by side",
      "table": {
        "cols": [
          "",
          "Traditional V-Model",
          "ASTM E2500",
          "ISPE BG5 (2nd ed)"
        ],
        "rows": [
          [
            "Core idea",
            "Prescriptive qualification; document and test everything",
            "Risk-based verification of fitness for intended use",
            "Integrated, risk-based C&Q delivery process"
          ],
          [
            "Term used",
            "Qualification (DQ/IQ/OQ/PQ)",
            "Verification",
            "Commissioning & Qualification (integrated)"
          ],
          [
            "Effort allocation",
            "Broadly uniform across systems and parameters",
            "Concentrated on Critical Aspects (CAs)",
            "System Risk Assessment → CAs / Critical Design Elements"
          ],
          [
            "Scope filter",
            "Most systems get the full set",
            "Risk drives what is verified",
            "System Classification: only direct-impact systems are qualified"
          ],
          [
            "Commissioning",
            "Often separate from / duplicated by qualification",
            "Good Engineering Practice can support verification",
            "GEP commissioning leveraged as qualification evidence"
          ],
          [
            "Vendor docs",
            "Limited reliance",
            "Leverage permitted with justification",
            "Leveraged via documented vendor assessment"
          ],
          [
            "Deliverables",
            "Many discrete protocols (DQ/IQ/OQ/PQ)",
            "Verification deliverables vs. design",
            "Fewer, combined C&Q deliverables"
          ],
          [
            "Best fit",
            "Simple/legacy systems; auditor comfort",
            "Setting the principles / regulatory rationale",
            "Modern projects wanting efficiency + compliance"
          ]
        ]
      }
    },
    {
      "title": "Traditional V-Model",
      "body": "Specify down one arm, verify back up the other, with DQ/IQ/OQ/PQ as discrete documented stages. Well understood and easy to defend in an audit, but it tends to test every system to a similar depth regardless of risk, and commissioning and qualification often repeat the same checks.",
      "cols": [
        {
          "kind": "pro",
          "h": "Strengths",
          "items": [
            "Familiar; auditors and teams know it cold.",
            "Clear traceability via the spec↔test rungs.",
            "Low interpretation risk - the structure is explicit."
          ]
        },
        {
          "kind": "con",
          "h": "Trade-offs",
          "items": [
            "Over-qualifies low-risk systems; high volume of testing.",
            "Commissioning effort frequently duplicated in IQ/OQ.",
            "Document-heavy; slow and costly; weakly tied to risk."
          ]
        }
      ]
    },
    {
      "title": "ASTM E2500",
      "body": "A standard guide that reframes the goal as verification that a system is fit for its intended use, driven by product/process understanding and Quality Risk Management. It introduces Critical Aspects - the features and functions that actually matter to product quality and patient safety - and focuses effort there. It sets principles rather than a step-by-step recipe.",
      "cols": [
        {
          "kind": "pro",
          "h": "Strengths",
          "items": [
            "Effort follows risk; less testing of what doesn't matter.",
            "Lets Good Engineering Practice and vendor work count.",
            "Aligns with ICH Q9 / QbD; regulator-recognised rationale."
          ]
        },
        {
          "kind": "con",
          "h": "Trade-offs",
          "items": [
            "Principles, not a procedure - needs interpretation.",
            "Demands real product/process understanding up front.",
            "Weak QRM or GEP undermines the whole justification."
          ]
        }
      ]
    },
    {
      "title": "ISPE Baseline Guide 5 (2nd ed)",
      "body": "The practical implementation of the E2500 paradigm: a single integrated C&Q process with System Classification (direct-impact vs not direct-impact), a System Risk Assessment that pins down Critical Aspects and Critical Design Elements, design review/DQ, integrated C&Q testing and documentation, acceptance and release, and periodic review. It is the working manual most modern projects actually follow.",
      "cols": [
        {
          "kind": "pro",
          "h": "Strengths",
          "items": [
            "Turns E2500 principles into an executable workflow.",
            "Integrated C&Q removes duplicate testing/documents.",
            "Classification narrows qualification to direct-impact systems."
          ]
        },
        {
          "kind": "con",
          "h": "Trade-offs",
          "items": [
            "Requires a strong quality-managed engineering process.",
            "Vendor-doc leverage needs documented assessment to hold.",
            "Mis-classification or thin risk rationale is the main failure mode."
          ]
        }
      ]
    },
    {
      "title": "How this changes the testing required",
      "body": "The regulatory requirement does not change - under any approach you must still demonstrate the system is fit for its intended use (EU GMP Annex 15, 21 CFR). What changes is how you target, source, and document the evidence:",
      "bullets": [
        "Classify first. Not-direct-impact systems are commissioned only - no qualification testing - so the qualifiable population shrinks before any protocol is written.",
        "Test the Critical Aspects, not everything. The System Risk Assessment identifies the CAs / Critical Design Elements; verification concentrates there. Low-risk parameters drop out of the qualification scope (still commissioned under GEP).",
        "Leverage commissioning and vendor data. Well-executed, quality-managed commissioning and assessed vendor documentation can serve as qualification evidence, so you stop re-running checks good commissioning already proved.",
        "Combine the documents. Integrated C&Q merges what the V-Model splits into DQ/IQ/OQ/PQ, cutting protocol count and review cycles.",
        "Net effect: less redundant testing, effort concentrated where product-quality and patient-safety risk actually sits - not less rigor on what matters."
      ],
      "note": "Risk-based does not mean test-less-by-default. You can only reduce or leverage where a documented risk rationale and a robust engineering/quality process support it. A weak risk assessment or poor GEP turns 'leveraging' into a finding. For this app: the IQ/OQ/PQ entries are the menu of what can be verified; under E2500/BG5 you run the subset that maps to the Critical Aspects and lean on commissioning for the rest - the test definitions don't change, the selection and sourcing of evidence does."
    }
  ],
  "refs": [
    {
      "label": "ASTM E2500-25 - Specification, Design & Verification",
      "link": "https://store.astm.org/e2500-25.html"
    },
    {
      "label": "ISPE Baseline Guide Vol 5 - Commissioning & Qualification (2nd ed)",
      "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"
    },
    {
      "label": "EU GMP Annex 15 - Qualification & Validation",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "ICH Q9(R1) - Quality Risk Management",
      "link": "https://www.ich.org/page/quality-guidelines"
    }
  ],
  "example": {
    "label": "The same system, three ways",
    "docTitle": "A Purified Water loop taken through each approach (illustrative)",
    "meta": [
      [
        "System",
        "PW generation + distribution loop"
      ],
      [
        "Point",
        "Same outcome, very different effort"
      ]
    ],
    "blocks": [
      {
        "h": "What each approach does",
        "cols": [
          "",
          "Traditional V-Model",
          "ASTM E2500 / BG5"
        ],
        "rows": [
          [
            "Up-front filter",
            "All sub-systems qualified alike",
            "Classify: loop is direct-impact; pretreatment screened by risk"
          ],
          [
            "What gets tested",
            "Full DQ/IQ/OQ/PQ on the whole system",
            "Verify CDEs: conductivity, TOC, sanitisation, loop return temp"
          ],
          [
            "Commissioning",
            "Often repeated inside IQ/OQ",
            "Leveraged as evidence (assessed)"
          ],
          [
            "Vendor FAT data",
            "Limited reliance",
            "Leveraged via documented vendor assessment"
          ],
          [
            "Deliverables",
            "Separate DQ + IQ + OQ + PQ packages",
            "One integrated C&Q package"
          ],
          [
            "PW sampling (PQ)",
            "Long phased sampling regardless",
            "Phased sampling stays - it IS a Critical Aspect, not reduced"
          ]
        ]
      },
      {
        "h": "The honest part",
        "text": "The water-quality testing (Phase 1-3 sampling) does not shrink - it maps straight to a Critical Aspect, so it runs in full under every approach. What shrinks is the redundant testing of non-critical features and the duplicate commissioning. Same regulatory outcome (Annex 15), evidence targeted and sourced differently."
      }
    ]
  }
},

  vmodel: {
  "name": "The V-Model",
  "sub": "The lifecycle that drives all of this",
  "desc": "The V-Model is the framework behind every qualification in this app. It pairs each specification (left, descending) with a matching verification (right, ascending): you build the requirements down one side and prove them back up the other. URS sits at the top-left and is what PQ ultimately verifies at the top-right; everything in between traces across the V.",
  "accent": "#5aa9e6",
  "icon": "vmodel",
  "svg": "<svg viewBox=\"0 0 380 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"V-Model diagram\"><line x1=\"92\" y1=\"48\" x2=\"288\" y2=\"48\" stroke=\"var(--line)\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><line x1=\"112\" y1=\"116\" x2=\"268\" y2=\"116\" stroke=\"var(--line)\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><line x1=\"132\" y1=\"184\" x2=\"248\" y2=\"184\" stroke=\"var(--line)\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><line x1=\"48\" y1=\"64\" x2=\"150\" y2=\"278\" stroke=\"var(--line)\" stroke-width=\"1.5\"/><line x1=\"332\" y1=\"64\" x2=\"230\" y2=\"278\" stroke=\"var(--line)\" stroke-width=\"1.5\"/><g><rect x=\"20\" y=\"32\" width=\"86\" height=\"32\" rx=\"7\" fill=\"rgba(88,230,168,0.12)\" stroke=\"var(--accent)\" stroke-width=\"1.2\"/><text x=\"63\" y=\"52\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"13\" font-weight=\"700\" fill=\"var(--accent)\">URS</text></g><g><rect x=\"40\" y=\"100\" width=\"86\" height=\"32\" rx=\"7\" fill=\"var(--panel-2)\" stroke=\"var(--line)\" stroke-width=\"1\"/><text x=\"83\" y=\"120\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">FS</text></g><g><rect x=\"60\" y=\"168\" width=\"86\" height=\"32\" rx=\"7\" fill=\"var(--panel-2)\" stroke=\"var(--line)\" stroke-width=\"1\"/><text x=\"103\" y=\"188\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"12\" font-weight=\"600\" fill=\"var(--ink)\">DS</text></g><g><rect x=\"274\" y=\"32\" width=\"86\" height=\"32\" rx=\"7\" fill=\"rgba(230,136,90,0.12)\" stroke=\"var(--pq)\" stroke-width=\"1.2\"/><text x=\"317\" y=\"52\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"13\" font-weight=\"700\" fill=\"var(--pq)\">PQ</text></g><g><rect x=\"254\" y=\"100\" width=\"86\" height=\"32\" rx=\"7\" fill=\"var(--panel-2)\" stroke=\"var(--oq)\" stroke-width=\"1\"/><text x=\"297\" y=\"120\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"12\" font-weight=\"600\" fill=\"var(--oq)\">OQ</text></g><g><rect x=\"234\" y=\"168\" width=\"86\" height=\"32\" rx=\"7\" fill=\"var(--panel-2)\" stroke=\"var(--iq)\" stroke-width=\"1\"/><text x=\"277\" y=\"188\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"12\" font-weight=\"600\" fill=\"var(--iq)\">IQ</text></g><g><rect x=\"214\" y=\"226\" width=\"96\" height=\"30\" rx=\"7\" fill=\"var(--panel-2)\" stroke=\"var(--line)\" stroke-width=\"1\"/><text x=\"262\" y=\"245\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"11\" font-weight=\"600\" fill=\"var(--ink-dim)\">FAT / SAT</text></g><g><rect x=\"148\" y=\"280\" width=\"84\" height=\"32\" rx=\"8\" fill=\"var(--panel)\" stroke=\"var(--ink-faint)\" stroke-width=\"1\"/><text x=\"190\" y=\"300\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"10\" font-weight=\"700\" fill=\"var(--ink-dim)\">BUILD</text></g><text x=\"20\" y=\"338\" font-family=\"var(--mono)\" font-size=\"10\" font-weight=\"600\" fill=\"var(--accent)\">SPECIFY ↓</text><text x=\"360\" y=\"338\" text-anchor=\"end\" font-family=\"var(--mono)\" font-size=\"10\" font-weight=\"600\" fill=\"var(--pq)\">↑ VERIFY</text><text x=\"190\" y=\"338\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"9\" fill=\"var(--ink-faint)\">each spec verified across →</text><text x=\"190\" y=\"352\" text-anchor=\"middle\" font-family=\"var(--mono)\" font-size=\"9\" fill=\"var(--ink-faint)\">URS defines the numbers · process drives the URS</text></svg>",
  "sections": [
    {
      "title": "What it is",
      "body": "A lifecycle diagram shaped like a V. The left arm captures specifications from the broadest to the most detailed; the bottom is the build/configure point; the right arm captures verification from the most detailed back up to the broadest. Each left-side document is verified by the test directly across from it on the right (the dashed links). This makes requirements traceable end to end and is the structure behind EU GMP Annex 15 and GAMP 5."
    },
    {
      "title": "Left arm - specifications (top to bottom)",
      "steps": [
        "URS (User Requirements Specification): what the system must do, from the user/process. Top of the V.",
        "FS (Functional Specification): how the system will meet each user requirement.",
        "DS (Design Specification): the detailed hardware/software/build design that delivers the functions.",
        "DQ (Design Qualification) sits at the transition: documented review that the proposed design satisfies the URS before anything is built."
      ]
    },
    {
      "title": "Bottom - build / configure",
      "body": "The vendor fabricates, assembles, configures, and codes the system to the design specifications. This is the turn at the bottom of the V, where specification becomes a physical/configured system ready to be verified."
    },
    {
      "title": "Right arm - verification (bottom to top)",
      "steps": [
        "FAT / SAT (commissioning): inspection and testing at the vendor (FAT) and after install at site (SAT) that the build matches the functional/design specs. The lower-right rungs.",
        "IQ (Installation Qualification): verifies installation against the design specification.",
        "OQ (Operational Qualification): verifies the system operates across its range against the functional specification.",
        "PQ (Performance Qualification): verifies the system performs in real use against the URS. Top of the V - it closes the loop back to where you started."
      ]
    },
    {
      "title": "Why each rung matters",
      "body": "A test on the right is only meaningful because it verifies a specific document on the left. PQ that doesn't trace to the URS proves nothing useful; IQ that doesn't trace to the design specification has no acceptance basis. The horizontal links are the point of the model - they force traceability, usually captured in a traceability matrix.",
      "note": "The setpoints, ranges, and acceptance limits at every rung come from the URS, which is itself driven by the process and the product. The V-Model tells you what to verify against; it never tells you the number. That always comes from your process."
    },
    {
      "title": "Risk scales the V",
      "body": "Per Annex 15 and ICH Q9, the depth of each stage is risk-based. A simple indirect-impact item may collapse several rungs; a complex direct-impact system (a bioreactor, a sterilizer) exercises the full V with extensive FAT/SAT and full IQ/OQ/PQ. Commissioning (FAT/SAT) can be leveraged to support qualification under a science- and risk-based approach (ASTM E2500, ISPE C&Q)."
    }
  ],
  "refs": [
    {
      "label": "EU GMP Annex 15 - Qualification & Validation",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf"
    },
    {
      "label": "ISPE GAMP 5 (2nd ed) - Risk-Based Compliant GxP Systems",
      "link": "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition"
    },
    {
      "label": "ISPE Baseline Guide Vol 5 - Commissioning & Qualification",
      "link": "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition"
    }
  ],
  "example": {
    "label": "What a traceability trace looks like",
    "docTitle": "One requirement traced across the V (illustrative - a 2-8 °C cold store)",
    "meta": [
      [
        "Artifact",
        "Requirements Traceability Matrix (RTM)"
      ],
      [
        "Rule",
        "Every left-side spec verified by the test across from it"
      ]
    ],
    "blocks": [
      {
        "h": "The horizontal links",
        "cols": [
          "Left arm (specify)",
          "Says",
          "Right arm (verify)",
          "Proves"
        ],
        "rows": [
          [
            "URS",
            "Store product at 2-8 °C",
            "PQ",
            "Loaded chamber holds 2-8 °C in real use"
          ],
          [
            "FS",
            "Controller holds setpoint; alarms on excursion",
            "OQ",
            "Setpoint, uniformity, alarms verified across range"
          ],
          [
            "DS",
            "Specific controller + NIST-traceable probes",
            "IQ",
            "Installed model / serial / calibration verified"
          ],
          [
            "(build)",
            "Vendor assembles & configures to the DS",
            "FAT / SAT",
            "Build matches spec at vendor + at site"
          ]
        ]
      },
      {
        "h": "Read it",
        "text": "Top-left (URS) closes at top-right (PQ); the build at the bottom turns spec into a system. A PQ result means something only because it traces straight up to the URS line that demanded it. The numbers (here 2-8 °C) live in the URS - the V tells you what to verify against, never the value."
      }
    ]
  }
},

  urs: {
    name: "URS",
    sub: "User Requirements Specification",
    desc: "The URS defines what the equipment or system must do, in the user's terms, before any design or purchase. It sits at the top of the V-Model and is the document PQ ultimately verifies. Annex 15 calls it the point of reference throughout the validation lifecycle - every downstream spec, test, and acceptance criterion traces back to it.",
    accent: "#58e6a8",
    icon: "doc",
    sections: [
      { title: "When you write it",
        body: "First - before design, before the purchase order, before any FAT. The URS captures the need; the vendor then designs to it. If a requirement is not in the URS, there is no basis to verify it later, and there is no defined qualified state to test against." },
      { title: "What goes in it",
        steps: [
          "Intended use & scope: what the system is for, what it will and won't do, products/processes it serves.",
          "Operational / performance requirements: the setpoints, ranges, capacity, throughput, uniformity and recovery the process needs. These are process- and product-driven - the URS is where the real numbers are defined, not assumed.",
          "Control & monitoring: control system behaviour, alarms, data logging, recording intervals.",
          "Compliance & data integrity: applicable regulations (21 CFR 210/211, Annex 15/11, Part 11), audit trail, access control, electronic records.",
          "Safety: interlocks, relief devices, emergency stop, operator protection.",
          "Utilities & environment: power, gases, water, drainage, ambient conditions, footprint/clearances.",
          "Materials of construction: product-contact surface finish, alloys, hygienic/dead-leg requirements where relevant.",
          "Documentation & service: manuals, drawings, spares, calibration certificates, maintenance support."
        ] },
      { title: "How to write each requirement",
        steps: [
          "Make it specific, measurable, and testable - each line should be verifiable by a later test (DQ/FAT/IQ/OQ/PQ).",
          "Number every requirement so it can be carried into a traceability matrix.",
          "State the requirement, not the solution - say what is needed, leave the how to the FS/design.",
          "Tie performance numbers to the process/product requirement and cite the source (process need, product manufacturer's storage spec, pharmacopeial method).",
          "Mark criticality / impact (direct vs not-direct, critical vs non-critical) to drive risk-based qualification depth."
        ] },
      { title: "How it drives everything downstream",
        body: "DQ verifies the design against the URS. FAT and SAT challenge the functional spec that was derived from the URS. IQ/OQ/PQ each verify their matching specification level, and PQ closes the loop by proving the URS is met in real use. A traceability matrix links every URS line to the test that verifies it.",
        note: "ASTM E2500 and GAMP 5 both treat the URS (requirements) as the anchor of a science- and risk-based lifecycle. Keep it under change control - when the URS changes, the impact ripples across the whole V." }
    ],
    refs: [
      { label: "EU GMP Annex 15 - URS as lifecycle reference", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" },
      { label: "ISPE GAMP 5 (2nd ed)", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" }
    ,
      { label: "ASTM E2500-25 - requirements as the lifecycle anchor", link: "https://store.astm.org/e2500-25.html" }
    ]
  ,
    example: {"label":"What a URS extract looks like","docTitle":"URS extract - 2-8 °C GMP cold storage unit (URS-CR-001)","meta":[["System","2-8 °C cold room"],["Role","Top of the V; PQ verifies it"]],"blocks":[{"h":"Requirement extract","cols":["ID","Requirement","Source","Criticality","Verified by"],"rows":[["URS-001","Maintain 2-8 °C throughout the loaded chamber","Product label storage","Critical","PQ (loaded mapping)"],["URS-002","High / low alarm at < 2 / > 8 °C, audible + remote","GMP / process","Critical","OQ"],["URS-003","Continuous recording, 1-min interval, Part 11 audit trail","Annex 11 / Part 11","Critical","OQ"],["URS-004","Door-open alarm after 60 s","Process","Non-critical","OQ"],["URS-005","316L interior, cleanable and drainable","Hygienic design","Non-critical","IQ"]]},{"h":"Note","text":"Every number traces to a named source, never assumed. The critical lines (temperature, alarms, records) drive deep risk-based qualification; the non-critical ones get a lighter touch. This is the document PQ ultimately closes against."}]}
  },

  fat: {
    name: "FAT",
    sub: "Factory Acceptance Test",
    desc: "FAT is inspection and dynamic testing at the vendor's facility, before shipment, to confirm the equipment was built to the functional/design specification derived from the URS. It sits on the lower-right arm of the V-Model, between DQ and SAT. A good FAT catches design and build defects while they're cheapest to fix - at the vendor, before delivery.",
    accent: "#c08bf0",
    icon: "factory",
    sections: [
      { title: "When and where",
        body: "At the equipment manufacturer's site, after build/assembly, before shipment. Witnessed by the end user (plus QA / validation, sometimes a third party). Successful, approved FAT authorizes shipment to site." },
      { title: "Build the FAT protocol",
        steps: [
          "Purpose & scope: state that it confirms the equipment meets the URS, functional/design specs, and GMP before shipment; name the system and what's in/out of scope.",
          "Responsibilities: vendor (executes, documents), client (witnesses, reviews, approves), and any third party.",
          "Equipment description: make, model, serial, capacity, major specifications.",
          "Reference documents: URS, FS, DS, P&ID, wiring diagrams, automation/software spec.",
          "Test cases & acceptance criteria: each test traces to a URS/FS line with a measurable pass/fail.",
          "Deviation handling & documentation: how findings are recorded, dispositioned, and closed."
        ] },
      { title: "What to test",
        steps: [
          "Mechanical: dimensions, weld/surface finish, component verification, materials of construction.",
          "Electrical: wiring, power-on, safety/earthing checks.",
          "Functional / dynamic: run the unit - power on/off, cycle sequencing, alarms, interlocks, emergency stop, restart-after-power-loss.",
          "Automation / software: HMI displays, data logging, recipe/parameter management, access levels (per GAMP 5).",
          "Instrument calibration: confirm measuring instruments used carry current calibration.",
          "Documentation: drawings, certificates, manuals, spares list present and correct."
        ] },
      { title: "Run it well",
        steps: [
          "Prepare in advance - every requirement to be checked should already be in the URS.",
          "Recreate site-like conditions and utilities as closely as possible to avoid surprises at SAT.",
          "Use only calibrated instruments with current certificates.",
          "Record everything - readings, photos/video, signatures of those present.",
          "Manage deviations before shipment; resolve or formally disposition every punch-list item.",
          "Use the FAT to train the operators who will run the unit on site."
        ],
        note: "FAT challenges the functional spec; acceptance numbers still come from the URS/process - do not assume them. FAT is best practice (not always mandatory) but effectively a must for complex/critical or modifiable off-the-shelf systems." }
    ],
    refs: [
      { label: "ISPE C&Q - defines FAT/SAT inspection & testing", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" },
      { label: "EU GMP Annex 15", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" },
      { label: "ISPE GAMP 5 (software/automation testing)", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" }
    ]
  ,
    example: {"label":"What a FAT test sheet looks like","docTitle":"FAT extract - witnessed, at the vendor, before shipment","meta":[["Where","Vendor factory"],["Outcome","Authorizes shipment"]],"blocks":[{"h":"Test cases","cols":["Test","Method","Acceptance (from URS)","Result"],"rows":[["High-temp alarm","Force the sensor > 8 °C","Audible + remote within 30 s, logged","Pass"],["Power-loss restart","Cut then restore power","Resumes control, no record loss","Pass"],["Access control","Edit setpoint without rights","Blocked + audit-trail entry","Pass"],["Pulldown","Empty chamber to 5 °C","Reaches band within the spec time","Punch-list (slow)"]]},{"h":"Note","text":"A contained minor defect can take a conditional pass with a punch-list item closed before shipment or at SAT; a material failure requires retest. The FAT package (protocol, results, deviations, punch list) and its traceability matrix flow forward into site IQ/OQ. Note FAT and SAT are pre-qualification activities, not formal GMP phases - IQ is the first formal phase."}]}
  },

  sat: {
    name: "SAT",
    sub: "Site Acceptance Test",
    desc: "SAT repeats and extends the FAT after the equipment is installed and connected at the client's site, on real utilities, before IQ begins. It confirms that what passed at the vendor still meets the URS in the actual production environment. It sits just above FAT on the right arm of the V-Model and is the bridge from installation into formal qualification.",
    accent: "#e0935a",
    icon: "site",
    sections: [
      { title: "When and where",
        body: "At the final installation site, once the unit is delivered, installed, and connected to site utilities - but before IQ/OQ execution. Written by the client; verifies that installed functionality meets or exceeds the URS under real site conditions." },
      { title: "Build the SAT protocol",
        steps: [
          "Objective & scope: the system tested and the intent (confirm installed performance meets URS on site).",
          "Responsibilities: vendor, engineering, validation, and QA roles.",
          "Equipment description: make, model, serial, functional capability.",
          "Reference documents: URS, the approved FAT report, P&IDs, wiring diagrams, software spec.",
          "Test methodology: step-by-step execution of each test on site.",
          "Acceptance criteria: pass/fail limit per test (traced to the URS).",
          "Deviation management: how site findings are handled and closed."
        ] },
      { title: "What to test",
        steps: [
          "Installation vs drawings: confirm the unit is installed per the layout/design drawings.",
          "Site utilities: verify correct operation on the real electrical supply, compressed air, water, gases, drainage.",
          "Repeat key FAT functional tests: re-run the critical function, alarm, interlock, and safety checks now under site utilities.",
          "Integrated/software checks: confirm site network, BMS/data integration, and access controls behave correctly.",
          "Installation-specific items the FAT couldn't cover: anything dependent on the final environment."
        ] },
      { title: "Why it matters",
        body: "FAT proves the build; SAT proves it survived shipment and works on your utilities. Differences between vendor and site utilities (power, air quality, water) are the classic source of post-delivery surprises, and SAT is where they surface - before qualification, when they're still cheap to fix. Completing SAT marks the link between installation and qualification.",
        note: "SAT confirms the URS is still met on site; like FAT, the acceptance numbers come from the URS/process. A clean FAT makes SAT lighter; both reduce IQ/OQ rework. (ISPE-GAMP 5, Annex 15, 21 CFR 211 underpin both.)" }
    ],
    refs: [
      { label: "ISPE C&Q - FAT/SAT definition & approach", link: "https://ispe.org/publications/guidance-documents/baseline-guide-vol-5-commissioning-qualification-2nd-edition" },
      { label: "EU GMP Annex 15", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" }
    ,
      { label: "ISPE GAMP 5 (2nd ed, 2022) - acceptance testing", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" }
    ]
  ,
    example: {"label":"What a SAT extract looks like","docTitle":"SAT extract - factory vs site, on real utilities","meta":[["Where","Installed on site"],["Before","IQ"]],"blocks":[{"h":"Factory result vs site result","cols":["Check","FAT (vendor)","SAT (site)","Note"],"rows":[["Pulldown 25 -> 5 °C","40 min","48 min","Site ambient / utility delta, within URS"],["Control power","Vendor supply","Site 480 V verified stable","Utility difference"],["Remote alarm","N/A at factory","SMS + site BMS confirmed","Site-only integration"],["Recorder time-sync","Standalone","Synced to site NTP","Site-only"]]},{"h":"Note","text":"Utility and integration differences between factory and site are the classic post-delivery surprise - SAT surfaces them before IQ, while they are still cheap to fix. A clean FAT makes SAT lighter and reduces IQ/OQ rework."}]}
  },

  cots: {
    name: "COTS",
    sub: "Commercial Off-The-Shelf equipment",
    desc: "COTS equipment is standard, catalogue, unmodified product - a benchtop balance, a pH meter, a standard lab incubator. It is built to the vendor's fixed specification, not designed to your URS, so the heavy commissioning steps that protect a custom build (FAT and SAT) usually don't apply. The qualification effort collapses toward the right-hand rungs of the V, scaled by risk.",
    accent: "#8b98a9",
    icon: "box",
    sections: [
      { title: "What makes it COTS",
        body: "A standard, widely-available product used as supplied, with no custom design or modification to meet your specific requirements. GAMP 5 treats this as a low-complexity category. The key test: did the vendor build it to their own catalogue spec (COTS), or design and build it to your URS (custom / modifiable off-the-shelf)? Only the latter earns a full FAT/SAT." },
      { title: "Why FAT and SAT usually don't apply",
        steps: [
          "FAT challenges the functional spec that was derived from your URS. A COTS unit has no URS-derived functional spec - it's the vendor's standard product - so there is nothing custom to witness-test at the factory.",
          "SAT verifies that custom-built, site-installed functionality still meets the URS on your utilities. A plug-in benchtop unit has no complex site integration to re-verify.",
          "The vendor's own design verification, type testing, and quality system stand in for what FAT/SAT would have proven on a custom build.",
          "Result: for simple COTS you typically go straight from receipt to IQ/OQ (often a vendor IQ/OQ package), skipping FAT and SAT entirely."
        ] },
      { title: "What you still must do",
        steps: [
          "Still write a URS (even a short one): you need a defined, testable statement of what you require so there's a basis for acceptance - the setpoints, ranges, and accuracy your process needs.",
          "Verification on receipt: confirm the delivered unit matches the purchase order and your URS (make, model, range, capacity).",
          "IQ: installed correctly, on suitable utilities, calibrated, documented.",
          "OQ: operates across the range your process uses; alarms and functions work. A vendor IQ/OQ protocol can often be leveraged if it covers your requirements.",
          "PQ / ongoing: where the unit's performance is critical, confirm it performs in your actual use, then maintain it with routine calibration and checks.",
          "Calibration and Part 11 / data integrity still apply if it records GxP data."
        ] },
      { title: "The judgment call (risk-based)",
        body: "COTS is not an automatic skip - it's a risk decision. A simple, low-impact, indirect unit may need only receipt verification plus calibration. A COTS unit doing something critical (a balance weighing API, a controlled incubator holding product) still needs proper IQ/OQ/PQ, and a complex or configured COTS system may warrant a light SAT to prove site integration. Document the rationale for whatever you skip.",
        note: "The simpler and lower-impact the item, the more you can lean on the vendor's documentation and collapse the V. The more critical the use, the more of the right-hand arm (IQ/OQ/PQ) you must still execute - and the acceptance numbers still come from your URS/process, never assumed from the vendor's brochure." }
    ],
    refs: [
      { label: "ISPE GAMP 5 - COTS / category classification", link: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" },
      { label: "EU GMP Annex 15 - risk-based qualification", link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf" }
    ,
      { label: "USP <1058> - Analytical Instrument Qualification (COTS lab equipment)", link: "https://www.usp.org" }
    ]
  ,
    example: {"label":"How COTS effort scales with risk","docTitle":"COTS - same category, different qualification effort","meta":[["Rule","Effort scales with impact"],["Anchor","Your URS, not the brochure"]],"blocks":[{"h":"Scaling by impact","cols":["COTS item","Impact","FAT / SAT","Qualification scope"],"rows":[["Balance weighing API","Critical (direct)","None","Vendor IQ/OQ + USP <41> + in-use PQ"],["In-process pH meter","Indirect","None","Receipt verify + calibration"],["Incubator holding product","Critical","Light SAT if networked","IQ / OQ / PQ"],["Configured COTS LIMS","Critical (GxP data)","Integration test","Full CSV / GAMP Cat 4"]]},{"h":"Note","text":"COTS is a risk decision, not an automatic skip. Lean on vendor design verification and IQ/OQ packages where impact is low; execute the full right-hand arm where use is critical. Document the rationale for whatever you collapse - and the acceptance numbers still come from your URS, never the vendor brochure."}]}
  },

  csv: {
  "name": "CSV",
  "sub": "Computer System Validation",
  "desc": "CSV is documented evidence that a computerized system does what it's supposed to, reliably and securely, throughout its life. It uses the same V-Model spine as equipment (requirements down, verification up) but is governed by GAMP 5, with the effort scaled to the system's GAMP software category and risk. The regulations (21 CFR Part 11, EU Annex 11) say a system must be validated; GAMP 5 is the practical 'how'.",
  "accent": "#5aa9e6",
  "icon": "chip",
  "sections": [
    {
      "title": "GAMP 5 - the framework",
      "body": "GAMP 5 (ISPE, 2nd edition 2022) is the de-facto standard for validating GxP computerized systems - MES, LIMS, eQMS, EBR, lab automation, and the control software embedded in equipment. It is guidance, not law: Part 11 and Annex 11 set the requirement to validate; GAMP 5 gives the risk-based, lifecycle method to meet it. Its core principles: scale effort to risk and complexity, leverage supplier documentation instead of duplicating it, build quality in across the lifecycle, and apply critical thinking over check-box testing.",
      "note": "The 2nd edition shifted emphasis from document-heavy CSV toward critical-thinking-based assurance, aligning with the FDA's Computer Software Assurance (CSA) - finalized Sep 2025, updated Feb 2026 to align with QMSR. CSA keeps the GAMP lifecycle but scales testing to process risk."
    },
    {
      "title": "GAMP software categories (drive the effort)",
      "steps": [
        "Category 1 - Infrastructure software: operating systems, databases, middleware, IT services. Validated indirectly; qualify the platform.",
        "Category 3 - Non-configured (used out of the box): standard products run with default settings. Lighter validation, lean on supplier evidence. (Old Category 2 was merged into 3.)",
        "Category 4 - Configured: standard products tailored to your process (LIMS, MES, configured eQMS). More effort - verify the configuration against your requirements.",
        "Category 5 - Custom / bespoke: software written for you. The most effort - design review, code review, unit testing, and full FAT/SAT before deployment.",
        "Higher category = more rigour. The category plus a risk assessment sets how much of the V you execute."
      ]
    },
    {
      "title": "The CSV lifecycle (4 phases)",
      "steps": [
        "Concept: identify the need, list initial requirements, assess automation options and candidate suppliers.",
        "Project: specify (URS → FS → DS), assess the supplier, configure or develop, then verify - the V-Model arm of CSV (see below).",
        "Operation: the longest phase - run the system in a validated state with change control, access management, audit-trail review, backup/restore, and periodic review.",
        "Retirement: decommission with controlled data migration/archiving so records stay retrievable and readable for their retention period."
      ]
    },
    {
      "title": "The V-Model, applied to software",
      "steps": [
        "URS: what the system must do (functions, data, security, Part 11 controls). Top-left of the V.",
        "FS: how the software meets each user requirement - screen flows, calculations, audit trails, access control.",
        "DS / configuration spec: the technical build - data model, logic, security design, interfaces, architecture.",
        "Build / configure / code, then a supplier assessment to decide how much to leverage vendor testing.",
        "IQ: the system and its infrastructure are installed and configured correctly (verifies the design/config spec).",
        "OQ: functions, calculations, audit trails, and access controls work across the range (verifies the FS).",
        "PQ / UAT: the system performs in real use with real users and data (verifies the URS). A traceability matrix links every URS line to the test that proves it."
      ]
    },
    {
      "title": "Data integrity and Part 11 / Annex 11",
      "body": "CSV exists largely to protect electronic records. Records must be ALCOA+ - attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, and available. That means validating audit trails (who did what, when, why), unique-user access control and electronic-signature controls, secure time-stamped records, and backup/restore. These controls are written into the URS and proven in OQ.",
      "note": "Acceptance and configuration come from your URS and intended use - do not assume from the vendor's defaults. The same discipline as equipment: the framework tells you what to verify; your process and the regulations define the controls and limits."
    },
    {
      "title": "Maintaining the validated state",
      "body": "Validation isn't a one-time event. Across the operation phase you hold the system validated through change control (impact-assess and re-test changes), periodic review, audit-trail review, security/access management, and backup/restore testing. SaaS and AI/ML systems need this most - frequent vendor updates and adaptive models mean change control and re-assessment are continuous, not annual."
    }
  ],
  "refs": [
    {
      "label": "ISPE GAMP 5 (2nd ed, 2022) - Risk-Based GxP Computerized Systems",
      "link": "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition"
    },
    {
      "label": "EU GMP Annex 11 - Computerised Systems",
      "link": "https://health.ec.europa.eu/system/files/2016-11/2015-11_annex11_en_0.pdf"
    },
    {
      "label": "FDA 21 CFR Part 11 - Electronic Records & Signatures",
      "link": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11"
    }
  ],
  "example": {
    "label": "What risk-based assurance looks like (CSA)",
    "docTitle": "Scaling test effort to risk - a LIMS (illustrative, CSA-style)",
    "meta": [
      [
        "Approach",
        "FDA CSA - assurance effort follows risk"
      ],
      [
        "Status",
        "CSA finalized 2025, updated Feb 2026"
      ]
    ],
    "blocks": [
      {
        "h": "Effort follows the risk of failure",
        "cols": [
          "Function",
          "Risk if it fails",
          "Assurance activity"
        ],
        "rows": [
          [
            "Result calculation / OOS flagging",
            "High (patient impact)",
            "Scripted, documented testing"
          ],
          [
            "Audit trail / e-signature",
            "High (record integrity)",
            "Scripted testing + Part 11 checks"
          ],
          [
            "Sample-login screen",
            "Medium",
            "Limited scripted + unscripted testing"
          ],
          [
            "On-screen report layout",
            "Low",
            "Unscripted / ad-hoc; leverage vendor test"
          ]
        ]
      },
      {
        "h": "The shift",
        "text": "CSA keeps the GAMP 5 lifecycle but moves the centre of gravity from uniform documentation to critical thinking: define intended use, assess the risk of failure, then put the heavy scripted evidence only where a failure would actually hurt the patient or the record. Native system logs and assessed vendor testing count as evidence. Part 11 controls are unchanged."
      }
    ]
  }
}

,
  landscape: {"name": "The regulatory landscape", "sub": "Law vs authority vs guidance - how it all fits", "desc": "Validation does not happen in a vacuum. Three different kinds of document shape every CQV decision: binding law (what you must do), the authorities that write and enforce it (who checks), and voluntary standards and guidance (how the industry agrees to do it well). They carry very different weight, and confusing them is a common and expensive mistake. This page sorts them out, then the other pages in this section are the who's-who for each layer.", "accent": "#9b8cf0", "icon": "reg", "sections": [{"title": "Three layers, three levels of force", "body": "Think of it as a pyramid. At the top sits a small amount of legally binding text - statute and regulation. Below it are the government authorities that issue, interpret, and enforce that text through inspections and approvals. At the base is a large body of voluntary standards and guidance from standards organizations and industry groups that tells you how to actually meet the law. The base is the biggest because that is where the practical 'how' lives - but it has the least legal force.", "svg": "<svg viewBox=\"0 0 344 196\" role=\"img\" aria-label=\"Pyramid: binding law at the apex, regulatory authorities in the middle, standards and guidance at the base\" width=\"100%\"><polygon points=\"172,14 214,70 130,70\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"1.4\"/><polygon points=\"126,76 218,76 250,134 94,134\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"1.3\"/><polygon points=\"90,140 254,140 286,190 58,190\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"1.2\"/><text x=\"172\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text)\">Law &amp; regulation</text><text x=\"172\" y=\"64\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"var(--muted)\">binding - you MUST</text><text x=\"172\" y=\"104\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text)\">Regulatory authorities</text><text x=\"172\" y=\"116\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"var(--muted)\">enforce - they inspect &amp; approve</text><text x=\"172\" y=\"166\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text)\">Standards &amp; guidance</text><text x=\"172\" y=\"178\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"var(--muted)\">voluntary - the agreed 'how'</text></svg>", "caption": "Force decreases top to bottom; practical detail increases bottom to top."}, {"title": "What each layer is", "table": {"cols": ["Layer", "Examples", "Legal weight", "What it gives the CQV engineer"], "rows": [["Statute (law)", "US Federal Food, Drug & Cosmetic Act; EU Regulations & Directives; Japan PMD Act", "Binding - passed by legislators", "The legal duty to validate at all (the 'why you must')"], ["Regulation", "21 CFR 211; EudraLex Vol 4 GMP", "Binding - force of law", "The mandatory GMP requirements your protocols satisfy"], ["Authority guidance", "FDA Guidance for Industry; EMA guidelines", "Not binding, but 'current thinking' - follow or justify", "The agency's expectations for how to meet the regulation"], ["Consensus standard", "ISO 14644; ASTM E2500", "Voluntary unless cited by a regulation", "Recognized methods and acceptance criteria"], ["Industry guidance", "ISPE Baseline Guides & GAMP; PDA Technical Reports", "Voluntary best practice", "The detailed, field-tested 'how to' your SOPs are built on"]]}, "note": "Key idea: guidance is not law, but inspectors expect you to either follow it or document a science-based rationale for doing something different. 'It is only guidance' is not a defense on its own."}, {"title": "How they relate in practice", "bullets": ["Law and regulation say WHAT must be achieved (equipment must be qualified; processes validated; data attributable and reliable) but rarely say HOW.", "Authorities enforce that through inspections, approvals, and warning letters - and publish guidance describing how they expect it done.", "Standards and industry guidance fill the 'how' with concrete methods: ASTM E2500 for risk-based C&Q, ISO 14644 for cleanroom classification, GAMP 5 for computerized systems, ICH Q9 for risk management.", "ICH is the bridge: it harmonizes technical requirements across regions, and once a region's authority adopts an ICH guideline it effectively gains regulatory weight there.", "Pharmacopeias (USP, Ph. Eur., JP) are a special case - their monographs and general chapters are made legally enforceable by the regulations that reference them."]}, {"title": "Why this matters for validation", "body": "When you write an acceptance criterion, you are standing on this whole stack. A cleanroom particle limit traces to EU Annex 1 and ISO 14644-1; a data-integrity control traces to 21 CFR Part 11, EU Annex 11, and ALCOA+ expectations; a risk-based decision to leverage commissioning traces to ASTM E2500 and ISPE Baseline Guide 5. Knowing which layer a requirement comes from tells you how much room you have: a regulation is non-negotiable, while a guidance method can be swapped for an equally valid, justified alternative."}], "refs": [{"link": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents", "label": "FDA guidance documents"}, {"link": "https://www.ich.org/page/ich-guidelines", "label": "ICH guidelines"}]},

  authorities: {"name": "Regulatory authorities", "sub": "Who writes and enforces GMP, region by region", "desc": "Regulatory authorities (also called competent authorities or national regulatory agencies) are the government bodies that license manufacturers, approve products, write binding GMP rules, and run the inspections that decide whether you keep operating. For a CQV engineer they are the audience: your qualification packages exist to satisfy them. This page is a who's-who of the agencies whose expectations drive validation worldwide.", "accent": "#9b8cf0", "icon": "reg", "sections": [{"title": "The major authorities", "table": {"cols": ["Authority", "Region", "Role for CQV"], "rows": [["FDA (Food & Drug Administration)", "United States", "Writes & enforces 21 CFR GMP; inspects sites; issues 483s and Warning Letters"], ["EMA (European Medicines Agency)", "European Union", "Coordinates EU evaluation & guidance; GMP is enforced by the national authorities of each member state"], ["National competent authorities", "EU member states (e.g. BfArM, AIFA, ANSM)", "Actually issue GMP certificates and run inspections within the EU system"], ["MHRA (Medicines & Healthcare products Regulatory Agency)", "United Kingdom", "Post-Brexit UK GMP regulator; inspections & GMP certification"], ["PMDA / MHLW", "Japan", "MHLW sets the rules (the PMD Act, MO 179); PMDA performs the scientific review & GMP inspections"], ["Health Canada", "Canada", "Enforces the Food and Drug Regulations GMP (Division 2); issues establishment licences"], ["TGA (Therapeutic Goods Administration)", "Australia", "Adopts the PIC/S GMP guide; licenses & inspects manufacturers"], ["NMPA (National Medical Products Administration)", "China", "Chinese drug & device regulator; GMP enforcement & registration"], ["ANVISA", "Brazil", "Brazilian health regulator; GMP inspection & market authorization"], ["CDSCO", "India", "Central drug authority; works with state licensing authorities on GMP"], ["WHO", "Global (esp. supplying agencies)", "Not a national regulator - publishes WHO GMP & prequalifies products/sites for procurement in lower-resource markets"]]}, "note": "WHO is the odd one out: it has no enforcement power over a company, but its GMP and prequalification standards are mandatory if you want to supply UN/Global-Fund procurement."}, {"title": "How they reduce duplicate inspections", "body": "Authorities increasingly recognize each other's work so a site is not inspected identically by everyone. The main mechanisms a CQV engineer runs into:", "bullets": ["PIC/S (Pharmaceutical Inspection Co-operation Scheme) - 50+ participating authorities (incl. FDA, EMA members, MHRA, TGA, Health Canada) align their GMP inspection standards around one common GMP guide.", "Mutual Recognition Agreements (MRAs) - e.g. the FDA-EU MRA lets each accept the other's drug GMP inspections, cutting duplicate audits.", "ICH - harmonizes the underlying technical requirements so a dossier and its supporting validation are broadly portable across regions."]}, {"title": "What an inspection looks for in your CQV work", "bullets": ["Evidence that equipment and systems are qualified (IQ/OQ/PQ) and processes validated, with approved protocols and reports.", "A defensible, documented risk basis for what was qualified formally versus leveraged (commissioning, FAT/SAT, vendor docs).", "Data integrity - that records are attributable, contemporaneous, original, accurate, and complete (ALCOA+), with audit trails and access control.", "Change control, deviations, and CAPA linking back to the qualified state - i.e. that the validated status is maintained, not just achieved once."]}], "refs": [{"link": "https://picscheme.org/", "label": "PIC/S participating authorities"}, {"link": "https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards-for-pharmaceuticals", "label": "WHO norms & standards"}]},

  regs: {"name": "Regulations & pharmacopeias", "sub": "The binding text: CFR, EudraLex, and the compendia", "desc": "This is the legally binding layer - the regulations a regulator can cite against you, plus the pharmacopeias whose standards those regulations make enforceable. Where guidance describes good practice, these documents define the floor. This page maps the ones that drive validation: US 21 CFR, EU EudraLex Volume 4 and its annexes, the equivalent frameworks in Japan and elsewhere, and the three major pharmacopeias.", "accent": "#9b8cf0", "icon": "reg", "sections": [{"title": "United States - Title 21 CFR", "body": "The US Code of Federal Regulations, Title 21, is FDA's binding rulebook. The parts that matter most to CQV:", "table": {"cols": ["Part", "Covers", "Why CQV cares"], "rows": [["210 / 211", "cGMP for finished pharmaceuticals", "The core: requires qualified equipment, validated processes, calibration, and controlled facilities"], ["Part 11", "Electronic records & electronic signatures", "Governs computerized-system validation, audit trails, e-signatures, data integrity"], ["Parts 600-680", "Biologics", "GMP layer specific to vaccines, blood, and biological products"], ["Part 820 -> QMSR", "Medical device quality system", "As of Feb 2026 the QMSR harmonizes Part 820 with ISO 13485; relevant to devices & combination products"], ["Part 1271", "Human cells & tissues (HCT/Ps)", "Cell & gene therapy facility and process controls"], ["Part 4", "Combination products", "Which GMPs apply when a drug + device are combined"]]}, "note": "21 CFR 210/211 says you must validate, but is deliberately non-specific on how - which is exactly why the guidance and standards layers exist."}, {"title": "European Union - EudraLex Volume 4", "body": "EudraLex is the body of EU pharmaceutical law; Volume 4 is the EU GMP guide. It has a main body of chapters plus annexes for specific topics. The annexes a validation engineer lives in:", "table": {"cols": ["Document", "Covers", "Why CQV cares"], "rows": [["Vol 4 Part I (Ch 1-9)", "GMP for medicinal products", "Quality system, premises/equipment, qualification & validation principles"], ["Annex 1", "Manufacture of sterile products", "Cleanroom classification, contamination control strategy, aseptic processing (major revision now in force)"], ["Annex 11", "Computerised systems", "The EU counterpart to 21 CFR Part 11 for CSV and data integrity"], ["Annex 15", "Qualification & validation", "The EU's explicit DQ/IQ/OQ/PQ, process validation, and cleaning-validation expectations"]]}, "note": "Annex 15 is the single most directly relevant EU text for qualification - it names the qualification stages this app is built around."}, {"title": "Other regional frameworks", "table": {"cols": ["Region", "Binding framework"], "rows": [["Japan", "PMD Act + MHLW Ministerial Ordinance 179 (GMP); ICH guidelines adopted nationally"], ["UK", "The Human Medicines Regulations 2012 + the UK GMP guide (post-Brexit, MHRA-enforced)"], ["Canada", "Food and Drug Regulations, Division 2 (GMP)"], ["PIC/S members broadly", "The PIC/S GMP Guide (PE 009), closely aligned with EU GMP"]]}}, {"title": "Pharmacopeias - standards made enforceable", "body": "A pharmacopeia is an official compendium of quality standards: monographs (per-substance specs) and general chapters (test methods and requirements). They are voluntary on paper but become legally binding because the regulations require compliance with the applicable pharmacopeia.", "table": {"cols": ["Pharmacopeia", "Region", "CQV touchpoints (examples)"], "rows": [["USP-NF (United States Pharmacopeia)", "United States", "<643> TOC, <645> water conductivity, <788>/<787> particulates, <1058> AIQ, <797>/<800> compounding, <1116> EM"], ["Ph. Eur. (European Pharmacopoeia)", "Europe (Council of Europe)", "Water for injection, sterility, endotoxin, and method chapters referenced by EU GMP"], ["JP (Japanese Pharmacopoeia)", "Japan", "The Japanese compendial standards for the same tests"]]}, "note": "The three are partially harmonized through the Pharmacopoeial Discussion Group (PDG), but differences remain - a global product must meet each market's compendium."}], "refs": [{"link": "https://www.ecfr.gov/current/title-21", "label": "21 CFR (eCFR)"}, {"link": "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en", "label": "EudraLex Volume 4"}, {"link": "https://www.usp.org/", "label": "USP"}]},

  bodies: {"name": "Standards & guidance bodies", "sub": "ICH, ISO, ASTM, ISPE, PDA and the rest", "desc": "Below the binding layer sits the large world of voluntary standards and industry guidance - the documents that tell you how to actually do good validation. They are not law, but they encode decades of consensus practice, and regulators expect you to use them or justify an alternative. This page is the who's-who: the harmonization and standards organizations, then the industry societies whose technical guides shape day-to-day CQV.", "accent": "#9b8cf0", "icon": "reg", "sections": [{"title": "ICH - the harmonizer", "body": "The International Council for Harmonisation brings regulators and industry from the major regions together to write one technical guideline instead of three. Its quality (Q) series underpins modern, science- and risk-based validation. Once a region adopts an ICH guideline, it carries regulatory weight there.", "table": {"cols": ["Guideline", "Topic", "CQV relevance"], "rows": [["Q7", "GMP for active pharmaceutical ingredients", "The API-side GMP baseline"], ["Q8", "Pharmaceutical development (QbD)", "Design space & critical quality attributes that frame validation"], ["Q9 (R1)", "Quality risk management", "The risk methodology behind risk-based C&Q and CDE selection"], ["Q10", "Pharmaceutical quality system", "The PQS that owns the validated state across the lifecycle"], ["Q11 / Q12", "Drug substance development / lifecycle management", "Development and post-approval change of the process"], ["Q13 / Q14", "Continuous manufacturing / analytical procedure development", "Newer guidance for CM control strategies and analytical method lifecycle"]]}}, {"title": "Standards organizations", "table": {"cols": ["Body", "What it is", "Key documents for CQV"], "rows": [["ISO", "International Organization for Standardization", "ISO 9001 (QMS), ISO 13485 (device QMS), ISO 14644 (cleanrooms), ISO 14971 (device risk)"], ["ASTM International", "Standards body (ASTM E55 pharma committee)", "ASTM E2500 - the risk- and science-based approach to C&Q"], ["PIC/S", "Inspectorate co-operation scheme", "PE 009 GMP Guide + harmonized inspection guidance"], ["IEST", "Institute of Environmental Sciences & Technology", "Recommended Practices behind cleanroom testing (the basis for much of ISO 14644 method detail)"], ["NIST", "US National Institute of Standards & Technology", "The traceability anchor for calibration standards"]]}}, {"title": "Industry guidance societies", "body": "These member organizations publish the detailed, field-tested 'how to' that SOPs and protocols are built on. Voluntary, but enormously influential.", "table": {"cols": ["Body", "What it publishes", "Why it matters"], "rows": [["ISPE", "Baseline Guides (incl. Vol 5 Commissioning & Qualification) and the GAMP series", "The practical home of risk-based C&Q and GAMP 5 for computerized systems"], ["PDA (Parenteral Drug Association)", "Technical Reports (e.g. TR 1 moist-heat sterilization, TR 13 EM, TR 26 sterilizing filtration)", "Deep method-level guidance for sterile & aseptic processing"], ["AAMI", "Association for the Advancement of Medical Instrumentation standards", "Sterilization standards (e.g. for EO and radiation) for devices"], ["NSF / ANSI", "Public-health & equipment standards", "e.g. NSF/ANSI 49 for biosafety cabinets"], ["PHSS / local societies", "Regional pharmaceutical & healthcare science guidance", "Practical regional interpretation of GMP expectations"]]}, "note": "GAMP 5 (2nd ed) is the reference for computerized-system validation in this app's automation and informatics pages; ASTM E2500 and ISPE Baseline Guide 5 are the basis for the risk-based 'leverage' logic behind the gold BG5 button."}, {"title": "Putting the layers together", "body": "A single qualification decision usually touches all of it at once. Qualifying a sterile filling line: the duty to validate comes from 21 CFR 211 and EU GMP; the sterile-specific expectations from Annex 1; the risk approach from ICH Q9, ASTM E2500, and ISPE Baseline Guide 5; the cleanroom criteria from ISO 14644; the sterilization method detail from PDA Technical Reports; the data controls from Part 11 / Annex 11; and the acceptance limits from the applicable pharmacopeia. The skill is knowing which document owns each requirement - because that tells you what is fixed and what you can justify changing."}], "refs": [{"link": "https://ispe.org/publications/guidance-documents", "label": "ISPE guidance documents"}, {"link": "https://www.astm.org/e2500-13r23.html", "label": "ASTM E2500"}, {"link": "https://www.iso.org/committee/54874.html", "label": "ISO cleanroom standards (TC 209)"}]},
};

const PROC_ICONS = {
  requal: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b57fd0" stroke-width="1.7"><path d="M20 11a8 8 0 1 0-1 5"/><path d="M20 4v5h-5"/><path d="M9 12l2 2 4-4"/></svg>',
  rtm: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e69a5a" stroke-width="1.7"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="13" width="7" height="7" rx="1"/><path d="M10 7h4v6"/><path d="M12 11l2 2 2-2" opacity="0.6"/></svg>',
  vsr: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5ec98f" stroke-width="1.7"><path d="M6 2h9l3 3v11H6z"/><path d="M9 9l2 2 4-4"/><circle cx="16.5" cy="18.5" r="3"/><path d="M15 21l-1 2 2.5-1 2.5 1-1-2"/></svg>',
  vmp: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c7923f" stroke-width="1.7"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3h6v3H9z"/><path d="M8.5 11l2 2 4-4"/><path d="M8 17h8"/></svg>',
  reg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v18M7 21h10M5 7h14M9 7l-3.5 6a3 3 0 0 0 7 0L9 7M18.5 7l-3.5 6a3 3 0 0 0 7 0L18.5 7"/></svg>',
  steril: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7z"/><path d="M5 14c0 4 3 8 7 8s7-4 7-8"/><path d="M9 21h6"/></svg>',
  vmodel: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5aa9e6" stroke-width="1.7"><path d="M4 4l8 16 8-16"/><path d="M7 4l5 10 5-10" opacity="0.45"/></svg>',
  doc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#58e6a8" stroke-width="1.7"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4M9 12h6M9 16h6"/></svg>',
  factory: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c08bf0" stroke-width="1.7"><path d="M3 21h18M4 21V9l5 3V9l5 3V9l5 3v9"/><path d="M7 21v-4h2v4M15 21v-4h2v4"/></svg>',
  site: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0935a" stroke-width="1.7"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6M9 10h2M13 10h2"/></svg>',
  box: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b98a9" stroke-width="1.7"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
  chip: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5aa9e6" stroke-width="1.7"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/></svg>',
  scale: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e6c45a" stroke-width="1.7"><path d="M12 3v18M7 21h10M5 7h14l-3.5 6a3 3 0 0 1-7 0z" opacity="0.5"/><path d="M12 3v18M7 21h10M3 7l3.5 7a3 3 0 0 0 5 0L8 7M16 7l3.5 7a3 3 0 0 0 5 0L21 7M5 7h14" transform="translate(-1,0)"/></svg>',
  verify: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" stroke-width="1.7"><path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  guide: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b48be6" stroke-width="1.7"><path d="M12 6C9.5 4.2 5.5 4.2 3 5v14c2.5-0.8 6.5-0.8 9 1 2.5-1.8 6.5-1.8 9-1V5c-2.5-0.8-6.5-0.8-9 1z"/><path d="M12 6v14"/></svg>',
  fspec: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#58e6a8" stroke-width="1.7"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><circle cx="11.5" cy="14" r="2"/><path d="M11.5 10.7v1.3M11.5 16v1.3M8 14h1.3M13.7 14h1.3"/></svg>',
  dspec: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" stroke-width="1.7"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 17l3-6 3 6M10.1 14.8h3.8"/></svg>',
  gmp: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c08bf0" stroke-width="1.7"><path d="M3 21h18M5 21V8l5-3 5 3v13"/><path d="M15 21V11l4 2v8"/><path d="M8 11h2M8 14h2M8 17h2"/></svg>',
  gep: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#58e6a8" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>',
  gamp: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5aa9e6" stroke-width="1.7"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 15V9l2 3 2-3v6M16 9v6M14 12h2"/></svg>',
  dint: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0935a" stroke-width="1.7"><path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z"/><path d="M9 11h6M9 14h6M9 8h6"/></svg>',
  lifecycle: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#58e6a8" stroke-width="1.7"><path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v3h-3"/><circle cx="12" cy="12" r="2.2"/></svg>',
  flow: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9b8bea" stroke-width="1.7"><rect x="3" y="3" width="6" height="5" rx="1"/><rect x="15" y="8" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><path d="M9 5.5h3a2 2 0 0 1 2 2v1M9 18.5h3a2 2 0 0 0 2-2v-1"/></svg>',
  protocol: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0935a" stroke-width="1.7"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 13l1.5 1.5L13 12M9 18h6"/></svg>',
  change: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0726a" stroke-width="1.7"><path d="M4 8a8 8 0 0 1 13-3l2 2M20 16a8 8 0 0 1-13 3l-2-2"/><path d="M19 3v4h-4M5 21v-4h4"/></svg>',
  capa: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0726a" stroke-width="1.7"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M21 5l-9 9-3-3"/><circle cx="12" cy="12" r="1.4"/></svg>',
  clean: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" stroke-width="1.7"><path d="M8 21h8M10 21V11M14 21V11M7 11h10l-1-4H8z"/><path d="M12 7V3M9 4l3-1 3 1"/></svg>',
  pdq: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h6M7 13h10M7 17h4"/><path d="M16 8l2 2-2 2" opacity="0.6"/></svg>',
  piq: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5aa9e6" stroke-width="1.7"><path d="M4 7h16M4 12h16M4 17h16"/><path d="M19 5l1.5 1.5M19 10l1.5 1.5M19 15l1.5 1.5" opacity="0.6"/></svg>',
  poq: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" stroke-width="1.7"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
  ppq: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#58e6a8" stroke-width="1.7"><path d="M4 18l4-5 3 3 5-7 4 5"/><path d="M4 20h16"/></svg>',
  vlms: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5aa9e6" stroke-width="1.7"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M7 21h10M12 18v3"/><path d="M6.5 6.5h.01M9 6.5h.01"/></svg>',
  tempmap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd1c5" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.1"/><circle cx="12" cy="8" r="1.1"/><circle cx="16" cy="8" r="1.1"/><circle cx="8" cy="12" r="1.1"/><circle cx="12" cy="12" r="2" fill="#4fd1c5" stroke="none"/><circle cx="16" cy="12" r="1.1"/><circle cx="8" cy="16" r="1.1"/><circle cx="12" cy="16" r="1.1"/><circle cx="16" cy="16" r="1.1"/></svg>',
  calib: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d9b15c" stroke-width="1.7"><path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 14l4.5-3.2"/><circle cx="12" cy="14" r="1.5" fill="#d9b15c" stroke="none"/><path d="M3 14h1.6M19.4 14H21M12 5v1.6"/></svg>'
};
