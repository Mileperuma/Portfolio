import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Matheesha Ileperuma',
  initials: 'MI',
  role: 'AI Developer & Machine Learning Engineer',
  location: 'Melbourne, Australia',
  institution: 'Swinburne University of Technology',
  degree: 'B.Comp.Sc. (Artificial Intelligence)',
  graduatingYear: '2025',
  tagline: 'Training models, not opinions.',
  bio1: "I'm Matheesha Ileperuma, a final-year Computer Science (AI) student at Swinburne University of Technology, Melbourne. I design and build AI systems that actually ship — offline LLMs for remote communities, production-grade recommendation engines with full CI/CD pipelines, and ML classifiers deployed behind real APIs.",
  bio2: "My work spans RAG pipelines, fine-tuned language models, full-stack web applications, and robust backend microservices. When I'm not training models, I'm chasing down rare JDM parts or digging through vintage vinyl crates.",
  bio3: "Currently looking for grad roles and AI/ML engineering internships — Melbourne-based or remote.",
  email: 'mileperuma@yahoo.com',
  github: 'https://github.com/Mileperuma',
  githubHandle: 'Mileperuma',
  linkedin: 'https://www.linkedin.com/in/matheesha-ileperuma',
  status: 'Open to Grad Roles & Internships 2025',
  stats: [
    { label: 'Models & Architectures', value: '14+' },
    { label: 'Production CI/CD Pipelines', value: '100%' },
    { label: 'Test Accuracy (Finance ML)', value: '100%' },
    { label: 'Offline RAG Availability', value: '0-Lag' },
  ],
  interests: [
    'Deep Learning',
    'RAG Architectures',
    'Vector Search',
    'JDM Car Enthusiast',
    'Vinyl Record Collecting',
    'Distributed Systems',
    'CI/CD Gatekeeping'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'luminary',
    number: '01 / 06',
    title: 'Luminary',
    subtitle: 'Cross-Media Conversational Recommendation Engine',
    category: 'featured',
    categoryLabel: 'Featured & Full-Stack',
    badge: 'Active · Fully Deployed',
    featured: true,
    shortDesc: 'AI-powered cross-media recommendation engine. Learns your taste through a conversational onboarding chatbot, then surfaces one personalised pick per media type — books, films, articles — with LLM-written explanations and cross-media linking.',
    fullDesc: 'Luminary tackles cross-domain taste synthesis. Through an interactive conversational onboarding assistant, it profiles user thematic preferences and maps embeddings into high-dimensional vector space using PostgreSQL with pgvector. It queries multi-source catalogue adapters (Google Books, TMDb, The Guardian, YouTube) and utilizes Claude 3.5 Sonnet and GPT-4o-mini to compose contextual synthetic explanations that explain why a film recommendation shares tonal DNA with a book you loved.',
    architecture: 'Vite + Tailwind frontend on Vercel ➔ FastAPI + SQLModel backend on Render ➔ PostgreSQL 16 with pgvector for semantic search ➔ Catalogue adapters: Google Books, TMDb, Guardian, YouTube ➔ JWT auth, offline demo mode, returning-user memory via LLM context injection.',
    status: '5 Sprints Complete: Onboarding chatbot · Recommendation engine · Cross-media linking · Feedback system (love / dislike / save / skip) · Full CI pipeline with lint, tests, and build gates blocking main.',
    keyMetrics: [
      { label: 'Vector Index', value: 'pgvector 1536-dim' },
      { label: 'Latency P95', value: '< 280ms' },
      { label: 'Media Sources', value: '4 Major APIs' },
      { label: 'CI/CD Pass Rate', value: '100% Gates' }
    ],
    tags: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'FastAPI',
      'PostgreSQL 16 + pgvector',
      'Claude Sonnet',
      'GPT-4o-mini',
      'Docker',
      'GitHub Actions',
      'Vercel & Render'
    ],
    githubUrl: 'https://github.com/Mileperuma',
    highlights: [
      'Engineered sub-300ms vector similarity lookup over cross-media catalogues using pgvector HNSW index.',
      'Implemented automated multi-stage GitHub Actions CI/CD with strict linting, pytest suites, and preview environment builds.',
      'Built conversational taste profiling system dynamically constructing user latent interest embeddings.'
    ]
  },
  {
    id: 'tek-climate',
    number: '02 / 06',
    title: 'TEK Climate System',
    subtitle: 'Offline Indigenous Ecological Knowledge RAG Assistant',
    category: 'ai-llm',
    categoryLabel: 'AI & LLM / RAG',
    badge: 'Capstone · University Lead',
    featured: false,
    shortDesc: 'Offline LLM chatbot preserving traditional ecological knowledge for an indigenous community in Bangladesh. Runs entirely on local hardware — zero internet dependency.',
    fullDesc: 'Developed as a university capstone project, TEK Climate System preserves sacred indigenous agricultural and ecological knowledge. Operating in remote regions without cellular or internet infrastructure, the entire pipeline runs locally on edge devices. Designed a quantized local RAG architecture using ChromaDB and all-MiniLM-L6-v2 embeddings paired with local Phi-4 14B and Mistral 7B via Ollama.',
    architecture: 'Local Edge Machine ➔ ChromaDB Vector Store (all-MiniLM-L6-v2) ➔ Ollama Local Model Runtime (Phi-4 14B / Mistral 7B) ➔ Flask API ➔ SQLite local persistence ➔ Containerized with Docker.',
    status: 'Delivered & Evaluated: Evaluated latency/accuracy trade-offs between Mistral 7B and Phi-4 14B; completed sprint documentation and live client demos for indigenous community representatives.',
    keyMetrics: [
      { label: 'Internet Needed', value: '0 kb/s (Offline)' },
      { label: 'Model Core', value: 'Phi-4 14B' },
      { label: 'Embedding', value: 'MiniLM-L6-v2' },
      { label: 'Retrieval Top-K', value: 'K=4 Semantic' }
    ],
    tags: [
      'Phi-4 14B',
      'Ollama',
      'RAG',
      'ChromaDB',
      'all-MiniLM-L6-v2',
      'Flask',
      'Docker',
      'SQLite',
      'Python'
    ],
    githubUrl: 'https://github.com/Mileperuma',
    highlights: [
      'Architected 100% offline RAG retrieval system running on standard consumer hardware with zero telemetry or cloud dependency.',
      'Benchmarked quantized Mistral 7B vs. Phi-4 14B across multilingual query understanding and ecological hallucination rates.',
      'Authored comprehensive technical documentation, edge deployment manuals, and led stakeholder demo sessions.'
    ]
  },
  {
    id: 'shopwise-ai',
    number: '03 / 06',
    title: 'ShopWise AI',
    subtitle: 'Content-Based Product Recommender Engine',
    category: 'ml-dl',
    categoryLabel: 'Machine Learning',
    badge: 'Scikit-Learn ML',
    featured: false,
    shortDesc: 'Content-based product recommender across 125 products in 14 categories. Builds a TF-IDF matrix from combined product features, computes cosine similarity, and explains each suggestion.',
    fullDesc: 'ShopWise AI implements a transparent, interpretable recommender engine. It parses textual specifications, brand metadata, and product descriptions across 125 catalog items, builds a high-dimensional TF-IDF feature matrix, and computes vectorized cosine similarity scores in real-time with plain-English rationales.',
    architecture: 'Vanilla JS Frontend ➔ Flask REST API ➔ scikit-learn TF-IDF Vectorizer ➔ Cosine Similarity Matrix Engine ➔ Feature weight attribution generator.',
    status: 'Completed & Open Source: Tested across 14 distinct product categories with instant sub-20ms recommendation generation.',
    keyMetrics: [
      { label: 'Categories', value: '14 Domains' },
      { label: 'Items Catalog', value: '125 Items' },
      { label: 'Compute Speed', value: '< 15ms' },
      { label: 'Method', value: 'TF-IDF + CosSim' }
    ],
    tags: [
      'Python',
      'Flask',
      'scikit-learn',
      'TF-IDF',
      'Cosine Similarity',
      'Vanilla JS',
      'NumPy'
    ],
    githubUrl: 'https://github.com/Mileperuma/smart-product-recommender',
    highlights: [
      'Vectorized text feature extraction pipeline combining title, specifications, and category tags.',
      'Real-time Cosine Similarity computation delivering immediate ranked recommendation lists.',
      'Generated transparent feature-match explanations indicating exact keyword affinities.'
    ]
  },
  {
    id: 'finance-categoriser',
    number: '04 / 06',
    title: 'Personal Finance Categoriser',
    subtitle: 'Bank Transaction NLP Classifier & Analytics',
    category: 'ml-dl',
    categoryLabel: 'Machine Learning',
    badge: '100% Test Accuracy',
    featured: false,
    shortDesc: 'Upload a CSV of bank transactions ➔ ML classifies spending categories ➔ interactive Recharts dashboard. User corrections feed back into active retraining.',
    fullDesc: 'An intelligent financial transaction categorizer. Users upload unstructured bank export CSVs, and an NLP pipeline extracts merchant tokens and description patterns to classify expenses into budget categories. Integrated active learning feedback allows user adjustments to immediately refine model weights.',
    architecture: 'React 18 + Vite + Recharts ➔ FastAPI Backend ➔ Multinomial Naive Bayes + TF-IDF pipeline ➔ SQLite storage ➔ Feedback loop re-trainer.',
    status: 'Validated on 1,600 labelled real-world transactions with 100% test accuracy on canonical validation splits.',
    keyMetrics: [
      { label: 'Training Data', value: '1,600 Rows' },
      { label: 'Test Accuracy', value: '100%' },
      { label: 'Classifier', value: 'Naive Bayes' },
      { label: 'Analytics', value: 'Recharts UI' }
    ],
    tags: [
      'React 18',
      'Vite',
      'FastAPI',
      'Naive Bayes',
      'TF-IDF',
      'Recharts',
      'SQLite',
      'Python'
    ],
    githubUrl: 'https://github.com/Mileperuma',
    highlights: [
      'Trained and evaluated Multinomial Naive Bayes model with n-gram tokenization achieving 100% validation accuracy.',
      'Engineered interactive financial analytics dashboard with monthly breakdown charts and trend lines in Recharts.',
      'Designed active-learning human-in-the-loop retraining mechanism for anomalous merchant strings.'
    ]
  },
  {
    id: 'stock-prediction',
    number: '05 / 06',
    title: 'Stock Price Prediction',
    subtitle: 'AAPL Time Series Deep Ensemble (LSTM / GRU / ARIMA)',
    category: 'ml-dl',
    categoryLabel: 'Deep Learning & Stats',
    badge: 'R² = 0.965',
    featured: false,
    shortDesc: 'AAPL forecasting with LSTM, GRU, SimpleRNN, and an ARIMA ensemble built across 7 checkpoints of increasing complexity. Best model: Bidirectional GRU.',
    fullDesc: 'Comprehensive quantitative time-series research project analyzing multi-year Apple Inc. (AAPL) equities data. Explored sequential recurrent neural architectures against classical statistical models. Built 7 progressive iterations from SimpleRNN to Stacked LSTM, Bidirectional GRU (2 layers, 128 units), and statistical ARIMA(5,1,0) hybrid blends.',
    architecture: 'yfinance ingestion ➔ scikit-learn MinMax scaling & window slicing ➔ TensorFlow/Keras (Stacked LSTM, Bi-GRU) + statsmodels (ARIMA) ➔ Matplotlib visualization & 5-day multistep forecast engine.',
    status: 'Benchmarked across 7 iterative checkpoints; Bidirectional GRU achieved top validation score with R² = 0.965.',
    keyMetrics: [
      { label: 'Baseline R²', value: '0.9650' },
      { label: 'Best Model', value: 'Bi-GRU (2x128)' },
      { label: 'Checkpoints', value: '7 Iterations' },
      { label: 'Multi-Step', value: '5-Day Horizon' }
    ],
    tags: [
      'TensorFlow / Keras',
      'LSTM · GRU',
      'ARIMA',
      'statsmodels',
      'yfinance',
      'scikit-learn',
      'Python',
      'NumPy'
    ],
    githubUrl: 'https://github.com/Mileperuma',
    highlights: [
      'Systematically evaluated Recurrent Neural Architectures (SimpleRNN vs. LSTM vs. Bidirectional GRU) against ARIMA statistical baselines.',
      'Created multi-step lookahead horizon generator predicting 5 trading days into the future.',
      'Conducted rigorous stationary analysis (Augmented Dickey-Fuller tests) and rolling window cross-validation.'
    ]
  },
  {
    id: 'ai4cyber',
    number: '06 / 06',
    title: 'AI4Cyber',
    subtitle: 'Machine Learning for Spam & Malware PE Header Detection',
    category: 'cyber-nlp',
    categoryLabel: 'Cybersecurity & ML',
    badge: 'Applied Security',
    featured: false,
    shortDesc: 'ML applied to cybersecurity: spam detection (TF-IDF + Logistic Regression / Naive Bayes / Linear SVM) and malware detection (PE header features + Random Forest).',
    fullDesc: 'Dual-domain machine learning security suite. Part 1 implements high-throughput textual spam detection comparing Logistic Regression, Multinomial Naive Bayes, and Linear Support Vector Machines. Part 2 parses Windows Portable Executable (PE) binary header metadata to classify zero-day malware variants using an ensemble Random Forest classifier.',
    architecture: 'Python data pipeline ➔ PE header parsing (pefile) ➔ Scikit-learn Random Forest & SVM models ➔ Joblib serialization ➔ Exploratory Data Analysis & WordCloud generators.',
    status: 'Complete: Comprehensive EDA reports generated including feature importance rankings, ROC curves, and cross-model confusion matrices.',
    keyMetrics: [
      { label: 'Spam Models', value: 'LogReg / SVM / NB' },
      { label: 'Malware Ensemble', value: 'Random Forest' },
      { label: 'Features Extracted', value: '54 PE Fields' },
      { label: 'Export Tooling', value: 'Joblib & Matplotlib' }
    ],
    tags: [
      'Python',
      'scikit-learn',
      'Random Forest',
      'SVM',
      'WordCloud',
      'matplotlib',
      'joblib',
      'PE Headers'
    ],
    githubUrl: 'https://github.com/Mileperuma',
    highlights: [
      'Extracted raw Portable Executable structural attributes (sections, entropy, imports) for binary malware classification.',
      'Compared multiple classification kernels (Linear SVM vs. Tree Ensembles) with detailed confusion matrix analysis.',
      'Serialized model weights with joblib for seamless integration into real-time security endpoint scanners.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'AI & LLM Systems',
    iconName: 'Cpu',
    color: '#c9a84c',
    skills: [
      { name: 'PyTorch & TensorFlow', level: 90, note: 'Deep learning & neural networks' },
      { name: 'LangChain & RAG Pipelines', level: 92, note: 'Context retrieval & vector search' },
      { name: 'Ollama & Local LLMs', level: 88, note: 'Phi-4 14B, Mistral 7B edge deployment' },
      { name: 'Anthropic Claude & OpenAI APIs', level: 94, note: 'Prompt engineering & tool calling' },
      { name: 'pgvector & ChromaDB', level: 90, note: 'Embedding indices & vector similarity' },
      { name: 'Hugging Face Transformers', level: 85, note: 'Tokenizers, embeddings & fine-tuning' }
    ]
  },
  {
    name: 'Machine Learning',
    iconName: 'Brain',
    color: '#e2be68',
    skills: [
      { name: 'scikit-learn & NumPy/Pandas', level: 95, note: 'EDA, feature engineering & pipelines' },
      { name: 'LSTM, GRU & Sequential RNNs', level: 88, note: 'Time-series forecasting' },
      { name: 'ARIMA & Statistical Modeling', level: 84, note: 'Stationarity, statsmodels' },
      { name: 'TF-IDF & Cosine Similarity', level: 92, note: 'NLP vectorization & recommenders' },
      { name: 'Naive Bayes, SVM & Random Forest', level: 90, note: 'Text & tabular classification' }
    ]
  },
  {
    name: 'Backend & Data',
    iconName: 'Server',
    color: '#c9a84c',
    skills: [
      { name: 'Python (FastAPI & Flask)', level: 94, note: 'Asynchronous APIs, Uvicorn' },
      { name: 'PostgreSQL 16 & SQLModel', level: 88, note: 'Relational & vector databases' },
      { name: 'SQLite & ORMs', level: 90, note: 'Local edge caching' },
      { name: 'JWT Authentication & Security', level: 86, note: 'Role-based access & auth' },
      { name: 'REST & Microservice Architecture', level: 90, note: 'Decoupled API endpoints' }
    ]
  },
  {
    name: 'Frontend & UI Engineering',
    iconName: 'Layout',
    color: '#e2be68',
    skills: [
      { name: 'React 18 & TypeScript', level: 90, note: 'Modern hooks, state & type safety' },
      { name: 'Vite & Modern Tooling', level: 92, note: 'Optimized bundler workflows' },
      { name: 'Tailwind CSS & Motion/React', level: 94, note: 'Responsive design & fluid physics' },
      { name: 'Recharts & Data Visualization', level: 88, note: 'Interactive dashboard analytics' },
      { name: 'Vanilla JavaScript & DOM', level: 92, note: 'Core browser APIs & performance' }
    ]
  },
  {
    name: 'DevOps, Tools & Infrastructure',
    iconName: 'Terminal',
    color: '#c9a84c',
    skills: [
      { name: 'Git & GitHub Workflows', level: 94, note: 'Branching, PRs & code reviews' },
      { name: 'Docker & Containerization', level: 88, note: 'Multi-stage Dockerfiles' },
      { name: 'GitHub Actions CI/CD', level: 90, note: 'Automated test gates & deployments' },
      { name: 'Linux / Bash Scripting', level: 88, note: 'Server management & automation' },
      { name: 'Vercel & Render Cloud', level: 92, note: 'Production hosting & environment ops' }
    ]
  }
];
