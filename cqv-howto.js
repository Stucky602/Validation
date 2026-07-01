/* cqv-howto.js  (auto-split from index.html)  93 consts */
const HOWTO_autoclave = {
  // ---------- IQ ----------
  "IQ:0": {
    title: "Verify received unit against PO / URS",
    steps: [
      "Retrieve the approved purchase order and URS for the sterilizer.",
      "Record the nameplate make, model, and serial number from the installed unit.",
      "Measure or confirm chamber internal dimensions and rated capacity (L) against the spec.",
      "Reconcile each attribute line-by-line; raise a deviation for any mismatch and resolve before proceeding."
    ],
    accept: ["All identification and capacity attributes match the PO/URS.","Deviations closed."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "IQ:1": {
    title: "Confirm as-built drawings match installation",
    steps: [
      "Collect the current P&ID, general-arrangement, and electrical schematic drawings.",
      "Walk the installed unit and verify piping runs, valves, and electrical terminations against each drawing.",
      "Redline any field difference and route back to engineering for drawing update.",
      "File the approved as-built set in the validation package."
    ],
    accept: "As-built drawings present, controlled, and matching the installed configuration.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "IQ:2": {
    title: "Verify utility connections against URS",
    steps: [
      "List each required utility from the URS: clean/pure steam, feed water, cooling water, drains, electrical, compressed air.",
      "Confirm each connection is present, correctly sized, and labeled.",
      "Record supplied values (steam pressure, supply voltage/phase, air pressure) and compare to the URS range.",
      "Verify drains are open, trapped, and routed to a suitable discharge."
    ],
    materials: ["Calibrated pressure gauge", "Multimeter / phase rotation meter"],
    accept: "Every utility present and within the URS-specified range.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "IQ:3": {
    title: "Confirm major components installed and identified",
    steps: [
      "Inventory chamber, jacket, door(s), door interlock, gaskets, gauges, valves, and the printer/recorder.",
      "Confirm each component is the specified part number and is tagged/identified.",
      "Verify gaskets are seated and undamaged and gauges read on installation.",
      "Photograph the installed arrangement for the record."
    ],
    accept: "All listed components installed, identified, and matching spec.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "IQ:4": {
    title: "Verify materials of construction",
    steps: [
      "Identify chamber and product-contact components from the design spec (typically SS316L for product contact).",
      "Obtain material certificates (mill certs / 3.1 certs) for those components.",
      "Confirm certificate alloy and finish match the specification.",
      "File certificates in the IQ package."
    ],
    accept: ["Materials of construction match spec.","Certificates on file where required."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "EU Annex 15 (IQ)"
  },
  "IQ:5": {
    title: "Confirm process sensors and reference standard calibrated",
    steps: [
      "List every process thermocouple/RTD and the chamber pressure transmitter.",
      "Verify each carries a current calibration certificate traceable to national standards (ISO/IEC 17025 lab).",
      "Confirm the independent reference standard used for validation is calibrated and within its due date.",
      "Record cal ID, range, and due date for each."
    ],
    materials: ["Calibration certificates (17025-accredited)"],
    accept: "All process instruments and the reference standard calibrated, traceable, and in-date.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "IQ:6": {
    title: "Build the instrument / loop inventory",
    steps: [
      "Walk down every controlling and recording instrument on the unit.",
      "For each, capture tag, function (control vs record), range, cal ID, and calibration due date.",
      "Note the associated control loop for each sensor.",
      "Compile into the master instrument list in the qualification package."
    ],
    accept: "Complete inventory of all controlling/recording instruments with cal data."
  },
  "IQ:7": {
    title: "Capture control/recorder software config for CSV",
    steps: [
      "Record the controller and recorder software/firmware version.",
      "Export or screenshot the configuration and cycle parameter set.",
      "For GxP systems, confirm the audit-trail setting is enabled and capture the access/security configuration.",
      "Attach the captured configuration to the CSV record."
    ],
    accept: "Software version, configuration, and audit-trail state documented for CSV.",
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-11_annex11_en_0.pdf", linkLabel: "EU Annex 11"
  },
  "IQ:8": {
    title: "Confirm filters, traps, and drain installed and drainable",
    steps: [
      "Locate air and steam filters and confirm part numbers against spec.",
      "Confirm steam traps are installed at the correct points and oriented for flow.",
      "Verify the chamber drain is installed, unobstructed, and self-draining (no low-point pooling).",
      "Record filter ratings and trap types."
    ],
    accept: "Filters, traps, and drain installed per design and chamber drains freely."
  },
  "IQ:9": {
    title: "Verify safety features present and rated",
    steps: [
      "Confirm pressure relief valve(s) are installed with a rating/certification matching the design pressure.",
      "Verify the door-open-under-pressure interlock hardware is present.",
      "Confirm the emergency stop is installed and wired.",
      "Record relief valve set pressure and certification reference. (Functional challenge occurs in OQ.)"
    ],
    accept: "Relief valve(s), door interlock, and E-stop installed and correctly rated.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "IQ:10": {
    title: "Confirm chamber-contacting fluids/materials compatible",
    steps: [
      "List lubricants, gasket materials, and any fluids that contact the chamber or product zone.",
      "Confirm each is rated for the temperature/steam environment and is the specified grade.",
      "Collect compatibility/data-sheet documentation.",
      "File documentation in the IQ package."
    ],
    accept: "All chamber-contacting materials documented as compatible."
  },
  "IQ:11": {
    title: "Confirm vendor documentation package received",
    steps: [
      "Verify the spare-parts list, maintenance/O&M manual, and full vendor turnover package were received.",
      "Confirm completeness against the PO documentation deliverables.",
      "Log and index each document.",
      "File in the controlled validation library."
    ],
    accept: "Spare-parts list, manuals, and vendor docs received and filed."
  },

  // ---------- OQ ----------
  "OQ:0": {
    title: "Calibration verification before functional testing",
    steps: [
      "Confirm all critical control and recording instruments hold current calibration.",
      "Verify the independent validation sensors are calibrated against the traceable reference immediately before the study.",
      "Document a pre-study and (after testing) a post-study calibration check on validation thermocouples.",
      "Proceed only if all instruments are within tolerance."
    ],
    accept: ["All critical instruments in tolerance pre-study.","Post-study check confirms no drift."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "OQ:1": {
    title: "Verify control-system functions",
    steps: [
      "Exercise setpoint entry, cycle selection, and phase sequencing for each programmed cycle.",
      "Confirm the unit moves through purge/charge, exposure, exhaust, and drying phases in the correct order.",
      "Test each security/access level: confirm operator, supervisor, and maintenance privileges behave as defined.",
      "Verify shared logins are not permitted and that parameter changes require the correct access level."
    ],
    accept: "All control functions and access levels behave per specification.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "OQ:2": {
    title: "Steam quality test (NCG, dryness, superheat) per EN 285",
    steps: [
      "Connect the steam-quality test rig to the sampling point closest to the chamber.",
      "Non-condensable gases: cool a steam sample and collect released gas in a burette; calculate gas volume as % of condensate volume.",
      "Dryness: feed steam into an insulated Dewar holding a known mass/temperature of water; use the weight gain with steam tables to compute dryness fraction.",
      "Superheat: discharge steam in free expansion to ambient and record the maximum jet temperature; superheat = measured minus saturation temperature.",
      "Confirm the steam header temperature is within 3°C of the superheat-test temperature."
    ],
    materials: ["EN 285 steam-quality test kit (Dewar/dryness kit, NCG burette set)", "Calibrated temperature probe"],
    accept: "NCG ≤ 3.5% v/v · Dryness ≥ 0.95 (production) / ≥ 0.90 (lab) · Superheat ≤ 25°C above saturation.",
    link: "https://www.ispeboston.org/steam-quality-testing-introduction-best-practices/", linkLabel: "ISPE Boston - Steam Quality Testing"
  },
  "OQ:3": {
    title: "Chamber leak rate / vacuum hold test",
    steps: [
      "Run the unit's vacuum/leak-test cycle to evacuate the empty chamber.",
      "Hold the vacuum for the defined dwell and record the pressure-rise rate.",
      "Confirm the rise rate is within the manufacturer limit (commonly ≤1.3 mbar/min).",
      "If failed, inspect door seals, valves, and piping for leaks, correct, and repeat."
    ],
    accept: "Pressure rise ≤ 1.3 mbar/min (or manufacturer spec).",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "OQ:4": {
    title: "Bowie-Dick air-removal test (pre-vacuum units)",
    steps: [
      "Place a standardized Bowie-Dick test pack flat in the chamber center, just above the drain, in an otherwise empty chamber.",
      "Run a 134°C exposure for 3.5 minutes.",
      "Recover the indicator sheet and inspect for uniform color change.",
      "Repeat for three consecutive successful runs during OQ; streaking or pale areas = fail (air pocket / leak / NCG)."
    ],
    materials: ["Bowie-Dick standardized test pack with chemical indicator"],
    accept: ["Uniform color change, no pale areas/streaks.","3 consecutive passes."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "OQ:5": {
    title: "Empty-chamber heat distribution study",
    steps: [
      "Distribute calibrated thermocouples through the empty chamber (chamber center, four corners, near door, near drain, near steam inlet).",
      "Use ≥5 sensors for chambers up to 800 L (add one adjacent to the control sensor); 11+ per EN 285 for larger chambers.",
      "Run three consecutive cycles at the sterilization setpoint defined by the qualified cycle (commonly 121 °C or 134 °C, but set by the product/process cycle design - do not assume).",
      "Plot each sensor; identify the cold spot for PQ probe placement."
    ],
    materials: ["Calibrated thermocouple array + data logger"],
    accept: ["All sensors hold within the protocol's defined band of the mean during exposure across 3 consecutive cycles (±2–3 °C is a common example; confirm per protocol)","Cold spot identified."],
    link: "https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs961-annex9-supp8.pdf", linkLabel: "WHO TRS 961 Supp 8 - temperature mapping"
  },
  "OQ:6": {
    title: "Verify equilibration time",
    steps: [
      "From the distribution-study data, mark the moment the chamber reaches the sterilization setpoint signal.",
      "Identify the time for the slowest sensor to enter the sterilization band.",
      "Record this equilibration time for each run.",
      "Confirm it is within the protocol limit and repeatable across runs."
    ],
    accept: "Equilibration time within protocol limit and consistent across cycles."
  },
  "OQ:7": {
    title: "Verify pressure/temperature tracks saturated steam",
    steps: [
      "Overlay logged chamber temperature and pressure across the cycle.",
      "At hold, compare measured pressure to the saturated-steam value for the measured temperature (e.g. ~1.0 bar g at 121°C, ~2.0 bar g at 134°C).",
      "Confirm the pair tracks the saturation curve throughout exposure.",
      "Investigate any divergence as a non-condensable-gas or superheat indicator."
    ],
    accept: "Temperature/pressure follow saturated-steam relationship throughout the cycle."
  },
  "OQ:8": {
    title: "Alarm and interlock challenge",
    steps: [
      "Door interlock: attempt to start a cycle with the door open/unlatched and confirm the cycle cannot initiate; attempt to open the door under pressure and confirm it is prevented. On double-door units, confirm both doors cannot open simultaneously.",
      "Low-temperature: simulate failure to reach setpoint and confirm the low-temp alarm and/or cycle abort.",
      "Low-steam / low-water: provoke the condition and confirm the corresponding alarm.",
      "Cycle-abort / E-stop: trigger an abort and confirm the unit fails safe and logs the event. Document the method used to provoke each alarm; actual result must equal the expected result."
    ],
    accept: ["Each alarm/interlock activates and the unit responds as designed.","Events logged."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "OQ:9": {
    title: "Power-failure / recovery test",
    steps: [
      "Mid-cycle, remove power to the unit.",
      "Confirm the unit fails to a safe state (door remains locked while pressurized, no uncontrolled venting).",
      "Restore power and confirm the controller reports the correct cycle status on recovery (no false 'complete').",
      "Verify the event is captured in the cycle/alarm log."
    ],
    accept: ["Unit fails safe on power loss and reports correct status on recovery.","Event logged."]
  },
  "OQ:10": {
    title: "Verify record / printout captures critical parameters",
    steps: [
      "Run a cycle and capture the printout/electronic record.",
      "Confirm it records date, time, operator ID, cycle type, and the temperature/pressure/time profile.",
      "Compare recorded values to the independent reference readings for the same cycle.",
      "Confirm alarm events and deviations appear in the record."
    ],
    accept: "Record captures all critical parameters and matches controller/reference readings.",
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-11_annex11_en_0.pdf", linkLabel: "EU Annex 11 (records)"
  },

  // ---------- PQ ----------
  "PQ:0": {
    title: "Define and document each load pattern",
    steps: [
      "List every routine load to be qualified (item types, wrapping, orientation).",
      "Define the minimum and maximum load by mass/volume and the densest packing permitted.",
      "Justify worst-case loads using a bracketing rationale (most challenging = max mass/density, longest steam path, hollow/narrow items).",
      "Document and approve each load configuration before execution."
    ],
    accept: "Each load pattern (min/max, worst-case) defined, justified, and approved.",
    link: "https://www.iso.org/standard/74161.html", linkLabel: "ISO 17665 - moist-heat sterilization"
  },
  "PQ:1": {
    title: "Loaded heat-penetration study (F₀ at cold spot)",
    steps: [
      "Place 10–15 calibrated thermocouples through the load, concentrated at cold spots found in OQ, in intimate contact with the items (not just chamber air).",
      "Run three consecutive cycles per load pattern.",
      "Compute F₀ at each probe: F₀ = Σ 10^((T−121)/10) × Δt (Z = 10°C for G. stearothermophilus).",
      "Take the minimum-F₀ probe as the cold spot; confirm it meets the requirement."
    ],
    materials: ["Calibrated thermocouple array + F₀-capable logger"],
    accept: ["Cycle, setpoint, exposure time, and the F₀ target are product/process-defined (from the cycle design, bioburden, and load) - do not assume.","121/134 °C and F₀ ≥ 12 min overkill are common examples.","Cold-spot F₀ meets the protocol's defined requirement across 3 consecutive cycles."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "PQ:2": {
    title: "Confirm loaded-chamber temperature uniformity",
    steps: [
      "Using the heat-penetration data, calculate the maximum spread between sensors during the hold.",
      "Confirm all load sensors remain within the protocol band (commonly within the sterilization setpoint +3°C; dwell setpoint often −1/+2°C).",
      "Flag any sensor outside the band for investigation.",
      "Record the spread for each cycle."
    ],
    accept: "Max sensor spread within protocol limit during hold across all qualifying cycles."
  },
  "PQ:3": {
    title: "Biological indicator challenge",
    steps: [
      "Place G. stearothermophilus BIs (typically 10⁶ CFU) at the worst-case/cold-spot locations identified in heat penetration.",
      "Include positive controls (unexposed) and run three consecutive cycles.",
      "After each cycle, incubate exposed BIs and controls per manufacturer instructions (typically 7 days at 55–60°C) and read daily.",
      "Confirm no growth in any exposed BI and growth in every positive control."
    ],
    materials: ["G. stearothermophilus biological indicators (10⁶)", "Incubator 55–60°C"],
    accept: ["No growth in exposed BIs across 3 cycles.","Positive controls grow."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "PQ:4": {
    title: "Demonstrate reproducibility across consecutive runs",
    steps: [
      "Confirm the required number of consecutive successful runs (typically three) per qualified load.",
      "Verify each run independently meets all PQ acceptance criteria (F₀, uniformity, BI, dryness).",
      "Confirm no run required adjustment or re-run to pass.",
      "Summarize the run set in the PQ report."
    ],
    accept: "Required number of consecutive runs per load all pass without intervention.",
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "EU Annex 15 (PQ)"
  },
  "PQ:5": {
    title: "Confirm post-cycle load dryness (porous loads)",
    steps: [
      "Weigh representative porous items immediately before the cycle.",
      "Reweigh the same items immediately after the cycle and drying phase.",
      "Calculate percent moisture gain and inspect for visible wetness.",
      "Investigate wet packs (drying time, steam quality/NCG, wrapping, drainage) if criteria are not met."
    ],
    materials: ["Calibrated balance"],
    accept: "≤ 1–2% moisture gain and no visible wetness.",
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  }
};

const HOWTO_shared = {

  "cal-verify": {
    title: "Calibration verification before functional testing",
    steps: [
      "Confirm all critical control and recording instruments hold current, traceable calibration.",
      "Calibrate the independent mapping/validation sensors against the traceable reference immediately before the study.",
      "Record a pre-study calibration check; after the study, repeat the check to confirm no drift.",
      "Proceed only if every instrument is within tolerance."
    ],
    accept: ["All critical instruments in tolerance pre-study.","Post-study check confirms no drift."],
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "temp-map-empty": {
    title: "Empty-chamber temperature mapping",
    materials: ["Calibrated sensor array + data logger", "Placement diagram"],
    steps: [
      "Set the mapping setpoint to the unit's intended operating condition as defined by the client's process and/or the requirements of whatever will be stored or incubated (these vary widely, e.g. 37 °C for cell culture, 20–25 °C for other incubations, +2/+8 °C for cold storage).",
      "Design the sensor grid from chamber volume; small chambers commonly use a 9-point 3×3 grid (min 9 sensors), with one sensor adjacent to the control probe.",
      "Secure each sensor at its mapped position; record sensor IDs against the placement diagram.",
      "Log at a fixed interval for the defined duration (commonly ≥24 h for chambers).",
      "Analyze uniformity (spread between sensors) and stability (fluctuation at each point) against the URS limit; identify the cold/hot spots for PQ probe placement."
    ],
    accept: ["Setpoint and tolerance come from the URS / process / product manufacturer's requirement - do not assume.","All sensors stay within that defined band for the full duration.","Hot/cold spots identified.","(Common examples only: 37 ± 1 °C or ± 0.5 °C - confirm the real limit per process.)"],
    link: "https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs961-annex9-supp8.pdf", linkLabel: "WHO TRS 961 Supp 8 - temperature mapping"
  },

  "temp-map-loaded": {
    title: "Loaded-chamber mapping (performance)",
    materials: ["Calibrated sensor array + data logger", "Representative load / simulants"],
    steps: [
      "Load the chamber with representative product or thermal-mass simulants in the qualified pattern.",
      "Place sensors using the same grid as the empty study, concentrating on cold/hot spots found in OQ.",
      "Run over an extended period with routine door cycles (often ≥24 h, 7+ days for some applications).",
      "Confirm temperature stays within acceptance throughout, including during and after access events."
    ],
    accept: ["Setpoint and tolerance come from the URS / process / stored-product requirement - do not assume.","All locations stay within that defined band over the full loaded study including routine access."],
    link: "https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs961-annex9-supp8.pdf", linkLabel: "WHO TRS 961 Supp 8 - temperature mapping"
  },

  "door-open-recovery": {
    title: "Door-open recovery study",
    materials: ["Calibrated sensor array + timer"],
    steps: [
      "Stabilize the chamber at setpoint with sensors logging.",
      "Open the door for the defined interval (per URS/SOP), then close.",
      "Record the time for all monitored points to return to the setpoint band.",
      "Repeat to establish an average recovery time; confirm it is within the URS limit."
    ],
    accept: "Recovery to setpoint band within the URS-defined time.",
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "power-recovery": {
    title: "Power-failure / recovery study",
    materials: ["Calibrated sensor array + timer"],
    steps: [
      "Stabilize at setpoint with sensors logging.",
      "Simulate a power interruption and record temperatures until one point leaves the specified range.",
      "Restore power and confirm safe automatic restart and data continuity (no gap or false 'in-range').",
      "Record hold time before excursion and full-recovery time; confirm both meet limits."
    ],
    accept: ["Unit restarts safely, data continuous.","Hold and recovery times within limits."],
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "alarm-challenge-tcu": {
    title: "Alarm challenge (high/low temperature, door, power)",
    steps: [
      "Document the method used to provoke each alarm (it should simulate the real fault).",
      "High/low temperature: drive the sensed condition above/below the configured thresholds and confirm local and remote alarm activation.",
      "Door-left-open: hold the door past the configured delay and confirm the alarm.",
      "Power-loss: confirm the alarm/notification on outage. The actual result must equal the expected result for each."
    ],
    accept: "Every alarm activates at its configured setpoint and notifies as specified.",
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "co2-control": {
    title: "CO₂ concentration control and recovery (CO₂ units)",
    materials: ["Calibrated CO₂ reference analyzer"],
    steps: [
      "Verify the CO₂ reading against a calibrated reference analyzer at the working setpoint (commonly 5%).",
      "Confirm control holds CO₂ within the stability band during steady state.",
      "Open the door for the defined interval, then record the time to recover CO₂ to the setpoint band.",
      "Challenge the CO₂ out-of-range alarm by simulating high and low CO₂."
    ],
    accept: ["CO₂ setpoint and stability band come from the process / URS - do not assume (5% is a common culture target, ±0.5% a common band, but confirm per process)","CO₂ recovers within the URS limit.","CO₂ alarm activates correctly."],
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "monitoring-record": {
    title: "Verify monitoring / logging system",
    steps: [
      "Confirm the monitoring system logs at the required interval.",
      "Compare logged values against the independent calibrated reference over the same window.",
      "Verify time synchronization, audit trail, and user access control are active.",
      "Confirm secure data export reproduces the record faithfully."
    ],
    accept: ["Logged data matches reference at the required interval.","Audit trail and access control function."],
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "control-functions": {
    title: "Verify control-system functions",
    steps: [
      "Test setpoint entry and confirm the unit drives to and holds the entered value.",
      "Compare the unit display against the calibrated reference at setpoint.",
      "Exercise each security/access level (operator, supervisor, maintenance) and confirm privileges behave as defined.",
      "Confirm parameter changes require the correct access level and are recorded."
    ],
    accept: "Controls, display accuracy, and access levels all behave per specification."
  },

  "loading-pattern": {
    title: "Define the loading pattern to qualify",
    steps: [
      "Identify routine load types (vessel/culture-ware, containers) and their placement.",
      "Define minimum and maximum load and the densest packing permitted.",
      "Justify the worst-case pattern (thermal mass, airflow restriction).",
      "Document and approve each pattern before PQ execution."
    ],
    accept: "Loading pattern(s) defined, justified, and approved before PQ."
  },

  "monitor-sensor-placement": {
    title: "Place routine monitoring sensor at worst-case location",
    steps: [
      "Take the cold/hot spot(s) identified during mapping.",
      "Position the permanent routine monitoring sensor(s) at that worst-case location.",
      "Record the placement with a diagram and rationale linking it to the mapping result.",
      "Confirm the monitoring sensor reads consistently with mapping data at that point."
    ],
    accept: "Routine sensor located at the mapped worst-case point, documented with rationale.",
    link: "https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs961-annex9-supp8.pdf", linkLabel: "WHO TRS 961 Supp 8 - temperature mapping"
  },

  "requalification": {
    title: "Define requalification trigger and periodic review",
    steps: [
      "Set risk-based requalification triggers: significant change, repeated deviation, or adverse trend.",
      "Define the periodic review interval (risk-based; not automatically annual).",
      "Specify what a requalification includes (empty + loaded mapping, recovery, alarm verification).",
      "Document the justification under change control."
    ],
    accept: "Requalification triggers and review interval defined and risk-justified.",
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  // ---- GAMP 5 / computerised-system (automation) shared procedures ----
  "csv-version-config": {
    title: "Verify software/firmware version and configuration baseline",
    steps: [
      "Record the installed software/firmware version (and patch level).",
      "Compare to the approved, version-controlled baseline / release record.",
      "Capture a configuration snapshot or checksum where supported.",
      "Confirm the build/config is under change control."
    ],
    accept: "Installed version, patch level, and configuration match the approved version-controlled baseline.",
    link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11"
  },
  "csv-security-audit": {
    title: "Verify security, access, and audit trail (Part 11 / Annex 11)",
    steps: [
      "Confirm unique-user accounts and role-based access levels.",
      "Attempt an unauthorized action and confirm it is blocked.",
      "Make a controlled change and confirm the audit trail records who/what/when.",
      "Confirm the audit trail cannot be edited or disabled by users."
    ],
    accept: ["Access is role-based.","Unauthorized actions are blocked.","A secure, time-stamped audit trail records changes per Part 11 / Annex 11."],
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11"
  },
  "io-verification": {
    title: "I/O loop verification",
    steps: [
      "Work from the approved I/O list / loop drawings.",
      "For each input, apply a known reference signal and confirm the value at the controller/HMI.",
      "For each output, command a state/value and confirm the field device responds.",
      "Record actual vs expected for every point."
    ],
    accept: "Each input reads and each output drives correctly across its range against a reference (full loop check).",
    link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11"
  },
  "control-loop-test": {
    title: "Control-loop functional test",
    steps: [
      "Select the loop and its functional-spec requirements.",
      "Apply a setpoint and observe the control response (rise, overshoot, stability).",
      "Confirm it reaches and holds setpoint within the defined tolerance.",
      "Confirm associated alarm/trip setpoints act correctly."
    ],
    accept: ["The loop reaches and holds setpoint with stable response.","Alarm/trip points act per the functional spec (setpoints are process-defined - do not assume)."],
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11"
  },
  "interlock-test": {
    title: "Interlock / safety-logic challenge",
    steps: [
      "List each interlock, permissive, and safety/E-stop from the functional spec.",
      "Force the trigger condition for each.",
      "Confirm the interlock activates and prevents the unsafe/out-of-spec action.",
      "Confirm reset behavior is correct and logged."
    ],
    accept: "Each interlock/permissive/E-stop activates under its defined condition and prevents the unsafe/out-of-spec action.",
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11"
  },
  "data-integrity-test": {
    title: "Data-integrity / record verification (ALCOA+)",
    steps: [
      "Generate GxP records through normal operation.",
      "Confirm records are attributable, legible, contemporaneous, original, and accurate.",
      "Confirm time-stamps are correct and storage is secure/tamper-evident.",
      "Retrieve/export and confirm the output reproduces the original."
    ],
    accept: "Records are complete, time-stamped, tamper-evident, and retrievable without loss or alteration (ALCOA+).",
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11"
  },
  "interface-test": {
    title: "System interface verification",
    steps: [
      "Identify each interface (PLC, SCADA, MES, ERP, LIMS, BMS) from the design.",
      "Transfer representative data across the interface.",
      "Confirm the data arrives complete, accurate, and in the correct format.",
      "Confirm corruption/loss is detected and handled."
    ],
    accept: "Data transfer across interfaces is reliable, complete, and traceable, with checks against corruption/loss.",
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11"
  },
  "csv-backup-restore": {
    title: "Backup / restore / business continuity",
    steps: [
      "Confirm the backup procedure and schedule.",
      "Perform a restore from backup to a test environment.",
      "Confirm the restored system/data is complete and usable.",
      "Confirm archival data remains readable over the retention period."
    ],
    accept: ["Backup/restore (and disaster recovery) are tested.","Archived data remains readable over the retention period."],
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11"
  },

  // generic IQ checks reusable across most equipment
  "iq-utilities": {
    title: "Verify utility / supply connections",
    steps: [
      "List required supplies from the URS (electrical, and any gas/water lines).",
      "Confirm each connection is present, correctly sized, earthed, and labeled.",
      "Record supplied values (voltage/phase, gas pressure/purity) and compare to the nameplate and URS.",
      "Leak-check gas lines and confirm regulators where applicable."
    ],
    materials: ["Multimeter", "Calibrated pressure gauge (gas units)"],
    accept: "All supplies present, within spec, and leak-tight."
  },

  "iq-location": {
    title: "Verify location, leveling, and clearances",
    steps: [
      "Confirm the unit is level and sited per the installation drawing.",
      "Verify required clearances for airflow, service access, and door swing.",
      "Confirm the location is away from HVAC drafts, direct sun, and other thermal disturbances.",
      "Record the environment (ambient range) against the unit's rated operating environment."
    ],
    accept: "Location, leveling, and clearances meet the installation spec."
  },

  "iq-components": {
    title: "Confirm components installed and identified",
    steps: [
      "Inventory the controller/display, sensors, shelving, circulation fan, and any reservoir/regulator.",
      "Confirm each is the specified part and is tagged/identified.",
      "Verify door gasket/seal integrity and (gas units) line and regulator installation.",
      "Photograph the installed arrangement for the record."
    ],
    accept: "All components installed, identified, and matching spec."
  },

  "iq-instrument-inventory": {
    title: "Build the instrument inventory",
    steps: [
      "List every controlling and recording instrument on the unit.",
      "Capture tag, function, range, cal ID, and calibration due date for each.",
      "Note the control loop each sensor serves.",
      "Compile into the qualification package."
    ],
    accept: "Complete inventory of controlling/recording instruments with cal data."
  },

  "iq-vendor-docs": {
    title: "Confirm vendor documentation received",
    steps: [
      "Verify manuals, wiring/installation diagrams, warranty, and any certificates (e.g. gas purity, filter specs) were received.",
      "Confirm completeness against the PO documentation deliverables.",
      "Index and log each document.",
      "File in the controlled validation library."
    ],
    accept: "Manuals, diagrams, warranty, and certificates received and filed."
  },

  "iq-calibration-certs": {
    title: "Confirm sensor calibration certificates",
    steps: [
      "Identify the controller sensor(s) and the reference mapping sensors.",
      "Confirm each holds a current certificate traceable to national standards (ISO/IEC 17025 lab).",
      "Verify certificate ranges cover the operating setpoint(s) - for sub-zero units, confirm sensors are rated and calibrated for the low range.",
      "Record cal IDs and due dates."
    ],
    accept: "All controller and reference sensors calibrated, traceable, in-date, and range-appropriate."
  },

  "iq-backup-alarm": {
    title: "Verify backup power and alarm contacts installed",
    steps: [
      "Confirm backup power connection (and any CO₂/LN₂ backup cooling, if fitted) is installed per design.",
      "Verify local alarm and remote/BMS alarm contacts are wired.",
      "Confirm chart or electronic logging is installed and connected.",
      "Record alarm setpoints and notification paths (functional challenge occurs in OQ)."
    ],
    accept: "Backup power, local + remote alarm contacts, and logging installed."
  },

  "iq-defrost-drain": {
    title: "Verify defrost system and condensate drain",
    steps: [
      "Identify the defrost system type and configuration from the design.",
      "Confirm it is installed as specified.",
      "Verify the condensate drain is present, routed, and unobstructed.",
      "Record the defrost configuration for the OQ defrost-excursion test."
    ],
    accept: ["Defrost system installed per design.","Condensate drain functional."]
  },

  "defrost-excursion": {
    title: "Defrost excursion test",
    materials: ["Calibrated sensor array + logger"],
    steps: [
      "Stabilize the unit at setpoint with sensors logging.",
      "Allow a defrost cycle to run (or initiate one per the unit's schedule).",
      "Record the peak temperature excursion at each monitored point and the time to recover to the setpoint band.",
      "Confirm the excursion stays within the URS limit, or recovers within the URS-defined time."
    ],
    accept: "Defrost excursion stays within the URS limit (or recovers within the URS-defined time).",
    link: "https://ispe.org/publications/guidance-documents/ispe-good-practice-guide-controlled-temperature-chambers-2nd-edition", linkLabel: "ISPE GPG - Controlled Temperature Chambers"
  },

  "pulldown": {
    title: "Pull-down from ambient",
    materials: ["Calibrated sensor array + timer"],
    steps: [
      "Start with the chamber at ambient temperature, sensors logging.",
      "Power the unit and record the time for all monitored points to reach the setpoint band.",
      "Confirm pull-down time is within the URS limit.",
      "Note any point that lags as a candidate cold/warm spot."
    ],
    accept: "Pull-down to setpoint band within the URS-defined time."
  },

  "heat-distribution": {
    title: "Empty-chamber heat distribution study",
    materials: ["Calibrated thermocouple array + data logger"],
    steps: [
      "Set the chamber to the operating setpoint(s) defined by the process/product - do not assume the value; map at whatever setpoint(s) the unit is qualified to run.",
      "Distribute thermocouples through the empty chamber (corners, center, near door, near the airflow path); scale count to chamber volume and add one adjacent to the control sensor.",
      "Run to steady state and log at a fixed interval through the hold for the defined duration; repeat for the required number of consecutive runs.",
      "Plot each sensor; assess uniformity and stability against the protocol limit and identify the cold/hot spot for PQ probe placement."
    ],
    accept: ["Setpoint and tolerance are process/product-defined - do not assume.","All sensors within the protocol's defined band during the hold across the required runs.","Cold/hot spot identified."],
    link: "https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs961-annex9-supp8.pdf", linkLabel: "WHO TRS 961 Supp 8 - temperature mapping"
  },

  "heat-penetration-load": {
    title: "Loaded heat-penetration study",
    materials: ["Calibrated thermocouple array + logger", "Representative load"],
    steps: [
      "Load the chamber in the qualified pattern; place thermocouples in/against the load, concentrating on cold spots found in OQ.",
      "Run the qualified cycle for the required number of consecutive runs.",
      "Confirm every load location meets the cycle's time-at-temperature requirement (the requirement is set by the process/product - do not assume).",
      "Identify the cold spot and confirm it meets the protocol limit."
    ],
    accept: "Process/product-defined cycle requirement met at every load location, including the cold spot, across the required runs."
  },

  "over-temp-timer": {
    title: "Verify over-temperature protection and timer/controller",
    steps: [
      "Challenge the over-temperature cutoff by driving the sensed temperature toward the protection setpoint; confirm it trips and protects the load.",
      "Verify the cycle timer against a calibrated reference at representative durations.",
      "Confirm controller phase sequencing and setpoint control behave as specified.",
      "Document the method used to provoke the cutoff; actual result must equal expected."
    ],
    accept: ["Over-temperature cutoff trips at its setpoint.","Timer accurate within the URS limit."]
  },

  "equilibration-recovery": {
    title: "Verify equilibration / recovery time",
    materials: ["Calibrated sensor array + timer"],
    steps: [
      "Stabilize at the operating setpoint with sensors logging.",
      "Open the door for the defined interval (or start from the defined condition), then close.",
      "Record the time for all points to return to the operating band.",
      "Confirm equilibration/recovery time is within the URS limit and repeatable."
    ],
    accept: "Equilibration/recovery to the operating band within the URS-defined time."
  },

  "record-printout": {
    title: "Verify recorder / printout vs controller",
    steps: [
      "Run a cycle and capture the printout/electronic record.",
      "Confirm it records the critical parameters (temperature/time, and pressure/vacuum where applicable) plus date, time, and operator/cycle ID.",
      "Compare recorded values against the independent calibrated reference for the same run.",
      "Confirm alarm/deviation events appear in the record."
    ],
    accept: "Record captures all critical parameters and matches controller/reference readings."
  },

  "reproducibility-runs": {
    title: "Demonstrate reproducibility across consecutive runs",
    steps: [
      "Confirm the required number of consecutive successful runs (commonly three) for each qualified configuration.",
      "Verify each run independently meets all acceptance criteria.",
      "Confirm no run required adjustment or a re-run to pass.",
      "Summarize the run set in the report."
    ],
    accept: "Required number of consecutive runs all pass without intervention."
  },

  "vacuum-control": {
    title: "Vacuum-level control and leak-up test",
    materials: ["Calibrated vacuum gauge", "Timer"],
    steps: [
      "Run the pump-down and record the time to reach the target pressure (target is process-defined - do not assume).",
      "Confirm the chamber holds the target pressure during the hold.",
      "Isolate the pump and measure the leak-up (pressure-rise) rate over the defined interval.",
      "Confirm pump-down time and leak-up rate meet the URS limits."
    ],
    accept: ["Reaches and holds the process-defined target pressure.","Pump-down time and leak-up rate within URS limits."]
  },

  "speed-verification": {
    title: "Speed verification (tachometer)",
    materials: ["Calibrated NIST-traceable tachometer"],
    steps: [
      "Select representative setpoints across the operating range.",
      "At each, compare the displayed RPM against a calibrated tachometer reading.",
      "Record the deviation at each setpoint.",
      "Confirm deviation is within the manufacturer/URS tolerance (e.g. ±100 RPM is a common example - confirm against the data sheet)."
    ],
    accept: "Displayed speed within the data-sheet/URS tolerance at each setpoint.",
    link: "https://www.transcat.com/calibration-resources", linkLabel: "Transcat - metrology"
  },

  "timer-verification": {
    title: "Timer verification",
    materials: ["Calibrated timer reference"],
    steps: [
      "Select representative durations.",
      "Compare the set time against the measured elapsed time with a calibrated reference.",
      "Record the deviation at each duration.",
      "Confirm deviation is within the URS limit (e.g. ±2% is a common example - confirm per data sheet)."
    ],
    accept: "Timer accuracy within the data-sheet/URS tolerance at each duration."
  },

  "interlock-imbalance": {
    title: "Verify lid interlock and imbalance detection",
    steps: [
      "Confirm the lid cannot be opened while the rotor is spinning.",
      "Confirm a cycle cannot start with the lid open/unlatched.",
      "Introduce a controlled rotor imbalance and confirm the unit detects it and halts/aborts the run.",
      "Document the method used to provoke each condition; actual result must equal expected."
    ],
    accept: ["Lid interlock prevents open-while-spinning and start-while-open.","Imbalance detection halts the run."]
  },

  "endotoxin-challenge": {
    title: "Endotoxin challenge (depyrogenation)",
    materials: ["Endotoxin Challenge Vials / Indicators (≥1000 EU recoverable, RSE/CSE-spiked carrier)", "LAL assay kit (gel-clot, kinetic-turbidimetric, or chromogenic)", "Unbaked control vial"],
    steps: [
      "Place endotoxin indicators at the cold spot(s) identified by heat distribution, in a worst-case load; set one unbaked vial aside as the control.",
      "Run the qualified depyrogenation cycle (do not remove vial seals/stoppers during baking).",
      "After the cycle, assay the baked vial(s) and the control by LAL; calculate the log reduction (baked vs unbaked).",
      "Confirm the reduction meets the protocol's target log-reduction value."
    ],
    accept: ["Log reduction meets the protocol target.","Note: ≥3-log (1000×) is the common benchmark, but per USP <1228>/<1228.5> the required value is product/process-driven - high-endotoxin materials may need more, washed glass less.","Set the target from the process, do not assume 3-log."],
    link: "https://doi.usp.org/USPNF/USPNF_M10256_01_01.html", linkLabel: "USP <1228.5> - Endotoxin Indicators"
  },

  "tunnel-belt-dwell": {
    title: "Verify belt speed / dwell time (tunnel)",
    materials: ["Calibrated timer / belt-speed reference"],
    steps: [
      "Set the belt to the qualified speed.",
      "Measure the actual belt speed and the resulting dwell time in the heating zone against a calibrated reference.",
      "Confirm dwell time delivers the required time-at-temperature (process-defined - do not assume).",
      "Verify the controller holds belt speed across the run."
    ],
    accept: "Belt speed and dwell time deliver the process-defined time-at-temperature within the URS limit."
  },

  "tunnel-pressure-cascade": {
    title: "Verify zone-to-zone pressure cascade (tunnel)",
    materials: ["Calibrated differential-pressure gauge"],
    steps: [
      "Measure the differential pressure between adjacent zones (e.g. cooling zone positive to the surrounding room/filling line).",
      "Confirm the cascade direction and magnitude match the design intent to protect the sterile/clean zone.",
      "Verify HEPA-filtered airflow integrity feeding each zone.",
      "Confirm any door interlocks between zones function."
    ],
    accept: ["Pressure cascade direction and magnitude match design.","HEPA airflow and interlocks function."]
  },

  "vapor-gradient-map": {
    title: "Vapor-phase temperature gradient mapping",
    materials: ["Cryogenic-rated sensor array + logger"],
    steps: [
      "Place cryogenic-rated sensors at multiple heights from the liquid surface to the top of the storage space, plus at representative rack positions.",
      "Log over a representative period including a normal fill cycle.",
      "Characterize the vertical temperature gradient and identify the warmest occupied position.",
      "Confirm the warmest occupied position stays within the storage limit (limit is product-driven, e.g. ≤ −150 °C for some cell products - do not assume; confirm per process)."
    ],
    accept: ["Warmest occupied position within the product-defined storage limit.","Vertical gradient characterized."],
    link: "https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs961-annex9-supp8.pdf", linkLabel: "WHO TRS 961 Supp 8 - temperature mapping"
  },

  "controlled-rate-profile": {
    title: "Verify programmed cooling-rate profile (controlled-rate units)",
    materials: ["Cryogenic-rated sensor array + logger"],
    steps: [
      "Load a thermally representative load (or dummy) with sensors in/against it.",
      "Run the programmed cooling-rate profile.",
      "Compare the measured chamber/load temperature trace against the programmed profile setpoints over time.",
      "Confirm the unit tracks the profile within the protocol tolerance (the profile is product/process-defined - do not assume)."
    ],
    accept: "Measured trace follows the programmed, product-defined profile within the protocol tolerance."
  },

  "alarm-route-local-remote": {
    title: "Confirm alarms route locally and remotely",
    steps: [
      "Provoke each configured alarm (e.g. low-level, high-temperature, fault).",
      "Confirm the local audible/visual alarm activates.",
      "Confirm the remote/BMS notification is received.",
      "Document the method used to provoke each; actual result must equal expected."
    ],
    accept: "Each alarm activates locally and routes to the remote/BMS as specified."
  },

  "auto-fill": {
    title: "Verify auto-fill activation/termination (LN₂)",
    materials: ["Calibrated level reference"],
    steps: [
      "Confirm the configured low-level and high-level (fill-stop) setpoints.",
      "Allow the level to fall and confirm auto-fill initiates at the low setpoint.",
      "Confirm fill terminates at the high setpoint without overfill.",
      "Confirm the low-level alarm activates if fill does not restore level."
    ],
    accept: ["Auto-fill starts and stops at the configured setpoints.","Low-level alarm functions."]
  },

  "o2-depletion": {
    title: "O₂-depletion monitor verification (operator safety)",
    materials: ["Calibrated O₂ monitor / bump-test gas"],
    steps: [
      "Confirm the O₂-depletion monitor is installed in the room/headspace and powered.",
      "Bump-test or challenge the sensor to the alarm threshold per the manufacturer method.",
      "Confirm the local audible/visual alarm and any remote notification activate.",
      "Confirm operator-safety signage and PPE provisions are in place."
    ],
    accept: ["O₂-depletion monitor alarms at the configured threshold.","Signage/PPE in place."]
  }

};

const HOWTO_incubator = {
  // ---------- IQ ----------
  "IQ:0": { use: "iq-utilities",
    title: "Verify supply voltage and gas (CO₂) connections",
    accept: ["Electrical supply and any CO₂ line match nameplate/URS.","Lines leak-tight, gas purity certified."] },
  "IQ:1": { use: "iq-location" },
  "IQ:2": { use: "iq-components",
    title: "Verify controller, display, and CO₂ sensor installed and identified" },
  "IQ:3": { use: "iq-calibration-certs" },
  "IQ:4": { use: "iq-location",
    title: "Verify power/outlet, leveling, and required clearances" },
  "IQ:5": { use: "iq-components",
    title: "Confirm shelving, circulation fan, and humidity reservoir installed" },
  "IQ:6": { use: "iq-components",
    title: "Verify door gasket/seal and (CO₂) gas line + regulator",
    accept: ["Door seal intact.","CO₂ line and regulator installed and leak-checked."] },
  "IQ:7": { use: "iq-instrument-inventory" },
  "IQ:8": { use: "iq-vendor-docs" },

  // ---------- OQ ----------
  "OQ:0": { use: "temp-map-empty",
    accept: ["Setpoint and tolerance per the client's process / cells / stored-product requirement - do not assume.","Map at that setpoint and confirm uniformity and stability stay within the URS-defined band over ≥24 h.","Identify hot/cold spots.","(Recommended examples only: 37 °C for cell culture, or 20–25 °C incubations; tolerances like ± 1 °C or ± 0.5 °C are common but must be confirmed per process.)"] },
  "OQ:1": { use: "alarm-challenge-tcu",
    title: "Verify over-temperature, door, and CO₂ alarms",
    accept: "Over-temp, door-open, and CO₂ alarms activate at configured setpoints and notify as specified." },
  "OQ:2": { use: "co2-control" },
  "OQ:3": { use: "door-open-recovery" },
  "OQ:4": { use: "cal-verify" },
  "OQ:5": { use: "control-functions",
    title: "Verify control functions, display accuracy, and access levels" },
  "OQ:6": { use: "door-open-recovery" },
  "OQ:7": { use: "monitoring-record" },

  // ---------- PQ ----------
  "PQ:0": { use: "temp-map-loaded",
    accept: ["Setpoint and tolerance per the client's process / stored-product requirement - do not assume.","Loaded chamber holds within the URS-defined temperature band (and CO₂ band for CO₂ units) over the study including routine door cycles.","(Recommended example bands only - confirm the real limit per process.)"] },
  "PQ:1": { use: "monitor-sensor-placement" },
  "PQ:2": { use: "loading-pattern" },
  "PQ:3": { use: "temp-map-loaded",
    title: "Confirm performance under representative load and routine access",
    accept: "Set ranges maintained with representative load and routine access over the defined period." },
  "PQ:4": { use: "requalification" }
};

const HOWTO_fridge = {
  "IQ:0": { use: "iq-components", title: "Verify make/model/serial, range, capacity vs PO/URS" },
  "IQ:1": { use: "iq-location", title: "Verify supply, leveling, heat-rejection clearance, door seal" },
  "IQ:2": { use: "iq-calibration-certs" },
  "IQ:3": { use: "iq-backup-alarm" },
  "IQ:4": { use: "iq-components", title: "Confirm shelving, circulation fans, internal lighting installed" },
  "IQ:5": { use: "iq-defrost-drain" },
  "IQ:6": { use: "control-functions", title: "Record controller setpoint, alarm setpoints, access config",
    steps: [
      "Record the controller setpoint and all alarm setpoints as configured.",
      "Capture the access/security configuration and user roles.",
      "Confirm settings match the URS.",
      "File the configuration baseline in the IQ package."
    ],
    accept: "Setpoint, alarm setpoints, and access config recorded and matching URS." },
  "IQ:7": { use: "iq-vendor-docs" },

  "OQ:0": { use: "cal-verify" },
  "OQ:1": { use: "control-functions", title: "Verify controller, display accuracy, and defrost operation" },
  "OQ:2": { use: "temp-map-empty",
    accept: ["Setpoint/tolerance per URS / stored-product requirement - do not assume (2–8 °C is the common pharmaceutical fridge range; confirm)","Map at that setpoint.","Uniformity, stability, and pull-down within the URS band over ≥24 h.","Hot/cold spots identified."] },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify high/low temperature alarms",
    accept: "High and low temperature alarms activate at configured limits with correct delay, audible/visual, and remote signal." },
  "OQ:4": { use: "door-open-recovery", title: "Door-open excursion and recovery test" },
  "OQ:5": { use: "defrost-excursion" },
  "OQ:6": { use: "power-recovery" },
  "OQ:7": { use: "monitoring-record" },

  "PQ:0": { use: "loading-pattern" },
  "PQ:1": { use: "temp-map-loaded",
    accept: ["Setpoint/tolerance per URS / stored-product requirement - do not assume (2–8 °C common; confirm)","Loaded chamber holds within that band over a representative period under normal access."] },
  "PQ:2": { use: "temp-map-loaded", title: "Confirm performance under routine door-opening pattern",
    accept: "Set ranges maintained under the routine door-opening pattern reflecting actual use." },
  "PQ:3": { use: "monitor-sensor-placement" },
  "PQ:4": { use: "requalification" }
};

const HOWTO_freezer = {
  "IQ:0": { use: "iq-components", title: "Verify make/model/serial, range, capacity vs PO/URS" },
  "IQ:1": { use: "iq-location", title: "Verify supply, leveling, heat-rejection clearance, door seal" },
  "IQ:2": { use: "iq-calibration-certs",
    accept: "Controller and reference sensors calibrated, traceable, in-date, and rated for the sub-zero freezer range." },
  "IQ:3": { use: "iq-backup-alarm" },
  "IQ:4": { use: "iq-components", title: "Confirm shelving, circulation fans, internal lighting installed" },
  "IQ:5": { use: "iq-defrost-drain" },
  "IQ:6": { use: "control-functions", title: "Record controller setpoint, alarm setpoints, access config",
    steps: [
      "Record the controller setpoint and all alarm setpoints as configured.",
      "Capture the access/security configuration and user roles.",
      "Confirm settings match the URS.",
      "File the configuration baseline in the IQ package."
    ],
    accept: "Setpoint, alarm setpoints, and access config recorded and matching URS." },
  "IQ:7": { use: "iq-vendor-docs" },

  "OQ:0": { use: "cal-verify" },
  "OQ:1": { use: "control-functions", title: "Verify controller, display accuracy, and defrost operation" },
  "OQ:2": { use: "temp-map-empty",
    accept: ["Setpoint/tolerance per URS / stored-product requirement - do not assume.","A standard freezer is typically −20 °C, but −15 °C and −30 °C are also seen.","Confirm per process.","Map at the chosen setpoint.","Uniformity, stability, and pull-down within the URS band over ≥24 h.","Hot/cold spots identified."] },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify high/low temperature alarms",
    accept: "High and low temperature alarms activate at configured limits with correct delay, audible/visual, and remote signal." },
  "OQ:4": { use: "door-open-recovery", title: "Door-open excursion and recovery test" },
  "OQ:5": { use: "defrost-excursion" },
  "OQ:6": { use: "power-recovery" },
  "OQ:7": { use: "monitoring-record" },

  "PQ:0": { use: "loading-pattern" },
  "PQ:1": { use: "temp-map-loaded",
    accept: ["Setpoint/tolerance per URS / stored-product requirement - do not assume (typically −20 °C; −15/−30 °C also seen)","Loaded chamber holds within that band over a representative period under normal access."] },
  "PQ:2": { use: "temp-map-loaded", title: "Confirm performance under routine door-opening pattern",
    accept: "Set ranges maintained under the routine door-opening pattern reflecting actual use." },
  "PQ:3": { use: "monitor-sensor-placement" },
  "PQ:4": { use: "requalification" }
};

const HOWTO_ult = {
  "IQ:0": { use: "iq-location", title: "Verify dedicated circuit, voltage, heat-rejection clearance" },
  "IQ:1": { use: "iq-backup-alarm", title: "Confirm CO₂/LN₂ backup (if fitted) and high-temp alarm contacts" },
  "IQ:2": { use: "iq-calibration-certs",
    accept: "Mapping sensors rated and calibrated for the −80 °C range, traceable and in-date." },
  "IQ:3": { use: "iq-components", title: "Confirm condenser clearance, ambient rating, backup system installed" },
  "IQ:4": { use: "iq-components", title: "Verify door/lid gasket integrity and inner-compartment config" },
  "IQ:5": { use: "iq-components", title: "Verify make/model/serial, range, capacity vs PO/URS" },
  "IQ:6": { use: "iq-components", title: "Confirm as-built drawings / datasheets match installed unit" },
  "IQ:7": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "temp-map-empty",
    accept: ["Setpoint/tolerance per URS / stored-product requirement - do not assume.","ULT units commonly run at −80 °C (sometimes −70 °C)","Confirm per process.","Map at the chosen setpoint.","Uniformity and pull-down within the URS band.","Hot/cold spots identified."] },
  "OQ:1": { use: "alarm-challenge-tcu", title: "Verify high-temperature alarm and backup activation",
    accept: "High-temp alarm and backup-cooling system activate at the configured setpoint." },
  "OQ:2": { use: "door-open-recovery", title: "Door/lid-open excursion and recovery test" },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "alarm-challenge-tcu", title: "Verify high-temperature alarm and backup activation",
    accept: "High-temp alarm and backup-cooling system activate at the configured setpoint." },
  "OQ:6": { use: "monitoring-record" },

  "PQ:0": { use: "temp-map-loaded", title: "Loaded performance incl. routine sample-retrieval openings",
    accept: ["Setpoint/tolerance per URS - do not assume (commonly −80 °C)","Loaded unit holds within band over a representative period including routine sample-retrieval openings."] },
  "PQ:1": { use: "loading-pattern", title: "Define the sample loading / inventory pattern to qualify" },
  "PQ:2": { use: "monitor-sensor-placement" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_coldroom = {
  "IQ:0": { use: "iq-components", title: "Verify refrigeration plant, power (incl. backup), door seals, air handling" },
  "IQ:1": { use: "iq-calibration-certs",
    accept: "Mapping and monitoring sensors calibrated, traceable, in-date, and range-appropriate." },
  "IQ:2": { use: "iq-components", title: "Verify refrigeration plant, condensing unit, backup power" },
  "IQ:3": { use: "iq-components", title: "Confirm door seals, strip curtains, air handling, lighting installed" },
  "IQ:4": { use: "iq-backup-alarm", title: "Verify monitoring/alarm infrastructure (local + remote/BMS)" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { use: "temp-map-empty", title: "Empty-room mapping (3-D array: corners, center, door, return air)",
    steps: [
      "Set the mapping setpoint to the room's intended operating condition per the URS / stored-product requirement (do not assume; cold rooms are commonly 2–8 °C but confirm).",
      "Design a 3-D sensor array: corners (high and low), center, near the door, and at the return air; for rooms 2–20 m³ use ~15–16 sensors plus one at the control/monitoring probe.",
      "Secure sensors and record IDs against the placement diagram.",
      "Log over ≥24 h (longer if seasonal extremes matter); analyze uniformity, stratification, and stability against the URS limit; identify hot/cold zones."
    ],
    accept: ["Setpoint/tolerance per URS - do not assume.","All sensors within the defined band over the study.","Hot/cold zones and stratification identified."] },
  "OQ:1": { use: "door-open-recovery", title: "Door-open and defrost-cycle excursion; assess recovery" },
  "OQ:2": { use: "power-recovery" },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "defrost-excursion", title: "Confirm defrost cycle operates and condensate drains" },
  "OQ:6": { use: "alarm-challenge-tcu", title: "Verify high/low temp and door-ajar alarms",
    accept: "High/low temperature and door-ajar alarms activate at configured limits with correct signal routing." },

  "PQ:0": { use: "temp-map-loaded", title: "Loaded mapping incl. routine traffic and door openings",
    accept: ["Setpoint/tolerance per URS - do not assume.","Loaded room holds within band over a representative period including routine traffic and door openings."] },
  "PQ:1": { use: "loading-pattern", title: "Define storage loading pattern and traffic profile" },
  "PQ:2": { use: "monitor-sensor-placement" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_warehouse = {
  "IQ:0": { use: "iq-components", title: "Verify HVAC, power, monitoring infrastructure, zone layout vs URS" },
  "IQ:1": { use: "iq-calibration-certs",
    accept: "Mapping sensors calibrated, traceable, in-date, and sufficient in number for the volume." },
  "IQ:2": { use: "iq-components", title: "Verify HVAC units, make-up air, monitoring infrastructure installed" },
  "IQ:3": { use: "iq-components", title: "Confirm rack layout, dock-door seals, zone definitions match design" },
  "IQ:4": { use: "iq-instrument-inventory" },
  "IQ:5": { use: "iq-vendor-docs" },

  "OQ:0": { use: "temp-map-empty", title: "Empty-warehouse mapping across seasons/extremes",
    steps: [
      "Set acceptance to the storage condition required by the URS / stored product (do not assume; ambient/controlled-room-temperature ranges vary - confirm).",
      "Distribute sensors across the full volume and height to capture stratification: floor to top-of-rack, near dock doors, near HVAC supply/return, and dead zones. Scale sensor count to volume (large spaces need many sensors, ≥1 per defined zone).",
      "Map in both hot and cold seasons (or the documented worst-case extremes), logging over an extended period (often ≥7 days per season).",
      "Identify hot/cold zones and vertical stratification; define zones for routine monitoring."
    ],
    accept: ["Setpoint/tolerance per URS - do not assume.","All zones within the defined band across seasonal extremes.","Hot/cold zones and stratification identified."] },
  "OQ:1": { use: "alarm-challenge-tcu", title: "Verify zone-level monitoring/alarm activation",
    accept: "Zone-level alarms activate at configured limits and notify as specified." },
  "OQ:2": { use: "door-open-recovery", title: "Assess dock-door / HVAC-failure impact on near-door zones" },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "monitoring-record", title: "Verify zone-level alarms and monitoring log at configured limits" },
  "OQ:6": { use: "power-recovery", title: "Assess HVAC recovery after simulated failure or dock-door-open" },

  "PQ:0": { use: "temp-map-loaded", title: "Mapping under representative stock load (often seasonal)",
    accept: ["Setpoint/tolerance per URS - do not assume.","Stocked warehouse holds within band over the defined period (often seasonal) in use."] },
  "PQ:1": { use: "loading-pattern", title: "Define representative stock-load and seasonal conditions" },
  "PQ:2": { use: "monitor-sensor-placement", title: "Place permanent monitoring sensors at worst-case zones" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_co2incubator = {
  "IQ:0": { use: "iq-utilities", title: "Verify power, CO₂ supply/regulator, water reservoir vs URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm temp, CO₂, and humidity sensors installed and calibrated" },
  "IQ:2": { use: "iq-location", title: "Verify power/outlet, leveling, and clearances" },
  "IQ:3": { use: "iq-components", title: "Confirm CO₂ regulator, water tray, HEPA filter, shelving installed" },
  "IQ:4": { use: "iq-components", title: "Verify door seal and inner-door (if fitted) configuration" },
  "IQ:5": { use: "iq-components", title: "Verify make/model/serial, range, capacity vs PO/URS" },
  "IQ:6": { use: "iq-components", title: "Confirm as-built drawings / datasheets match installed unit" },
  "IQ:7": { use: "iq-instrument-inventory" },
  "IQ:8": { use: "iq-vendor-docs" },

  "OQ:0": { use: "temp-map-empty",
    accept: ["Setpoint/tolerance per the client's process / cells - do not assume (37 °C is a common culture target; 20–25 °C and others are seen)","Map at that setpoint.","Uniformity and stability within the URS band over ≥24 h.","Hot/cold spots identified."] },
  "OQ:1": { use: "co2-control" },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify high/low temp, CO₂, and door alarms",
    accept: "High/low temperature, CO₂ out-of-range, and door alarms activate at configured setpoints." },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "control-functions", title: "Verify humidity reaches and holds the required range",
    steps: [
      "Confirm the humidity reservoir/tray is filled and the system is running.",
      "Measure relative humidity against a calibrated reference at the working condition.",
      "Confirm RH reaches and holds the URS-defined range (do not assume a value; high humidity ~90%+ RH is common for cell culture but confirm per process).",
      "Record steady-state RH and any recovery after a door event."
    ],
    accept: "Humidity reaches and holds the URS-defined range (process-driven; confirm)." },
  "OQ:6": { use: "monitoring-record", title: "Confirm temp, CO₂, door alarms and logging at configured setpoints" },

  "PQ:0": { use: "temp-map-loaded", title: "Loaded performance under normal access patterns",
    accept: ["Setpoint/tolerance per process/cells - do not assume.","Temp, CO₂, and humidity hold within the URS bands under representative load and access."] },
  "PQ:1": { use: "loading-pattern", title: "Define the cell-culture loading pattern to qualify" },
  "PQ:2": { use: "temp-map-loaded", title: "Confirm temp, CO₂, humidity hold under representative load",
    accept: "Temp, CO₂, and humidity all within URS bands under representative load and routine access." },
  "PQ:3": { use: "requalification" }
};

const HOWTO_dryoven = {
  "IQ:0": { use: "iq-components", title: "Verify power, HEPA/airflow config, and door seal vs spec" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm controller and mapping thermocouples calibrated for the range" },
  "IQ:2": { use: "iq-components", title: "Verify make/model/serial, max temperature, airflow type recorded" },
  "IQ:3": { use: "iq-location" },
  "IQ:4": { use: "iq-components", title: "Confirm HEPA/airflow, shelving, and door seal installed" },
  "IQ:5": { use: "iq-calibration-certs", title: "Verify thermocouples, controller, and timer calibrated" },
  "IQ:6": { use: "iq-instrument-inventory" },
  "IQ:7": { use: "iq-vendor-docs" },

  "OQ:0": { use: "heat-distribution" },
  "OQ:1": { use: "over-temp-timer" },
  "OQ:2": { use: "cal-verify" },
  "OQ:3": { use: "control-functions" },
  "OQ:4": { use: "equilibration-recovery" },
  "OQ:5": { use: "record-printout" },

  "PQ:0": { use: "heat-penetration-load" },
  "PQ:1": { use: "endotoxin-challenge", title: "Depyrogenation only: endotoxin log-reduction challenge" },
  "PQ:2": { use: "loading-pattern", title: "Define each load pattern to be qualified" },
  "PQ:3": { use: "reproducibility-runs" },
  "PQ:4": { use: "requalification" }
};

const HOWTO_depyrooven = {
  "IQ:0": { use: "iq-components", title: "Verify power, HEPA airflow/supply, and door seal integrity vs URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm process thermocouples and reference rated for ≥250 °C",
    accept: "Process thermocouples and the reference standard calibrated, traceable, and rated for the depyrogenation temperature (≥250 °C typical - confirm cycle)." },
  "IQ:2": { use: "iq-components", title: "Verify HEPA filtration and airflow configuration installed" },
  "IQ:3": { use: "iq-location" },
  "IQ:4": { use: "iq-components", title: "Confirm HEPA/airflow, shelving/load racks, and door seal installed" },
  "IQ:5": { use: "iq-calibration-certs", title: "Verify high-temperature-rated thermocouples calibrated" },
  "IQ:6": { use: "iq-instrument-inventory" },
  "IQ:7": { use: "iq-vendor-docs" },

  "OQ:0": { use: "heat-distribution", title: "Empty-chamber heat distribution at the depyrogenation setpoint",
    accept: ["Setpoint is process/product-defined (250 °C/30 min is a common cycle; do not assume) - map at the qualified setpoint.","All sensors within the protocol band.","Cold spot identified."] },
  "OQ:1": { use: "over-temp-timer", title: "Verify cycle timer / time-at-temperature and over-temperature protection" },
  "OQ:2": { use: "cal-verify" },
  "OQ:3": { use: "control-functions" },
  "OQ:4": { use: "equilibration-recovery", title: "Verify door interlock/safety and equilibration-recovery after door opening" },
  "OQ:5": { use: "record-printout" },

  "PQ:0": { use: "endotoxin-challenge", title: "Endotoxin challenge at the cold spot (LRV target)" },
  "PQ:1": { use: "heat-penetration-load", title: "Loaded heat-penetration: confirm time-at-temperature at all locations" },
  "PQ:2": { use: "loading-pattern", title: "Define each load/configuration to be qualified" },
  "PQ:3": { use: "reproducibility-runs" },
  "PQ:4": { use: "requalification" }
};

const HOWTO_vacuumoven = {
  "IQ:0": { use: "iq-components", title: "Verify power, vacuum pump, gauge, and seal integrity vs URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm thermocouples and vacuum gauge calibrated" },
  "IQ:2": { use: "iq-location" },
  "IQ:3": { use: "iq-components", title: "Confirm vacuum pump, cold trap, gauge, and seals installed" },
  "IQ:4": { use: "iq-calibration-certs", title: "Verify thermocouples and vacuum gauge calibrated" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { use: "vacuum-control" },
  "OQ:1": { use: "heat-distribution", title: "Heat distribution at setpoint under vacuum; identify cold spot" },
  "OQ:2": { use: "over-temp-timer", title: "Verify over-temperature protection and controller functions" },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "vacuum-control", title: "Verify pump-down time to target and chamber leak-up rate" },
  "OQ:6": { use: "record-printout", title: "Confirm over-temperature protection and recorder/printout" },

  "PQ:0": { use: "heat-penetration-load", title: "Loaded drying study; confirm uniformity and endpoint under load",
    accept: "Process-defined drying endpoint met and uniformity within the protocol limit under the qualified load." },
  "PQ:1": { use: "loading-pattern", title: "Define each load pattern to be qualified" },
  "PQ:2": { use: "reproducibility-runs" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_ln2 = {
  "IQ:0": { use: "iq-components", title: "Verify vessel integrity, LN₂ supply/auto-fill, level sensors, O₂ monitor" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm cryogenic-rated mapping sensors calibrated across range" },
  "IQ:2": { use: "iq-components", title: "Verify vessel/dewar integrity, auto-fill/transfer line, level sensors" },
  "IQ:3": { use: "iq-backup-alarm", title: "Confirm O₂-depletion monitor and operator-safety signage/PPE",
    steps: [
      "Confirm the O₂-depletion monitor is installed and powered in the room/headspace.",
      "Verify operator-safety signage is posted and PPE provisions (e.g. cryo gloves, face shield) are available.",
      "Confirm low-level and high-temperature alarm contacts are wired (local + remote).",
      "Record alarm setpoints (functional challenge occurs in OQ)."
    ],
    accept: "O₂ monitor, safety signage/PPE, and alarm contacts in place." },
  "IQ:4": { use: "iq-components", title: "Verify make/model/serial, range, capacity vs PO/URS" },
  "IQ:5": { use: "iq-components", title: "Confirm as-built drawings / datasheets match installed unit" },
  "IQ:6": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "vapor-gradient-map" },
  "OQ:1": { use: "auto-fill", title: "Low-level alarm and auto-fill activation at configured setpoints" },
  "OQ:2": { use: "o2-depletion" },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "auto-fill", title: "Verify auto-fill activates and terminates at configured level setpoints" },
  "OQ:6": { use: "alarm-route-local-remote", title: "Confirm low-level and high-temperature alarms route locally and remotely" },

  "PQ:0": { use: "vapor-gradient-map", title: "Loaded performance at worst-case fill and access",
    accept: "Warmest occupied sample position stays within the product-defined storage limit at worst-case fill and access." },
  "PQ:1": { use: "loading-pattern", title: "Define rack/inventory loading pattern and access frequency" },
  "PQ:2": { use: "monitor-sensor-placement", title: "Confirm warmest occupied position stays within limit over time",
    steps: [
      "Identify the warmest occupied position from vapor-phase mapping.",
      "Place/confirm a monitoring sensor at that worst-case position.",
      "Log over a representative period including routine access.",
      "Confirm it stays within the product-defined storage limit."
    ],
    accept: "Warmest occupied position documented and held within the product-defined limit." },
  "PQ:3": { use: "requalification" }
};

const HOWTO_cryochamber = {
  "IQ:0": { use: "iq-components", title: "Verify power, refrigeration/LN₂ assist, control system, probes vs URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm cryogenic-rated sensors calibrated across range" },
  "IQ:2": { use: "iq-location" },
  "IQ:3": { use: "iq-components", title: "Confirm refrigeration/LN₂-assist, control unit, probes installed" },
  "IQ:4": { use: "iq-components", title: "Verify make/model/serial, range, capacity vs PO/URS" },
  "IQ:5": { use: "iq-components", title: "Confirm as-built drawings / datasheets match installed unit" },
  "IQ:6": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "temp-map-empty", title: "Empty-chamber mapping at setpoint; pull-down to cryogenic target",
    accept: ["Setpoint/tolerance per process/product - do not assume.","Map at the cryogenic setpoint.","Uniformity and pull-down within the URS band.","Hot/cold spots identified."] },
  "OQ:1": { use: "controlled-rate-profile" },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify high-temperature/fault alarms at configured setpoints",
    accept: "High-temperature/fault alarms activate at configured setpoints." },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "pulldown", title: "Verify pull-down time from ambient to cryogenic setpoint" },
  "OQ:6": { use: "alarm-route-local-remote", title: "Confirm fault/high-temperature alarms route locally and remotely" },

  "PQ:0": { use: "controlled-rate-profile", title: "Loaded run reproducing the real freezing profile",
    accept: "Process-defined freezing profile/rate met across the load in a loaded run." },
  "PQ:1": { use: "loading-pattern", title: "Define the loaded run / profile with a thermally representative load" },
  "PQ:2": { use: "reproducibility-runs" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_centrifuge = {
  "IQ:0": { use: "iq-components", title: "Verify power, leveling, rotor compatibility, lid-interlock install" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm calibrated tachometer and timer reference available",
    accept: "A calibrated, traceable tachometer and timer reference are available for OQ checks." },
  "IQ:2": { use: "iq-components", title: "Record make/model/serial, rotor type(s), max RCF vs spec" },
  "IQ:3": { use: "iq-location" },
  "IQ:4": { use: "iq-components", title: "Verify rotor(s), buckets, lid-interlock compatibility and install" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { use: "speed-verification" },
  "OQ:1": { use: "timer-verification" },
  "OQ:2": { use: "cal-verify", title: "Refrigerated units: temperature accuracy at setpoint during a run",
    steps: [
      "For refrigerated centrifuges, set the chamber to the working setpoint (process-defined - do not assume; e.g. 4 °C is common but confirm).",
      "Run a representative protocol with a calibrated reference sensor in the chamber.",
      "Compare measured chamber temperature against setpoint during the run.",
      "Confirm it holds within the data-sheet/URS tolerance."
    ],
    accept: "Refrigerated chamber holds the process-defined setpoint within tolerance during a representative run." },
  "OQ:3": { use: "interlock-imbalance", title: "Verify imbalance detection and lid interlock under fault" },
  "OQ:4": { use: "cal-verify" },
  "OQ:5": { use: "control-functions" },
  "OQ:6": { use: "control-functions", title: "Verify accel/decel profiles and program recall (if programmable)",
    steps: [
      "Select representative acceleration and deceleration profiles.",
      "Confirm the unit follows the selected profile.",
      "For programmable units, store and recall a program and confirm it runs as saved.",
      "Confirm access control over stored programs where applicable."
    ],
    accept: ["Accel/decel profiles behave as selected.","Stored programs recall and run correctly."] },
  "OQ:7": { use: "interlock-imbalance", title: "Confirm lid cannot open while spinning; imbalance halts run" },

  "PQ:0": { use: "reproducibility-runs", title: "Performance with representative load/protocol; trend speed/timer",
    accept: ["Representative load/protocol performs consistently over routine use.","Speed and timer checks trended within tolerance."] },
  "PQ:1": { use: "reproducibility-runs", title: "Confirm performance with representative load/protocol over routine use" },
  "PQ:2": { use: "requalification", title: "Define routine speed/timer verification frequency and trend results",
    accept: "Routine speed/timer verification frequency defined and results trended." }
};

const HOWTO_waterbath = {
  "IQ:0": { use: "iq-components", title: "Verify power, fill level, lid, and (if circulated) pump install" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm mapping sensors calibrated for the working range" },
  "IQ:2": { use: "iq-location" },
  "IQ:3": { use: "iq-components", title: "Confirm lid, rack/tray, pump (if fitted), fill-level mark installed" },
  "IQ:4": { use: "iq-calibration-certs", title: "Verify temperature controller/sensor calibrated" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { use: "temp-map-empty", title: "Temperature distribution at setpoint through the working volume",
    steps: [
      "Set the bath to the operating setpoint(s) defined by the process - do not assume the value; common bath setpoints include 37, 56, and 80 °C but confirm per use.",
      "Distribute calibrated sensors through the working volume (e.g. 4 corners + center, or a 9-point pattern at the working depth).",
      "Run to steady state and log at a fixed interval; assess uniformity (spread between sensors).",
      "Repeat at each required setpoint; identify the cold/hot spot."
    ],
    accept: ["Setpoint is process-defined - do not assume.","Uniformity within the protocol limit at each required setpoint (±0.1–0.5 °C control is common but confirm per data sheet/process)."] },
  "OQ:1": { use: "temp-map-empty", title: "Stability over time at setpoint",
    steps: [
      "Hold the bath at the operating setpoint with a calibrated sensor logging.",
      "Record temperature over a representative period.",
      "Assess the fluctuation band at each measurement point.",
      "Confirm the controller holds within the URS stability band."
    ],
    accept: "Controller holds within the URS-defined stability band over time (setpoint process-defined)." },
  "OQ:2": { use: "over-temp-timer", title: "Verify over-temperature cutoff / low-level protection" },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "equilibration-recovery", title: "Verify warm-up / recovery time to reach setpoint" },
  "OQ:6": { use: "over-temp-timer", title: "Confirm over-temperature cutoff and low-level protection (if fitted)" },

  "PQ:0": { use: "temp-map-loaded", title: "Performance under representative load (racks/vessels)",
    accept: ["Setpoint process-defined - do not assume.","Holds within the URS band under representative racks/vessels over a routine run."] },
  "PQ:1": { use: "temp-map-loaded", title: "Confirm performance under representative load over a routine run" },
  "PQ:2": { use: "requalification", title: "Define routine temperature-check frequency and tolerance",
    accept: "Routine temperature-check frequency and tolerance defined." }
};

const HOWTO_balance = {
  "IQ:0": { use: "iq-utilities", title: "Verify supply voltage/outlet vs nameplate before power-on" },
  "IQ:1": { use: "iq-location", title: "Confirm stable, level, vibration-free surface away from drafts" },
  "IQ:2": { use: "iq-components", title: "Confirm level indicator centered and adjustable feet functional",
    steps: [
      "Confirm the built-in bubble/level indicator is installed and visible.",
      "Adjust the feet until the level indicator is centered.",
      "Confirm the feet lock and the balance does not rock.",
      "Record the leveled state."
    ],
    accept: ["Level indicator centered.","Adjustable feet functional and stable."] },
  "IQ:3": { title: "Verify traceable calibration weights on hand",
    materials: ["OIML/ASTM-class reference weights with current certificates"],
    steps: [
      "Identify the test weights needed (covering 5–100% of capacity for accuracy, ~half capacity for repeatability).",
      "Confirm each weight carries a current certificate traceable to NIST/national standard.",
      "Confirm each weight's mpe (or calibration uncertainty) is ≤ 1/3 of the applicable balance test tolerance.",
      "Record weight class, value, and certificate IDs."
    ],
    accept: ["Traceable weights on hand.","Mpe/uncertainty ≤ 1/3 of the test tolerance."],
    link: "https://www.usp.org/frequently-asked-questions/balances-and-weighing-analytical-balance", linkLabel: "USP - Balances FAQ" },
  "IQ:4": { use: "iq-components", title: "Document make/model/serial, capacity, readability vs spec" },
  "IQ:5": { use: "iq-location", title: "Confirm anti-vibration table/draft shield and environment suitable" },
  "IQ:6": { use: "iq-components", title: "Verify internal calibration function and bubble level installed" },
  "IQ:7": { use: "iq-instrument-inventory" },
  "IQ:8": { use: "iq-vendor-docs" },

  "OQ:0": { title: "Repeatability (USP <41>)",
    materials: ["One test weight (~half capacity)", "Tare vessel used in routine work"],
    steps: [
      "Weigh one test weight not less than 10 times under routine conditions.",
      "Compute the standard deviation (SD) of the readings; if SD < 0.41d (d = scale interval), use 0.41d.",
      "Repeatability is satisfactory if (2 × SD) ÷ smallest net weight to be weighed ≤ 0.10%.",
      "Record SD and the calculation."
    ],
    accept: ["(2 × SD) ÷ minimum sample weight ≤ 0.10% per USP <41>","(Feb 2026 revision: also evaluate/document measurement uncertainty.)"],
    link: "https://www.usp.org/frequently-asked-questions/balances-and-weighing-analytical-balance", linkLabel: "USP <41> - Balances" },
  "OQ:1": { title: "Accuracy / trueness (USP <41>)",
    materials: ["Calibrated test weight, 5–100% of capacity"],
    steps: [
      "Select a calibrated test weight between 5% and 100% of capacity (mpe ≤ 1/3 of the 0.10% test limit).",
      "Weigh it and record the displayed value.",
      "Compute the deviation from the certified test-weight value.",
      "Repeat at additional points across the range if required by the protocol."
    ],
    accept: "Displayed value within 0.10% of the test-weight value (5–100% of capacity) per USP <41>." },
  "OQ:2": { title: "Establish minimum weight / operating range",
    steps: [
      "Use the repeatability SD from OQ:0.",
      "Calculate the minimum weight as the smallest net sample meeting (2 × SD) ÷ sample ≤ 0.10% (USP <41>).",
      "Verify the minimum weight using the actual tare vessels used in routine work.",
      "Document the operating range (minimum weight to capacity)."
    ],
    accept: "Minimum weight established from demonstrated repeatability and verified with routine tare vessels." },
  "OQ:3": { title: "Eccentricity (corner-load) test",
    materials: ["Single test weight (~1/3 to 1/2 capacity)"],
    steps: [
      "Place the weight at the center of the pan and record the reading.",
      "Move it to each quadrant/corner of the pan in turn, recording each reading.",
      "Compute the maximum deviation from the center reading.",
      "Confirm it is within the data-sheet/OIML R76 limit (process/instrument-defined - confirm, do not assume)."
    ],
    accept: "Max corner-load deviation within the manufacturer/OIML limit.",
    link: "https://www.usp.org/frequently-asked-questions/balances-and-weighing-analytical-balance", linkLabel: "USP - Balances FAQ" },
  "OQ:4": { use: "cal-verify" },
  "OQ:5": { title: "Off-center (eccentricity) load test",
    materials: ["Single test weight"],
    steps: [
      "Repeat the corner-load test at center then each quadrant.",
      "Record the maximum deviation.",
      "Confirm within the manufacturer/OIML limit.",
      "Document the result."
    ],
    accept: "Max eccentricity deviation within the manufacturer/OIML limit." },
  "OQ:6": { title: "Warm-up / drift check",
    steps: [
      "Allow the balance the manufacturer-specified stabilization/warm-up time.",
      "Place a stable weight and record the reading over the stabilization period.",
      "Confirm the reading stabilizes and does not drift beyond tolerance.",
      "Record the time to stable reading."
    ],
    accept: "Reading stable within tolerance after the specified warm-up time." },
  "OQ:7": { title: "Tare and linearity check",
    materials: ["Reference weights spanning the range"],
    steps: [
      "Tare a vessel and confirm zero.",
      "Add reference weights stepwise across the range, recording each reading.",
      "Assess linearity of displayed vs reference across the points.",
      "Confirm deviations within tolerance at each point."
    ],
    accept: "Tare functions and linearity within tolerance across the range." },

  "PQ:0": { title: "Routine accuracy/repeatability over real workload",
    steps: [
      "Run the defined routine accuracy/repeatability checks at the set intervals.",
      "Perform under the actual operating location and workflow.",
      "Trend the results over a representative period.",
      "Confirm continued conformance to the OQ acceptance."
    ],
    accept: "Routine checks remain within tolerance over the representative period." },
  "PQ:1": { title: "Daily user check-weighing in place and trended",
    steps: [
      "Confirm a daily single-tolerance-weight check procedure is defined.",
      "Confirm operators perform and log it before use.",
      "Trend the logged results.",
      "Confirm action limits trigger investigation."
    ],
    accept: "Daily check-weighing performed, logged, and trended." },
  "PQ:2": { title: "Define routine daily check-weighing procedure and tolerance",
    steps: [
      "Select the daily check weight (representative of routine work).",
      "Define the acceptance tolerance from the process requirement (do not assume; tie to the smallest routine sample).",
      "Document the procedure, frequency, and action limits.",
      "Approve under the QMS."
    ],
    accept: "Daily check procedure, weight, frequency, and tolerance defined and approved." },
  "PQ:3": { use: "requalification", title: "Confirm performance under actual location/workflow over time" }
};

const HOWTO_ph = {
  "IQ:0": { use: "iq-utilities", title: "Verify supply/battery and stable power-on display" },
  "IQ:1": { title: "Confirm electrode, ATC probe, and buffer set present and in date",
    steps: [
      "Confirm the pH electrode and temperature (ATC) probe are present and connected.",
      "Confirm the standardization buffer set is on hand and within shelf life.",
      "Inspect the electrode (fill level, junction, no cracks).",
      "Record electrode type and buffer lot/expiry."
    ],
    accept: "Electrode, ATC probe, and in-date buffers present and serviceable." },
  "IQ:2": { title: "Verify NIST-traceable standardization buffers on hand",
    steps: [
      "Confirm the buffers are NIST-traceable with stated accuracy.",
      "Confirm lot numbers and expiry.",
      "Confirm storage conditions were maintained.",
      "Record buffer details."
    ],
    accept: "NIST-traceable buffers on hand, in date, with stated accuracy." },
  "IQ:3": { use: "iq-components", title: "Record make/model/serial, resolution, electrode type vs spec" },
  "IQ:4": { use: "iq-components", title: "Verify electrode storage solution, condition, service life" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { title: "Two-point standardization (USP <791>)",
    materials: ["Two NIST-traceable buffers bracketing the sample pH (≤4 units apart)"],
    steps: [
      "Select two buffers that bracket the expected sample pH, no more than 4 pH units apart.",
      "Standardize at 25 ± 2 °C (or with ATC correcting to it), rinsing the electrode between buffers.",
      "Confirm the meter accepts both calibration points.",
      "Record the buffer values and measured readings."
    ],
    accept: "Two-point standardization completes with bracketing buffers ≤4 units apart, at 25 ± 2 °C per USP <791>.",
    link: "https://www.usp.org/", linkLabel: "USP <791> - pH" },
  "OQ:1": { title: "Verify second buffer reads within tolerance",
    steps: [
      "After standardization, measure the second (check) buffer.",
      "Compare the reading to its tabulated value at the measurement temperature.",
      "Confirm the reading is within the acceptance tolerance (commonly ±0.05; instrument able to reproduce to 0.02 pH per USP <791> - confirm protocol).",
      "Record the deviation."
    ],
    accept: "Check buffer reads within the protocol tolerance of its tabulated value." },
  "OQ:2": { title: "Confirm resolution / reproducibility",
    steps: [
      "Make replicate measurements of a stable buffer.",
      "Confirm the instrument reproduces pH values to 0.02 pH unit (USP <791> definition).",
      "Confirm the displayed resolution meets the compendial requirement.",
      "Record the spread."
    ],
    accept: "Instrument reproduces pH to 0.02 unit per USP <791>." },
  "OQ:3": { title: "Verify temperature compensation",
    steps: [
      "Confirm measurements are made at 25 ± 2 °C, or that ATC corrects readings to 25 °C.",
      "Compare an ATC-corrected reading against a reading at controlled 25 °C.",
      "Confirm agreement within tolerance.",
      "Record the method used."
    ],
    accept: "Measurements at 25 ± 2 °C or ATC correctly compensating to it." },
  "OQ:4": { title: "Check electrode slope",
    steps: [
      "Read the slope reported after two-point standardization.",
      "Confirm it falls within the acceptable range (commonly 95–105%; Nernstian ~59.16 mV/pH at 25 °C - confirm per data sheet).",
      "Replace the electrode if below the manufacturer limit (~90%).",
      "Record the slope."
    ],
    accept: "Electrode slope within the acceptable range (e.g. 95–105%; confirm per data sheet)." },
  "OQ:5": { use: "cal-verify" },
  "OQ:6": { title: "Electrode response-time check",
    steps: [
      "Move the electrode from one buffer to another.",
      "Record the time to a stable reading.",
      "Confirm it is within the specified response time.",
      "Repeat to confirm consistency."
    ],
    accept: "Stable reading reached within the specified response time." },
  "OQ:7": { title: "Verify ATC temperature reading vs reference",
    steps: [
      "Place the ATC probe alongside an independent calibrated thermometer.",
      "Compare readings at a stable temperature.",
      "Confirm agreement within tolerance.",
      "Record the deviation."
    ],
    accept: "ATC temperature reading agrees with the reference within tolerance." },

  "PQ:0": { title: "Daily check-buffer verification before use",
    steps: [
      "Before use, measure a check buffer (e.g. pH 7.00).",
      "Confirm it reads within tolerance.",
      "Log and trend the result.",
      "Re-standardize or investigate if out of tolerance."
    ],
    accept: "Daily check buffer within tolerance, logged and trended." },
  "PQ:1": { title: "Confirm electrode maintenance/storage/replacement procedure",
    steps: [
      "Confirm the electrode storage solution and conditions are defined.",
      "Confirm cleaning and conditioning steps are documented.",
      "Confirm replacement criteria (slope/response) are defined.",
      "Confirm operators follow the procedure."
    ],
    accept: "Electrode maintenance, storage, and replacement procedure defined and followed." },
  "PQ:2": { title: "Define pre-use verification procedure, frequency, tolerance",
    steps: [
      "Select the pre-use check buffer.",
      "Define the acceptance tolerance from the measurement requirement (do not assume).",
      "Document frequency and action on failure.",
      "Approve under the QMS."
    ],
    accept: "Pre-use verification procedure, frequency, and tolerance defined and approved." },
  "PQ:3": { use: "requalification", title: "Confirm performance over routine sample measurement" }
};

const HOWTO_osmometer = {
  "IQ:0": { use: "iq-components", title: "Verify power and cooling/probe assembly reaches operating range" },
  "IQ:1": { title: "Confirm traceable osmolality calibrators on hand",
    steps: [
      "Confirm osmolality reference standards bracketing the working range are available.",
      "Confirm each is traceable and within shelf life.",
      "Confirm storage conditions were maintained.",
      "Record standard values and lot/expiry."
    ],
    accept: "Traceable osmolality calibrators on hand, in date, bracketing the working range." },
  "IQ:2": { use: "iq-location" },
  "IQ:3": { use: "iq-components", title: "Verify sample probe/cooling assembly and reagents installed" },
  "IQ:4": { use: "iq-instrument-inventory" },
  "IQ:5": { use: "iq-vendor-docs" },

  "OQ:0": { title: "Calibrate and verify (freezing-point depression, USP <785>)",
    materials: ["Osmolality standards bracketing the working range", "Independent verification standard"],
    steps: [
      "Calibrate using standards that bracket the working range per the instrument method.",
      "Measure an independent standard not used in calibration.",
      "Confirm the result is within the acceptance (USP <785>: freezing-point depression; ~±5% cal is a common reference - confirm protocol).",
      "Record calibration and verification values."
    ],
    accept: "Verification standard within the protocol acceptance after calibration (USP <785>).",
    link: "https://www.usp.org/", linkLabel: "USP <785> - Osmolality" },
  "OQ:1": { title: "Repeatability",
    steps: [
      "Make replicate measurements of a single standard.",
      "Compute the spread/SD.",
      "Confirm within the protocol repeatability limit.",
      "Record the result."
    ],
    accept: "Replicate spread within the protocol repeatability limit." },
  "OQ:2": { title: "Context note: plasma reference range",
    steps: [
      "Note that human plasma is ~285–310 mOsmol/kg - a physiological reference point, not a compendial acceptance limit.",
      "Set actual acceptance from the product/process requirement, not from this reference.",
      "Document the working range applicable to the samples measured.",
      "Confirm calibrators bracket that working range."
    ],
    accept: "Working range and acceptance are process/product-defined - do not use the plasma reference as a limit." },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { title: "Verify measurement cycle completes within time",
    steps: [
      "Run the freezing/measurement cycle on a sample.",
      "Record the time to a reported result.",
      "Confirm it completes and reports within the specified time.",
      "Repeat to confirm consistency."
    ],
    accept: "Freezing/measurement cycle completes and reports within the specified time." },
  "OQ:6": { title: "Cleaning / carryover check",
    steps: [
      "Measure a high-osmolality sample, then a low blank/standard.",
      "Confirm the blank result shows no significant carryover.",
      "Confirm the cleaning step between samples is effective.",
      "Record the carryover result."
    ],
    accept: "Carryover within the protocol acceptance after the cleaning step." },

  "PQ:0": { title: "Ongoing standard checks under routine use",
    steps: [
      "Run daily/periodic standard checks under routine conditions.",
      "Confirm each within tolerance.",
      "Trend the results.",
      "Investigate out-of-tolerance results."
    ],
    accept: ["Routine standard checks remain within tolerance.","Results trended."] },
  "PQ:1": { title: "Define routine standard-check frequency and tolerance",
    steps: [
      "Select the routine check standard(s).",
      "Define the tolerance from the measurement requirement (do not assume).",
      "Document frequency and action on failure.",
      "Approve under the QMS."
    ],
    accept: "Standard-check frequency and tolerance defined and approved." },
  "PQ:2": { use: "requalification", title: "Confirm performance over routine measurement" }
};

const HOWTO_refractometer = {
  "IQ:0": { use: "iq-components", title: "Verify power, light source/prism, temp-control connection vs spec" },
  "IQ:1": { title: "Confirm certified RI standards / distilled water available",
    steps: [
      "Confirm certified refractive-index standards (or freshly distilled water) are available.",
      "Confirm any RI standards are traceable and in date.",
      "Confirm storage conditions were maintained.",
      "Record standard values and lot/expiry."
    ],
    accept: "Certified RI standards (or distilled water) available and traceable." },
  "IQ:2": { use: "iq-location" },
  "IQ:3": { use: "iq-components", title: "Verify prism/light source, temp-control connection, sample stage installed" },
  "IQ:4": { use: "iq-instrument-inventory" },
  "IQ:5": { use: "iq-vendor-docs" },

  "OQ:0": { title: "Accuracy with distilled water (USP <831>)",
    materials: ["Freshly distilled water", "Stage temperature control"],
    steps: [
      "Bring the sample stage to the controlled reference temperature (commonly 20 °C; sodium D-line 589 nm per USP <831>).",
      "Measure distilled water and read the refractive index.",
      "Compare to the tabulated value (n ≈ 1.3330 at 20 °C; acceptance commonly ±0.0001 - confirm protocol).",
      "Record the reading and deviation."
    ],
    accept: "Water reads the tabulated n within the protocol tolerance at the controlled temperature (USP <831>).",
    link: "https://www.usp.org/", linkLabel: "USP <831> - Refractive Index" },
  "OQ:1": { title: "Temperature-control check",
    steps: [
      "Set the stage to the specified measurement temperature (20 °C or 25 °C per method - do not assume; confirm).",
      "Verify the stage holds that temperature with an independent reference.",
      "Confirm stability within tolerance.",
      "Record the held temperature."
    ],
    accept: "Stage holds the specified measurement temperature within tolerance." },
  "OQ:2": { title: "Linearity (digital units)",
    materials: ["RI standards across the range"],
    steps: [
      "Measure certified RI standards spanning the working range.",
      "Compare each reading to its assigned value.",
      "Assess linearity across the range.",
      "Confirm deviations within tolerance."
    ],
    accept: "Readings track assigned values across the range within tolerance." },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { title: "Verify temperature equilibration time",
    steps: [
      "Apply a sample at a different temperature to the stage.",
      "Record the time for the stage/sample to reach the measurement temperature.",
      "Confirm it is within the specified equilibration time.",
      "Record the result."
    ],
    accept: "Sample reaches measurement temperature within the specified equilibration time." },
  "OQ:6": { title: "Prism cleaning / water baseline check",
    steps: [
      "Measure a sample, then clean the prism per procedure.",
      "Measure distilled water and confirm a stable baseline reading.",
      "Confirm no residue/carryover affects the baseline.",
      "Record the baseline result."
    ],
    accept: ["Stable water baseline restored after cleaning.","No carryover."] },

  "PQ:0": { title: "Daily water/standard check before use",
    steps: [
      "Before use, measure distilled water or an RI standard at the controlled temperature.",
      "Confirm within tolerance.",
      "Log and trend the result.",
      "Recalibrate/investigate if out of tolerance."
    ],
    accept: "Daily water/standard check within tolerance, logged and trended." },
  "PQ:1": { title: "Define routine water/standard-check frequency and tolerance",
    steps: [
      "Select the routine check (water or RI standard).",
      "Define the tolerance from the measurement requirement (do not assume).",
      "Document frequency and action on failure.",
      "Approve under the QMS."
    ],
    accept: "Water/standard-check frequency and tolerance defined and approved." },
  "PQ:2": { use: "requalification", title: "Confirm performance over routine measurement" }
};

const HOWTO_bioreactor = {
  "IQ:0": { title: "Verify hygienic finish and dead-leg requirements (ASME BPE)",
    steps: [
      "Confirm product-contact surface finish meets the design basis (ASME BPE commonly specifies Ra ≤ 0.5 µm for product contact - confirm the design spec).",
      "Verify dead-leg elimination / L/D limits on product-contact piping per the design.",
      "Confirm drainability and slope of product-contact lines.",
      "Record finish and dead-leg verification against the design basis."
    ],
    accept: "Product-contact finish and dead-leg requirements meet the design basis (e.g. ASME BPE).",
    link: "https://www.asme.org/codes-standards/find-codes-standards/asme-bpe-bioprocessing-equipment", linkLabel: "ASME BPE" },
  "IQ:1": { use: "iq-vendor-docs", title: "Verify material certificates/traceability for wetted components",
    steps: [
      "Identify all wetted components (vessel, piping, seals, single-use bag).",
      "Obtain material certificates (e.g. SS316L mill certs, single-use bag film/extractables documentation).",
      "Confirm alloy/film and finish match the design spec.",
      "File certificates and traceability records."
    ],
    accept: "Material certificates/traceability on file for all wetted components." },
  "IQ:2": { use: "iq-utilities", title: "Verify utilities: steam, WFI, process gases, CIP per URS",
    steps: [
      "List required utilities from the URS: clean/process steam, WFI, process gases (air, O₂, CO₂, N₂), CIP supply.",
      "Confirm each is connected, correctly sized, and labeled.",
      "Record supplied values (pressures, gas purity) against the URS.",
      "Confirm point-of-use filters/regulators where required."
    ],
    accept: "All utilities connected and within URS spec." },
  "IQ:3": { use: "iq-components", title: "Verify vessel volume, config, single-use vs multi-use vs PO/URS" },
  "IQ:4": { use: "iq-components", title: "Confirm as-built drawings (P&ID, GA) and datasheets match install" },
  "IQ:5": { use: "iq-instrument-inventory", title: "Confirm temp/pH/DO/pressure/level/foam/agitation/gas loops calibrated",
    accept: "All control/recording loops (temp, pH, DO, pressure, level, foam, agitation, gas flow) identified and calibrated traceable." },
  "IQ:6": { use: "iq-components", title: "Verify impeller/agitator, shaft seal, sparger config per design" },
  "IQ:7": { use: "iq-components", title: "Confirm jacket / temperature-control system connected and rated" },
  "IQ:8": { title: "Verify safety features (relief/rupture disc, interlock, E-stop)",
    steps: [
      "Confirm pressure relief / rupture disc rating matches the design pressure.",
      "Verify the over-pressure interlock hardware is present.",
      "Confirm the emergency stop is installed and wired.",
      "Record relief set pressure and certification (functional challenge in OQ)."
    ],
    accept: "Relief/rupture disc, over-pressure interlock, and E-stop installed and correctly rated." },
  "IQ:9": { use: "iq-components", title: "Confirm exhaust/vent filter and condenser installed; integrity-test connections" },
  "IQ:10": { use: "iq-instrument-inventory", title: "Verify control system/automation installed, I/O checked, software recorded (CSV)",
    accept: "Automation installed, I/O verified, software version and config recorded for CSV." },
  "IQ:11": { title: "Confirm lubricants / non-contact fluids documented and compatible",
    steps: [
      "List lubricants and non-product-contact fluids.",
      "Confirm each is the specified grade and compatible with the duty.",
      "Collect documentation.",
      "File in the IQ package."
    ],
    accept: "Non-contact fluids documented as compatible." },
  "IQ:12": { use: "iq-vendor-docs", title: "Verify spare parts, manuals, turnover package received" },

  "OQ:0": { title: "Temperature loop",
    materials: ["Calibrated reference temperature sensor"],
    steps: [
      "Set the jacket/TCU to setpoints across the operating range (setpoints are process-defined - do not assume; e.g. ~37 °C for mammalian, but confirm).",
      "Confirm the loop drives to and holds each setpoint against a calibrated reference.",
      "Verify ramp rates meet the process requirement.",
      "Record control stability and offset."
    ],
    accept: "Temperature loop holds the process-defined setpoints across the range and meets ramp requirements." },
  "OQ:1": { title: "pH loop",
    materials: ["NIST-traceable buffers", "Acid/base/CO₂ control"],
    steps: [
      "Standardize the pH probe with bioprocess buffers (commonly 7.00 + 4.00 or 7.00 + 9.21 - confirm method).",
      "Confirm probe accuracy against the standardized buffers.",
      "Challenge pH control (acid/base/CO₂) and confirm it drives to and holds the setpoint (process-defined - do not assume).",
      "Record control response and offset."
    ],
    accept: ["PH probe accurate after standardization.","Control holds the process-defined setpoint."] },
  "OQ:2": { title: "Dissolved oxygen (DO) loop (two-point)",
    materials: ["N₂ (or sulfite) for zero", "Air for span"],
    steps: [
      "Zero the DO probe: sparge with N₂ (or use sodium sulfite) until the reading stabilizes at 0% (~10–30 min).",
      "Span at 100%: sparge with air-saturated medium until stable (Hamilton/Mettler method).",
      "Challenge the DO cascade (gas flow, agitation, O₂ enrichment) and confirm it holds the setpoint band (process-defined, commonly 30–40% - do not assume).",
      "Record both calibration points and control response."
    ],
    accept: ["DO two-point calibration (0% / 100%) valid.","Cascade holds the process-defined DO setpoint."],
    link: "https://www.hamiltoncompany.com/process-analytics", linkLabel: "Hamilton - DO calibration" },
  "OQ:3": { use: "speed-verification", title: "Agitation: RPM accuracy and motor direction",
    steps: [
      "Compare displayed agitation RPM against a calibrated tachometer across the range.",
      "Confirm motor direction is correct.",
      "Record deviation at each setpoint.",
      "Confirm within the data-sheet/URS tolerance."
    ],
    accept: ["Agitation RPM within tolerance across the range.","Correct motor direction."] },
  "OQ:4": { title: "Gas delivery (mass-flow controllers)",
    materials: ["Calibrated flow reference"],
    steps: [
      "For each gas (air, O₂, CO₂, N₂), set representative flows.",
      "Compare set vs actual flow against a calibrated reference.",
      "Confirm each MFC is within tolerance.",
      "Record deviations."
    ],
    accept: "Each gas MFC delivers set vs actual flow within tolerance." },
  "OQ:5": { title: "Pressure and level / foam",
    steps: [
      "Verify pressure control and relief operate at configured setpoints.",
      "Verify level sensing reports correctly across the range.",
      "Challenge foam sensing/antifoam response.",
      "Confirm each operates at its configured setpoint."
    ],
    accept: "Pressure control/relief, level, and foam sensing operate at configured setpoints." },
  "OQ:6": { title: "Alarms and interlocks",
    steps: [
      "Provoke high/low alarms on the critical loops (temp, pH, DO, pressure).",
      "Challenge safety interlocks (over-pressure, agitation fault).",
      "Confirm each activates and the unit responds as designed.",
      "Document the method used; actual result must equal expected."
    ],
    accept: "All configured alarms and safety interlocks activate and respond as designed." },
  "OQ:7": { title: "Vessel integrity (pressure/leak or single-use pre-use test)",
    steps: [
      "Multi-use: run a pressure/leak test on the assembled vessel per the design basis.",
      "Single-use: run the pre-use integrity test on the installed bag/assembly.",
      "Confirm the result meets the leak/integrity acceptance.",
      "Record the test conditions and result."
    ],
    accept: "Vessel pressure/leak (multi-use) or pre-use integrity (single-use) test passes per the design basis." },

  "PQ:0": { title: "SIP (multi-use): sterilize-in-place cycle",
    materials: ["Calibrated thermocouples", "BIs (G. stearothermophilus) per protocol"],
    steps: [
      "Place thermocouples (and BIs where used) at identified cold spots (e.g. drain, dip tubes, dead legs).",
      "Run the SIP cycle.",
      "Confirm all cold spots reach the sterilization conditions / F₀ target (process-defined - do not assume).",
      "Confirm BI kill where biological challenge is used; repeat for the required consecutive runs."
    ],
    accept: ["All cold spots meet the process-defined sterilization conditions.","BI kill (if used) across required runs."],
    link: "https://www.pda.org/", linkLabel: "PDA TR1 - moist heat" },
  "PQ:1": { title: "Mixing / mass-transfer (blend time, kLa)",
    steps: [
      "Measure blend/mixing time using a tracer or conductivity step at representative conditions.",
      "Measure the oxygen mass-transfer coefficient (kLa) by the gassing-out (or dynamic) method.",
      "Confirm blend time and kLa meet the process requirement (process-defined - do not assume).",
      "Record conditions (agitation, gas flow) and results."
    ],
    accept: "Blend time and kLa meet the process-defined requirement at the qualified conditions." },
  "PQ:2": { title: "Process simulation / media run",
    steps: [
      "Operate a representative batch (media run or process simulation) under load.",
      "Confirm all loops (temp, pH, DO, pressure, agitation, gas) hold setpoint under realistic demand.",
      "Confirm control performance and any excursions are within acceptance.",
      "Run the required number of consecutive qualifying runs."
    ],
    accept: "All loops hold the process-defined setpoints under representative load across the required runs." },
  "PQ:3": { title: "Cleaning (CIP) performance where applicable",
    steps: [
      "Run the CIP cycle on the soiled vessel/system.",
      "Sample by swab/rinse at worst-case locations.",
      "Confirm residue/cleaning results meet the validated acceptance (MACO/visual/analytical - process-defined).",
      "Confirm reproducibility across the required runs."
    ],
    accept: "CIP meets the validated cleaning acceptance at worst-case locations across required runs." }
};

const HOWTO_stability = {
  "IQ:0": { use: "iq-components", title: "Verify make/model/serial, range, and capacity vs PO/URS" },
  "IQ:1": { use: "iq-location", title: "Verify power, leveling, clearances, and humidity water supply" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm T and RH sensors (and mapping sensors) calibrated & traceable",
    accept: "Controller and reference temperature AND humidity sensors calibrated, traceable, and rated for the operating range." },
  "IQ:3": { use: "iq-components", title: "Confirm humidity system, circulation, and shelving installed" },
  "IQ:4": { use: "iq-backup-alarm", title: "Verify backup power and local + remote/BMS alarm contacts" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { use: "cal-verify" },
  "OQ:1": { use: "temp-map-empty",
    title: "Empty-chamber temperature AND humidity mapping at the study setpoint",
    accept: ["Setpoint/tolerance per the study protocol / ICH condition - do not assume (25°C/60%RH, 40°C/75%RH, 30°C/65%RH are examples)","Map T and RH together (volume-scaled grid, ≥24 h)","Uniformity and stability within the protocol band.","Hot/cold/dry spots identified."],
    extraSteps: ["Place humidity sensors alongside temperature sensors at each grid point.", "Assess RH uniformity and stability against the protocol band as well as temperature."] },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify high/low temperature AND humidity alarms at configured limits",
    accept: "Temperature and humidity alarms activate at the configured setpoints and route locally and remotely." },
  "OQ:3": { use: "door-open-recovery", title: "Door-open recovery for both temperature and humidity",
    accept: "After a defined door-open interval, both T and RH return to the protocol band within the qualified recovery time." },
  "OQ:4": { use: "control-functions" },
  "OQ:5": { use: "power-recovery" },
  "OQ:6": { use: "monitoring-record", title: "Confirm logging records T and RH at the required interval vs reference" },

  "PQ:0": { use: "temp-map-loaded", title: "Loaded mapping with representative samples over a defined period",
    accept: ["Setpoint/tolerance per the study protocol / ICH condition - do not assume.","Loaded chamber holds T and RH within the protocol band over the period including routine access."] },
  "PQ:1": { use: "monitor-sensor-placement", title: "Place routine T/RH monitoring sensor(s) at the mapped worst-case point" },
  "PQ:2": { use: "loading-pattern" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_mufflefurnace = {
  "IQ:0": { use: "iq-location", title: "Verify dedicated power, leveling, and heat-rejection clearances" },
  "IQ:1": { use: "iq-components", title: "Confirm chamber/muffle, elements, door, and ventilation installed" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm high-temp thermocouples and controller calibrated & traceable",
    accept: "Thermocouples and controller calibrated, traceable, and rated for the high operating temperature." },
  "IQ:3": { use: "iq-instrument-inventory" },
  "IQ:4": { use: "iq-vendor-docs" },

  "OQ:0": { use: "cal-verify" },
  "OQ:1": { use: "heat-distribution", title: "Empty-chamber heat distribution at the operating setpoint(s)",
    accept: ["Setpoint is process/method-defined - do not assume (550/600/800°C are common ashing setpoints; confirm per method)","All sensors within the protocol band at the qualified setpoint.","Cold spot identified."] },
  "OQ:2": { use: "over-temp-timer", title: "Verify over-temperature protection and cycle timer/controller" },
  "OQ:3": { use: "control-functions" },
  "OQ:4": { use: "equilibration-recovery", title: "Verify ramp-up / equilibration time to the operating band" },
  "OQ:5": { use: "record-printout" },

  "PQ:0": { use: "heat-penetration-load", title: "Loaded performance: confirm crucible positions reach time-at-temperature",
    accept: ["Time-at-temperature requirement is method/process-defined - do not assume.","All crucible positions meet it across the required runs."] },
  "PQ:1": { use: "loading-pattern", title: "Define each crucible load pattern to be qualified" },
  "PQ:2": { use: "reproducibility-runs" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_hotplate = {
  "IQ:0": { use: "iq-location", title: "Verify power, leveling, and a stable heat-tolerant surface" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm temperature reference (and tachometer) available & traceable",
    accept: "A calibrated temperature reference and any speed reference are available and traceable." },
  "IQ:2": { use: "iq-instrument-inventory" },
  "IQ:3": { use: "iq-vendor-docs" },

  "OQ:0": { title: "Verify temperature accuracy against a calibrated reference",
    steps: [
      "Place a calibrated temperature probe in a representative vessel/medium on the plate.",
      "Set the plate to each process setpoint and allow it to stabilize.",
      "Compare the measured medium temperature to the displayed/target value.",
      "Record the deviation at each setpoint."
    ],
    accept: "Surface/medium temperature within the data-sheet/URS tolerance at the process setpoints (setpoint is process-defined - do not assume)." },
  "OQ:1": { title: "Verify temperature stability over time",
    steps: [
      "Hold a representative setpoint with the reference probe in the medium.",
      "Log temperature over a representative dwell.",
      "Assess the peak-to-peak variation against the URS band."
    ],
    accept: "Holds within the URS stability band over time at the process setpoint." },
  "OQ:2": { use: "speed-verification", title: "Stir-speed verification (if applicable): displayed vs measured RPM",
    accept: "Displayed stir speed within the data-sheet tolerance at representative settings." },
  "OQ:3": { use: "cal-verify", title: "Confirm the temperature reference is within tolerance before testing" },
  "OQ:4": { title: "Verify over-temperature / safety cutoff where fitted",
    steps: ["Identify the over-temperature protection feature from the manual.","Where safe and testable, confirm it interrupts heating at its setpoint.","Record the result."],
    accept: "Over-temperature protection interrupts heating as designed." },

  "PQ:0": { title: "Confirm performance under representative use",
    steps: ["Run a routine task with the representative vessel/medium.","Confirm the plate holds the process temperature and stir condition.","Record results."],
    accept: "Holds the process-defined temperature and stir conditions under representative use." },
  "PQ:1": { title: "Define routine temperature-check frequency and tolerance",
    steps: ["Set a periodic verification interval based on use and risk.","Define the check method and tolerance."],
    accept: "Routine check frequency and tolerance defined." }
};

const HOWTO_homogenizer = {
  "IQ:0": { use: "iq-components", title: "Verify power, stable mounting, and correct probe/impeller" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm tachometer and timer references available & traceable",
    accept: "Calibrated, traceable tachometer and timer reference available." },
  "IQ:2": { use: "iq-components", title: "Record make/model/serial and rotor/probe type vs spec" },
  "IQ:3": { use: "iq-instrument-inventory" },
  "IQ:4": { use: "iq-vendor-docs" },

  "OQ:0": { use: "speed-verification", title: "Speed verification: displayed vs measured RPM across the range",
    accept: "Displayed speed within the data-sheet tolerance across the operating range." },
  "OQ:1": { use: "timer-verification", title: "Timer verification (if applicable): set vs measured time" },
  "OQ:2": { title: "Verify safety interlocks / overload cutout where fitted",
    steps: ["Identify guards/interlocks (probe guard, overload) from the manual.","Confirm each activates as designed where safe to test.","Record results."],
    accept: "Safety interlocks/cutouts activate as designed." },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "control-functions", title: "Verify program recall / profile control (if programmable)" },

  "PQ:0": { title: "Confirm the mixing/homogenization endpoint with a representative batch",
    steps: [
      "Run the representative process (speed, time, volume) on a representative batch.",
      "Sample and measure the endpoint attribute (e.g. blend uniformity, particle/droplet size).",
      "Compare to the process requirement."
    ],
    accept: "Mixing endpoint (blend uniformity, particle/droplet size) meets the process requirement - endpoint is process-defined, do not assume." },
  "PQ:1": { use: "loading-pattern", title: "Define the representative load/protocol to be qualified" },
  "PQ:2": { title: "Define routine speed/time verification frequency",
    steps: ["Set a periodic verification interval based on use and risk.","Trend the results."],
    accept: "Routine verification frequency defined and results trended." }
};

const HOWTO_lyophilizer = {
  "IQ:0": { use: "iq-utilities", title: "Verify utilities (power, refrigeration, vacuum, clean steam/CIP) vs URS" },
  "IQ:1": { use: "iq-components", title: "Verify make/model/serial, shelf area, and condenser capacity vs PO/URS" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm shelf/product/pressure/condenser sensors calibrated & traceable",
    accept: "Shelf/product thermocouples and pressure (capacitance manometer / Pirani) sensors calibrated, traceable, and range-appropriate." },
  "IQ:3": { use: "iq-components", title: "Confirm shelves, refrigeration, vacuum, and condenser installed" },
  "IQ:4": { use: "iq-backup-alarm", title: "Verify relief, over-temperature, and (sterile) SIP interlocks installed" },
  "IQ:5": { use: "iq-instrument-inventory" },
  "IQ:6": { use: "iq-vendor-docs" },

  "OQ:0": { use: "cal-verify" },
  "OQ:1": { use: "heat-distribution",
    title: "Shelf temperature mapping: uniformity across the shelf stack + ramp rates",
    accept: ["Shelf setpoints/ramps are cycle-defined - do not assume.","Uniformity across shelves within the protocol band at the representative setpoints.","Ramp rates meet the requirement."],
    extraSteps: ["Distribute sensors across every shelf and across each shelf surface.","Verify minimum and maximum ramp rates between setpoints."] },
  "OQ:2": { use: "vacuum-control",
    title: "Vacuum control and chamber leak rate (pressure-rise / leak-up)",
    accept: ["Reaches and holds the cycle-defined target pressure.","Leak-up (pressure-rise) rate within the URS limit."],
    extraSteps: ["Isolate the chamber at target vacuum and measure the pressure-rise (leak-up) rate over a set time."] },
  "OQ:3": { title: "Condenser performance: target temperature and capacity",
    steps: ["Run the condenser to its target temperature.","Confirm it reaches and holds the data-sheet temperature.","Verify ice/capacity per the cycle where testable."],
    accept: "Condenser reaches its target temperature and ice-capacity per the data sheet/cycle." },
  "OQ:4": { use: "alarm-challenge-tcu", title: "Alarm/interlock challenge: over-temp, vacuum-loss, door, SIP",
    accept: "Over-temperature, vacuum-loss, door, and (sterile) SIP alarms/interlocks activate at configured setpoints and respond as designed." },
  "OQ:5": { use: "control-functions", title: "Verify cycle/recipe selection, phase sequencing, and access levels" },
  "OQ:6": { use: "record-printout", title: "Confirm record captures shelf T, product T, and pressure vs controller" },

  "PQ:0": { use: "reproducibility-runs",
    title: "Loaded cycle with representative product: confirm endpoint and attributes",
    accept: ["Cycle and acceptance (residual moisture, cake appearance) are product/process-defined - do not assume.","All product positions meet the requirement across the required runs."] },
  "PQ:1": { use: "endotoxin-challenge",
    title: "SIP (sterile units): sterilization conditions at all cold spots",
    accept: "All cold spots meet the process-defined sterilization conditions / F₀ target across the required runs.",
    steps: [
      "For sterile lyophilizers, run the sterilize-in-place (SIP) cycle with sensors at the identified cold spots (chamber, condenser, valves).",
      "Confirm every cold spot reaches and holds the sterilization conditions for the required time.",
      "Calculate delivered lethality (F₀) where applicable.",
      "Repeat for the required number of runs."
    ] },
  "PQ:2": { use: "reproducibility-runs", title: "Confirm reproducibility across the required consecutive runs" },
  "PQ:3": { use: "requalification" }
};

const HOWTO_cleanroom = {
  "IQ:0": { use: "iq-components", title: "Verify HVAC, HEPA, finishes, doors, interlocks, controls installed per design" },
  "IQ:1": { use: "iq-vendor-docs", title: "Confirm HEPA certificates, finishes, and as-built drawings match design" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm particle counter, photometer, DP gauges calibrated & traceable",
    accept: "Particle counter, photometer/aerosol generator, and pressure instruments calibrated and traceable for ISO 14644-3 testing." },
  "IQ:3": { use: "iq-backup-alarm", title: "Verify the EM/BMS monitoring and alarm system installed" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Airborne particle count (at-rest): classify to the target ISO class",
    steps: [
      "Determine the minimum number and location of sampling points per ISO 14644-1 for the room area.",
      "Sample airborne particles (≥0.5 µm and ≥5.0 µm) at each location at-rest.",
      "Compare the concentrations to the target ISO class limit.",
      "Calculate the result per ISO 14644-1 and document."
    ],
    accept: ["Target ISO class is process-defined - do not assume.","Counts meet the class limit at-rest (e.g. ISO 5 ≤ 3,520 particles ≥0.5 µm/m³ - example; confirm class)."],
    link: "https://www.iso.org/standard/53394.html", linkLabel: "iso.org - ISO 14644-1" },
  "OQ:1": { title: "HEPA filter integrity (installed-filter leak test)",
    steps: [
      "Introduce a challenge aerosol upstream of the installed HEPA filters.",
      "Scan the downstream face and frame with a photometer per ISO 14644-3.",
      "Identify any leak exceeding the acceptance penetration.",
      "Repair/reseal and re-scan any failing area."
    ],
    accept: "No leak exceeding the acceptance (commonly ≤ 0.01 % penetration of the upstream challenge - confirm protocol) across the filter face and frame.",
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:2": { title: "Airflow velocity / volume and air-change rate",
    steps: [
      "Measure supply airflow velocity/volume at terminals or the face of unidirectional zones.",
      "Calculate the air-change rate per room volume.",
      "Compare to the design/URS for the target grade."
    ],
    accept: "Air-change rate and velocity meet the design/URS for the grade (e.g. ~ISO 7 often designed ~60–90 ACH - example; confirm).",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:3": { title: "Pressure cascade between adjacent zones",
    steps: [
      "Measure differential pressure between each adjacent classified zone with doors closed.",
      "Confirm the cascade direction (cleaner zone positive to dirtier).",
      "Compare each differential to the design."
    ],
    accept: ["Cascade direction correct.","Differential within design (commonly ~10–15 Pa between adjacent grades - example; confirm)."],
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:4": { title: "Airflow visualization (smoke study)",
    steps: [
      "Generate visible smoke at critical points (especially aseptic/grade A zones).",
      "Record airflow patterns on video per Annex 1.",
      "Confirm air sweeps critical zones without turbulence, dead spots, or ingress."
    ],
    accept: ["Airflow patterns sweep critical zones without turbulence or ingress.","Documented with video per Annex 1."],
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:5": { title: "Recovery test after a particle challenge",
    steps: [
      "Raise the particle concentration with a challenge (e.g. to ~100× the class limit).",
      "Start timing and measure the decay back toward the class limit.",
      "Record the recovery time or the 100:1 decay time."
    ],
    accept: "Recovery to the class limit within the protocol time (commonly ~15–20 min or a 100:1 decay - confirm).",
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:6": { use: "alarm-challenge-tcu", title: "Temperature, humidity, and alarm function verification",
    accept: ["Temperature/humidity within the design band.","Alarms activate at configured limits."] },

  "PQ:0": { title: "In-operation particle counts (personnel + process present)",
    steps: [
      "Run the room with personnel and process activity representative of normal operation.",
      "Sample airborne particles at the ISO 14644-1 locations in-operation.",
      "Confirm the class is maintained dynamically."
    ],
    accept: ["Class maintained in-operation per ISO 14644-1.","Grade-appropriate limits met with personnel/process running."],
    link: "https://www.iso.org/standard/53394.html", linkLabel: "iso.org - ISO 14644-1" },
  "PQ:1": { title: "Microbial monitoring (viable air + surfaces)",
    steps: [
      "Sample viable airborne microbes (active air + settle plates) and surfaces at risk-based locations.",
      "Test at-rest and in-operation per the Annex 1 grade.",
      "Compare to the grade limits (A/B/C/D)."
    ],
    accept: ["Viable counts within the Annex 1 grade limits at-rest and in-operation.","Locations risk-based."],
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "PQ:2": { title: "Define the contamination control strategy and requalification plan",
    steps: [
      "Document the holistic contamination control strategy (CCS) per Annex 1 (2022).",
      "Define the routine EM plan (locations, frequency, limits, alert/action).",
      "Set the requalification interval (commonly annual/biannual per ISO 14644-2)."
    ],
    accept: "CCS, routine monitoring plan, and requalification interval defined and risk-justified.",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" }
};

const HOWTO_hvac = {
  "IQ:0": { use: "iq-components", title: "Verify AHUs, ducting, dampers, HEPA terminals, controls per design" },
  "IQ:1": { use: "iq-components", title: "Confirm coils, humidification, and filter banks per the URS" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm DP, airflow, and T/RH instruments calibrated & traceable",
    accept: "Pressure, airflow, and T/RH instruments calibrated and traceable." },
  "IQ:3": { use: "iq-backup-alarm", title: "Verify zone/duct layout and monitoring/alarm infrastructure" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Airflow volume and air-change rate per zone",
    steps: ["Measure supply airflow volume at each terminal/zone.","Calculate the air-change rate per room volume.","Compare to the design/URS for the grade."],
    accept: "Air-change rate per zone meets the design/URS for the grade - do not assume (e.g. ~ISO 7 often ~60–90 ACH; confirm).",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:1": { title: "Pressure cascade between zones",
    steps: ["Measure inter-zone differential pressures with doors closed.","Confirm direction and magnitude vs design."],
    accept: ["Cascade direction correct.","Differential within design (commonly ~10–15 Pa - example; confirm)."],
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:2": { title: "HEPA terminal integrity (installed-filter leak test)",
    steps: ["Challenge each installed HEPA terminal with aerosol upstream.","Scan downstream with a photometer.","Repair/re-scan any leak over the limit."],
    accept: "No leak exceeding the acceptance (commonly ≤ 0.01 % penetration - confirm) across each terminal.",
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:3": { use: "temp-map-empty", title: "Temperature and humidity control across the served space",
    accept: "T/RH held within the design band across the served space." },
  "OQ:4": { use: "alarm-challenge-tcu", title: "Alarm/interlock challenge (low airflow, DP excursion, filter status)",
    accept: "Airflow/DP/filter alarms and interlocks activate at configured setpoints." },
  "OQ:5": { use: "power-recovery", title: "Failure-and-restart: recover design conditions after a simulated trip" },

  "PQ:0": { use: "temp-map-loaded",
    title: "Sustained performance over a representative period (and seasons)",
    accept: "Design air-change, cascade, and T/RH maintained over the period (and seasonal extremes where relevant) in normal operation." },
  "PQ:1": { use: "monitoring-record", title: "Confirm the monitoring system trends critical parameters and alarms" },
  "PQ:2": { use: "requalification" }
};

const HOWTO_watersystem = {
  "IQ:0": { use: "iq-components", title: "Verify generation, storage tank, and distribution loop per URS / P&ID" },
  "IQ:1": { use: "iq-components",
    title: "Verify materials/welding: SS316L, surface finish, slope, dead-leg control",
    accept: ["Product-contact SS316L.","Surface finish per design (Ra ≤ 0.6 µm typical - confirm)","No dead legs beyond the design limit.","Loop self-draining.","Weld/passivation records on file."],
    steps: ["Verify material certificates (SS316L) for tank, piping, and gaskets.","Check surface-finish records (Ra) against the design.","Review weld and passivation records / borescope where required.","Confirm slope and absence of dead legs from the P&ID / walk-down."] },
  "IQ:2": { use: "iq-calibration-certs",
    title: "Confirm conductivity, TOC, temperature, flow instruments calibrated",
    accept: "On-line conductivity (USP <645>) and TOC (USP <643>) analyzers and process instruments calibrated and traceable." },
  "IQ:3": { use: "iq-components", title: "Verify vent filter, heat exchanger, and sanitization provisions installed" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Conductivity measurement (USP <645> three-stage procedure)",
    steps: [
      "Verify the on-line conductivity reading against a calibrated reference across the range.",
      "Confirm the Stage 1 in-line evaluation against the temperature-based limit.",
      "Confirm the Stage 2/3 off-line procedure is available if Stage 1 is exceeded."
    ],
    accept: ["Stage 1 in-line limit 1.3 µS/cm at 25°C for PW and WFI.","If exceeded, Stages 2/3 resolve the cause.","Verified across the range."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <645>" },
  "OQ:1": { title: "TOC measurement (USP <643>)",
    steps: ["Verify the TOC analyzer against a calibrated standard.","Confirm system suitability per USP <643>.","Compare results to the limit."],
    accept: ["TOC ≤ 500 ppb (0.5 mg/L) for both PW and WFI.","Analyzer verified across the range."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <643>" },
  "OQ:2": { title: "Sanitization function and (WFI) hot-loop temperature",
    steps: ["Run the sanitization cycle (thermal/chemical/ozone) per design.","Confirm the cycle reaches its defined parameters throughout the loop.","For WFI hot loops, confirm the loop maintains the design temperature."],
    accept: ["Sanitization delivers its defined cycle.","WFI hot loops maintain the design temperature (commonly >80°C to control endotoxin - confirm design)."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" },
  "OQ:3": { use: "alarm-challenge-tcu",
    title: "Vent filter integrity and quality alarm/interlock function",
    accept: ["Vent filter integrity confirmed.","Conductivity/TOC/temperature/level alarms and divert-to-drain interlocks activate at limits."] },
  "OQ:4": { use: "control-functions", title: "Verify control functions, recording interval, and data integrity" },

  "PQ:0": { title: "Phase 1 (~2–4 weeks): intensive daily sampling, no production use",
    steps: [
      "Sample daily at the generation outlet and EVERY point of use.",
      "Test all attributes: conductivity, TOC, microbial (and endotoxin for WFI).",
      "Do not use the water for production during this phase.",
      "Confirm every result is within limits to establish baseline performance."
    ],
    accept: ["Daily sampling at all points for all attributes within limits.","Baseline established.","Water not used for production."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" },
  "PQ:1": { title: "Phase 2 (~2–4 weeks): continued intensive sampling, controlled use",
    steps: ["Continue the same sampling frequency as Phase 1.","Operate per SOP; water may be used for production if Phase 1 passed.","Confirm continued control."],
    accept: ["Same frequency as Phase 1.","Demonstrates control under SOP operation.","Water may be used if Phase 1 was satisfactory."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" },
  "PQ:2": { title: "Phase 3 (~1 year): long-term sampling across seasons",
    steps: ["Move to the routine (reduced) sampling plan across all points over ~12 months.","Capture seasonal variation.","Confirm sustained compliance and set the routine monitoring program."],
    accept: ["Reduced routine sampling over ~12 months shows the system stays in spec across seasons.","Routine program set."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" },
  "PQ:3": { title: "WFI only: endotoxin and microbial limits throughout",
    steps: ["For WFI, test bacterial endotoxin and microbial count at the required points and frequency.","Confirm limits are met throughout the PQ."],
    accept: ["WFI: endotoxin NMT 0.25 EU/mL.","Microbial NMT 10 CFU/100 mL.","Met throughout the PQ."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" }
};

const HOWTO_compressedair = {
  "IQ:0": { use: "iq-components", title: "Verify compressor/generator, dryers, filters, receiver, distribution per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm point-of-use filters and ratings match design for each use point" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm oil, dewpoint, and particle instruments calibrated & traceable",
    accept: "Oil, dewpoint, and particle instruments calibrated and traceable for ISO 8573 testing." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Oil content (total hydrocarbons) per ISO 8573-2/-5",
    steps: ["Sample at representative use points per ISO 8573-2 (aerosol) / -5 (vapour).","Measure total oil content.","Compare to the target ISO 8573 oil class."],
    accept: "Oil content meets the process-defined ISO 8573 class - do not assume (product-contact often Class 1; confirm per use point).",
    link: "https://www.iso.org/standard/46418.html", linkLabel: "iso.org - ISO 8573-1" },
  "OQ:1": { title: "Water content / pressure dewpoint per ISO 8573-3",
    steps: ["Measure pressure dewpoint at representative use points.","Compare to the target ISO 8573 humidity class."],
    accept: ["Pressure dewpoint meets the process-defined ISO 8573 humidity class - do not assume.","Confirm per use point."],
    link: "https://www.iso.org/standard/46418.html", linkLabel: "iso.org - ISO 8573-1" },
  "OQ:2": { title: "Particle content per ISO 8573-4",
    steps: ["Sample solid particles at representative use points.","Compare to the target ISO 8573 particle class."],
    accept: "Particle content meets the process-defined ISO 8573 particle class - confirm per use point.",
    link: "https://www.iso.org/standard/46418.html", linkLabel: "iso.org - ISO 8573-1" },
  "OQ:3": { use: "control-functions", title: "Verify pressure control, alarms, and dryer/regeneration function" },
  "OQ:4": { title: "Microbial sampling at product-contact use points (where applicable)",
    steps: ["At product-contact points, sample for microbial content using a validated method.","Compare to the site/risk-based limit."],
    accept: "Microbial counts at product-contact points within the site/risk-based limit (process-defined)." },

  "PQ:0": { title: "Sustained quality at all use points over a representative period",
    steps: ["Sample all use points over a representative period under normal demand.","Confirm oil, water, and particle classes are maintained."],
    accept: "Oil, water, and particle classes maintained at all use points over the period under normal demand.",
    link: "https://www.iso.org/standard/46418.html", linkLabel: "iso.org - ISO 8573-1" },
  "PQ:1": { title: "Define routine sampling points, frequency, and limits",
    steps: ["Set the routine sampling points and frequency based on risk.","Define the limits per use point."],
    accept: "Routine sampling points, frequency, and limits defined." },
  "PQ:2": { use: "requalification" }
};

const HOWTO_bsc = {
  "IQ:0": { use: "iq-location", title: "Verify type, location away from drafts/traffic, leveling, and power" },
  "IQ:1": { use: "iq-components", title: "Confirm supply and exhaust HEPA filters and blower installed" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm anemometer and photometer/aerosol generator calibrated",
    accept: "Anemometer and photometer/aerosol generator calibrated and traceable for NSF/ANSI 49 testing." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Downflow velocity across the work zone (NSF/ANSI 49)",
    steps: ["Measure vertical (downflow) velocity on the grid across the work zone.","Average the readings.","Compare to the manufacturer set point and NSF/ANSI 49 tolerance."],
    accept: "Average downflow velocity within the manufacturer set point and NSF/ANSI 49 tolerance (model-specific - confirm the data sheet, do not assume).",
    link: "https://www.nsf.org", linkLabel: "nsf.org - NSF/ANSI 49" },
  "OQ:1": { title: "Inflow / face velocity at the access opening",
    steps: ["Measure inflow velocity at the sash opening per NSF/ANSI 49 (direct or exhaust-volume method).","Compare to the NSF/ANSI 49 / manufacturer minimum."],
    accept: "Inflow velocity meets NSF/ANSI 49 / manufacturer minimum (commonly ~0.5 m/s ≈ 100 fpm for many Class II - example; confirm model).",
    link: "https://www.nsf.org", linkLabel: "nsf.org - NSF/ANSI 49" },
  "OQ:2": { title: "HEPA filter integrity (supply and exhaust)",
    steps: ["Challenge each HEPA filter with aerosol upstream.","Scan the downstream face and seal with a photometer.","Identify and remediate any leak over the limit."],
    accept: "No leak exceeding the acceptance (commonly ≤ 0.01 % penetration - confirm) across each filter face and seal.",
    link: "https://www.nsf.org", linkLabel: "nsf.org - NSF/ANSI 49" },
  "OQ:3": { title: "Airflow smoke pattern (containment / product protection)",
    steps: ["Generate smoke at the work opening and across the work zone.","Confirm the downflow split and a stable air curtain at the opening.","Confirm no escape or backflow."],
    accept: ["Smoke pattern shows correct downflow split and a stable air curtain.","No escape or backflow at the opening."],
    link: "https://www.nsf.org", linkLabel: "nsf.org - NSF/ANSI 49" },
  "OQ:4": { use: "alarm-challenge-tcu", title: "Verify alarms (low airflow / sash) and interlocks",
    accept: "Low-airflow and sash alarms/interlocks activate as designed." },
  "OQ:5": { title: "Site installation assessment / (LAF) work-zone ISO class",
    steps: ["After install/relocation, run the NSF/ANSI 49 site-installation tests.","For LAF hoods, classify the work-zone to its target ISO class per ISO 14644-1."],
    accept: ["LAF work-zone meets its target ISO class (commonly ISO 5 - confirm)","BSC site-installation tests pass per NSF/ANSI 49."] },

  "PQ:0": { title: "Confirm product/personnel protection in routine use",
    steps: ["Confirm velocities, HEPA integrity, and airflow pattern are maintained in routine use.","Recertify per the schedule."],
    accept: ["Velocities, HEPA integrity, and airflow pattern maintained in routine use.","Recertify per schedule."],
    link: "https://www.nsf.org", linkLabel: "nsf.org - NSF/ANSI 49" },
  "PQ:1": { title: "Define recertification frequency",
    steps: ["Set recertification triggers: annual, after HEPA replacement, after maintenance/relocation.","Document and risk-justify the interval."],
    accept: ["Recertification typically annual, after HEPA replacement, or after relocation.","Defined and risk-justified."],
    link: "https://www.nsf.org", linkLabel: "nsf.org - NSF/ANSI 49" }
};

const HOWTO_hplc = {
  "IQ:0": { use: "iq-components", title: "Verify each module (pump, autosampler, oven, detector) vs PO/URS" },
  "IQ:1": { use: "iq-utilities", title: "Verify utilities, bench space, drainage, and environment" },
  "IQ:2": { title: "Install and secure the data system (CDS)",
    steps: ["Install the chromatography data system and confirm version.","Configure unique-user accounts and access levels.","Enable and verify the audit trail (Part 11).","Confirm time/date sync and secure data storage."],
    accept: ["CDS installed.","Audit trail, unique-user access, and electronic-records controls configured per Part 11."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "IQ:3": { use: "iq-calibration-certs", title: "Confirm NIST-traceable AIQ standards and test column are in date",
    accept: ["AIQ reference standards (caffeine/holmium, test mix) are NIST-traceable and in date.","A prequalified test column is available."] },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Pump flow-rate accuracy",
    steps: ["Set a representative flow rate with the test column/restrictor in place.","Collect and weigh (or volumetrically measure) the eluent over a timed interval.","Calculate the actual flow rate and compare to the setpoint.","Repeat at additional flows if the SOP requires."],
    accept: "Flow accuracy within the SOP tolerance (commonly ±1% at the test flow - example; confirm) at the qualified flow rate(s).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:1": { title: "Gradient / proportioning accuracy and dwell volume",
    steps: ["Run the prescribed step-gradient test method (e.g. tracer in mobile phase B).","Measure the actual composition at each step from the detector trace.","Determine the system dwell (delay) volume from the gradient onset.","Compare to the SOP tolerance."],
    accept: ["Gradient step accuracy within the SOP tolerance.","Dwell volume characterized for the system."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:2": { title: "Detector wavelength accuracy and linearity",
    steps: ["Run a certified wavelength standard (e.g. caffeine/holmium) and confirm the peak wavelengths.","For DAD/UV, inject a linearity series and plot response vs concentration.","Compare wavelength error and R² to the SOP."],
    accept: ["Wavelength accuracy within the SOP tolerance (commonly ±1–2 nm - example; confirm)","Detector linearity R² meets the SOP (commonly ≥ 0.999 - example)."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:3": { title: "Autosampler injection precision and volume linearity",
    steps: ["Make replicate injections of a standard at a fixed volume.","Calculate the area %RSD (precision).","Inject across several volumes and confirm area vs volume linearity."],
    accept: ["Injection precision %RSD within the SOP limit across replicates.","Volume linearity across the tested range."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:4": { title: "Autosampler carryover",
    steps: ["Inject a high-concentration standard.","Immediately inject a blank.","Measure any analyte response in the blank as a % of the standard."],
    accept: "Carryover below the SOP limit (blank after a high-concentration injection).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:5": { title: "Column oven and autosampler tray temperature accuracy",
    steps: ["Place a calibrated probe at the column oven setpoint and compare to display.","For a refrigerated autosampler, verify tray temperature against a reference.","Record deviations."],
    accept: ["Column oven within the SOP tolerance (commonly ±1 °C of setpoint - example; confirm)","Autosampler tray within its tolerance."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:6": { use: "cal-verify", title: "Confirm AIQ standards/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic system suitability (SST) with a method/test mix",
    steps: ["Run the method's system-suitability injection sequence.","Evaluate resolution, repeatability (%RSD), tailing, and S/N.","Compare each to the method's <621> SST criteria."],
    accept: "System-suitability parameters (resolution, %RSD, tailing, S/N) meet the method's <621> criteria - method/product-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <621>/<1058>" },
  "PQ:1": { title: "Confirm performance against intended methods and qualified range",
    steps: ["Run the laboratory's intended method(s).","Confirm performance within the qualified operating range (flow, wavelength, temperature).","Do not operate outside the qualified range."],
    accept: ["Performance demonstrated with the intended method(s) within the qualified range.","Do not operate outside it."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "PQ:2": { use: "requalification", title: "Define routine SST, PM, and requalification frequency" }
};

const HOWTO_gc = {
  "IQ:0": { use: "iq-components", title: "Verify GC, detector(s), injector, and gas supplies vs PO/URS" },
  "IQ:1": { use: "iq-utilities", title: "Verify carrier/make-up/detector gas lines, traps, and purity" },
  "IQ:2": { title: "Install and secure the data system (CDS)",
    steps: ["Install the data system and confirm version.","Configure access levels and enable the audit trail (Part 11).","Confirm secure data storage."],
    accept: ["CDS installed.","Audit trail and access controls configured per Part 11."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "IQ:3": { use: "iq-calibration-certs", title: "Confirm AIQ test mixture/standards are in date",
    accept: "AIQ test mixture/standards available, traceable, and in date." },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Oven temperature accuracy and ramp/program performance",
    steps: ["Compare the oven temperature to a calibrated reference at setpoints.","Run a temperature program and verify ramp rates and hold times.","Record deviations."],
    accept: ["Oven temperature within the SOP tolerance at setpoints.","The temperature program executes within tolerance - setpoints method-defined, do not assume."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:1": { title: "Carrier flow / pressure control accuracy",
    steps: ["Measure carrier flow (or inlet pressure) against a calibrated reference.","Compare across the operating range to the SOP."],
    accept: "Flow/pressure control within the SOP tolerance across the operating range.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:2": { title: "Injector performance and repeatability",
    steps: ["Make replicate injections of a standard.","Calculate area/height %RSD.","Confirm split ratio (if applicable) against the setpoint."],
    accept: ["Injection repeatability %RSD within the SOP limit.","Split ratio (if applicable) within tolerance."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:3": { title: "Detector response: linearity, sensitivity, and noise",
    steps: ["Inject a linearity series for the fitted detector (FID/TCD/ECD).","Plot response vs amount and assess linearity.","Measure baseline noise/sensitivity."],
    accept: ["Detector linearity meets the SOP.","Sensitivity/noise within limits for the fitted detector."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:4": { use: "cal-verify", title: "Confirm AIQ standards/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic system suitability (SST) with a method/test mix",
    steps: ["Run the method's SST sequence.","Evaluate resolution, repeatability, tailing, sensitivity.","Compare to the method's <621> criteria."],
    accept: "System-suitability parameters meet the method's <621> criteria - method/product-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <621>/<1058>" },
  "PQ:1": { title: "Confirm performance against intended methods and qualified range",
    steps: ["Run the intended method(s).","Confirm performance within the qualified range.","Do not operate outside the qualified range."],
    accept: "Performance demonstrated with the intended method(s) within the qualified range.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "PQ:2": { use: "requalification", title: "Define routine SST, PM, and requalification frequency" }
};

const HOWTO_dissolution = {
  "IQ:0": { use: "iq-components", title: "Verify apparatus type, identification, and vessel set vs PO/URS" },
  "IQ:1": { use: "iq-components", title: "Verify bath/heater, drive, and sampling system installed" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm tachometer, thermometer, and mechanical tools are traceable",
    accept: "Tachometer, temperature reference, and mechanical-calibration tools (centering, height, wobble, verticality) calibrated and traceable." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Rotation speed (RPM) accuracy",
    steps: ["Measure shaft RPM with a calibrated tachometer at each tested setpoint.","Compare to the setpoint.","Record the deviation."],
    accept: "RPM within USP <711> tolerance (commonly ±4% of setpoint - confirm) at the tested speeds.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <711>" },
  "OQ:1": { title: "Shaft / vessel centering",
    steps: ["Use the centering gauge at each position.","Measure the shaft centerline offset from the vessel axis at multiple points.","Compare to the limit."],
    accept: "Shaft centerline within USP <711> limit (commonly ≤ 2 mm at any point from the vessel axis - confirm).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <711>" },
  "OQ:2": { title: "Paddle/basket height above the vessel bottom",
    steps: ["Use the height gauge at each position.","Measure the distance from the paddle/basket to the inner vessel bottom.","Compare to the tolerance."],
    accept: "Height within USP <711> tolerance (commonly 25 ± 2 mm - confirm).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <711>" },
  "OQ:3": { title: "Vessel verticality and shaft wobble",
    steps: ["Check vessel verticality with the level/gauge.","Measure shaft/paddle wobble with the wobble meter while rotating.","Compare both to the limits."],
    accept: "Verticality and wobble within the USP <711> / Enhanced Mechanical Calibration limits (confirm).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <711>" },
  "OQ:4": { title: "Medium temperature accuracy and uniformity across vessels",
    steps: ["Bring the bath to the test temperature.","Measure the medium temperature in each vessel with a calibrated probe.","Confirm all vessels are within tolerance."],
    accept: "Medium temperature within tolerance across all vessels (commonly 37 ± 0.5 °C - confirm per monograph).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <711>" },
  "OQ:5": { title: "Vibration and sampling/timing function",
    steps: ["Measure vibration at the vessel plate against the mechanical-calibration limit.","Confirm the sampling and timing functions operate correctly."],
    accept: ["Vibration within the mechanical-calibration limit.","Sampling and timing functions operate correctly."] },
  "OQ:6": { use: "cal-verify", title: "Confirm reference tools/instruments within tolerance before testing" },

  "PQ:0": { title: "Performance Verification Test (PVT) with USP RS tablets",
    steps: ["Set up per the USP RS instructions (apparatus, RPM, medium, time points).","Run the PVT with the USP Reference Standard tablets.","Compare results to the USP-published acceptance range."],
    accept: "PVT results fall within the USP-published acceptance range for the reference standard - the holistic check that mechanical setup + operation perform together.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <711>" },
  "PQ:1": { title: "Confirm intended monograph conditions are within the qualified range",
    steps: ["List the intended monograph conditions (apparatus, RPM, medium, time).","Confirm each falls within the qualified apparatus range."],
    accept: "Intended monograph conditions fall within the qualified apparatus range." },
  "PQ:2": { use: "requalification", title: "Define routine mechanical-calibration / PVT and requalification frequency" }
};

const HOWTO_uvvis = {
  "IQ:0": { use: "iq-components", title: "Verify identification, lamp type(s), and wavelength range vs PO/URS" },
  "IQ:1": { title: "Install and secure the data system",
    steps: ["Install software and confirm version.","Configure access levels and audit trail (Part 11)."],
    accept: ["Software installed.","Audit trail and access controls configured per Part 11."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm holmium, dichromate, and stray-light references are in date",
    accept: "Certified wavelength (holmium), photometric (dichromate), and stray-light reference materials available, traceable, and in date." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Wavelength accuracy and repeatability",
    steps: ["Scan the holmium oxide reference.","Confirm the observed peak wavelengths against certified values.","Repeat to confirm repeatability."],
    accept: "Wavelength accuracy within the compendial tolerance (commonly ±1 nm UV / ±3 nm visible - example; confirm) at the certified peaks.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <857>" },
  "OQ:1": { title: "Photometric accuracy and linearity",
    steps: ["Measure the potassium dichromate standard at the defined wavelengths.","Compare absorbance to certified values.","Confirm linearity across the absorbance range."],
    accept: ["Photometric accuracy within the compendial tolerance across the absorbance range.","Linearity meets the SOP."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <857>" },
  "OQ:2": { title: "Stray light at the cut-off wavelength(s)",
    steps: ["Place the stray-light reference (cut-off solution/filter) in the beam.","Measure the response at the specified cut-off wavelength(s).","Compare to the limit."],
    accept: "Stray light below the compendial limit at the specified cut-off wavelength(s).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <857>" },
  "OQ:3": { title: "Spectral resolution / bandwidth",
    steps: ["Run the resolution check (e.g. toluene-in-hexane where applicable).","Compute the absorbance ratio / band separation.","Compare to the compendial requirement."],
    accept: "Resolution meets the compendial requirement (e.g. toluene/hexane absorbance ratio where used).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <857>" },
  "OQ:4": { title: "Baseline flatness/noise and scan function",
    steps: ["Run a baseline/blank scan across the range.","Assess noise and flatness against the data-sheet limit.","Confirm the scan function operates."],
    accept: ["Baseline noise/flatness within the data-sheet limit.","Scan function operates correctly."] },
  "OQ:5": { use: "cal-verify", title: "Confirm reference materials/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic check with a method control",
    steps: ["Measure a known control/standard with the intended method.","Confirm it reads within the method acceptance."],
    accept: "A known control/standard reads within the method's acceptance - method/product-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <857>" },
  "PQ:1": { title: "Confirm intended method wavelength(s) are within the qualified range",
    steps: ["Identify the intended method wavelength(s).","Confirm each is within the qualified range."],
    accept: ["Method wavelength(s) within the qualified range.","Do not operate outside it."] },
  "PQ:2": { use: "requalification", title: "Define routine performance-check and requalification frequency" }
};

const HOWTO_ftir = {
  "IQ:0": { use: "iq-components", title: "Verify identification, source/detector, and spectral range vs PO/URS" },
  "IQ:1": { title: "Install and secure the data system",
    steps: ["Install software and confirm version.","Configure access levels and audit trail (Part 11)."],
    accept: ["Software installed.","Audit trail and access controls configured per Part 11."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm the polystyrene reference film and accessories are in date",
    accept: "Polystyrene reference film (and sampling accessories) available, traceable, and in date." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Wavenumber (frequency) accuracy",
    steps: ["Acquire the spectrum of the certified polystyrene reference film.","Compare observed band positions to the certified wavenumbers.","Confirm within tolerance."],
    accept: "Wavenumber accuracy within the compendial tolerance at the certified polystyrene bands (confirm tolerance per chapter).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <854>" },
  "OQ:1": { title: "Resolution check",
    steps: ["Acquire polystyrene at the working resolution.","Confirm the defined bands are separated/resolved to the required depth.","Compare to the requirement."],
    accept: "Resolution meets the compendial requirement (defined band separation/depth on polystyrene).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <854>" },
  "OQ:2": { title: "Signal-to-noise ratio",
    steps: ["Acquire a background and a defined-region scan.","Compute the signal-to-noise over the defined region.","Compare to the requirement."],
    accept: "Signal-to-noise meets the data-sheet/compendial requirement over the defined region." },
  "OQ:3": { title: "Sampling accessory and energy throughput",
    steps: ["Mount the sampling accessory (ATR/transmission).","Confirm it performs and the energy throughput is acceptable.","Record results."],
    accept: "Sampling accessory performs and energy throughput is within the data-sheet expectation." },
  "OQ:4": { use: "cal-verify", title: "Confirm reference materials/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic identity check with a known reference material",
    steps: ["Acquire the spectrum of a known reference material.","Compare/match against the reference library or expected spectrum.","Confirm identification within the method acceptance."],
    accept: "A known reference material is correctly identified/matched within the method acceptance - method-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <854>" },
  "PQ:1": { title: "Confirm intended method spectral range is within the qualified range",
    steps: ["Identify the intended method spectral range.","Confirm it is within the qualified range."],
    accept: ["Method spectral range within the qualified range.","Do not operate outside it."] },
  "PQ:2": { use: "requalification", title: "Define routine performance-check and requalification frequency" }
};

const HOWTO_karlfischer = {
  "IQ:0": { use: "iq-components", title: "Verify titrator type, identification, and configuration vs PO/URS" },
  "IQ:1": { use: "iq-components", title: "Verify cell, electrodes, dosing/burette, drying, and software installed" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm certified water standards and reagents are in date and stored",
    accept: "Certified water standards and KF reagents available, traceable, in date, and stored to control moisture." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Reagent titre standardization (volumetric)",
    steps: ["Standardize the titrant against a certified water standard (e.g. water-standard 1.0 or di-sodium tartrate).","Determine mg H₂O per mL of titrant.","Repeat to confirm repeatability of standardization."],
    accept: ["Titre determined and within the expected range for the reagent.","Repeatability within the SOP limit."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <921>" },
  "OQ:1": { title: "Accuracy against a certified water standard",
    steps: ["Analyze a certified water standard.","Compare the measured water content to the certified value.","Confirm recovery within tolerance."],
    accept: "Measured water content within the SOP tolerance of the certified value (recovery within limits).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <921>" },
  "OQ:2": { title: "Repeatability (precision)",
    steps: ["Run replicate determinations of a standard.","Compute the %RSD.","Compare to the SOP limit."],
    accept: "%RSD across replicate determinations within the SOP limit." },
  "OQ:3": { title: "Endpoint detection, drift/blank, and oven temperature (if fitted)",
    steps: ["Confirm endpoint detection responds correctly.","Measure drift/blank and confirm within limits.","For an oven sampler, verify oven temperature against a reference."],
    accept: ["Endpoint detection and drift/blank within limits.","Oven temperature accurate where an oven sampler is used (setpoint method-defined)."] },
  "OQ:4": { use: "cal-verify", title: "Confirm standards/balance within tolerance before testing" },

  "PQ:0": { title: "Holistic check with a representative control sample",
    steps: ["Analyze a representative control/sample with the intended method.","Confirm recovery within the method acceptance."],
    accept: "A representative control recovers within the method acceptance - sample size/endpoint method-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <921>" },
  "PQ:1": { title: "Confirm intended method is within the qualified range",
    steps: ["List intended method parameters (sample size, reagent, endpoint).","Confirm each is within the qualified range."],
    accept: "Intended method parameters within the qualified range." },
  "PQ:2": { use: "requalification", title: "Define routine standardization/verification and requalification frequency" }
};

const HOWTO_particlecounter = {
  "IQ:0": { use: "iq-components", title: "Verify counter type, identification, and size channels vs PO/URS" },
  "IQ:1": { use: "iq-components", title: "Verify sensor, flow/sampling system, and software installed" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm traceable size (PSL) and count/volume calibration",
    accept: ["Size calibration against certified PSL spheres.","Counting efficiency, sample-volume accuracy, and (airborne) ISO 21501-4 parameters verified and traceable."] },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Size accuracy / resolution using certified PSL spheres",
    steps: ["Sample certified PSL latex spheres of known size.","Confirm the reported size matches within tolerance.","Confirm size resolution (airborne) per ISO 21501-4."],
    accept: ["Reported sizes match the certified PSL spheres within the standard's tolerance.","Size resolution meets ISO 21501-4 (airborne)."],
    link: "https://www.iso.org/standard/63367.html", linkLabel: "iso.org - ISO 21501-4" },
  "OQ:1": { title: "Counting efficiency and false-count (zero-count) rate",
    steps: ["Determine counting efficiency against a reference at the smallest channel.","Run filtered/clean air or fluid and measure the false/zero-count rate.","Compare both to the limits."],
    accept: ["Counting efficiency within the ISO 21501-4 range.","False-count rate below the limit on filtered/clean fluid or air."],
    link: "https://www.iso.org/standard/63367.html", linkLabel: "iso.org - ISO 21501-4" },
  "OQ:2": { title: "Sample flow rate / sample volume accuracy",
    steps: ["Measure the sampled flow rate / volume against a reference.","Confirm within tolerance so reported concentrations are accurate."],
    accept: "Sample flow rate / volume within tolerance so reported concentrations are accurate.",
    link: "https://www.iso.org/standard/63367.html", linkLabel: "iso.org - ISO 21501-4" },
  "OQ:3": { title: "Liquid LO: system suitability per USP <788>",
    steps: ["For a light-obscuration liquid counter, run the count-accuracy / system-suitability reference suspension.","Confirm the result meets USP <788>."],
    accept: "Count-accuracy / system suitability meets USP <788> using the reference particle suspension.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <788>" },
  "OQ:4": { use: "cal-verify", title: "Confirm reference standards/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic check against the application",
    steps: ["Liquid: run a representative sample and evaluate ≥10 µm and ≥25 µm counts vs USP <788>.","Airborne: confirm it supports the target ISO 14644 class.","Confirm which limits apply from the product/area."],
    accept: ["Liquid: counts at ≥10 µm and ≥25 µm meet the USP <788> limits for the product/volume.","Airborne: supports the target ISO 14644-1 class.","Which limits apply is product/area-defined - do not assume."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <788>" },
  "PQ:1": { title: "Confirm intended size channels and limits are within the qualified range",
    steps: ["Identify the intended size channels and limits.","Confirm each is within the qualified range."],
    accept: "Intended size channels and limits within the qualified range." },
  "PQ:2": { use: "requalification", title: "Define routine calibration (annual per ISO 21501-4 typical) and requalification" }
};

const HOWTO_pipette = {
  "IQ:0": { use: "iq-components", title: "Record identification, channels, and volume range vs spec" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm the balance meets ISO 8655-6 minimum and an evaporation trap is available",
    accept: ["Balance resolution meets ISO 8655-6 Table 1 for the nominal volume.","Evaporation trap available for volumes < 10 µL."] },
  "IQ:2": { use: "iq-location", title: "Confirm the controlled test environment and water/balance references",
    accept: ["Test environment within ISO 8655 conditions (e.g. 15–30 °C, stable humidity, draft/vibration-free)","Water density and conditions recorded."] },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Systematic error (accuracy) at the test volumes",
    steps: ["Select the test volumes (e.g. 100%, 50%, 10% of nominal).","Gravimetrically dispense and weigh water, converting mass to volume via Z-factor.","Compute the mean dispensed volume and the systematic error at each test volume.","Compare to the maximum permissible systematic error for the nominal volume."],
    accept: "Mean dispensed volume within the maximum permissible systematic error for the nominal volume at 100/50/10% (errors doubled for multichannel) - limits are nominal-volume-defined, do not assume.",
    link: "https://www.iso.org/standard/74160.html", linkLabel: "iso.org - ISO 8655-2" },
  "OQ:1": { title: "Random error (precision/repeatability)",
    steps: ["From the replicate measurements at each test volume, compute the standard deviation / CV.","Compare to the maximum permissible random error for the nominal volume."],
    accept: "Random error (SD/CV) within the maximum permissible random error for the nominal volume at each test volume.",
    link: "https://www.iso.org/standard/74160.html", linkLabel: "iso.org - ISO 8655-2" },
  "OQ:2": { title: "Replication and procedure",
    steps: ["Make at least 10 measurements per test volume.","Change the tip per measured volume.","Pre-wet the tip and follow the ISO 8655 technique (angle, speed)."],
    accept: ["At least 10 measurements per test volume.","Tip changed per measured volume.","Pre-wetting and technique per ISO 8655."],
    link: "https://www.iso.org/standard/74161.html", linkLabel: "iso.org - ISO 8655-6" },
  "OQ:3": { title: "Evaporation correction",
    steps: ["Determine the evaporation rate / blank for the setup.","Apply the correction, especially for volumes < 10 µL (use the evaporation trap)."],
    accept: "Evaporation rate determined and corrected so it doesn't bias low-volume results.",
    link: "https://www.iso.org/standard/74161.html", linkLabel: "iso.org - ISO 8655-6" },
  "OQ:4": { title: "Balance status and measurement uncertainty",
    steps: ["Confirm the balance is within calibration.","Estimate and report the measurement uncertainty per accredited practice."],
    accept: ["Balance in calibration.","Measurement uncertainty estimated and reported per accredited practice."] },

  "PQ:0": { title: "In-use verification with actual tips/operators",
    steps: ["Verify performance with the laboratory's actual tips, technique, and operators.","Use the volumes actually used in the application.","Confirm accuracy and precision meet the application requirement."],
    accept: "In-use accuracy and precision meet the application requirement with the actual tips/operators at the volumes used - application-defined.",
    link: "https://www.iso.org/standard/74162.html", linkLabel: "iso.org - ISO 8655-7" },
  "PQ:1": { use: "requalification", title: "Define routine recalibration frequency and intermediate checks" }
};

const HOWTO_depyrotunnel = {
  "IQ:0": { use: "iq-components", title: "Verify power, HEPA airflow, and belt/zone configuration vs URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm process thermocouples and reference rated for ≥250 °C",
    accept: "Process thermocouples and the reference standard calibrated, traceable, and rated for the depyrogenation temperature (≥250 °C typical - confirm cycle)." },
  "IQ:2": { use: "iq-components", title: "Verify inter-zone airflow / pressure cascade installed" },
  "IQ:3": { use: "iq-location" },
  "IQ:4": { use: "iq-components", title: "Confirm HEPA/airflow, belt drive, and zone configuration installed" },
  "IQ:5": { use: "iq-calibration-certs", title: "Verify high-temperature-rated thermocouples calibrated" },
  "IQ:6": { use: "iq-instrument-inventory" },
  "IQ:7": { use: "iq-vendor-docs" },

  "OQ:0": { use: "heat-distribution", title: "Empty-belt heat distribution through the heating zone",
    accept: ["Setpoint/belt speed are process-defined - do not assume (≥250 °C typical)","Distribution within the protocol band across the belt.","Coldest position identified for the endotoxin challenge."] },
  "OQ:1": { use: "tunnel-belt-dwell" },
  "OQ:2": { use: "cal-verify" },
  "OQ:3": { use: "control-functions" },
  "OQ:4": { use: "tunnel-pressure-cascade" },
  "OQ:5": { use: "record-printout" },

  "PQ:0": { use: "endotoxin-challenge", title: "Endotoxin challenge at the cold position (≥3-log reduction)",
    accept: "≥ 3-log (1000-fold) reduction of a known endotoxin spike at the cold position across the required runs - the defining depyrogenation requirement." },
  "PQ:1": { use: "heat-penetration-load", title: "Loaded heat-penetration at production belt speed",
    accept: "Time-at-temperature requirement met at all belt positions and qualified load/container types at production belt speed - process-defined, do not assume." },
  "PQ:2": { use: "loading-pattern", title: "Define each container/load configuration and belt speed to qualify" },
  "PQ:3": { use: "reproducibility-runs" },
  "PQ:4": { use: "requalification" }
};

const HOWTO_etosterilizer = {
  "IQ:0": { use: "iq-components", title: "Verify chamber, gas/dosing, preconditioning/aeration, and safety per URS/P&ID" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm temperature/humidity/pressure/EtO sensors calibrated",
    accept: "Temperature, humidity, pressure, and EtO-concentration instruments calibrated, traceable, and range-appropriate." },
  "IQ:2": { use: "iq-components", title: "Verify gas monitoring, exhaust/abatement, and operator-safety controls" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "heat-distribution",
    title: "Empty-chamber temperature AND humidity distribution at cycle conditions",
    accept: ["Setpoints are process-defined - do not assume.","Temperature and humidity within the cycle band across the chamber.","Worst-case location identified."],
    extraSteps: ["Place humidity sensors alongside temperature sensors and assess RH distribution against the cycle band."] },
  "OQ:1": { title: "Gas concentration, pressure/vacuum, and cycle-parameter accuracy",
    steps: ["Run the cycle and record EtO concentration (by pressure rise / weight / direct measure).","Verify pressure/vacuum control through each phase.","Confirm cycle timing and parameters are within tolerance and repeatable."],
    accept: "EtO concentration, pressure/vacuum, and cycle timing within the defined tolerances and repeatable across cycles.",
    link: "https://www.iso.org/standard/56137.html", linkLabel: "iso.org - ISO 11135" },
  "OQ:2": { use: "cal-verify" },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and door/safety functions" },
  "OQ:4": { use: "record-printout" },

  "PQ:0": { use: "endotoxin-challenge",
    title: "Microbial PQ: half-cycle overkill with BIs to a 10⁻⁶ SAL",
    accept: "Half-cycle (half the routine dwell) yields no BI survivors across at least three cycles, supporting a 10⁻⁶ SAL at the full cycle.",
    steps: ["Place biological indicators (e.g. B. atrophaeus) at worst-case load locations.","Run a half-cycle (half the routine gas-exposure dwell).","Incubate and confirm no BI survivors.","Repeat for at least three half-cycles."] },
  "PQ:1": { use: "reproducibility-runs", title: "Physical PQ: three consecutive full cycles at all load positions",
    accept: "Three consecutive full cycles meet all cycle parameters at every monitored load position." },
  "PQ:2": { title: "EtO / ECH residuals meet ISO 10993-7 after aeration",
    steps: ["Sample representative product after the validated aeration.","Measure EtO and ECH residuals.","Compare to the ISO 10993-7 limits for the contact category."],
    accept: "Residual EtO and ECH on representative product within the ISO 10993-7 limits after the validated aeration.",
    link: "https://www.iso.org/standard/66726.html", linkLabel: "iso.org - ISO 10993-7" },
  "PQ:3": { use: "loading-pattern" },
  "PQ:4": { use: "requalification", title: "Define requalification and parameter-audit frequency" }
};

const HOWTO_gammasterilizer = {
  "IQ:0": { use: "iq-components", title: "Verify source/beam, conveyor/carrier, and shielding installed" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm the dosimetry system is calibrated and traceable",
    accept: "Dosimeters and the dosimetry system calibrated and traceable to a national standard across the working dose range." },
  "IQ:2": { use: "iq-components", title: "Verify timer/conveyor-speed control and source/beam parameters" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Installation dose mapping in a reference load",
    steps: ["Load a reference/homogeneous product.","Place dosimeters on a 3D grid throughout the load.","Run and read the dose distribution.","Establish the dose vs timer/conveyor-speed (or beam-parameter) relationship."],
    accept: ["Dose distribution characterized.","The relationship between delivered dose and timer/conveyor speed (or beam parameters) established and repeatable."],
    link: "https://www.iso.org/standard/33952.html", linkLabel: "iso.org - ISO 11137-1" },
  "OQ:1": { use: "reproducibility-runs", title: "Verify dose reproducibility across replicate runs",
    accept: "Delivered dose reproducible across replicate runs within the defined variation." },
  "OQ:2": { use: "cal-verify", title: "Confirm dosimetry within tolerance before functional testing" },
  "OQ:3": { use: "control-functions", title: "Verify interlocks, source/beam controls, and conveyor functions" },

  "PQ:0": { title: "Product dose mapping: locate min and max dose positions",
    steps: ["Load the actual product configuration.","Place dosimeters densely, including suspected min and max regions.","Run and read all dosimeters.","Identify the minimum-dose (sterility) and maximum-dose (material) positions."],
    accept: "Minimum-dose location (sterility) and maximum-dose location (material limit) identified in the actual product/load configuration.",
    link: "https://www.iso.org/standard/33952.html", linkLabel: "iso.org - ISO 11137-1" },
  "PQ:1": { title: "Establish the sterilization dose for a 10⁻⁶ SAL",
    steps: ["Determine product bioburden.","Apply a recognized dose-establishment method (ISO 11137-2 VDmax25, Method 1, etc.).","Substantiate the dose for a 10⁻⁶ SAL with verification dose experiments."],
    accept: "Sterilization dose established/substantiated for a 10⁻⁶ SAL using a recognized method - dose is product/bioburden-defined, do not assume.",
    link: "https://www.iso.org/standard/62442.html", linkLabel: "iso.org - ISO 11137-2" },
  "PQ:2": { title: "Confirm max dose within the material's qualified limit",
    steps: ["Compare the mapped maximum dose to the product/material's qualified maximum acceptable dose.","Confirm functional/material integrity at that dose."],
    accept: "Maximum delivered dose stays within the product/material's qualified maximum acceptable dose.",
    link: "https://www.iso.org/standard/33952.html", linkLabel: "iso.org - ISO 11137-1" },
  "PQ:3": { use: "loading-pattern", title: "Define each product/load configuration to qualify" },
  "PQ:4": { title: "Define routine dose audits and requalification",
    steps: ["Set the dose-audit interval (commonly quarterly per ISO 11137-2).","Define requalification triggers (process/product/source changes)."],
    accept: "Periodic dose audits (commonly quarterly per ISO 11137-2) and requalification defined and risk-justified.",
    link: "https://www.iso.org/standard/62442.html", linkLabel: "iso.org - ISO 11137-2" }
};

const HOWTO_watercascade = {
  "IQ:0": { use: "iq-components", title: "Verify chamber, water cascade/recirculation, and counter-pressure per URS/P&ID" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm thermocouples, pressure, and flow sensors calibrated",
    accept: "Temperature, pressure, and flow instruments calibrated, traceable, and range-appropriate for the cycle." },
  "IQ:2": { use: "iq-components", title: "Verify heat exchanger, water-quality provisions, and load handling" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "heat-distribution", title: "Empty-chamber heat distribution at the cycle setpoint",
    accept: ["Setpoint is process-defined - do not assume.","Distribution within the protocol band across the chamber.","Cold spot identified."] },
  "OQ:1": { title: "Counter-pressure / over-pressure control across cycle phases",
    steps: ["Run the cycle with pressure logging.","Confirm counter-pressure tracks heat-up, exposure, and cool-down.","Verify it stays within the band that protects sealed containers."],
    accept: ["Counter-pressure tracks the cycle to protect sealed flexible containers from deformation/burst.","Within the defined band throughout."],
    link: "https://www.iso.org/standard/80271.html", linkLabel: "iso.org - ISO 17665" },
  "OQ:2": { title: "Water spray/cascade coverage and recirculation flow",
    steps: ["Verify spray/cascade reaches all load positions.","Confirm recirculation flow meets the design.","Confirm repeatability across cycles."],
    accept: "Spray/cascade coverage and recirculation flow meet the design and are repeatable across cycles." },
  "OQ:3": { use: "cal-verify" },
  "OQ:4": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and door/safety functions" },
  "OQ:5": { use: "record-printout" },

  "PQ:0": { use: "heat-penetration-load",
    title: "Loaded heat-penetration: F₀ at the product cold spot",
    accept: "Delivered F₀ at the slowest-heating product position meets the product-defined target (e.g. F₀ ≥ 8 min equivalence - confirm) across all monitored positions." },
  "PQ:1": { use: "endotoxin-challenge",
    title: "Biological-indicator confirmation supports the targeted SAL",
    accept: "BI results (where used) are consistent with the delivered F₀ and support the targeted SAL.",
    steps: ["Place BIs (e.g. G. stearothermophilus) at the cold spot and reference positions.","Run the cycle, incubate, and read results.","Confirm BI kill is consistent with the delivered F₀."] },
  "PQ:2": { title: "Container-closure integrity / no container damage after the cycle",
    steps: ["Inspect sealed containers after the qualified cycle.","Run container-closure integrity testing on a representative sample.","Confirm no deformation, burst, or seal failure."],
    accept: "Sealed containers retain integrity and show no deformation/burst after the qualified cycle." },
  "PQ:3": { use: "loading-pattern" },
  "PQ:4": { use: "reproducibility-runs", title: "Reproducibility across consecutive runs; define requalification" }
};

const HOWTO_conductivitytoc = {
  "IQ:0": { use: "iq-components", title: "Verify meter/analyzer identification, cell/sensor type, and range vs PO/URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm conductivity and TOC reference standards are in date",
    accept: "Certified conductivity standards and TOC system-suitability standards (sucrose, 1,4-benzoquinone) available, traceable, and in date." },
  "IQ:2": { title: "Secure the data system where applicable",
    steps: ["Where the instrument stores GxP data, configure access levels and audit trail (Part 11)."],
    accept: "Where the instrument stores GxP data, audit trail and access controls configured per Part 11." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Conductivity: cell-constant and accuracy vs certified standards",
    steps: ["Verify/measure the cell constant.","Measure certified conductivity standards across the range.","Compare to certified values within the SOP tolerance."],
    accept: ["Cell constant verified.","Conductivity accuracy within the SOP tolerance against certified standards across the range."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <645>" },
  "OQ:1": { title: "Conductivity: temperature-compensation function",
    steps: ["Check the temperature-compensation behavior.","Note that USP <645> Stage 1 uses uncompensated readings."],
    accept: "Temperature compensation behaves correctly (note USP <645> Stage 1 uses uncompensated readings)." },
  "OQ:2": { title: "TOC: system suitability (response efficiency) per USP <643>",
    steps: ["Analyze the sucrose and 1,4-benzoquinone standards.","Calculate the response efficiency.","Compare to the USP <643> limits."],
    accept: "TOC system-suitability response efficiency within USP <643> limits using the sucrose / 1,4-benzoquinone standards.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <643>" },
  "OQ:3": { title: "TOC: accuracy/linearity across the range and LOD",
    steps: ["Run a TOC linearity series across the working range.","Confirm accuracy/linearity vs the method.","Verify the limit of detection."],
    accept: "TOC accuracy/linearity across the range and LOD within the method requirement." },
  "OQ:4": { use: "cal-verify", title: "Confirm reference standards/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic check with a representative sample/control",
    steps: ["Measure a representative control with the intended method.","Confirm it reads within the method acceptance."],
    accept: "A representative control reads within the method acceptance - which limit applies is sample/method-defined, do not assume." },
  "PQ:1": { use: "requalification", title: "Define routine verification and requalification frequency" }
};

const HOWTO_elementalanalyzer = {
  "IQ:0": { use: "iq-components", title: "Verify instrument type, torch/detector, and gas supplies vs PO/URS" },
  "IQ:1": { title: "Secure the data system",
    steps: ["Install software; configure access levels and audit trail (Part 11)."],
    accept: ["Software installed.","Audit trail and access controls configured per Part 11."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm multi-element standards and digestion are in date",
    accept: "Traceable multi-element calibration/internal standards and closed-vessel digestion (for solids) available and in date." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Instrument performance: sensitivity, calibration, and stability",
    steps: ["Tune the instrument and measure sensitivity.","Run the mass calibration (MS) or wavelength calibration (OES).","Assess short-term stability."],
    accept: "Sensitivity, mass/wavelength calibration, and short-term stability meet the SOP/data-sheet specification.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:1": { title: "Interference control and detector linearity",
    steps: ["For ICP-MS, verify collision/reaction-cell interference control.","Check detector dead-time / linearity.","Compare to the data-sheet/method requirement."],
    accept: "Interference control and detector linearity within the data-sheet/method requirement." },
  "OQ:2": { title: "Calibration linearity across the J-bracketed range",
    steps: ["Prepare calibration standards bracketing J (e.g. 0.5–1.5 J).","Run the calibration and assess linearity/correlation."],
    accept: ["Calibration linear across the range bracketing J (commonly 0.5–1.5 J)","Meets the SOP correlation requirement."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <233>" },
  "OQ:3": { use: "cal-verify", title: "Confirm standards/instrument within tolerance before testing" },

  "PQ:0": { title: "USP <233> system suitability (drift and checks)",
    steps: ["Run the system-suitability sequence.","Assess drift across the run.","Confirm procedure-specific suitability is met."],
    accept: ["Drift within the USP <233> limit across the run.","Procedure-specific suitability met."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <233>" },
  "PQ:1": { title: "Detectability at 0.8 J and spike recovery 50–150% J",
    steps: ["Spike a sample at 0.8 J and confirm detectability.","Spike across 50–150% of J and measure recovery.","Compare recoveries to the USP <233> acceptance."],
    accept: ["Detectability demonstrated at 0.8 J.","Spike recoveries within the USP <233> acceptance across 50–150% of J - elements/limits are product/route-defined, do not assume."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <233>" },
  "PQ:2": { title: "Confirm intended elements/limits are within the qualified method",
    steps: ["List the product's risk-assessed elements and PDE-derived limits (USP <232>/ICH Q3D).","Confirm each is within the qualified method scope."],
    accept: "The product's risk-assessed elements and PDE-derived limits are within the qualified method scope.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <232>" },
  "PQ:3": { use: "requalification", title: "Define routine system-suitability and requalification frequency" }
};

const HOWTO_tablettester = {
  "IQ:0": { use: "iq-components", title: "Verify tester(s) identification and configuration vs PO/URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm force/weights, tachometer, timer, and thermometer references are traceable",
    accept: "Force reference/weights, tachometer, timer, and temperature reference calibrated and traceable." },
  "IQ:2": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Hardness / breaking-force accuracy",
    steps: ["Apply reference weights/force across the working range.","Compare the measured force to the reference.","Record deviations."],
    accept: "Measured force within the SOP/data-sheet tolerance against reference force across the working range.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1217>" },
  "OQ:1": { title: "Friability: drum speed and revolution count",
    steps: ["Measure drum rotation speed with a tachometer.","Confirm the number of drops/revolutions for a run.","Compare to the USP <1216> setup."],
    accept: "Drum speed and revolution count match the USP <1216> setup (commonly 25 rpm / 100 revolutions - confirm).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1216>" },
  "OQ:2": { title: "Disintegration: stroke rate/distance and medium temperature",
    steps: ["Measure the basket-rack stroke rate and distance.","Measure the medium temperature.","Compare both to the USP <701> setup."],
    accept: "Stroke rate/distance and medium temperature within the USP <701> setup (commonly ~29–32 cycles/min, 37 ± 2 °C - confirm).",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <701>" },
  "OQ:3": { title: "Timing and endpoint-detection functions",
    steps: ["Verify timing functions.","Where automated, confirm endpoint detection operates correctly."],
    accept: "Timing and endpoint-detection functions operate correctly per the data sheet/method." },
  "OQ:4": { use: "cal-verify", title: "Confirm references/instruments within tolerance before testing" },

  "PQ:0": { title: "Holistic check with reference tablets/controls",
    steps: ["Run reference tablets/controls through the apparatus.","Confirm results are consistent with the method."],
    accept: "Reference tablets/controls give results consistent with the method - product limits (hardness range, % friability, disintegration time) are product/monograph-defined, do not assume." },
  "PQ:1": { title: "Confirm intended monograph conditions are within the qualified range",
    steps: ["List the intended monograph conditions.","Confirm each is within the qualified range."],
    accept: "Intended monograph conditions within the qualified range." },
  "PQ:2": { use: "requalification", title: "Define routine verification and requalification frequency" }
};

const HOWTO_photostability = {
  "IQ:0": { use: "iq-components", title: "Verify identification, lamp/source type, and capacity vs PO/URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm lux/UV radiometry and T/RH references are traceable",
    accept: "Calibrated lux meter and UV radiometer, plus T/RH references, available and traceable." },
  "IQ:2": { use: "iq-backup-alarm", title: "Verify backup/alarm contacts and light/T/RH logging installed" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Light-intensity mapping (visible lux + near-UV W/m²)",
    steps: ["Place lux and UV sensors across the sample plane.","Measure visible and near-UV intensity at each position.","Assess uniformity against the protocol band."],
    accept: "Visible and near-UV intensity uniform across the sample plane within the protocol band so every sample receives the target dose.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - Q1B" },
  "OQ:1": { title: "Confirm delivered dose meets the ICH Q1B minimum",
    steps: ["Integrate exposure over time at the sample plane.","Confirm ≥ 1.2 million lux·h visible.","Confirm ≥ 200 W·h/m² near-UV.","Confirm the option-1/option-2 source is correct for the study."],
    accept: "Exposure delivers ≥ 1.2 million lux·hours visible AND ≥ 200 W·h/m² near-UV - confirm exact study requirement, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - Q1B" },
  "OQ:2": { use: "temp-map-empty", title: "Temperature (and humidity, if controlled) accuracy and distribution",
    accept: "Temperature (and RH where controlled) within the protocol band across the chamber during exposure." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, logging, and control-system functions" },
  "OQ:4": { use: "cal-verify", title: "Confirm radiometry/instruments within tolerance before testing" },

  "PQ:0": { title: "Loaded exposure with actinometry confirming delivered dose",
    steps: ["Place representative samples and a chemical actinometer (or calibrated dosimetry) at sample positions.","Run the exposure.","Confirm the target visible and near-UV dose was delivered at the sample positions."],
    accept: "Actinometry/dosimetry confirms the target visible and near-UV dose is delivered at the sample positions over the run.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - Q1B" },
  "PQ:1": { use: "loading-pattern", title: "Define sample placement and exposure protocol to qualify" },
  "PQ:2": { use: "requalification", title: "Define requalification (lamp-aging based) and review frequency" }
};

const HOWTO_isolator = {
  "IQ:0": { use: "iq-components", title: "Verify enclosure, HEPA, gloves/sleeves, transfer ports, and decon per URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm leak rig, anemometer, photometer, and decon sensors calibrated",
    accept: "Leak-test rig, anemometer, photometer, and decon-cycle sensors calibrated and traceable." },
  "IQ:2": { use: "iq-backup-alarm", title: "Verify monitoring/BMS, alarms, and the decon generator installed" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Enclosure leak test (pressure-decay/hold)",
    steps: ["Seal the enclosure and pressurize (or evacuate) to the test pressure.","Record the pressure decay/hold over the defined time.","Compute the leak rate and compare to the required class."],
    accept: "Leak rate meets the leak-tightness class required for the application (closed isolators tighter than open/RABS) - class is application-defined, do not assume.",
    link: "https://www.iso.org/standard/18781.html", linkLabel: "iso.org - ISO 10648-2" },
  "OQ:1": { title: "Glove / sleeve integrity test",
    steps: ["Test each glove port (pressure-based or physical method).","Identify any failing glove/sleeve.","Replace and retest failures."],
    accept: ["Each glove/sleeve passes the integrity test.","Failing gloves replaced and retested - gloves are a top contamination risk."],
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:2": { title: "Airflow: HEPA integrity, velocity, smoke pattern, pressure regime",
    steps: ["Leak-test the HEPA filters (aerosol/photometer).","Measure work-zone velocity and run a smoke study.","Confirm the positive/negative pressure regime for the application."],
    accept: "HEPA integrity (≤ 0.01% penetration - confirm), velocity, smoke-pattern, and pressure regime meet the design for the application.",
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:3": { title: "Bio-decontamination cycle development (distribution + BI/CI placement)",
    steps: ["Develop the decon cycle (e.g. VHP) phases.","Confirm agent distribution reaches all internal surfaces.","Place BIs/CIs at worst-case locations."],
    accept: ["Decon agent reaches all internal surfaces.","BI/CI placement covers worst-case locations."],
    link: "https://www.iso.org/standard/73214.html", linkLabel: "iso.org - ISO 22441" },
  "OQ:4": { title: "Aeration / recovery to the safe working limit",
    steps: ["After decon, monitor residual agent (e.g. H₂O₂ ppm).","Confirm it falls to the safe/working limit within the qualified aeration time."],
    accept: "Residual decon agent falls to the safe working limit within the qualified aeration time." },
  "OQ:5": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and cycle/control functions" },

  "PQ:0": { title: "Bio-decontamination PQ: BI log reduction at all locations",
    steps: ["Place BIs (e.g. G. stearothermophilus) at all worst-case locations.","Run the validated decon cycle.","Incubate and confirm the target log reduction at every location.","Repeat for the required runs."],
    accept: "BIs achieve the target log reduction (commonly ≥ 6-log - confirm) at all worst-case locations across the required runs.",
    link: "https://www.iso.org/standard/73214.html", linkLabel: "iso.org - ISO 22441" },
  "PQ:1": { title: "In-operation classification and microbial monitoring (Grade A)",
    steps: ["Run the process with representative interventions.","Sample particles and viable microbes in the work zone.","Confirm Grade A is maintained in-operation."],
    accept: "Grade A maintained in-operation: particle and viable counts within the Annex 1 limits with the process and interventions running.",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "PQ:2": { use: "requalification", title: "Define routine glove/leak/decon testing, monitoring, and requalification" }
};

const HOWTO_granulator = {
  "IQ:0": { use: "iq-components", title: "Verify bowl, impeller, chopper, binder, and discharge per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm SS316L, surface finish, and seals meet the design",
    accept: ["Product-contact SS316L with the specified surface finish.","Hygienic seals.","Cleanable design per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm speed, torque/power, temperature, and binder-flow sensors calibrated",
    accept: "Speed, torque/power, temperature, and binder-flow instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "speed-verification", title: "Impeller and chopper speed accuracy across the range",
    accept: "Impeller and chopper speeds within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Binder/liquid addition rate accuracy and repeatability",
    steps: ["Run the binder pump/system at representative rates.","Measure delivered rate gravimetrically/volumetrically.","Confirm accuracy and repeatability vs the data sheet."],
    accept: "Binder addition rate within the data-sheet tolerance and repeatable." },
  "OQ:2": { title: "Torque/power-endpoint monitoring and timer functions",
    steps: ["Confirm torque/power signal logs correctly during a run.","Verify timer functions for the granulation phases."],
    accept: "Torque/power monitoring and timing functions operate and log correctly for endpoint control." },
  "OQ:3": { title: "Jacket temperature control and discharge function",
    steps: ["Where fitted, verify jacket temperature control.","Confirm the discharge operates as designed."],
    accept: "Jacket temperature control (if fitted) and discharge operate as designed." },
  "OQ:4": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (lid/guard) functions" },
  "OQ:5": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: granule CQAs at the qualified CPPs",
    accept: "At the validated CPPs, granule attributes (size distribution, density, moisture) meet the process-defined acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { use: "reproducibility-runs", title: "Reproducibility across the required consecutive batches" },
  "PQ:2": { use: "requalification", title: "Confirm qualified load/scale range and define requalification" }
};

const HOWTO_fbd = {
  "IQ:0": { use: "iq-components", title: "Verify air handling, bowl, filters, and spray system per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, filter bags, and earthing/explosion protection",
    accept: ["Product-contact materials and finish per design.","Filter bags specified.","Static earthing / explosion protection (ATEX/NFPA) in place."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm temperature, airflow, humidity, DP, and spray instruments calibrated",
    accept: "Temperature, airflow, humidity, differential-pressure, and spray instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Inlet air temperature control and product/outlet response",
    steps: ["Set representative inlet temperatures and confirm control vs a reference.","Confirm product/outlet temperature tracks correctly."],
    accept: ["Inlet air temperature controls within the data-sheet tolerance.","Product/outlet temperature tracks correctly (CPP setpoints are process-defined - do not assume)."] },
  "OQ:1": { title: "Airflow / fluidization velocity control",
    steps: ["Set airflow across the range.","Confirm measured airflow/velocity within the data-sheet tolerance."],
    accept: "Airflow/velocity controls within the data-sheet tolerance across the range." },
  "OQ:2": { title: "Spray rate, atomization air, and nozzle function",
    steps: ["For granulation/coating, verify spray rate gravimetrically.","Confirm atomization air and nozzle function."],
    accept: ["Spray rate and atomization within the data-sheet tolerance.","Nozzles function correctly."] },
  "OQ:3": { title: "Filter-bag DP, shake/blow-back, and integrity",
    steps: ["Confirm filter DP monitoring.","Verify the shake/blow-back cycle.","Confirm filter integrity to control product loss / cross-contamination."],
    accept: ["Filter DP monitoring and shake/blow-back cycle operate.","Filter integrity maintained."] },
  "OQ:4": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (explosion vent/earthing)" },
  "OQ:5": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: uniform drying to target LOD at qualified CPPs",
    accept: "At the validated CPPs, final moisture (LOD) and uniformity meet the process-defined acceptance across the bed - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { use: "reproducibility-runs", title: "Reproducibility across the required consecutive batches" },
  "PQ:2": { use: "requalification", title: "Confirm load/scale range and define requalification" }
};

const HOWTO_blender = {
  "IQ:0": { use: "iq-components", title: "Verify shell/bin, drive, and internals per the URS" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, finish, and seals meet the design",
    accept: ["Product-contact SS316L with specified finish.","Hygienic, cleanable design per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm speed/rotation-counter and timer references calibrated",
    accept: "Rotation/speed counter and timer references calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },

  "IQ:4": { use: "iq-instrument-inventory" },
  "OQ:0": { use: "speed-verification", title: "Rotation speed accuracy and revolution/timer counting",
    accept: ["Speed within the data-sheet tolerance.","Revolution/time counting accurate (CPP setpoints are process-defined - do not assume)."] },
  "OQ:1": { title: "Start/stop, jog, and discharge functions",
    steps: ["Verify start/stop and jog.","Confirm discharge operates as designed."],
    accept: "Start/stop, jog, and discharge functions operate as designed." },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify safety interlocks and alarms" },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { title: "Blend uniformity via stratified sampling at the qualified CPPs",
    steps: ["Run the blend at the validated speed/time/fill.","Take stratified samples across the blender (top/middle/bottom, multiple locations).","Assay and compute content uniformity (mean, RSD).","Compare to the acceptance."],
    accept: "Stratified samples meet the content-uniformity acceptance (RSD/limits) at the validated speed/time/fill - CPPs/CQAs are product-defined, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - ICH Q8" },
  "PQ:1": { title: "Confirm the qualified fill/load range (min–max)",
    steps: ["Repeat uniformity at minimum and maximum fill.","Confirm uniformity holds across the range."],
    accept: "Uniformity demonstrated across the qualified fill/load range (min and max)." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_tabletpress = {
  "IQ:0": { use: "iq-components", title: "Verify turret, tooling, force/feed, and de-duster/metal-check per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, tooling spec (TSM/EU), and finish meet the design",
    accept: ["Product-contact materials/finish per design.","Punch and die tooling to the specified TSM/EU standard."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm force, speed, weight, and in-line hardness instruments calibrated",
    accept: "Compression-force load cells, speed, weight, and in-line test instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Compression-force accuracy and force-feedback/weight control",
    steps: ["Apply/measure compression force against a reference across the range.","Confirm the force-feedback / weight-control loop responds correctly."],
    accept: ["Compression force within the data-sheet tolerance.","Force-feedback/weight-control responds correctly (CPP setpoints are process-defined - do not assume)."] },
  "OQ:1": { use: "speed-verification", title: "Turret speed accuracy and fill-depth/dosing control",
    accept: "Turret speed and fill-depth control within the data-sheet tolerance across the range." },
  "OQ:2": { title: "Automatic reject and tablet-sampling functions",
    steps: ["Trigger out-of-limit conditions.","Confirm automatic reject removes those tablets.","Confirm sampling functions operate."],
    accept: "Automatic reject removes out-of-limit tablets and sampling functions operate correctly." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (guard/overload)" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: weight, hardness, thickness, friability at qualified CPPs",
    accept: "At the validated CPPs, tablet weight uniformity (<905>), hardness, thickness, and friability meet the process-defined acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Confirm speed range (min–max) over which tablets stay in spec",
    steps: ["Run at minimum and maximum turret speed.","Confirm tablets stay in spec across the range."],
    accept: "Tablets stay in spec across the qualified turret-speed range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_coater = {
  "IQ:0": { use: "iq-components", title: "Verify pan, spray system, air handling, and exhaust per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, finish, and solvent explosion protection",
    accept: ["Product-contact materials/finish per design.","For solvent coating, explosion protection (ATEX/NFPA) in place."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm pan-speed, spray-rate, temperature, and airflow instruments calibrated",
    accept: "Pan-speed, spray-rate/peristaltic, temperature, and airflow instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Pan speed and spray-rate accuracy",
    steps: ["Verify pan speed across the range.","Verify spray (peristaltic) rate gravimetrically.","Compare to the data sheet."],
    accept: "Pan speed and spray rate within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Inlet air temperature/airflow control and bed-temperature response",
    steps: ["Set inlet temperature/airflow and confirm control.","Confirm bed temperature tracks correctly."],
    accept: ["Inlet temperature/airflow control within tolerance.","Bed temperature tracks correctly."] },
  "OQ:2": { title: "Atomization air and spray-gun pattern/function",
    steps: ["Verify atomization air pressure.","Confirm spray-gun pattern and that all guns function."],
    accept: ["Atomization air within tolerance.","Spray-gun pattern correct and guns function."] },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: coat-weight uniformity and appearance at qualified CPPs",
    accept: "At the validated CPPs, coat-weight gain uniformity and appearance meet the process-defined acceptance with no defects - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Functional coatings: confirm the performance attribute",
    steps: ["For functional coats, test the performance attribute (e.g. dissolution, enteric acid resistance).","Confirm it meets the method."],
    accept: "Functional-coating performance (e.g. dissolution, enteric resistance) meets the method - product-defined, do not assume." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_capsulefiller = {
  "IQ:0": { use: "iq-components", title: "Verify capsule handling, dosing, closing, and reject stations per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, capsule-size change-parts, and finish",
    accept: ["Product-contact materials/finish per design.","Capsule-size change parts specified and cleanable per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm dosing, speed, tamping-force, and weight-check instruments calibrated",
    accept: "Dosing, speed, tamping-force, and weight-check instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "speed-verification", title: "Dosing/fill-setting accuracy and machine-speed control",
    accept: "Dosing/fill setting and speed within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Tamping/dosing-disc setting and capsule closing/locking",
    steps: ["Verify tamping force / dosing-disc setting where applicable.","Confirm capsules close and lock correctly."],
    accept: ["Tamping/dosing setting within tolerance.","Capsules close and lock correctly."] },
  "OQ:2": { title: "Capsule-presence, weight-check, and automatic reject",
    steps: ["Confirm capsule-presence detection.","Verify the in-line weight check.","Confirm automatic reject removes non-conforming capsules."],
    accept: "Capsule-presence detection, weight check, and automatic reject operate correctly." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: fill-weight accuracy and uniformity at qualified CPPs",
    accept: "At the validated CPPs, fill-weight uniformity meets the process/USP <905> acceptance across the run - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Confirm speed range (min–max) over which fill weight stays in spec",
    steps: ["Run at minimum and maximum speed.","Confirm fill weight stays in spec."],
    accept: "Fill weight stays in spec across the qualified speed range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_mill = {
  "IQ:0": { use: "iq-components", title: "Verify mill body, rotor, screen mounting, and feed/discharge per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, screen/impeller change-parts, and finish",
    accept: ["Product-contact materials/finish per design.","Screen and impeller change parts specified and cleanable."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm speed and feed-rate instruments calibrated",
    accept: "Speed and feed-rate instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },

  "IQ:4": { use: "iq-instrument-inventory" },
  "OQ:0": { use: "speed-verification", title: "Rotor/impeller speed accuracy across the range",
    accept: "Speed within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Screen-size configuration control and feed-rate function",
    steps: ["Confirm the correct screen is installed and verified.","Confirm the feed-rate function operates as designed."],
    accept: ["Correct screen installed/verified.","Feed-rate function operates as designed."] },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (guard/overload)" },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: particle-size distribution at qualified CPPs",
    accept: "At the validated screen/speed/feed, the particle-size distribution (D10/D50/D90) and fines meet the process-defined acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { use: "reproducibility-runs", title: "Reproducibility across the required consecutive batches" },
  "PQ:2": { use: "requalification", title: "Confirm load/feed range and define requalification" }
};

const HOWTO_mixingvessel = {
  "IQ:0": { use: "iq-components", title: "Verify vessel, agitator, jacket, and CIP/transfer connections per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm SS316L, finish, slope/drainability, and seals",
    accept: ["Product-contact SS316L with specified finish.","Self-draining.","Hygienic seals/gaskets per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm agitator-speed, temperature, level/load-cell, and pressure instruments calibrated",
    accept: "Agitator-speed, temperature, level/load-cell, and pressure instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "speed-verification", title: "Agitator speed accuracy and homogenizer high-shear function",
    accept: ["Agitator speed within the data-sheet tolerance across the range.","Homogenizer functions (CPP setpoints are process-defined - do not assume)."] },
  "OQ:1": { title: "Jacket temperature control (heat/cool) accuracy and uniformity",
    steps: ["Run heating and cooling to representative setpoints.","Confirm the bulk holds within the data-sheet tolerance."],
    accept: "Jacket heating/cooling holds the bulk within the data-sheet tolerance." },
  "OQ:2": { title: "Level/load-cell accuracy and transfer/discharge function",
    steps: ["Verify level/load-cell against known volumes/weights.","Confirm transfer/discharge operates."],
    accept: ["Level/load-cell accuracy verified.","Transfer/discharge operates as designed."] },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Process performance: bulk homogeneity at the qualified CPPs",
    steps: ["Mix a representative bulk at the validated speed/time/temperature.","Sample at multiple locations/depths.","Assay for uniformity (assay, appearance, pH where relevant).","Compare to the acceptance."],
    accept: "At the validated speed/time/temperature, bulk uniformity (assay, appearance, pH where relevant) meets the process-defined acceptance - CPPs/CQAs are product-defined, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - ICH Q8" },
  "PQ:1": { title: "Confirm the qualified working-volume range",
    steps: ["Repeat at minimum working volume and at capacity.","Confirm uniformity holds across the range."],
    accept: "Uniformity demonstrated across the qualified working-volume range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_fillingline = {
  "IQ:0": { use: "iq-components", title: "Verify wash, depyro, fill, stopper, cap stations and barrier per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm product-path materials/finish, change-parts, and CIP/SIP design",
    accept: ["Product-contact path SS316L/finish per design.","Change parts specified.","CIP/SIP-able per ASME BPE and Annex 1."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm fill-weight, speed, temperature, and integrity instruments calibrated",
    accept: "Fill-weight/check-weigh, speed, temperature, and integrity instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Fill-weight/volume accuracy and 100% weight-control function",
    steps: ["Fill representative containers and check weights.","Confirm fill accuracy vs target.","Verify the check-weigh / weight-control loop responds and rejects out-of-limit units."],
    accept: ["Fill weight/volume within the data-sheet tolerance.","Check-weigh and weight control respond correctly (fill targets are product-defined - do not assume)."] },
  "OQ:1": { use: "speed-verification", title: "Line speed accuracy and station synchronization",
    accept: "Line speed and station synchronization within the data-sheet tolerance across the range." },
  "OQ:2": { title: "Stoppering/capping integrity and reject functions",
    steps: ["Run stoppering/capping and inspect closures.","Confirm reject removes non-conforming units (missing stopper, bad cap)."],
    accept: "Stoppering/capping and reject functions operate correctly to ensure container-closure integrity." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, barrier/airflow, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Aseptic process simulation (media fill)",
    steps: ["Substitute sterile growth media for product.","Run the line through all interventions for each container size/configuration.","Incubate the filled units and read for contamination.","Complete the initial three consecutive successful media fills."],
    accept: "Initial three consecutive media fills (per container size/configuration) meet the Annex 1 contamination-rate acceptance (target zero; any positive investigated) - the defining aseptic qualification.",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "PQ:1": { title: "Fill-weight performance and container-closure integrity (CCIT)",
    steps: ["Run a representative production-like batch.","Confirm fill-weight uniformity.","Run container-closure integrity testing per USP <1207>."],
    accept: "Fill-weight uniformity meets the process acceptance and container-closure integrity is demonstrated per USP <1207>.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1207>" },
  "PQ:2": { use: "requalification", title: "Confirm container/speed range; define media-fill requalification" }
};

const HOWTO_vialwasher = {
  "IQ:0": { use: "iq-components", title: "Verify wash stations, water/air manifolds, and conveyor per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials/finish and WFI/PW and air connections",
    accept: ["Product-contact materials/finish per design.","WFI/PW and clean-air connections per ASME BPE / USP <1231>."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm pressure, temperature, flow, and timing instruments calibrated",
    accept: "Pressure, temperature, flow, and timing instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },

  "IQ:4": { use: "iq-instrument-inventory" },
  "OQ:0": { title: "Wash-sequence verification: steps, pressures, temperatures, timing",
    steps: ["Run the cycle and record each water/air step.","Confirm pressures, temperatures, and timing vs the cycle definition."],
    accept: "Each wash/air step runs at the defined pressure, temperature, and timing (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Final-rinse water quality at the point of use",
    steps: ["Sample the final-rinse WFI/PW at the use point during the cycle.","Confirm it meets its quality."],
    accept: "Final-rinse WFI/PW meets its quality at the point of use during the cycle.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify reject/handling, alarms, and interlocks" },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { title: "Cleanliness PQ: particulate limits on washed components",
    steps: ["Wash representative components at the qualified cycle.","Test for particulate matter (e.g. USP <788>).","Confirm within the acceptance across the required runs."],
    accept: "Washed components meet the particulate acceptance (e.g. USP <788>) at the qualified cycle across the required runs.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <788>" },
  "PQ:1": { title: "Endotoxin reduction on washed components",
    steps: ["Test endotoxin on washed components (USP <85>).","Confirm it meets the acceptance, supporting downstream depyrogenation."],
    accept: "Endotoxin on washed components meets the acceptance, supporting the downstream depyrogenation step.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <85>" },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive runs; define requalification" }
};

const HOWTO_blisterline = {
  "IQ:0": { use: "iq-components", title: "Verify forming/sealing, feeding, cartoner, coding, inspection per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm format/pocket change-parts, sealing tooling, and materials",
    accept: "Format/pocket change parts and sealing tooling specified and verified vs design." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm sealing temperature, pressure, speed, and vision/coding instruments calibrated",
    accept: "Sealing temperature, pressure, speed, and vision/coding instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Sealing temperature/pressure/dwell control and forming accuracy",
    steps: ["Verify sealing temperature, pressure, and dwell across the range.","Confirm forming accuracy for the format."],
    accept: "Sealing temperature/pressure/dwell and forming within the data-sheet tolerance across the range (setpoints are material/equipment-defined - do not assume)." },
  "OQ:1": { use: "speed-verification", title: "Line speed and indexing accuracy and synchronization",
    accept: "Line speed and indexing within the data-sheet tolerance and synchronized." },
  "OQ:2": { title: "Inspection systems and reject functions",
    steps: ["Present defects (empty pocket, bad code, missing component).","Confirm vision/inspection detects them.","Confirm automatic reject removes them."],
    accept: "Inspection systems and automatic reject correctly detect and remove defects (empty pocket, bad code, missing component)." },
  "OQ:3": { title: "Serialization/aggregation data handling and alarms/interlocks",
    steps: ["Apply and read serialization/aggregation codes.","Confirm codes are recorded correctly per DSCSA / EU FMD.","Verify alarms/interlocks."],
    accept: ["Serialization/aggregation codes are applied, read, and recorded correctly per DSCSA / EU FMD.","Alarms/interlocks function."],
    link: "https://www.fda.gov/drugs/drug-supply-chain-security-act-dscsa", linkLabel: "fda.gov - DSCSA" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Seal-integrity PQ: leak testing at the qualified settings",
    steps: ["Run blisters/strips at the qualified sealing settings.","Leak-test seals (e.g. methylene-blue dye ingress / vacuum).","Confirm all pass."],
    accept: "Seals pass the leak test (e.g. methylene-blue dye ingress / vacuum) at the qualified settings across the run - material/process-defined, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - ICH Q8" },
  "PQ:1": { title: "Packaging-quality performance",
    steps: ["Run a representative batch.","Confirm correct count/components, coding/serialization accuracy, and defect rate."],
    accept: "Count/components, coding/serialization, and defect rate meet the acceptance across a representative run." },
  "PQ:2": { use: "requalification", title: "Confirm format/speed range; define requalification" }
};

const HOWTO_cipsip = {
  "IQ:0": { use: "iq-components", title: "Verify CIP skid, spray devices, and SIP steam/condensate routing per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm slope/drainability, no dead legs, spray coverage, and finish",
    accept: ["Loop and target equipment self-draining, free of dead legs beyond the design limit.","Spray-device coverage and finish per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm flow, conductivity, temperature, pressure, and SIP thermocouples calibrated",
    accept: "Flow, conductivity, temperature, pressure, and SIP thermocouples calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "CIP: flow/velocity, time, temperature, and chemical-concentration control",
    steps: ["Run each CIP phase (pre-rinse, wash, rinse).","Confirm flow/velocity, time, temperature, and chemical concentration vs the cycle definition."],
    accept: "Each CIP phase delivers the defined flow/velocity, time, temperature, and chemical concentration (cleaning parameters are process-defined - do not assume)." },
  "OQ:1": { title: "CIP: spray-device / riboflavin coverage test",
    steps: ["Coat target product-contact surfaces with riboflavin (or equivalent).","Run the CIP cycle.","Inspect under UV for complete removal / wetting."],
    accept: "Riboflavin (or equivalent) coverage test shows complete wetting of all product-contact surfaces.",
    link: "https://www.asme.org/codes-standards", linkLabel: "asme.org - ASME BPE" },
  "OQ:2": { title: "SIP: steam reaches/holds sterilization temperature; air/condensate removal",
    steps: ["Run the SIP cycle with thermocouples at cold spots.","Confirm steam reaches and holds the sterilization temperature.","Confirm adequate air and condensate removal."],
    accept: "Steam reaches and holds the sterilization temperature with adequate air/condensate removal (cycle is process-defined - do not assume)." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "CIP cleaning validation: residues below acceptance at worst-case locations",
    steps: ["Run the CIP cycle after a worst-case soil/product.","Swab and rinse-sample worst-case locations.","Test for active, cleaning agent, bioburden (and endotoxin where relevant).","Compare to the health-based / process limits."],
    accept: "Swab/rinse residues (active, detergent, bioburden, endotoxin where relevant) below the health-based / process-defined limits at worst-case locations across the required runs.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - cleaning / ICH Q3" },
  "PQ:1": { title: "SIP: F₀ / sterilization conditions at all cold spots",
    steps: ["Run the SIP cycle with cold-spot thermocouples (and BIs where used).","Confirm delivered F₀ / sterilization conditions at every cold spot.","Repeat for the required runs."],
    accept: "Delivered F₀ / sterilization conditions met at all identified cold spots across the required runs.",
    link: "https://www.iso.org/standard/80271.html", linkLabel: "iso.org - ISO 17665" },
  "PQ:2": { use: "requalification", title: "Reproducibility; define routine monitoring and requalification" }
};

const HOWTO_puresteam = {
  "IQ:0": { use: "iq-components", title: "Verify generator, feedwater, distribution, and sampling points per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm SS316L, finish, slope/drainability, and no dead legs",
    accept: ["Product-contact SS316L with specified finish.","Self-draining.","No dead legs beyond the design limit."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm pressure, temperature, conductivity, and TOC instruments calibrated",
    accept: "Pressure, temperature, and condensate conductivity/TOC instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },

  "IQ:4": { use: "iq-instrument-inventory" },
  "OQ:0": { title: "Pressure/temperature control and capacity across demand",
    steps: ["Verify pressure/temperature control at representative demand.","Confirm capacity meets the design across the demand range."],
    accept: "Pressure/temperature control and capacity meet the design across the demand range (setpoints are design-defined - do not assume)." },
  "OQ:1": { title: "Steam quality - non-condensable gases (EN 285)",
    steps: ["Sample steam per the EN 285 non-condensable-gas method.","Measure the NCG fraction.","Compare to the limit."],
    accept: "Non-condensable gases within the EN 285 limit (commonly ≤ 3.5% by volume - confirm).",
    link: "https://www.iso.org/standard/80271.html", linkLabel: "EN 285 (ISO 17665 family)" },
  "OQ:2": { title: "Steam quality - dryness and superheat (EN 285)",
    steps: ["Measure the dryness value per EN 285.","Measure superheat at expansion.","Compare both to the limits."],
    accept: "Dryness value and superheat within the EN 285 limits (commonly dryness ≥ 0.9; superheat ≤ 25 °C - confirm).",
    link: "https://www.iso.org/standard/80271.html", linkLabel: "EN 285 (ISO 17665 family)" },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (relief) functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Condensate chemical quality (conductivity + TOC) at all use points",
    steps: ["Sample condensate at every use point.","Test conductivity (USP <645>) and TOC (USP <643>).","Confirm WFI chemical limits are met."],
    accept: "Condensate meets WFI chemical limits: conductivity ≤ 1.3 µS/cm at 25 °C (<645>) and TOC ≤ 500 ppb (<643>) at all use points.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <645>/<643>" },
  "PQ:1": { title: "Condensate endotoxin at all use points",
    steps: ["Sample condensate at every use point.","Test bacterial endotoxin (USP <85>).","Confirm the WFI limit is met."],
    accept: "Condensate endotoxin meets the WFI limit (NMT 0.25 EU/mL) at all use points.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <85>" },
  "PQ:2": { use: "requalification", title: "Sustained quality; define monitoring and requalification" }
};

const HOWTO_chromskid = {
  "IQ:0": { use: "iq-components", title: "Verify skid, flow path, columns, and sensors per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm hygienic materials/finish and sanitary connections",
    accept: "Product-contact SS316L/polymer per design with sanitary, cleanable connections per ASME BPE." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm flow, UV, conductivity, pH, pressure, temperature sensors calibrated",
    accept: "Flow, UV, conductivity, pH, pressure, and temperature instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Pump flow-rate and gradient/proportioning accuracy",
    steps: ["Measure pump flow gravimetrically/volumetrically across the range.","Run a step-gradient test and confirm composition accuracy.","Compare to the data-sheet tolerance."],
    accept: "Flow rate and gradient accuracy within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Detector accuracy: UV, conductivity, and pH",
    steps: ["Verify UV against a reference standard.","Verify conductivity and pH against certified standards.","Compare to the data-sheet tolerance."],
    accept: "UV, conductivity, and pH readings within the data-sheet tolerance against references." },
  "OQ:2": { title: "Valve sequencing, gradient formation, and fraction collection",
    steps: ["Run an automated method.","Confirm valve sequencing and gradient formation.","Confirm fraction/collection control."],
    accept: "Valve sequencing, gradient formation, and fraction/collection functions operate as designed." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, pressure-limit, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Column qualification: packing quality (HETP / asymmetry)",
    steps: ["Pack/install the column.","Run a tracer injection (e.g. acetone/salt).","Calculate HETP and peak asymmetry.","Compare to the resin/column acceptance."],
    accept: "HETP and peak asymmetry meet the process/resin acceptance (e.g. asymmetry within a defined band) - column/process-defined, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - ICH Q8" },
  "PQ:1": { use: "reproducibility-runs", title: "Process performance: separation/yield/purity at qualified CPPs",
    accept: "At the validated CPPs, yield/purity/impurity clearance meet the process-defined acceptance across runs - CPPs/CQAs are product-defined, do not assume." },
  "PQ:2": { title: "Resin re-use/lifetime and cleaning/sanitization within limits",
    steps: ["Track resin cycles against the qualified lifetime.","Confirm cleaning/sanitization maintains performance (HETP, carryover)."],
    accept: ["Resin re-use is within the qualified lifetime.","Cleaning/sanitization maintains performance."] },
  "PQ:3": { use: "requalification", title: "Reproducibility across consecutive runs; define requalification" }
};

const HOWTO_tffskid = {
  "IQ:0": { use: "iq-components", title: "Verify skid, cassette holder, tanks, and flow path per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm hygienic materials/finish and sanitary connections",
    accept: "Product-contact materials/finish per design with sanitary, cleanable connections per ASME BPE." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm flow, pressure (TMP), and temperature sensors calibrated",
    accept: "Flow, pressure (for TMP), and temperature instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Crossflow rate and transmembrane pressure (TMP) control",
    steps: ["Set feed/crossflow across the range and confirm control.","Confirm TMP (feed/retentate/permeate) control accuracy.","Compare to the data-sheet tolerance."],
    accept: "Crossflow and TMP control within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Permeate flux/control and diafiltration control",
    steps: ["Verify permeate flux control.","Verify weight/level-based diafiltration control."],
    accept: "Permeate flux/control and diafiltration control operate within the data-sheet tolerance." },
  "OQ:2": { title: "Automatic control loops and valve functions",
    steps: ["Confirm automatic TMP / level control loops.","Confirm valve functions."],
    accept: "Control loops and valve functions operate as designed." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, pressure-limit, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Membrane/cassette integrity test (before and after use)",
    steps: ["Wet/install the cassette.","Run the integrity test (air diffusion / pressure hold).","Compare to the vendor/process limit before and after use."],
    accept: ["Membrane integrity (air-diffusion / pressure-hold) within the vendor/process limit before and after use.","Failures investigated."],
    link: "https://www.astm.org", linkLabel: "astm.org - filter integrity" },
  "PQ:1": { use: "reproducibility-runs", title: "Process performance: concentration/diafiltration/yield at qualified CPPs",
    accept: "At the validated CPPs, concentration factor, diavolumes, yield, and product quality meet the process-defined acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:2": { title: "Membrane re-use/lifetime and cleaning (flux recovery / NWP)",
    steps: ["Track membrane cycles against the qualified lifetime.","Confirm cleaning restores normalized water permeability / flux."],
    accept: ["Membrane re-use within the qualified lifetime.","Cleaning restores normalized water permeability / flux."] },
  "PQ:3": { use: "requalification", title: "Reproducibility across consecutive runs; define requalification" }
};

const HOWTO_filterintegrity = {
  "IQ:0": { use: "iq-components", title: "Verify integrity tester, housings, and connections per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm sanitary, sterilizable filtration hardware",
    accept: "Filter housings and connections are sanitary, sterilizable (SIP/autoclave), and cleanable per ASME BPE." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm the tester's pressure/flow measurement is calibrated",
    accept: "The integrity tester's pressure and flow measurement is calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Integrity-tester measurement accuracy vs a reference",
    steps: ["Connect a known restrictor / reference leak.","Run the diffusion / bubble-point / pressure-hold measurement.","Confirm the result matches the reference within tolerance."],
    accept: "Measured diffusion/bubble-point/pressure-hold values match a reference standard within the instrument tolerance.",
    link: "https://www.astm.org", linkLabel: "astm.org - filter integrity" },
  "OQ:1": { title: "Wetting, test-method, and pass/fail logic",
    steps: ["Wet a test filter per the method.","Run bubble point / diffusive flow / pressure hold.","Confirm pass/fail logic applies the product/filter-specific limits."],
    accept: ["The wetting and test method run correctly.","Pass/fail logic applies the product/filter-specific limits."] },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify alarms, result recording, and venting/interlocks" },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { title: "Integrity limit correlated to bacterial retention (ASTM F838)",
    steps: ["Reference the filter validation bacterial-challenge data (B. diminuta).","Confirm the product-wetted integrity limit corresponds to full retention.","Document the correlation."],
    accept: "The product-wetted integrity limit is correlated to full bacterial retention (ASTM F838, B. diminuta ≥ 1×10⁷/cm²) per the filter validation - limit is product/filter-defined, do not assume.",
    link: "https://www.astm.org", linkLabel: "astm.org - ASTM F838" },
  "PQ:1": { title: "Pre-use (PUPSIT) and post-use integrity per Annex 1",
    steps: ["Where required by risk assessment, integrity-test the sterilized filter before use (PUPSIT).","Filter the product.","Confirm integrity after use."],
    accept: "Sterilizing-filter integrity is verified before use (PUPSIT where required) and confirmed after use per Annex 1.",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "PQ:2": { use: "requalification", title: "Reproducibility; define routine testing frequency" }
};

const HOWTO_singleuse = {
  "IQ:0": { use: "iq-components", title: "Verify the assembly matches the approved design/BOM",
    accept: ["Single-use assembly matches the approved design/BOM.","Correct components and configuration verified."] },
  "IQ:1": { use: "iq-vendor-docs", title: "Confirm supplier qualification and sterility/irradiation certificates",
    accept: ["Supplier qualified with change-notification agreement.","Certificates of conformance, sterility, and gamma-irradiation dose on file."] },
  "IQ:2": { use: "iq-vendor-docs", title: "Confirm extractables/leachables suitability is documented",
    accept: "E&L data supports the assembly for the product, contact duration, and conditions of use (USP <665>/<1665>) - product/contact-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <665>" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Physical fit and connection integrity",
    steps: ["Assemble the system.","Confirm components fit and connect correctly.","For aseptic connectors / tube welders, confirm integral connections."],
    accept: ["Components fit and connect correctly.","Aseptic connectors/tube welders make integral connections."] },
  "OQ:1": { title: "Integrated functions (mixer, sensors, filters)",
    steps: ["Operate any integrated functions (mixing, single-use sensors, filters).","Confirm they perform per the data sheet."],
    accept: "Integrated functions (mixing, single-use sensors, filters) operate within the data-sheet expectation." },
  "OQ:2": { title: "Operating pressure/temperature within rated limits",
    steps: ["Operate at representative pressure and temperature.","Confirm both stay within the assembly's rated limits."],
    accept: "Operating pressure and temperature stay within the assembly's rated limits." },

  "PQ:0": { title: "Pre-/post-use assembly integrity (closed system)",
    steps: ["Run a pre-use integrity test (e.g. pressure-decay).","Use the assembly.","Where applicable, run a post-use integrity test.","Confirm the assembly is closed and integral."],
    accept: "Pre-use (and post-use where applicable) integrity (e.g. pressure-decay) confirms the assembly is closed and integral - limit is assembly/process-defined, do not assume.",
    link: "https://www.astm.org", linkLabel: "astm.org - single-use integrity" },
  "PQ:1": { title: "Process performance with the single-use system",
    steps: ["Run the intended process (e.g. mixing/hold) with the single-use system.","Confirm it meets the process acceptance."],
    accept: "Process performance using the single-use system meets the process-defined acceptance." },
  "PQ:2": { use: "requalification", title: "Define lot-to-lot verification, change control, and requalification triggers" }
};

const HOWTO_visualinspection = {
  "IQ:0": { use: "iq-components", title: "Verify inspection stations, optics, lighting, handling, reject per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm container-format change-parts and imaging/data system",
    accept: "Container-format change parts and imaging/data system specified and verified vs design." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm imaging/sensor, reject-timing, and speed instruments calibrated",
    accept: "Imaging/sensor, reject-timing, and speed instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Defect-recipe parameters, lighting, and reject-station timing",
    steps: ["Load the inspection recipe.","Confirm lighting and defect-detection parameters.","Confirm reject-station timing/function across the range."],
    accept: "Inspection recipe, lighting, and reject timing operate within the data-sheet tolerance (defect settings are product-defined - do not assume)." },
  "OQ:1": { title: "Container handling, speed, and synchronization",
    steps: ["Run containers across the speed range.","Confirm handling and station synchronization."],
    accept: "Handling, speed, and synchronization within the data-sheet tolerance." },
  "OQ:2": { title: "Good/reject segregation integrity",
    steps: ["Trigger reject conditions.","Confirm reject removes those units.","Confirm good and reject streams do not cross-mix."],
    accept: "Alarms, interlocks, and good/reject segregation operate correctly with no cross-mixing." },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { title: "Detection capability vs a qualified defect set (Knapp method)",
    steps: ["Assemble a qualified defect test set (particulates, cracks, fill, cosmetic).","Run the set repeatedly (probability-of-detection study).","Compare machine detection to the qualified manual baseline."],
    accept: "The machine meets or exceeds the qualified manual/defect-set detection capability (probability of detection) per a Knapp-style study - defect set and acceptance are product-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1790>" },
  "PQ:1": { title: "False-reject rate and per-category performance",
    steps: ["Run known-good units and measure false-reject rate.","Assess detection per defect category.","Compare to the process/AQL acceptance."],
    accept: "False-reject rate and per-category detection within the process/AQL acceptance." },
  "PQ:2": { title: "USP <790> visible-particulate performance",
    steps: ["Inspect representative product at the qualified settings.","Confirm product is essentially free of visible particulates (USP <790>)."],
    accept: "Inspected product is essentially free of visible particulates per USP <790> at the qualified settings.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <790>" },
  "PQ:3": { use: "requalification", title: "Reproducibility; routine defect-set challenge and requalification" }
};

const HOWTO_ccittester = {
  "IQ:0": { use: "iq-components", title: "Verify CCIT instrument, fixtures, and supplies per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm container-format fixtures and data system",
    accept: "Container-format fixtures and data system specified and verified vs design." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm pressure/vacuum, voltage, or gas-detection measurement calibrated",
    accept: "The instrument's measurement (pressure/vacuum, voltage, or gas detection) is calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Measurement accuracy and method execution vs a reference",
    steps: ["Run the test method (decay / HVLD / headspace) on a reference.","Confirm measurement accuracy and method execution within tolerance."],
    accept: "Measurement accuracy and method execution within the data-sheet tolerance against a reference." },
  "OQ:1": { title: "Pass/fail logic, result recording, and reject/segregation",
    steps: ["Run integral and defect references.","Confirm pass/fail logic and result recording.","Confirm reject/segregation."],
    accept: "Pass/fail logic, result recording, and reject/segregation operate correctly." },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify alarms and interlocks" },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { title: "Detection capability vs positive controls at the leakage limit",
    steps: ["Prepare positive controls (laser-drilled micro-holes / capillaries) at/below the max allowable leakage limit.","Run integral units and positive controls.","Confirm the method reliably distinguishes them."],
    accept: "The method reliably distinguishes integral units from defects at or below the product's maximum allowable leakage limit per USP <1207> - limit is product/package-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1207>" },
  "PQ:1": { title: "Method robustness (false-reject / false-accept)",
    steps: ["Run replicate integral and defect units across the package range.","Compute false-reject and false-accept rates."],
    accept: "False-reject and false-accept rates within acceptance across the qualified package range." },
  "PQ:2": { use: "requalification", title: "Reproducibility; routine positive-control challenge and requalification" }
};

const HOWTO_checkweigher = {
  "IQ:0": { use: "iq-components", title: "Verify checkweigher/detector, conveyor, and reject station per URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm load-cell/detector and reject-timing instruments calibrated",
    accept: "Load cell/detector and reject-timing instruments calibrated and traceable (checkweigher per OIML R51 where applicable)." },
  "IQ:2": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Checkweigher weight accuracy vs certified test weights",
    steps: ["Run certified test weights across the range.","Confirm indicated weight accuracy.","Compare to OIML R51 / data-sheet tolerance."],
    accept: "Weight accuracy within the OIML R51 / data-sheet tolerance against certified weights across the range.",
    link: "https://www.oiml.org", linkLabel: "oiml.org - OIML R51" },
  "OQ:1": { title: "Metal-detector sensitivity vs certified test spheres",
    steps: ["Run certified ferrous, non-ferrous, and stainless test spheres.","Confirm detection at the qualified sensitivity."],
    accept: "Detects the certified Fe / non-Fe / SS test spheres at the qualified sensitivity (sphere sizes are product/process-defined - do not assume)." },
  "OQ:2": { title: "Reject timing, reject-confirm, and segregation",
    steps: ["Confirm reject-station timing.","Confirm reject-confirmation.","Confirm good/reject segregation with no cross-mixing."],
    accept: "Reject timing, reject-confirmation, and good/reject segregation operate correctly with no cross-mixing." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and fail-safe (line-stop) functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "In-line weight and contaminant rejection across a run",
    steps: ["Run a representative production-like batch.","Introduce out-of-weight and contaminated test units.","Confirm reliable rejection at the qualified limits."],
    accept: "At the qualified limits, out-of-weight and contaminated units are reliably rejected across a representative run - limits are product/process-defined, do not assume.",
    link: "https://www.oiml.org", linkLabel: "oiml.org - OIML R51" },
  "PQ:1": { title: "Test-piece challenge at start/end of production",
    steps: ["Challenge with test pieces at start and end (and intervals) of production.","Confirm continued performance."],
    accept: "Routine test-piece challenge at defined intervals confirms continued performance." },
  "PQ:2": { use: "requalification", title: "Define routine challenge frequency and requalification" }
};

const HOWTO_dispensingbooth = {
  "IQ:0": { use: "iq-components", title: "Verify booth, HEPA supply/exhaust, and controls per URS" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm anemometer, photometer, and DP instruments calibrated",
    accept: "Anemometer, photometer/aerosol generator, and DP instruments calibrated and traceable." },
  "IQ:2": { use: "iq-backup-alarm", title: "Verify monitoring and low-airflow/filter alarms installed" },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Airflow / face velocity across the work zone",
    steps: ["Grid the work face.","Measure airflow/face velocity at each point.","Compare to the design for the booth type."],
    accept: "Airflow/face velocity meets the design for the booth type (protection/containment) - target is process-defined, do not assume.",
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:1": { title: "HEPA installed-filter leak test",
    steps: ["Introduce a challenge aerosol upstream.","Scan the filter face and frame with a photometer.","Confirm no leak exceeds the acceptance."],
    accept: "No leak exceeding the acceptance (commonly ≤ 0.01% penetration - confirm) across the filter face and frame.",
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:2": { title: "Airflow visualization and containment",
    steps: ["Run a smoke study at the work face.","Confirm protective airflow and effective capture/containment.","Confirm no escape of powder-laden air."],
    accept: ["Smoke study shows protective airflow and effective capture/containment at the work face.","No escape of powder-laden air."],
    link: "https://www.iso.org/standard/60598.html", linkLabel: "iso.org - ISO 14644-3" },
  "OQ:3": { title: "Work-zone particle classification (at-rest)",
    steps: ["Run particle counts in the work zone at-rest.","Confirm the target ISO class."],
    accept: "Work-zone meets its target ISO class at-rest (commonly ISO 5/7 - confirm).",
    link: "https://www.iso.org/standard/53394.html", linkLabel: "iso.org - ISO 14644-1" },
  "OQ:4": { use: "cal-verify", title: "Verify alarms; confirm instruments within tolerance before testing" },

  "PQ:0": { title: "In-operation protection/containment during dispensing",
    steps: ["Run representative dispensing with operators.","Sample for containment (operator exposure) against the OEL/OEB target.","Confirm protection/containment is maintained."],
    accept: "Protection and containment (operator exposure within the OEL/OEB target) maintained during representative dispensing." },
  "PQ:1": { use: "requalification", title: "Define routine airflow/HEPA monitoring and requalification" }
};

const HOWTO_partswasher = {
  "IQ:0": { use: "iq-components", title: "Verify washer, spray system, detergent dosing, utilities per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm materials/finish and PW/WFI final-rinse connections",
    accept: ["Product-contact materials/finish per design.","Final-rinse PW/WFI connections per ASME BPE / USP <1231>."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm temperature, conductivity, dosing, and timing instruments calibrated",
    accept: "Temperature, conductivity, dosing, and timing instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Cycle verification: dosing, temperatures, and timing",
    steps: ["Run the cycle and record each phase.","Confirm water/detergent dosing, temperatures, and timing vs the cycle definition."],
    accept: "Each cycle phase delivers the defined dosing, temperature, and timing (cleaning parameters are process-defined - do not assume)." },
  "OQ:1": { title: "Final-rinse water quality and thermal disinfection (A₀)",
    steps: ["Sample the final-rinse PW/WFI.","For thermal units, confirm the disinfection temperature reaches the required A₀ (ISO 15883)."],
    accept: ["Final-rinse water meets its quality.","Thermal disinfection reaches the required A₀ value (ISO 15883) where applicable."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1231>" },
  "OQ:2": { title: "Spray coverage, load configuration, and drainage",
    steps: ["Confirm spray-arm rotation/coverage.","Confirm load-rack configuration.","Confirm drainage."],
    accept: "Spray coverage, load configuration, and drainage operate as designed." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and door/safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { title: "Cleaning performance: residues below acceptance at worst-case items",
    steps: ["Soil worst-case load items with a worst-case product.","Run the cycle.","Test residues (visual, conductivity/TOC, riboflavin coverage).","Compare to the acceptance."],
    accept: "Residues (visual, conductivity/TOC, riboflavin coverage) below the acceptance at worst-case load items across the required runs - limits are process-defined, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - cleaning" },
  "PQ:1": { use: "loading-pattern", title: "Confirm worst-case load patterns and hold times" },
  "PQ:2": { use: "requalification", title: "Reproducibility; routine monitoring and requalification" }
};

const HOWTO_rowater = {
  "IQ:0": { use: "iq-components", title: "Verify pretreatment train, pumps, and distribution per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm hygienic design, drainability, and sanitization provisions",
    accept: ["Materials/finish per design.","Self-draining.","Sanitization provisions per ASME BPE / USP <1231>."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm conductivity, pressure, flow, and feed-quality instruments calibrated",
    accept: "Conductivity, pressure, flow, and feed-quality instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["Control system installed.","Audit trail, access, recipe management, and e-record controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "RO performance: pressure/recovery and conductivity rejection",
    steps: ["Run the RO across the demand range.","Confirm pressure/recovery control.","Confirm salt/conductivity rejection."],
    accept: "RO pressures, recovery, and conductivity rejection within the design/data-sheet tolerance (setpoints are design-defined - do not assume)." },
  "OQ:1": { title: "EDI / polishing product conductivity",
    steps: ["Run the EDI/polishing stage.","Confirm product conductivity meets the design target feeding the final loop."],
    accept: "EDI/polishing product conductivity meets the design target feeding the final loop." },
  "OQ:2": { title: "Softener/carbon, sanitization, and alarms/interlocks",
    steps: ["Confirm softener/carbon function.","Run the sanitization cycle.","Verify alarms/interlocks."],
    accept: "Softener/carbon, sanitization cycle, and alarms/interlocks operate as designed." },
  "OQ:3": { use: "cal-verify" },

  "PQ:0": { use: "monitoring-record", title: "Product-water quality over time (conductivity/TOC/microbial)",
    accept: "Product water meets the feed-quality limits: conductivity (<645>), TOC (<643>), and microbial control, demonstrated over time before it feeds the final loop." },
  "PQ:1": { title: "Consistency across a representative sampling period",
    steps: ["Sample product water across the sampling period.","Confirm consistent quality.","Integrate with the downstream PW/WFI PQ."],
    accept: ["Consistent product-water quality across the sampling period.","Integrates with the downstream PW/WFI PQ."] },
  "PQ:2": { use: "requalification", title: "Define routine monitoring and requalification" }
};

const HOWTO_plc = {
  "IQ:0": { use: "iq-components", title: "Verify PLC hardware (CPU, I/O, power, comms) per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm application software/firmware version and configuration baseline" },
  "IQ:2": { use: "io-verification", title: "Confirm field I/O wired, addressed, and ranged per the I/O list",
    accept: "Each I/O point is wired, addressed, and ranged per the I/O list and loop drawings." },
  "IQ:3": { use: "csv-security-audit", title: "Confirm security, access, and audit trail (Part 11 / Annex 11)" },
  "IQ:4": { use: "iq-instrument-inventory", title: "Build a configuration/I/O inventory and file documentation" },

  "OQ:0": { use: "io-verification", title: "I/O verification: each input reads and output drives across range" },
  "OQ:1": { use: "control-loop-test", title: "Control-loop functionality: setpoint, PID response, alarm/trip points" },
  "OQ:2": { use: "interlock-test", title: "Interlock and safety logic challenge" },
  "OQ:3": { use: "data-integrity-test", title: "Audit-trail, e-record, and data-integrity functions" },
  "OQ:4": { use: "power-recovery", title: "Power-loss / recovery returns to a safe defined state",
    accept: "On power loss/recovery and defined failures, the system returns to a safe, defined state without data loss." },
  "OQ:5": { use: "cal-verify", title: "Confirm loop instruments within tolerance before functional testing" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: controlled equipment meets acceptance under PLC control",
    accept: "Under routine PLC control, the equipment delivers the process-defined acceptance across the required runs - process/CQA-defined, do not assume." },
  "PQ:1": { use: "csv-backup-restore", title: "Change control, periodic review, and backup/restore/DR" },
  "PQ:2": { use: "requalification", title: "Define requalification triggers and review frequency" }
};

const HOWTO_scada = {
  "IQ:0": { use: "iq-components", title: "Verify servers/clients, network, and redundancy per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm SCADA/DCS version, configuration, and patch level" },
  "IQ:2": { title: "Confirm tag database, alarms, and graphics match the spec",
    steps: ["Compare the tag database to the approved configuration.","Confirm alarm configuration (limits, priorities).","Confirm operator graphics match the functional spec."],
    accept: "Tag database, alarm configuration, and operator graphics match the approved functional specification." },
  "IQ:3": { use: "csv-security-audit", title: "Confirm security, roles, e-signatures, and audit trail" },
  "IQ:4": { use: "iq-instrument-inventory", title: "Build a configuration inventory and file documentation" },

  "OQ:0": { title: "Data acquisition and display accuracy / refresh rate",
    steps: ["Compare displayed values to controller/reference values.","Confirm the update/scan rate meets the spec."],
    accept: "Acquired values display accurately and update at the specified scan/refresh rate against references." },
  "OQ:1": { title: "Alarm management: generation, priority, acknowledgement",
    steps: ["Force alarm conditions.","Confirm alarms generate, prioritize, and annunciate.","Confirm acknowledgement is logged."],
    accept: "Alarms generate at the configured conditions, prioritize, annunciate, and log acknowledgement per the functional spec.",
    link: "https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf", linkLabel: "EU GMP Annex 11" },
  "OQ:2": { title: "Recipe / batch management and e-signature workflows",
    steps: ["Execute a recipe/batch.","Confirm correct sequencing and parameter handling.","Confirm e-signature workflows enforce the defined approvals."],
    accept: ["Recipe/batch management executes correctly.","Electronic-signature workflows enforce the defined approvals."] },
  "OQ:3": { use: "data-integrity-test", title: "Historian data integrity (capture, time-stamp, retrieval)" },
  "OQ:4": { use: "interface-test", title: "Interface verification (PLC, MES, BMS)" },
  "OQ:5": { title: "Redundancy / failover without data loss",
    steps: ["Trigger a failover/switchover.","Confirm it occurs without data loss or unsafe action."],
    accept: "Redundancy/failover switches over without data loss or unsafe action." },

  "PQ:0": { use: "reproducibility-runs", title: "End-to-end: supervised process meets acceptance under SCADA/DCS",
    accept: "Under routine SCADA/DCS control, the supervised process meets the process-defined acceptance across the required runs." },
  "PQ:1": { use: "csv-backup-restore", title: "Change control, periodic review, backup/restore, continuity" },
  "PQ:2": { use: "requalification", title: "Define requalification triggers and review frequency" }
};

const HOWTO_bmsems = {
  "IQ:0": { use: "iq-components", title: "Verify monitoring servers, sensors/transmitters, network per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm software version and point/tag configuration / mapping" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm field sensors (T, RH, DP, particle) calibrated",
    accept: "Temperature, RH, differential-pressure, particle, and other monitored sensors calibrated and traceable." },
  "IQ:3": { use: "csv-security-audit", title: "Confirm security, roles, and audit trail" },
  "IQ:4": { use: "iq-instrument-inventory", title: "Build a point/configuration inventory and file documentation" },

  "OQ:0": { title: "Sensor reading accuracy vs calibrated references",
    steps: ["At each point, compare the monitored value to a calibrated reference.","Confirm within the data-sheet tolerance."],
    accept: "Each monitored value matches a calibrated reference within the data-sheet tolerance." },
  "OQ:1": { title: "Alarm verification at configured limits",
    steps: ["Drive each point past its high/low/excursion limit.","Confirm the alarm triggers, annunciates, and logs."],
    accept: "Alarms trigger at the configured action/alert limits, annunciate, and log - limits are area/grade-defined (e.g. Annex 1), do not assume.",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "OQ:2": { title: "Continuous data capture, storage, and trend/report",
    steps: ["Confirm the sampling rate and continuous capture.","Confirm secure storage.","Generate trends/reports and confirm no gaps."],
    accept: "Data is captured at the defined rate, stored securely, and trends/reports generate correctly without gaps." },
  "OQ:3": { use: "data-integrity-test", title: "Audit-trail and data-integrity (changes + acknowledgements)" },
  "OQ:4": { use: "power-recovery", title: "Power/network-loss: gaps flagged and data buffered/recovered",
    accept: "On power/network loss, gaps are flagged and data buffered/recovered per the design." },
  "OQ:5": { use: "cal-verify", title: "Confirm sensors within tolerance before functional testing" },

  "PQ:0": { use: "monitoring-record", title: "Monitoring performance over a representative period",
    accept: "Over a representative period, the system reliably captures conditions and detects/records excursions per the monitoring plan." },
  "PQ:1": { title: "Alignment with qualified area limits and the EM program",
    steps: ["Compare monitored limits/locations to the qualified area grades.","Confirm alignment with the environmental-monitoring program."],
    accept: "Monitored limits and locations align with the qualified area grades and the environmental-monitoring program.",
    link: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf", linkLabel: "EU GMP Annex 1" },
  "PQ:2": { use: "requalification", title: "Change control, periodic review, backup, requalification" }
};

const HOWTO_mes = {
  "IQ:0": { use: "iq-components", title: "Verify application servers, database, and clients per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm software version, configuration, and custom-code baseline" },
  "IQ:2": { title: "Confirm master batch record templates/workflows loaded and version-controlled",
    steps: ["Confirm the master templates/workflows are loaded.","Confirm correctness vs the specification.","Confirm version control."],
    accept: "Master batch record templates/workflows are loaded, correct, and version-controlled per the specification." },
  "IQ:3": { use: "csv-security-audit", title: "Confirm security, roles, e-signatures, and audit trail" },
  "IQ:4": { use: "iq-instrument-inventory", title: "Build a configuration inventory and file documentation" },

  "OQ:0": { title: "Workflow execution: steps, sequencing, enforced order",
    steps: ["Execute a workflow.","Confirm process steps, sequencing, and enforced order per the functional spec."],
    accept: "Process steps, sequencing, and enforced order execute per the functional spec." },
  "OQ:1": { title: "Data-entry controls: limit checks, mandatory fields, calculations",
    steps: ["Enter valid and invalid data.","Confirm limit checks and mandatory-field enforcement.","Confirm built-in calculations are correct."],
    accept: "Limit checks, mandatory-field enforcement, and built-in calculations behave correctly and reject invalid entries." },
  "OQ:2": { title: "E-signature and review-by-exception workflows",
    steps: ["Execute signing and review-by-exception steps.","Confirm the defined roles/approvals are enforced."],
    accept: "Electronic-signature and review-by-exception workflows enforce the defined roles and approvals." },
  "OQ:3": { use: "data-integrity-test", title: "Audit-trail captures all GxP-relevant actions" },
  "OQ:4": { use: "interface-test", title: "Interface verification (ERP, SCADA, LIMS)" },

  "PQ:0": { use: "reproducibility-runs", title: "End-to-end: representative batches execute with complete EBR",
    accept: "Representative batches execute end-to-end with a complete, accurate electronic batch record and correct exception handling." },
  "PQ:1": { use: "csv-backup-restore", title: "Change control, periodic review, backup/restore, archival" },
  "PQ:2": { use: "requalification", title: "Define requalification triggers and review frequency" }
};

const HOWTO_historian = {
  "IQ:0": { use: "iq-components", title: "Verify historian/logger hardware or server and storage per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm software/firmware version and configuration baseline" },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm sensors/inputs calibrated or tags map to calibrated sources",
    accept: "Logger sensors/inputs are calibrated and traceable, or historized tags map to calibrated source instruments." },
  "IQ:3": { use: "csv-security-audit", title: "Confirm security, roles, time sync, and audit trail" },
  "IQ:4": { use: "iq-instrument-inventory", title: "Build a configuration inventory and file documentation" },

  "OQ:0": { title: "Recording accuracy vs calibrated references",
    steps: ["Apply known references across the range.","Confirm logged values match within the data-sheet tolerance."],
    accept: "Logged values match calibrated references within the data-sheet tolerance across the range." },
  "OQ:1": { title: "Sampling interval and capacity without gaps",
    steps: ["Confirm the configured sampling interval.","Run for the required duration.","Confirm no gaps and adequate capacity."],
    accept: "Data is captured at the defined interval without gaps over the required duration/capacity." },
  "OQ:2": { use: "data-integrity-test", title: "Data integrity: time-stamps, secure storage, retrieval/export" },
  "OQ:3": { title: "Audit-trail captures configuration and data-handling actions",
    steps: ["Make configuration and data-handling changes.","Confirm the audit trail records who/what/when."],
    accept: "Audit trail captures configuration changes and data-handling actions with who/what/when." },
  "OQ:4": { use: "power-recovery", title: "Power-loss / battery: data retained and gaps flagged",
    accept: "On power loss / low battery, recorded data is retained and any gaps are flagged." },
  "OQ:5": { use: "cal-verify", title: "Confirm inputs within tolerance before functional testing" },

  "PQ:0": { use: "monitoring-record", title: "In-use: reliably records intended data over a representative run",
    accept: "Over a representative run, the system reliably records the intended data with full integrity - limits/duration are study/process-defined, do not assume." },
  "PQ:1": { use: "csv-backup-restore", title: "Backup/restore, archival, and readability over retention" },
  "PQ:2": { use: "requalification", title: "Change control, periodic review, requalification" }
};

const HOWTO_patanalyzer = {
  "IQ:0": { use: "iq-components", title: "Verify analyzer, probe/interface, and in-line installation per URS" },
  "IQ:1": { use: "csv-security-audit", title: "Confirm PAT software, model environment, and Part 11 controls",
    accept: ["Software and model environment installed.","Audit trail and access controls configured per Part 11."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm certified spectral standards on hand and in date",
    accept: "Certified wavelength/wavenumber and photometric/intensity standards available, traceable, and in date." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Wavelength / wavenumber accuracy and repeatability",
    steps: ["Measure the certified spectral standard.","Confirm axis accuracy and repeatability against certified values."],
    accept: "Wavelength/wavenumber accuracy and repeatability within the compendial/data-sheet tolerance against certified standards.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <856>" },
  "OQ:1": { title: "Photometric / intensity response, noise, and linearity",
    steps: ["Run intensity/photometric standards.","Assess response, noise, and (NIR) linearity vs the requirement."],
    accept: "Photometric/intensity response, noise, and linearity meet the data-sheet/compendial requirement." },
  "OQ:2": { title: "Probe/interface performance in-line",
    steps: ["Confirm path length and optical interface.","Confirm representative, stable spectra in the stream.","Confirm fouling resistance."],
    accept: "Probe/interface gives representative, stable spectra in the process stream (path length, fouling resistance verified)." },
  "OQ:3": { use: "cal-verify", title: "Confirm standards/instrument within tolerance before testing" },

  "PQ:0": { title: "Chemometric model validation vs the reference method",
    steps: ["Assemble the validation set spanning the design range.","Compare model predictions to the validated reference method.","Assess accuracy, precision, range, and robustness (ICH Q2 / ASTM E1655)."],
    accept: "The model predicts within the acceptance (accuracy, precision, range, robustness) vs the validated reference method per ICH Q2 / ASTM E1655 - model/method-defined, do not assume.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - ICH Q2" },
  "PQ:1": { title: "Real-time performance supporting the control decision",
    steps: ["Run in-process predictions during representative batches.","Confirm they track the reference.","Confirm they reliably support the control decision (e.g. endpoint)."],
    accept: "In-process predictions track the reference and reliably support the control decision (e.g. blend/dry endpoint) across runs." },
  "PQ:2": { title: "Model lifecycle: maintenance, drift monitoring, re-validation",
    steps: ["Define model maintenance and drift monitoring.","Define re-validation triggers (raw-material/process/instrument change)."],
    accept: "Model maintenance, drift monitoring, and re-validation triggers are defined per a managed lifecycle.",
    link: "https://www.ich.org/page/quality-guidelines", linkLabel: "ich.org - ICH Q12" },
  "PQ:3": { use: "requalification", title: "Define requalification and ongoing performance-verification frequency" }
};

const HOWTO_inlineprobe = {
  "IQ:0": { use: "iq-components", title: "Verify probes, transmitter, fittings, and integration per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm sanitary / sterilizable design where required",
    accept: ["Probe fittings are sanitary and sterilizable (SIP/autoclave-able) where the process requires.","Cleanable per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm certified buffers/standards (pH, conductivity, DO) in date",
    accept: "Certified pH buffers, conductivity standards, and DO references available, traceable, and in date." },
  "IQ:3": { use: "io-verification", title: "Confirm transmitter signal ranged and mapped to the control system",
    accept: "Transmitter signal is correctly ranged, scaled, and mapped to the control-system tag." },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "pH accuracy and slope against certified buffers",
    steps: ["Calibrate/verify against certified buffers across the range.","Confirm accuracy and electrode slope."],
    accept: "pH accuracy within tolerance and electrode slope acceptable across certified buffers.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <791>" },
  "OQ:1": { title: "Conductivity accuracy / cell constant",
    steps: ["Measure certified conductivity standards.","Confirm accuracy and cell constant."],
    accept: ["Conductivity accuracy within tolerance against certified standards.","Cell constant verified."],
    link: "https://www.usp.org", linkLabel: "usp.org - USP <645>" },
  "OQ:2": { title: "DO / other probe calibration and response",
    steps: ["Run zero/span calibration for the DO (or other) probe.","Confirm response within the data-sheet tolerance."],
    accept: "DO (or other) probe zero/span calibration and response within the data-sheet tolerance." },
  "OQ:3": { use: "io-verification", title: "Loop check: value at control system matches probe/transmitter" },
  "OQ:4": { use: "cal-verify", title: "Confirm standards/instruments within tolerance before testing" },

  "PQ:0": { title: "In-process: probe tracks and supports control within range",
    steps: ["Run the process.","Confirm the probe tracks correctly.","Confirm it supports control within the qualified range across runs."],
    accept: "In-process, the probe tracks correctly and supports control within the qualified range across runs - control limits are process-defined, do not assume." },
  "PQ:1": { title: "Sterilization/cleaning survivability and re-calibration",
    steps: ["Subject the probe to the SIP/clean cycles where applicable.","Confirm survivability.","Define re-calibration frequency."],
    accept: ["Probe survives the SIP/clean cycles where applicable.","Re-calibration frequency defined."] },
  "PQ:2": { use: "requalification", title: "Define routine calibration and requalification" }
};

const HOWTO_onlinetoc = {
  "IQ:0": { use: "iq-components", title: "Verify analyzer, sample line/flow cell, and integration per URS/P&ID" },
  "IQ:1": { use: "csv-security-audit", title: "Confirm software, audit trail, and access controls",
    accept: ["Software installed.","Audit trail and access controls configured per Part 11 / Annex 11."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm TOC system-suitability standards on hand and in date",
    accept: "Sucrose and 1,4-benzoquinone system-suitability standards available, traceable, and in date." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "TOC system suitability (response efficiency) per USP <643>",
    steps: ["Analyze the sucrose and 1,4-benzoquinone standards.","Calculate response efficiency.","Compare to USP <643> limits."],
    accept: "Response efficiency within USP <643> limits using the sucrose / 1,4-benzoquinone standards.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <643>" },
  "OQ:1": { title: "Accuracy/linearity across the range and LOD",
    steps: ["Run a TOC linearity series.","Confirm accuracy/linearity and the limit of detection vs the method."],
    accept: "TOC accuracy/linearity across the range and LOD within the method requirement." },
  "OQ:2": { title: "Continuous-monitoring functions and reading to control system",
    steps: ["Confirm sampling interval and continuous capture.","Confirm alarms.","Confirm the reading to the control system."],
    accept: "Sampling interval, continuous data capture, alarms, and the reading to the control system operate per the spec without gaps." },
  "OQ:3": { use: "cal-verify", title: "Confirm standards/instrument within tolerance before testing" },

  "PQ:0": { title: "Online TOC tracks the reference and detects excursions",
    steps: ["Run online TOC against periodic offline/lab samples.","Confirm tracking over a representative period.","Confirm excursion detection."],
    accept: "Online TOC tracks the lab/offline reference and detects excursions over a representative period - alert/action limits are system/process-defined, do not assume.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <643>" },
  "PQ:1": { use: "data-integrity-test", title: "Alarm/limit alignment and monitoring data integrity",
    accept: ["Alarm/limit configuration aligns with the water-system/cleaning acceptance.","Monitoring data is complete and tamper-evident."] },
  "PQ:2": { use: "requalification", title: "Define routine system-suitability, monitoring, and requalification" }
};

const HOWTO_flowcontroller = {
  "IQ:0": { use: "iq-components", title: "Verify meter/controller, fittings, and flow-path integration per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm sanitary / sterilizable wetted parts where required",
    accept: ["Wetted parts are sanitary and sterilizable where required.","Cleanable per ASME BPE."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm traceable calibration and signal mapped to control system",
    accept: ["Meter/controller calibrated and traceable.","Output signal correctly ranged and mapped to the control-system tag."] },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Flow accuracy and repeatability vs a traceable reference",
    steps: ["Run reference flows across the range.","Confirm accuracy and repeatability vs the traceable reference."],
    accept: "Measured flow within the data-sheet tolerance against a traceable reference and repeatable across the range." },
  "OQ:1": { use: "control-loop-test", title: "Controller setpoint tracking and stability",
    accept: "The controller reaches and holds the flow setpoint with stable response (setpoints are process-defined - do not assume)." },
  "OQ:2": { use: "io-verification", title: "Totalizer/dosing accuracy and loop check at control system" },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms and fail-safe behavior (e.g. signal loss)" },
  "OQ:4": { use: "cal-verify", title: "Confirm reference/instrument within tolerance before testing" },

  "PQ:0": { title: "In-process metering/dosing under automation control",
    steps: ["Run the process under automation control.","Confirm metering/dosing meets the process acceptance across runs."],
    accept: "In-process, metering/dosing meets the process-defined acceptance under automation control across runs." },
  "PQ:1": { title: "Sterilization/cleaning survivability and re-calibration",
    steps: ["Subject the device to SIP/clean cycles where applicable.","Confirm survivability.","Define re-calibration frequency."],
    accept: ["Device survives SIP/clean cycles where applicable.","Re-calibration frequency defined."] },
  "PQ:2": { use: "requalification", title: "Define routine calibration and requalification" }
};

const HOWTO_reactor = {
  "IQ:0": { use: "iq-components", title: "Verify reactor, agitator, jacket, condenser, charge/discharge per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials of construction and seals suit the chemistry",
    accept: ["Materials (glass-lined / Hastelloy / SS316L) and seals are chemically compatible and rated for the duty.","Vessel built to the applicable pressure-vessel code."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm temperature, pressure, agitation, and weight/level instruments calibrated",
    accept: "Temperature, pressure, agitation-speed, and weight/level instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Jacket temperature control (heat/cool) accuracy and ramp",
    steps: ["Run heating and cooling to representative setpoints.","Confirm the batch holds within the data-sheet tolerance.","Confirm ramp performance."],
    accept: "Jacket heating/cooling holds the batch within the data-sheet tolerance and ramps correctly (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { use: "speed-verification", title: "Agitation speed accuracy and torque/power monitoring",
    accept: ["Agitation speed within the data-sheet tolerance across the range.","Torque/power monitored where used."] },
  "OQ:2": { title: "Pressure / vacuum and addition-rate control",
    steps: ["Verify pressure/vacuum control.","Verify addition-rate (charge) control.","Compare to the data sheet."],
    accept: "Pressure/vacuum and addition-rate control within the data-sheet tolerance." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, relief, and safety functions" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: reaction step CQAs at qualified CPPs",
    accept: "At the validated CPPs, the step meets conversion/yield/impurity acceptance - CPPs/CQAs are product/route-defined (ICH Q7), do not assume." },
  "PQ:1": { title: "Confirm the qualified batch-size / working-volume range",
    steps: ["Run at minimum and maximum batch size.","Confirm mixing/heat-transfer performance holds."],
    accept: "Performance demonstrated across the qualified batch-size / working-volume range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_filterdryer = {
  "IQ:0": { use: "iq-components", title: "Verify vessel, filter media, agitator, jacket, charge/discharge per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, seals, and filter-media spec suit the chemistry",
    accept: "Materials, seals, and filter media are chemically compatible, product-contact appropriate, and cleanable per ASME BPE." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm pressure/vacuum, temperature, agitation, and weight instruments calibrated",
    accept: "Pressure/vacuum, temperature, agitation, and weight instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Pressure / vacuum control (filtration and drying)",
    steps: ["Run the filtration phase and confirm pressure control.","Run the drying phase and confirm vacuum control.","Compare to the data sheet."],
    accept: "Pressure/vacuum control within the data-sheet tolerance across filtration and drying (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Jacket temperature control for vacuum drying",
    steps: ["Run drying at representative jacket temperature.","Confirm the cake holds within the data-sheet tolerance."],
    accept: "Jacket temperature holds the cake within the data-sheet tolerance during drying." },
  "OQ:2": { title: "Agitation: speed, raise/lower, smoothing/discharge",
    steps: ["Verify agitation speed control.","Verify agitator raise/lower.","Confirm smoothing and discharge operation."],
    accept: "Agitation speed, raise/lower, and discharge functions operate within the data-sheet tolerance." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (over-pressure/containment)" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: wash efficiency and dryness (LOD/residual solvent)",
    accept: "At the validated CPPs, wash efficiency and final dryness (LOD, residual solvent vs ICH Q3C limits) meet the process acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Confirm uniform drying (no wet pockets) across the cake",
    steps: ["Sample the cake at multiple positions/depths.","Confirm uniform dryness with no wet pockets across the qualified load range."],
    accept: "Drying is uniform across the cake (no wet pockets) across the qualified load range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_processcentrifuge = {
  "IQ:0": { use: "iq-components", title: "Verify bowl/basket, drive, feed/discharge, knife per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials, seals, and balance/containment design",
    accept: ["Materials/seals chemically compatible and cleanable.","Rotating assembly balanced and contained per the machinery/safety design."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm speed, vibration, feed-rate, and weight/level instruments calibrated",
    accept: "Speed, vibration, feed-rate, and weight/level instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "speed-verification", title: "Spin speed (RCF) accuracy across the range",
    accept: "Spin speed / RCF within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Feed-rate and automatic cycle sequencing",
    steps: ["Verify feed-rate control.","Run the automatic cycle (feed/spin/wash/discharge).","Confirm correct sequencing."],
    accept: "Feed rate and the automatic cycle sequence operate within the data-sheet tolerance." },
  "OQ:2": { title: "Vibration/imbalance monitoring and discharge function",
    steps: ["Confirm vibration/imbalance monitoring.","Confirm the knife/discharge mechanism operates."],
    accept: "Vibration/imbalance monitoring and discharge mechanism operate as designed." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (overspeed/imbalance/lid)" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: separation efficiency, cake dryness/clarity, yield",
    accept: "At the validated CPPs, separation efficiency, cake dryness/clarity, and yield meet the process acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Confirm the qualified load/feed range",
    steps: ["Run at minimum and maximum load/feed.","Confirm performance holds."],
    accept: "Performance demonstrated across the qualified load/feed range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_jetmill = {
  "IQ:0": { use: "iq-components", title: "Verify mill chamber, nozzles, feeder, classifier, collection per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm wear-resistant materials, seals, and explosion protection",
    accept: ["Product-contact / wear surfaces and seals per design.","Static earthing / explosion protection (ATEX/NFPA) in place for the fine powder."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm gas-pressure, feed-rate, and gas-flow instruments calibrated",
    accept: "Gas-pressure, feed-rate, and gas-flow instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Grinding / pushing gas pressure control",
    steps: ["Set grinding and pushing gas pressures across the range.","Confirm control within the data-sheet tolerance."],
    accept: "Grinding and pushing gas pressures within the data-sheet tolerance across the range (CPP setpoints are process-defined - do not assume)." },
  "OQ:1": { title: "Feed-rate accuracy and feeder function",
    steps: ["Verify feed-rate gravimetrically.","Confirm the feeder functions correctly."],
    accept: ["Feed rate within the data-sheet tolerance.","Feeder functions correctly."] },
  "OQ:2": { title: "Collection/filter integrity and containment",
    steps: ["Confirm collection/filter integrity.","Confirm powder-handling/containment controls product loss/cross-contamination."],
    accept: "Collection/filter integrity and containment operate to control product loss / cross-contamination." },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (explosion vent/earthing)" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: target particle-size distribution (D50/D90)",
    accept: "At the validated gas pressures/feed, the PSD (e.g. D50/D90 in the low-micron range) meets the process acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Confirm fines/agglomeration and amorphous-content limits",
    steps: ["Assess fines/agglomeration.","Where relevant, confirm amorphous content within the method acceptance."],
    accept: "Fines/agglomeration and (where relevant) amorphous content within the method acceptance." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_spraydryer = {
  "IQ:0": { use: "iq-components", title: "Verify chamber, atomizer, air handling, cyclone, collection per URS/P&ID" },
  "IQ:1": { use: "iq-components", title: "Confirm materials/finish, seals, and solvent/explosion protection",
    accept: ["Product-contact materials/finish per design.","For solvent feeds, inert (N2) loop / explosion protection (ATEX/NFPA) in place."] },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm temperature, atomization, feed, airflow, and O2 instruments calibrated",
    accept: "Temperature, atomization, feed-rate, airflow, and O2 (inert-loop) instruments calibrated and traceable." },
  "IQ:3": { title: "Install and secure the PLC/HMI control system", steps: ["Install the control system and confirm version.","Configure unique-user accounts, access levels, and recipe management.","Enable and verify the audit trail and electronic batch-record controls (Part 11).","Confirm secure data storage and backup."], accept: ["PLC/HMI control system installed.","Audit trail, access, recipe management, and EBR controls configured per Part 11."], link: "https://www.ecfr.gov/current/title-21/part-11", linkLabel: "ecfr.gov - 21 CFR Part 11" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Inlet air temperature control and outlet response",
    steps: ["Set inlet temperatures and confirm control.","Confirm outlet temperature tracks correctly."],
    accept: ["Inlet temperature controls within the data-sheet tolerance.","Outlet temperature tracks correctly (CPP setpoints are process-defined - do not assume)."] },
  "OQ:1": { title: "Atomization and feed-rate control",
    steps: ["Verify atomization (nozzle pressure / wheel speed).","Verify feed rate.","Compare to the data sheet."],
    accept: "Atomization and feed rate within the data-sheet tolerance." },
  "OQ:2": { title: "Airflow / drying-gas and inert-loop O2 control",
    steps: ["Verify airflow/drying-gas control.","For solvent feeds, confirm inert-loop O2 is held below the safe limit."],
    accept: ["Airflow/drying-gas control within tolerance.","Inert-loop O2 held below the safe limit for solvent feeds."] },
  "OQ:3": { use: "alarm-challenge-tcu", title: "Verify alarms, interlocks, and safety (over-temp/O2/explosion)" },
  "OQ:4": { use: "cal-verify" },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: residual moisture/solvent, PSD, amorphous content",
    accept: "At the validated CPPs, residual moisture/solvent (ICH Q3C), particle size/morphology, and amorphous content (for ASD) meet the process acceptance - CPPs/CQAs are product-defined, do not assume." },
  "PQ:1": { title: "Confirm yield and the qualified feed/throughput range",
    steps: ["Confirm yield.","Run across the feed/throughput range and confirm performance."],
    accept: "Yield and performance demonstrated across the qualified feed/throughput range." },
  "PQ:2": { use: "requalification", title: "Reproducibility across consecutive batches; define requalification" }
};

const HOWTO_shipper = {
  "IQ:0": { use: "iq-components", title: "Verify shipper design (insulation, coolant, payload) matches approved DQ",
    accept: "Shipper components (insulation, coolant, payload configuration) match the approved design / design qualification." },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm test chamber and data loggers calibrated",
    accept: "The thermal-test chamber and temperature data loggers are calibrated and traceable for the qualification." },
  "IQ:2": { use: "iq-location", title: "Confirm coolant conditioning (pack-out) and payload simulation defined",
    accept: "The coolant conditioning and pack-out procedure and the payload simulation are defined and approved per the URS." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Thermal-profile performance (ISTA 7E summer and winter)",
    steps: ["Pack out the shipper with the qualified payload and coolant.","Place loggers at worst-case positions.","Run the ISTA 7E summer profile, then the winter profile.","Confirm the payload stays within the product temperature limits for the rated duration."],
    accept: "With the qualified pack-out, the payload stays within the product temperature limits under the ISTA 7E summer and winter profiles for the rated duration.",
    link: "https://www.ista.org", linkLabel: "ista.org - ISTA 20 / 7E" },
  "OQ:1": { title: "Duration: hold time vs maximum transit + margin",
    steps: ["Run to the maximum anticipated transit time plus margin.","Confirm the payload remains in range throughout."],
    accept: "The shipper holds the payload in range for the maximum anticipated transit time plus the defined safety margin (duration is lane-defined - do not assume)." },
  "OQ:2": { title: "Payload/configuration: min/max and worst-case pack-out",
    steps: ["Test at minimum and maximum payload.","Test the worst-case pack-out configuration.","Confirm temperature is maintained."],
    accept: "Temperature is maintained across the qualified payload range (min/max) and worst-case pack-out configuration." },
  "OQ:3": { title: "Environmental stress: shock, vibration, humidity",
    steps: ["Subject the shipper to the defined distribution (shock/vibration/humidity) testing.","Confirm no loss of thermal integrity."],
    accept: "The shipper withstands the defined shock, vibration, and humidity (distribution) testing without loss of thermal integrity.",
    link: "https://www.ista.org", linkLabel: "ista.org - distribution testing" },

  "PQ:0": { title: "Real-lane PQ: monitored shipments on representative lanes",
    steps: ["Pack out per the qualified SOP.","Ship on representative real lanes with monitoring.","Confirm the payload stays in range across seasons."],
    accept: "Monitored shipments on representative real lanes confirm the payload stays in range across seasons - the bridge from chamber testing to real distribution.",
    link: "https://health.ec.europa.eu/system/files/2016-11/2013_c343_01_en_0.pdf", linkLabel: "EU GDP guidelines" },
  "PQ:1": { use: "loading-pattern", title: "Document each qualified shipper/lane/season and the pack-out SOP" },
  "PQ:2": { use: "requalification", title: "Define requalification triggers (design/coolant/lane change) and review" }
};

const HOWTO_transportlane = {
  "IQ:0": { title: "Define the lane and complete a route risk assessment",
    steps: ["Define origin, destination, modes, hand-offs, dwell/storage points.","Map seasonal climate exposure.","Complete and approve a documented route risk assessment."],
    accept: "The lane is fully defined (origin, destination, modes, hand-offs, dwell points, seasons) and a documented route risk assessment is in place.",
    link: "https://health.ec.europa.eu/system/files/2016-11/2013_c343_01_en_0.pdf", linkLabel: "EU GDP guidelines" },
  "IQ:1": { use: "iq-calibration-certs", title: "Confirm qualified packaging and calibrated monitoring devices for the lane",
    accept: "The lane uses a qualified shipper/packaging and calibrated, traceable temperature monitoring devices." },
  "IQ:2": { title: "Confirm responsibilities, chain-of-custody, and deviation procedures",
    steps: ["Agree responsibilities with logistics partners.","Define chain-of-custody.","Define deviation/escalation procedures."],
    accept: "Responsibilities, chain-of-custody, and deviation/escalation procedures are agreed and documented with the logistics partners." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Baseline lane profiling over representative trips",
    steps: ["Run representative trips with full monitoring.","Characterize the temperature profile.","Identify worst-case segments / dwell points."],
    accept: "Representative trips characterize the lane temperature profile and identify worst-case segments/dwell points (profile is lane-defined - do not assume)." },
  "OQ:1": { use: "monitor-sensor-placement", title: "Confirm monitoring placement, sampling rate, and data capture",
    accept: "Monitoring device placement, sampling rate, and data capture are defined and capture the full journey without gaps." },
  "OQ:2": { title: "Handling/hand-off controls and contingency procedures",
    steps: ["Verify handling/hand-off controls operate.","Verify contingency (excursion) procedures."],
    accept: "Handling/hand-off controls and contingency (excursion) procedures operate as designed." },

  "PQ:0": { title: "Lane PQ: monitored shipments across seasons stay in range",
    steps: ["Run monitored shipments across the relevant seasons.","Confirm the product stays within its temperature limits end-to-end."],
    accept: "Monitored shipments across the relevant seasons confirm the product stays within its temperature limits end-to-end - limits are product-stability-defined, do not assume.",
    link: "https://health.ec.europa.eu/system/files/2016-11/2013_c343_01_en_0.pdf", linkLabel: "EU GDP guidelines" },
  "PQ:1": { title: "Excursion handling and CAPA effectiveness",
    steps: ["Review any excursions observed.","Confirm they were handled per procedure with effective CAPA.","Confirm the lane's risk controls are adequate."],
    accept: ["Any excursions are handled per procedure with effective CAPA.","The lane's risk controls are confirmed adequate."] },
  "PQ:2": { use: "requalification", title: "Define requalification triggers (route/carrier/season/volume) and review" }
};

const HOWTO_refrigeratedvehicle = {
  "IQ:0": { use: "iq-components", title: "Verify vehicle, refrigeration unit, insulation, and monitoring per URS" },
  "IQ:1": { use: "iq-components", title: "Confirm refrigeration control, recorder, and alarm system installed",
    accept: "Refrigeration control, recorder, and alarm system installed and functional." },
  "IQ:2": { use: "iq-calibration-certs", title: "Confirm mapping and onboard monitoring sensors calibrated",
    accept: "Mapping sensors and onboard monitoring devices calibrated and traceable." },
  "IQ:3": { use: "iq-instrument-inventory" },

  "OQ:0": { use: "temp-map-empty", title: "Empty cargo-space temperature distribution (mapping)",
    accept: ["Setpoint is product-defined - do not assume.","Distribution within the protocol band across the cargo space.","Hot/cold spots identified."] },
  "OQ:1": { use: "pulldown", title: "Pull-down / door-open recovery",
    accept: "Pull-down time and door-open recovery meet the URS/product requirement." },
  "OQ:2": { use: "alarm-challenge-tcu", title: "Verify control accuracy, recorder, alarms, and door-open behavior" },
  "OQ:3": { use: "cal-verify", title: "Confirm mapping/monitoring sensors within tolerance before testing" },

  "PQ:0": { use: "temp-map-loaded", title: "Loaded cargo-space distribution with representative cargo",
    accept: "With representative loaded cargo, all positions stay within the product temperature limits over a representative route/duration." },
  "PQ:1": { use: "loading-pattern", title: "Confirm worst-case loading patterns and seasonal performance",
    accept: "Performance demonstrated for worst-case loading patterns and seasonal extremes." },
  "PQ:2": { use: "requalification", title: "Define requalification frequency and routine monitoring per GDP" }
};

const HOWTO_lims = {
  "IQ:0": { use: "iq-components", title: "Verify application servers, database, and clients per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm software version, configuration, and custom-code baseline" },
  "IQ:2": { title: "Confirm master data (specifications, methods, limits, products) loaded and version-controlled",
    steps: ["Confirm specifications, methods, limits, and product master data are loaded.","Confirm correctness.","Confirm version control."],
    accept: "Specifications, methods, limits, and product master data are loaded, correct, and version-controlled." },
  "IQ:3": { use: "csv-security-audit", title: "Confirm security, roles, e-signatures, and audit trail" },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Sample lifecycle: login, scheduling, workflow, status transitions",
    steps: ["Log in samples and schedule.","Execute the workflow.","Confirm status transitions per the functional spec."],
    accept: "Sample login, scheduling, workflow, and status transitions execute per the functional spec." },
  "OQ:1": { title: "Result entry, calculations, and specification/limit checking",
    steps: ["Enter results.","Confirm built-in calculations.","Confirm specification/limit checking flags out-of-spec/out-of-trend correctly."],
    accept: "Result entry, built-in calculations, and specification/limit checking correctly flag out-of-spec/out-of-trend results." },
  "OQ:2": { title: "E-signature and review/approval (release) workflows",
    steps: ["Execute signing and review/approval steps.","Confirm the defined roles/approvals are enforced for release."],
    accept: "Electronic-signature and review/approval (release) workflows enforce the defined roles and approvals." },
  "OQ:3": { use: "data-integrity-test", title: "Audit-trail captures all GxP-relevant actions (ALCOA+)" },
  "OQ:4": { use: "interface-test", title: "Interface verification (instruments, ERP, CDS)" },

  "PQ:0": { use: "reproducibility-runs", title: "End-to-end: samples flow login -> result -> spec check -> release",
    accept: "Representative samples flow end-to-end (login → result → spec check → release) with correct outcomes and exception handling." },
  "PQ:1": { use: "csv-backup-restore", title: "Change control, periodic review, backup/restore, archival" },
  "PQ:2": { use: "requalification", title: "Define requalification triggers and review frequency" }
};

const HOWTO_cds = {
  "IQ:0": { use: "iq-components", title: "Verify servers/clients, database, and instrument connections per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm software version, configuration, and patch level" },
  "IQ:2": { use: "csv-security-audit", title: "Confirm security, roles, password policy, e-signatures, audit trail" },
  "IQ:3": { title: "Confirm time sync and secure centralized data storage (no local-only data)",
    steps: ["Confirm time synchronization.","Confirm data is stored centrally and securely.","Confirm data cannot be held/altered only locally."],
    accept: "Time synchronization and secure, centralized data storage are configured so data cannot be held/altered locally." },
  "IQ:4": { use: "iq-instrument-inventory" },

  "OQ:0": { title: "Acquisition and integration accuracy vs known data",
    steps: ["Process known/reference data sets.","Confirm peak detection, integration, and calculations match expected values."],
    accept: "Peak detection, integration, and result calculations match expected values for known/reference data sets.",
    link: "https://www.usp.org", linkLabel: "usp.org - USP <1058>" },
  "OQ:1": { title: "Audit-trail completeness (acquisition, reprocessing, method changes)",
    steps: ["Acquire, reprocess, and change methods.","Confirm the audit trail captures each with who/what/when."],
    accept: "The audit trail captures acquisition, every reprocessing, and method/parameter changes with who/what/when." },
  "OQ:2": { title: "Access control prevents unauthorized data actions",
    steps: ["Attempt to delete/alter raw data at different privilege levels.","Confirm unauthorized actions are blocked and audit-trailed."],
    accept: ["Privilege levels prevent unauthorized actions.","Raw data cannot be deleted or altered without an audit-trailed, authorized action."] },
  "OQ:3": { use: "data-integrity-test", title: "Data integrity: results reproducible from raw data; exports match records" },
  "OQ:4": { use: "interface-test", title: "Interface verification (instrument control, LIMS/ERP)" },

  "PQ:0": { use: "reproducibility-runs", title: "End-to-end: method runs acquisition -> review -> approval with traceability",
    accept: "A representative method runs end-to-end (acquisition → processing → review → approval) with full data traceability and correct results." },
  "PQ:1": { use: "csv-backup-restore", title: "Backup/restore, archival, and retrieval/reprocessing of archived data" },
  "PQ:2": { use: "requalification", title: "Change control, periodic review, requalification" }
};

const HOWTO_deltav = {
  "IQ:0": { use: "iq-components", title: "Verify controllers, I/O, workstations, and network per design spec" },
  "IQ:1": { use: "csv-version-config", title: "Confirm DeltaV version, hotfixes/patches, and licensing baseline",
    accept: ["DeltaV version, hotfixes, and licensing match the approved, version-controlled baseline.","The configuration database is under version control."] },
  "IQ:2": { use: "io-verification", title: "Confirm I/O assignment, controller redundancy, and device commissioning",
    accept: ["Each I/O channel is assigned, commissioned, and ranged per the I/O list.","Controller redundancy configured per design."] },
  "IQ:3": { use: "csv-security-audit", title: "Confirm DeltaV accounts, function-security locks/keys, and audit trail",
    accept: "DeltaV user accounts, function-security locks/keys, and a secure, time-stamped audit trail are configured per Part 11 / Annex 11." },
  "IQ:4": { use: "iq-instrument-inventory", title: "Build a configuration inventory (controllers, I/O, modules, versions)" },

  "OQ:0": { use: "io-verification", title: "I/O verification: each channel reads/drives across range (loop check)" },
  "OQ:1": { use: "control-loop-test", title: "Control-module functionality: setpoint, PID, alarm/trip" },
  "OQ:2": { use: "interlock-test", title: "Interlock / permissive logic and module fail-safe states",
    accept: "Each interlock/permissive activates under its defined condition and modules go to the defined fail-safe state." },
  "OQ:3": { title: "DeltaV Batch / S88: phase logic and recipe execution",
    steps: ["Load a test recipe.","Execute phases/operations and observe the unit/phase state model.","Confirm correct sequencing, holds, and restarts per the recipe spec."],
    accept: "Phases, operations, and the unit/phase state model execute per the S88 recipe specification with correct sequencing and holds.",
    link: "https://www.isa.org", linkLabel: "isa.org \u2014 ISA-88" },
  "OQ:4": { use: "data-integrity-test", title: "Audit trail and Continuous Historian data integrity (ALCOA+)",
    accept: "The audit trail and Continuous Historian capture changes and process data completely, time-stamped and tamper-evident (ALCOA+)." },
  "OQ:5": { use: "power-recovery", title: "Power-loss / controller-failover to a safe defined state",
    accept: "On power loss or controller failover, the system returns to a safe, defined state without data loss." },

  "PQ:0": { use: "reproducibility-runs", title: "Process performance: process/batch meets acceptance under DeltaV control",
    accept: "Under routine DeltaV control, the process/batch meets the process-defined acceptance across the required runs \u2014 process/CQA-defined, do not assume." },
  "PQ:1": { use: "interface-test", title: "Interface verification (MES, historian, LIMS, instruments)" },
  "PQ:2": { use: "csv-backup-restore", title: "Change control, periodic review, backup/restore, DR (config + historian)",
    accept: "Change control, periodic review, backup/restore, and disaster recovery for the configuration database and historian are established and tested." },
  "PQ:3": { use: "requalification", title: "Define requalification triggers (upgrade/config/hardware) and review" }
};

const HOWTO_benchtopautoclave = {
  "IQ:0": {
    title: "Verify the received unit against the PO / URS",
    steps: ["Record make, model, and serial (e.g. a Tuttnauer EZ / 2540 / 3870-class unit).","Confirm chamber volume (commonly 19-29 L) and rated cycles against the URS.","Confirm the EN 13060 cycle class (N / S / B) on the nameplate / manual.","Reconcile each attribute to the PO / URS; raise a deviation for any mismatch."],
    accept: ["Make, model, and serial match the PO / URS and carry a unique asset ID.","Chamber volume and the EN 13060 cycle class match the URS.","Any deviation is recorded and resolved before OQ."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "IQ:1": {
    title: "Confirm installation drawings / wiring and the installed configuration",
    steps: ["Obtain the installation drawing / wiring diagram and the manual.","Walk down the installed unit: integral water reservoir, vacuum pump (Class B), condenser / drain, and printer.","Confirm there is no plant-steam connection (a benchtop unit makes its own steam from the reservoir).","Record any redline / deviation."],
    accept: ["The installed configuration matches the controlled drawings / manual.","Reservoir, vacuum pump (Class B), and drain are installed as designed.","Any redline is captured and approved."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "IQ:2": {
    title: "Verify utilities",
    steps: ["Verify the single-phase electrical supply (voltage / breaker) per the nameplate.","Verify feed-water / reservoir fill and water quality (distilled / low-mineral per the manufacturer - hard water scales the chamber and the level sensor).","Confirm the drain / waste reservoir and any condenser cooling.","Record results."],
    accept: ["Electrical supply matches the nameplate.","Feed-water quality meets the manufacturer spec (distilled / low-mineral).","Drain / waste reservoir is installed and routed."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:3": {
    title: "Confirm chamber, door / lid, gasket, and the door-cannot-open-under-pressure",
    steps: ["Inspect the door / lid gasket for integrity (a weak seal is the usual cause of a failed leak test).","Confirm the door-locking mechanism and the door-cannot-open-under-pressure interlock.","Confirm chamber and door are identified / tagged.","Record results."],
    accept: ["The door gasket is intact and seals evenly.","The door cannot be opened while the chamber is pressurised (interlock verified).","Chamber and door are identified."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:4": {
    title: "Verify chamber / product-contact materials of construction",
    steps: ["Verify the chamber and product-contact parts are the specified stainless steel.","Confirm any certificates where required.","Confirm gaskets / seals are the compatible grade.","Record results."],
    accept: ["Chamber and product-contact materials match the spec (stainless steel).","Certificates are on file where required.","Gaskets / seals are the compatible grade."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:5": {
    title: "Confirm the controller temperature sensor",
    steps: ["Confirm the controller temperature sensor (PT100) and the pressure transducer are installed and identified.","Confirm a validation / reference port (or wireless-logger access) for independent thermocouples is available - benchtop chambers are small, so a wireless logger or a port avoids a leak-prone feed-through.","Confirm each instrument carries a current, traceable certificate.","Record cal IDs / due dates."],
    accept: ["The controller PT100 and pressure transducer are installed, identified, and traceably calibrated.","A validation / reference access (port or wireless) for independent TCs is available.","Cal IDs / due dates are recorded and in date."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:6": {
    title: "Build an instrument / loop inventory",
    steps: ["List every controlling and recording instrument on the unit.","Record cal ID / tag, range, and cal due for each.","Confirm each is in date for the qualification window.","File the inventory."],
    accept: ["A complete inventory of controlling and recording instruments is recorded.","Each has a cal ID, range, and in-date calibration.","The inventory is filed with the protocol."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:7": {
    title: "Verify the control system, printer / data output",
    steps: ["Verify the controller firmware / software version against the spec.","Confirm the printer / data output (USB / Ethernet) records the cycle.","Confirm (if GxP) security, access levels, and audit-trail per Part 11 / Annex 11.","Record results."],
    accept: ["The controller software version matches the spec (GAMP categorized).","The printer / data output records the cycle.","Security / audit-trail are configured per Part 11 / Annex 11 where GxP."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:8": {
    title: "Confirm the EN 13060 cycle class",
    steps: ["Confirm the EN 13060 cycle class (N / S / B) of the unit.","Map the intended loads to the class: Class N = unwrapped solids only; Class S = specified loads; Class B = wrapped, porous, and hollow Type A/B (and liquids on a liquid cycle).","Confirm the unit class is adequate for the hardest intended load (a Class N unit must NOT process wrapped or hollow loads).","Document the class-to-load mapping for the OQ / PQ scope."],
    accept: ["The EN 13060 class (N / S / B) is confirmed and recorded.","Every intended load is within the unit class (Class N is unwrapped-solids only; wrapped / porous / hollow need Class B).","The class-to-load mapping defines the OQ type tests (vacuum leak, air detector, helix) and the PQ load patterns."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "IQ:9": {
    title: "Verify safety features",
    steps: ["Verify the pressure-relief / safety valve rating and certification.","Verify over-temperature / over-pressure protection.","Verify the door interlock and emergency stop.","Record results."],
    accept: ["The safety / relief valve is installed, rated, and certified.","Over-temperature / over-pressure protection is installed.","The door interlock and E-stop function."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "IQ:10": {
    title: "Confirm spare parts, maintenance manual, and vendor documentation are",
    steps: ["Confirm the spare-parts list and maintenance manual are received and filed.","Confirm the warranty and any certificates are on file.","Confirm the PM schedule (gasket, filter, water) is defined.","Record results."],
    accept: ["Spare-parts list and maintenance manual are received and filed.","Warranty and certificates are on file.","The PM schedule is defined."],
    link: "https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf", linkLabel: "ec.europa.eu - EU Annex 15"
  },
  "OQ:0": {
    title: "Calibration verification",
    steps: ["Before functional testing, verify the controller PT100, the validation TCs / loggers, and the pressure transducer against the independent reference, ice-point + steam-point (or a dry-block / oil-bath controlled to +/- 0.1 C), NIST-traceable.","Record the as-found error for each near 121.1 C / 134 C.","Confirm each is within tolerance (+/- 0.5 C for temperature); if not, calibrate and re-verify.","Repeat the verification post-study to bound drift."],
    accept: ["Every critical instrument is within tolerance against the traceable reference before testing.","The validation TCs / loggers pass a pre- AND post-study check: post-study drift within +/- 0.5 C of the pre-study value (or that sensor’s data is excluded).","Any out-of-tolerance instrument is corrected and re-verified. Per USP <1058> / ISO 17665."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:1": {
    title: "Verify control system functions",
    steps: ["Select each cycle and confirm the unit drives to the setpoint (121 C / 134 C).","Compare the display to the independent reference.","Confirm phase sequencing (vacuum pulses on Class B, plateau, exhaust, dry) and the out-of-spec abort.","Exercise access / security and confirm the change is audit-trailed (if GxP)."],
    accept: ["Cycle selection / setpoint entry works and the unit controls to setpoint.","The display agrees with the independent reference within tolerance.","Phase sequencing and the out-of-spec abort behave per design; changes are audit-trailed where GxP."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:2": {
    title: "Air-leakage",
    steps: ["Run the unit’s air-leakage / vacuum-hold test cycle (the chamber is evacuated and the pressure rise over time is measured).","Record the pressure-rise rate over the defined hold.","Compare to the EN 13060 limit (commonly <= 1.3 mbar/min).","Repeat for the required replicates."],
    accept: ["The chamber holds vacuum within the EN 13060 leak-rate limit (commonly <= 1.3 mbar/min) on each replicate.","No leak that would let air re-enter and block steam penetration is present.","The result is reproducible across replicates."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "OQ:3": {
    title: "Air-detector / steam-penetration test",
    steps: ["Run a Bowie-Dick test for porous-load air removal (chamber-wide) and read the CI for a uniform colour change.","Run a helix / hollow-load PCD (the relevant test for hollow instruments) and read the CI inside the lumen.","For validation, include a G. stearothermophilus BI in the helix and incubate.","Record CI (and BI) results for the required replicates."],
    accept: ["The Bowie-Dick CI shows uniform colour change (complete air removal across the chamber).","The helix / hollow PCD CI confirms steam penetrated the narrow lumen (the failure mode Bowie-Dick does not test).","Any helix BI shows complete kill. Per EN 13060."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "OQ:4": {
    title: "Empty-chamber heat distribution",
    steps: ["Position the validation TCs / loggers through the empty chamber per the placement map; record each S/N vs position.","Run the cycle at each sterilization setpoint (121 C / 134 C) and log across the plateau.","Download the data; assess sensor-to-sensor spread and the spread vs the control probe.","Identify the cold spot.","Record hottest, coldest, and mean plateau temperatures."],
    accept: ["Every TC holds the sterilization band (e.g. 121.1 +3/-0 C) across the plateau, at each setpoint.","Sensor-to-sensor spread is within the protocol limit (commonly <= 2 C), guard-banded by logger uncertainty.","The cold spot is identified for the loaded penetration study; >= 90 % of sensors valid, each passing pre/post calibration (post-study drift within +/- 0.5 C of the pre-study value (or that sensor’s data is excluded))."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:5": {
    title: "Verify equilibration time",
    steps: ["Start the cycle and mark when the controller signals the setpoint.","From the TC data, find when the slowest chamber sensor reaches the sterilization band.","Compute the equilibration time (setpoint signalled to band reached).","Repeat for the required replicates."],
    accept: ["The equilibration time (slowest sensor to reach the band) is within the protocol limit.","The hold / exposure timer starts only after the band is reached (come-up excluded).","The result is consistent across replicates."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:6": {
    title: "Verify the pressure / temperature relationship tracks saturated-steam conditions",
    steps: ["Log chamber temperature and pressure simultaneously across the plateau.","At several points, compare the measured temperature to the saturated-steam temperature for the measured pressure (steam tables).","Confirm the deviation is within the limit (saturated, not superheated or wet, steam).","Record the pairs in the table."],
    accept: ["Measured temperature tracks the saturated-steam temperature for the measured pressure throughout the plateau (within the limit).","No evidence of superheated (dry-acting) or wet steam.","The pressure / temperature relationship confirms saturated conditions."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:7": {
    title: "Alarm and interlock challenge",
    steps: ["Provoke each condition (low temperature, low water / reservoir, door, cycle-abort) and record the response.","Confirm the cycle aborts / flags the load as non-sterile on a fault.","Confirm local annunciation (and remote, if connected).","Confirm the event is recorded."],
    accept: ["Each alarm / interlock activates on its fault condition with correct annunciation.","A fault aborts the cycle and flags the load as not sterilized (no silent pass).","Events are recorded."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:8": {
    title: "Verify the printout / electronic record captures all critical",
    steps: ["Confirm the record / printout captures temperature, pressure, and time / F0 for the cycle.","Compare recorded values to the independent reference.","Confirm time / date stamps and that the record can be retrieved / exported.","Confirm a fault / abort event is written to the record."],
    accept: ["The record captures temperature, pressure, and time / F0, matching the reference within tolerance.","Time / date stamps are correct and the record can be retrieved / exported (Part 11 / ALCOA+ where GxP).","Fault / abort events are written to the record."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "OQ:9": {
    title: "Power-failure / recovery test",
    steps: ["During a running cycle, simulate a power failure for the defined duration.","Confirm the unit enters a safe state (door stays locked while pressurised).","Restore power and confirm the unit aborts to a documented state / flags the load (an interrupted cycle is not sterilized).","Confirm the event and recovery are logged."],
    accept: ["On power failure the unit fails safe (door locked while pressurised, no unsafe release).","On restore it aborts to a documented state and flags the load as not sterilized.","The event and recovery are logged."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665-1 (moist-heat)"
  },
  "PQ:0": {
    title: "Define and document each load pattern",
    steps: ["Define each load family: unwrapped solids (Class N), wrapped packs / pouches, porous packs, hollow Type A/B instruments, and liquids (slow-exhaust cycle), at min and max load.","For hollow loads, include a helix / PCD; place penetration TCs at the worst-case (coldest) positions and inside the worst hollow lumen.","Plan G. stearothermophilus BI placement at the cold spot and in the hollow PCD.","Identify and document the worst-case configuration so each loaded study is reproducible (a separate PQ per significantly different load)."],
    accept: ["Each load family is defined at min and max load, with placement documented.","Penetration TCs and a helix PCD sit at the worst-case (coldest / hollow-lumen) positions, with BIs alongside.","The worst-case configuration is identified; a separate PQ runs per significantly different load."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "PQ:1": {
    title: "Loaded heat-penetration study per load pattern",
    steps: ["Load the worst-case configuration; place penetration TCs at the cold spot and inside the hollow-load PCD; record positions.","Run the qualified cycle; log temperature at <= 1 s - 10 s and compute F0 at each position.","Confirm the cold spot and the hollow lumen achieve the required F0.","Record per-position peak temperature and F0."],
    accept: ["Every position - including the cold spot and the hollow-PCD lumen - achieves the required F0 (Z = 10 C, Tref 121.1 C).","F0 is computed from validated TCs that pass pre/post calibration (post-study drift within +/- 0.5 C of the pre-study value (or that sensor’s data is excluded)).","The result holds for the worst-case load."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "PQ:2": {
    title: "Confirm temperature uniformity within the loaded chamber",
    steps: ["With the worst-case load, log all TCs across the plateau.","Compute the maximum sensor-to-sensor spread during exposure.","Confirm no sensor falls below the lower sterilization limit.","Record the spread."],
    accept: ["The maximum temperature spread across the loaded chamber during exposure is within the protocol limit (commonly <= 2 C).","No sensor falls below the lower sterilization limit.","Uniformity holds under the worst-case load."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "PQ:3": {
    title: "Biological-indicator challenge",
    steps: ["Place BIs paired with the penetration TCs at the cold spot and inside the hollow PCD; record positions.","Run the qualified worst-case cycle.","Recover and incubate the BIs alongside positive and negative controls.","Read growth / no-growth and record against the paired F0."],
    accept: ["Complete kill (no growth) of all BIs at the cold spot and in the hollow PCD, with growing positive controls and sterile negative controls.","BI results correlate with the paired F0 / penetration data.","The targeted SAL (typically 10^-6) is demonstrated. Per ISO 17665 / EN 13060."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  },
  "PQ:4": {
    title: "Demonstrate reproducibility across the required number of consecutive successful",
    steps: ["Run the qualified worst-case cycle for >= 3 consecutive runs.","Each run, record F0 at every penetration position and the BI result.","Confirm every run meets F0 and complete BI kill, with all critical TCs operational.","Record per-run results."],
    accept: ["The worst-case load meets the required F0 at every position across >= 3 consecutive runs.","Complete BI kill on each run with valid controls; all critical TCs operational each run.","The result is reproducible. Per ISO 17665 / PDA TR1."],
    link: "https://www.pda.org/bookstore/product-detail/1216-tr-1-validation-of-moist-heat-sterilization", linkLabel: "PDA TR1 - moist-heat sterilization validation"
  },
  "PQ:5": {
    title: "Confirm post-cycle load condition",
    steps: ["Weigh representative wrapped / porous packs before the cycle.","Run the full cycle including the Class B vacuum drying phase.","Re-weigh immediately after; compute the moisture gain (and inspect for visible moisture).","Record per-pack moisture gain."],
    accept: ["Wrapped / porous loads are dry after the vacuum drying phase (moisture gain within the acceptance limit; no visible moisture).","No wet packs (a wet wrap is a contamination route on storage).","Dryness holds for the worst-case wrapped load."],
    link: "https://www.iso.org/standard/43187.html", linkLabel: "iso.org - ISO 17665 / EN 13060 (small sterilizers)"
  }
};

const HOWTO = {
  autoclave: HOWTO_autoclave,
  benchtopautoclave: HOWTO_benchtopautoclave,
  incubator: HOWTO_incubator,
  co2incubator: HOWTO_co2incubator,
  fridge: HOWTO_fridge,
  freezer: HOWTO_freezer,
  ult: HOWTO_ult,
  coldroom: HOWTO_coldroom,
  warehouse: HOWTO_warehouse,
  dryoven: HOWTO_dryoven,
  depyrooven: HOWTO_depyrooven,
  vacuumoven: HOWTO_vacuumoven,
  ln2: HOWTO_ln2,
  cryochamber: HOWTO_cryochamber,
  centrifuge: HOWTO_centrifuge,
  waterbath: HOWTO_waterbath,
  balance: HOWTO_balance,
  ph: HOWTO_ph,
  osmometer: HOWTO_osmometer,
  refractometer: HOWTO_refractometer,
  bioreactor: HOWTO_bioreactor,
  stability: HOWTO_stability,
  mufflefurnace: HOWTO_mufflefurnace,
  hotplate: HOWTO_hotplate,
  homogenizer: HOWTO_homogenizer,
  lyophilizer: HOWTO_lyophilizer,
  cleanroom: HOWTO_cleanroom,
  hvac: HOWTO_hvac,
  watersystem: HOWTO_watersystem,
  compressedair: HOWTO_compressedair,
  bsc: HOWTO_bsc,
  hplc: HOWTO_hplc,
  gc: HOWTO_gc,
  dissolution: HOWTO_dissolution,
  uvvis: HOWTO_uvvis,
  ftir: HOWTO_ftir,
  karlfischer: HOWTO_karlfischer,
  particlecounter: HOWTO_particlecounter,
  pipette: HOWTO_pipette,
  depyrotunnel: HOWTO_depyrotunnel,
  etosterilizer: HOWTO_etosterilizer,
  gammasterilizer: HOWTO_gammasterilizer,
  watercascade: HOWTO_watercascade,
  conductivitytoc: HOWTO_conductivitytoc,
  elementalanalyzer: HOWTO_elementalanalyzer,
  tablettester: HOWTO_tablettester,
  photostability: HOWTO_photostability,
  isolator: HOWTO_isolator,
  granulator: HOWTO_granulator,
  fbd: HOWTO_fbd,
  blender: HOWTO_blender,
  tabletpress: HOWTO_tabletpress,
  coater: HOWTO_coater,
  capsulefiller: HOWTO_capsulefiller,
  mill: HOWTO_mill,
  mixingvessel: HOWTO_mixingvessel,
  fillingline: HOWTO_fillingline,
  vialwasher: HOWTO_vialwasher,
  blisterline: HOWTO_blisterline,
  cipsip: HOWTO_cipsip,
  puresteam: HOWTO_puresteam,
  chromskid: HOWTO_chromskid,
  tffskid: HOWTO_tffskid,
  filterintegrity: HOWTO_filterintegrity,
  singleuse: HOWTO_singleuse,
  visualinspection: HOWTO_visualinspection,
  ccittester: HOWTO_ccittester,
  checkweigher: HOWTO_checkweigher,
  dispensingbooth: HOWTO_dispensingbooth,
  partswasher: HOWTO_partswasher,
  rowater: HOWTO_rowater,
  plc: HOWTO_plc,
  scada: HOWTO_scada,
  deltav: HOWTO_deltav,
  bmsems: HOWTO_bmsems,
  mes: HOWTO_mes,
  historian: HOWTO_historian,
  patanalyzer: HOWTO_patanalyzer,
  inlineprobe: HOWTO_inlineprobe,
  onlinetoc: HOWTO_onlinetoc,
  flowcontroller: HOWTO_flowcontroller,
  reactor: HOWTO_reactor,
  filterdryer: HOWTO_filterdryer,
  processcentrifuge: HOWTO_processcentrifuge,
  jetmill: HOWTO_jetmill,
  spraydryer: HOWTO_spraydryer,
  shipper: HOWTO_shipper,
  transportlane: HOWTO_transportlane,
  refrigeratedvehicle: HOWTO_refrigeratedvehicle,
  lims: HOWTO_lims,
  cds: HOWTO_cds
};
