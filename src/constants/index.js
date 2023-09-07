import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    python,
    solidity,
    burpsuite,
    bytedance,
    neo,
    spell,
    togethdao,
    togeth,
    ai_paint,
    enhance,
    evm,
    web3hack,
    contract,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
        link: '',
    },
    {
        id: "work",
        title: "Work",
        link: '',
    },
    {
        id: "contact",
        title: "Contact",
        link: '',
    },
    {
        id: "github",
        title: "Github",
        link: "https://github.com/descartes100",
    },
    {
        id: "twitter",
        title: "Twitter",
        link: "https://twitter.com/snow_elven",
    },
    {
        id: "blog",
        title: "Blog",
        link: "https://dappopia.hashnode.dev/",
    },
    {
        id: "linkedin",
        title: "Linkedin",
        link: "https://www.linkedin.com/in/lei-zhang-new/",
    },
];

const services = [
    {
        title: "Fullstack Developer",
        icon: web,
    },
    {
        title: "Blockchain Developer",
        icon: creator,
    },
    {
        title: "Security Developer",
        icon: backend,
    },
    {
        title: "Fintech Researcher",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Solidity",
        icon: solidity,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Burpsuite",
        icon: burpsuite,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [

    {
        title: "CTO & Full stack Developer",
        company_name: "Spell.ai",
        icon: spell,
        iconBg: "#E6DEDD",
        date: "Jun 2023 - Present",
        points: [
            "Spearheaded the development of cutting-edge AI models and algorithms to revolutionize social content creation, enabling users to effortlessly produce high-quality and engaging content.",
            "Designed and implemented a groundbreaking web3 social protocol, allowing users to seamlessly integrate blockchain technology into their social experience.",
            "Empowered users to monetize their content effortlessly through blockchain-based solutions, fostering a decentralized and user-centric approach to content creation and distribution.",
            "Contributed significantly to the startup's rapid growth by introducing pioneering features and functionalities, attracting a broader user base and investor interest.",
        ],
    },
    {
        title: "Cyber Threat Intelligence & Red Team Intern",
        company_name: "Tiktok",
        icon: bytedance,
        iconBg: "#383E56",
        date: "Sep 2022 - Jun 2023",
        points: [
            "Leveraged cutting-edge cybersecurity techniques to perform comprehensive network penetration testing, meticulously assessing TikTok's infrastructure for vulnerabilities.",
            "Played a role in maintaining TikTok's e-commerce risk intelligence database, contributing to the platform's resilience against evolving threats and cyberattacks.",
            "Established highly effective monitoring channels, conducting in-depth investigations into the black and gray product market, and proactively identifying potential security risks.",
            "Demonstrated exceptional creativity and technical prowess by developing custom scripts, tools, and programs exclusively for Red Team operations.",
            "Conducted thorough source code reviews and threat analyses, identifying and addressing vulnerabilities before they could be exploited by malicious actors.",
        ],
    },
    {
        title: "Blockchain Developer & Core Contributor",
        company_name: "TogethDAO",
        icon: togethdao,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Feb 2023",
        points: [
            "Expertly crafted intricate and secure smart contracts for Ethereum and other blockchain networks, utilizing advanced development methodologies like hardhat and foundry workflows.",
            "Actively engaged with and expanded upon open-source web3 API, SDK, and protocols, staying at the forefront of blockchain technology trends.",
            "Conducted rigorous code audits and optimizations, fine-tuning smart contracts to deliver peak performance and efficiency.",
            "Collaborated closely with product managers to translate minimum viable product (MVP) requirements into clearly defined and highly functional Dapp features.",
            "Successfully secured funding and support from notable organizations, including Gitcoin Grants 14 & 15, Main Round, Web3 Social, Polygon, and Subgraph Scholarships, showcasing the startup's ability to attract investments and partnerships.",
        ],
    },
    {
        title: "Web3 Researcher & Data Analyst Intern",
        company_name: "Neo Blockchain",
        icon: neo,
        iconBg: "#383E56",
        date: "Jun 2021 - Sep 2022",
        points: [
            "Conducted thorough research on a wide range of blockchain projects, employing meticulous analysis to evaluate their credibility, technological value, and future growth potential.",
            "Deeply immersed in various web3 tracks, including DeFi, GameFi, NFTs, MEV, Layer 2 solutions, Stablecoins, and Zero Knowledge Proofs, and contributed significantly to research reports in these areas.",
            "Transformed complex research findings into insightful articles and Twitter threads, effectively educating and engaging the web3 community.",
            "Utilized open-source web3 data query tools to conduct data analysis on public blockchains and web3 projects, offering data-backed insights and recommendations.",
            "Proactively stayed at the forefront of the cryptocurrency and DLT industry, remaining informed about market trends, emerging opportunities, potential risks, and new projects.",
        ],
    },
];

const projects = [
    {
        name: "TogethDAO",
        description:
            "A groundbreaking solution leveraging web3 technologies to democratize access to the Ethereum network, allowing users to tap into the original Ethereum experience at a fraction of the transaction cost.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "solidity",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: togeth,
        source_code_link: "https://github.com/orgs/TogethDAO/repositories",
    },
    {
        name: "AI_paint",
        description:
            "Empowering users to summon diverse AI models for image generation, fostering creativity and collaboration within vibrant online communities.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "AI",
                color: "pink-text-gradient",
            },
        ],
        image: ai_paint,
        source_code_link: "https://github.com/descartes100/ai_paint",
    },
    {
        name: "Elevated Twitter Content Generator",
        description:
            "Transforms ordinary tweets into compelling and captivating posts through the innovative power of ChatGPT, taking social media engagement to new heights.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "AI",
                color: "pink-text-gradient",
            },
        ],
        image: enhance,
        source_code_link: "https://github.com/descartes100/EnhancedTwitterContent",
    },
    {
        name: "Web3 Hack",
        description:
            "A pioneering repository for Proof of Concept (PoC) code, uncovering potential vulnerabilities in web3 applications and pushing the boundaries of security research.",
        tags: [
            {
                name: "solidity",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "security",
                color: "pink-text-gradient",
            },
        ],
        image: web3hack,
        source_code_link: "https://github.com/descartes100/Web3Hack",
    },
    {
        name: "ContractSafeLib",
        description:
            "A smart contract security module, providing the ultimate safeguard for blockchain projects.",
        tags: [
            {
                name: "solidity",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "security",
                color: "pink-text-gradient",
            },
        ],
        image: contract,
        source_code_link: "https://github.com/descartes100/ContractSafeLib",
    },
    {
        name: "EVM Interpretor",
        description:
            "Developed an Ethereum Virtual Machine (EVM) interpreter entirely from scratch in Python, diligently studying the Ethereum Yellow Paper to gain a deep understanding of blockchain technology.",
        tags: [
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "blue-text-gradient",
            },
        ],
        image: evm,
        source_code_link: "https://github.com/descartes100/Build-EVM-interpreter-from-scratch",
    },
];

export { services, technologies, experiences, projects };