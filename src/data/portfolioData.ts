export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Full Stack' | 'Data Science';
  date: string;
  timeline: string;
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Certification' | 'Hackathon' | 'Award' | 'Competition';
  description: string;
  credentialNote?: string;
  badge: string;
}

export interface CodingProfile {
  name: string;
  platform: 'LeetCode' | 'GitHub' | 'LinkedIn' | 'HackerRank' | 'CodeChef';
  username: string;
  url: string;
  focus: string;
  description: string;
  statHighlight: string;
  statLabel: string;
  color: string;
}

export const PERSONAL_INFO = {
  name: "Yumna",
  fullName: "Yumna Shujauddin",
  role: "Computer Science (AI) Student & Aspiring AI/ML Developer",
  subRole: "Full Stack Engineer · Problem Solver · Machine Learning Enthusiast",
  university: "Babu Banarasi Das (BBD) University",
  degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
  duration: "Aug 2024 – Jun 2028",
  gpa: "9.05 / 10",
  location: "Lucknow, Uttar Pradesh, India",
  primaryEmail: "yumnashujauddin@gmail.com",
  secondaryEmail: "9801yumna@gmail.com",
  phone: "+91 9801753009",
  bio: "Motivated and detail-oriented B.Tech Computer Science (Artificial Intelligence) student at Babu Banarasi Das University with a solid foundation in Python, Machine Learning, Data Science, Data Structures, and Modern Web Development. Actively solving problems across LeetCode, CodeChef, and HackerRank, participating in national hackathons and quizzes, and building real-world intelligent applications.",
  tagline: "Turning ideas into intelligent, robust, and accessible digital solutions through code, mathematical curiosity, and continuous learning.",
  association: "CodSoft (Software Development & Machine Learning Intern / Associate)",
};

export const CODING_PROFILES: CodingProfile[] = [
  {
    name: "LeetCode",
    platform: "LeetCode",
    username: "Yumna_shujauddin",
    url: "https://leetcode.com/u/Yumna_shujauddin/",
    focus: "Data Structures & Algorithmic Problem Solving",
    description: "Actively solving algorithmic challenges across arrays, strings, dynamic programming, trees, and hash maps to build strong computational intuition.",
    statHighlight: "Active Solver",
    statLabel: "DSA & Problem Solving",
    color: "#FFA116",
  },
  {
    name: "GitHub",
    platform: "GitHub",
    username: "yumnashujauddin-a20y",
    url: "https://github.com/yumnashujauddin-a20y",
    focus: "Open-Source Codebases & ML Repositories",
    description: "Hosting Python data science pipelines, frontend web applications, interactive student interfaces, and machine learning model training scripts.",
    statHighlight: "Repositories",
    statLabel: "Code & Projects",
    color: "#94A3B8",
  },
  {
    name: "LinkedIn",
    platform: "LinkedIn",
    username: "yumna-shujauddin-50675a335",
    url: "https://www.linkedin.com/in/yumna-shujauddin-50675a335",
    focus: "Professional Network & Technical Insights",
    description: "Sharing technical development milestones, hackathon achievements, certifications, and collaboration updates with the engineering community.",
    statHighlight: "500+ Conn.",
    statLabel: "Tech Network",
    color: "#0A66C2",
  },
  {
    name: "HackerRank",
    platform: "HackerRank",
    username: "9801yumna",
    url: "https://www.hackerrank.com/profile/9801yumna",
    focus: "Python Mastery & Fundamental Algorithms",
    description: "Practicing Python language proficiency, functional programming, data manipulation, and object-oriented paradigms.",
    statHighlight: "Verified",
    statLabel: "Python Skills Track",
    color: "#00EA64",
  },
  {
    name: "CodeChef",
    platform: "CodeChef",
    username: "yumna_9801",
    url: "https://www.codechef.com/users/yumna_9801",
    focus: "Competitive Contest Programming",
    description: "Participating in timed coding contests, honing time-complexity optimization, fast input/output parsing, and edge-case handling.",
    statHighlight: "Contests",
    statLabel: "Competitive Practice",
    color: "#8B5CF6",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ml-predictive-suite",
    title: "Machine Learning Predictive & Classification Suite",
    subtitle: "End-to-end model training, feature selection, evaluation, and inference",
    category: "AI & ML",
    date: "Jun 2026 – Present",
    timeline: "Ongoing",
    description: "Engineered Python machine learning models using Scikit-learn for classification and regression tasks, implementing automated data preprocessing, feature selection, and confusion matrix evaluation.",
    longDescription: "Developed machine learning pipelines in Python to solve classification and regression problems. Implemented end-to-end workflows including missing-value imputation, categorical encoding, standardization, hyperparameter tuning via GridSearchCV, and rigorous evaluation using ROC-AUC curves, precision-recall metrics, and confusion matrices.",
    highlights: [
      "Trained classification and regression pipelines with Scikit-learn, achieving high precision and robust F1 scores across baseline datasets.",
      "Conducted automated feature scaling, variance thresholding, and correlation analysis.",
      "Designed visual diagnostic plots including confusion matrices and feature importance rankings using Matplotlib & Seaborn.",
      "Optimized model inference time and prevented data leakage using Scikit-learn Pipeline architecture."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: "/project_ml_suite_1792090597827.jpg",
    githubUrl: "https://github.com/yumnashujauddin-a20y",
    featured: true,
    codeSnippet: {
      language: "python",
      title: "pipeline_training.py",
      code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix

def train_predictive_pipeline(X, y):
    # Split with stratified sampling to preserve class proportions
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
    ])
    
    pipeline.fit(X_train, y_train)
    y_pred = pipeline.predict(X_test)
    
    return {
        'report': classification_report(y_test, y_pred, output_dict=True),
        'matrix': confusion_matrix(y_test, y_pred)
    }`
    }
  },
  {
    id: "data-science-eda-engine",
    title: "Python Data Science & Exploratory Data Analysis Engine",
    subtitle: "Automated statistical analysis, distribution modeling, and insight extraction",
    category: "Data Science",
    date: "Jan 2026 – Present",
    timeline: "Completed",
    description: "Developed comprehensive Python data science workflows performing exploratory data analysis (EDA), cleaning raw unstructured datasets, and deriving actionable visual insights.",
    longDescription: "A structured data science repository focusing on systematic data hygiene and exploratory analysis. Includes scripts for detecting multivariate anomalies, handling skewness with logarithmic transformations, computing Pearson & Spearman correlation matrices, and outputting executive visual summaries.",
    highlights: [
      "Engineered automated data cleaning routines handling missing records, outliers, and type conversions across tabular datasets.",
      "Identified trends and distribution anomalies through comparative box plots and pair plots.",
      "Employed Pandas vectorized operations for sub-second dataset manipulations on multi-thousand row datasets.",
      "Delivered clean visual storytelling reports empowering data-driven decisions."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    image: "/image.jpg",
    githubUrl: "https://github.com/yumnashujauddin-a20y",
    featured: true,
    codeSnippet: {
      language: "python",
      title: "eda_profiler.py",
      code: `import pandas as pd
import numpy as np

def clean_and_profile_data(df: pd.DataFrame) -> dict:
    # 1. Clean missing numerical records with median strategy
    num_cols = df.select_dtypes(include=[np.number]).columns
    df[num_cols] = df[num_cols].fillna(df[num_cols].median())
    
    # 2. Outlier detection using IQR
    q25, q75 = df[num_cols].quantile(0.25), df[num_cols].quantile(0.75)
    iqr = q75 - q25
    outliers = ((df[num_cols] < (q25 - 1.5 * iqr)) | (df[num_cols] > (q75 + 1.5 * iqr))).sum()
    
    # 3. Correlation matrix
    corr = df[num_cols].corr(method='pearson')
    return {"outliers_detected": outliers.to_dict(), "correlation": corr}`
    }
  },
  {
    id: "foodiehub-restaurant-platform",
    title: "FoodieHub – Culinary & Restaurant Web Application",
    subtitle: "Responsive dining platform with dynamic menu ordering and interactive cart",
    category: "Full Stack",
    date: "Nov 2025",
    timeline: "Completed",
    description: "Created a responsive culinary web platform featuring intuitive menu filtering, dish showcases, real-time cart computation, and smooth mobile navigation.",
    longDescription: "A modern culinary web application crafted with semantic HTML5, modular CSS3, and vanilla JavaScript. Designed for high visual appeal, seamless mobile responsiveness, categorized menu exploration (Artisan Burgers, Pastas, Gourmet Specials), real-time order subtotal calculation with dynamic taxes, and quick delivery notes.",
    highlights: [
      "Implemented categorized interactive menu filtering with immediate client-side rendering.",
      "Built dynamic shopping cart with add, remove, quantity update, and tax estimation features.",
      "Engineered smooth mobile drawer navigation and touch-friendly interactive touchpoints.",
      "Zero dependencies on heavy frameworks: pure performant JavaScript DOM manipulation."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    image: "/project_foodiehub_1792090598178.jpg",
    githubUrl: "https://github.com/yumnashujauddin-a20y",
    featured: true,
    codeSnippet: {
      language: "javascript",
      title: "cart_controller.js",
      code: `class FoodieCart {
  constructor() {
    this.items = new Map();
    this.taxRate = 0.08;
  }

  addItem(dish) {
    const existing = this.items.get(dish.id) || { ...dish, quantity: 0 };
    existing.quantity += 1;
    this.items.set(dish.id, existing);
    this.render();
  }

  calculateTotals() {
    let subtotal = 0;
    for (const item of this.items.values()) {
      subtotal += item.price * item.quantity;
    }
    const taxes = subtotal * this.taxRate;
    return { subtotal, taxes, total: subtotal + taxes };
  }
}`
    }
  },
  {
    id: "student-profile-glassmorphism",
    title: "Student Profile Card & Glassmorphism UI",
    subtitle: "Modern translucent interface with dynamic metrics and interactive tabs",
    category: "Full Stack",
    date: "Jun 2025",
    timeline: "Completed",
    description: "Designed a responsive student profile card using modern CSS glassmorphism styling, backdrop filters, interactive tabs, and fluid micro-interactions.",
    longDescription: "An exploration into advanced CSS visual properties including backdrop-filter blur, translucent borders with subtle linear gradients, multi-tab achievement views, and mobile-friendly touch buttons. Tested across modern browsers for consistent aesthetic fidelity.",
    highlights: [
      "Crafted custom CSS glassmorphism effect using backdrop-filter: blur(16px) with accessible contrast.",
      "Integrated interactive tabs for switching between Academic Stats, Skill Progress, and Projects.",
      "Optimized layout for both desktop widescreen and mobile handheld viewports.",
      "Implemented smooth keyboard accessibility and focus indicator states."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Glassmorphism", "Micro-Interactions"],
    image: "/project_student_card_1792090598429.jpg",
    githubUrl: "https://github.com/yumnashujauddin-a20y",
    featured: false,
    codeSnippet: {
      language: "css",
      title: "glass_card.css",
      code: `.glass-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.2s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.3);
}`
    }
  },
  {
    id: "codsoft-internship-suite",
    title: "CodSoft Practical Software & AI Development",
    subtitle: "Hands-on implementation of algorithmic utilities and application modules",
    category: "AI & ML",
    date: "Jul 2025 – Present",
    timeline: "Completed",
    description: "Completed real-world software engineering assignments during internship with CodSoft, implementing data pipelines, interactive utilities, and problem-solving modules.",
    longDescription: "Engaged in hands-on practical software development with CodSoft. Built practical Python applications and algorithmic problem solvers, following industry standard clean code guidelines, Git version control, and modular structure.",
    highlights: [
      "Delivered production-ready Python utility scripts and data handling modules.",
      "Followed modular Object-Oriented design patterns for easy testing and extensibility.",
      "Strengthened practical problem-solving under real-world constraints and deadlines.",
      "Collaborated using Git branch workflows and structured pull requests."
    ],
    technologies: ["Python", "Algorithms", "Object-Oriented Programming", "Git", "Clean Code"],
    image: "/yumna.jpg",
    githubUrl: "https://github.com/yumnashujauddin-a20y",
    featured: false,
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-python-cambridge",
    title: "Basics of Python",
    issuer: "UniAthena (in partnership with Cambridge International Qualifications, UK)",
    date: "Dec 2025",
    category: "Certification",
    description: "Comprehensive qualification covering Python syntax, data structures, control flow, functional programming, file I/O, and error handling with international accreditation.",
    badge: "Accredited UK CIQ",
  },
  {
    id: "cert-c-programming",
    title: "C Programming Language",
    issuer: "CSP (Cambridge Studies Program)",
    date: "Dec 2025",
    category: "Certification",
    description: "Certification covering low-level memory management, pointers, dynamic memory allocation (malloc/free), structs, and foundational computational architecture.",
    badge: "Core Systems",
  },
  {
    id: "cert-hackathon-techclasher",
    title: "Techclasher Hackathon 2025",
    issuer: "Greater Noida Institute of Technology (GNIOT)",
    date: "Oct 2025",
    category: "Hackathon",
    description: "Certificate of Participation in a highly competitive inter-college hackathon, collaborating on rapid prototyping, innovative problem statements, and real-time software presentation.",
    badge: "Hackathon Competitor",
  },
  {
    id: "cert-tata-crucible",
    title: "TATA Crucible Campus Quiz 2025",
    issuer: "Unstop & Tata Group",
    date: "Nov 2025",
    category: "Competition",
    description: "Prestigious national campus business & technology quiz competition organized by Tata Group and Unstop, testing business acumen, tech innovation, and analytical speed.",
    badge: "National Finalist Track",
  },
  {
    id: "cert-unstop-rank-89",
    title: "Unstop Daily Quiz (October Series) – 89th Rank",
    issuer: "Unstop",
    date: "Oct 2025",
    category: "Award",
    description: "Achieved Top 89th Rank out of thousands of participating engineering students nationally, proving sharp analytical acumen, algorithmic reasoning, and consistent problem solving.",
    badge: "National Rank 89",
  },
  {
    id: "cert-unstop-excellence",
    title: "Certificate of Excellence – Unstop Daily Quiz",
    issuer: "Unstop",
    date: "Oct 2025",
    category: "Award",
    description: "Honored with Certificate of Excellence for achieving 396th rank in the highly competitive October Series, showing continuous dedication to daily technical challenges.",
    badge: "Excellence Honor",
  }
];

export const SKILL_GROUPS = [
  {
    name: "AI & Machine Learning",
    description: "Building predictive systems, feature engineering, and evaluating model accuracy",
    skills: [
      { name: "Python", level: "Advanced", desc: "Core language for ML, scripting, and backend automation" },
      { name: "Scikit-Learn", level: "Proficient", desc: "Classification, regression, cross-validation, pipelines" },
      { name: "Pandas & NumPy", level: "Advanced", desc: "Data wrangling, matrix manipulation, tabular cleaning" },
      { name: "Data Science & EDA", level: "Proficient", desc: "Exploratory analysis, correlation matrices, anomaly spotting" },
      { name: "Matplotlib & Seaborn", level: "Proficient", desc: "Statistical visualization, confusion matrices, trend plots" },
      { name: "Model Evaluation", level: "Proficient", desc: "Accuracy, Precision, Recall, F1-Score, ROC-AUC, RMSE" },
    ]
  },
  {
    name: "Web & Frontend Engineering",
    description: "Crafting modern, accessible, responsive user interfaces and applications",
    skills: [
      { name: "HTML5 & Semantic Web", level: "Advanced", desc: "Accessible markup, SEO structure, rich media standards" },
      { name: "CSS3 & Tailwind CSS", level: "Advanced", desc: "Modern layouts, glassmorphism, flexbox, grid, animations" },
      { name: "JavaScript (ES6+)", level: "Proficient", desc: "Asynchronous programming, DOM manipulation, state patterns" },
      { name: "React & TypeScript", level: "Working Knowledge", desc: "Component architecture, typed state management, hooks" },
      { name: "Responsive UI/UX", level: "Advanced", desc: "Mobile-first viewports, clean hierarchy, zero-pill aesthetic" },
    ]
  },
  {
    name: "Core Computer Science",
    description: "Solid theoretical fundamentals, algorithms, and software development lifecycle",
    skills: [
      { name: "Data Structures & Algorithms", level: "Proficient", desc: "Arrays, linked lists, trees, graphs, sorting & search" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", desc: "Inheritance, encapsulation, polymorphism, abstraction" },
      { name: "C Programming Language", level: "Proficient", desc: "Low-level pointers, memory layout, system fundamentals" },
      { name: "Relational SQL Basics", level: "Intermediate", desc: "Relational queries, joins, filtering, schema basics" },
      { name: "Software Development Life Cycle (SDLC)", level: "Proficient", desc: "Agile iterations, requirement analysis, testing" },
    ]
  },
  {
    name: "Tools & Professional Practices",
    description: "Industry-standard developer workflows, version control, and collaboration",
    skills: [
      { name: "Git & GitHub", level: "Proficient", desc: "Version control, branching, PRs, repository management" },
      { name: "VS Code & Jupyter Notebooks", level: "Advanced", desc: "Development environment, interactive experimentation" },
      { name: "Problem Solving Platforms", level: "Active", desc: "LeetCode, CodeChef, HackerRank daily practice" },
      { name: "Team Collaboration", level: "Strong", desc: "Hackathon teamwork, documentation, clear communication" },
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Babu Banarasi Das (BBD) University",
  location: "Lucknow, Uttar Pradesh, India",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science & Engineering (Artificial Intelligence)",
  duration: "August 2024 – June 2028",
  status: "Undergraduate (Current)",
  gpa: "9.05 / 10.00",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming with Python and C",
    "Artificial Intelligence Fundamentals",
    "Discrete Mathematics & Computational Logic",
    "Database Management Systems",
    "Computer Organization & Architecture"
  ],
  academicHighlights: [
    "Consistently maintained an outstanding 9.05 / 10 CGPA.",
    "Active participant in technical symposiums, hackathons, and collegiate coding contests.",
    "Pursuing specialized curriculum blending foundational computer science with cutting-edge artificial intelligence and statistical learning."
  ]
};
