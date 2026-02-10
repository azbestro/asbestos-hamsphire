export interface ServiceContent {
  metaTitle: string;
  metaDesc: string;
  hero: string;
  intro: string[];
  whoItsFor: { label: string; desc: string }[];
  typicalScenarios: string[];
  features: string[];
  process: { title: string; desc: string }[];
  compliance: string[];
  whyUs: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "asbestos-surveys": {
    metaTitle:
      "Asbestos Surveys Hampshire — Management, Refurbishment & Demolition",
    metaDesc:
      "Professional asbestos surveys in Hampshire by BOHS-qualified surveyors. Management, refurbishment, and demolition surveys compliant with HSG264. Rapid reporting.",
    hero: "Expert Asbestos Surveys Across Hampshire",
    intro: [
      "Our BOHS P402-qualified surveyors deliver comprehensive asbestos surveys across Hampshire, fully compliant with HSG264 guidelines. Whether you need a management survey to meet your duty to manage obligations, or a refurbishment and demolition survey before planned works, we provide accurate identification and clear management recommendations.",
      "We conduct three types of asbestos surveys in accordance with HSG264: management surveys for ongoing duty-to-manage compliance, refurbishment surveys before any planned renovation work, and demolition surveys before a building or structure is due to be demolished. Each survey type is designed to meet specific regulatory requirements and protect building occupants and workers.",
    ],
    whoItsFor: [
      {
        label: "Commercial Property Managers",
        desc: "Duty holders of non-domestic premises have a legal obligation under Regulation 4 of CAR 2012 to manage asbestos. A management survey is the essential first step in meeting this requirement.",
      },
      {
        label: "Homeowners & Landlords",
        desc: "If your property was built before the year 2000 and you are planning any renovation, extension, or maintenance work, a refurbishment survey will identify asbestos before it is inadvertently disturbed.",
      },
      {
        label: "Contractors & Developers",
        desc: "Before starting any refurbishment or demolition project, the client has a duty to commission an appropriate asbestos survey to protect workers and comply with CDM Regulations.",
      },
    ],
    typicalScenarios: [
      "A landlord purchasing a 1970s property portfolio needs management surveys for each building to establish an asbestos register and management plan.",
      "A school in Winchester requires a refurbishment survey before planned classroom renovation works during the summer holiday period.",
      "A commercial developer in Southampton needs demolition surveys across a former industrial site before structural demolition can begin.",
      "A homeowner in Basingstoke discovers textured coating on ceilings during a kitchen renovation and needs urgent sampling to confirm whether asbestos is present.",
    ],
    features: [
      "Management surveys (HSG264 Type 1/2)",
      "Refurbishment surveys before renovation works",
      "Demolition surveys before structural demolition",
      "Bulk sampling with UKAS-accredited analysis",
      "Material assessment and priority scoring",
      "Comprehensive asbestos register production",
      "Management plans with re-inspection schedules",
      "Photographic evidence and location drawings",
    ],
    process: [
      {
        title: "Site Assessment",
        desc: "We evaluate the property type, age, and planned activities to determine the appropriate survey scope.",
      },
      {
        title: "Systematic Inspection",
        desc: "Our surveyor methodically inspects all accessible areas, collecting representative samples of suspected ACMs.",
      },
      {
        title: "Laboratory Analysis",
        desc: "Samples are analysed at a UKAS-accredited laboratory using polarised light microscopy (PLM).",
      },
      {
        title: "Detailed Reporting",
        desc: "You receive a comprehensive report with asbestos register, risk assessments, and management recommendations within 24 hours.",
      },
    ],
    compliance: [
      "All surveys comply with HSG264 — Asbestos: The Survey Guide",
      "Surveyors hold BOHS P402 (Surveying and Sampling Strategies)",
      "Laboratory analysis by UKAS-accredited facilities",
      "Reports meet the requirements of CAR 2012 Regulation 4",
    ],
    whyUs: [
      "BOHS P402/P403/P404 qualified surveyors",
      "Full HSG264 compliance on every survey",
      "UKAS-accredited laboratory analysis",
      "24-hour report turnaround standard",
      "Same-week appointments across Hampshire",
      "Clear, actionable management recommendations",
    ],
    faqs: [
      {
        question: "What is the difference between a management survey and a refurbishment survey?",
        answer:
          "A management survey is designed to locate asbestos-containing materials that could be damaged or disturbed during normal occupancy and routine maintenance. A refurbishment survey is more intrusive and is required before any planned renovation or refurbishment work — it aims to find all ACMs in the area where work will take place, including within the building fabric.",
      },
      {
        question: "How much does an asbestos survey cost in Hampshire?",
        answer:
          "A standard domestic management survey typically costs between £150 and £300 depending on property size. Commercial surveys and refurbishment/demolition surveys are priced based on building complexity and area. We provide free, no-obligation quotes for all survey types across Hampshire.",
      },
      {
        question: "Do I need an asbestos survey for a property built after 2000?",
        answer:
          "Generally no. The UK banned all forms of asbestos by November 1999, so buildings constructed entirely after this date should not contain asbestos. However, if there is any uncertainty about the construction date or if the building has been extended or modified using reclaimed materials, a survey may still be advisable.",
      },
    ],
  },

  "asbestos-removal": {
    metaTitle:
      "Licensed Asbestos Removal Hampshire — HSE Licensed Contractors",
    metaDesc:
      "HSE-licensed asbestos removal in Hampshire. Safe extraction of all asbestos types by trained operatives. Full compliance with HSG248 and the Control of Asbestos Regulations 2012.",
    hero: "Licensed Asbestos Removal in Hampshire",
    intro: [
      "We hold a full HSE licence for the removal of all types of asbestos-containing materials, including high-risk materials such as sprayed coatings (limpet), asbestos insulation board (AIB), and pipe lagging. Our removal operatives are trained, medically certified, and work in strict compliance with HSG248 and the Control of Asbestos Regulations 2012.",
      "Asbestos removal is one of the highest-risk activities in the construction and maintenance industries. We take this responsibility seriously, operating under full HSE licensing with comprehensive plans of work, air monitoring, and four-stage clearance procedures on every licensed removal project across Hampshire.",
    ],
    whoItsFor: [
      {
        label: "Commercial & Industrial Property Owners",
        desc: "Large-scale removal of sprayed coatings, AIB, and insulation from offices, factories, and warehouses — often required before refurbishment, change of use, or sale.",
      },
      {
        label: "Homeowners",
        desc: "Domestic asbestos removal including garage roofs, floor tiles, artex ceilings, soffit boards, and pipe insulation — safely managed from start to finish.",
      },
      {
        label: "Public Sector & Education",
        desc: "Schools, hospitals, council buildings, and government properties requiring scheduled or emergency asbestos removal by licensed contractors.",
      },
    ],
    typicalScenarios: [
      "A Portsmouth office block requires full removal of sprayed asbestos coating from structural steelwork before a major refurbishment programme begins.",
      "A homeowner in Fareham discovers asbestos insulation board behind a bathroom suite and needs licensed removal before a new bathroom can be fitted.",
      "A Hampshire primary school identifies damaged asbestos ceiling tiles during a routine re-inspection and requires emergency enclosure followed by planned licensed removal.",
      "A demolition contractor in Basingstoke needs a licensed subcontractor to remove asbestos pipe lagging from a commercial building prior to structural demolition.",
    ],
    features: [
      "Licensed removal of all asbestos types",
      "Sprayed coating and AIB removal",
      "Pipe lagging and insulation removal",
      "Non-licensed removal works (notifiable and non-notifiable)",
      "Full enclosure construction and decontamination",
      "Air monitoring throughout removal works",
      "Four-stage clearance certification",
      "Full waste tracking and consignment documentation",
    ],
    process: [
      {
        title: "Plan of Work",
        desc: "We produce a detailed plan of work submitted to the HSE 14 days prior to licensed work commencement, as required by regulation.",
      },
      {
        title: "Enclosure & Setup",
        desc: "A full containment enclosure with negative pressure units and decontamination facilities is constructed to prevent fibre release.",
      },
      {
        title: "Safe Removal",
        desc: "Our trained operatives remove ACMs using approved techniques, with continuous air monitoring to ensure safety standards are maintained.",
      },
      {
        title: "Clearance & Certification",
        desc: "Independent four-stage clearance is conducted, and all waste is disposed of at licensed hazardous waste facilities with full documentation.",
      },
    ],
    compliance: [
      "Full HSE asbestos removal licence (reviewed and inspected regularly)",
      "All work complies with HSG248 — Asbestos: The Analysts' Guide",
      "14-day HSE notification for all licensed removal work",
      "Independent four-stage clearance as per HSG248 requirements",
    ],
    whyUs: [
      "Full HSE asbestos removal licence",
      "Trained and medically certified operatives",
      "HSG248 compliant on every project",
      "Independent four-stage clearance procedures",
      "Full Environment Agency waste tracking",
      "Serving all of Hampshire — commercial and domestic",
    ],
    faqs: [
      {
        question:
          "Do I always need a licensed contractor to remove asbestos?",
        answer:
          "Not always. Licensed removal is required for high-risk materials such as sprayed coatings, asbestos insulation board (AIB), and loose-fill insulation. Lower-risk materials like asbestos cement, textured coatings, and some floor tiles may be removed under non-licensed or notifiable non-licensed work categories, but trained personnel and proper controls are still required.",
      },
      {
        question: "What is four-stage clearance?",
        answer:
          "Four-stage clearance is the process used to confirm an area is safe for reoccupation after licensed asbestos removal. It consists of: (1) a preliminary check of the work area, (2) a thorough visual inspection, (3) air monitoring to confirm fibre levels are below the clearance indicator, and (4) a final assessment. This must be carried out by an independent analyst, not the removal contractor.",
      },
      {
        question: "How long before I can reoccupy the area after removal?",
        answer:
          "Reoccupation is only permitted after independent four-stage clearance has been completed and a certificate of reoccupation issued. For small domestic projects, this can sometimes be achieved within the same day. Larger commercial projects may require several days of clearance monitoring depending on the scope of works.",
      },
    ],
  },

  "asbestos-encapsulation": {
    metaTitle:
      "Asbestos Encapsulation Hampshire — Safe In-Situ Management",
    metaDesc:
      "Professional asbestos encapsulation services in Hampshire. Safe management of ACMs in situ where removal is unnecessary. Compliant, cost-effective solutions.",
    hero: "Professional Asbestos Encapsulation Across Hampshire",
    intro: [
      "Asbestos encapsulation is a proven, cost-effective method of managing asbestos-containing materials (ACMs) in situ when the material is in reasonable condition and removal is not necessary or practical. Our trained operatives apply specialist encapsulating products that seal and protect ACMs, preventing fibre release while extending the safe lifespan of the material.",
      "Encapsulation is appropriate for many situations — particularly in commercial buildings, schools, and industrial premises where ACMs are present but undamaged. We assess each situation individually and only recommend encapsulation where it is genuinely the safest and most appropriate management option in accordance with current HSE guidance.",
    ],
    whoItsFor: [
      {
        label: "Schools & Public Buildings",
        desc: "Encapsulation is often the preferred option in occupied buildings where removal would cause excessive disruption, such as schools during term time or hospitals with active wards.",
      },
      {
        label: "Commercial Landlords",
        desc: "For ACMs in reasonable condition in common areas, plant rooms, or ceiling voids, encapsulation can be a cost-effective long-term management solution that avoids the disruption and cost of full removal.",
      },
      {
        label: "Industrial & Warehouse Operators",
        desc: "Large areas of asbestos cement roofing or wall cladding in good condition can often be encapsulated rather than removed, significantly reducing project cost and downtime.",
      },
    ],
    typicalScenarios: [
      "A Hampshire secondary school has asbestos-containing ceiling tiles in good condition. Encapsulation is recommended as part of the management plan to prevent fibre release during normal use, avoiding the need for disruptive removal during term time.",
      "A commercial landlord in Eastleigh has asbestos insulation around heating pipes in a basement plant room. The material is intact and unlikely to be disturbed, making penetrating encapsulation the recommended management approach.",
      "A warehouse in Gosport has large areas of asbestos cement roofing in weathered but intact condition. Bridging encapsulant is applied to the underside to seal the surface and extend the material's safe lifespan.",
    ],
    features: [
      "Penetrating sealants for porous ACMs",
      "Bridging encapsulants for surface protection",
      "Enclosure systems for larger areas",
      "Suitable for ceilings, walls, pipe runs, and ducts",
      "Colour-coded application for future identification",
      "Re-inspection scheduling and ongoing management advice",
      "Compliant with HSE management guidance",
      "Detailed documentation and certification",
    ],
    process: [
      {
        title: "Condition Assessment",
        desc: "We inspect the ACM to confirm encapsulation is the appropriate management approach based on material condition and location.",
      },
      {
        title: "Method Planning",
        desc: "A suitable encapsulation method is selected — penetrating sealant, bridging encapsulant, or enclosure — based on the material type and environment.",
      },
      {
        title: "Controlled Application",
        desc: "Our trained operatives apply the encapsulant under controlled conditions with appropriate PPE and localised containment where needed.",
      },
      {
        title: "Documentation",
        desc: "Full documentation is provided including certification, management recommendations, and a re-inspection schedule.",
      },
    ],
    compliance: [
      "Encapsulation carried out in accordance with HSE guidance",
      "Operatives trained in safe application techniques",
      "Products meet relevant British Standards for encapsulants",
      "Re-inspection schedules set in line with management plan requirements",
    ],
    whyUs: [
      "Expert assessment of suitability before treatment",
      "Multiple encapsulation methods available",
      "Trained operatives with full PPE",
      "Cost-effective alternative to removal where appropriate",
      "Full documentation and certification",
      "Ongoing management advice and re-inspection planning",
    ],
    faqs: [
      {
        question: "Is encapsulation as safe as removal?",
        answer:
          "When carried out correctly on materials in suitable condition, encapsulation is a recognised and accepted management technique that effectively prevents fibre release. The HSE acknowledges encapsulation as a valid management option. However, it is only appropriate when the ACM is in reasonable condition and is not likely to be physically disturbed. Our surveyors assess suitability before recommending encapsulation.",
      },
      {
        question: "How long does encapsulation last?",
        answer:
          "The lifespan of an encapsulation treatment depends on the product used, the environment, and the level of physical disturbance the material may experience. Typically, a well-applied encapsulant can last 10–20 years, but regular re-inspection is essential. We include a re-inspection schedule as part of every encapsulation project.",
      },
      {
        question:
          "Can encapsulated asbestos be removed later if needed?",
        answer:
          "Yes. Encapsulation does not prevent future removal. If circumstances change — for example, if refurbishment or demolition is planned — the encapsulated material can still be removed by a licensed contractor. The encapsulant may actually make future removal easier by reducing fibre release during the process.",
      },
    ],
  },

  "asbestos-sampling": {
    metaTitle:
      "Asbestos Sampling Hampshire — Bulk Samples & Air Monitoring",
    metaDesc:
      "Accurate asbestos sampling across Hampshire by BOHS-qualified professionals. Bulk material sampling and air monitoring to UKAS-accredited standards. Fast results.",
    hero: "Accurate Asbestos Sampling in Hampshire",
    intro: [
      "Asbestos sampling is the essential first step in identifying whether a material contains asbestos fibres. Our BOHS P402-qualified surveyors collect representative bulk samples from suspected asbestos-containing materials and submit them to UKAS-accredited laboratories for polarised light microscopy (PLM) analysis, providing definitive identification.",
      "We offer both standalone sampling services and sampling as part of a full asbestos survey. Whether you need a single sample from a specific material of concern or comprehensive sampling across an entire building, we deliver fast, accurate results with same-day or next-day laboratory turnaround available for urgent projects across Hampshire.",
    ],
    whoItsFor: [
      {
        label: "Homeowners with Specific Concerns",
        desc: "If you have identified a single material you are concerned about — such as a textured ceiling, floor tile, or pipe insulation — a standalone sampling service is a quick and affordable way to get a definitive answer.",
      },
      {
        label: "Contractors Mid-Project",
        desc: "If unexpected material is discovered during renovation or maintenance work, urgent sampling can provide same-day results to determine whether it is asbestos and what action is required.",
      },
      {
        label: "Building Managers & Facilities Teams",
        desc: "Routine sampling may be needed as part of ongoing asbestos management, re-inspections, or to verify the condition of known ACMs in managed buildings.",
      },
    ],
    typicalScenarios: [
      "A homeowner in Andover is preparing to remove a textured coating from their living room ceiling and needs a single sample tested before proceeding with the work.",
      "A plumber working in a Fleet property encounters suspicious pipe insulation and requests urgent sampling to confirm whether asbestos is present before continuing maintenance work.",
      "A facilities manager at a Farnborough office complex needs routine re-sampling of known ACMs as part of their annual asbestos management plan re-inspection.",
      "A demolition contractor in Portsmouth needs comprehensive pre-demolition sampling of a redundant industrial building ahead of a full demolition survey.",
    ],
    features: [
      "Bulk material sampling by BOHS P402 surveyors",
      "UKAS-accredited laboratory analysis (PLM)",
      "Air sampling and fibre counting (BOHS P403/P404)",
      "Background air monitoring",
      "Reassurance air testing post-removal",
      "Leak testing during removal works",
      "Personal exposure monitoring",
      "Rapid turnaround — same-day results available",
    ],
    process: [
      {
        title: "Sample Collection",
        desc: "Our qualified surveyor collects representative bulk samples using safe extraction techniques with appropriate PPE and containment.",
      },
      {
        title: "Chain of Custody",
        desc: "Samples are sealed, labelled, and transported to the laboratory under full chain of custody documentation to ensure integrity.",
      },
      {
        title: "Laboratory Analysis",
        desc: "UKAS-accredited analysts examine samples using polarised light microscopy to identify fibre type and estimate percentage content.",
      },
      {
        title: "Results & Advice",
        desc: "Results are provided with clear interpretation and management advice, typically within 24 hours or same-day for urgent requests.",
      },
    ],
    compliance: [
      "All sampling by BOHS P402 qualified surveyors",
      "Laboratory analysis at UKAS-accredited facilities only",
      "Full chain of custody from site to laboratory",
      "Sampling methods comply with HSG264 requirements",
    ],
    whyUs: [
      "BOHS P402 qualified sampling surveyors",
      "UKAS-accredited laboratory partners",
      "Same-day and next-day results available",
      "Full chain of custody documentation",
      "Combined sampling and survey packages",
      "Covering all Hampshire areas",
    ],
    faqs: [
      {
        question: "How many samples do I need?",
        answer:
          "The number of samples depends on the number of distinct materials you need tested. Each visually different material type in each location should be sampled separately. For a single material of concern, one representative sample is usually sufficient. For a full building survey, the number of samples will depend on the building size and the variety of materials present.",
      },
      {
        question: "Can I collect my own asbestos samples?",
        answer:
          "While it is not illegal for a property owner to collect their own samples, we strongly advise against it. Disturbing asbestos-containing materials without proper training, RPE, and containment can release dangerous fibres into the air. Our qualified surveyors use safe extraction techniques that minimise fibre release and ensure representative samples are collected.",
      },
      {
        question:
          "What happens if my sample tests positive for asbestos?",
        answer:
          "If a sample confirms asbestos, we provide clear management advice based on the fibre type, material condition, and location. Options may include leaving the material in situ with a management plan, encapsulation, or removal. We can carry out any subsequent work required, providing a complete service from identification through to resolution.",
      },
    ],
  },

  "asbestos-testing": {
    metaTitle:
      "Asbestos Testing Hampshire — UKAS Accredited Laboratory Analysis",
    metaDesc:
      "UKAS-accredited asbestos testing in Hampshire. Laboratory analysis of bulk samples and air monitoring with rapid turnaround. Definitive identification of all asbestos fibre types.",
    hero: "UKAS-Accredited Asbestos Testing in Hampshire",
    intro: [
      "Asbestos testing provides definitive identification of whether a material contains asbestos and, if so, which type of asbestos fibre is present. We work with UKAS-accredited laboratories that use polarised light microscopy (PLM) and, where required, more advanced techniques such as transmission electron microscopy (TEM) to provide accurate, reliable results.",
      "Understanding which type of asbestos is present — chrysotile (white), amosite (brown), or crocidolite (blue) — is critical because different fibre types carry different risk levels and may require different management or removal approaches. Our testing service provides the clarity you need to make informed decisions about the asbestos in your Hampshire property.",
    ],
    whoItsFor: [
      {
        label: "Property Owners Seeking Clarity",
        desc: "If you suspect a material may contain asbestos, laboratory testing is the only way to get a definitive answer. Visual identification alone is never sufficient to confirm or rule out asbestos.",
      },
      {
        label: "Asbestos Consultants & Surveyors",
        desc: "We accept samples from third-party surveyors and consultants who require UKAS-accredited analysis. We provide full chain of custody and formal test certificates.",
      },
      {
        label: "Removal Contractors",
        desc: "Air monitoring and clearance testing during and after asbestos removal work to confirm fibre levels are within safe limits for reoccupation.",
      },
    ],
    typicalScenarios: [
      "A homeowner in Petersfield has removed a section of floor tile and wants to confirm whether the tile and underlying adhesive contain asbestos before disposing of the material.",
      "An asbestos surveyor working in Winchester submits multiple bulk samples from a commercial property survey and requires standard 24-hour UKAS-accredited analysis.",
      "A licensed removal contractor in Southampton requires air monitoring and four-stage clearance testing during and after a sprayed coating removal project.",
      "A concerned tenant in Havant requests independent testing of a damaged textured ceiling coating in their rented flat to determine whether it contains asbestos.",
    ],
    features: [
      "Polarised light microscopy (PLM) analysis",
      "Fibre type identification (chrysotile, amosite, crocidolite)",
      "Percentage fibre content estimation",
      "Transmission electron microscopy (TEM) for complex samples",
      "Air sample analysis and fibre counting",
      "UKAS-accredited laboratory certificates",
      "Rapid turnaround — standard 24hr, urgent same-day",
      "Clear reporting with management recommendations",
    ],
    process: [
      {
        title: "Sample Receipt",
        desc: "Samples collected by our surveyors or received from third parties are logged and processed under full chain of custody protocols.",
      },
      {
        title: "PLM Analysis",
        desc: "Trained analysts examine samples using polarised light microscopy to identify asbestos fibre types and estimate content.",
      },
      {
        title: "Quality Assurance",
        desc: "All results undergo internal quality checks in accordance with the laboratory UKAS accreditation requirements.",
      },
      {
        title: "Certificate Issue",
        desc: "A formal UKAS-accredited test certificate is issued with clear results, fibre type identification, and percentage content.",
      },
    ],
    compliance: [
      "All analysis at UKAS-accredited laboratories",
      "Analysts qualified to BOHS P403 and P404 standards",
      "Quality management in accordance with ISO 17025",
      "Participation in inter-laboratory proficiency testing schemes",
    ],
    whyUs: [
      "UKAS-accredited laboratory analysis",
      "All asbestos fibre types identified",
      "Standard 24-hour turnaround",
      "Same-day urgent service available",
      "Clear, easy-to-understand certificates",
      "Integrated with our survey and sampling services",
    ],
    faqs: [
      {
        question:
          "What is the difference between PLM and TEM analysis?",
        answer:
          "Polarised light microscopy (PLM) is the standard method for identifying asbestos in bulk samples — it is fast, reliable, and sufficient for most situations. Transmission electron microscopy (TEM) is a more advanced and expensive technique used when PLM results are inconclusive, when very low concentrations need to be detected, or when samples have been processed in a way that makes PLM identification difficult.",
      },
      {
        question: "Are your laboratory results legally valid?",
        answer:
          "Yes. Our laboratory analysis is carried out at UKAS-accredited facilities operating under ISO 17025 quality management. UKAS accreditation is the UK standard for testing laboratory competence and is recognised by regulators including the HSE and Environment Agency. Results are issued with formal UKAS-accredited test certificates.",
      },
      {
        question: "Can you test soil or debris for asbestos?",
        answer:
          "Yes. We can analyse soil, rubble, and demolition debris for asbestos content. This is particularly relevant for contaminated land assessments, brownfield site investigations, and situations where asbestos-containing materials may have been illegally dumped or mixed with general waste. Quantitative analysis can determine the percentage of asbestos in soil or aggregate samples.",
      },
    ],
  },

  "asbestos-disposal": {
    metaTitle:
      "Asbestos Disposal Hampshire — Licensed Hazardous Waste Removal",
    metaDesc:
      "Environment Agency licensed asbestos disposal in Hampshire. Safe collection, transport, and disposal of asbestos waste at approved hazardous waste facilities. Full tracking documentation.",
    hero: "Licensed Asbestos Waste Disposal in Hampshire",
    intro: [
      "All asbestos waste is classified as hazardous waste under UK law and must be disposed of at licensed hazardous waste facilities in accordance with Environment Agency regulations. We hold full upper-tier waste carrier licensing and hazardous waste producer registration, ensuring that every kilogram of asbestos waste we handle is tracked, documented, and disposed of legally and safely.",
      "From domestic properties with small amounts of asbestos-containing materials to large commercial sites generating significant volumes of hazardous waste, we manage the entire disposal process. All waste is double-bagged in UN-approved packaging, sealed in locked containers, and transported directly to approved hazardous waste landfill facilities with full consignment note documentation.",
    ],
    whoItsFor: [
      {
        label: "Homeowners After DIY Discovery",
        desc: "If you have inadvertently disturbed or removed a small amount of asbestos, we can safely package, collect, and dispose of it at a licensed facility with full documentation.",
      },
      {
        label: "Removal Contractors",
        desc: "We provide waste collection and disposal services for asbestos removal contractors who require licensed transport and disposal at approved hazardous waste facilities.",
      },
      {
        label: "Commercial & Industrial Sites",
        desc: "For larger volumes of asbestos waste from commercial removal or demolition projects, we manage the entire waste stream including skip provision, transport, and disposal.",
      },
    ],
    typicalScenarios: [
      "A homeowner in Waterlooville has carefully removed a small number of asbestos cement garage roof sheets and needs them collected and disposed of at a licensed facility.",
      "A licensed removal contractor in Southampton generates several tonnes of bagged asbestos waste from a commercial project and requires licensed transport to a hazardous waste facility.",
      "A demolition company in Aldershot needs a waste management partner to handle all asbestos waste streams from a large demolition project, including provision of sealed skips and full consignment tracking.",
      "A landlord in Winchester discovers fly-tipped asbestos cement on their land and needs it safely packaged, collected, and disposed of with all required Environment Agency documentation.",
    ],
    features: [
      "Environment Agency upper-tier waste carrier licence",
      "Hazardous waste producer registration",
      "UN-approved packaging and double-bagging",
      "Sealed, locked container transport",
      "Direct delivery to licensed hazardous waste facilities",
      "Full consignment note documentation",
      "Waste transfer notes provided",
      "Duty of care compliance at every stage",
    ],
    process: [
      {
        title: "Waste Assessment",
        desc: "We assess the type and volume of asbestos waste to determine the appropriate packaging, transport, and disposal requirements.",
      },
      {
        title: "Safe Packaging",
        desc: "Asbestos waste is double-bagged in UN-approved bags, labelled in accordance with regulations, and placed in sealed containers.",
      },
      {
        title: "Licensed Transport",
        desc: "Our licensed vehicles transport the waste directly to an approved hazardous waste facility with all required documentation.",
      },
      {
        title: "Documentation",
        desc: "You receive copies of all consignment notes, waste transfer notes, and disposal certificates for your compliance records.",
      },
    ],
    compliance: [
      "Full Environment Agency upper-tier waste carrier registration",
      "Hazardous waste producer registration maintained",
      "Disposal at Environment Agency permitted facilities only",
      "Full duty of care under the Environmental Protection Act 1990",
    ],
    whyUs: [
      "Full Environment Agency waste carrier licence",
      "Hazardous waste producer registration",
      "Complete consignment tracking",
      "Approved hazardous waste facilities only",
      "Full duty of care documentation",
      "Domestic and commercial disposal across Hampshire",
    ],
    faqs: [
      {
        question: "Can I take asbestos waste to the tip myself?",
        answer:
          "Some local household waste recycling centres in Hampshire accept small quantities of domestic asbestos waste (typically asbestos cement only), but rules vary by location and you must contact them in advance. For anything beyond small domestic quantities, or for non-cement asbestos types, you must use a licensed waste carrier. We can handle any quantity and type of asbestos waste.",
      },
      {
        question: "What documentation will I receive after disposal?",
        answer:
          "You will receive a hazardous waste consignment note (required by law for all hazardous waste movements), a waste transfer note confirming the duty of care chain, and a disposal certificate confirming the waste has been received at a licensed facility. These documents should be retained for a minimum of three years.",
      },
      {
        question: "Is it illegal to put asbestos in normal waste?",
        answer:
          "Yes. Disposing of asbestos waste in general household or commercial waste is illegal under the Environmental Protection Act 1990 and the Hazardous Waste Regulations. It is a criminal offence that can result in significant fines and prosecution. All asbestos waste must be disposed of at licensed hazardous waste facilities.",
      },
    ],
  },
};
