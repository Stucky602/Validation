/* cqv-reference.js  (auto-split from index.html)  11 consts */
const GMP_INFO = {
  status: "gmp",
  id: "Industry Standard GMP",
  issuer: "General good engineering / GMP practice",
  covers: "A routine good-practice check that supports qualification but does not trace to a single specific compendial or ISO clause. Document it per your site's GMP procedures.",
  crit: null,
  link: null
};

const RISK_COMMON = [
  "What is the impact if this system fails - on product quality, patient safety, or data integrity?",
  "Is this a direct-impact system (qualify) or not-direct-impact (commission only)? Where is the system boundary?",
  "Which functions are the Critical Aspects / Critical Design Elements - the few that actually protect the product?",
  "What is the worst-case failure, how likely is it, and would we detect it before product is affected?"
];

const RISK_ARCHETYPES = {
  storage: { label: "Controlled storage", questions: [
    "What is the product's stability limit, and how long can it survive an excursion before quality is affected?",
    "Where are the hot/cold spots, and is monitoring placed at the worst-case position?",
    "On power or cooling loss, how fast does the chamber leave range, and is backup/alarm adequate?",
    "Do load pattern, fill level, or door openings change the qualified profile?",
    "Are mapping and monitoring sensors calibrated, traceable, and is the data captured securely?"
  ] },
  sterilization: { label: "Sterilization / depyrogenation", questions: [
    "What lethality (SAL) or endotoxin reduction is required, and what is the worst-case load?",
    "Where is the cold spot, and does the BI / endotoxin-indicator challenge sit there?",
    "Could load configuration, wrapping, or density block heat / agent / dose penetration?",
    "Are F₀ / dwell / temperature and (gas or radiation) dose parameters controlled and recorded?",
    "How is a failed cycle detected and segregated before product is released?"
  ] },
  thermalproc: { label: "Thermal process unit", questions: [
    "Does this step touch a CQA (drying endpoint, ashing, temperature hold), or is it support only?",
    "What temperature uniformity / range is acceptable, and where is the worst case?",
    "Could over- or under-processing damage the product or bias a result?",
    "Are the controlling and recording instruments calibrated and traceable?"
  ] },
  analytical: { label: "Analytical / QC instrument", questions: [
    "Does this instrument generate GMP data used for release or stability decisions?",
    "What is the AIQ group (USP <1058>), and which method attributes depend on it?",
    "What is the impact of an out-of-calibration or drift event on reported results?",
    "Are audit trail, access control, and data integrity (ALCOA+) adequate for the records produced?",
    "How would a wrong result be caught - system suitability, controls, second review?"
  ] },
  labequip: { label: "Lab / prep equipment", questions: [
    "Does this step affect a product CQA, or only a non-critical prep activity?",
    "Which parameters (speed / time / temperature) matter, and what is their acceptable range?",
    "Could equipment failure cross-contaminate or compromise the batch / sample?",
    "Are programmable settings controlled, and are critical instruments calibrated?"
  ] },
  manufacturing: { label: "Product-contact process equipment", questions: [
    "Which CPPs drive which CQAs, and what is the proven acceptable range (design space)?",
    "What is the impact of operating at the edge of the range on product quality?",
    "What are the cross-contamination and cleaning (CIP / cleaning-validation) risks between products?",
    "Does scale, load, or batch size change the qualified performance?",
    "Are the control system, recipe, and critical instruments controlled and calibrated?"
  ] },
  computerised: { label: "Computerised / GxP system", questions: [
    "What is the GAMP software category (1 / 3 / 4 / 5), and how does that scale the validation effort?",
    "What GxP records and decisions does the system own, and what is the data-integrity risk?",
    "Are audit trail, unique access, electronic signatures, and time sync configured and verified?",
    "Which configured or custom functions are critical, and how are they challenged?",
    "What are the interface, backup / restore, and disaster-recovery risks?",
    "How are change control and periodic review kept current to maintain the validated state?"
  ] },
  cleanutility: { label: "Contamination-control utility / area", questions: [
    "What grade / classification or water / gas quality must this hold, and for which products?",
    "What is the contamination-control risk if it drifts (particulate, microbial, endotoxin, cross-contamination)?",
    "Are the critical parameters (ΔP, air changes, conductivity, TOC, A₀) monitored at the right points?",
    "How does it recover after an excursion, door event, or load change?",
    "Is monitoring continuous, alarmed, and data-integrity sound?"
  ] },
  inspection: { label: "Inspection / detection", questions: [
    "What defect or attribute must this reliably detect, and what is the harm if it escapes?",
    "What are the false-accept (critical) and false-reject rates, and how are they justified?",
    "How is detection capability challenged (defect sets, test pieces, probability of detection)?",
    "Are reject / segregation and result recording verified and tamper-evident?"
  ] },
  coldchain: { label: "Cold-chain / distribution", questions: [
    "What is the product's allowed temperature range and time-out-of-range budget?",
    "What is the worst-case lane, season, and transit duration (plus margin)?",
    "What is the worst-case payload / pack-out and loading configuration?",
    "How is an excursion detected, recorded, and handled (CAPA) before use?",
    "Are qualified packaging and calibrated monitoring devices in place per GDP?"
  ] },
  pat: { label: "Process analytical (PAT)", questions: [
    "Does this measurement drive a real-time control decision or release - and what if it's wrong?",
    "For model-based PAT, how is the chemometric model validated, maintained, and monitored for drift?",
    "How representative and stable is the sampling / probe interface in-process?",
    "What is the data-integrity and audit-trail risk for the acquired data?",
    "How is a bad reading detected before it affects the batch?"
  ] }
};

const RISK_MAP = {
  incubator:"storage", co2incubator:"storage", fridge:"storage", freezer:"storage", ult:"storage",
  coldroom:"storage", warehouse:"storage", stability:"storage", photostability:"storage", ln2:"storage", cryochamber:"storage",
  autoclave:"sterilization", benchtopautoclave:"sterilization", etosterilizer:"sterilization", gammasterilizer:"sterilization", watercascade:"sterilization",
  depyrooven:"sterilization", depyrotunnel:"sterilization", dryoven:"sterilization",
  vacuumoven:"thermalproc", mufflefurnace:"thermalproc", waterbath:"thermalproc", hotplate:"thermalproc",
  balance:"analytical", ph:"analytical", osmometer:"analytical", refractometer:"analytical", hplc:"analytical", gc:"analytical",
  dissolution:"analytical", uvvis:"analytical", ftir:"analytical", karlfischer:"analytical", particlecounter:"analytical",
  pipette:"analytical", conductivitytoc:"analytical", elementalanalyzer:"analytical", tablettester:"analytical",
  centrifuge:"labequip", homogenizer:"labequip",
  lyophilizer:"manufacturing", bioreactor:"manufacturing", granulator:"manufacturing", fbd:"manufacturing", blender:"manufacturing",
  mill:"manufacturing", tabletpress:"manufacturing", coater:"manufacturing", capsulefiller:"manufacturing", mixingvessel:"manufacturing",
  fillingline:"manufacturing", blisterline:"manufacturing", chromskid:"manufacturing", tffskid:"manufacturing",
  filterintegrity:"manufacturing", singleuse:"manufacturing", reactor:"manufacturing", filterdryer:"manufacturing",
  processcentrifuge:"manufacturing", jetmill:"manufacturing", spraydryer:"manufacturing",
  plc:"computerised", scada:"computerised", deltav:"computerised", bmsems:"computerised", mes:"computerised",
  historian:"computerised", lims:"computerised", cds:"computerised",
  cleanroom:"cleanutility", hvac:"cleanutility", watersystem:"cleanutility", compressedair:"cleanutility", bsc:"cleanutility",
  isolator:"cleanutility", cipsip:"cleanutility", puresteam:"cleanutility", rowater:"cleanutility", dispensingbooth:"cleanutility",
  partswasher:"cleanutility", vialwasher:"cleanutility",
  visualinspection:"inspection", ccittester:"inspection", checkweigher:"inspection",
  shipper:"coldchain", transportlane:"coldchain", refrigeratedvehicle:"coldchain",
  patanalyzer:"pat", inlineprobe:"pat", onlinetoc:"pat", flowcontroller:"pat"
};

const HAZARDS = {
  pressure: { label: "Pressure / stored energy", icon: "pressure",
    hazard: "Operates under pressure or vacuum; sudden release, door/seal failure, or implosion can cause serious injury.",
    controls: "Confirm pressure relief and door-interlock function before testing. Never defeat an interlock to open under pressure. Stand clear of doors/sight glasses during pressurized phases. Follow lockout/tagout (LOTO) for any intrusive work." },
  thermal_hot: { label: "High temperature / burns / fire", icon: "flame",
    hazard: "Surfaces, steam, loads, or chamber reach temperatures that cause severe burns; high-temperature units carry fire risk.",
    controls: "High-temp gloves and face/eye protection when handling hot loads or probes. Allow cooldown before contact; treat surfaces as hot. Keep combustibles clear. Use rated thermocouples and lead feed-throughs." },
  steam: { label: "Steam / scald", icon: "steam",
    hazard: "Live or pure steam and hot condensate can scald instantly; released steam fills the work area.",
    controls: "Verify no pressure/temperature before opening. Crack doors slowly to vent. Eye protection and heat-resistant gloves. Keep clear of steam vents and condensate drains." },
  cryo: { label: "Cryogenic / asphyxiation", icon: "cryo",
    hazard: "Cryogenic liquid/vapor causes severe cold burns and frostbite; LN₂ boil-off displaces oxygen and can cause rapid asphyxiation with no warning.",
    controls: "Cryo gloves, face shield, closed shoes; never seal cryogen in a closed container. Confirm the O₂-depletion monitor works before entry; ensure room ventilation. Treat O₂ alarms as evacuate-now. Follow confined-space rules where applicable." },
  toxic_gas: { label: "Toxic / flammable gas", icon: "gas",
    hazard: "Process gas is toxic, carcinogenic, and/or flammable/explosive (e.g. ethylene oxide); leaks endanger operators and the facility.",
    controls: "Confirm gas detection, exhaust/abatement, and interlocks before any cycle. Personal gas monitoring and the site EtO (or relevant gas) exposure controls. No ignition sources. Aeration per procedure before access; never bypass safety interlocks." },
  radiation: { label: "Ionizing radiation", icon: "radiation",
    hazard: "Radioactive source or beam delivers a lethal dose; access during operation is fatal.",
    controls: "Radiation-protection program governs all work; only trained, authorized personnel. Verify source position, interlocks, and area monitors before entry. Dosimetry badges required. Never override access interlocks - RSO authority applies." },
  chemical: { label: "Hazardous chemicals / solvents", icon: "chemical",
    hazard: "Flammable, corrosive, or toxic solvents/reagents; vapor, splash, or spill hazards (e.g. mobile phases, acids, organic solvents).",
    controls: "Review SDS for every chemical. Appropriate gloves, eye protection, and ventilation/fume extraction. Bonding/grounding and no ignition sources for flammables. Spill kit accessible; waste handled per procedure." },
  rotating: { label: "High-speed rotating / mechanical", icon: "rotating",
    hazard: "High-speed rotors, mills, presses, or agitators can cause crush, entanglement, or ejected-fragment injuries; rotor failure releases large energy.",
    controls: "Confirm guards, lid-interlocks, and rotor/tooling condition before running. LOTO before access. Keep hands/clothing/tools clear of moving parts; respect run-up/run-down times. Never defeat an interlock to reach inside." },
  highvoltage: { label: "Electrical / high voltage", icon: "electrical",
    hazard: "High-amperage or high-voltage supplies and exposed control wiring present shock and arc-flash risk during installation/intrusive testing.",
    controls: "LOTO and qualified-electrician involvement for any work inside enclosures. Verify earthing/grounding. Treat circuits as live until proven dead. Arc-flash PPE per the site electrical-safety program." },
  biohazard: { label: "Biohazard / containment", icon: "biohazard",
    hazard: "Equipment handles biological agents or maintains containment; breach risks exposure or environmental release.",
    controls: "Containment/BSL level governs all work; decontaminate per procedure before intrusive testing. Appropriate PPE and (where used) VHP/sporicidal decon cycles complete before access. Validate airflow/containment before relying on it." },
  vhp: { label: "Decontaminant exposure (VHP / sporicide)", icon: "vhp",
    hazard: "Vaporized hydrogen peroxide or sporicidal agents used for bio-decontamination are irritant/toxic at exposure; residual gas is a hazard.",
    controls: "Confirm aeration to a safe level (gas monitor) before access. Do not enter or breach during a decon cycle. Appropriate respiratory/skin protection per the agent SDS." },
  confined: { label: "Walk-in / confined-space access", icon: "confined",
    hazard: "Walk-in chambers, cold rooms, and large vessels can trap personnel; cold, low-O₂, or door-latch failures are life-threatening.",
    controls: "Verify inside-release door hardware and any personnel alarm before entry. Never enter a walk-in alone without a check-in procedure. Confined-space program applies to vessels; confirm atmosphere before entry." }
};

const HAZARD_MAP = {
  // Sterilizers
  autoclave: ["pressure", "steam", "thermal_hot"],
  benchtopautoclave: ["pressure", "steam", "thermal_hot"],
  watercascade: ["pressure", "thermal_hot"],
  etosterilizer: ["toxic_gas", "pressure"],
  gammasterilizer: ["radiation"],
  // Ovens & furnaces
  dryoven: ["thermal_hot"],
  depyrooven: ["thermal_hot"],
  depyrotunnel: ["thermal_hot"],
  vacuumoven: ["thermal_hot", "pressure"],
  mufflefurnace: ["thermal_hot", "highvoltage"],
  // Cryogenic
  ln2: ["cryo"],
  cryochamber: ["cryo"],
  // TCUs with walk-in / confined access
  coldroom: ["confined"],
  warehouse: ["confined"],
  // Analytical with solvents / high energy
  hplc: ["chemical"],
  gc: ["chemical", "thermal_hot"],
  karlfischer: ["chemical"],
  elementalanalyzer: ["chemical", "highvoltage"],
  // Lab equipment
  centrifuge: ["rotating"],
  homogenizer: ["rotating"],
  lyophilizer: ["pressure", "cryo"],
  hotplate: ["thermal_hot"],
  // Bioprocess
  bioreactor: ["biohazard", "pressure"],
  chromskid: ["chemical", "pressure"],
  tffskid: ["chemical", "pressure"],
  filterintegrity: ["pressure"],
  // Solid-dose manufacturing
  granulator: ["rotating", "chemical"],
  fbd: ["chemical", "rotating"],
  blender: ["rotating"],
  mill: ["rotating"],
  tabletpress: ["rotating"],
  coater: ["rotating", "chemical"],
  capsulefiller: ["rotating"],
  // Sterile / liquid
  fillingline: ["rotating", "biohazard"],
  blisterline: ["rotating", "thermal_hot"],
  // API / chemical synthesis (highest chemical hazard)
  reactor: ["chemical", "pressure", "thermal_hot"],
  filterdryer: ["chemical", "rotating", "pressure"],
  processcentrifuge: ["rotating", "chemical"],
  jetmill: ["rotating", "chemical"],
  spraydryer: ["thermal_hot", "chemical"],
  // Utilities
  puresteam: ["steam", "pressure"],
  compressedair: ["pressure"],
  cipsip: ["chemical", "steam", "pressure"],
  bsc: ["biohazard"],
  isolator: ["biohazard", "vhp"],
  watersystem: ["chemical"],
  partswasher: ["chemical", "thermal_hot"]
};

const SAFETY_ESCALATIONS = {
  // Autoclave: leak/vacuum & alarm-interlock challenge involve pressure & defeating safeties
  "autoclave|OQ|3": { add: "Leak-rate / vacuum testing pressurizes and evacuates the chamber - confirm relief and interlocks first; stand clear of the door.", tags: ["pressure"] },
  "autoclave|OQ|8": { add: "Provoking low-temp/low-steam/door/abort faults may require challenging interlocks - do it per a controlled procedure, never by physically defeating a safety device while pressurized.", tags: ["pressure", "steam"] },
  "autoclave|PQ|1": { add: "Loaded heat-penetration uses live cycles at full temperature/pressure with thermocouple lead feed-throughs - verify seal integrity and avoid burns on hot loads/probes.", tags: ["thermal_hot", "steam"] },
  // EtO: residuals/aeration and any access involve toxic-gas exposure
  "etosterilizer|OQ|1": { add: "Verifying gas concentration means working with live EtO - confirm gas detection, exhaust, and personal monitoring; no ignition sources.", tags: ["toxic_gas"] },
  "etosterilizer|PQ|0": { add: "BI placement/retrieval risks EtO exposure - ensure aeration to a safe level and gas-monitor clearance before opening; full exposure controls.", tags: ["toxic_gas"] },
  "etosterilizer|PQ|2": { add: "Residual sampling handles EtO/ECH-bearing product - handle per exposure controls; aeration must be complete before access.", tags: ["toxic_gas"] },
  // Gamma: any mapping is under a radiation-protection program
  "gammasterilizer|OQ|0": { add: "Dose mapping occurs in the irradiation field - all work under the radiation-protection program; verify source position and interlocks; dosimetry required.", tags: ["radiation"] },
  "gammasterilizer|PQ|0": { add: "Product dose mapping places dosimeters in the field - RSO-authorized access only, source-safe state confirmed before entry.", tags: ["radiation"] },
  // LN2: the O2 alarm test IS the life-safety verification
  "ln2|OQ|2": { add: "This is a life-safety verification - LN₂ boil-off can asphyxiate without warning. Confirm room ventilation and treat any real O₂ alarm as immediate evacuation.", tags: ["cryo"] },
  "ln2|OQ|0": { add: "Vapor-phase mapping opens the vessel and handles cryogenic-cold probes - cryo PPE; ensure O₂ monitoring is active during extended openings.", tags: ["cryo"] },
  // Cold room / walk-in: mapping means entering the space
  "coldroom|OQ|0": { add: "3-D mapping requires entering a cold walk-in - confirm the inside-release latch and personnel alarm; do not enter alone without check-in.", tags: ["confined"] },
  // Muffle / depyro: handling near 250-1000C
  "mufflefurnace|PQ|0": { add: "Loading/retrieving crucibles near 500-1000 °C - high-temp PPE, face protection, and tongs; never reach into a hot chamber.", tags: ["thermal_hot"] },
  "depyrooven|PQ|1": { add: "Loaded penetration runs at ~250 °C with probe feed-throughs - burn risk on loads and leads; allow cooldown before contact.", tags: ["thermal_hot"] },
  // Reactor: intrusive work on chemical pressure vessels
  "reactor|OQ|2": { add: "Pressure/vacuum and charge-rate testing involves stored energy and reactive charges - confirm relief and interlocks first; purge/clean and LOTO before any intrusive work.", tags: ["pressure", "chemical"] },
  "reactor|OQ|3": { add: "Challenging over-pressure/over-temp relief and interlocks must follow a controlled procedure - never physically defeat a safety device on a live chemical vessel.", tags: ["pressure", "chemical"] },
  // Centrifuge: speed and imbalance/interlock tests are the rotating hazard
  "centrifuge|OQ|0": { add: "Speed verification runs the rotor at full RPM - confirm lid-interlock and rotor condition first; never open during run-down; respect rotor speed/imbalance limits.", tags: ["rotating"] },
  "centrifuge|OQ|7": { add: "Challenging the lid-cannot-open-while-spinning interlock tests a guard that prevents serious injury - verify by procedure, never by defeating it on a spinning rotor.", tags: ["rotating"] },
  // Solid-dose: interlock/safety challenges on high-energy rotating equipment
  "granulator|OQ|4": { add: "Challenging the lid/guard interlock on a high-shear impeller tests a primary personnel guard - verify by procedure; never reach into the bowl or defeat the interlock while the impeller can run.", tags: ["rotating"] },
  "fbd|OQ|4": { add: "This verifies dust-explosion and electrostatic safety - fluidized fine powder is an ESD/dust-explosion hazard. Verify earthing continuity and the explosion vent by inspection/records, never by triggering them; confirm exhaust before any solvent granulation.", tags: ["chemical", "rotating"] },
  "blender|OQ|2": { add: "Challenging the guard/rotation interlock tests the primary guard against a rotating bin/shell - verify by procedure; never defeat it to reach a moving blender.", tags: ["rotating"] },
  "mill|OQ|2": { add: "Challenging the guard/overload interlock tests protection against a high-speed rotor - verify by procedure; respect run-down time and never reach into the mill.", tags: ["rotating"] },
  "tabletpress|OQ|3": { add: "Challenging guard/overload interlocks tests protection against the moving turret and full compression force (a jam can shatter tooling) - verify by procedure, never by defeating a guard.", tags: ["rotating"] },
  "coater|OQ|3": { add: "For solvent coating this challenges flammable-vapor/explosion and exhaust interlocks - confirm rated protection and exhaust; verify by records/inspection, no ignition sources.", tags: ["chemical", "rotating"] },
  // Lab equipment: rotor/vacuum/thermal safety challenges
  "centrifuge|OQ|3": { add: "Challenging imbalance detection and the start-inhibit lid interlock tests primary guards against an unbalanced rotor - use a controlled, modest imbalance and never force a grossly unsafe load.", tags: ["rotating"] },
  "lyophilizer|OQ|2": { add: "Leak/vacuum testing evacuates the chamber - confirm relief and venting function first and stand clear of viewports; never release vacuum in an unsafe way.", tags: ["pressure"] },
  "lyophilizer|OQ|4": { add: "Challenging vacuum-loss, over-temperature, door, and SIP interlocks must follow a controlled procedure - never defeat a safety on a chamber under vacuum, pressure, or at SIP temperature.", tags: ["pressure"] },
  "lyophilizer|PQ|1": { add: "SIP mapping runs the chamber at >= 121 C under steam - scald/burn risk on the chamber, drain line, and probe feed-throughs; verify seal integrity and allow cooldown before access.", tags: ["pressure"] },
  "homogenizer|OQ|2": { add: "Challenging the probe guard / overload cutout tests protection against a high-speed rotor-stator probe - verify by procedure; keep clear of the probe and never defeat the guard.", tags: ["rotating"] },
  "hotplate|OQ|4": { add: "The over-temperature cutoff is a fire-safety control - a hot plate can ignite flammable solvents. Challenge it without flammables present; confirm the cutoff setpoint suits the intended media.", tags: ["thermal_hot"] },
  // Bioprocess: SIP/pressure and biohazard challenges
  "bioreactor|OQ|6": { add: "Challenging the over-pressure interlock and agitation-fault interlock must follow a controlled procedure - never defeat a safety on a vessel under sparge or pressure.", tags: ["pressure"] },
  "bioreactor|OQ|7": { add: "Vessel pressure/leak testing applies stored pressure - confirm relief and interlocks first and stand clear of the vessel/viewports; for single-use, do not over-pressurize the bag.", tags: ["pressure"] },
  "bioreactor|PQ|0": { add: "SIP runs the vessel and lines at >= 121 C under steam - scald/burn risk at the drain, sparger, ports, and probe feed-throughs; verify seal integrity and allow cooldown before access.", tags: ["pressure", "biohazard"] },
  "chromskid|OQ|3": { add: "Challenging the high-pressure (column-protection) interlock involves system pressure and process buffers (often caustic for sanitization) - confirm relief first; review SDS and wear appropriate PPE.", tags: ["chemical", "pressure"] },
  "tffskid|OQ|3": { add: "Challenging the high-pressure (membrane-protection) interlock involves system pressure and process buffers (often caustic for cleaning) - confirm relief first; review SDS and wear appropriate PPE.", tags: ["chemical", "pressure"] },
  // Sterile / liquid mfg
  "blisterline|OQ|0": { add: "Sealing tooling runs hot (heat-seal platens) - burn risk during setup, format changes, and forming/sealing verification; allow cooldown and use the guard. Keep clear of the moving forming/sealing station.", tags: ["thermal_hot", "rotating"] },
  "fillingline|OQ|3": { add: "Challenging barrier/airflow and access interlocks must not breach the aseptic critical zone - follow a controlled procedure; an open isolator/RABS door or out-of-spec differential during production is a sterility breach.", tags: ["biohazard"] },
  // Batch 13/14: process, utilities, sterile
  "reactor|PQ|0": { add: "Running the reaction at scale combines reactive chemistry, pressure/vacuum, and an exotherm - confirm relief and over-temp/over-pressure interlocks first; review the reaction hazard assessment and SDS; control the addition/charge rate to keep the exotherm in hand.", tags: ["chemical", "pressure", "thermal_hot"] },
  "jetmill|OQ|2": { add: "Fine powders plus high-velocity gas are a dust-explosion and containment risk - confirm earthing/grounding and explosion-protection are in place, and handle potent powders with the qualified containment/PPE.", tags: ["chemical"] },
  "spraydryer|OQ|2": { add: "Solvent-based feeds run a hot dryer with flammable vapor - the inert-loop O\u2082 control is a primary explosion safeguard; confirm O\u2082 monitoring/interlocks and over-temp protection before operation.", tags: ["thermal_hot", "chemical"] },
  "cipsip|PQ|1": { add: "SIP runs lines and vessels at sterilization temperature under steam - scald/burn risk at drains, valves, and ports; confirm condensate drainage and air removal, and allow cooldown before access.", tags: ["steam", "pressure"] },
  "puresteam|PQ|0": { add: "Collecting pure-steam condensate involves live steam and hot condensate - burn/scald risk; use the sample cooler and appropriate PPE, and confirm relief is functional.", tags: ["steam", "pressure"] },
  "isolator|PQ|0": { add: "VHP bio-decontamination fills the enclosure with hydrogen peroxide vapor (toxic, oxidizer) - do not breach the enclosure during the cycle; confirm aeration to the safe residual H\u2082O\u2082 limit (often < 1 ppm) before any access.", tags: ["vhp"] },
  "isolator|PQ|1": { add: "Confirm aeration has brought residual H\u2082O\u2082 to the safe occupational/working limit before product or personnel exposure - residual peroxide is both a personnel hazard and a product risk.", tags: ["vhp"] }
};

const EXAMPLES = {

  urs: {
    label: "What a URS extract looks like",
    docTitle: "URS-EQ-014 - Stability Chamber",
    meta: [["Doc No", "URS-EQ-014"], ["Rev", "02"], ["Owner", "Validation"], ["Status", "Approved"]],
    blocks: [
      { h: "Scope", text: "A walk-in stability chamber to hold ICH long-term condition 25 \u00b0C / 60 % RH for finished-product stability studies." },
      { h: "Requirements (extract)", cols: ["#", "Requirement", "Crit?"],
        rows: [
          ["3.1", "Maintain 25 \u00b0C \u00b1 2 \u00b0C across the loaded working volume", "Critical"],
          ["3.2", "Maintain 60 % RH \u00b1 5 % across the loaded working volume", "Critical"],
          ["3.4", "Provide \u2265 15 ports for mapping sensors", "Non-crit"],
          ["4.2", "Audit trail, unique logins, e-signatures (21 CFR Part 11)", "Critical"],
          ["5.1", "Door-open and power-loss alarms, local + to BMS", "Critical"]
        ] },
      { h: "Note", text: "Each line is numbered so it can be carried into a traceability matrix and verified by DQ/IQ/OQ/PQ. Requirements state the need, not the design." }
    ]
  },

  fs: {
    label: "What an FS extract looks like",
    docTitle: "FS-EQ-014 - Stability Chamber (Functional Specification)",
    meta: [["Doc No", "FS-EQ-014"], ["Rev", "01"], ["Traces to", "URS-EQ-014"]],
    blocks: [
      { h: "Function (extract)", cols: ["FS #", "Function", "Meets URS #"],
        rows: [
          ["F-1", "PID loop controls temperature to setpoint \u00b1 0.5 \u00b0C; recovers within 30 min after door-open", "3.1"],
          ["F-2", "Humidity control via steam-injection + condenser to setpoint \u00b1 3 %", "3.2"],
          ["F-5", "High/low temp, high/low RH, door, and power alarms with configurable thresholds", "5.1"],
          ["F-8", "User roles (operator/supervisor/admin); all changes audit-trailed", "4.2"]
        ] },
      { h: "Note", text: "The FS says HOW the system will meet each user requirement \u2014 verified later by OQ. It describes function, not physical build (that's the DS)." }
    ]
  },

  ds: {
    label: "What a DS extract looks like",
    docTitle: "DS-EQ-014 - Stability Chamber (Design Specification)",
    meta: [["Doc No", "DS-EQ-014"], ["Rev", "01"], ["Traces to", "FS-EQ-014"]],
    blocks: [
      { h: "Design detail (extract)", cols: ["DS #", "Element", "Meets FS #"],
        rows: [
          ["D-1", "Controller: Allen-Bradley PLC, control narrative CN-114; RTD sensors (4-wire)", "F-1"],
          ["D-2", "316L interior; steam generator model SG-2; condenser coil", "F-2"],
          ["D-4", "Recorder: validated electronic system, audit trail, daily backup", "F-8"],
          ["D-6", "Alarm relays wired to BMS via Modbus; UPS on controller", "F-5"]
        ] },
      { h: "Note", text: "The DS says HOW it is built/configured \u2014 verified by IQ. DQ reviews this design against the URS before build." }
    ]
  },

  risk: {
    label: "What an FMEA row looks like",
    docTitle: "Risk Assessment - Stability Chamber (FMEA extract)",
    meta: [["Tool", "FMEA"], ["Scale", "S\u00d7P\u00d7D"], ["Ref", "ICH Q9(R1)"]],
    blocks: [
      { h: "FMEA (extract)", cols: ["Failure mode", "Effect", "S", "P", "D", "RPN", "Action"],
        rows: [
          ["Temp drifts high", "Product degrades", "5", "2", "2", "20", "Qualify control loop + high alarm (CDE)"],
          ["RH sensor fails", "Wrong condition, undetected", "4", "2", "4", "32", "Add cross-check; tighten cal interval"],
          ["Power loss", "Excursion", "5", "3", "1", "15", "UPS + alarm to BMS; map recovery"]
        ] },
      { h: "Note", text: "Higher RPN drives more rigour. The control loop and alarms become Critical Design Elements \u2014 formally qualified; lower-risk items can lean on commissioning." }
    ]
  },

  bg5x: {
    label: "What a C&Q plan extract looks like",
    docTitle: "C&Q Plan - Stability Chamber SC-01 (extract)",
    meta: [["Classification", "Direct-impact"], ["Approach", "Integrated (BG5)"]],
    blocks: [
      { h: "Verification strategy (extract)", cols: ["Requirement", "CDE?", "Verified by"],
        rows: [
          ["Temp control 25 \u00b1 2 \u00b0C", "Yes", "Formal OQ (qualification)"],
          ["High-temp alarm to BMS", "Yes", "Formal OQ (qualification)"],
          ["Frame levelling / clearances", "No", "Commissioning (leveraged)"],
          ["Factory wiring continuity", "No", "Vendor FAT (leveraged, GEP-grade)"]
        ] },
      { h: "Note", text: "Same candidate test menu; CDEs get formal qualification, the rest is covered by GEP-grade commissioning / vendor evidence. The leverage decision is documented and QA-assessed." }
    ]
  },

  pv: {
    label: "What a validation summary looks like",
    docTitle: "PPQ Summary - Product B Tablet, Line 3 (extract)",
    meta: [["Stage", "2 \u2014 Process Qualification"], ["Batches", "3 consecutive"]],
    blocks: [
      { h: "PPQ result summary (extract)", cols: ["CQA", "Limit", "B1", "B2", "B3", "Result"],
        rows: [
          ["Assay", "95\u2013105 %", "99.2", "100.1", "98.8", "Pass"],
          ["Content unif. (AV)", "\u2264 15", "4.1", "3.8", "5.0", "Pass"],
          ["Dissolution (Q)", "\u2265 80 % @30min", "94 %", "92 %", "95 %", "Pass"]
        ] },
      { h: "Note", text: "Equipment IQ/OQ/PQ (Stage 2) underpins this. Stage 3 continued process verification then monitors these CQAs in routine production." }
    ]
  },

  cleaning: {
    label: "What a MACO calculation looks like",
    docTitle: "Cleaning Validation - Product A \u2192 Product B (worked MACO)",
    meta: [["Basis", "HBEL / PDE"], ["Equipment", "Shared mixer M-02"]],
    blocks: [
      { h: "Inputs", list: [
        "PDE of Product A = 0.5 mg/day",
        "Batch size of next product B = 200,000 doses",
        "Max daily dose of B = 4 doses/day",
        "Shared equipment surface area = 50,000 cm\u00b2; swab area = 25 cm\u00b2"
      ] },
      { h: "MACO", text: "MACO = (PDE\u00d7batch) / maxdailydose = (0.5 \u00d7 200,000) / 4 = 25,000 mg total carryover allowed." },
      { h: "Swab limit", text: "Per area: 25,000 mg / 50,000 cm\u00b2 = 0.5 mg/cm\u00b2 \u2192 \u00d7 25 cm\u00b2 swab = 12.5 mg/swab. Correct for recovery (e.g. \u00f70.85 if 85 %)." },
      { h: "Note", text: "Numbers are illustrative. The limit traces from toxicology (PDE) to an actionable swab limit \u2014 every factor justified, not inherited." }
    ]
  },

  protocol: {
    label: "What a protocol test step looks like",
    docTitle: "OQ-EQ-022 - Test 4: Alarm Verification (extract)",
    meta: [["Doc No", "OQ-EQ-022"], ["Pre-approved", "Yes \u2014 before execution"]],
    blocks: [
      { h: "Test 4 \u2014 High-temperature alarm", text: "Objective: confirm the high-temp alarm activates at its setpoint and annunciates locally and to BMS." },
      { h: "Method", list: [
        "With chamber at setpoint, raise the alarm setpoint test value per SOP-114.",
        "Record the temperature at which the alarm activates.",
        "Confirm local annunciation and BMS receipt."
      ] },
      { h: "Acceptance (pre-defined)", text: "Alarm activates at 28 \u00b0C \u00b1 0.5 \u00b0C; local + BMS annunciation observed." },
      { h: "Recorded result", cols: ["Activation", "Local", "BMS", "Pass/Fail"], rows: [["28.1 \u00b0C", "Yes", "Yes", "Pass"]] },
      { h: "Note", text: "Acceptance is written and approved BEFORE execution. Changing it to match a result is testing-into-compliance \u2014 a data-integrity failure." }
    ]
  },

  change: {
    label: "What a change request looks like",
    docTitle: "CC-2026-0412 - Replace chamber controller",
    meta: [["Type", "Major"], ["Status", "Approved \u2014 pre-implementation"]],
    blocks: [
      { h: "Change", text: "Replace the SC-01 PLC controller with a newer model (obsolescence). Affects control logic and the recorder interface." },
      { h: "Impact assessment (extract)", cols: ["Area", "Impacted?", "Action"],
        rows: [
          ["Control of CQAs (temp/RH)", "Yes (CDE)", "Re-OQ control + alarms"],
          ["Data integrity / Part 11", "Yes", "Re-verify audit trail, access"],
          ["Physical install", "No", "IQ delta only"],
          ["Regulatory filing", "No", "\u2014"]
        ] },
      { h: "Actions before close", list: ["Re-OQ (control + alarms)", "Update DS-EQ-014", "Retrain operators", "QA effectiveness check"] },
      { h: "Note", text: "Assessed and approved BEFORE the change. Re-qualification scope is risk-based, driven by the impact on Critical Design Elements." }
    ]
  },

  capa: {
    label: "What a deviation / CAPA record looks like",
    docTitle: "DEV-2026-0188 \u2192 CAPA-2026-0091",
    meta: [["Classification", "Major"], ["Status", "Closed \u2014 effectiveness verified"]],
    blocks: [
      { h: "Deviation", text: "Stability chamber RH read 52 % (limit 60 \u00b1 5 %) for 3 h overnight; high-RH path investigated." },
      { h: "Root cause (5-Why, abridged)", list: [
        "RH low \u2192 steam generator under-delivered \u2192 feedwater valve partially clogged \u2192 no PM on that valve \u2192 PM schedule omitted it.",
        "Root cause: PM program gap, not operator error."
      ] },
      { h: "Actions", cols: ["Type", "Action"],
        rows: [
          ["Correction", "Clean valve; re-map affected period; impact-assess product"],
          ["Corrective", "Add feedwater valve to PM schedule with interval"],
          ["Preventive", "Review PM coverage across all chambers for similar gaps"]
        ] },
      { h: "Note", text: "Correction fixes the instance; corrective fixes the root cause; preventive stops it elsewhere. Effectiveness checked before closure." }
    ]
  },

  di: {
    label: "What an audit-trail entry looks like",
    docTitle: "Audit Trail - Stability data system (extract)",
    meta: [["System", "Validated, Part 11"], ["Principle", "ALCOA+"]],
    blocks: [
      { h: "Audit trail (extract)", cols: ["Timestamp", "User", "Action", "Old\u2192New", "Reason"],
        rows: [
          ["12-Jun 14:02", "kparker", "Result entered", "\u2014 \u2192 25.3 \u00b0C", "Routine"],
          ["12-Jun 14:40", "kparker", "Value corrected", "25.3 \u2192 25.8 \u00b0C", "Transcription error"],
          ["12-Jun 15:10", "jlee (QA)", "Reviewed/approved", "\u2014", "Batch review"]
        ] },
      { h: "Note", text: "Attributable (who), contemporaneous (when), original preserved (old\u2192new visible), with a reason for change \u2014 ALCOA+ in practice. The original value is never overwritten or hidden." }
    ]
  },

  gamp: {
    label: "What a CSV category decision looks like",
    docTitle: "System Inventory & GAMP Category (extract)",
    meta: [["Ref", "GAMP 5 (2nd ed)"], ["Drives", "Validation effort"]],
    blocks: [
      { h: "Inventory (extract)", cols: ["System", "GAMP cat", "Approach"],
        rows: [
          ["Chamber data recorder (standard, configured)", "4", "Verify configuration; leverage supplier"],
          ["Lab balance firmware (off-the-shelf)", "3", "Light validation; supplier evidence"],
          ["Bespoke MES interface", "5", "Design + code review, full FAT/SAT"],
          ["Windows Server / SQL", "1", "Qualify platform; validate indirectly"]
        ] },
      { h: "Note", text: "Category plus a risk assessment sets how much of the V you execute. Higher category = more rigour; standard products lean on supplier documentation." }
    ]
  }

};

const CA_NOTES = {
  storage: "Critical-aspect candidates usually center on whatever directly holds product in range: the temperature-control and monitoring loop, alarm/backup on power or cooling loss, and the qualified mapping at worst-case positions. Door, load, and access controls matter where they move the profile. Your risk assessment decides the final set.",
  sterilization: "The lethality-delivering functions are the usual critical-aspect candidates: the temperature/pressure (or dose/concentration) control and recording loop, cycle-parameter control, and the load/biological-challenge results that prove the SAL. Air removal and integrity functions follow. Confirm against your own classification.",
  thermalproc: "Critical-aspect candidates tend to be the functions controlling the product-affecting thermal parameter (setpoint control, uniformity, the recording loop) and any interlock protecting product or operator. Supporting utilities are often commissioning-level. Your risk assessment governs.",
  analytical: "For analytical instruments, critical-aspect candidates are the functions affecting data quality and the reportable result: detection/measurement accuracy, calibration traceability, system suitability, and the data-integrity / audit-trail controls (USP <1058> AIQ groups frame the rigor). Site intended use decides.",
  labequip: "Critical-aspect candidates are usually the parameters that influence a product or result the equipment acts on (e.g. control accuracy, uniformity, timing) plus calibration traceability. Many supporting features can sit at commissioning level. Confirm with your risk assessment.",
  manufacturing: "Product-contact process equipment tends to make its product-quality-affecting process parameters (CPPs) and product-contact integrity the critical-aspect candidates: the control loops for those parameters, material-of-construction/sanitary integrity, and CIP/SIP effectiveness. Your CA/CDE analysis is decisive.",
  computerised: "For computerised systems, critical-aspect candidates follow GAMP category and risk: the functions and configuration that affect product quality or GxP records, plus the Part 11 / data-integrity controls (audit trail, access, e-signature, backup). Supplier-tested standard function may be leveraged. See the GAMP 5 page.",
  cleanutility: "Contamination-control utilities/areas tend to make the parameters that protect product from contamination the critical-aspect candidates: the control and monitoring of the quality attribute delivered (air classification, water quality, pressure cascade) and the alarms on excursion. Your contamination-control strategy and risk assessment govern.",
  inspection: "For inspection/detection equipment, critical-aspect candidates are the functions delivering the detection capability that protects the patient: detection sensitivity/accuracy at the defined limit, challenge/reject performance, and the data record. Confirm scope against your risk assessment.",
  coldchain: "Cold-chain/distribution critical-aspect candidates usually involve maintaining and proving the temperature the product requires in transit: the control/monitoring of the qualified profile, excursion alarms, and mapping under worst-case load and ambient. Your risk assessment decides the final set.",
  pat: "For PAT systems, critical-aspect candidates are the functions whose output drives a product-quality decision: model/measurement accuracy against the reference method, the control action it informs, and the data-integrity controls around it. Because PAT can directly gate quality, treat these with care and confirm via risk assessment."
};

const ACRONYMS = {
  // --- Core lifecycle / qualification ---
  IQ: "Installation Qualification",
  OQ: "Operational Qualification",
  PQ: "Performance Qualification",
  DQ: "Design Qualification",
  URS: "User Requirements Specification",
  FS: "Functional Specification",
  PVT: "Performance Verification Test",
  PM: "Preventive Maintenance",
  SOP: "Standard Operating Procedure",
  CAPA: "Corrective and Preventive Action",
  CSV: "Computer System Validation",
  PO: "Purchase Order",
  BOM: "Bill of Materials",

  // --- Regulatory / standards bodies & documents ---
  GMP: "Good Manufacturing Practice",
  GDP: "Good Distribution Practice (also Good Documentation Practice in some contexts)",
  USP: "United States Pharmacopeia",
  ICH: "International Council for Harmonisation",
  ISO: "International Organization for Standardization",
  ISPE: "International Society for Pharmaceutical Engineering",
  ASME: "American Society of Mechanical Engineers",
  BPE: "Bioprocessing Equipment (ASME BPE sanitary-design standard)",
  ASTM: "American Society for Testing and Materials",
  NIST: "National Institute of Standards and Technology",
  NSF: "NSF International (public-health standards body)",
  ANSI: "American National Standards Institute",
  EN: "European Norm (EU harmonized standard)",
  EU: "European Union",
  PDA: "Parenteral Drug Association",
  GAMP: "Good Automated Manufacturing Practice",
  ALCOA: "Attributable, Legible, Contemporaneous, Original, Accurate (data-integrity principles)",
  AIQ: "Analytical Instrument Qualification",
  AQL: "Acceptance Quality Limit",
  CCS: "Contamination Control Strategy",
  PIC: "Pharmaceutical Inspection Co-operation Scheme (PIC/S)",

  // --- Process / utility systems ---
  CIP: "Clean-In-Place",
  SIP: "Steam-In-Place (Sterilization-In-Place)",
  WFI: "Water For Injection",
  PW: "Purified Water",
  RO: "Reverse Osmosis",
  EDI: "Electrodeionization",
  UF: "Ultrafiltration",
  TFF: "Tangential Flow Filtration",
  HVAC: "Heating, Ventilation, and Air Conditioning",
  HEPA: "High-Efficiency Particulate Air (filter)",
  LAF: "Laminar Air Flow",
  RABS: "Restricted Access Barrier System",
  TOC: "Total Organic Carbon",
  DP: "Differential Pressure",
  RH: "Relative Humidity",
  DO: "Dissolved Oxygen",
  ORP: "Oxidation-Reduction Potential",
  ATC: "Automatic Temperature Compensation",
  RPM: "Revolutions Per Minute",
  RCF: "Relative Centrifugal Force (g-force)",
  TMP: "Transmembrane Pressure",
  NWP: "Normalized Water Permeability",
  LRV: "Log Reduction Value",
  EM: "Environmental Monitoring",
  EMS: "Environmental Monitoring System",
  BMS: "Building Management System",
  CCIT: "Container Closure Integrity Testing",
  HVLD: "High-Voltage Leak Detection",
  PUPSIT: "Pre-Use Post-Sterilization Integrity Test",
  PSL: "Polystyrene Latex (reference spheres for particle counters)",
  SAL: "Sterility Assurance Level",
  BI: "Biological Indicator",
  CI: "Chemical Indicator",
  VHP: "Vaporized Hydrogen Peroxide",
  EtO: "Ethylene Oxide",
  ECH: "Ethylene Chlorohydrin (EtO residual)",
  ULT: "Ultra-Low Temperature",
  TCU: "Temperature Control Unit",
  IBC: "Intermediate Bulk Container",
  PPE: "Personal Protective Equipment",
  CM: "Capacitance Manometer",
  LOD: "Loss On Drying (also Limit Of Detection in analytical context)",
  PSD: "Particle Size Distribution",
  ASD: "Amorphous Solid Dispersion",

  // --- Automation / computerised / data ---
  PLC: "Programmable Logic Controller",
  HMI: "Human-Machine Interface",
  SCADA: "Supervisory Control And Data Acquisition",
  DCS: "Distributed Control System",
  PID: "Proportional-Integral-Derivative (control loop)",
  CPU: "Central Processing Unit",
  MES: "Manufacturing Execution System",
  EBR: "Electronic Batch Record",
  LIMS: "Laboratory Information Management System",
  CDS: "Chromatography Data System",
  ERP: "Enterprise Resource Planning",
  PAT: "Process Analytical Technology",
  PVT_dup: "",  // placeholder guard (removed below) - keep object valid

  // --- Analytical instrumentation ---
  HPLC: "High-Performance Liquid Chromatography",
  UHPLC: "Ultra-High-Performance Liquid Chromatography",
  GC: "Gas Chromatography",
  MS: "Mass Spectrometry",
  ICP: "Inductively Coupled Plasma",
  OES: "Optical Emission Spectrometry",
  FID: "Flame Ionization Detector",
  TCD: "Thermal Conductivity Detector",
  ECD: "Electron Capture Detector",
  DAD: "Diode Array Detector",
  UV: "Ultraviolet",
  NIR: "Near-Infrared",
  FTIR: "Fourier-Transform Infrared",
  ATR: "Attenuated Total Reflectance",
  IEX: "Ion-Exchange (chromatography)",
  HIC: "Hydrophobic Interaction Chromatography",
  SEC: "Size-Exclusion Chromatography",
  HETP: "Height Equivalent to a Theoretical Plate (column efficiency)",
  DF: "Diafiltration",
  QC: "Quality Control",

  // --- Materials ---
  SS316L: "316L Stainless Steel (low-carbon, pharma-grade)",

  // --- Geometry / drawings ---
  GA: "General Arrangement (drawing)",
  SD: "Standard Deviation"
};

const REFMAPS = {
  reachin: {
    label: 'Reach-in CTU \u2014 logger placement',
    baseNote: 'Minimum 9 loggers: one at each of the 8 corners + 1 geometric centre, plus one beside the control/monitoring probe. Larger or multi-door units add middle-shelf loggers. Use 3-point NIST-traceable loggers, calibrated before AND after the study (to bracket drift).',
    configs: [
      { key: 'single', label: 'Single door', note: 'Single-door reach-in: the classic 9 = 8 corners + centre, plus a logger beside the control/monitoring probe (10). 3x3 grid is the small-chamber norm.' },
      { key: 'double', label: 'Double door', note: 'Double-door (wider): keep 8 corners + centre, then add middle-shelf loggers across the extra width so the centre of each door zone is covered.' },
      { key: 'triple', label: 'Triple door', note: 'Triple-door (widest): 8 corners + centre plus middle-shelf loggers spaced across all three zones; consider a 4x4 / 27-point pattern by volume and risk.' },
      { key: 'under', label: 'Under-counter', note: 'Under-counter (squat): still 8 corners + centre (9) plus the control-probe logger, but the short height makes top/bottom stratification the main thing to catch.' }
    ]
  },
  walkin: {
    label: 'Walk-in / warehouse \u2014 logger placement',
    baseNote: 'Place high AND low loggers at each corner + one in the centre (basic 9), then add by risk: near the door, near the evaporator/coils and HVAC returns, against external walls, and at the highest/lowest storage levels. WHO: ~5\u201310 m grid for large areas; map low/mid/high vertically.',
    configs: [
      { key: 'coldroom', label: 'Cold room', note: 'Cold room: high+low at each corner + centre, plus loggers near the door, near the evaporator/coil, and at the worst-case rack levels. 24\u201372 h, through a defrost cycle and a door-open event.' },
      { key: 'warehouse', label: 'Warehouse', note: 'Warehouse/CRT: 3-D grid (~5\u201310 m spacing), low/mid/high at each position; bias to external walls, dock doors, HVAC diffusers/returns, and the highest racks. >= 7 consecutive days incl. a weekend, mapped in summer AND winter; MKT where excursions are allowed.' }
    ]
  },
  oven: {
    label: 'Oven / furnace \u2014 sensor placement',
    baseNote: 'Distribute TCs across the working shelf levels: corners + centre of each shelf, plus near the door and near the heating element / fan. Penetration TCs go in/with the load at the slowest-to-heat positions. Identify the cold spot here for PQ TC/BI or load placement.',
    configs: [
      { key: 'shelf', label: 'Shelf oven', note: 'Shelf oven/furnace: TCs at the corners + centre of the top, middle, and bottom working shelves, plus one near the door and one near the heating element/fan. The dashed lines are the shelves.' }
    ]
  },
  plane: {
    label: 'Sample-plane grid',
    baseNote: 'Grid the working sample plane (3x3 or 5-point) to map uniformity across the area; bias points to the corners, the centre, and any edge-of-field positions. For photostability, map both visible (lux) and near-UV (W/m2).',
    configs: [ { key: 'grid', label: 'Sample plane', note: 'Sample-plane 3x3 grid: nine points across the working area capture corner-to-centre uniformity; add edge points if the field falls off near the walls.' } ]
  }
};
