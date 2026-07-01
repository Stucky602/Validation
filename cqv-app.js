/* cqv-app.js  engine: logic, SW, dormant JA, APP_VERSION */

/* ---------- DATA ----------
   status: "verified" | "flagged" | "gmp"
   verified  = web-checked against issuing body
   flagged   = seeded from knowledge, confirm before relying
   gmp       = obvious engineering practice, no single clause
*/




/* ---------- HOW-TO PROCEDURE DATA (structured for future protocol generation) ---------- */
// HOWTO_autoclave - structured procedure data keyed by "phase:index" for DATA.autoclave
// Schema per entry: { title, steps:[...], materials?:[...], accept?:"", link?, linkLabel? }
// steps/materials kept atomic + ordered so a future protocol generator can consume directly.


/* ---------- SHARED HOW-TO LIBRARY ---------- */
// HOWTO_shared - generic procedures reused across equipment types.
// An equipment howto entry can reference one of these via { use:"id", ...overrides }.
// Overrides supported: title, accept, link, linkLabel, materials, steps, extraSteps[].
// Resolver (resolveHowto) merges shared base + overrides; extraSteps append to steps.


/* ---------- INCUBATOR HOW-TO (shared refs + overrides) ---------- */
// HOWTO_incubator - references shared procedures with incubator-specific overrides.
// { use:"shared-id", ...overrides } resolves via resolveHowto(); plain objects are custom.


/* ---------- TCU HOW-TO MAPS (shared refs + example overrides) ---------- */
// ---- TCU how-to maps (shared refs + process-appropriate EXAMPLE overrides) ----
// Setpoints/tolerances are always framed as recommended examples; the real limit comes
// from the URS / process / stored-product requirement.













/* ---------- OVEN / CRYO / LAB HOW-TO MAPS ---------- */
// ---- Ovens / Cryo / Lab how-to maps (shared refs + process-driven overrides) ----















/* ---------- ANALYTICAL + BIOREACTOR HOW-TO MAPS ---------- */
// ---- Analytical instruments + Bioreactor how-to maps (custom, standards-grounded) ----











// Registry keyed by equipment id -> { "PHASE:index": howto-or-ref }
















































































































































// Resolve a howto entry: if it references a shared procedure via {use}, merge shared + overrides.
function resolveHowto(entry) {
  if (!entry) return null;
  if (!entry.use) return entry;
  const base = HOWTO_shared[entry.use];
  if (!base) return entry;
  const merged = Object.assign({}, base);
  ['title','accept','link','linkLabel','materials','steps'].forEach(k => {
    if (entry[k] !== undefined) merged[k] = entry[k];
  });
  if (entry.extraSteps) merged.steps = (merged.steps || []).concat(entry.extraSteps);
  return merged;
}

/* ---------- PROCESS PAGES DATA ---------- */
// ---- PROCESS pages (V-Model, URS, FAT, SAT) ----
// Parallel to DATA but for processes, not equipment. No IQ/OQ/PQ phases.
// Each: { name, sub, desc, accent, icon, svg?, sections:[{title, body?, steps?, note?}], refs:[{label, link}] }





/* ---------- RENDER ---------- */
const eqList = document.getElementById('eqList');
const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const search = document.getElementById('search');
const domainFilter = document.getElementById('domainFilter');
let activeDomain = 'all';

// Category grouping: section key -> {label, members in display order}
/* ---------- i18n (EN / 日本語) ----------
   String-keyed JA dictionary. Anything not present falls back to English,
   so the app never breaks. Technical test strings, equipment descriptions,
   how-to detail, citation prose, and process-page bodies are EN-fallback
   for now (pending native pharma-QA translation). */
const JA = {
  // --- UI chrome ---
  "Search equipment": "機器を検索",
  "ALL EQUIPMENT": "機器一覧へ",
  "HOME": "ホーム",
  "How to": "手順",
  "Materials": "必要物",
  "Steps": "手順",
  "Acceptance": "合格基準",
  "Reference guide": "参考ガイド",
  "Source badges": "出典バッジ",
  "Process & lifecycle": "プロセスとライフサイクル",
  "No equipment matches.": "該当する機器がありません。",
  "Try a different term.": "別の語句でお試しください。",
  "source": "出典",
  "Procedure reference compiled from cited guidance. Adapt wording and acceptance limits to your own URS/SOP before use in a protocol.":
    "引用ガイダンスに基づく手順参考。プロトコルで使用する前に、文言と合格基準を自社のURS／SOPに合わせて調整してください。",
  // --- phases ---
  "Installation Qualification": "据付時適格性確認（IQ）",
  "Operational Qualification": "運転時適格性確認（OQ）",
  "Performance Qualification": "性能適格性確認（PQ）",
  // --- status / tiers ---
  "Verified": "検証済み",
  "Corroborated": "裏付けあり",
  "Regulation (21 CFR)": "規制（21 CFR）",
  "Site-defined": "サイト規定",
  "Confirm before relying": "依拠前に要確認",
  "Industry Standard GMP": "業界標準GMP",
  // --- domain filter ---
  "All": "すべて",
  "GMP / USP": "GMP / USP",
  "ISO / Lab": "ISO / ラボ",
  // --- categories ---
  "Temperature-Controlled Units (TCUs)": "温度管理機器（TCU）",
  "Ovens & Furnaces": "オーブン・炉",
  "Sterilizers": "滅菌器",
  "Cryogenic": "極低温",
  "Analytical Instruments": "分析機器",
  "Lab Equipment": "ラボ機器",
  "Bioprocess / Downstream": "バイオプロセス／ダウンストリーム",
  "Solid-Dose Manufacturing": "固形製剤製造",
  "Sterile / Liquid Manufacturing": "無菌・液剤製造",
  "Inspection & Packaging": "検査・包装",
  "Automation & Control Systems": "自動化・制御システム",
  "Process Analytical (PAT)": "プロセス分析（PAT）",
  "API / Chemical Synthesis": "原薬／化学合成",
  "Lab Informatics": "ラボインフォマティクス",
  "Cold Chain & Distribution": "コールドチェーン・流通",
  "Utilities & Facilities": "ユーティリティ・設備",
  // --- process cards ---
  "The V-Model": "V字モデル",
  "The lifecycle that drives all of this": "全体を貫くライフサイクル",
  "User Requirements Specification": "ユーザー要求仕様",
  "Factory Acceptance Test": "工場受入試験",
  "Site Acceptance Test": "現地受入試験",
  "Commercial Off-The-Shelf equipment": "市販既製機器",
  "Computer System Validation": "コンピュータ化システムバリデーション",
  // --- legend (with bold tags preserved) ---
  "<b>Verified</b> - primary standard (USP, ISPE, PDA, EN, ASME) or OEM, confirmed against the issuing body.":
    "<b>検証済み</b> - 主要規格（USP、ISPE、PDA、EN、ASME）またはOEMで、発行元に照合済み。",
  "<b>Corroborated</b> - industry-supported figure from reputable validation/calibration sources, agreed across more than one.":
    "<b>裏付けあり</b> - 信頼できるバリデーション／校正情報源による業界裏付け値で、複数で一致。",
  "<b>Regulation (CFR)</b> - required by US FDA 21 CFR (211 drug GMP / 820 device QSR) and its EU equivalent (EudraLex Annex 15 / Annex 11).":
    "<b>規制（CFR）</b> - 米国FDA 21 CFR（211 医薬品GMP／820 機器QSR）およびEU相当（EudraLex Annex 15／Annex 11）で要求。",
  "<b>Site-defined</b> - the limit is set by your URS, risk assessment, or data sheet, not a published standard.":
    "<b>サイト規定</b> - 限度値は公開規格ではなくURS、リスクアセスメント、データシートで設定。",
  "<b>Industry GMP</b> - general good practice with no single specific citation.":
    "<b>業界GMP</b> - 単一の特定引用がない一般的なグッドプラクティス。",
  "Add to Home Screen for offline field use.": "オフラインでの現場利用にはホーム画面に追加してください。",
  "Share → Add to Home Screen.": "共有 → ホーム画面に追加。",
  // --- equipment names ---
  "Balances / Analytical Scales": "天びん／分析天びん",
  "pH Meters": "pHメーター",
  "Incubators": "インキュベーター",
  "Refrigerators (2–8 °C)": "冷蔵庫（2〜8℃）",
  "Freezers (standard, typ. −20 °C)": "冷凍庫（標準、約−20℃）",
  "Ultra-Low Freezers (−80 °C)": "超低温フリーザー（−80℃）",
  "Dry Heat Ovens": "乾熱オーブン",
  "Autoclaves / Steam Sterilizers": "オートクレーブ／蒸気滅菌器",
  "Depyrogenation Ovens": "脱パイロジェンオーブン",
  "CO₂ Incubators": "CO₂インキュベーター",
  "Centrifuges": "遠心機",
  "Osmometers": "浸透圧計",
  "Refractometers": "屈折計",
  "Water Baths": "恒温水槽",
  "Vacuum Ovens": "真空オーブン",
  "Cold Rooms": "低温室",
  "Warehouses": "倉庫",
  "Liquid Nitrogen Vessels": "液体窒素容器",
  "Cryogenic Chambers": "極低温チャンバー",
  "Bioreactors": "バイオリアクター",
  "Stability Chambers": "安定性チャンバー",
  "Muffle Furnaces": "マッフル炉",
  "Hot Plates & Stirrers": "ホットプレート・撹拌機",
  "Homogenizers & Mixers": "ホモジナイザー・ミキサー",
  "Lyophilizers (Freeze Dryers)": "凍結乾燥機",
  "Cleanrooms": "クリーンルーム",
  "HVAC Systems": "空調（HVAC）システム",
  "Water Systems (PW / WFI)": "製薬用水システム（PW／WFI）",
  "Compressed Air & Gases": "圧縮空気・ガス",
  "Biosafety Cabinets & LAF Hoods": "安全キャビネット・LAFフード",
  "HPLC / UHPLC": "HPLC／UHPLC",
  "Gas Chromatography (GC)": "ガスクロマトグラフィー（GC）",
  "Dissolution Apparatus": "溶出試験器",
  "UV-Vis Spectrophotometers": "紫外可視分光光度計",
  "FTIR Spectrometers": "FTIR分光計",
  "Karl Fischer Titrators": "カールフィッシャー水分計",
  "Particle Counters": "微粒子計",
  "Pipettes & Liquid Handling": "ピペット・分注",
  "Depyrogenation Tunnels": "脱パイロジェントンネル",
  "Ethylene Oxide Sterilizers": "酸化エチレン滅菌器",
  "Gamma / Radiation Sterilizers": "ガンマ線／放射線滅菌器",
  "Water Cascade Sterilizers": "熱水カスケード滅菌器",
  "Conductivity & TOC Meters": "導電率・TOC計",
  "Elemental Impurities (ICP-OES/MS)": "元素不純物（ICP-OES/MS）",
  "Tablet Hardness / Friability / Disintegration": "錠剤硬度／摩損度／崩壊",
  "Photostability Chambers": "光安定性チャンバー",
  "Isolators & RABS": "アイソレーター・RABS",
  "High-Shear Granulators": "高せん断造粒機",
  "Fluid Bed Dryers / Processors": "流動層乾燥機／処理機",
  "Blenders (V / Bin / Tumble)": "混合機（V型／ビン／タンブル）",
  "Tablet Presses": "打錠機",
  "Tablet Coaters": "コーティング機",
  "Capsule Fillers": "カプセル充填機",
  "Mills & Sizing Equipment": "粉砕・整粒機",
  "Mixing / Formulation Vessels": "混合／調製タンク",
  "Aseptic Filling Lines": "無菌充填ライン",
  "Vial & Component Washers": "バイアル・部品洗浄機",
  "Blister & Packaging Lines": "ブリスター・包装ライン",
  "CIP / SIP Systems": "CIP／SIPシステム",
  "Pure Steam Generators": "純蒸気発生器",
  "Chromatography Skids": "クロマトグラフィースキッド",
  "TFF / UF-DF Skids": "TFF／UF-DFスキッド",
  "Sterile Filtration & Integrity Testers": "無菌濾過・完全性試験器",
  "Single-Use Systems": "シングルユースシステム",
  "Automated Visual Inspection": "自動外観検査",
  "Leak / CCIT Testers": "リーク／CCIT試験器",
  "Checkweighers & Metal Detectors": "重量チェッカー・金属検出機",
  "Dispensing / Weighing Booths": "秤量／調剤ブース",
  "Glassware & Parts Washers": "ガラス器具・部品洗浄機",
  "RO / EDI Water Pretreatment": "RO／EDI水前処理",
  "PLC / Automation Systems": "PLC／自動化システム",
  "SCADA / DCS Systems": "SCADA／DCSシステム",
  "BMS / EMS Monitoring": "BMS／EMS監視",
  "MES / Electronic Batch Records": "MES／電子バッチ記録",
  "Data Historians & Loggers": "データヒストリアン・ロガー",
  "NIR / Raman PAT Analyzers": "NIR／ラマン PAT分析計",
  "In-line Process Probes": "インラインプロセスプローブ",
  "Online TOC Analyzers": "オンラインTOC分析計",
  "Mass Flow / Coriolis Controllers": "質量流量／コリオリ制御器",
  "Chemical Reactors": "化学反応器",
  "Filter-Dryers (ANFD)": "濾過乾燥機（ANFD）",
  "Process Centrifuges": "プロセス遠心機",
  "Jet Mills / Micronizers": "ジェットミル／微粉砕機",
  "Spray Dryers": "噴霧乾燥機",
  "Insulated Shippers": "保冷輸送容器",
  "Transport Lanes (GDP)": "輸送レーン（GDP）",
  "Temp-Controlled Vehicles": "温度管理車両",
  "LIMS": "LIMS",
  "Chromatography Data Systems": "クロマトグラフィーデータシステム",
  "DeltaV DCS (Emerson)": "DeltaV DCS（エマソン）",
  // --- equipment subs ---
  "Benchtop & large-scale weighing": "卓上・大型計量",
  "Potentiometric pH measurement systems": "電位差式pH測定システム",
  "Ambient & CO₂ incubators": "常温・CO₂インキュベーター",
  "Pharmaceutical 2–8 °C cold storage": "医薬品用2〜8℃冷蔵保管",
  "Standard pharmaceutical freezer storage": "標準的な医薬品冷凍保管",
  "ULT / −80 °C storage": "ULT／−80℃保管",
  "Drying & depyrogenation ovens": "乾燥・脱パイロジェンオーブン",
  "Moist-heat sterilizers": "湿熱滅菌器",
  "Standalone batch dry-heat depyrogenation oven": "バッチ式乾熱脱パイロジェンオーブン",
  "Cell-culture CO₂ incubators": "細胞培養用CO₂インキュベーター",
  "Benchtop & floor centrifuges": "卓上・床置き遠心機",
  "Freezing-point depression osmometry": "氷点降下式浸透圧測定",
  "Abbé & digital refractometers": "アッベ式・デジタル屈折計",
  "Heated & circulating baths": "加温・循環水槽",
  "Vacuum drying ovens": "真空乾燥オーブン",
  "Walk-in cold rooms & warm rooms": "ウォークイン低温室・恒温室",
  "Controlled / ambient storage areas": "管理・常温保管区域",
  "LN₂ cryostorage (vapor / liquid phase)": "LN₂凍結保管（気相／液相）",
  "Mechanical cryo / controlled-rate freezers": "機械式極低温／プログラムフリーザー",
  "Stirred-tank & single-use systems": "撹拌槽・シングルユースシステム",
  "ICH stability storage (e.g. 25 °C/60 %RH)": "ICH安定性保管（例：25℃/60%RH）",
  "High-temperature ashing / ignition furnaces": "高温灰化・強熱炉",
  "Heating / magnetic-stirring plates": "加熱・マグネチック撹拌プレート",
  "Lab homogenizers, overhead & high-shear mixers": "ラボ用ホモジナイザー・上部撹拌・高せん断ミキサー",
  "Freeze-drying / lyophilization systems": "凍結乾燥システム",
  "Classified cleanrooms (ISO 14644 / Annex 1)": "清浄度区分クリーンルーム（ISO 14644／Annex 1）",
  "Cleanroom air-handling systems": "クリーンルーム空調システム",
  "Purified Water & Water for Injection systems": "精製水・注射用水システム",
  "Clean compressed air / process gas systems": "清浄圧縮空気／プロセスガスシステム",
  "BSCs (NSF/ANSI 49) & laminar-flow hoods": "安全キャビネット（NSF/ANSI 49）・層流フード",
  "Liquid chromatography systems (USP <1058>)": "液体クロマトグラフィーシステム（USP <1058>）",
  "Gas chromatographs (USP <1058>)": "ガスクロマトグラフ（USP <1058>）",
  "USP <711> dissolution testers": "USP <711>溶出試験器",
  "UV-visible spectrophotometry (USP <857>)": "紫外可視分光測定（USP <857>）",
  "Fourier-transform infrared (Ph. Eur. 2.2.24)": "フーリエ変換赤外（Ph. Eur. 2.2.24）",
  "Water-content titrators (USP <921>)": "水分滴定装置（USP <921>）",
  "Liquid (USP <788>) & airborne particle counters": "液中（USP <788>）・浮遊微粒子計",
  "Piston-operated pipettes (ISO 8655:2022)": "ピストン式ピペット（ISO 8655:2022）",
  "Continuous conveyor dry-heat depyrogenation tunnel": "連続コンベア式乾熱脱パイロジェントンネル",
  "EtO gas sterilization (ISO 11135)": "EtOガス滅菌（ISO 11135）",
  "Irradiation sterilization (ISO 11137)": "放射線滅菌（ISO 11137）",
  "Superheated-water (cascade/spray) moist-heat sterilizer": "過熱水（カスケード／スプレー）式湿熱滅菌器",
  "Benchtop conductivity & TOC analyzers (USP <645>/<643>)": "卓上導電率・TOC分析計（USP <645>/<643>）",
  "ICP-OES / ICP-MS for elemental impurities (USP <233>)": "元素不純物用ICP-OES／ICP-MS（USP <233>）",
  "Solid-dose physical testers (USP <1217>/<1216>/<701>)": "固形製剤物性試験器（USP <1217>/<1216>/<701>）",
  "ICH Q1B photostability testing chambers": "ICH Q1B光安定性試験チャンバー",
  "Aseptic isolators & restricted-access barrier systems": "無菌アイソレーター・アクセス制限バリアシステム",
  "Wet high-shear granulation (CPP-driven)": "湿式高せん断造粒（CPP依存）",
  "FBD drying / granulation / coating (CPP-driven)": "流動層乾燥／造粒／コーティング（CPP依存）",
  "Powder blending - blend uniformity (CPP-driven)": "粉体混合-混合均一性（CPP依存）",
  "Rotary tablet compression (CPP-driven)": "ロータリー打錠（CPP依存）",
  "Perforated-pan film coating (CPP-driven)": "有孔パンフィルムコーティング（CPP依存）",
  "Automatic capsule filling (CPP-driven)": "自動カプセル充填（CPP依存）",
  "Milling / sizing (oscillating, conical, hammer)": "粉砕／整粒（オシレーティング・コニカル・ハンマー）",
  "Jacketed liquid mixing / formulation tanks": "ジャケット付液体混合／調製タンク",
  "Sterile fill-finish (vials/syringes) - media fill PQ": "無菌充填仕上げ（バイアル／シリンジ）-培地充填PQ",
  "Container/component washing (particulate & endotoxin)": "容器／部品洗浄（微粒子・エンドトキシン）",
  "Blister/strip packing, cartoning, serialization": "ブリスター／ストリップ包装・カートニング・シリアライゼーション",
  "Clean-in-place / steam-in-place skids": "定置洗浄／定置滅菌スキッド",
  "Clean/pure steam systems (EN 285 condensate)": "清浄／純蒸気システム（EN 285 ドレン）",
  "Process chromatography systems (bioprocess downstream)": "プロセスクロマトグラフィー（バイオダウンストリーム）",
  "Tangential-flow filtration (concentration / diafiltration)": "タンジェンシャルフロー濾過（濃縮／ダイアフィルトレーション）",
  "Sterilizing-grade filtration & filter integrity testing": "除菌グレード濾過・フィルター完全性試験",
  "Disposable bags, assemblies & manifolds": "使い捨てバッグ・アセンブリ・マニホールド",
  "Particle / cosmetic inspection of filled units": "充填品の異物／外観検査",
  "Container-closure integrity testing instruments": "容器施栓系完全性試験装置",
  "In-line weight check & contaminant detection": "インライン重量確認・異物検出",
  "LAF dispensing booths & sampling booths": "LAF秤量ブース・サンプリングブース",
  "Automated lab/parts washer-disinfectors": "自動ラボ／部品洗浄消毒機",
  "Reverse osmosis / electrodeionization pretreatment": "逆浸透／電気脱イオン前処理",
  "Programmable logic controllers (GAMP 5 / Part 11)": "プログラマブルロジックコントローラ（GAMP 5／Part 11）",
  "Supervisory control & distributed control (GAMP 5)": "監視制御・分散制御（GAMP 5）",
  "Building / environmental monitoring systems": "建物／環境モニタリングシステム",
  "Manufacturing execution systems (GAMP 5 / Part 11)": "製造実行システム（GAMP 5／Part 11）",
  "Process historians & electronic data loggers": "プロセスヒストリアン・電子データロガー",
  "Process analytical technology (in-line spectroscopy)": "プロセス分析技術（インライン分光）",
  "In-line pH / conductivity / dissolved-oxygen probes": "インラインpH／導電率／溶存酸素プローブ",
  "Continuous TOC monitoring (water systems / CIP)": "連続TOCモニタリング（製薬用水／CIP）",
  "Mass-flow meters & controllers (PLC-integrated)": "質量流量計・制御器（PLC統合）",
  "Jacketed agitated reactors (API synthesis)": "ジャケット付撹拌反応器（原薬合成）",
  "Agitated Nutsche filter-dryers (API isolation)": "撹拌型ヌッチェ濾過乾燥機（原薬単離）",
  "Solid-liquid separation centrifuges (API)": "固液分離遠心機（原薬）",
  "Fluid-energy micronization (fine particle size)": "流体エネルギー微粉砕（微小粒子径）",
  "Spray drying (powders, amorphous dispersions)": "噴霧乾燥（粉末・非晶質分散体）",
  "Thermal shipping containers (ISTA 20 / 7E)": "温度管理輸送容器（ISTA 20／7E）",
  "Shipping-lane qualification (Good Distribution Practice)": "輸送レーン適格性確認（適正流通基準）",
  "Refrigerated trucks / trailers / reefers (GDP)": "冷蔵トラック／トレーラー／リーファー（GDP）",
  "Laboratory information management systems (GAMP 5)": "ラボ情報管理システム（GAMP 5）",
  "CDS software (Empower/Chromeleon-class, GAMP 5)": "CDSソフトウェア（Empower／Chromeleon相当、GAMP 5）",
  "Emerson DeltaV distributed control system (GAMP 5)": "エマソン DeltaV 分散制御システム（GAMP 5）",
  // --- source sheet chrome ---
  "Covers": "対象",
  "Acceptance criteria": "合格基準",
  "Find the standard": "規格を探す",
  "EU equivalent": "EU相当",
  "Governing standards": "適用規格",
  // --- C&Q comparison card ---
  "C&Q Approaches Compared": "C&Qアプローチ比較",
  "V-Model vs ASTM E2500 vs ISPE Baseline Guide 5": "V字モデル vs ASTM E2500 vs ISPE ベースラインガイド5",
  // --- risk page card + equipment risk block chrome ---
  "Approaching Risk": "リスクへのアプローチ",
  "Quality risk management for qualification (ICH Q9)": "適格性確認のための品質リスクマネジメント（ICH Q9）",
  "These are candidate verifications for this system. Which you run as formal qualification versus what you leverage from commissioning depends on your C&Q approach and the system\u2019s risk classification.":
    "これらは本システムの検証候補です。どれを正式な適格性確認として実施し、どれをコミッショニングから活用するかは、C&Qアプローチとシステムのリスク分類によって決まります。",
  "Risk assessment \u2014 questions to ask": "リスクアセスメント - 確認すべき問い",
  "Ask first (any system)": "最初に問うこと（全システム共通）",
  "Severity / likelihood matrices and method": "重大性／発生確率マトリクスと手法",
  // archetype labels
  "Controlled storage": "管理保管",
  "Sterilization / depyrogenation": "滅菌／脱パイロジェン",
  "Thermal process unit": "熱処理ユニット",
  "Analytical / QC instrument": "分析／QC機器",
  "Lab / prep equipment": "ラボ／前処理機器",
  "Product-contact process equipment": "製品接触プロセス機器",
  "Computerised / GxP system": "コンピュータ化／GxPシステム",
  "Contamination-control utility / area": "汚染管理ユーティリティ／区域",
  "Inspection / detection": "検査／検出",
  "Cold-chain / distribution": "コールドチェーン／流通",
  "Process analytical (PAT)": "プロセス分析（PAT）",
  // --- E2500 / BG5 dedicated card chrome ---
  "ASTM E2500": "ASTM E2500",
  "Science- & risk-based verification": "サイエンス・リスクベース検証",
  "ISPE Baseline Guide 5": "ISPE ベースラインガイド5",
  "Commissioning & Qualification (2nd ed)": "コミッショニング＆クオリフィケーション（第2版）",
  // --- FS / DS spec cards ---
  "Functional Specification": "機能仕様書",
  "Design Specification": "設計仕様書"
};

let LANG = 'en';
try { const _l = localStorage.getItem('cqv-lang'); if (_l === 'ja' || _l === 'en') LANG = _l; } catch (e) {}
function TR(s) { if (LANG === 'en' || !s) return s; return Object.prototype.hasOwnProperty.call(JA, s) ? JA[s] : s; }

function applyStaticI18n() {
  document.documentElement.lang = LANG;
  const sIn = document.getElementById('search');
  if (sIn) sIn.placeholder = TR('Search equipment');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = TR(key); else el.textContent = TR(key);
  });
  document.querySelectorAll('#domainFilter button').forEach(b => {
    const k = b.getAttribute('data-label'); if (k) b.textContent = TR(k);
  });
  const lt = document.getElementById('langToggle');
  if (lt) lt.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG ? 'true' : 'false'));
}

function setLang(l) {
  LANG = l;
  try { localStorage.setItem('cqv-lang', l); } catch (e) {}
  applyStaticI18n();
  // re-render whatever view is active
  if (typeof renderProcessCards === 'function') renderProcessCards();
  if (typeof renderList === 'function') renderList();
  if (detailView.classList.contains('active') && currentDetailId) openDetail(currentDetailId);
  if (processView.classList.contains('active') && currentProcessId) openProcess(currentProcessId);
}

let currentDetailId = null;
let currentProcessId = null;


/* ---------- RISK QUESTIONS (per equipment archetype) ----------
   Approach-neutral prompts to seed a system risk assessment.
   RISK_COMMON applies to any system; archetype set is added by type. */







const expandedCats = new Set(); // all collapsed on open

function eqArray() {
  return Object.entries(DATA).map(([id, d]) => ({ id, ...d }));
}

/* ---------- PROCESS PAGES RENDER ---------- */
const processView = document.getElementById('processView');


// Process pages grouped into thematic sections (home screen no longer one long scroll).
// Each group: { key, label, accent, ids[], openByDefault }. ids must exist in PROCESS;
// any PROCESS id not listed here falls into an auto "More" group so nothing is ever lost.


function procGroupState(key, def) {
  try { const v = localStorage.getItem('cqv-pg-' + key); if (v === '1') return true; if (v === '0') return false; } catch (e) {}
  return def;
}
function setProcGroup(key, isOpen) { try { localStorage.setItem('cqv-pg-' + key, isOpen ? '1' : '0'); } catch (e) {} }

function procCardHTML(id) {
  const p = PROCESS[id];
  if (!p) return '';
  return `<button class="proc-card" onclick="openProcess('${id}')" style="--pc:${p.accent}">
      <span class="proc-icon">${PROC_ICONS[p.icon] || ''}</span>
      <span class="proc-text">
        <span class="proc-name">${TR(p.name)}</span>
        <span class="proc-sub">${TR(p.sub)}</span>
      </span>
      <span class="proc-chev"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></span>
    </button>`;
}

function renderProcessCards() {
  const el = document.getElementById('processList');
  if (!el) return;

  // Catch any PROCESS id not assigned to a group, so additions never silently disappear.
  const assigned = new Set(PROCESS_GROUPS.flatMap(g => g.ids));
  const orphans = PROCESS_ORDER.filter(id => PROCESS[id] && !assigned.has(id));
  const groups = orphans.length
    ? PROCESS_GROUPS.concat([{ key: 'more', label: 'More', accent: '#8b98a9', ids: orphans, open: false }])
    : PROCESS_GROUPS;

  const tw = `<span class="pg-tw"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></span>`;

  const groupsHTML = groups.map(g => {
    const ids = g.ids.filter(id => PROCESS[id]);
    if (!ids.length) return '';
    const isOpen = procGroupState(g.key, g.open);
    const cards = ids.map(procCardHTML).join('');
    return `<details class="proc-group" data-pg="${g.key}" style="--pg:${g.accent}"${isOpen ? ' open' : ''}>
      <summary>
        <span class="pg-dot"></span>
        <span class="pg-label">${TR(g.label)}</span>
        <span class="pg-count">${ids.length}</span>
        ${tw}
      </summary>
      <div class="pg-body">${cards}</div>
    </details>`;
  }).join('');

  // live coverage summary (computed from data so it never goes stale)
  let nTests = 0;
  for (const k of Object.keys(DATA)) for (const ph of Object.values(DATA[k].phases)) nTests += ph.length;
  const nEquip = Object.keys(DATA).length;
  const nCats = (typeof CATEGORIES !== 'undefined') ? CATEGORIES.length : 0;
  const covMain = LANG==='ja' ? `機器 ${nEquip} 種 ・ IQ/OQ/PQ テスト ${nTests} 件 ・ カテゴリ ${nCats}` : `${nEquip} equipment types · ${nTests} IQ/OQ/PQ tests · ${nCats} categories`;
  const covSub = LANG==='ja' ? '保管・滅菌・分析/QC・固形製剤・無菌充填・バイオプロセス・原薬・包装・ユーティリティ・自動化/PLC・PAT・インフォマティクス・コールドチェーン' : 'storage · sterilization · analytical/QC · solid-dose · sterile fill · bioprocess · API · packaging · utilities · automation/PLC · PAT · informatics · cold chain';
  const summary = `<div class="cov-summary">${covMain}<br><span class="cov-sub">${covSub}</span></div>`;

  const toolbar = `<div class="proc-toolbar">
    <div class="proc-head" style="margin:0;flex:1;">${TR('Process & lifecycle')}</div>
    <button onclick="expandAllProc(true)">${TR('Expand all')}</button>
    <button onclick="expandAllProc(false)">${TR('Collapse all')}</button>
  </div>`;

  el.innerHTML = `${summary}${toolbar}${groupsHTML}`;

  // persist open/close on toggle
  el.querySelectorAll('details.proc-group').forEach(d => {
    d.addEventListener('toggle', () => setProcGroup(d.getAttribute('data-pg'), d.open));
  });
}

function expandAllProc(open) {
  document.querySelectorAll('#processList details.proc-group').forEach(d => {
    d.open = open;
    setProcGroup(d.getAttribute('data-pg'), open);
  });
}

function expandAllEq(open) {
  if (open) { CATEGORIES.forEach(c => expandedCats.add(c.key)); } else { expandedCats.clear(); }
  renderList();
}

function openProcess(id) {
  const p = PROCESS[id];
  if (!p) return;
  currentProcessId = id;
  const sections = (p.sections || []).map(s => {
    let inner = '';
    if (s.body) inner += `<p class="ps-body">${TR(s.body)}</p>`;
    if (s.steps) inner += `<ol class="ps-steps">${s.steps.map(x => `<li>${TR(x)}</li>`).join('')}</ol>`;
    if (s.bullets) inner += `<ul class="ps-bullets">${s.bullets.map(x => `<li>${TR(x)}</li>`).join('')}</ul>`;
    if (s.cols) inner += `<div class="ps-cols">${s.cols.map(c => `<div class="ps-col ${c.kind || ''}"><div class="ps-col-h">${TR(c.h)}</div><ul>${c.items.map(it => `<li>${TR(it)}</li>`).join('')}</ul></div>`).join('')}</div>`;
    if (s.table) inner += `<div class="ps-tablewrap"><table class="ps-table"><thead><tr>${s.table.cols.map(c => `<th>${TR(c)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map(r => `<tr>${r.map((cell, ci) => ci === 0 ? `<th>${TR(cell)}</th>` : `<td>${TR(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (s.matrix) inner += `<div class="ps-tablewrap"><table class="ps-table ps-matrix"><thead><tr><th></th>${s.matrix.cols.map(c => `<th>${TR(c)}</th>`).join('')}</tr></thead><tbody>${s.matrix.rows.map(r => `<tr><th>${TR(r.label)}</th>${r.cells.map(c => `<td class="m-${c.lvl}">${TR(c.v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (s.svg) inner += `<div class="ps-graph ps-chart">${s.svg}${s.caption ? `<div class="ps-cap">${TR(s.caption)}</div>` : ''}</div>`;
    if (s.note) inner += `<div class="ps-note">${TR(s.note)}</div>`;
    return `<section class="ps-sec"><h3 class="ps-title">${TR(s.title)}</h3>${inner}</section>`;
  }).join('');
  const refs = (p.refs || []).length
    ? `<div class="ps-refs"><div class="ps-refs-k">${TR('Governing standards')}</div>${p.refs.map(r =>
        `<a class="ps-ref" href="${r.link}" target="_blank" rel="noopener">${r.label}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg></a>`).join('')}</div>`
    : '';
  const exData = p.example || (typeof EXAMPLES !== 'undefined' ? EXAMPLES[id] : null);
  const example = exData ? renderExample(exData, p.accent) : '';
  const graph = p.svg ? `<div class="ps-graph">${p.svg}</div>` : '';
  document.getElementById('processBody').innerHTML = `
    <div class="detail-head">
      <h2 style="color:${p.accent}">${TR(p.name)}</h2>
      <p class="ps-suptitle">${TR(p.sub)}</p>
      <p class="desc">${TR(p.desc)}</p>
    </div>
    ${graph}
    ${sections}
    ${example}
    ${refs}`;
  listView.classList.add('hidden');
  processView.classList.add('active');
  document.querySelector('.search-wrap').style.display = 'none';
  window.scrollTo(0,0);
}

function backFromProcess() {
  processView.classList.remove('active');
  listView.classList.remove('hidden');
  document.querySelector('.search-wrap').style.display = '';
  window.scrollTo(0,0);
}

/* Worked-document example renderer: a collapsible specimen showing what a given
   document/record actually looks like. Simplified, illustrative - same "adapt to
   your SOP" discipline as the how-tos. ex = { label, docTitle, meta:[[k,v]], blocks:[...] } */
function renderExample(ex, accent) {
  if (!ex) return '';
  const meta = (ex.meta || []).map(m => `<div class="ex-meta-row"><span class="ex-mk">${TR(m[0])}</span><span class="ex-mv">${TR(m[1])}</span></div>`).join('');
  const blocks = (ex.blocks || []).map(b => {
    let inner = '';
    if (b.h) inner += `<div class="ex-bh">${TR(b.h)}</div>`;
    if (b.text) inner += `<div class="ex-text">${TR(b.text)}</div>`;
    if (b.list) inner += `<ul class="ex-list">${b.list.map(x => `<li>${TR(x)}</li>`).join('')}</ul>`;
    if (b.rows) {
      const head = b.cols ? `<thead><tr>${b.cols.map(c => `<th>${TR(c)}</th>`).join('')}</tr></thead>` : '';
      inner += `<div class="ex-tablewrap"><table class="ex-table">${head}<tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${TR(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    if (b.sign) inner += `<div class="ex-sign">${b.sign.map(s => `<div class="ex-sign-cell"><span class="ex-sign-role">${TR(s)}</span><span class="ex-sign-line"></span></div>`).join('')}</div>`;
    return `<div class="ex-block">${inner}</div>`;
  }).join('');
  return `
    <details class="ex-card" style="--exc:${accent || 'var(--accent)'}">
      <summary>
        <span class="ex-ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4M9 13h6M9 17h6M9 9h2"/></svg></span>
        ${TR(ex.label || 'What this looks like')}
        <span class="ex-tw"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
      </summary>
      <div class="ex-body">
        <div class="ex-doc">
          ${ex.docTitle ? `<div class="ex-doctitle">${TR(ex.docTitle)}</div>` : ''}
          ${meta ? `<div class="ex-meta">${meta}</div>` : ''}
          ${blocks}
        </div>
        <div class="ex-caveat">${TR('Simplified illustration - a real document follows your site templates, SOPs, and approval routing. Adapt before use.')}</div>
      </div>
    </details>`;
}


let activeHomeTab = 'eq';
function applyHomeTab(){
  const eqEl = document.getElementById('eqList');
  const procEl = document.getElementById('processList');
  if (eqEl) eqEl.style.display = activeHomeTab === 'eq' ? '' : 'none';
  if (procEl) procEl.style.display = activeHomeTab === 'ref' ? '' : 'none';
  document.querySelectorAll('.htab').forEach(b => b.classList.toggle('on', b.getAttribute('data-tab') === activeHomeTab));
}
function selectHomeTab(t){
  activeHomeTab = t;
  if (window.search) search.value = '';
  const tabsEl = document.querySelector('.home-tabs'); if (tabsEl) tabsEl.style.display = '';
  const aboutEl = document.getElementById('aboutBlock'); if (aboutEl) aboutEl.style.display = '';
  if (typeof renderList === 'function') renderList();
}
function renderList() {
  const q = search.value.trim().toLowerCase();
  const procEl = document.getElementById('processList');
  const eqEl = document.getElementById('eqList');
  const tabsEl = document.querySelector('.home-tabs');
  const aboutEl = document.getElementById('aboutBlock');
  if (q) {
    if (eqEl) eqEl.style.display = '';
    if (procEl) procEl.style.display = 'none';
    if (tabsEl) tabsEl.style.display = 'none';
    if (aboutEl) aboutEl.style.display = 'none';
  } else {
    if (tabsEl) tabsEl.style.display = '';
    if (aboutEl) aboutEl.style.display = '';
    applyHomeTab();
  }
  const matches = id => {
    const e = DATA[id]; if (!e) return false;
    const domainOk = activeDomain === 'all' || e.domain === activeDomain;
    const textOk = !q || (e.name + ' ' + e.sub).toLowerCase().includes(q);
    return domainOk && textOk;
  };

  const visibleSections = CATEGORIES
    .map(c => ({ ...c, hits: c.members.filter(matches) }))
    .filter(c => c.hits.length);

  if (!visibleSections.length) {
    eqList.innerHTML = `<div class="empty">${TR('No equipment matches.')}<br>${TR('Try a different term.')}</div>`;
    return;
  }

  const searching = q.length > 0;
  const eqToolbar = searching ? '' : `<div class="proc-toolbar"><div class="proc-head" style="margin:0;flex:1;">${TR('Browse by family')}</div><button onclick="expandAllEq(true)">${TR('Expand all')}</button><button onclick="expandAllEq(false)">${TR('Collapse all')}</button></div>`;
  const renderCat = c => {
    const open = searching || expandedCats.has(c.key);
    const cards = c.hits.map(id => {
      const e = DATA[id];
      return `<button class="eq-card" onclick="openDetail('${id}')">
        <span class="eq-icon">${e.icon}</span>
        <span class="eq-meta">
          <span class="eq-name">${TR(e.name)}<span class="domain-pill">${e.domain}</span></span>
          <span class="eq-sub">${TR(e.sub)}</span>
        </span>
        <span class="eq-chev"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></span>
      </button>`;
    }).join('');
    return `<section class="cat${open ? ' open' : ''}">
      <button class="cat-head" onclick="toggleCat('${c.key}')">
        <span class="cat-twist"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></span>
        <span class="cat-label">${TR(c.label)}</span>
        <span class="cat-count">${c.hits.length}</span>
      </button>
      <div class="cat-body">${cards}</div>
    </section>`;
  };
  eqList.innerHTML = eqToolbar + (searching
    ? visibleSections.map(renderCat).join('')
    : SUPER_GROUPS.map(g => {
        const fams = g.cats.map(ck => visibleSections.find(c => c.key === ck)).filter(Boolean);
        if (!fams.length) return '';
        const count = fams.reduce((n, c) => n + c.hits.length, 0);
        return `<div class="fam"><div class="fam-head"><span class="fam-bar" style="background:${g.accent}"></span><span class="fam-tt"><span class="fam-t">${TR(g.label)}</span><span class="fam-d">${TR(g.sub)}</span></span><span class="fam-ct">${count}</span></div>` + fams.map(renderCat).join('') + `</div>`;
      }).join(''));
}

function toggleCat(key) {
  if (expandedCats.has(key)) expandedCats.delete(key); else expandedCats.add(key);
  renderList();
}



/* ---------- HAND-AUTHORED EXECUTABLE OVERRIDES (TCU) ---------- */
/* Hand-authored executable (protocol) overrides for TCU equipment.
   Keyed by "id|PHASE|index". Each override: {objective?, pre[], fields:{cols,rows,hint}, accept, note?}
   Only signature tests are authored; routine IQ doc/inventory checks keep the generated view.
   buildExecutable() prefers DATA[id].phases[ph][i].exec when present. */


/* TCU exec overrides part 2: ult, coldroom, warehouse, stability, photostability. */


/* ---------- HAND-AUTHORED EXECUTABLE OVERRIDES (Sterilizers) ---------- */
/* Hand-authored executable overrides for Sterilizers - part 1: autoclave, etosterilizer.
   Keyed "id|PHASE|index". buildExecutable prefers these. */


/* Sterilizer exec overrides part 2: gammasterilizer, watercascade. */


/* ---------- HAND-AUTHORED EXECUTABLE OVERRIDES (Ovens & Cryo) ---------- */
/* Hand-authored executable overrides - Ovens & Furnaces.
   dryoven, depyrooven, depyrotunnel, vacuumoven, mufflefurnace. */


/* Hand-authored executable overrides - Cryogenic: ln2, cryochamber. */


/* ---------- SAFETY SYSTEM DATA ----------
   Page-level hazard banner (per-equipment, via shared HAZARD archetypes) +
   per-test red chip where a specific test ADDS a hazard beyond the baseline.
   Concise hazard + key controls/PPE, always deferring to site EHS/SOP. */

/* Hazard archetypes - shared profiles equipment maps to (like risk archetypes). */


/* Equipment -> hazard archetype(s). Order = display order in the banner.
   Only equipment with a genuine hazard is listed; benign instruments are omitted (no banner). */


/* Per-test ESCALATIONS - keyed "id|PHASE|index" - where a specific test adds a hazard
   beyond the equipment baseline (e.g. defeating an interlock, exposing the operator). */


/* ---------- HAND-AUTHORED EXECUTABLE OVERRIDES (Analytical) ---------- */
/* Hand-authored executable overrides - Analytical part 1: balance, ph, dissolution, hplc, gc. */


/* Hand-authored executable overrides - Analytical part 2. */


/* ---------- SOLID-DOSE MANUFACTURING (step schema) ---------- */


/* ---------- LAB EQUIPMENT (step schema) ---------- */


/* ---------- BIOPROCESS (step schema) ---------- */


/* ---------- STERILE / LIQUID MFG (step schema) ---------- */


/* ---------- PROCESS EQUIPMENT B (sterile/inspection/API) (step schema) ---------- */


/* ---------- CSV / UTILITIES / COLD-CHAIN (step schema) ---------- */


/* ---------- WORKED EXAMPLES (existing pages) ---------- */
/* Worked examples to attach to existing pages. Keyed by page id.
   Each is the `example` object the renderer expects. */


/* ---------- CA-CANDIDATE NOTES (per archetype) ---------- */
/* CA_NOTES - per-archetype "what tends to be a Critical Aspect candidate" guidance.
   CONSERVATIVE BY DESIGN: these describe what commonly drives product quality / patient
   safety for an equipment class, to INFORM the site's own risk assessment. They never say
   "skip" a test, never assert a test is non-critical, and always defer to the site CA/CDE
   determination. Rendered inside the approach-lens card, under the risk-based block. */



/* ---------- ACRONYM REFERENCE ---------- */
/* ACRONYM REFERENCE - master dictionary, drafted for parse-check before splice.
   Each entry: TERM: "Expansion - optional short gloss".
   Per-equipment glossary is AUTO-DETECTED from that page's own test text (desc + IQ/OQ/PQ
   strings), so it never goes stale: add a test string later and its acronyms appear.
   Noise tokens (ID, AND, II, A2, units, bare chemical formulae) are deliberately excluded. */


delete ACRONYMS.PVT_dup;

/* Detection: scan a page's combined text, return the sorted list of dictionary
   terms that actually appear. Handles slashed combos (PLC/HMI, ICP-OES) by also
   testing each segment. Word-boundary, case-sensitive on the acronym shape. */
function detectAcronyms(text) {
  const found = new Set();
  // Pre-split the dictionary keys by length desc so multi-char like SS316L match first
  const keys = Object.keys(ACRONYMS);
  for (const k of keys) {
    // build a tolerant boundary: term may be followed by ₂/₃ subscripts, slashes, punctuation
    const esc = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('(?:^|[^A-Za-z0-9])' + esc + '(?:s)?(?![A-Za-z0-9])');
    if (re.test(text)) found.add(k);
  }
  return [...found].sort((a, b) => a.localeCompare(b));
}




/* ---------- EQUIPMENT ADVISORY (category-level orientation) ---------- */



function catKeyOf(id){ for (const c of CATEGORIES){ if (c.members && c.members.includes(id)) return c.key; } return null; }
function renderAdvisory(adv, accent, icon){
  if (!adv) return '';
  const secs = (adv.sections || []).map(s => {
    let inner = '';
    if (s.body) inner += `<p class="ps-body">${TR(s.body)}</p>`;
    if (s.bullets) inner += `<ul class="ps-bullets">${s.bullets.map(x => `<li>${TR(x)}</li>`).join('')}</ul>`;
    if (s.steps) inner += `<ol class="ps-steps">${s.steps.map(x => `<li>${TR(x)}</li>`).join('')}</ol>`;
    if (s.table) inner += `<div class="ps-tablewrap"><table class="ps-table"><thead><tr>${s.table.cols.map(c => `<th>${TR(c)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map(r => `<tr>${r.map((cell, ci) => ci === 0 ? `<th>${TR(cell)}</th>` : `<td>${TR(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (s.svg) inner += `<div class="ps-graph ps-chart">${s.svg}${s.caption ? `<div class="ps-cap">${TR(s.caption)}</div>` : ''}</div>`;
    if (s.note) inner += `<div class="ps-note">${TR(s.note)}</div>`;
    return `<div class="adv-sec">${s.title ? `<h4 class="adv-h">${TR(s.title)}</h4>` : ''}${inner}</div>`;
  }).join('');
  const refs = (adv.refs || []).length
    ? `<div class="ps-refs"><div class="ps-refs-k">${TR('Governing standards')}</div>${adv.refs.map(r => `<a class="ps-ref" href="${r.link}" target="_blank" rel="noopener">${r.label}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg></a>`).join('')}</div>`
    : '';
  return `<details class="adv-card" style="--advc:${accent || '#5aa9e6'}">
    <summary><span class="adv-ico">${icon || '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>'}</span>${TR(adv.title || 'About this equipment')}<span class="adv-tw"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span></summary>
    <div class="adv-wrap">${secs}${refs}</div>
  </details>`;
}




function isCots(id){ return (typeof COTS!=="undefined") && !!COTS[id]; }
function cotsBanner(id){ return (typeof COTS!=="undefined" && typeof COTS_BANNERS!=="undefined" && COTS[id]) ? (COTS_BANNERS[COTS[id]]||"") : ""; }
function countBg5(id){ if(typeof BG5_LEGACY==='undefined')return 0; var e=DATA[id]; if(!e)return 0; var n=0; ['IQ','OQ','PQ'].forEach(function(p){ (e.phases[p]||[]).forEach(function(t,i){ if(BG5_LEGACY[id+'|'+p+'|'+i]) n++; }); }); return n; }


function renderImpact(id){
  const m = IMPACT[id]; if(!m) return '';
  const META = {
    direct:   {label:'Direct Impact',                        cls:'imp-direct',   note:'Classified under the Direct / Indirect / No-Impact system model (ISPE BG5).'},
    indirect: {label:'Indirect Impact',                      cls:'imp-indirect', note:'Classified under the Direct / Indirect / No-Impact system model (ISPE BG5).'},
    noimpact: {label:'No Impact',                            cls:'imp-noimpact', note:'Classified under the Direct / Indirect / No-Impact system model (ISPE BG5).'},
    aiq:      {label:'Analytical instrument (USP &lt;1058&gt;)', cls:'imp-aiq',  note:'Scoped through USP &lt;1058&gt; analytical instrument qualification rather than the D/I/N system model.'},
    csv:      {label:'Computerised system (GAMP 5 / CSV)',   cls:'imp-csv',      note:'Scoped through GAMP 5 and computerised system validation rather than the D/I/N system model.'}
  };
  const t = META[m.cls]; if(!t) return '';
  return '<div class="imp-card">'
    + '<div class="imp-row"><span class="imp-pill '+t.cls+'">'+TR(t.label)+'</span><span class="imp-tag">'+TR('System impact')+'</span></div>'
    + '<p class="imp-why">'+TR(m.why)+'</p>'
    + '<p class="imp-note">'+TR(t.note)+' <a class="imp-link" href="#" onclick="gotoProcess(\'impact\');return false;">'+TR('Impact & Criticality')+' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></a></p>'
    + '</div>';
}

function selectPhase(p){
  const root = document.getElementById('phases'); if(!root) return;
  root.querySelectorAll('.ptab').forEach(b => b.classList.toggle('on', b.getAttribute('data-ph') === p));
  root.querySelectorAll('.ppanel').forEach(pl => pl.classList.toggle('on', pl.getAttribute('data-ph') === p));
}
function openDetail(id) {
  const e = DATA[id];
  currentDetailId = id;
  detailView.classList.remove('bg5-on');
  detailView.classList.remove('cots-on');
  detailView.classList.remove('acc-on');
  document.getElementById('dName').textContent = TR(e.name);
  document.getElementById('dDesc').textContent = TR(e.desc);
  renderSafetyBanner(id);
  { const ab = document.getElementById('advisoryBlock'); if (ab) { const _cat = ADVISORY[catKeyOf(id)]; const _item = ITEM_ADVISORY[id]; ab.innerHTML = (_cat ? renderAdvisory(_cat, '#5aa9e6', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>') : '') + (_item ? renderAdvisory(_item, '#9b8cf0', '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>') : ''); } }
  { const ib = document.getElementById('impactBlock'); if (ib) ib.innerHTML = renderImpact(id); }
  // risk block: approach-neutral framing + type-specific questions
  const rb = document.getElementById('riskBlock');
  if (rb) {
    const arche = RISK_MAP[id];
    const a = arche ? RISK_ARCHETYPES[arche] : null;
    const common = RISK_COMMON.map(q => `<li>${TR(q)}</li>`).join('');
    const typed = a ? a.questions.map(q => `<li>${TR(q)}</li>`).join('') : '';
    rb.innerHTML = `
      
      <details class="risk-card">
        <summary><span class="risk-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3v18M7 21h10M3 8l4 7a3 3 0 0 0 5 0L8 8M16 8l4 7a3 3 0 0 0 5 0L21 8M6 8h12"/></svg></span>${TR('Risk assessment \u2014 questions to ask')}<span class="risk-tw"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span></summary>
        <div class="risk-body">
          <div class="risk-sub">${TR('Ask first (any system)')}</div>
          <ul class="risk-q">${common}</ul>
          ${a ? `<div class="risk-sub">${TR(a.label)}</div><ul class="risk-q">${typed}</ul>` : ''}
          <a class="risk-link" href="#" onclick="gotoProcess('risk');return false;">${TR('Severity / likelihood matrices and method')} <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></a>
        </div>
      </details>
      <details class="lens-card">
        <summary>
          <span class="lens-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="3.2"/><path d="M12 4.5V3M12 21v-1.5M4.5 12H3M21 12h-1.5M6.7 6.7L5.6 5.6M18.4 18.4l-1.1-1.1M17.3 6.7l1.1-1.1M5.6 18.4l1.1-1.1"/></svg></span>
          ${TR('Reading these tests by C&Q approach')}
          <span class="lens-tw"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
        </summary>
        <div class="lens-body">
          <p class="lens-intro">${TR('Every test below is a candidate verification \u2014 the same physical check in any model. What changes with your C&Q approach is the rigour, ownership, and documentation applied to it, not the test itself.')}</p>
          <div class="lens-approach">
            <div class="lens-aname trad">${TR('Traditional (V-Model)')}</div>
            <div class="lens-atext">${TR('Each candidate test is executed as a formal IQ/OQ/PQ protocol step with QA-approved acceptance criteria and full documentation, regardless of criticality. Thorough and defensible, but effort is spread evenly rather than concentrated on what protects the patient.')}</div>
          </div>
          <div class="lens-approach">
            <div class="lens-aname rb">${TR('Risk-based (ASTM E2500 / ISPE BG5)')}</div>
            <div class="lens-atext">${TR('First classify the system and identify its Critical Aspects and Critical Design Elements. Tests that verify a CDE are executed as formal qualification; the rest can be covered by good commissioning or leveraged from vendor/FAT/SAT evidence \u2014 provided that work was done under established GEP and assessed by Quality. The menu never shrinks; the formal-protocol subset does.')}</div>
          </div>
          ${(arche && CA_NOTES[arche]) ? `<div class="lens-canote"><span class="lens-cak">${TR('Likely critical-aspect candidates for this class')}</span>${TR(CA_NOTES[arche])} <span class="lens-cahedge">${TR('Guidance only \u2014 your risk assessment sets the actual CAs/CDEs; no test below is dropped.')}</span></div>` : ''}
          <a class="lens-link" href="#" onclick="gotoProcess('bg5x');return false;">${TR('How to run integrated C&Q')} <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></a>
        </div>
      </details>`;
  }
  const phasesEl = document.getElementById('phases');
  const _ph = ['IQ','OQ','PQ'];
  const _phHtml = _ph.map(p => {
    const tests = e.phases[p] || [];
    if (!tests.length) return '';
    const rows = tests.map((test, i) => {
      const src = test.s === 'gmp' ? GMP_INFO : test.s;
      const cls = src.status;
      const label = cls === 'gmp' ? 'GMP' : cls === 'regulation' ? 'CFR' : TR('source');
      const ho = resolveHowto((HOWTO[id] || {})[p + ':' + i]);
      const hk = id + '|' + p + '|' + i;
      const bg5 = (typeof BG5_LEGACY !== 'undefined') ? BG5_LEGACY[hk] : null;
      const howtoChip = ho
        ? `<button class="howto-chip" id="hc-${hk}" aria-expanded="false" onclick="toggleHowto('${id}','${p}',${i})">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/></svg>
            How to<span class="howto-tw" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
          </button>`
        : '';
      const execChip = `<button class="exv-chip" id="xc-${hk}" aria-expanded="false" onclick="toggleExec('${id}','${p}',${i})">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4M9 13h6M9 17h4"/></svg>
            ${TR('Protocol view')}<span class="exv-tw" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
          </button>`;
      const hasEsc = typeof SAFETY_ESCALATIONS !== 'undefined' && SAFETY_ESCALATIONS[hk];
      const safetyChip = hasEsc
        ? `<button class="sfx-chip" id="sc-${hk}" aria-expanded="false" onclick="toggleSafety('${id}','${p}',${i})">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17.5v.01"/></svg>
            ${TR('Safety')}<span class="sfx-tw" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
          </button>`
        : '';
      return `<div class="test-row${ho ? ' has-howto' : ''}${bg5 ? ' bg5-legacy' : ''}">
        <div class="test-main">
          <span class="test-txt">${TR(test.t)}${bg5 ? '<span class="bg5-tag">BG5</span>' : ''}</span>
          <button class="source-btn ${cls}" onclick="openSheet('${id}','${p}',${i})">
            <span class="dot"></span>${label}
          </button>
        </div>
        <div class="test-chips">${howtoChip}${execChip}${safetyChip}</div>
        ${bg5 ? `<div class="bg5-reason"><b>Typically leveraged under E2500 / BG5 (2nd ed):</b> ${TR(bg5)}</div>` : ''}
        ${ho ? `<div class="howto-panel" id="hp-${hk}" hidden>${renderHowto(ho)}</div>` : ''}
        <div class="exv-panel" id="xp-${hk}" hidden></div>
        ${hasEsc ? `<div class="sfx-panel" id="sp-${hk}" hidden></div>` : ''}
      </div>`;
    }).join('');
    return `<section class="phase">
      <div class="phase-head">
        <span class="phase-tag ${p.toLowerCase()}">${p}</span>
        <span class="phase-label">${TR(PHASE_LABELS[p])}</span>
      </div>${rows}</section>`;
  });
  const _active = _ph.filter((p, i) => _phHtml[i]);
  const _tabs = '<div class="ptabs">' + _active.map((p, i) => `<button class="ptab ${p.toLowerCase()}${i === 0 ? ' on' : ''}" data-ph="${p}" onclick="selectPhase('${p}')">${p}</button>`).join('') + '</div>';
  const _panels = _ph.map((p, i) => _phHtml[i] ? `<div class="ppanel${p === _active[0] ? ' on' : ''}" data-ph="${p}">${_phHtml[i]}</div>` : '').join('');
  phasesEl.innerHTML = `<p class="cand-note">${TR('The IQ, OQ, and PQ tests below are a list of tests that may be required for this system. Which tests are chosen for formal qualification depends on what information is leveraged from commissioning, FAT/SAT, or vendor documentation, your C&Q approach, and how the system is classified for risk and impact.')}</p>` + _tabs + _panels;
  // BG5 gold-toggle: only shown when this item has legacy-BG5 flagged tests
      { const ub = document.getElementById('ursBlock'); if (ub) { ub.innerHTML = (typeof renderURS==='function') ? renderURS(id) : ''; } }
    { const qc = document.getElementById('qualControls');
      if (qc) {
        const n = (typeof countBg5 === 'function') ? countBg5(id) : 0;
        const hasCots = (typeof isCots==='function' && isCots(id));
        let _qb = '', _qx = '';
        if (hasCots) { _qb += `            <button class="cots-btn" id="cotsBtn" aria-pressed="false" onclick="toggleCOTS()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>
              <span class="cots-lbl">${TR('COTS qualification note')}</span>
            </button>`; _qx += `            <div class="cots-explain">${TR(cotsBanner(id))}</div>`; }
        if (n > 0)   { _qb += `          <button class="bg5-btn" id="bg5Btn" aria-pressed="false" onclick="toggleBG5()">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 2.5l2.7 5.9 6.4.6-4.8 4.3 1.4 6.3L12 20.4 6.0 23.9l1.4-6.3-4.8-4.3 6.4-.6z"/></svg>
            <span class="bg5-lbl">${TR('Highlight legacy BG5 tests')}</span> <span class="bg5-ct">(${n})</span>
          </button>`;  _qx += `          <div class="bg5-explain">${TR('Gold marks the tests typically leveraged rather than re-executed. They were formal IQ/OQ under ISPE Baseline Guide 5 (1st ed), but under risk-based C&Q (ASTM E2500 / BG5 2nd ed) they usually verify no Critical Design Element, so they are typically covered by good engineering practice (commissioning, FAT/SAT, or assessed vendor documentation). Each one shows why. This is unit-specific, though: depending on the equipment and its risk assessment, some gold tests may still need formal execution. Everything NOT highlighted stays formal qualification and must still be executed: all PQ (performance qualification is always retained), plus the critical mapping, product-protection alarm, excursion/recovery and critical-parameter tests. The candidate menu never shrinks; only the formal-protocol subset does, and your system risk assessment makes the final call.')}</div>`; }
        qc.innerHTML = (_qb ? `<div class="qc-buttons">${_qb}</div>` : '') + _qx;
      } }
    // acronym reference: auto-detected from THIS page's own text (desc + all test strings)
  const ab = document.getElementById('acronymBlock');
  if (ab) {
    let blob = e.desc || '';
    for (const p of ['IQ','OQ','PQ']) if (e.phases[p]) for (const t of e.phases[p]) blob += '  ' + (t.t || '');
    const terms = detectAcronyms(blob);
    if (terms.length) {
      const rows = terms.map(t => `<div class="acro-row"><span class="acro-term">${t}</span><span class="acro-def">${TR(ACRONYMS[t])}</span></div>`).join('');
      ab.innerHTML = `
      <details class="acro-card">
        <summary>
          <span class="acro-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6M12 4v16M7 11h2M15 11h2"/></svg></span>
          ${TR('Acronyms on this page')}<span class="acro-count">${terms.length}</span>
          <span class="acro-tw"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
        </summary>
        <div class="acro-body"><div class="acro-list">${rows}</div></div>
      </details>`;
    } else {
      ab.innerHTML = '';
    }
  }
  listView.classList.add('hidden');
  detailView.classList.add('active');
  document.querySelector('.search-wrap').style.display = 'none';
  window.scrollTo(0,0);
}

function backToList() {
  detailView.classList.remove('active');
  listView.classList.remove('hidden');
  document.querySelector('.search-wrap').style.display = '';
  window.scrollTo(0,0);
}

function gotoProcess(id) {
  detailView.classList.remove('active');
  listView.classList.remove('hidden');
  openProcess(id);
}

/* ---------- SOURCE SHEET ---------- */
const sheet = document.getElementById('sheet');
const backdrop = document.getElementById('backdrop');

/* ---------- HOW-TO DROPDOWN ---------- */
function renderHowto(ho) {
  let h = '';
  if (ho.title) h += `<div class="howto-title">${TR(ho.title)}</div>`;
  if (ho.materials && ho.materials.length) {
    h += `<div class="howto-sub">${TR('Materials')}</div><ul class="howto-mats">` +
      ho.materials.map(m => `<li>${TR(m)}</li>`).join('') + `</ul>`;
  }
  h += `<div class="howto-sub">${TR('Steps')}</div><ol class="howto-steps">` +
    ho.steps.map(s => `<li>${TR(s)}</li>`).join('') + `</ol>`;
  if (ho.accept) h += `<div class="howto-accept"><span class="howto-accept-k">${TR('Acceptance')}</span>${TR(ho.accept)}</div>`;
  if (ho.link) {
    h += `<a class="howto-link" href="${ho.link}" target="_blank" rel="noopener">${TR(ho.linkLabel || 'Reference guide')}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg></a>`;
  }
  h += `<div class="howto-disc">${TR('Procedure reference compiled from cited guidance. Adapt wording and acceptance limits to your own URS/SOP before use in a protocol.')}</div>`;
  return h;
}

function toggleBG5() {
  const on = detailView.classList.toggle('bg5-on');
  if (on) {
    detailView.classList.remove('cots-on');
    const _cb = document.getElementById('cotsBtn');
    if (_cb) { _cb.setAttribute('aria-pressed','false'); const _cl=_cb.querySelector('.cots-lbl'); if(_cl) _cl.textContent=TR('COTS qualification note'); }
  }
  const b = document.getElementById('bg5Btn');
  if (b) {
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    const lbl = b.querySelector('.bg5-lbl');
    if (lbl) lbl.textContent = TR(on ? 'Hide BG5 highlights' : 'Highlight legacy BG5 tests');
  }
}

function renderURS(id){
  var u = (typeof URS!=='undefined') ? URS[id] : null; if(!u) return '';
  var order=[['functional','Functional'],['performance','Performance'],['operational','Operational & EHS'],['dataintegrity','Data integrity (Part 11)'],['regulatory','Regulatory'],['support','Vendor & support']];
  var body='';
  order.forEach(function(o){ var arr=u[o[0]]; if(arr&&arr.length){ var items=(o[0]==='performance')?arr.map(function(x){return accLi(TR(x));}).join(''):arr.map(function(x){return '<li>'+TR(x)+'</li>';}).join(''); body+='<div class="urs-cat"><div class="urs-cat-h">'+TR(o[1])+'</div><ul class="urs-list">'+items+'</ul></div>'; }});
  var ic='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5aa9e6" stroke-width="1.8"><path d="M9 4h6a1 1 0 0 1 1 1v0a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v0a1 1 0 0 1 1-1z"/><path d="M9 12l1.5 1.5L14 10"/></svg>';
  var chev='<svg class="urs-chev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>';
  return '<details class="urs-card"><summary>'+ic+'<span>'+TR('Typical User Requirements (URS)')+'</span>'+chev+'</summary><div class="urs-body">'+(u.intro?'<p class="urs-intro">'+TR(u.intro)+'</p>':'')+body+'</div></details>';
}

function toggleCOTS() {
  const on = detailView.classList.toggle('cots-on');
  if (on) {
    detailView.classList.remove('bg5-on');
    const b5 = document.getElementById('bg5Btn');
    if (b5) { b5.setAttribute('aria-pressed','false'); const l5=b5.querySelector('.bg5-lbl'); if(l5) l5.textContent=TR('Highlight legacy BG5 tests'); }
  }
  const c = document.getElementById('cotsBtn');
  if (c) {
    c.setAttribute('aria-pressed', on ? 'true' : 'false');
    const lbl = c.querySelector('.cots-lbl');
    if (lbl) lbl.textContent = TR(on ? 'Hide COTS note' : 'COTS qualification note');
  }
}

function accIsMandated(t){
  var s = String(t).toLowerCase();
  // STRONG external-fixed signals (sterility, contamination, sterilizing-grade filtration): green outright.
  if (/sterility assurance|\bsal\b|10\s*\^?\s*-\s*6|non-condensable|dryness fraction|superheat|10993-7|residual\s+(eto|ethylene)/.test(s)) return true;
  if (/depyrogen|endotoxin\s*(challenge|reduction|indicator)/.test(s)) return true;
  if (/log\s*(reduction|kill)/.test(s)) return true;
  if (/\d+\s*-?\s*log/.test(s) && /(reduction|kill|spore|steril|endotoxin|bioburden|decontam|vhp|stearo|atrophaeus|bacillus|geobacillus)/.test(s)) return true;
  if (/b\.?\s*diminuta|astm\s*f\s?838/.test(s)) return true;
  if (/(0\.2\d?\s*[\u00b5u]m|sterilis|steriliz)/.test(s) && /(filter|filtration)/.test(s) && /(diminuta|f\s?838|retention|10\s*\^?\s*7)/.test(s)) return true;
  // FORCE AMBER: values that are product / process / method set even when a standard is cited
  // (Annex 1 (2022) risk/CCS-based items + filter-integrity values + method/product-specific compendial numbers).
  if (/velocity|airflow|air flow|m\/s|\bfpm\b|differential pressure|pressure differential|\bdp\b|recovery time|clean-?up time|bubble ?point|forward diffusion|dissolution|q-?value|content uniformity|dosage units|uniformity of dosage|system suitability|tailing factor|\brsd\b|relative standard deviation/.test(s)) return false;
  // COMPENDIAL UTILITY QUALITY (monograph numbers): green.
  if (/<\s*64[35]\s*>|usp\s*<?\s*64[35]/.test(s)) return true;                                   // conductivity <645>, TOC <643>
  if (/conductiv/.test(s) && /[\u00b5u]s\/cm|usp|<645>/.test(s)) return true;
  if (/\btoc\b/.test(s) && /ppb|mg\/l|<643>|usp/.test(s)) return true;
  if (/endotoxin/.test(s) && (/0\.25\s*eu/.test(s) || (/eu\/m/.test(s) && /wfi|water/.test(s)))) return true;
  if (/(wfi|water for injection|purified water|\bwater\b)/.test(s) && /\bcfu\b/.test(s) && /\bml\b|100\s*ml/.test(s)) return true;
  // PARTICULATE MATTER IN INJECTIONS (USP <788/787/789>): fixed per-container counts.
  if (/<\s*78[789]\s*>|usp\s*<?\s*78[789]/.test(s)) return true;
  if (/(sub-?visible|particulate matter)/.test(s) && /(container|\bml\b|\u00b5m|um)/.test(s) && /(6000|3000|600|300|10\s*[\u00b5u]m|25\s*[\u00b5u]m)/.test(s)) return true;
  // ENVIRONMENTAL CLASSIFICATION (ISO 14644-1 / EU GMP Annex 1) particle & microbial grade limits: fixed.
  if (/iso\s*1?4644/.test(s)) return true;
  if (/(grade\s*[a-d]\b|iso\s*(class\s*)?[5-8]\b|class\s*100\b|class\s*10,?000\b)/.test(s) && /(particle|particulate|\bcfu\b|microbial|settle plate|contact plate|0\.5\s*[\u00b5u]m|5\.0?\s*[\u00b5u]m|\/m3|per cubic|m\u00b3)/.test(s)) return true;
  // HEPA / filter-installation integrity penetration limit (fixed).
  if (/(hepa|installed filter|filter integrity)/.test(s) && /(penetration|0\.01\s*%|\u22640\.01|99\.9[0-9]|efficiency)/.test(s)) return true;
  // COMPRESSED AIR / PROCESS GAS QUALITY CLASS (ISO 8573-1): fixed once a class is named.
  if (/iso\s*8573/.test(s)) return true;
  return false;
}
var ACC_NUM_RE = /(?:>=|<=|\u2265|\u2264|\u00b1|\+\/-|~|<|>|[+\-])?\s*\b\d+(?:[.,]\d+)*(?:\s*\^\s*-?\s*\d+)?(?:\s*(?:to|[-\u2013])\s*[+\-]?\s*\d+(?:[.,]\d+)*)?(?:\s*-?\s*log)?(?:\s*(?:%|\u00b0?\s?[Cc]\b|nD|nm|\u00b5m|um|fpm|mbar|Pa|J\/g|mOsm\/kg|mOsm|RPM|RCF|Ra|K\b))?/g;
function accWrapNums(t){
  var s = String(t);
  return s.replace(ACC_NUM_RE, function(m, off){
    if (!m || !m.trim()) return m;
    var before = s.slice(Math.max(0, off - 9), off);
    if (/(^|\W)(en|iso|usp|cfr|ich|gamp|tr|annex|part|chapter|no|vol)\.?\s*<?$/i.test(before)) return m;
    return '<span class="acc-num">' + m + '</span>';
  });
}
function accProv(t){
  var mand = accIsMandated(t);
  var cls = mand ? 'acc-mandated' : (/\d/.test(t) ? 'acc-verify' : '');
  var html = cls ? accWrapNums(t) : t;
  var tag = mand ? '<span class="acc-tag acc-tag-m">mandated</span>'
                 : (cls === 'acc-verify' ? '<span class="acc-tag acc-tag-v">confirm vs spec</span>' : '');
  return { cls: cls, html: html + tag };
}
function accLi(t){ var p = accProv(t); return '<li class="acc-line ' + p.cls + '">' + p.html + '</li>'; }
function accDiv(t){ var p = accProv(t); return '<div class="exv-accept acc-line ' + p.cls + '">' + p.html + '</div>'; }
function toggleAcc(){
  var on = detailView.classList.toggle('acc-on');
  var b = document.getElementById('accBtn');
  if (b) { b.setAttribute('aria-pressed', on ? 'true' : 'false');
    var l = b.querySelector('.acc-lbl'); if (l) l.textContent = TR(on ? 'Hide acceptance sources' : 'Show acceptance sources'); }
}

function toggleHowto(id, phase, i) {
  const hk = id + '|' + phase + '|' + i;
  const panel = document.getElementById('hp-' + hk);
  const chip = document.getElementById('hc-' + hk);
  if (!panel) return;
  const open = !panel.hasAttribute('hidden');
  if (open) {
    panel.setAttribute('hidden', '');
    chip.setAttribute('aria-expanded', 'false');
    chip.closest('.test-row').classList.remove('howto-open');
  } else {
    panel.removeAttribute('hidden');
    chip.setAttribute('aria-expanded', 'true');
    chip.closest('.test-row').classList.add('howto-open');
  }
}

/* ---------- EXECUTABLE (PROTOCOL) VIEW ----------
   Generates a protocol-ready, copy-pasteable expansion of a test: objective,
   pre-conditions, a data-entry table shaped for the test's archetype, and the
   acceptance criterion. NOT a protocol generator (clients have their own templates)
   - it produces the fillable skeleton you paste INTO your template. */




function classifyExec(testText) {
  for (const a of EXEC_ARCHETYPES) if (a.re.test(testText)) return a;
  return { key: 'general', fields: EXEC_DEFAULT };
}

function execAcceptanceText(src) {
  if (!src || typeof src !== 'object') return 'Per approved acceptance criteria (define in your protocol against the URS/SOP).';
  if (src.crit) return src.crit;
  return 'Per approved acceptance criteria (define in your protocol against the URS/SOP).';
}

// Build a plain-text version of the table for clipboard (tab-separated, paste-friendly into Word/Excel).
function execTableText(fields) {
  const lines = [fields.cols.join('\t')];
  for (let r = 0; r < fields.rows; r++) lines.push(fields.cols.map(() => '').join('\t'));
  return lines.join('\n');
}

/* ===== SENSOR-PLACEMENT REFERENCE MAPS (CTUs, ovens, sample planes) ===== */


function refMapSVG(family, cfg) {
  const W = 324, H = 212;
  const A = '#58e6a8', WIRE = 'rgba(150,160,175,0.55)', AXT = 'rgba(150,160,175,0.92)', HOT = '#e0935a', DOOR = 'rgba(120,180,210,0.85)';
  const f1 = n => (Math.round(n * 10) / 10);
  const dot = (x, y, n, tag, color) => {
    color = color || A;
    let s = `<circle cx="${f1(x)}" cy="${f1(y)}" r="6.6" fill="${color}" opacity="0.92"/><text x="${f1(x)}" y="${f1(y) + 3}" text-anchor="middle" font-size="8" font-weight="700" fill="#0b0f14">${n}</text>`;
    if (tag) s += `<text x="${f1(x)}" y="${f1(y) - 9}" text-anchor="middle" font-size="7.5" fill="${AXT}">${tag}</text>`;
    return s;
  };
  const lbl = (x, y, t, col) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="8" fill="${col || AXT}">${t}</text>`;
  const line = (a, b, col, dash) => `<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${col || WIRE}" stroke-width="1.2"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
  let body = '';

  if (family === 'reachin') {
    let fx = 66, fy = 42, fw = 150, fh = 124, dx = 44, dy = -30, midShelf = false, mullions = 0;
    if (cfg === 'double') { fx = 52; fw = 188; mullions = 1; midShelf = true; }
    else if (cfg === 'triple') { fx = 46; fw = 208; mullions = 2; midShelf = true; }
    else if (cfg === 'under') { fy = 90; fh = 76; }
    const F = { tl: [fx, fy], tr: [fx + fw, fy], bl: [fx, fy + fh], br: [fx + fw, fy + fh] };
    const B = { tl: [fx + dx, fy + dy], tr: [fx + fw + dx, fy + dy], bl: [fx + dx, fy + fh + dy], br: [fx + fw + dx, fy + fh + dy] };
    const C = [(F.tl[0] + B.br[0]) / 2, (F.tl[1] + B.br[1]) / 2];
    body += line(F.tl, F.tr) + line(F.tr, F.br) + line(F.br, F.bl) + line(F.bl, F.tl);
    body += line(B.tl, B.tr) + line(B.tr, B.br) + line(B.br, B.bl) + line(B.bl, B.tl);
    body += line(F.tl, B.tl) + line(F.tr, B.tr) + line(F.bl, B.bl) + line(F.br, B.br);
    for (let m = 1; m <= mullions; m++) { const mxp = fx + fw * m / (mullions + 1); body += line([mxp, fy], [mxp, fy + fh], DOOR); }
    body += line([fx + fw - 10, fy + fh * 0.45], [fx + fw - 10, fy + fh * 0.6], DOOR);
    let n = 1;
    body += dot(F.bl[0], F.bl[1], n++) + dot(F.br[0], F.br[1], n++) + dot(F.tl[0], F.tl[1], n++) + dot(F.tr[0], F.tr[1], n++);
    body += dot(B.bl[0], B.bl[1], n++) + dot(B.br[0], B.br[1], n++) + dot(B.tl[0], B.tl[1], n++) + dot(B.tr[0], B.tr[1], n++);
    body += dot(C[0], C[1], n++, 'centre');
    if (midShelf) {
      const my = fy + fh * 0.5 + dy * 0.5;
      body += line([fx + dx * 0.5, my], [fx + fw + dx * 0.5, my], WIRE, '3 3');
      body += dot(fx + fw * 0.34 + dx * 0.5, my, n++, 'mid') + dot(fx + fw * 0.66 + dx * 0.5, my, n++, 'mid');
    }
    body += dot(F.br[0] - 20, C[1] + 8, n++, 'control', HOT);
    body += lbl((F.bl[0] + F.br[0]) / 2, F.bl[1] + 16, cfg === 'under' ? 'front / door (under-counter)' : 'front / door', AXT);
  }
  else if (family === 'walkin') {
    const rx = 48, ry = 36, rw = 228, rh = 146;
    body += `<rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="none" stroke="${WIRE}" stroke-width="1.4"/>`;
    const doorx = rx + rw * 0.5;
    body += `<rect x="${doorx - 16}" y="${ry + rh - 2}" width="32" height="4" fill="${DOOR}"/>` + lbl(doorx, ry + rh + 14, 'door', AXT);
    body += line([rx, ry], [rx, ry + rh], HOT) + `<text x="${rx - 7}" y="${f1(ry + rh * 0.5)}" text-anchor="middle" font-size="7.5" fill="${HOT}" transform="rotate(-90 ${rx - 7} ${f1(ry + rh * 0.5)})">ext. wall</text>`;
    let n = 1;
    if (cfg === 'warehouse') {
      for (let r = 0; r < 3; r++) { const rxx = rx + 34 + r * 66; body += `<rect x="${rxx}" y="${ry + 26}" width="24" height="${rh - 64}" fill="rgba(150,160,175,0.10)" stroke="${WIRE}" stroke-width="0.8"/>`; }
      body += lbl(rx + rw * 0.5, ry - 6, 'warehouse (plan) \u2014 H/L = high & low levels', AXT);
    } else {
      body += `<rect x="${rx + rw - 64}" y="${ry + 24}" width="36" height="${rh - 48}" fill="rgba(150,160,175,0.10)" stroke="${WIRE}" stroke-width="0.8"/>`;
      body += `<rect x="${rx + 22}" y="${ry + 4}" width="48" height="9" fill="rgba(120,180,210,0.18)" stroke="${DOOR}" stroke-width="0.8"/>`;
      body += lbl(rx + rw * 0.5, ry - 6, 'cold room (plan) \u2014 H/L = high & low at each corner', AXT);
    }
    body += dot(rx + 15, ry + rh - 15, n++, 'H/L') + dot(rx + rw - 15, ry + rh - 15, n++, 'H/L') + dot(rx + 15, ry + 16, n++, 'H/L') + dot(rx + rw - 15, ry + 16, n++, 'H/L');
    body += dot(rx + rw * 0.5, ry + rh * 0.5, n++, 'centre');
    body += dot(doorx, ry + rh - 18, n++, 'door', HOT);
    if (cfg === 'warehouse') { body += dot(rx + 9, ry + rh * 0.5, n++, 'ext', HOT) + dot(rx + rw * 0.5, ry + 13, n++, 'HVAC', HOT); }
    else { body += dot(rx + 46, ry + 17, n++, 'coil', HOT); }
  }
  else if (family === 'oven') {
    const fx = 72, fy = 38, fw = 148, fh = 138, dx = 40, dy = -26;
    const F = { tl: [fx, fy], tr: [fx + fw, fy], bl: [fx, fy + fh], br: [fx + fw, fy + fh] };
    const B = { tl: [fx + dx, fy + dy], tr: [fx + fw + dx, fy + dy], bl: [fx + dx, fy + fh + dy], br: [fx + fw + dx, fy + fh + dy] };
    body += line(F.tl, F.tr) + line(F.tr, F.br) + line(F.br, F.bl) + line(F.bl, F.tl);
    body += line(B.tl, B.tr) + line(B.tr, B.br) + line(B.br, B.bl) + line(B.bl, B.tl);
    body += line(F.tl, B.tl) + line(F.tr, B.tr) + line(F.bl, B.bl) + line(F.br, B.br);
    const lv = [0.28, 0.55, 0.82]; let n = 1;
    lv.forEach(t => {
      const y = fy + fh * t, yb = dy * t;
      body += line([fx, y], [fx + fw, y], WIRE, '3 3') + line([fx + fw, y], [fx + fw + dx, y + dy], WIRE, '3 3');
      body += dot(fx + 13, y, n++) + dot(fx + fw - 13, y, n++) + dot(fx + fw + dx - 13, y + dy, n++);
    });
    body += dot((F.tl[0] + B.br[0]) / 2, (F.tl[1] + B.br[1]) / 2, n++, 'centre');
    body += dot((fx + fx + fw) / 2, fy + fh - 8, n++, 'element', HOT);
    body += lbl((F.bl[0] + F.br[0]) / 2, F.bl[1] + 16, 'front / door \u2014 dashed = shelves', AXT);
  }
  else if (family === 'plane') {
    const rx = 70, ry = 46, rw = 184, rh = 116; let n = 1;
    body += `<rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="none" stroke="${WIRE}" stroke-width="1.4"/>`;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { const x = rx + rw * (0.16 + 0.34 * c), y = ry + rh * (0.2 + 0.3 * r); body += dot(x, y, n++); }
    body += lbl(rx + rw * 0.5, ry - 8, 'sample plane \u2014 3x3 uniformity grid', AXT);
  }

  return `<svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="sensor placement reference">${body}</svg>`;
}

function refMapSectionHTML(uid, family) {
  const f = REFMAPS[family]; if (!f) return '';
  const cfg0 = f.configs[0].key;
  const tabs = f.configs.map(c => `<button class="rm-tab${c.key === cfg0 ? ' rm-tab-on' : ''}" data-cfg="${c.key}" onclick="swapRefMap('${uid}','${family}','${c.key}')">${TR(c.label)}</button>`).join('');
  const note0 = f.configs[0].note || f.baseNote || '';
  return `<div class="exv-block"><div class="exv-bh">${TR('Sensor placement map (reference)')}</div>
    <div class="exv-refmap" id="rm-${uid}">
      ${f.configs.length > 1 ? `<div class="rm-tabs">${tabs}</div>` : ''}
      <div class="rm-canvas">${refMapSVG(family, cfg0)}</div>
      <div class="rm-note">${TR(note0)}</div>
    </div></div>`;
}

function swapRefMap(uid, family, cfg) {
  const host = document.getElementById('rm-' + uid); if (!host) return;
  const c = host.querySelector('.rm-canvas'); if (c) c.innerHTML = refMapSVG(family, cfg);
  host.querySelectorAll('.rm-tab').forEach(b => b.classList.toggle('rm-tab-on', b.dataset.cfg === cfg));
  const f = REFMAPS[family]; const cc = f && f.configs.find(x => x.key === cfg);
  const n = host.querySelector('.rm-note'); if (n) n.textContent = (cc && cc.note) || (f && f.baseNote) || '';
}

































function attrJSON(s) { return JSON.stringify(s).replace(/'/g, '&#39;'); }









;;;;;;
function buildExecutable(id, phase, i) {
  const test = DATA[id].phases[phase][i];
  const src = test.s === 'gmp' ? GMP_INFO : test.s;
  const objective = test.t || '';

  // Prefer a hand-authored override (map key, then inline test.exec), else generate.
  const ovKey = id + '|' + phase + '|' + i;
  const ov = (typeof EXEC_OVERRIDES_35 !== 'undefined' && EXEC_OVERRIDES_35[ovKey])
    || (typeof EXEC_OVERRIDES_34 !== 'undefined' && EXEC_OVERRIDES_34[ovKey])
    || (typeof EXEC_OVERRIDES_33 !== 'undefined' && EXEC_OVERRIDES_33[ovKey])
    || (typeof EXEC_OVERRIDES_32 !== 'undefined' && EXEC_OVERRIDES_32[ovKey])
    || (typeof EXEC_OVERRIDES_31 !== 'undefined' && EXEC_OVERRIDES_31[ovKey])
    || (typeof EXEC_OVERRIDES !== 'undefined' && EXEC_OVERRIDES[ovKey])
    || (typeof EXEC_OVERRIDES_2 !== 'undefined' && EXEC_OVERRIDES_2[ovKey])
    || (typeof EXEC_OVERRIDES_3 !== 'undefined' && EXEC_OVERRIDES_3[ovKey])
    || (typeof EXEC_OVERRIDES_4 !== 'undefined' && EXEC_OVERRIDES_4[ovKey])
    || (typeof EXEC_OVERRIDES_5 !== 'undefined' && EXEC_OVERRIDES_5[ovKey])
    || (typeof EXEC_OVERRIDES_6 !== 'undefined' && EXEC_OVERRIDES_6[ovKey])
    || (typeof EXEC_OVERRIDES_7 !== 'undefined' && EXEC_OVERRIDES_7[ovKey])
    || (typeof EXEC_OVERRIDES_8 !== 'undefined' && EXEC_OVERRIDES_8[ovKey])
    || (typeof EXEC_OVERRIDES_9 !== 'undefined' && EXEC_OVERRIDES_9[ovKey])
    || (typeof EXEC_OVERRIDES_10 !== 'undefined' && EXEC_OVERRIDES_10[ovKey])
    || (typeof EXEC_OVERRIDES_11 !== 'undefined' && EXEC_OVERRIDES_11[ovKey])
    || (typeof EXEC_OVERRIDES_12 !== 'undefined' && EXEC_OVERRIDES_12[ovKey])
    || (typeof EXEC_OVERRIDES_13 !== 'undefined' && EXEC_OVERRIDES_13[ovKey])
    || (typeof EXEC_OVERRIDES_14 !== 'undefined' && EXEC_OVERRIDES_14[ovKey])
    || (typeof EXEC_OVERRIDES_15 !== 'undefined' && EXEC_OVERRIDES_15[ovKey])
    || (typeof EXEC_OVERRIDES_16 !== 'undefined' && EXEC_OVERRIDES_16[ovKey])
    || (typeof EXEC_OVERRIDES_17 !== 'undefined' && EXEC_OVERRIDES_17[ovKey])
    || (typeof EXEC_OVERRIDES_18 !== 'undefined' && EXEC_OVERRIDES_18[ovKey])
  || (typeof EXEC_OVERRIDES_19 !== 'undefined' && EXEC_OVERRIDES_19[ovKey])
  || (typeof EXEC_OVERRIDES_20 !== 'undefined' && EXEC_OVERRIDES_20[ovKey])
  || (typeof EXEC_OVERRIDES_21 !== 'undefined' && EXEC_OVERRIDES_21[ovKey])
  || (typeof EXEC_OVERRIDES_22 !== 'undefined' && EXEC_OVERRIDES_22[ovKey])
  || (typeof EXEC_OVERRIDES_23 !== 'undefined' && EXEC_OVERRIDES_23[ovKey])
  || (typeof EXEC_OVERRIDES_24 !== 'undefined' && EXEC_OVERRIDES_24[ovKey])
  || (typeof EXEC_OVERRIDES_25 !== 'undefined' && EXEC_OVERRIDES_25[ovKey])
  || (typeof EXEC_OVERRIDES_26 !== 'undefined' && EXEC_OVERRIDES_26[ovKey])
  || (typeof EXEC_OVERRIDES_27 !== 'undefined' && EXEC_OVERRIDES_27[ovKey])
  || (typeof EXEC_OVERRIDES_28 !== 'undefined' && EXEC_OVERRIDES_28[ovKey])
  || (typeof EXEC_OVERRIDES_29 !== 'undefined' && EXEC_OVERRIDES_29[ovKey])
  || (typeof EXEC_OVERRIDES_30 !== 'undefined' && EXEC_OVERRIDES_30[ovKey])
    || test.exec || null;

  const authored = !!ov;
  const isStepSchema = authored && Array.isArray(ov.steps);
  if (isStepSchema) return buildExecutableSteps(id, phase, i, ov, objective, src);

  let f, accept, pre, note;
  if (ov) {
    f = ov.fields;
    accept = ov.accept || execAcceptanceText(src);
    pre = ov.pre || ['Calibrated test instruments listed and within cal date', 'Prior phase(s) complete and approved; system in the required state', 'Acceptance criteria approved before execution'];
    note = ov.note || '';
  } else {
    f = classifyExec(objective).fields;
    accept = execAcceptanceText(src);
    pre = ['Calibrated test instruments listed and within cal date', 'Prior phase(s) complete and approved; system in the required state', 'Acceptance criteria approved before execution'];
    note = '';
  }

  const headCells = f.cols.map(c => `<th>${TR(c)}</th>`).join('');
  const bodyRows = Array.from({ length: f.rows }).map(() =>
    `<tr>${f.cols.map(() => '<td class="exv-blank"></td>').join('')}</tr>`).join('');

  // whole-test plain text for copy
  const whole = [
    'TEST: ' + objective,
    'PHASE: ' + phase + '  (' + (PHASE_LABELS[phase] || '') + ')',
    '',
    'PRE-CONDITIONS:',
    ...pre.map(p => '- ' + p),
    '',
    'PROCEDURE: ' + (f.hint || ''),
    '',
    'DATA:',
    execTableText(f),
    '',
    ...(Array.isArray(accept) ? ['ACCEPTANCE CRITERIA:', ...accept.map((a, n) => (n + 1) + '. ' + a)] : ['ACCEPTANCE CRITERION:', accept]),
    ...(note ? ['', 'NOTE: ' + note] : []),
    '',
    'RESULT: Pass / Fail ___    Executed by/date ___    Reviewed by/date ___'
  ].join('\n');

  const tag = authored ? TR('Hand-authored protocol view') : TR('Protocol-ready skeleton');
  const caveat = authored
    ? TR('Hand-authored for this test. Field structure and acceptance reflect common practice \u2014 confirm exact limits and wording against your URS/SOP and paste into your own protocol template before use.')
    : TR('Generated skeleton from the test and its cited acceptance basis. Confirm wording and limits against your URS/SOP and paste into your own protocol template before use.');

  return `
    <div class="exv${authored ? ' exv-authored' : ''}">
      <div class="exv-row1">
        <span class="exv-tag">${tag}</span>
        <button class="exv-copyall" onclick='execCopy(this, ${attrJSON(whole)})'>${TR('Copy whole test')}</button>
      </div>
      <div class="exv-block">
        <div class="exv-bh">${TR('Objective')}</div>
        <div class="exv-text">${TR(objective)}</div>
      </div>
      <div class="exv-block">
        <div class="exv-bh">${TR('Pre-conditions')}</div>
        <ul class="exv-list">${pre.map(p => `<li>${TR(p)}</li>`).join('')}</ul>
      </div>
      <div class="exv-block">
        <div class="exv-bh-row">
          <span class="exv-bh">${TR('Data entry')}</span>
          <button class="exv-copy" onclick='execCopy(this, ${attrJSON(execTableText(f))})'>${TR('Copy table')}</button>
        </div>
        <div class="exv-hint">${TR(f.hint)}</div>
        <div class="exv-tablewrap"><table class="exv-table"><thead><tr>${headCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>
      </div>
      <div class="exv-block">
        <div class="exv-bh-row">
          <span class="exv-bh">${TR(Array.isArray(accept) ? 'Acceptance criteria' : 'Acceptance criterion')}</span>
          <button class="exv-copy" onclick='execCopy(this, ${attrJSON(Array.isArray(accept) ? accept.map((a, n) => (n + 1) + '. ' + a).join('\n') : accept)})'>${TR('Copy')}</button>
        </div>
        ${Array.isArray(accept)
      ? `<ol class="exv-acclist">${accept.map(a => accLi(TR(a))).join('')}</ol>`
      : accDiv(TR(accept))}
      </div>
      ${note ? `<div class="exv-block"><div class="exv-bh">${TR('Field note')}</div><div class="exv-note">${TR(note)}</div></div>` : ''}
      <div class="exv-caveat">${caveat}</div>
    </div>`;
}

/* Summary/data table text (tab-separated) for copy: header + rows.
   If summary.rowLabels is present, the first column is pre-filled with the labels. */
function execSummaryText(summary) {
  if (!summary || !summary.cols) return '';
  const rl = Array.isArray(summary.rowLabels) ? summary.rowLabels : null;
  const n = rl ? rl.length : (summary.rows || 3);
  const lines = [summary.cols.join('\t')];
  for (let r = 0; r < n; r++) lines.push(summary.cols.map((c, ci) => (rl && ci === 0) ? rl[r] : '').join('\t'));
  return lines.join('\n');
}

/* Expected-data-shape sketch: a labeled-axes SVG showing the idealized data shape
   a test should produce (teaching/field aid). Renders only when ov.chart is present. */
function execChartSVG(chart) {
  if (!chart) return '';
  const W = 304, H = 160, L = 40, R = 12, T = 14, B = 30;
  const x0 = L, x1 = W - R, y0 = H - B, y1 = T;
  const pw = x1 - x0, ph = y0 - y1;
  const mx = t => x0 + Math.max(0, Math.min(1, t)) * pw;
  const my = v => y0 - Math.max(0, Math.min(1, v)) * ph;
  const A = '#58e6a8', AX = 'rgba(150,160,175,0.5)', AXT = 'rgba(150,160,175,0.85)', LIM = '#e0726a';
  const shape = chart.shape || 'linear';
  const f1 = n => n.toFixed(1);
  const path = pts => pts.map((p, i) => (i ? 'L' : 'M') + f1(mx(p[0])) + ' ' + f1(my(p[1]))).join(' ');
  const series = (fn, n) => { n = n || 44; const a = []; for (let i = 0; i <= n; i++) { const t = i / n; a.push([t, fn(t)]); } return a; };
  let curve = '', extra = '';

  if (shape === 'saturation') curve = path(series(t => 0.92 * (1 - Math.exp(-3.2 * t))));
  else if (shape === 'decay') curve = path(series(t => 0.06 + 0.9 * Math.exp(-3.0 * t)));
  else if (shape === 'linear') curve = path(series(t => 0.1 + 0.82 * t));
  else if (shape === 'sigmoid') curve = path(series(t => 0.05 + 0.9 / (1 + Math.exp(-11 * (t - 0.42)))));
  else if (shape === 'peak') curve = path(series(t => 0.06 + 0.9 * Math.exp(-Math.pow((t - 0.5) / 0.11, 2)), 64));
  else if (shape === 'distribution') curve = path(series(t => 0.06 + 0.9 * Math.exp(-Math.pow((t - 0.5) / 0.17, 2)), 64));
  else if (shape === 'pulldown') curve = path(series(t => t < 0.42 ? 0.88 - (t / 0.42) * 0.64 : 0.24));
  else if (shape === 'mapping') {
    const offs = [0.44, 0.5, 0.52, 0.55, 0.48];
    offs.forEach((off, s) => { extra += `<path d="${path(series(t => off + 0.028 * Math.sin(t * 6 + s * 1.3)))}" fill="none" stroke="${A}" stroke-width="1.2" opacity="${(0.45 + 0.11 * s).toFixed(2)}"/>`; });
  }
  else if (shape === 'trend') curve = path(series(t => 0.5 + 0.12 * Math.sin(t * 6.5) + 0.05 * Math.sin(t * 16), 52));
  else if (shape === 'band') {
    const seed = [0.55, 0.47, 0.6, 0.5, 0.57, 0.45, 0.62, 0.52, 0.49, 0.58, 0.53, 0.5];
    seed.forEach((v, i) => { const t = (i + 0.5) / seed.length; extra += `<circle cx="${f1(mx(t))}" cy="${f1(my(v))}" r="2.3" fill="${A}"/>`; });
  }
  else curve = path(series(t => 0.1 + 0.82 * t));

  if (shape === 'band' || shape === 'trend') {
    const hi = my(0.74), lo = my(0.26);
    extra = `<line x1="${x0}" y1="${f1(hi)}" x2="${x1}" y2="${f1(hi)}" stroke="${LIM}" stroke-width="1" stroke-dasharray="4 3"/><line x1="${x0}" y1="${f1(lo)}" x2="${x1}" y2="${f1(lo)}" stroke="${LIM}" stroke-width="1" stroke-dasharray="4 3"/>` + extra;
  }

  let limitEl = '';
  if (chart.limit && typeof chart.limit.y === 'number') {
    const ly = my(chart.limit.y);
    limitEl = `<line x1="${x0}" y1="${f1(ly)}" x2="${x1}" y2="${f1(ly)}" stroke="${LIM}" stroke-width="1" stroke-dasharray="4 3"/>` +
      (chart.limit.label ? `<text x="${x1}" y="${f1(ly - 3)}" text-anchor="end" font-size="8" fill="${LIM}">${TR(chart.limit.label)}</text>` : '');
  }
  let marksEl = '';
  if (Array.isArray(chart.marks)) chart.marks.forEach(m => {
    const xp = mx(m.t);
    marksEl += `<line x1="${f1(xp)}" y1="${y1}" x2="${f1(xp)}" y2="${y0}" stroke="${AX}" stroke-width="0.8" stroke-dasharray="2 3"/><text x="${f1(xp)}" y="${y1 + 8}" text-anchor="middle" font-size="8" fill="${AXT}">${TR(m.label)}</text>`;
  });

  const axes = `<line x1="${x0}" y1="${y1}" x2="${x0}" y2="${y0}" stroke="${AX}" stroke-width="1"/><line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${AX}" stroke-width="1"/>`;
  const cx = ((x0 + x1) / 2), cy = ((y0 + y1) / 2);
  const xlab = chart.x ? `<text x="${f1(cx)}" y="${H - 6}" text-anchor="middle" font-size="9" fill="${AXT}">${TR(chart.x)}</text>` : '';
  const ylab = chart.y ? `<text x="11" y="${f1(cy)}" text-anchor="middle" font-size="9" fill="${AXT}" transform="rotate(-90 11 ${f1(cy)})">${TR(chart.y)}</text>` : '';
  const curveEl = curve ? `<path d="${curve}" fill="none" stroke="${A}" stroke-width="1.7"/>` : '';

  return `<div class="exv-chart"><svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${TR(chart.caption || 'expected data shape')}">${axes}${limitEl}${marksEl}${extra}${curveEl}${xlab}${ylab}</svg>${chart.caption ? `<div class="exv-chartcap">${TR(chart.caption)}</div>` : ''}</div>`;
}

/* NEW step-based authored protocol view: Objective -> Pre-conditions ->
   numbered Procedure -> (optional) Attachment pointer -> Data table -> Acceptance -> Note. */
function buildExecutableSteps(id, phase, i, ov, objective, src) {
  let pre = ov.pre || [];
  if (typeof pre === 'string') {
    if (pre.indexOf(' | ') !== -1) pre = pre.split(' | ');
    else if (/\.\s*,\s*/.test(pre)) pre = pre.split(/\.\s*,\s*/).map((s, idx, arr) => idx < arr.length - 1 ? s + '.' : s);
    else pre = [pre];
    pre = pre.map(s => s.trim()).filter(Boolean);
  }
  const steps = ov.steps || [];
  const attach = ov.attach || '';
  const summary = ov.summary || null;
  const chart = ov.chart || null;
  const accept = ov.accept || execAcceptanceText(src);
  const note = ov.note || '';
  const tableLabel = ov.tableLabel || 'Data table';
  const aj = s => JSON.stringify(s).replace(/'/g, '&#39;');

  const rl = summary && Array.isArray(summary.rowLabels) ? summary.rowLabels : null;
  const nRows = rl ? rl.length : (summary ? (summary.rows || 3) : 0);
  const summaryHead = summary ? summary.cols.map(c => `<th>${TR(c)}</th>`).join('') : '';
  const summaryRows = summary ? Array.from({ length: nRows }).map((_, r) =>
    `<tr>${summary.cols.map((c, ci) => (rl && ci === 0) ? `<td class="exv-rowlabel">${TR(rl[r])}</td>` : '<td class="exv-blank"></td>').join('')}</tr>`).join('') : '';

  const whole = [
    'OBJECTIVE: ' + objective,
    'PHASE: ' + phase + '  (' + (PHASE_LABELS[phase] || '') + ')',
    '',
    'PRE-CONDITIONS:',
    ...pre.map(p => '- ' + p),
    '',
    'PROCEDURE:',
    ...steps.map((st, n) => (n + 1) + '. ' + st),
    ...(attach ? ['', 'ATTACHMENT: ' + attach] : []),
    ...(summary ? ['', tableLabel.toUpperCase() + ':', execSummaryText(summary)] : []),
    ...(chart ? ['', 'EXPECTED DATA SHAPE (' + (chart.x || 'x') + ' vs ' + (chart.y || 'y') + '): ' + (chart.caption || '')] : []),
    ...(ov.refmap ? ['', 'SENSOR PLACEMENT MAP: see the reference diagram in the app (logger/TC layout and minimum counts for this unit type).'] : []),
    '',
    ...(Array.isArray(accept) ? ['ACCEPTANCE CRITERIA:', ...accept.map((a, n) => (n + 1) + '. ' + a)] : ['ACCEPTANCE CRITERION:', accept]),
    ...(note ? ['', 'NOTE: ' + note] : []),
    '',
    'RESULT: Pass / Fail ___    Executed by/date ___    Reviewed by/date ___'
  ].join('\n');

  return `
    <div class="exv exv-authored">
      <div class="exv-row1">
        <span class="exv-tag">${TR('Hand-authored protocol view')}</span>
        <button class="exv-copyall" onclick='execCopy(this, ${aj(whole)})'>${TR('Copy whole test')}</button>
      </div>
      <div class="exv-block">
        <div class="exv-bh">${TR('Objective')}</div>
        <div class="exv-text">${TR(objective)}</div>
      </div>
      <div class="exv-block">
        <div class="exv-bh">${TR('Pre-conditions')}</div>
        <ul class="exv-list">${pre.map(p => `<li>${TR(p)}</li>`).join('')}</ul>
      </div>
      <div class="exv-block">
        <div class="exv-bh-row">
          <span class="exv-bh">${TR('Procedure')}</span>
          <button class="exv-copy" onclick='execCopy(this, ${aj(steps.map((st, n) => (n + 1) + '. ' + st).join('\n'))})'>${TR('Copy steps')}</button>
        </div>
        <ol class="exv-steps">${steps.map(st => `<li>${TR(st)}</li>`).join('')}</ol>
      </div>
      ${attach ? `<div class="exv-block"><div class="exv-bh">${TR('Attachment')}</div><div class="exv-attach">${TR(attach)}</div></div>` : ''}
      ${summary ? `<div class="exv-block">
        <div class="exv-bh-row">
          <span class="exv-bh">${TR(tableLabel)}</span>
          <button class="exv-copy" onclick='execCopy(this, ${aj(execSummaryText(summary))})'>${TR('Copy table')}</button>
        </div>
        <div class="exv-tablewrap"><table class="exv-table"><thead><tr>${summaryHead}</tr></thead><tbody>${summaryRows}</tbody></table></div>
      </div>` : ''}
      ${chart ? `<div class="exv-block"><div class="exv-bh">${TR(chart.title || 'Expected data shape')}</div>${execChartSVG(chart)}</div>` : ''}
      ${ov.refmap ? refMapSectionHTML(id + '_' + phase + '_' + i, ov.refmap) : ''}
      <div class="exv-block">
        <div class="exv-bh-row">
          <span class="exv-bh">${TR(Array.isArray(accept) ? 'Acceptance criteria' : 'Acceptance criterion')}</span>
          <button class="exv-copy" onclick='execCopy(this, ${aj(Array.isArray(accept) ? accept.map((a, n) => (n + 1) + '. ' + a).join('\n') : accept)})'>${TR('Copy')}</button>
        </div>
        ${Array.isArray(accept)
      ? `<ol class="exv-acclist">${accept.map(a => accLi(TR(a))).join('')}</ol>`
      : accDiv(TR(accept))}
      </div>
      ${note ? `<div class="exv-block"><div class="exv-bh">${TR('Field note')}</div><div class="exv-note">${TR(note)}</div></div>` : ''}
      <div class="exv-caveat">${TR('Hand-authored for this test. Steps and acceptance reflect common practice \u2014 confirm exact intervals, limits, and wording against your URS/SOP and paste into your own protocol template before use.')}</div>
    </div>`;
}

function execCopy(btn, text) {
  const done = () => { const o = btn.textContent; btn.textContent = TR('Copied'); btn.classList.add('exv-copied'); setTimeout(() => { btn.textContent = o; btn.classList.remove('exv-copied'); }, 1400); };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done)); }
    else fallbackCopy(text, done);
  } catch (e) { fallbackCopy(text, done); }
}
function fallbackCopy(text, done) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta); done();
  } catch (e) { /* no-op */ }
}

function toggleExec(id, phase, i) {
  const hk = id + '|' + phase + '|' + i;
  const panel = document.getElementById('xp-' + hk);
  const chip = document.getElementById('xc-' + hk);
  if (!panel) return;
  if (!panel.dataset.built) { panel.innerHTML = buildExecutable(id, phase, i); panel.dataset.built = '1'; }
  const open = !panel.hasAttribute('hidden');
  if (open) {
    panel.setAttribute('hidden', '');
    chip.setAttribute('aria-expanded', 'false');
    chip.closest('.test-row').classList.remove('exv-open');
  } else {
    panel.removeAttribute('hidden');
    chip.setAttribute('aria-expanded', 'true');
    chip.closest('.test-row').classList.add('exv-open');
  }
}

/* ---------- SAFETY (page banner + per-test escalation) ---------- */
var SAFETY_WARN_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17.5v.01"/></svg>';

function renderSafetyBanner(id) {
  const el = document.getElementById('safetyBanner');
  if (!el) return;
  const hz = (typeof HAZARD_MAP !== 'undefined' && HAZARD_MAP[id]) || null;
  if (!hz || !hz.length) { el.innerHTML = ''; return; }
  const items = hz.filter(k => HAZARDS[k]).map(k => {
    const hzd = HAZARDS[k];
    return `<div class="sf-item">
      <div class="sf-it-h">${TR(hzd.label)}</div>
      <div class="sf-it-haz">${TR(hzd.hazard)}</div>
      <div class="sf-it-ctl"><span class="sf-ctl-k">${TR('Controls / PPE')}</span> ${TR(hzd.controls)}</div>
    </div>`;
  }).join('');
  const tags = hz.filter(k => HAZARDS[k]).map(k => `<span class="sf-tag">${TR(HAZARDS[k].label)}</span>`).join('');
  el.innerHTML = `
    <details class="sf-card">
      <summary>
        <span class="sf-ico">${SAFETY_WARN_SVG}</span>
        <span class="sf-sum-txt">${TR('Safety considerations')}</span>
        <span class="sf-tags">${tags}</span>
        <span class="sf-tw"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></span>
      </summary>
      <div class="sf-body">
        ${items}
        <div class="sf-caveat">${TR('General hazard awareness only \u2014 not a substitute for the equipment\u2019s safety manual, your site EHS program, LOTO, or task risk assessment. Follow your site SOPs and permits.')}</div>
      </div>
    </details>`;
}

function buildSafetyEsc(id, phase, i) {
  const key = id + '|' + phase + '|' + i;
  const esc = (typeof SAFETY_ESCALATIONS !== 'undefined' && SAFETY_ESCALATIONS[key]) || null;
  if (!esc) return '';
  const tags = (esc.tags || []).filter(k => HAZARDS[k]).map(k => `<span class="sf-tag">${TR(HAZARDS[k].label)}</span>`).join('');
  return `
    <div class="sfx">
      <div class="sfx-h"><span class="sf-ico">${SAFETY_WARN_SVG}</span>${TR('Added hazard for this test')}</div>
      <div class="sfx-txt">${TR(esc.add)}</div>
      ${tags ? `<div class="sfx-tags">${tags}</div>` : ''}
      <div class="sfx-caveat">${TR('Follow your site EHS / SOP / permit \u2014 this is awareness, not authorization.')}</div>
    </div>`;
}

function toggleSafety(id, phase, i) {
  const hk = id + '|' + phase + '|' + i;
  const panel = document.getElementById('sp-' + hk);
  const chip = document.getElementById('sc-' + hk);
  if (!panel) return;
  if (!panel.dataset.built) { panel.innerHTML = buildSafetyEsc(id, phase, i); panel.dataset.built = '1'; }
  const open = !panel.hasAttribute('hidden');
  if (open) {
    panel.setAttribute('hidden', '');
    chip.setAttribute('aria-expanded', 'false');
  } else {
    panel.removeAttribute('hidden');
    chip.setAttribute('aria-expanded', 'true');
  }
}

function openSheet(id, phase, i) {
  const test = DATA[id].phases[phase][i];
  const src = test.s === 'gmp' ? GMP_INFO : test.s;
  const isSiteDefined = src.status === 'flagged' && /^Site-defined|^Site protocol|^Site validation|^Physiological/.test(src.id);
  const statusText = src.status === 'verified' ? 'Verified'
    : src.status === 'corroborated' ? 'Corroborated'
    : src.status === 'regulation' ? 'Regulation (21 CFR)'
    : src.status === 'flagged' ? (isSiteDefined ? 'Site-defined' : 'Confirm before relying')
    : 'Industry Standard GMP';
  let html = `<div class="sheet-grip"></div>
    <span class="sheet-status ${src.status}"><span class="dot"></span>${TR(statusText)}</span>
    <h3>${src.id}</h3>
    <p class="issuer">${TR(src.issuer)}</p>`;

  if (src.status === 'regulation') {
    html += `<div class="reg-note">This check satisfies a requirement of US FDA regulation (21 CFR) and its EU equivalent (EudraLex Vol.4 Annex 15, or Annex 11 for computerised systems). The regulation sets the requirement (the "what"); the specific check here is the standard way to demonstrate it. These are framework rules, not step-by-step, so phrase protocol wording to your own SOP.</div>`;
  }
  if (src.status === 'corroborated') {
    html += `<div class="corrob-note">Industry-supported, not a primary standard. The figure is stated by reputable validation/calibration sources${src.sources ? ' (' + src.sources + ')' : ''} and corroborated across more than one. Use it as a strong working reference; cite the primary standard where one is named.</div>`;
  }
  if (src.status === 'flagged') {
    html += isSiteDefined
      ? `<div class="flag-note">This value is set by your site, not by a published standard. The URS, risk assessment, or equipment data sheet defines the limit; use this as the check to perform, then fill the acceptance from your own documentation.</div>`
      : `<div class="flag-note">Seeded from general knowledge. Confirm the clause number and acceptance figure against the issuing body before citing it in a protocol.</div>`;
  }
  if (src.status === 'gmp') {
    html += `<div class="gmp-note">${TR(src.covers)}</div>`;
  } else {
    html += `<div class="sheet-field"><div class="k">${TR('Covers')}</div><div class="v">${TR(src.covers)}</div></div>`;
    if (src.crit) html += `<div class="sheet-field"><div class="k">${TR('Acceptance criteria')}</div><div class="v crit">${TR(src.crit)}</div></div>`;
    if (src.link) html += `<a class="sheet-link" href="${src.link}" target="_blank" rel="noopener">${TR(src.linkLabel || 'Find the standard')}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg></a>`;
    if (src.eu && src.eu.link) html += `<a class="sheet-link" href="${src.eu.link}" target="_blank" rel="noopener">${TR(src.eu.label || 'EU equivalent')}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg></a>`;
  }
  sheet.innerHTML = html;
  backdrop.classList.add('open');
  requestAnimationFrame(() => sheet.classList.add('open'));
}

function closeSheet() {
  sheet.classList.remove('open');
  backdrop.classList.remove('open');
}

backdrop.addEventListener('click', closeSheet);
document.getElementById('backBtn').addEventListener('click', backToList);
document.getElementById('procBackBtn').addEventListener('click', backFromProcess);
search.addEventListener('input', renderList);
if (domainFilter) domainFilter.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  activeDomain = b.dataset.domain;
  [...domainFilter.children].forEach(c => c.setAttribute('aria-pressed', c === b));
  renderList();
});

renderProcessCards();
renderList();
applyStaticI18n();

/* ---------- version badge (bumped with cache C on each ship) ---------- */
const APP_VERSION = 'v171';
{ const vb = document.getElementById('verBadge'); if (vb) vb.textContent = APP_VERSION; }

/* ---------- OFFLINE: cache self via service worker ---------- */
if ('serviceWorker' in navigator) {
  const swCode = `
    const C = 'cqv-v171';
    self.addEventListener('install', e => { self.skipWaiting(); });
    self.addEventListener('activate', e => { self.clients.claim(); });
    self.addEventListener('fetch', e => {
      if (e.request.method !== 'GET') return;
      e.respondWith(
        caches.open(C).then(cache =>
          cache.match(e.request).then(hit =>
            hit || fetch(e.request).then(res => { cache.put(e.request, res.clone()); return res; })
              .catch(() => hit)
          )
        )
      );
    });`;
  const blob = new Blob([swCode], { type: 'text/javascript' });
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
}
