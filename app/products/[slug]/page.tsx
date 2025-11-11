import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// const products = [
//   {
//     name: "Bellow Seal Gate Valve",
//     slug: "bellow-seal-gate-valve",
//     image: "/blue-industrial-bellow-seal-gate-valve.jpg",
//     description:
//       "Bellow Seal Gate Valve is designed to provide leak-proof sealing and is suitable for high-temperature applications.",
//     category: "Gate Valves",
//     type: "valve",
//     specifications: {
//       "Pressure Rating": "150 LB to 2500 LB",
//       "Size Range": '1/2" to 24"',
//       "Temperature Range": "-29°C to 538°C",
//       "End Connections": "Flanged, Threaded, Socket Weld, Butt Weld",
//       Materials: "Carbon Steel, Stainless Steel, Alloy Steel",
//       Standards: "API 600, ASME B16.34, BS 1414",
//     },
//     features: [
//       "Zero leakage through stem",
//       "Suitable for high temperature applications",
//       "Maintenance-free operation",
//       "Excellent sealing performance",
//       "Corrosion resistant materials",
//     ],
//     applications: [
//       "Power Generation",
//       "Petrochemical Industry",
//       "Oil & Gas",
//       "Chemical Processing",
//       "Steam Service",
//     ],
//   },
//   {
//     name: "Bronze Gate Valve",
//     slug: "bronze-gate-valve",
//     image: "/bronze-gate-valve-industrial.jpg",
//     description:
//       "Bronze Gate Valve offers excellent corrosion resistance and is ideal for marine and industrial applications.",
//     category: "Gate Valves",
//     type: "valve",
//     specifications: {
//       "Pressure Rating": "125 LB to 300 LB",
//       "Size Range": '1/2" to 8"',
//       "Temperature Range": "-18°C to 232°C",
//       "End Connections": "Threaded, Flanged",
//       Materials: "Bronze, Brass",
//       Standards: "ASME B16.34, MSS SP-80",
//     },
//     features: [
//       "Excellent corrosion resistance",
//       "Suitable for seawater applications",
//       "Non-magnetic properties",
//       "Easy maintenance",
//       "Long service life",
//     ],
//     applications: [
//       "Marine Industry",
//       "Water Treatment",
//       "HVAC Systems",
//       "Plumbing",
//       "Fire Protection",
//     ],
//   },
//   {
//     name: "Cast Iron Gate Valve",
//     slug: "cast-iron-gate-valve",
//     image: "/blue-cast-iron-gate-valve.jpg",
//     description:
//       "Cast Iron Gate Valve provides reliable shut-off service for water, oil, gas, and other non-corrosive fluids.",
//     category: "Gate Valves",
//     type: "valve",
//     specifications: {
//       "Pressure Rating": "125 LB to 250 LB",
//       "Size Range": '2" to 48"',
//       "Temperature Range": "-29°C to 200°C",
//       "End Connections": "Flanged",
//       Materials: "Cast Iron, Ductile Iron",
//       Standards: "AWWA C515, BS 5163",
//     },
//     features: [
//       "Cost-effective solution",
//       "Suitable for water applications",
//       "Robust construction",
//       "Easy operation",
//       "Low maintenance",
//     ],
//     applications: [
//       "Water Distribution",
//       "Sewage Treatment",
//       "Municipal Systems",
//       "Industrial Water",
//       "Fire Fighting",
//     ],
//   },
//   // Pipes
//   {
//     name: "Stainless Steel Pipes",
//     slug: "stainless-steel-pipes",
//     image: "/stainless-steel-pipes.jpg",
//     description:
//       "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries with excellent corrosion resistance.",
//     category: "Stainless Steel",
//     type: "pipe",
//     specifications: {
//       Grade: "304, 316, 321, 347",
//       "Size Range": '1/8" to 48"',
//       "Wall Thickness": "SCH 5S to SCH XXS",
//       Length: "Single Random, Double Random, Cut Length",
//       "End Finish": "Plain End, Beveled End",
//       Standards: "ASTM A312, ASME B36.19M",
//     },
//     features: [
//       "Excellent corrosion resistance",
//       "High temperature resistance",
//       "Hygienic and clean",
//       "Low maintenance",
//       "Recyclable material",
//     ],
//     applications: [
//       "Chemical Processing",
//       "Pharmaceutical",
//       "Food & Beverage",
//       "Oil & Gas",
//       "Power Generation",
//     ],
//   },
//   {
//     name: "Carbon Steel Pipes",
//     slug: "carbon-steel-pipes",
//     image: "/carbon-steel-pipes.jpg",
//     description:
//       "Durable carbon steel pipes designed for high-pressure applications in oil and gas industries.",
//     category: "Carbon Steel",
//     type: "pipe",
//     specifications: {
//       Grade: "A106 Gr.B, API 5L Gr.B, A53 Gr.B",
//       "Size Range": '1/8" to 48"',
//       "Wall Thickness": "SCH 40 to SCH XXS",
//       Length: "Single Random, Double Random",
//       "End Finish": "Plain End, Beveled End",
//       Standards: "ASTM A106, API 5L, ASME B36.10M",
//     },
//     features: [
//       "High strength and durability",
//       "Cost-effective solution",
//       "Wide temperature range",
//       "Easy welding and fabrication",
//       "Reliable performance",
//     ],
//     applications: [
//       "Oil & Gas",
//       "Power Plants",
//       "Refineries",
//       "Petrochemical",
//       "Industrial Piping",
//     ],
//   },
//   {
//     name: "Alloy Steel Pipes",
//     slug: "alloy-steel-pipes",
//     image: "/alloy-steel-pipes.jpg",
//     description:
//       "Premium alloy steel pipes engineered for extreme temperature and pressure conditions.",
//     category: "Alloy Steel",
//     type: "pipe",
//     specifications: {
//       Grade: "P5, P9, P11, P22, P91",
//       "Size Range": '1/2" to 24"',
//       "Wall Thickness": "SCH 40 to SCH XXS",
//       Length: "Single Random, Double Random",
//       "End Finish": "Plain End, Beveled End",
//       Standards: "ASTM A335, ASME B36.10M",
//     },
//     features: [
//       "High temperature resistance",
//       "Superior mechanical properties",
//       "Excellent creep resistance",
//       "Enhanced durability",
//       "Precision manufacturing",
//     ],
//     applications: [
//       "Power Generation",
//       "Petrochemical",
//       "High Temperature Service",
//       "Boiler Applications",
//       "Heat Exchangers",
//     ],
//   },
//   // Motors
//   {
//     name: "Electric Actuator Motors",
//     slug: "electric-actuator-motors",
//     image: "/electric-actuator-motors.jpg",
//     description:
//       "High-performance electric actuator motors for precise valve control and automation systems.",
//     category: "Electric Motors",
//     type: "motor",
//     specifications: {
//       "Power Range": "0.5 HP to 50 HP",
//       Voltage: "110V, 220V, 380V, 440V",
//       "Torque Range": "50 Nm to 5000 Nm",
//       Speed: "Variable Speed Control",
//       Protection: "IP65, IP67",
//       Standards: "IEC 60034, NEMA MG-1",
//     },
//     features: [
//       "Precise positioning control",
//       "Variable speed operation",
//       "Remote control capability",
//       "Low maintenance",
//       "Energy efficient",
//     ],
//     applications: [
//       "Valve Automation",
//       "Process Control",
//       "Water Treatment",
//       "HVAC Systems",
//       "Industrial Automation",
//     ],
//   },
//   {
//     name: "Pneumatic Motors",
//     slug: "pneumatic-motors",
//     image: "/pneumatic-motors.jpg",
//     description:
//       "Reliable pneumatic motors designed for industrial automation and valve operation applications.",
//     category: "Pneumatic Motors",
//     type: "motor",
//     specifications: {
//       "Air Pressure": "2 to 10 bar",
//       "Torque Range": "100 Nm to 8000 Nm",
//       "Operating Temperature": "-20°C to +80°C",
//       "Air Consumption": "Optimized for efficiency",
//       Protection: "IP65, IP67",
//       Standards: "ISO 5211, VDI/VDE 3845",
//     },
//     features: [
//       "Explosion-proof operation",
//       "Fast response time",
//       "High reliability",
//       "Fail-safe operation",
//       "Maintenance-free",
//     ],
//     applications: [
//       "Hazardous Areas",
//       "Emergency Shutdown",
//       "Process Automation",
//       "Oil & Gas",
//       "Chemical Plants",
//     ],
//   },
//   {
//     name: "Hydraulic Motors",
//     slug: "hydraulic-motors",
//     image: "/hydraulic-motors.jpg",
//     description:
//       "Heavy-duty hydraulic motors suitable for high-torque applications and extreme operating conditions.",
//     category: "Hydraulic Motors",
//     type: "motor",
//     specifications: {
//       "Pressure Range": "50 to 350 bar",
//       "Torque Range": "500 Nm to 50000 Nm",
//       "Flow Rate": "10 to 1000 L/min",
//       "Operating Temperature": "-40°C to +120°C",
//       Fluid: "Hydraulic Oil ISO VG 32-68",
//       Standards: "ISO 4401, SAE J518",
//     },
//     features: [
//       "High torque output",
//       "Compact design",
//       "Smooth operation",
//       "Long service life",
//       "Precise control",
//     ],
//     applications: [
//       "Heavy Industry",
//       "Marine Applications",
//       "Mining Equipment",
//       "Steel Mills",
//       "Large Valve Operation",
//     ],
//   },
// ];
//
const products = [
  {
    name: "Bellow Seal Gate Valve",
    slug: "bellow-seal-gate-valve",
    image: "/Bellow Seal Gate Valve.jpg",
    description:
      "Bellow Seal Gate Valve is designed to provide leak-proof sealing and is suitable for high-temperature applications.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "150 LB to 2500 LB",
      "Size Range": '1/2" to 24"',
      "Temperature Range": "-29°C to 538°C",
      "End Connections": "Flanged, Threaded, Socket Weld, Butt Weld",
      Materials: "Carbon Steel, Stainless Steel, Alloy Steel",
      Standards: "API 600, ASME B16.34, BS 1414",
    },
    features: [
      "Zero leakage through stem",
      "Suitable for high temperature applications",
      "Maintenance-free operation",
      "Excellent sealing performance",
      "Corrosion resistant materials",
    ],
    applications: [
      "Power Generation",
      "Petrochemical Industry",
      "Oil & Gas",
      "Chemical Processing",
      "Steam Service",
    ],
  },

  {
    name: "Bronze Gate Valve",
    slug: "bronze-gate-valve",
    image: "/Bronze Gate Valve.jpg",
    description:
      "Bronze Gate Valve offers excellent corrosion resistance and is ideal for marine and industrial applications.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 125 to Class 250 (typical bronze ratings)",
      "Size Range": '1/2" to 8"',
      "Temperature Range": "-18°C to 232°C",
      "End Connections": "Threaded, Flanged (where applicable)",
      Materials: "Bronze, Brass, Stainless Steel trim",
      Standards: "ASME B16.34, MSS SP-80 (materials & trim guidance)",
    },
    features: [
      "Excellent corrosion resistance in seawater and potable water",
      "Non-magnetic options available",
      "Compact and economical for small sizes",
      "Easy operation and maintenance",
      "Good sealing for low-to-medium pressure services",
    ],
    applications: [
      "Marine and shipboard systems",
      "Potable water distribution",
      "HVAC and plumbing",
      "Light industrial services",
      "Fire protection (small services)",
    ],
  },

  {
    name: "Ductile Iron Globe Valve",
    slug: "ductile-iron-globe-valve",
    image: "/Ductile Iron Globe Valve.jpg",
    description:
      "Ductile Iron Globe Valve offers superior strength and is suitable for water and steam applications.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Class 150 to Class 300 (typical for ductile iron flanged globe)",
      "Size Range": '1/2" to 24" (common)',
      "Temperature Range": "-10°C to 200°C (depends on seat/packing)",
      "End Connections": "Flanged (ASME B16.5), Butt-weld",
      Materials: "Ductile Iron body, Stainless steel or bronze trim",
      Standards:
        "ASME B16.10, ASME B16.34 (where metallic ratings apply), MSS SP-25",
    },
    features: [
      "Good throttling control",
      "Robust ductile iron body for strength",
      "Replaceable seats and trim",
      "Rising or non-rising stem options",
      "Packing/external sealing options for reduced leakage",
    ],
    applications: [
      "Municipal water and distribution",
      "Steam distribution (depending on trim)",
      "Industrial process control",
      "HVAC systems",
      "Boiler feed applications (with appropriate trim)",
    ],
  },

  {
    name: "Cast Steel Gate Valve",
    slug: "cast-steel-gate-valve",
    image: "/Cast Steel Gate Valve.jpg",
    description:
      "Cast Steel Gate Valve is suitable for high-pressure and high-temperature applications in various industries.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Class 150 to Class 1500 (depending on material & class)",
      "Size Range": '1/2" to 48" (project dependent)',
      "Temperature Range": "-29°C to 427°C (depends on material and packing)",
      "End Connections": "Flanged (ASME B16.5), Butt-weld (ASME B16.25)",
      Materials: "Carbon steel (ASTM A216 WCB), stainless steel trim options",
      Standards: "API 600 (where applicable), ASME B16.34",
    },
    features: [
      "High strength for pressure service",
      "Rising or non-rising stem options",
      "Bolted bonnet and pressure-containing design",
      "Metal or resilient seating options",
      "Fire-safe design options available",
    ],
    applications: [
      "Oil & gas upstream and downstream",
      "Power generation",
      "Petrochemical plants",
      "High pressure steam lines",
      "Industrial process services",
    ],
  },

  {
    name: "OS Gate Valve",
    slug: "os-gate-valve",
    image: "/OS Gate Valve.jpg",
    description:
      "OS Gate Valve with Outside Screw & Yoke (OS&Y) design — provides easy maintenance and visual valve position indication.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 125 to Class 600 (typical for OS&Y designs)",
      "Size Range": '1/2" to 36"',
      "Temperature Range": "-29°C to 400°C (material dependent)",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel or stainless steel body, stainless stem",
      Standards: "ASME B16.34, API 600 (gate valves)",
    },
    features: [
      "Outside screw & yoke gives visible stem travel",
      "Easy lubrication and maintenance",
      "Good shut-off capability",
      "Rising stem provides position indication",
      "Fire-safe and packing gland options",
    ],
    applications: [
      "Utilities and power plants",
      "Process industry isolation",
      "Steam and high-temperature services",
      "Pipeline isolation",
      "Emergency shut-off systems",
    ],
  },

  {
    name: "Forged Steel Gate Valve",
    slug: "forged-steel-gate-valve",
    image: "/Forged Steel Gate Valve.jpg",
    description:
      "Forged Steel Gate Valve is designed for use in high-pressure applications and offers superior strength.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Class 150 to Class 2500 (typical forged-steel classes)",
      "Size Range": '1/2" to 24" (common forged sizes)',
      "Temperature Range": "-46°C to 550°C (material and trim dependent)",
      "End Connections": "Flanged, Butt-weld, Threaded (small sizes)",
      Materials: "Forged carbon steel, alloy steel, stainless steel options",
      Standards: "API 600, ASME B16.34",
    },
    features: [
      "High mechanical strength (forged body)",
      "Suitable for severe service",
      "Full bore design options",
      "Replaceable trim and seats",
      "Suitable for flange or welded integration",
    ],
    applications: [
      "High-pressure hydrocarbon services",
      "Refineries and petrochemical plants",
      "High-temperature steam lines",
      "Critical isolation on pipelines",
      "Offshore platforms (with appropriate materials)",
    ],
  },

  {
    name: "Manual Knife Gate Valve",
    slug: "manual-knife-gate-valve",
    image: "/Manual Knife Gate Valve.jpg",
    description:
      "Manual Knife Gate Valve is ideal for applications with thick fluids, slurries, and powders.",
    category: "Knife Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Low to Medium — typically up to 10 bar (150 psi) for slurry designs",
      "Size Range": '2" to 48" (common for slurry service)',
      "Temperature Range": "-20°C to 200°C (depends on elastomer sleeve)",
      "End Connections": "Wafer, Lug, Flanged",
      Materials:
        "Ductile iron or stainless steel body, stainless gate, elastomer seat/sleeve",
      Standards: "MSS/SP guidance; manufacturer datasheets (varies by design)",
    },
    features: [
      "Full-bore design for solids-containing fluids",
      "Sharp knife edge to cut through solids and deposits",
      "Simple manual gearbox or handwheel operation",
      "Replaceable sleeve or seat",
      "Low-pressure sealing for slurry isolation",
    ],
    applications: [
      "Pulp & paper industry",
      "Mining and slurry pipelines",
      "Wastewater treatment",
      "Chemical slurries and solids handling",
      "Power plant ash handling",
    ],
  },

  {
    name: "Parallel Slide Gate Valve",
    slug: "parallel-slide-gate-valve",
    image: "/Parallel Slide Gate Valve.jpg",
    description:
      "Parallel Slide Gate Valve is suitable for bi-directional flow control and provides tight shut-off.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600 (typical)",
      "Size Range": '2" to 36"',
      "Temperature Range": "-29°C to 400°C (material dependent)",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel, stainless steel, alloy trims",
      Standards: "ASME B16.34, API/Manufacturer datasheets",
    },
    features: [
      "Parallel seating surfaces for tight shutoff",
      "Bi-directional sealing",
      "Resilient or metal seat options",
      "Low operating torque compared to wedge gate",
      "Replaceable seat inserts",
    ],
    applications: [
      "Refinery and petrochemical isolation",
      "Pulp & paper",
      "Power generation",
      "High temperature and high pressure pipelines",
      "General process isolation",
    ],
  },

  {
    name: "Pneumatic Knife Gate Valve",
    slug: "pneumatic-knife-gate-valve",
    image: "/Pneumatic Knife Gate Valve.jpg",
    description:
      "Pneumatic Knife Gate Valve offers automated operation and is suitable for remote control applications.",
    category: "Knife Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Low to Medium (typical up to 10 bar / 150 psi)",
      "Size Range": '2" to 48"',
      "Temperature Range": "-20°C to 200°C (depends on elastomer selection)",
      "End Connections": "Wafer, Lug, Flanged",
      Materials: "Cast/ductile iron body, stainless gate, elastomer seats",
      Standards:
        "Pneumatic actuator standards (ISO/VDMA), manufacturer datasheets",
    },
    features: [
      "Pneumatic actuator for automated open/close",
      "Fast cycling for process control",
      "Suitable for remote operation/integration",
      "Positioner and limit switch options",
      "Elastomer sealing for reliable shut-off",
    ],
    applications: [
      "Automated slurry handling lines",
      "Cement, mining, and bulk solids",
      "Wastewater and sludge systems",
      "Process plants requiring remote isolation",
    ],
  },

  {
    name: "Rising Stem Gate Valve",
    slug: "rising-stem-gate-valve",
    image: "/Rising Stem Gate Valve.jpg",
    description:
      "Rising Stem Gate Valve provides visual indication of valve position and is suitable for various applications.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 125 to Class 1500 (depending on design)",
      "Size Range": '1/2" to 48"',
      "Temperature Range": "-29°C to 427°C",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel, stainless steel trim options",
      Standards: "ASME B16.34, API 600",
    },
    features: [
      "Rising stem clearly shows valve position",
      "OS&Y variants provide external screw visibility",
      "Good for frequent operation",
      "Packing gland accessible for maintenance",
      "Robust shut-off capabilities",
    ],
    applications: [
      "Waterworks and utilities",
      "Pipelines requiring visible position indication",
      "Process plants",
      "Fire mains and hydrant valves",
      "Steam systems (with appropriate trim)",
    ],
  },

  {
    name: "Through Conduit Gate Valve",
    slug: "through-conduit-gate-valve",
    image: "/Through Conduit Gate Valve.jpg",
    description:
      "Through Conduit Gate Valve allows full bore flow and is suitable for pipeline applications.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600",
      "Size Range": '2" to 48" (common line sizes)',
      "Temperature Range": "-29°C to 427°C (material dependent)",
      "End Connections": "Flanged, Buttweld",
      Materials: "Carbon steel, stainless steel",
      Standards: "API 600, ASME B16.34",
    },
    features: [
      "Full bore (through conduit) for pigging and full flow",
      "Minimal pressure drop when open",
      "Bi-directional sealing",
      "Robust for pipeline service",
      "Replaceable seat assemblies",
    ],
    applications: [
      "Oil & gas pipelines (piggable lines)",
      "Water transmission mains",
      "Process pipelines requiring full bore",
      "Large-diameter flow control",
      "Marine pipeline systems",
    ],
  },

  {
    name: "Angle Globe Valve",
    slug: "angle-globe-valve",
    image: "/Angle Globe Valve.jpg",
    description:
      "Angle Globe Valve provides excellent throttling control and is suitable for steam and liquid applications.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600",
      "Size Range": '1/2" to 12" (common)',
      "Temperature Range": "-29°C to 400°C (depends on trim)",
      "End Connections": "Flanged, Screwed (small sizes)",
      Materials: "Carbon steel, stainless steel, bronze trims for small sizes",
      Standards: "ASME B16.34, API/Manufacturer specs",
    },
    features: [
      "Compact 90° flow path useful where piping changes direction",
      "Good throttling and flow control",
      "Easier piping installation in limited space",
      "Replaceable trim and seat",
      "Rugged packing for steam service",
    ],
    applications: [
      "Steam distribution and control",
      "Cooling water control",
      "Process throttling applications",
      "Heating systems and condensate lines",
      "Chemical feed lines",
    ],
  },

  {
    name: "Bellow Seal Globe Valve",
    slug: "bellow-seal-globe-valve",
    image: "/Bellow Seal Globe Valve.jpg",
    description:
      "Bellow Seal Globe Valve offers leak-proof sealing and is ideal for hazardous fluid applications.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Class 150 to Class 600 (depending on bellow material)",
      "Size Range": '1/2" to 12"',
      "Temperature Range":
        "-196°C to 450°C (bellow material dependent; cryogenic & high temp options exist)",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Stainless steel bellows, carbon or alloy steel body",
      Standards: "ASME B16.34, API 598 (testing), ISO/EN standards for bellows",
    },
    features: [
      "Bellows provide absolute stem-to-atmosphere seal",
      "Ideal for toxic, volatile or high-purity fluids",
      "Reduced fugitive emissions",
      "Available with backseat and live-loading options",
      "Suitable for high-cycle applications",
    ],
    applications: [
      "Hazardous chemical handling",
      "Cryogenic and high-purity services",
      "Petrochemical plants",
      "Hydrogen and specialty gas service",
      "Nuclear and pharma where leakage is unacceptable",
    ],
  },

  {
    name: "Bronze Angle Globe Valve",
    slug: "bronze-angle-globe-valve",
    image: "/Bronze Angle Globe Valve.jpg",
    description:
      "Bronze Angle Globe Valve provides excellent corrosion resistance and precise flow control.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 125 to Class 250 (typical bronze ratings)",
      "Size Range": '1/4" to 4" (typical bronze sizes)',
      "Temperature Range": "-18°C to 232°C",
      "End Connections": "Threaded (NPT), Flanged (small sizes)",
      Materials: "Bronze, Brass internals, stainless trim options",
      Standards: "ASME B1.20.1 (threads), MSS/ASTM material references",
    },
    features: [
      "Excellent corrosion resistance for water and mild corrosives",
      "Compact angle design simplifies piping",
      "Good for precise throttling",
      "Low maintenance",
      "Economical for small sizes",
    ],
    applications: [
      "Potable water and plumbing",
      "HVAC and heating control",
      "Marine systems",
      "Steam traps and condensate control (small sizes)",
      "Instrument and sampling lines",
    ],
  },

  {
    name: "Cast Steel Globe Valve",
    slug: "cast-steel-globe-valve",
    image: "/Cast Steel Globe Valve.jpg",
    description:
      "Cast Steel Globe Valve is designed for high-pressure and high-temperature service applications.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Class 150 to Class 1500 (depending on casting & trim)",
      "Size Range": '1/2" to 24"',
      "Temperature Range": "-29°C to 540°C (material/trim dependent)",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Cast steel (ASTM A217/A216), stainless or alloy trims",
      Standards: "ASME B16.34, API 602/ISO where applicable",
    },
    features: [
      "Designed for high-pressure/temperature throttling",
      "Replaceable seats and trim for long service life",
      "Robust bonnet and body design",
      "Packing & gland options for tight sealing",
      "Available in many end connections",
    ],
    applications: [
      "Power plants (steam control)",
      "Refinery process control",
      "Chemical process services",
      "High-temperature heating circuits",
      "Industrial throttle/regulating duties",
    ],
  },

  {
    name: "Cryogenic Globe Valve",
    slug: "cryogenic-globe-valve",
    image: "/Cryogenic Globe Valve.jpg",
    description:
      "Cryogenic Globe Valve is specially designed for extremely low temperature applications.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600 (design varies)",
      "Size Range": '1/2" to 12" (typical cryogenic sizes)',
      "Temperature Range": "-196°C (liquid nitrogen) up to ambient",
      "End Connections":
        "Butt-weld, Flanged (ASME B16.5 special low-temp materials)",
      Materials:
        "Low-temperature steels (austenitic stainless, special alloys), PTFE/graphite seat options",
      Standards:
        "ASME B31.3, EN 12516 (low temperature design guidance), manufacturer cryogenic data",
    },
    features: [
      "Materials selected to retain toughness at cryogenic temps",
      "Extended bonnets to isolate packing from cold media",
      "Special sealing to prevent leakage at very low temps",
      "Designed for thermal contraction/expansion",
      "Insulation and bonnet extension options",
    ],
    applications: [
      "LNG and LPG handling",
      "Cryogenic storage and transfer",
      "Industrial gas plants (oxygen, nitrogen)",
      "Space & research cryogenic systems",
      "Cold chain process equipment",
    ],
  },

  {
    name: "OS Globe Valve",
    slug: "os-globe-valve",
    image: "/OS Globe Valve.jpg",
    description:
      "OS Globe Valve features Outside Screw & Yoke design for easy maintenance and operation.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600",
      "Size Range": '1/2" to 24"',
      "Temperature Range": "-29°C to 427°C (trim dependent)",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel, stainless steel trim",
      Standards: "ASME B16.34, API/Manufacturer specs",
    },
    features: [
      "Outside screw & yoke provides visible stem travel",
      "Rugged construction for industrial use",
      "Good for heavy-duty throttling",
      "Replaceable trim elements",
      "Ease of packing maintenance",
    ],
    applications: [
      "Petrochemical throttling",
      "Steam lines",
      "Process plants requiring visible position indication",
      "Power generation",
      "General industrial fluid control",
    ],
  },

  {
    name: "Pneumatic Angle Gate Valve",
    slug: "pneumatic-angle-gate-valve",
    image: "/Pneumatic Angle Gate Valve.jpg",
    description:
      "Pneumatic Angle Gate Valve provides automated operation and precise flow control.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Low to Medium (typical up to Class 300)",
      "Size Range": '1" to 12" (common angle sizes)',
      "Temperature Range": "-29°C to 400°C",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel body, stainless internals",
      Standards: "Actuator standards (ISO), ASME B16.34 for valve body",
    },
    features: [
      "Integrated pneumatic actuator for automation",
      "Compact angle configuration for directional change",
      "Quick operation and position control",
      "Limit switches and solenoid options",
      "Suitable for on/off and control duties",
    ],
    applications: [
      "Automated process lines",
      "Steam and condensate control",
      "Chemical dosing and flow control",
      "Power and utility plants",
      "Pipelines needing directional change",
    ],
  },

  {
    name: "Y Pattern Globe Valve",
    slug: "y-pattern-globe-valve",
    image: "/Y Pattern Globe Valve.jpg",
    description:
      "Y Pattern Globe Valve offers reduced pressure drop and is suitable for high-flow applications.",
    category: "Globe Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600",
      "Size Range": '1/2" to 24"',
      "Temperature Range": "-29°C to 427°C",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel, stainless steel trims",
      Standards: "ASME B16.34, API/Manufacturer datasheets",
    },
    features: [
      "Y-pattern body reduces flow resistance",
      "Better flow capacity (higher Cv) vs standard globe",
      "Good for throttling and control",
      "Replaceable seat/trim",
      "Lower wear on trim for erosive flows",
    ],
    applications: [
      "High-flow throttling",
      "Steam and condensate circuits",
      "Feedwater control",
      "Chemical and petrochemical processes",
      "General process control where pressure drop matters",
    ],
  },

  {
    name: "Butterfly Check Valve",
    slug: "butterfly-check-valve",
    image: "/Butterfly Check Valve.jpg",
    description:
      "Butterfly Check Valve prevents backflow and is suitable for large diameter pipeline applications.",
    category: "Check Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Typically Class 150 to 300 (depends on design)",
      "Size Range": '4" to 48"+ (large diameter suitability)',
      "Temperature Range": "-29°C to 200°C (seat material dependent)",
      "End Connections": "Wafer, Lug, Flanged",
      Materials: "Ductile iron body, stainless steel disc, elastomer seat",
      Standards: "API 594 (check valve dimensions), Manufacturer datasheets",
    },
    features: [
      "Compact, lightweight wafer design",
      "Low maintenance",
      "Quick-acting disc prevents backflow",
      "Good for large-diameter low/medium pressure lines",
      "Spring-assisted variants for faster closure",
    ],
    applications: [
      "Large water distribution mains",
      "Pumping systems",
      "HVAC chilled water lines",
      "Irrigation and municipal systems",
      "Large diameter process piping",
    ],
  },

  {
    name: "Wafer Check Valve",
    slug: "wafer-check-valve",
    image: "/Wafer Check Valve.jpg",
    description:
      "Wafer Check Valve provides compact design and is ideal for space-constrained installations.",
    category: "Check Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to 600 (depending on construction)",
      "Size Range": '1/2" to 24" (common wafer sizes)',
      "Temperature Range": "-40°C to 200°C (seat/trim dependent)",
      "End Connections": "Wafer between flanges (ASME B16.5)",
      Materials: "Cast iron/ductile body, stainless internals",
      Standards: "API 594, ASME B16.10 for dimensions",
    },
    features: [
      "Slim wafer body fits between flanges",
      "Lightweight and economical",
      "Quick response to flow reversal",
      "Spring and hinge options available",
      "Low headloss designs available",
    ],
    applications: [
      "Pumping stations",
      "HVAC systems",
      "Waterworks",
      "Chemical lines (with appropriate materials)",
      "General backflow prevention in constrained spaces",
    ],
  },

  {
    name: "Tilting Disc Swing Check Valve",
    slug: "tilting-disc-swing-check-valve",
    image: "/Tilting Disc Swing Check Valve.jpg",
    description:
      "Tilting Disc Swing Check Valve offers low pressure drop and quick closure to prevent backflow.",
    category: "Check Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to 600 (varies by body material)",
      "Size Range": '2" to 36" (common)',
      "Temperature Range": "-29°C to 400°C (trim dependent)",
      "End Connections": "Flanged (ASME B16.5)",
      Materials: "Carbon steel body, stainless disc/seat",
      Standards: "API 594, API/ASME testing standards",
    },
    features: [
      "Tilting disc provides rapid closure and low pressure drop",
      "Good for high-flow and steam services",
      "Bi-directional designs available",
      "Low maintenance bearing options",
      "Fire-safe materials where required",
    ],
    applications: [
      "Steam lines",
      "Boiler feedwater",
      "Power generation circuits",
      "Pumping protection",
      "Process plant high-flow services",
    ],
  },

  {
    name: "Dual Plate Wafer Check Valve",
    slug: "dual-plate-wafer-check-valve",
    image: "/Dual Plate Wafer Check Valve.jpg",
    description:
      "Dual Plate Wafer Check Valve provides compact design and reliable backflow prevention.",
    category: "Check Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 125 to Class 600 (common)",
      "Size Range": '2" to 24" (typical)',
      "Temperature Range": "-40°C to 300°C (seat material dependent)",
      "End Connections": "Wafer (between flanges)",
      Materials: "Cast iron/ductile steel body, stainless discs and springs",
      Standards: "API 594, ASME B16.5 for flanges",
    },
    features: [
      "Compact wafer design saves space",
      "Spring-assisted quick closure available",
      "Low pressure loss and high Cv",
      "Balanced discs reduce chatter",
      "Replaceable seat inserts",
    ],
    applications: [
      "Pumping stations and mains",
      "Water and wastewater systems",
      "HVAC and chilled water lines",
      "General industrial pipelines",
      "Marine and shipboard systems",
    ],
  },

  {
    name: "Forged Steel Check Valve",
    slug: "forged-steel-check-valve",
    image: "/Forged Steel Check Valve.jpg",
    description:
      "Forged Steel Check Valve is designed for high-pressure applications and offers superior strength.",
    category: "Check Valves",
    type: "valve",
    specifications: {
      "Pressure Rating":
        "Class 150 to Class 2500 (forged designs up to high classes)",
      "Size Range": '1/2" to 12" (typical forged sizes)',
      "Temperature Range": "-46°C to 550°C (material dependent)",
      "End Connections": "Threaded, Flanged, Butt-weld",
      Materials: "Forged carbon steel, stainless options",
      Standards: "ASME B16.34, API/ASME testing standards",
    },
    features: [
      "High strength forged construction",
      "Suitable for high-pressure/high-temperature services",
      "Compact in-line designs available",
      "Robust trim and seating materials",
      "Suitable for critical services",
    ],
    applications: [
      "High-pressure hydrocarbon lines",
      "Refinery & petrochemical plants",
      "Power generation",
      "High-temp steam systems",
      "Critical process protection",
    ],
  },

  {
    name: "Lift Check Valve",
    slug: "lift-check-valve",
    image: "/Lift Check Valve.jpg",
    description:
      "Lift Check Valve provides reliable backflow prevention and is suitable for horizontal installations.",
    category: "Check Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to Class 600 (typical)",
      "Size Range": '1/2" to 24"',
      "Temperature Range": "-29°C to 400°C",
      "End Connections": "Flanged, Butt-weld",
      Materials: "Carbon steel body, stainless or bronze seat discs",
      Standards: "API 594, ASME/Manufacturer specs",
    },
    features: [
      "Disc lifts off seat on forward flow — reliable sealing when closed",
      "Good for vertical or horizontal mounting (check manufacturer guidance)",
      "Suitable for steam and fluid services",
      "Replaceable seat and disc",
      "Low leakage when properly installed",
    ],
    applications: [
      "Pumps (suction/discharge protection)",
      "Steam and condensate return lines",
      "Process lines requiring reliable check action",
      "Waterworks and municipal systems",
      "Industrial fluid protection",
    ],
  },

  {
    name: "Cast Iron Gate Valve",
    slug: "cast-iron-gate-valve",
    image: "/Cast Iron Gate Valve.jpg",
    description:
      "Cast Iron Gate Valve provides reliable shut-off service for water, oil, gas, and other non-corrosive fluids.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 125 to Class 250 (typical cast iron ratings)",
      "Size Range": '1/2" to 48"',
      "Temperature Range": "-20°C to 120°C (cast iron limits)",
      "End Connections": "Flanged, Threaded (small sizes)",
      Materials: "Cast iron body, bronze or stainless trim",
      Standards:
        "BS EN & ASME related cast iron valve standards; manufacturer datasheets",
    },
    features: [
      "Economical for low-pressure services",
      "Good for water and non-corrosive fluids",
      "Large diameter options available",
      "Easy maintenance for small-to-medium sizes",
      "Non-rising and rising stem options",
    ],
    applications: [
      "Municipal water distribution",
      "Irrigation",
      "Sewage and wastewater (where materials compatible)",
      "Industrial low-pressure isolation",
      "HVAC large line isolation",
    ],
  },

  {
    name: "Cryogenic Gate Valve",
    slug: "cryogenic-gate-valve",
    image: "/Cryogenic Gate Valve.jpg",
    description:
      "Cryogenic Gate Valve is designed for extremely low temperature applications and provides excellent sealing.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "Class 150 to 600 (depending on design)",
      "Size Range": '1/2" to 36"',
      "Temperature Range": "-196°C up to ambient (cryogenic service)",
      "End Connections": "Butt-weld, Flanged with low-temp materials",
      Materials:
        "Low-temperature steels (austenitic stainless, special alloys), PTFE/graphite packing options",
      Standards:
        "ASME B31.3 (low temp guidance), manufacturer cryogenic specifications",
    },
    features: [
      "Materials and design resist embrittlement at low temps",
      "Extended bonnet to protect packing",
      "Tight shut-off for gaseous/liquid cryogens",
      "Special seals and insulation options",
      "Designed for thermal contraction",
    ],
    applications: [
      "LNG transfer and storage",
      "Cryogenic gas distribution",
      "Industrial gas plants",
      "Research cryogenic systems",
      "Space & aerospace ground support",
    ],
  },

  // others  *****************

  {
    name: "Silencer",
    slug: "silencer",
    image: "/Silencer.jpg",
    description:
      "A Vent Silencer is equipment used to reduce noise produced by high-pressure gas or steam release into the atmosphere.",
    category: "Noise Control Equipment",
    type: "others",
    specifications: {
      "Noise Reduction": "15 to 40 dB(A) typical",
      "Pressure Drop": "0.1 to 0.5 bar (varies by design)",
      "Temperature Range": "-20°C to 400°C (depending on construction)",
      "Size Range": "DN50 to DN600+",
      Materials:
        "Carbon Steel, Stainless Steel, Acoustic Liners (perforated metal, fiberglass, rockwool)",
      Standards:
        "ISO 5136 (for duct silencers), API/Manufacturer acoustic specs",
    },
    features: [
      "High noise attenuation for venting systems",
      "Low pressure loss design",
      "Removable acoustic lining for maintenance",
      "Robust construction for process environments",
      "Flange or welded connections",
    ],
    applications: [
      "Blowdown lines in refineries and plants",
      "Pressure relief valve exhausts",
      "Steam vents and depressurization",
      "Flare systems",
      "Gas and vapor venting in chemical plants",
    ],
  },

  {
    name: "Pipe And Fittings",
    slug: "pipe-and-fittings",
    image: "/Pipe & Fittings.jpg",
    description:
      "Pipes and fittings of various materials and sizes are manufactured for diverse industrial applications.",
    category: "Piping Equipment",
    type: "others",
    specifications: {
      "Size Range": "DN 10 to DN 2000 (or larger in specialty pipes)",
      "Pressure Rating": "Class 150 to 2500 (or ANSI/ASME classes)",
      "Temperature Range": "-196°C to 600°C (depending on material)",
      "Connection Types": "Butt-weld, Socket weld, Threaded, Flanged, Grooved",
      Materials:
        "Carbon Steel, Stainless Steel, Alloy Steel, PVC, HDPE, Copper, Duplex, etc.",
      Standards: "ASME B16 series (B16.5, B16.9, B16.11), ISO, API 5L, ASTM",
    },
    features: [
      "Wide range of sizes and materials",
      "Standardized dimensions for interchangeability",
      "High strength and corrosion resistance (depending on material)",
      "Ease of installation and connection options",
      "Availability of elbows, tees, reducers, flanges, etc.",
    ],
    applications: [
      "Fluid transport in process plants",
      "Water distribution and municipal piping",
      "Oil & gas pipelines",
      "Chemical, petrochemical, HVAC systems",
      "Fire water, cooling, steam headers",
    ],
  },

  {
    name: "Ceramic Balls",
    slug: "ceramic-balls",
    image: "/Ceramic Balls.jpg",
    description:
      "A Ceramic Ball is a hard, wear-resistant ball made from advanced ceramics, used in valves, bearings, and industrial applications requiring high strength, corrosion resistance, and durability.",
    category: "Components & Wear Parts",
    type: "others",
    specifications: {
      "Diameter Range": "1 mm to 200 mm+",
      Hardness: "Mohs 8–9 (approx.), or 1500–1800 HV",
      "Temperature Range": "-200°C to 1000°C (depending on ceramic type)",
      "Material Types":
        "Alumina (Al₂O₃), Silicon Nitride (Si₃N₄), Zirconia (ZrO₂), Silicon Carbide (SiC)",
      Standards:
        "ASTM C1239 / ISO 20523 (ball tolerances), manufacturer datasheets",
    },
    features: [
      "Extreme wear and abrasion resistance",
      "High hardness and stiffness",
      "Excellent corrosion resistance",
      "Low thermal expansion (in many ceramics)",
      "Lightweight relative to metallic balls in some designs",
    ],
    applications: [
      "Valve trim (ball valves)",
      "Bearings and rotary machinery",
      "Grinding media in mills",
      "Wear parts in pumps and compressors",
      "Precision instruments, bearings in harsh environments",
    ],
  },

  {
    name: "Chemicals",
    slug: "chemicals",
    image: "/Chemicals.jpg",
    description:
      "Wide range of industrial chemicals supplied for applications across manufacturing, processing, and treatment industries.",
    category: "Process Materials",
    type: "others",
    specifications: {
      "Purity Grades":
        "Technical grade, reagent grade, food grade, electronic grade",
      "Packaging Sizes": "1 kg, 25 kg, drums, bulk tankers",
      "Storage Conditions":
        "Ambient to refrigerated, inert gas blanketing as needed",
      "Temperature Range": "-40°C to 60°C (varies by chemical)",
      Materials:
        "Chemicals themselves (acids, bases, solvents, reagents, catalysts)",
      Standards:
        "ISO/ASTM purity standards, MSDS / SDS compliance, REACH / local chemical regulations",
    },
    features: [
      "High purity and consistency",
      "Stable under storage & transport conditions",
      "Broad compatibility with process systems",
      "Safety and hazard management (packaging, MSDS, labeling)",
      "Batch traceability and certification",
    ],
    applications: [
      "Chemical processing and reactions",
      "Water treatment (coagulants, disinfectants)",
      "Pharmaceutical manufacturing",
      "Cleaning agents / solvents",
      "Catalysts, reagents, and specialty chemicals",
    ],
  },

  //  pipes ********

  {
    name: "Stainless Steel Pipes",
    slug: "stainless-steel-pipes",
    image: "/Stainless Steel Pipes.jpg",
    description:
      "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries with excellent corrosion resistance.",
    category: "Steel Pipes",
    type: "pipes",
    specifications: {
      "Material Grades": "304, 316, 316L, 317L, 321, 310, 904L, etc.",
      "Size Range": 'DN 6 to DN 600+ or NPS ¼" to 24+"',
      "Wall Thickness": "Schedule 5S up to XS & XXS, or custom thickness",
      "Temperature Range": "-196°C to 800°C (depending on grade)",
      "Pressure Rating":
        "Class 150 up to Class 900 (depending on schedule and size)",
      "End Connections": "Butt-weld (BW), Socket-weld (SW), Threaded, Flanged",
      Standards: "ASTM A312 / A213 / A269 / A358, ASME B36.19M, ASME B36.10M",
    },
    features: [
      "Excellent corrosion resistance in harsh environments",
      "Hygienic for pharma / food / biotech applications",
      "High fabrication weldability and formability",
      "Good strength-to-weight ratio",
      "Long lifespan with minimal maintenance",
    ],
    applications: [
      "Chemical and petrochemical plants",
      "Pharmaceutical processing",
      "Food and beverage piping",
      "Desalination plants",
      "Cryogenic systems and sanitary piping",
    ],
  },

  {
    name: "Carbon Steel Pipes",
    slug: "carbon-steel-pipes",
    image: "/Carbon Steel Pipes.jpg",
    description:
      "Durable carbon steel pipes designed for high-pressure applications in oil and gas industries.",
    category: "Steel Pipes",
    type: "pipes",
    specifications: {
      "Material Grades": "ASTM A106 Grade B/C, A53, API 5L Gr B/X52 etc.",
      "Size Range": 'DN 15 to DN 1200+ or NPS ½" to 48+"',
      "Wall Thickness":
        "Standard pipe schedules (STD, XS, XXS) or API line pipe wall thicknesses",
      "Temperature Range":
        "-29°C to 450°C (depending on carbon steel grade and environment)",
      "Pressure Rating": "Class 150 up to Class 600 (or API line pressures)",
      "End Connections": "Butt-weld, Flanged, Threaded",
      Standards: "ASME B36.10M, ASTM A106, ASTM A53, API 5L",
    },
    features: [
      "High strength and toughness",
      "Cost-effective compared to exotic alloys",
      "Good weldability and fabrication",
      "Wide availability in many sizes",
      "Suitable for pressurized and structural applications",
    ],
    applications: [
      "Oil & gas upstream/midstream/downstream",
      "Steam and water pipelines",
      "Structural and mechanical piping",
      "Power generation plants",
      "Industrial process lines",
    ],
  },

  {
    name: "Alloy Steel Pipes",
    slug: "alloy-steel-pipes",
    image: "/Alloy Steel Pipes.jpg",
    description:
      "Premium alloy steel pipes engineered for extreme temperature and pressure conditions.",
    category: "Steel Pipes",
    type: "pipes",
    specifications: {
      "Material Grades":
        "Chromium-moly (e.g. P11, P22, P91), Nickel-based alloys",
      "Size Range": "DN 15 to DN 600+",
      "Wall Thickness": "XS, XXS, custom thick-wall options",
      "Temperature Range": "-29°C to 650°C+ (depending on alloy grade)",
      "Pressure Rating":
        "Class 150 to Class 1500 (or higher in specialized alloys)",
      "End Connections": "Butt-weld, Flanged, Socket-weld",
      Standards: "ASTM A335, ASME B36.10/36.19, API 5L (for line pipe alloys)",
    },
    features: [
      "Enhanced strength at elevated temperatures",
      "Improved creep resistance",
      "Good toughness and ductility",
      "Enhanced corrosion & oxidation resistance (in certain alloys)",
      "Suitable for alloy pipe welding practices",
    ],
    applications: [
      "High-temperature boiler headers and piping",
      "Petrochemical and chemical process units",
      "Power plant high-pressure steam lines",
      "Furnace piping and heat exchangers",
      "Refinery cracking units and neighborhood service lines",
    ],
  },

  {
    name: "Seamless Pipes",
    slug: "seamless-pipes",
    image: "/Seamless Pipes.jpg",
    description:
      "Precision seamless pipes manufactured for critical applications requiring superior strength and reliability.",
    category: "Steel Pipes",
    type: "pipes",
    specifications: {
      "Material Grades":
        "Carbon, alloy, stainless seamless grades (A106, A335, A312, etc.)",
      "Size Range": 'DN 10 to DN 610+ (or NPS ⅜" to 24+" seamless)',
      "Wall Thickness":
        "Up to very heavy wall (custom), commonly STD/XS/Sch 160",
      "Temperature Range": "-196°C to 650°C+ (depending on material)",
      "Pressure Rating": "Class 150 to Class 1500 (or line pipe pressures)",
      "End Connections": "Butt-weld, Threaded (for small sizes), Socket-weld",
      Standards: "ASTM A53 seamless, ASTM A106, ASTM A335, ASME B36.10M",
    },
    features: [
      "No welded seam — better mechanical integrity under stress",
      "High pressure and high temperature capability",
      "Better fatigue and cyclic strength",
      "Uniform wall thickness",
      "Often higher cost but more reliable in critical service",
    ],
    applications: [
      "High-pressure steam and power plant piping",
      "Oil & gas well casing and tubulars",
      "Critical process equipment in chemical plants",
      "Refinery and petrochemical piping",
      "Heat exchangers, pressure vessels feed lines",
    ],
  },

  {
    name: "Welded Pipes",
    slug: "welded-pipes",
    image: "/Welded Pipes.jpg",
    description:
      "Cost-effective welded pipes suitable for general industrial applications and infrastructure projects.",
    category: "Steel Pipes",
    type: "pipes",
    specifications: {
      "Material Grades":
        "Carbon, stainless, alloy welded grades (A53, A135, etc.)",
      "Size Range": "DN 15 to DN 1200+",
      "Wall Thickness": "Standard pipe schedules, ERW, LSAW, SSAW, etc.",
      "Temperature Range": "-29°C to 400°C+ (depending on grade)",
      "Pressure Rating": "Class 150 to Class 600 (or line pipe ratings)",
      "End Connections": "Butt-weld, Flanged, Threaded",
      Standards: "ASTM A53, ASTM A135, API 5L, ASME B36.10M",
    },
    features: [
      "More economical than seamless for many sizes",
      "Availability in long lengths",
      "Good weldability and joinability",
      "Consistent manufacturing and availability",
      "Reliable for lower-to-medium pressure services",
    ],
    applications: [
      "Water, gas, and liquid pipelines in infrastructure",
      "Structural tubing",
      "HVAC and ducting piping",
      "General industrial process lines",
      "Irrigation and drainage systems",
    ],
  },

  {
    name: "Duplex Steel Pipes",
    slug: "duplex-steel-pipes",
    image: "/Duplex Steel Pipes.jpg",
    description:
      "Advanced duplex steel pipes offering superior corrosion resistance and mechanical properties.",
    category: "Steel Pipes",
    type: "pipes",
    specifications: {
      "Material Grades": "Duplex 2205, 2507, Lean duplex grades",
      "Size Range": "DN 15 to DN 600+",
      "Wall Thickness": "Standard schedules, heavy wall options",
      "Temperature Range": "-50°C to 300°C (depending on alloy)",
      "Pressure Rating": "Class 150 to Class 900 (or as per alloy design)",
      "End Connections": "Butt-weld, Flanged, Socket-weld",
      Standards:
        "ASTM A790, ASTM A913, ASME B36.19M, NACE MR0175 / ISO 15156 compatibility",
    },
    features: [
      "Superior resistance to chloride stress corrosion cracking",
      "High strength — thinner walls possible",
      "Good toughness at low temperatures",
      "Excellent durability in harsh environments",
      "Cost-effective alternative to super duplex or nickel alloys",
    ],
    applications: [
      "Desalination plants",
      "Offshore and marine piping",
      "Chemical and petrochemical industries (chlorides present)",
      "Oil & gas processing (sweet, sour service)",
      "Pulp & paper and pulp bleaching plants",
    ],
  },
];
interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const getProductTypeTitle = (type: string) => {
    switch (type) {
      case "valve":
        return "";
      case "pipe":
        return "Pipe Manufacturers";
      case "motor":
        return "Motor Manufacturers";
      default:
        return "Manufacturers";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name} {getProductTypeTitle(product.type)}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Leading manufacturer and supplier of high-quality{" "}
            {product.name.toLowerCase()} designed for industrial applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-blue-50 rounded-lg p-8 flex items-center justify-center h-96">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Product Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-3">
                <dt className="font-semibold text-gray-800">{key}</dt>
                <dd className="text-gray-600 mt-1">{value}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="mb-6">
            Contact our technical team for detailed specifications and custom
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
