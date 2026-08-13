import { supabase } from '@/lib/supabase'

export const defaultProjects = [
  {
    id: 1,
    title: "Customer Churn Analytics & Retention Intelligence",
    description: "Analyzed 7,043 telecom customers using Python, Pandas, NumPy, and SQL to measure churn, retention, and customer behavior. Identified 42.7% churn in month-to-month and 64.0% in New + High Value customers.",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    live_url: "https://github.com/Saksham914",
    github_url: "https://github.com/Saksham914",
    technologies: "Python, Pandas, NumPy, SQL, Matplotlib, Seaborn",
    key_features: "Customer Churn Prediction, Retention Rate Analysis, Cohort Analysis, Predictive Modeling",
    created_at: "2026-01-01"
  },
  {
    id: 2,
    title: "StudyNest – Student Productivity Platform",
    description: "Built a full-stack student productivity platform using React, Flask, and MySQL featuring resource management, task creation with priorities & deadlines, and a Pomodoro focus timer dashboard.",
    image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    live_url: "https://github.com/Saksham914/StudyNest",
    github_url: "https://github.com/Saksham914/StudyNest",
    technologies: "React, Flask, Python, MySQL, Tailwind CSS, HTML5/CSS3",
    key_features: "Resource Management, Task Creation with Priorities & Deadlines, Pomodoro Focus Timer, Productivity Analytics Dashboard, User Authentication",
    created_at: "2026-01-02"
  },
  {
    id: 3,
    title: "Kaggle Exploratory Data Analysis & EDA (DRDO)",
    description: "Performed comprehensive data preprocessing, feature engineering, and exploratory data analysis using Python, Pandas, NumPy, Matplotlib, and Seaborn for defense data research.",
    image_url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    live_url: "https://github.com/Saksham914",
    github_url: "https://github.com/Saksham914",
    technologies: "Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter",
    key_features: "Exploratory Data Analysis, Data Preprocessing, Feature Engineering, Statistical Data Research",
    created_at: "2026-01-03"
  }
]

export const defaultCertificates = [
  {
    id: 1,
    title: "Oracle Certified AI Foundations Associate",
    image_url: "/assets/certificates/oracle.svg",
    credential_url: "https://www.linkedin.com/in/sakshamshukla123/details/certifications/",
    created_at: "2026-01-01"
  },
  {
    id: 2,
    title: "NPTEL – Natural Language Processing",
    image_url: "/assets/certificates/nptel.svg",
    credential_url: "https://www.linkedin.com/in/sakshamshukla123/details/certifications/",
    created_at: "2026-01-02"
  },
  {
    id: 3,
    title: "Tata – GenAI Powered Data Analytics Job Simulation",
    image_url: "/assets/certificates/tata.svg",
    credential_url: "https://www.linkedin.com/in/sakshamshukla123/details/certifications/",
    created_at: "2026-01-03"
  },
  {
    id: 4,
    title: "EY & Microsoft – AI Skills Passport",
    image_url: "/assets/certificates/ey-microsoft.svg",
    credential_url: "https://www.linkedin.com/in/sakshamshukla123/details/certifications/",
    created_at: "2026-01-04"
  },
  {
    id: 5,
    title: "Deloitte Australia – Cyber Job Simulation",
    image_url: "/assets/certificates/deloitte.svg",
    credential_url: "https://www.linkedin.com/in/sakshamshukla123/details/certifications/",
    created_at: "2026-01-05"
  }
]

export const defaultTechStacks = [
  { id: 1, name: "Python", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { id: 2, name: "SQL", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: 3, name: "Pandas", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { id: 4, name: "NumPy", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { id: 5, name: "React.js", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 6, name: "Flask", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { id: 7, name: "MySQL", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  { id: 8, name: "Java", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: 9, name: "JavaScript", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 10, name: "Jupyter", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" },
  { id: 11, name: "Git", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: 12, name: "VS Code", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
]

export const fetchProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: true })

    if (error || !data || data.length === 0) {
      return defaultProjects
    }
    return data
  } catch {
    return defaultProjects
  }
}

export const fetchCertificates = async () => {
  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', { ascending: true })

    if (error || !data || data.length === 0) {
      return defaultCertificates
    }
    return data
  } catch {
    return defaultCertificates
  }
}

export const fetchTechStacks = async () => {
  try {
    const { data, error } = await supabase
      .from('tech_stack')
      .select('*')
      .order('created_at', { ascending: true })

    if (error || !data || data.length === 0) {
      return defaultTechStacks
    }
    return data
  } catch {
    return defaultTechStacks
  }
}