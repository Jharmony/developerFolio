/* JHarmony Portfolio - Technical Lead · Decentralized Systems Builder
   Experience logos: add company images to src/assets/images/ (e.g. companyNameLogo.png)
   then set companylogo: require("./assets/images/companyNameLogo.png") for each role.
   Placeholder (quoraLogo.png) is used for roles without a custom logo yet. */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import tsLogo from "./assets/images/tsLogo.svg";
import erlangLogo from "./assets/images/erlangLogo.svg";
import luaLogo from "./assets/images/luaLogo.svg";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "JHarmony",
  title: "I'm Jorge aka ElTíO",
  subTitle: emoji(
    "Technical Lead, AI engineer, and decentralized systems builder operating at the intersection of permanent storage, autonomous compute, and ecosystem infrastructure. Arweave, a decentralized storage blockchain with data permanence for at least 200 years. AO, the Hyper Parallel Computer for scalable autonomous compute. HyperBEAM, the decentralized operating system for AO. BazAR, atomic asset marketplace infrastructure. Permabites IRL, global real-world events and education for the permaweb."
  ),
  resumeLink:
    "https://docs.google.com/document/d/19yl_vL6Bt-Bf4cb8rLbQ8QyAg89HEfrf/edit?usp=sharing&ouid=100488356635044698125&rtpof=true&sd=true",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/jharmony",
  linkedin: "https://www.linkedin.com/in/jorge-de-leon-4b5202215/",
  linktree: "https://linktr.ee/jharmonydesigns",
  gmail: "protocolgrowthstudio@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  twitter: "https://twitter.com/TRue_JDHarmony",
  instagram: "https://www.instagram.com/eltio.eth/",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "DISTRIBUTED SYSTEMS · DECENTRALIZED COMPUTE · PERMANENT INFRASTRUCTURE",
  skills: [
    "Design and build distributed systems and decentralized compute pipelines on Arweave, AO, and HyperBEAM.",
    "Create decentralized dApps and atomic asset standards with on-chain licensing (UDL) and marketplace infrastructure.",
    "Architect AO process topologies, message-based state management, and autonomous agent workflows.",
    "Apply AI-assisted engineering as a prompt engineer, pairing LLMs (OpenAI, Claude, Llama) with robust software delivery.",
    "Manage open-source codebases, produce educational video content, and organize IRL meetups and hackathons for the permaweb ecosystem."
  ],
  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", iconSvg: tsLogo },
    { skillName: "Lua", iconSvg: luaLogo },
    { skillName: "Erlang", iconSvg: erlangLogo },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Borough of Manhattan Community College",
      logo: require("./assets/images/bmccLogo.png"),
      subHeader: "Associates of Science in Computer Operations",
      duration: "2003 – 2005",
      desc: "Foundation in computer operations and information technology.",
      descBullets: []
    },
    {
      schoolName: "Lehman College",
      logo: require("./assets/images/lehmanLogo.png"),
      subHeader: "Bachelor's of Science in Computer Information Systems",
      duration: "2005 – 2008",
      desc: "Computer science degree with focus on software development and systems.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / Backend", progressPercentage: "90%" },
    { Stack: "Distributed Systems & AO", progressPercentage: "90%" },
    { Stack: "TypeScript", progressPercentage: "85%" },
    { Stack: "Product & Engineering Leadership", progressPercentage: "85%" },
    { Stack: "Lua", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Project Lead",
      company: "BazAR",
      companylogo: require("./assets/images/bazar.png"),
      date: "March 2025 – Feb 2026 · 10 mos",
      desc: "Led end-to-end engineering and product development for BazAR, a decentralized atomic asset marketplace built on Arweave and AO infrastructure. Owned system architecture, backend and frontend development, repository management, and production stability during rapid protocol evolution (AO mainnet, HyperBEAM, UCM). Designed and implemented marketplace trading systems, micro-orderbooks, asset minting tools, profile infrastructure, and ecosystem integrations. Directed platform marketing strategy, social media growth, and global community initiatives including Permabites IRL events.",
      descBullets: [
        "Technology Leadership · Project Engineering · System Architecture",
        "Backend/Frontend · Repository Management · Ecosystem integrations"
      ]
    },
    {
      role: "Community Manager",
      company: "AO",
      companylogo: require("./assets/images/aoLogo.png"),
      date: "Feb 2025 – March 2025 · 2 mos",
      desc: "Led end-to-end engineering and product development for BazAR. Integrated AI-assisted workflows (LLMs including OpenAI, Claude, Llama) into product development, automation, and content operations. Primary technical owner and cross-functional lead with protocol teams and ecosystem partners.",
      descBullets: ["Technical Project Leadership", "IT Leadership", "AI-assisted workflows"]
    },
    {
      role: "Event Mentor/CM",
      company: "Weavers",
      companylogo: require("./assets/images/weavers.png"),
      bannerColor: "#ff6a2b",
      date: "Feb 2024 – Feb 2025 · 1 yr 1 mos",
      desc:
        "Served as Discord community manager for the Weavers ecosystem, then transitioned into a developer mentor and Arweave/AO technical lead. Designed and implemented new Discord features, automations, and onboarding flows tailored to AO builders. Hosted and co-hosted weekly Weavers X Spaces (recorded) to showcase projects, answer technical questions, and connect builders. Supported a series of digital and IRL hackathons for AO and Arweave, including events at Web3Hub in Berlin for Arweave's 7th anniversary and in Bogotá, Colombia. Helped design community structures that connected builders, operators, and protocol teams across the AO ecosystem.",
      descBullets: [
        "Discord community management for Weavers, including moderation, onboarding, programming, and custom feature development.",
        "Developer mentor and Arweave/AO technical lead for community builders.",
        "Co-hosted digital and IRL hackathons for AO and Arweave in Berlin and Bogotá.",
        "Official X: Weavers ([link](https://x.com/weavers_org))"
      ]
    },
    {
      role: "Operations Specialist",
      company: "Harlem Village Academies",
      companylogo: require("./assets/images/hvaLogo1.png"),
      date: "August 2012 – August 2022",
      desc: "Experience in the DevOps department, specializing in day-to-day operations management and collaborating directly with the non-profit's CEO. Strategic planning and decision-making alongside leadership in the Charter network industry.",
      descBullets: [
        "DevOps and day-to-day operations management",
        "Collaboration with the non-profit's CEO and strategic planning",
        "Coordinated tasks across multiple departments for seamless workflow"
      ]
    },
    {
      role: "Lead Developer",
      company: "AIOW",
      companylogo: require("./assets/images/aiowLogo.png"),
      date: "March 2022 – January 2023",
      desc: "Lead Blockchain Developer building blockchain applications, tokenization platforms, and decentralized exchanges. Smart contract development and deployment using JavaScript, Node.js, Hardhat, and Foundry.",
      descBullets: [
        "Blockchain applications and tokenization platforms",
        "Smart contract development and deployment",
        "JavaScript, Node.js, Hardhat, Foundry"
      ]
    },
    {
      role: "Backend Developer",
      company: "KnuckleHeadz Studios",
      companylogo: require("./assets/images/khz1Logo.png"),
      date: "March 2022 – November 2022",
      desc: "Development of Solidity smart contracts and dApps with IPFS storage solutions. Proficiency in Solidity, Ethereum Virtual Machines (EVMs), and community engagement via Discord and Twitter.",
      descBullets: [
        "Solidity smart contracts and dApps",
        "IPFS storage solutions and EVM",
        "Solidity, JavaScript, React, Python, Java · Discord and Twitter community engagement"
      ]
    },
    {
      role: "Community Manager / Discord Architect",
      company: "Utopian Renaissance",
      companylogo: require("./assets/images/urLogo.png"),
      date: "March 2022 – October 2022",
      desc: "As a Community Manager, I successfully managed daily community affairs on the Utopian Renaissance Discord server and Twitter, fostering a positive and inclusive environment. I actively engaged with community members through Twitter Spaces and Discord while also recruiting and creating marketing content to drive growth. My role involved researching emerging blockchain technologies and contributing to strategic planning initiatives.",
      descBullets: [
        "Recognized for strong communication and problem-solving skills, fostering collaboration between teams to achieve organizational goals."
      ]
    },
    {
      role: "Backend Developer / Community Architect",
      company: "Sketchy Labs Community",
      companylogo: require("./assets/images/sketchylabs.jpg"),
      date: "October 2021 – October 2024",
      desc:
        "Co-built the Sketchy Labs ecosystem alongside creator Daniel Botha (HashLips), whose generative art engine powers 80%+ of NFT collections. Architected and hosted recurring Web3-focused X Spaces, deployed Ethereum smart contracts, and helped design and grow the community Discord. Co-authored 'Circumfusion', a collaborative Web3 novela written by the Sketchy Labs blockchain community.",
      descBullets: [
        "Collaborated with Sketchy Labs and HashLips (@HashLipsnft) on community, content, and NFT infrastructure.",
        "Deployed smart contracts on Ethereum and supported Web3 tooling used by community creators.",
        "Helped architect and grow the Sketchy Labs Discord and X Spaces presence.",
        "Co-authored the community-driven Web3 novela 'Circumfusion'."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects & Campaigns",
  subtitle: "ARWEAVE · AO · PERMAWEB",
  projects: [
    {
      image: require("./assets/images/bazar.png"),
      projectName: "BazAR",
      projectDesc: "Decentralized atomic asset marketplace on Arweave and AO. Trading systems, micro-orderbooks, UDL integration. Fully decentralized token exchange for AO tokens via HyperBEAM.",
      footerLink: [{ name: "View", url: "https://twitter.com/OurBazAR" }]
    },
    {
      image: require("./assets/images/permahub.png"),
      projectName: "PermaHub",
      projectDesc: "Permanent campaign and ecosystem hub on the Arweave network, aggregating Permabites, StarGrid, and community-driven activations.",
      footerLink: [{ name: "View", url: "https://permahub.arweave.net/" }]
    },
    {
      image: require("./assets/images/permatell.png"),
      projectName: "PermaTell",
      projectDesc: "Stories live permanently on the Arweave blockchain with Permatell leveraging AO processes.",
      footerLink: [{ name: "Twitter", url: "https://twitter.com/PermaTell" }]
    },
    {
      image: require("./assets/images/permabites.png"),
      projectName: "Permabites IRL",
      projectDesc: "Global grassroots initiative bringing decentralized infrastructure education into real-world communities. Multi-continent campaign.",
      footerLink: [{ name: "View", url: "https://x.com/TRue_JDHarmony/status/1972076008829513990" }]
    },
    {
      video: require("./assets/images/aiagents.mp4"),
      projectName: "Agents of the Permaweb",
      projectDesc: "Global hackathon for building autonomous AI agents on AO. Official permanent landing page on Arweave. $39,000 prize pool.",
      footerLink: [{ name: "View", url: "https://permahub.arweave.net/#/hackathon" }]
    },
    {
      image: require("./assets/images/berlinFragments.png"),
      projectName: "Berlin Fragments",
      projectDesc: "Collaborated with AO core team. Permanent campaign website on Arweave. Street-level marketing across Berlin.",
      footerLink: [{ name: "View", url: "https://permahub.arweave.net/#/berlin" }]
    },
    {
      image: require("./assets/images/permaBrawl.png"),
      projectName: "PermaBrawl",
      projectDesc:
        "Collaborative PermaBrawl campaign bringing AO and Arweave community projects together to co-sponsor a global competition. Participants around the world completed on-chain and community tasks to earn rewards and showcase ecosystem tooling.",
      footerLink: [
        {
          name: "View",
          url: "https://x.com/aoTheComputer/status/1889988454727008614"
        }
      ]
    },
    {
      image: require("./assets/images/hyperbeam.gif"),
      projectName: "HyperBEAM Node (Arweave.NYC)",
      projectDesc:
        "HyperBEAM is the primary, production-ready implementation of the AO-Core protocol, built on Erlang/OTP. It powers the AO Computer—a scalable, trust-minimized, distributed supercomputer running on Arweave's permanent storage. Operating our own HyperBEAM node at arweave.nyc to provide resilient compute access into the AO network.",
      footerLink: [
        {
          name: "View",
          url: "https://arweave.nyc"
        }
      ]
    },
    {
      image: require("./assets/images/hackTheWeave.png"),
      projectName: "Hack The Weave",
      projectDesc:
        "Online Hack The Weave hackathon organized with the Weavers team, bringing builders together to ship AO and Arweave-powered applications, tools, and experiments.",
      footerLink: [
        {
          name: "View",
          url: "https://x.com/Weavers_Org/status/1766560900608065934?s=20"
        }
      ]
    },
    {
      image: require("./assets/images/circumfusionFront.jpg"),
      imageHover: require("./assets/images/circumfusionBack.jpg"),
      projectName: "Circumfusion",
      projectDesc:
        "Unlock the secrets of the Sketchyverse in this collaborative novel from the Sketchy Labs community. A dedicated group races to resurrect lost ancient powers, restore Earth-1992, and face the looming battle between good and evil. 250 pages of adventure, mystery, and redemption.",
      footerLink: [
        {
          name: "View",
          url: "https://www.amazon.com/dp/B0C523YBHN?tag=080969-20"
        }
      ]
    },
    {
      video: require("./assets/images/mintcheleons.mp4"),
      projectName: "Mintcheleons",
      projectDesc: "Digital collectible project. Mintcheleons on OpenSea.",
      footerLink: [
        {
          name: "View",
          url: "https://x.com/AIOW_io/status/1537736883756752900"
        }
      ]
    },
    {
      image: require("./assets/images/khz1Logo.png"),
      projectName: "KnuckleHeadz",
      projectDesc: "KnuckleHeadz Digital Collectable · KnuckleHeadz Studios. KnuckleHeadz on OpenSea.",
      footerLink: [
        {
          name: "View",
          url: "https://opensea.io/KnuckleHeadz"
        }
      ]
    },
    {
      video: require("./assets/images/kHS1.mp4"),
      hasSound: true,
      projectName: "KnuckleHeadz S1 Retro Drop",
      projectDesc:
        "KnuckleHeadz S1 Retro Drop collection deployed with the KnuckleHeadz Studios team. Retro-inspired 1-of-1 pieces on Ethereum.",
      footerLink: [
        {
          name: "View",
          url: "https://opensea.io/collection/knuckleheadzs1retrodrop"
        }
      ]
    },
    {
      image: require("./assets/images/mmLogo.png"),
      projectName: "Misfit Mantis",
      projectDesc:
        "Misfit Mantis NFT collection. Deployed the smart contract and built the minting dApp, helping launch and grow the community around the project.",
      footerLink: [
        {
          name: "View",
          url: "https://opensea.io/collection/misfit-mantis"
        }
      ]
    },
    {
      image: require("./assets/images/urLogo.png"),
      projectName: "Utopian Renaissance",
      projectDesc:
        "Utopian Renaissance 3D model environment collection on Ethereum. Art-driven worldbuilding project exploring grid, downtown, muse, and interstellar environments.",
      footerLink: [
        {
          name: "View",
          url: "https://opensea.io/collection/utopian-renaissance-collection"
        }
      ]
    },
    {
      image: require("./assets/images/ario.jpg"),
      projectName: "ARIO Gateway",
      projectDesc:
        "Aoweave.tech — ARIO gateway deployed for indexing and accessing detailed data on the Arweave blockchain. Actively hosted and maintained as a reliable entry point into AO and Arweave infrastructure.",
      footerLink: [
        {
          name: "View",
          url: "https://aoweave.tech"
        }
      ]
    },
    {
      image: require("./assets/images/275Logo.png"),
      projectName: "Hood Rats Genesis",
      projectDesc:
        "Founder and developer of the Hood Rats Genesis collection. Designed and deployed the ERC-721A smart contract with ERC-6551 capabilities on Ethereum, with all images and metadata permanently stored on Arweave. Art layers and generative outputs were produced using the HashLips Art Engine v2.",
      footerLink: [
        {
          name: "View",
          url: "https://opensea.io/collection/hood-rats"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications & Achievements"),
  subtitle: "Licenses, certifications, and speaker roles",

  achievementsCards: [
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certification from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Certification",
      footerLink: []
    },
    {
      title: "#NFTNYC2024 Speaker",
      subtitle: "NFT.NYC · Issued Apr 2024",
      image: require("./assets/images/nftnycLogo.jpeg"),
      imageAlt: "NFT.NYC Speaker",
      footerLink: []
    },
    {
      title: "NFT.NYC 2025 Artist Showcase",
      subtitle: "Proof of Submission · NFT.NYC · Jan 2025",
      image: require("./assets/images/nftnycLogo.jpeg"),
      imageAlt: "NFT.NYC Artist Showcase",
      footerLink: []
    },
    {
      title: "Google AI Essentials",
      subtitle: "Google · Credential ID 9GOE5E3JZ6YO",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI Essentials",
      footerLink: []
    },
    {
      title: "Stay Ahead of the AI Curve",
      subtitle: "Google · Mar 2026 · Credential ID 10ZQGZQ9FA0V",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI",
      footerLink: []
    },
    {
      title: "Use AI Responsibly",
      subtitle: "Google · Mar 2026 · Credential ID MUVUEVZ3NUQ4",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI",
      footerLink: []
    },
    {
      title: "Discover the Art of Prompting",
      subtitle: "Google · Mar 2026 · Credential ID 6FVFZCAPZQTN",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI",
      footerLink: []
    },
    {
      title: "Maximize Productivity With AI Tools",
      subtitle: "Google · Mar 2026 · Credential ID 8655VVH0HRLL",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI",
      footerLink: []
    },
    {
      title: "Introduction to AI",
      subtitle: "Google · Mar 2026 · Credential ID EQ1C2YJ1Z8UE",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Driven by curiosity and community, I share educational threads on decentralized infrastructure, AO, and permanence.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://x.com/TRue_JDHarmony/status/1699034923401638259",
      title: "Technology that makes digital collectibles possible (AE 2.0)",
      description:
        "A deep-dive thread on how atomic assets, permanence, and composable standards like AE 2.0 unlock durable digital collectibles on Arweave and AO."
    },
    {
      url: "https://x.com/HoodRatNFTs/status/1696926513252253995",
      title: "New innovative standard on Ethereum like ERC‑6551",
      description:
        "Exploring ERC‑6551 token‑bound accounts, how they extend ERC‑721, and why they matter for identity, inventory, and on‑chain character systems."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1698071200973348890",
      title: "Learn about the importance of the Permaweb",
      description:
        "An educational explainer on the Permaweb, decentralized storage, and why building on permanent infrastructure changes how we think about apps and data."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/2014463529273946547",
      title: "Permabites IRL Part Two: the global movement grows",
      description:
        "From September to the New Year, a recap of how the Permabites IRL campaign expanded into a global movement for permanence across real-world communities."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1972076008829513990",
      title: "Permabites IRL: the movement for permanent culture",
      description:
        "Kicking off the Permabites IRL initiative—bringing Arweave, AO, and BazAR out of timelines and into physical rooms to anchor permanent culture offline."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1953917470726606983",
      title: "Create • License • Sell your first atomic audio on BazAR",
      description:
        "Step‑by‑step guide to minting, licensing, and listing your first atomic audio (or any file) on BazAR using UDL and UCM."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1917310155676422288",
      title: "The tech behind BazAR: UCM, UDL, Arweave, AO, atomic assets",
      description:
        "Deep technical breakdown of how BazAR uses Arweave, AO, atomic assets, UCM, and UDL to rethink NFTs, storage, and marketplaces from first principles."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1910896260745195697",
      title: "Building the Permaverse: how StarGrid was made with AO",
      description:
        "Inside the design of StarGrid: using AO processes to power an on‑chain game world where logic, assets, and progression actually live on decentralized infrastructure."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1890928266648625177",
      title: "Evolving AO: a year of innovation from Legacynet onward",
      description:
        "A retrospective on AO Legacynet and the evolution of AO‑Core, HyperBEAM, and payment relays—highlighting standout applications and where the Hyper Parallel Computer is headed next."
    },
    {
      url: "https://x.com/TRue_JDHarmony/status/1787595200690332094",
      title: "Weavers: unleashing creativity with hackathons, raids, and bounties",
      description:
        "Overview of the Weavers community and how hackathons, bounty bots, raids, and events reward builders and creatives in the AO and Arweave ecosystems."
    }
  ],
  display: true
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Ecosystem talks and workshops"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to reach out.",
  display: false
};

const contactInfo = {
  title: emoji("Reach Out"),
  subtitle: "Building in decentralized infrastructure, AI-native systems, or long-term digital architecture? I'm open to meaningful collaboration.",
  number: "",
  email_address: ""
};

const twitterDetails = {
  userName: "TRue_JDHarmony",
  display: true,
  tweets: [
    "https://x.com/therambler_eth/status/1651644748652855298?s=20",
    "https://x.com/TRue_JDHarmony/status/1777935285617115480?s=20",
    "https://x.com/TRue_JDHarmony/status/1777783903975043521?s=20",
    "https://x.com/TRue_JDHarmony/status/1552881008457965568?s=20",
    "https://x.com/KHZSTUDIO/status/1527296152080613376?s=20",
    "https://x.com/LaBarberiaWeb3/status/1675206822678888451?s=20",
    "https://x.com/ArtsDAO_o/status/1993700157276504238?s=20",
    "https://x.com/aoTheComputer/status/2001670388045251023?s=20",
    "https://x.com/Weavers_Org/status/1866255288841515400?s=20",
    "https://x.com/Weavers_Org/status/1844410476844945862?s=20",
    "https://x.com/Weavers_Org/status/1831459730214289914?s=20",
    "https://x.com/Weavers_Org/status/1831460726764138901?s=20",
    "https://x.com/Weavers_Org/status/1798376781118161309?s=20",
    "https://x.com/aoTheComputer/status/1942175186989547639?s=20",
    "https://x.com/aoTheComputer/status/1890860975642783918?s=20",
    "https://x.com/aoTheComputer/status/1930667215767982381?s=20",
    "https://x.com/Hashlipsnft/status/1852988271627833641?s=20",
    "https://x.com/Weavers_Org/status/1852388031971340437?s=20",
    "https://x.com/OurBazAR/status/1938230616476336585?s=20",
    "https://x.com/OurBazAR/status/1945353682280698019?s=20",
    "https://x.com/OurBazAR/status/1938598166892273926?s=20",
    "https://x.com/OurBazAR/status/1944862025487958409?s=20",
    "https://x.com/OurBazAR/status/1938454901689889187?s=20",
    "https://x.com/OurBazAR/status/1937710227945652689?s=20",
    "https://x.com/aoTheComputer/status/1899192185624375666?s=20",
    "https://x.com/TRue_JDHarmony/status/1896729926968996017?s=20"
  ]
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
