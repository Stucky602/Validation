/* cqv-taxonomy.js  (auto-split from index.html)  5 consts */
const PROCESS_ORDER = ['gmp', 'gep', 'vmodel', 'e2500', 'bg5', 'cq', 'risk', 'urs', 'fs', 'ds', 'dq', 'iq', 'oq', 'pq', 'tempmap', 'calibration', 'sterilization', 'bg5x', 'pv', 'cleaning', 'protocol', 'change', 'capa', 'fat', 'sat', 'cots', 'gamp', 'di', 'csv', 'vlms'];

const CATEGORIES = [
  { key: "tcu",        label: "Temperature-Controlled Units (TCUs)", members: ["incubator","co2incubator","fridge","freezer","ult","coldroom","warehouse","stability","photostability"] },
  { key: "ovens",      label: "Ovens & Furnaces",                     members: ["dryoven","depyrooven","depyrotunnel","vacuumoven","mufflefurnace"] },
  { key: "sterilizers",label: "Sterilizers",                          members: ["autoclave","benchtopautoclave","etosterilizer","gammasterilizer","watercascade"] },
  { key: "cryo",       label: "Cryogenic",                            members: ["ln2","cryochamber"] },
  { key: "analytical",    label: "Analytical Instruments", members: ["balance","ph","osmometer","refractometer","dissolution","karlfischer","particlecounter","pipette","conductivitytoc","elementalanalyzer","tablettester"] },
  { key: "chromatography", label: "Chromatography", members: ["hplc","gc"] },
  { key: "spectroscopy",   label: "Spectroscopy", members: ["uvvis","ftir"] },
  { key: "lab",        label: "Lab Equipment",                        members: ["centrifuge","waterbath","hotplate","homogenizer","lyophilizer"] },
  { key: "bioreactor", label: "Bioprocess / Downstream",              members: ["bioreactor","chromskid","tffskid","filterintegrity","singleuse"] },
  { key: "soliddose",  label: "Solid-Dose Manufacturing",             members: ["granulator","fbd","blender","mill","tabletpress","coater","capsulefiller"] },
  { key: "sterilemfg", label: "Sterile / Liquid Manufacturing",       members: ["mixingvessel","vialwasher","fillingline","blisterline"] },
  { key: "inspection", label: "Inspection & Packaging",               members: ["visualinspection","ccittester","checkweigher"] },
  { key: "automation", label: "Automation & Control Systems",         members: ["plc","scada","deltav","bmsems","mes","historian"] },
  { key: "pat",        label: "Process Analytical (PAT)",             members: ["patanalyzer","inlineprobe","onlinetoc","flowcontroller"] },
  { key: "apisynth",   label: "API / Chemical Synthesis",             members: ["reactor","filterdryer","processcentrifuge","jetmill","spraydryer"] },
  { key: "informatics",label: "Lab Informatics",                      members: ["lims","cds"] },
  { key: "coldchain",  label: "Cold Chain & Distribution",           members: ["shipper","transportlane","refrigeratedvehicle"] },
  { key: "utilities",  label: "Utilities & Facilities",               members: ["cleanroom","hvac","watersystem","compressedair","bsc","isolator","cipsip","puresteam","rowater","dispensingbooth","partswasher"] },
  { key: "micro",      label: "Microbiology QC",                     members: ["airsampler","colonycounter","microbialid","steriltest","endotoxinreader"] },
  { key: "matchar",    label: "Materials Characterization",         members: ["laserdiffraction","dsc","tga","xrpd","bet"] },
  { key: "molcell",    label: "Molecular & Cell Analytics",         members: ["flowcytometer","cellcounter","qpcr","microplatereader","ce"] }
];

const PROCESS_GROUPS = [
  { key: 'found',   label: 'Foundations',            accent: '#c08bf0', ids: ['gmp', 'gep'],                              open: true  },
  { key: 'approach',label: 'C&Q Approaches',         accent: '#4fd1c5', ids: ['vmodel', 'e2500', 'bg5', 'cq'],            open: true  },
  { key: 'riskspec',label: 'Risk, Specs & Qualification', accent: '#e0935a', ids: ['risk', 'impact', 'urs', 'fs', 'ds', 'dq', 'iq', 'oq', 'pq'], open: false },
  { key: 'methods',  label: 'Methods & Metrology',    accent: '#d2a85e', ids: ['tempmap', 'calibration', 'sterilization'],               open: false },
  { key: 'exec',    label: 'Execution & Governance',  accent: '#9b8bea', ids: ['bg5x', 'pv', 'cleaning', 'protocol', 'change', 'capa'], open: false },
  { key: 'verify',  label: 'Verification & Systems', accent: '#5aa9e6', ids: ['commissioning', 'fat', 'sat', 'cots', 'gamp', 'di', 'csv', 'vlms'], open: false },
  { key: 'reg',     label: 'Regulations & Guidance', accent: '#9b8cf0', ids: ['landscape', 'authorities', 'regs', 'bodies'], open: false }
];

const SUPER_GROUPS = [
  { key:'data', label:'Automation & Data', sub:'Control and records', accent:'#9b8cf0', cats:['automation','informatics'] },
  { key:'lab', label:'Lab & Analytical', sub:'Testing and release', accent:'#58e6a8', cats:['analytical','chromatography','lab','matchar','micro','molcell','pat','spectroscopy'] },
  { key:'mfg', label:'Manufacturing & Process', sub:'Where the product is made', accent:'#e0935a', cats:['apisynth','bioreactor','inspection','ovens','soliddose','sterilemfg','sterilizers'] },
  { key:'storage', label:'Storage & Cold Chain', sub:'Holding product in spec', accent:'#5aa9e6', cats:['coldchain','cryo','tcu'] },
  { key:'util', label:'Utilities & Facilities', sub:'The plant that supports it all', accent:'#4fd1c5', cats:['utilities'] }
];

const PHASE_LABELS = { IQ: "Installation Qualification", OQ: "Operational Qualification", PQ: "Performance Qualification" };
