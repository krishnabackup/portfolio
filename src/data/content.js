import skillFlowImage from "../assets/projects/image.png"

export const profile = {
  name: 'Krishna Darsh E K',
  initials: 'KD',
  role: 'Full Stack Developer • AI/ML Engineer',
  location: 'Kozhikode, Kerala, India',
  statusLine: 'Open to full-stack and AI/ML opportunities',
  email: 'krishnadek2002@gmail.com',
  phone: '+91 7902388445',
  resumeUrl: '#',
  socials: [
    { label: 'GH', name: 'GitHub', url: 'https://github.com/krishnadarsh' },
    { label: 'in', name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishna-darsh-e-k' },
    { label: 'X', name: 'X / Twitter', url: '#' },
  ],
}

export const heroTerminalLines = [
  'const developer = {',
  "  name: 'Krishna Darsh E K',",
  "  role: 'Full Stack Developer • AI/ML Engineer',",
  "  stack: ['React', 'Node.js', 'Python', 'LLM APIs'],",
  "  location: 'Kozhikode, IN',",
  "  available: true",
  '};',
]

export const heroHeadlineLines = [
  'I build full-stack,',
  'AI-powered products',
  'that solve real problems.',
]

export const heroLead =
  'Full-stack developer with AI/ML specialization, building reliable web applications, intelligent workflows, and impactful data-driven solutions from frontend to backend to model integration.'

export const heroKeyStack = ['React', 'Node.js', 'Python', 'LLM APIs', 'PostgreSQL', 'MongoDB', 'AI/ML']

export const highlights = [
  {
    icon: 'Zap',
    title: 'Builds end-to-end products',
    description:
      'Takes features from user flows and API design through deployment, performance tuning, and reliable delivery across the stack.',
  },
  {
    icon: 'Layers',
    title: 'Blends full-stack and AI/ML thinking',
    description:
      'Works comfortably across frontend, backend, databases, and model-driven features to create practical, production-ready solutions.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Clear communicator and fast learner',
    description:
      'Explains technical decisions clearly, collaborates with cross-functional teams, and adapts quickly to new tools, frameworks, and problem spaces.',
  },
]

export const about = {
  paragraphs: [
    'I am a full-stack developer and AI/ML engineer with a Master of Computer Applications specialization in Artificial Intelligence and Machine Learning. My work spans modern web application development, intelligent automation, and data-driven product engineering.',
    'I enjoy building complete solutions that combine user-facing interfaces, backend systems, and AI capabilities. From React and Node.js applications to machine learning workflows and LLM-integrated features, I focus on delivering practical products that are scalable, maintainable, and useful in the real world.',
  ],
  stats: [
    { value: '2+', label: 'years of hands-on experience' },
    { value: '8+', label: 'AI / ML and full-stack projects' },
    { value: '3', label: 'core domains delivered' },
  ],
}

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  {
    title: 'Frontend',
    items: ['React', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  { title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'PostgreSQL', 'MongoDB'] },
  {
    title: 'AI / ML',
    items: ['Machine Learning', 'Deep Learning', 'CNN', 'scikit-learn', 'NumPy', 'Pandas', 'Model Evaluation'],
  },
  { title: 'Generative AI', items: ['LLM Integration', 'Google Gemini API', 'Prompt Engineering', 'AI Applications'] },
  { title: 'Data Analysis', items: ['Data Cleaning', 'Exploratory Analysis', 'Visualization', 'Matplotlib', 'Seaborn'] },
  { title: 'Tools & Cloud', items: ['Git', 'GitHub', 'Docker', 'Linux', 'GCP'] },
]

export const projects = [
  {
    featured: true,
    name: 'SkillFlow | MERN Stack | React, Node.js, MongoDB, Tailwind CSS, Gemini AI',
    description:
      'Built a responsive learning platform using React, Node.js, MongoDB, Tailwind CSS, and Zustand with JWT authentication and role-based learning workflows. Developed reusable dashboard, roadmap, course and quiz components with a paginated data view and REST API integration. Implemented YouTube learning progress tracking and certificate previews using browser Blob APIs. Integrated Google Gemini to generate personalized learning roadmaps and adaptive quizzes.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Gemini AI'],
    image: skillFlowImage,
    demoUrl: 'https://skill-flow-tau.vercel.app/',
    codeUrl: 'https://github.com/krishnadarsh/SkillFlow.git',
    mockup: 'chart',
  },
  {
    name: 'Keralam — AI-Powered Citizen Platform',
    description:
      'Developed an AI-powered civic platform for government scheme discovery, complaint management, disaster alerts, and citizen assistance. The platform combines recommendation logic, AI-powered assistance, and multilingual support to improve citizen experience and access to public services.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'LLM'],
    demoUrl: '#',
    codeUrl: 'https://github.com/krishnadarsh/Keralam.git',
    mockup: 'lines',
  },
  {
    name: 'Pneumonia Prediction from Chest X-Rays',
    description:
      'Developed a deep learning image classification model using Python and TensorFlow to detect pneumonia from chest X-ray images. Performed data validation, exploratory analysis, preprocessing, and model evaluation to improve prediction accuracy.',
    tags: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow'],
    demoUrl: '#',
    codeUrl: 'https://github.com/krishnadarsh/Heart-Disease-Prediction-using-ML.git',
    mockup: 'bars',
  },
]

export const experience = [
  {
    period: 'Feb 2026 — May 2026',
    role: 'Full Stack Developer Intern (Technical Lead) | UPTOSKILLS',
    description:
      'Promoted to Technical Lead after leading a team to end-to-end product development across frontend, backend, and data workflows. Built a full-stack learning platform with React, Node.js, MongoDB, and REST API integrations. Managed 10 backend developer interns, coordinated sprint execution, and streamlined delivery for the product roadmap.',
  },
  {
    period: 'Jan 2026 — May 2026',
    role: 'AI/ML Intern | Ad Infocom Systems',
    description:
      'Completed an internship in Artificial Intelligence and Machine Learning, applying Python-based data analysis, model training, and evaluation methods to real project tasks. Gained hands-on exposure to machine learning and deep learning workflows through experimentation, dataset preparation, and practical model implementation.',
  },
  {
    period: 'June 2023 — June 2024',
    role: 'Infrastructure Management Associate | Accenture Inc.',
    description:
      'Improved deployment efficiency by 20% by automating scripts on JBoss/Apache Tomcat across 50+ production servers. Collaborated across Linux, Windows, and cloud infrastructure teams to diagnose issues, maintain service availability, and strengthen troubleshooting across full-stack CI/CD environments. Performed log analysis and root cause analysis using Linux tools and maintained adherence to enterprise SLA standards.',
  },
]

export const education = [
  {
    period: 'July 2024 — July 2026',
    role: 'MCA — Artificial Intelligence & Machine Learning',
    cgpa: 9.6,
    institution: 'SRM University, Chennai',
    description:
      'Completed MCA with a strong focus on AI/ML, deep learning, Python, software engineering, and intelligent system design.',
  },
  {
    period: 'June 2020 — June 2023',
    role: 'BSc Computer Science',
    cgpa: 9.2,
    institution: "St. Joseph's College, Devagiri, Calicut",
    description:
      'Completed BSc Computer Science with strong academic performance and a solid foundation in programming, system design, and application development.',
  },
]

export const contact = {
  title: 'Let’s build something impactful.',
  lead:
    'I am currently open to full-stack, AI/ML, and product engineering opportunities. If there is a fit, I would love to connect and discuss how I can contribute.',
}

export const nav = {
  brand: 'KRISHNA DARSH E K',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
}
