/* ==========================================================================
   Project Dataset & Case Studies — Saurabh Ranjan
   ========================================================================== */

const portfolioProjects = [
  {
    id: "shiftpe",
    title: "ShiftPe: Gig Marketplace Platform",
    category: "fullstack",
    tagline: "Location-aware MERN gig marketplace connecting local businesses and college students",
    description: "Architected a full-stack MERN platform enabling local businesses to post immediate short-term gigs and college students to discover, apply, and match with opportunities in real time.",
    architecture: "Built on MongoDB, Express.js, React.js, and Node.js. Features MongoDB Geospatial indexing ($near queries) to calculate proximity within a 10km radius, secure JWT-based dual authentication for students and businesses, and WebSockets (Socket.io) for instant peer-to-peer messaging.",
    keyMetrics: [
      "Location-based geospatial search filtering nearby gigs within 10km radius",
      "Interactive swipe-based UI (dating-app style) for rapid gig browsing",
      "Integrated live chat engine for instant messaging with matched businesses",
      "Isolated dual authentication separating student applicants and hiring businesses"
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Geospatial", "Socket.io"],
    githubUrl: "https://github.com/sam0123456/shiftpe_onlinejob",
    liveUrl: "https://sam0123456.github.io/shiftpe_onlinejob/",
    accentColor: "#6366f1",
    icon: "briefcase"
  },
  {
    id: "hostel-complaint",
    title: "Hostel/PG Complaint Management System",
    category: "fullstack",
    tagline: "Role-based issue tracker & resolution portal for hostel residents and wardens",
    description: "Engineered a robust MERN stack web application streamlining complaint management across student hostels and PGs. Provides role-based portals for students to report issues and wardens to prioritize and resolve them.",
    architecture: "React.js responsive UI integrated with Express REST APIs and MongoDB. Implemented Role-Based Access Control (RBAC) middleware, state-machine tracking (Pending → In Progress → Resolved), and soft-delete archive mechanisms.",
    keyMetrics: [
      "Role-Based Access Control (RBAC) for student and warden workspaces",
      "Multi-stage complaint lifecycle tracking with audit timestamps",
      "Centralized triage dashboard for wardens with filtering and status updates",
      "Soft-delete support preventing accidental record loss"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "REST API"],
    githubUrl: "https://github.com/sam0123456/hostel-complaint-box",
    liveUrl: "https://sam0123456.github.io/hostel-complaint-box/",
    accentColor: "#10b981",
    icon: "shield"
  },
  {
    id: "algo-cpp",
    title: "AlgoForge: C++ Data Structures & Algorithms",
    category: "systems",
    tagline: "High-performance implementations of graph traversals, trees, and dynamic programming",
    description: "A comprehensive repository of algorithmic problem-solving in C++ focusing on optimal time-and-space complexity solutions for competitive programming and technical interviews.",
    architecture: "Optimized modern C++ (C++17/20) utilizing STL containers, memory-efficient pointers, recursion trees, and dynamic programming memoization tables.",
    keyMetrics: [
      "Covers Graph Traversals (BFS, DFS, Dijkstra, TopoSort), Trees, and Bit Manipulation",
      "Optimized asymptotically for sub-millisecond execution benchmarks",
      "Strict adherence to Object-Oriented Principles (OOP) and clean modular design"
    ],
    tags: ["C++", "DSA", "Algorithms", "OOP", "STL"],
    githubUrl: "https://github.com/sam0123456",
    liveUrl: "https://github.com/sam0123456",
    accentColor: "#06b6d4",
    icon: "code"
  },
  {
    id: "ai-genai-lab",
    title: "NeuralLab: AI & GenAI Exploration Suite",
    category: "aiml",
    tagline: "Explorations in neural networks, foundational ML models, and Generative AI",
    description: "Hands-on projects exploring foundational Machine Learning concepts, neural network architectures, and Generative AI prompt-engineering and API integrations.",
    architecture: "Python-driven experiments leveraging scikit-learn, PyTorch fundamentals, and LLM APIs for classification, text synthesis, and semantic experimentation.",
    keyMetrics: [
      "Implemented neural network forward & backward propagation experiments",
      "Explored Generative AI prompt chaining and automated workflow assistants",
      "Evaluated model convergence, loss metrics, and prediction accuracy"
    ],
    tags: ["Python", "AI/ML", "Neural Networks", "Gen AI", "APIs"],
    githubUrl: "https://github.com/sam0123456",
    liveUrl: "https://github.com/sam0123456",
    accentColor: "#a855f7",
    icon: "cpu"
  },
  {
    id: "crescent-national-academy",
    title: "Crescent National Academy — Institutional Web Portal",
    category: "frontend",
    tagline: "Official institutional web portal with online admission enquiries, academic curriculum showcase, and mobile-first architecture",
    description: "Designed and deployed a responsive institutional web platform for Crescent National Academy (Co-Ed., CBSE Curriculum from Pre-Nur. to Class Xth) in Patna. Delivers an accessible digital presence for parents and students with curriculum details, facility highlights, and dynamic admissions intake.",
    architecture: "Lightweight zero-dependency architecture using semantic HTML5, modern CSS Grid/Flexbox layouts, Google Fonts (Outfit & Plus Jakarta Sans), and FontAwesome icons.",
    keyMetrics: [
      "Responsive grid and flexbox layout optimized for all device sizes",
      "Interactive admission enquiry workflows and direct telephone hooks",
      "Full institutional information hierarchy with curriculum and facility details",
      "Fast sub-second load times without frontend framework overhead"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Flexbox & Grid", "Performance"],
    githubUrl: "https://github.com/sam0123456/crescent-national-academy",
    liveUrl: "https://sam0123456.github.io/crescent-national-academy/",
    accentColor: "#f59e0b",
    icon: "globe"
  },
  {
    id: "resonance-school",
    title: "Resonance Public School — Educational Web Platform",
    category: "frontend",
    tagline: "Modern school web portal featuring instant WhatsApp lead integration, celebration animations, and clean UI",
    description: "Engineered an interactive web platform for Resonance Public School (Phulwari Sharif, Patna) to strengthen campus outreach and streamline admissions enquiries. Incorporates direct WhatsApp click-to-chat messaging, interactive fee and admission highlights, and smooth mobile navigation.",
    architecture: "Built with HTML5, CSS3, JavaScript, WhatsApp Click-to-Chat API integration, and Canvas Confetti animations for celebration effects.",
    keyMetrics: [
      "Automated WhatsApp click-to-chat enquiry for real-time admissions consultation",
      "Canvas Confetti celebratory interactions and smooth transitions",
      "Showcase for registration credentials (PAT/RTE/PVT.SCH/895) and CBSE curriculum",
      "Mobile-optimized drawer navigation and responsive layout"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Canvas Confetti", "UI/UX"],
    githubUrl: "https://github.com/sam0123456/resonance-school",
    liveUrl: "https://sam0123456.github.io/resonance-school/",
    accentColor: "#3b82f6",
    icon: "globe"
  },
  {
    id: "quiz-website",
    title: "Quiz Application — Interactive Web Platform",
    category: "frontend",
    tagline: "Customizable multi-category timed quiz web app with dynamic score engine and celebration animations",
    description: "An interactive quiz web application designed to test and sharpen knowledge across multiple categories (Programming, Geography, Mathematics, and Entertainment). Features dynamic session configuration, 15-second countdown timer mechanics, instant answer validation, and celebratory completion animations.",
    architecture: "Lightweight modular vanilla JavaScript architecture utilizing clean state management for timer countdowns, answer randomization, dynamic DOM rendering, and celebration animations.",
    keyMetrics: [
      "Customizable quiz parameters across multiple categories (Programming, Geography, Math, Entertainment)",
      "Dynamic 15-second per-question countdown timer with auto-progression",
      "Instant visual feedback for correct/incorrect answers with real-time score calculation",
      "Celebratory completion screen with results breakdown and instant replay functionality"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Timer Engine", "UI/UX"],
    githubUrl: "https://github.com/sam0123456/Quiz-website",
    liveUrl: "https://sam0123456.github.io/Quiz-website/",
    accentColor: "#ec4899",
    icon: "award"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioProjects;
}
