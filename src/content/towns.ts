export interface TownContent {
  name: string;
  anchor: string;
  paragraphs: string[];
  propertyTypes: string;
}

export const TOWN_CONTENT: TownContent[] = [
  {
    name: "Southampton",
    anchor: "southampton",
    paragraphs: [
      "As Hampshire's largest city and a major international port, Southampton has a diverse building stock spanning centuries of development. The city experienced extensive reconstruction following significant bomb damage during the Second World War, with much of the post-war rebuilding taking place during the peak years of asbestos use in UK construction between the 1950s and 1980s.",
      "The city centre's commercial district, including offices along Above Bar Street, Cumberland Place, and the civic centre area, contains numerous buildings from this era that are known to contain asbestos-containing materials including sprayed coatings, asbestos insulation board, and floor tiles. The expanding waterfront and Ocean Village developments have also required extensive asbestos management as older port buildings are repurposed.",
      "Southampton's residential areas — from Shirley and Portswood to Bitterne and Woolston — include large numbers of council-built and privately developed properties from the 1950s through 1980s. These commonly contain asbestos in textured coatings, soffit boards, garage roofs, and domestic heating systems. The city's ongoing regeneration programmes, including the Itchen Riverside and Woolston developments, continue to uncover asbestos-containing materials in older structures being repurposed.",
    ],
    propertyTypes:
      "Commercial offices, industrial units, port facilities, residential properties, university buildings, NHS hospitals, schools, and retail centres.",
  },
  {
    name: "Portsmouth",
    anchor: "portsmouth",
    paragraphs: [
      "Portsmouth's unique island geography and its historic role as Britain's principal naval base have created a distinctive built environment with a high concentration of military, industrial, and residential properties. Many of the city's buildings date from periods when asbestos was extensively used, and the maritime and defence industries were particularly heavy users of asbestos-containing materials.",
      "The naval dockyard and surrounding defence estates contain some of the most complex asbestos management challenges in Hampshire, with multiple asbestos types present across buildings spanning several decades of construction. Beyond the dockyard, areas such as Fratton, Copnor, and North End contain significant volumes of post-war housing where asbestos materials are commonly encountered during property surveys.",
      "Southsea's Victorian and Edwardian properties present different challenges — while the original construction typically pre-dates asbestos use, many of these buildings were modified, extended, or internally refurbished during the mid-to-late 20th century using asbestos-containing materials. Loft conversions, rear extensions, and bathroom refurbishments in these older properties frequently reveal hidden ACMs that were not part of the original build.",
    ],
    propertyTypes:
      "Ministry of Defence properties, dockyard buildings, residential estates, Victorian conversions, commercial centres, educational facilities, and healthcare buildings.",
  },
  {
    name: "Winchester",
    anchor: "winchester",
    paragraphs: [
      "As Hampshire's historic county city, Winchester presents a unique blend of medieval heritage and modern development. While the city's iconic cathedral and historic centre largely pre-date asbestos use, the 20th-century expansion of Winchester — particularly the development of areas such as Stanmore, Weeke, and Badger Farm — coincided with the peak period of asbestos use in UK construction.",
      "Winchester's educational institutions, including the University of Winchester, Peter Symonds College, and numerous primary and secondary schools, represent a significant area of asbestos management need. Many school buildings across Winchester were constructed or extended during the 1960s and 1970s using system-build methods that commonly incorporated asbestos-containing materials in ceiling tiles, partition walls, and service ducts.",
      "The city's commercial properties, particularly along Winnall Industrial Estate and in the business parks surrounding the M3 corridor, also contain buildings from this era. Hampshire County Council's headquarters in Winchester manages one of the largest public sector asbestos registers in the county, reflecting the scale of ongoing duty-to-manage obligations across the district's non-domestic building stock.",
    ],
    propertyTypes:
      "Listed buildings, schools, university facilities, offices, county council buildings, residential properties, and healthcare facilities.",
  },
  {
    name: "Basingstoke",
    anchor: "basingstoke",
    paragraphs: [
      "Basingstoke underwent a dramatic transformation from a modest market town into a major commercial and residential centre following its designation as a London overspill town in the 1960s. This rapid expansion resulted in the construction of vast quantities of commercial, industrial, and residential buildings during the decades when asbestos use was at its most widespread in the UK construction industry.",
      "The town's major office developments — including Basing View, one of the largest business parks in the south of England — contain numerous buildings from the 1960s through 1990s that require ongoing asbestos management. The Festival Place shopping centre development required extensive asbestos remediation of earlier structures, illustrating the scale of the challenge that Basingstoke's modern expansion has created.",
      "Basingstoke's residential areas, including the large estates at Popley, Brighton Hill, South Ham, and Chineham, were predominantly built during this expansion period. Properties in these areas frequently contain asbestos in textured coatings, floor tiles, soffit boards, and domestic boiler flues. Pre-refurbishment surveys are particularly common in Basingstoke as homeowners update properties originally built to 1960s and 1970s specifications.",
    ],
    propertyTypes:
      "Office parks, retail centres, industrial estates, residential estates, schools, leisure facilities, and healthcare buildings.",
  },
  {
    name: "Andover",
    anchor: "andover",
    paragraphs: [
      "Andover, like Basingstoke, was designated as an expansion town in the 1960s and experienced significant growth in both population and building stock during the following decades. The town's industrial areas, particularly around Walworth Business Park and the Portway Industrial Estate, contain numerous commercial and light industrial buildings constructed using materials that commonly incorporated asbestos.",
      "The town's connection to the military — with the Defence Logistics headquarters nearby at Andover — means there is also a concentration of government and defence-related properties in the area that require specialist asbestos management. Residential areas developed during the expansion period, such as the estates at Millway, Charlton, and Kings Chase, contain typical mid-century housing with associated asbestos materials.",
      "Andover's older town centre properties and the surrounding villages of Weyhill, Enham Alamein, and St Mary Bourne present additional survey needs, particularly where period buildings are being renovated or converted to residential use. The rural nature of the wider Test Valley means agricultural outbuildings with asbestos cement roofing and cladding are also commonly encountered.",
    ],
    propertyTypes:
      "Military establishments, industrial parks, residential estates, schools, community buildings, and commercial premises.",
  },
  {
    name: "Farnborough",
    anchor: "farnborough",
    paragraphs: [
      "Farnborough is internationally recognised as the home of British aviation, hosting the famous Farnborough International Airshow at TAG Farnborough Airport. This aviation heritage has left a legacy of industrial, research, and military buildings that commonly contain asbestos-containing materials from various construction periods spanning the entire 20th century.",
      "The former Royal Aircraft Establishment (RAE), now partially redeveloped as the Farnborough Business Park, contained extensive asbestos across its hangars, laboratories, and administrative buildings. While much remediation has been completed as part of redevelopment, ongoing management and survey work continues across both the business park and adjacent older buildings in the area.",
      "Farnborough's residential areas — including North Farnborough, South Farnborough, and the newer developments around Farnborough Green — contain a mix of Victorian, inter-war, and post-war housing. The post-war properties commonly contain asbestos materials, while older homes may have had asbestos products introduced during 20th-century renovations. The proximity to the M3 has also driven commercial development, with office conversions frequently requiring asbestos assessment.",
    ],
    propertyTypes:
      "Aerospace facilities, industrial units, commercial offices, business parks, residential properties, and Ministry of Defence sites.",
  },
  {
    name: "Aldershot",
    anchor: "aldershot",
    paragraphs: [
      "Known as the home of the British Army since 1854, Aldershot has a unique concentration of military infrastructure alongside civilian residential and commercial properties. The garrison area contains barracks, training facilities, and support buildings spanning over 150 years of construction, with many mid-20th-century military buildings known to contain significant quantities of asbestos-containing materials.",
      "The ongoing regeneration of Aldershot town centre and the Wellesley development — the redevelopment of former Ministry of Defence land — has generated substantial demand for asbestos survey and removal services. Former military buildings being converted or demolished require thorough pre-work assessments and, in many cases, licensed asbestos removal before redevelopment can proceed.",
      "Beyond the military estate, Aldershot's civilian housing — particularly in areas like North Town, the Manor Park area, and the estates off Ash Road — includes substantial numbers of properties built during the mid-20th century when asbestos use was routine. The combination of military regeneration and civilian property improvement means asbestos survey demand in Aldershot remains consistently high.",
    ],
    propertyTypes:
      "Military barracks and facilities, regeneration sites, Victorian residential properties, post-war housing, commercial premises, and public buildings.",
  },
  {
    name: "Eastleigh",
    anchor: "eastleigh",
    paragraphs: [
      "Eastleigh's identity is deeply connected to its railway heritage, with the town having grown around the London and South Western Railway works established in the late 19th century. The industrial legacy of the railway works and associated engineering businesses has left a concentration of older industrial buildings where asbestos was extensively used for insulation, fire protection, and building materials.",
      "The town's position between Southampton and Winchester, combined with proximity to Southampton Airport, has driven ongoing commercial and residential development. Eastleigh Borough Council manages a significant portfolio of public buildings and housing stock that requires active asbestos management. The Pirelli and Fleming Park areas contain commercial properties dating from the 1970s and 1980s that typically contain various ACMs.",
      "Eastleigh's residential areas — including Chandler's Ford, Bishopstoke, and Fair Oak — contain a wide range of housing types from Victorian railway cottages to modern executive homes. Properties built before 2000, particularly those from the 1960s to 1980s, commonly require asbestos assessment before renovation or maintenance work. The borough's mix of social housing, private estates, and period conversions means a broad range of ACM types are encountered across different property categories.",
    ],
    propertyTypes:
      "Railway heritage buildings, industrial units, commercial premises, airport facilities, residential properties, and council housing stock.",
  },
  {
    name: "Fareham",
    anchor: "fareham",
    paragraphs: [
      "Situated at the head of Portsmouth Harbour between the two major cities of Southampton and Portsmouth, Fareham has experienced continuous development throughout the 20th century. The town's strategic location led to significant military and industrial activity, particularly around the former HMS Collingwood and adjacent naval establishments, leaving a legacy of buildings requiring asbestos management.",
      "Fareham's commercial centre, including the shopping areas around West Street and the Fareham Shopping Centre, contains commercial properties predominantly from the 1960s to 1990s construction period. The industrial areas at Segensworth and Newgate Lane also feature buildings from this era. Recent regeneration projects in Fareham town centre have necessitated extensive asbestos survey and remediation work.",
      "The borough's residential stock spans the full range of 20th-century construction, from inter-war semi-detached houses in Cams Hill and Hill Head to post-war estates in Portchester, Stubbington, and Titchfield. Fareham's position as a commuter hub means many older properties are being modernised, driving consistent demand for refurbishment surveys before renovation work begins.",
    ],
    propertyTypes:
      "Naval establishments, residential estates, commercial centres, light industrial units, schools, and healthcare facilities.",
  },
  {
    name: "Havant",
    anchor: "havant",
    paragraphs: [
      "Havant borough includes the town of Havant itself along with Leigh Park — one of the largest social housing estates constructed in post-war Britain. Built primarily in the 1950s and 1960s to accommodate families from Portsmouth's bomb-damaged housing stock, Leigh Park's properties were constructed during the peak period of asbestos use and commonly contain ACMs in their original fabric.",
      "The Havant town centre and surrounding commercial areas, including the Solent Business Park at Whiteley and the industrial estates along New Lane, feature commercial and light industrial buildings from the 1970s and 1980s. These properties typically contain asbestos in roof and wall cladding, ceiling tiles, floor tiles, and fire protection materials.",
      "Havant's coastal areas — including Emsworth, Hayling Island, and Langstone — present additional considerations, with older beachfront properties and former boat-building workshops sometimes containing marine-grade asbestos products. The salt air environment can also accelerate degradation of exterior ACMs such as asbestos cement panels, making regular condition re-assessment particularly important for coastal properties in the borough.",
    ],
    propertyTypes:
      "Council housing estates, commercial developments, industrial parks, coastal properties, schools, and community facilities.",
  },
  {
    name: "Gosport",
    anchor: "gosport",
    paragraphs: [
      "Located on the western shore of Portsmouth Harbour, Gosport has a maritime and naval heritage that has shaped its building stock significantly. The town's connection to the Royal Navy — including the former HMS Sultan, Haslar Hospital, and various defence establishments — means there is a high concentration of institutional and military buildings containing asbestos from multiple construction and refurbishment periods.",
      "The regeneration of Gosport's waterfront, including the redevelopment of former military sites and the ongoing improvements to the town centre, has created significant demand for asbestos survey and remediation services. Properties being converted from military or institutional use to residential or commercial purposes require thorough pre-refurbishment surveys and, in many cases, licensed removal work.",
      "Gosport's residential areas — from Alverstoke and Lee-on-the-Solent to Bridgemary and Rowner — contain typical post-war housing stock with associated asbestos materials. The Rowner regeneration project, which involved demolishing and rebuilding a large post-war estate, highlighted the extent of asbestos present in Gosport's mid-century housing and the importance of thorough pre-demolition assessment.",
    ],
    propertyTypes:
      "Naval establishments, waterfront regeneration sites, residential areas, healthcare facilities, educational buildings, and commercial properties.",
  },
  {
    name: "Fleet",
    anchor: "fleet",
    paragraphs: [
      "Fleet is one of the most prosperous towns in Hampshire, situated in the Hart district and characterised by high-quality residential properties and a thriving local economy. While many of Fleet's newer developments post-date the asbestos era, the town retains a substantial number of properties from the 1960s through 1990s where asbestos materials are commonly present.",
      "Fleet's commercial properties, including offices and retail premises around Fleet Road and the Hart Shopping Centre, as well as businesses in the nearby Ancells Farm and Waterfront business parks, include buildings from construction periods when asbestos use was standard practice. Schools in the Fleet area, including several built during the 1960s and 1970s expansion, also require ongoing asbestos management.",
      "The residential areas of Church Crookham, Elvetham Heath, and the established streets around Fleet Pond contain a range of housing types. Properties being renovated in Fleet frequently require pre-refurbishment asbestos surveys, particularly where extensions, loft conversions, or full interior remodels are planned on homes built during the 1960s to 1990s.",
    ],
    propertyTypes:
      "Residential properties, commercial offices, schools, retail premises, leisure facilities, and business parks.",
  },
  {
    name: "Petersfield",
    anchor: "petersfield",
    paragraphs: [
      "A historic market town on the western edge of the South Downs National Park, Petersfield combines period charm with practical functionality. The town centre features a mix of Georgian, Victorian, and 20th-century commercial buildings, many of which have been internally refurbished over the decades using materials that may include asbestos-containing products.",
      "Petersfield's rural setting means the surrounding area includes agricultural buildings, former farm structures, and rural workshops where asbestos cement roofing and cladding were extensively used during the mid-20th century. Barn conversions and rural property renovations in the Petersfield area almost always require asbestos surveys before work can safely commence.",
      "The town's schools — including Churcher's College, Petersfield School, and The Petersfield School — along with community buildings and the health centre, represent institutional properties that require ongoing asbestos management under the duty to manage regulations. The rural East Hampshire setting also means that isolated properties and former agricultural buildings may not have been previously surveyed, despite dating from construction periods when asbestos use was widespread.",
    ],
    propertyTypes:
      "Historic town centre properties, agricultural buildings, barn conversions, residential developments, schools, and commercial premises.",
  },
  {
    name: "Waterlooville",
    anchor: "waterlooville",
    paragraphs: [
      "Waterlooville has developed from a small crossroads settlement into a significant residential and commercial centre since the mid-20th century. The majority of the town's building stock dates from the 1960s onwards, placing it squarely within the peak period of asbestos use in UK construction. The Wellington Retail Park, Asda superstore, and surrounding commercial properties all date from this era.",
      "The town's residential areas — including Cowplain, Purbrook, Stakes, and the Berewood development — represent multiple phases of post-war housing construction. Older properties in Cowplain and Purbrook from the 1950s and 1960s commonly contain asbestos in textured ceiling coatings, floor tiles, soffit boards, and domestic boiler flue pipes. Even apparently modern properties can contain asbestos if built before 2000.",
      "Waterlooville's position between Portsmouth and the South Downs means it serves as both a commuter town and a local commercial hub. The ongoing modernisation of the town's commercial properties and the conversion of older retail units into mixed-use developments regularly requires asbestos assessment, particularly where building fabric from the original 1960s and 1970s construction is being disturbed for the first time.",
    ],
    propertyTypes:
      "Retail centres, residential estates, light industrial units, schools, healthcare buildings, and commercial offices.",
  },
];
