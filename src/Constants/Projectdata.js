import minjur from '../assets/1.png'
import alandur from '../assets/2.png'
import maldives from '../assets/3.png'
import ocean from '../assets/4.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'
import project9 from '../assets/project9.png'
import minjur1 from '../assets/minjur1.png'
import minjur2 from '../assets/minjur2.png'
import minjur3 from '../assets/minjur3.png'
import minjur4 from '../assets/minjur4.png'

const projectsData = [
    {
        id: 1,
        name: "100 MLD Desalination Plant – Minjur",
        category: "Water & Wastewater",
        status: "major",
        isMajor: true,
        image: minjur,
        client: "CMWSSB, Chennai",
        scopeOfWork: "Concept to Commissioning and O&M",
        currentStatus: "Completed",
        relatedimages:[minjur,minjur1,minjur2,minjur3,minjur4]
    },
    {
        id: 2,
        name: "Alandur UGSS STP",
        category: "Water & Wastewater",
        status: "major",
        isMajor: true,
        image: alandur,
        client: "CMWSSB, Chennai",
        scopeOfWork: "India's first STP on BOOT model",
        currentStatus: "Completed"
    },
    {
        id: 3,
        name: "Maldives Integrated Water Supply Project",
        category: "Water & Wastewater",
        status: "major",
        isMajor: true,
        image: maldives,
        client: "Government of Maldives",
        scopeOfWork: "Integrated Water Supply and Desalination",
        currentStatus: "Ongoing"
    },
    {
        id: 4,
        name: "Project Management Consultancy for 3x6.25 MLD SWRO Desalination Plant at AV Nagaram, Kakinada",
        category: "Water & Wastewater",
        status: "ongoing",
        isMajor: false,
        image: project4,
        client: "Aurobindo Pharma Ltd, Hyderabad",
        scopeOfWork: "PMC Services for SWRO Desalination Plant",
        currentStatus: "Offshore and Civil works completed, one stream commissioned, balance commissioning in progress"
    },
    {
        id: 5,
        name: "Water Distribution Network of TWAD Board for Thiruvarur and Karur",
        category: "Water & Wastewater",
        status: "ongoing",
        isMajor: false,
        image: project5,
        client: "Transtroy India Ltd, Chennai",
        scopeOfWork: "PMC Services for Water Distribution Network",
        currentStatus: "70% procurement done, 38% construction completed"
    },
    {
        id: 6,
        name: "Pretender Support and Detailed Engineering for Bhama Ashkhed Rising Main Project for PCMC",
        category: "Consultancy & PMC",
        status: "ongoing",
        isMajor: false,
        image:project6,
        client: "T&T Infra Ltd, Pune",
        scopeOfWork: "Pretender support and Detailed Engineering (Sheet Pile Cofferdam)",
        currentStatus: "65% civil works completed, on schedule"
    },
    {
        id: 7,
        name: "Pretender Support for 80 MLD STP Project in CMWSSB, Tamil Nadu",
        category: "Water & Wastewater",
        status: "ongoing",
        isMajor: false,
        image: project7,
        client: "Gondwana Engineers Ltd, Nagpur",
        scopeOfWork: "Pretender Consultancy for STP Project",
        currentStatus: "Infiltration well blasting work in progress"
    },
    {
        id: 8,
        name: "Consultancy for Execution of 127 MLD STP Civil Works at Pune for Toshiba Water Ltd",
        category: "Civil & Industrial Infrastructure",
        status: "ongoing",
        isMajor: false,
        image:project8 ,
        client: "Gnanam Engg, Chennai",
        scopeOfWork: "Consultancy for STP Civil Works Execution",
        currentStatus: "Site infrastructure and establishment in progress"
    },
    {
        id: 9,
        name: "Prefeasibility Studies for 15 MLD SWRO Desalination Plants including Seawater Intake and Outfall for Hindustan Coca Cola Beverages",
        category: "Water & Wastewater",
        status: "ongoing",
        isMajor: false,
        image: project9,
        client: "Hindustan Coca Cola Beverages",
        scopeOfWork: "Prefeasibility studies for SWRO desal plants",
        currentStatus: "Oceanographic studies and corridor setup in progress"
    },
    {
        id: 10,
        name: "Infiltration Well Blasting Work – Consultancy and Pretender Support",
        category: "Water & Wastewater",
        status: "ongoing",
        isMajor: false,
        image: minjur,
        client: "CMWSSB",
        scopeOfWork: "Pretender Support & Consultancy",
        currentStatus: "Work in progress"
    },
    {
        id: 11,
        name: "Oceanographic Data Collection and InO Corridor Setup",
        category: "Marine Works",
        status: "ongoing",
        isMajor: false,
        image:ocean,
        client: "Hindustan Coca Cola Beverages",
        scopeOfWork: "Oceanographic Data Collection",
        currentStatus: "In progress"
    },
    {
        id: 12,
        name: "Pretender Services for Bidding of Integrated Water Supply Projects including 6 Desalination Plants – Maldives",
        category: "Water & Wastewater",
        status: "completed",
        isMajor: false,
        image: alandur,
        client: "MM Infra Projects, Chennai",
        scopeOfWork: "Pretender services for bidding",
        currentStatus: "Completed"
    },
    {
        id: 13,
        name: "Project Management Consultancy Services for 6 Islands in Post Tender Stage – Maldives",
        category: "Water & Wastewater",
        status: "completed",
        isMajor: false,
        image: minjur,
        client: "MM Infra Projects, Chennai",
        scopeOfWork: "PMC Services",
        currentStatus: "Completed"
    },
    {
        id: 14,
        name: "Consultancy for Treated Effluent Marine Piping Crossing Ennore Creek from Concept to Commissioning – 45 MLD TTRO Project for CMWSSB, Ennore Chennai",
        category: "Marine Works",
        status: "completed",
        isMajor: false,
        image: maldives,
        client: "Sattva Engineering Const Pvt Ltd, Chennai",
        scopeOfWork: "Consultancy for Marine Piping Crossing",
        currentStatus: "Completed"
    },
    {
        id: 15,
        name: "Execution of Trenchless Crossing at 3 Locations using BOR IT Auger Boring Machine – 45 MLD TTRO Project",
        category: "Marine Works",
        status: "completed",
        isMajor: false,
        image: alandur,
        client: "Sattva Engineering Const Pvt Ltd, Chennai",
        scopeOfWork: "Execution of Trenchless Crossings",
        currentStatus: "Completed"
    },
    {
        id: 16,
        name: "Construction of Two PCB’s across Buckingham Canal – 45 MLD TTRO Project",
        category: "Marine Works",
        status: "completed",
        isMajor: false,
        image: maldives,
        client: "Sattva Engineering Const Pvt Ltd, Chennai",
        scopeOfWork: "Construction of PCB’s",
        currentStatus: "Completed"
    }
];

export default projectsData;
