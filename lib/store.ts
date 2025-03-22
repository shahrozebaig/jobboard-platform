import { create } from 'zustand';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salary: string;
  postedDate: string;
  companyLogo: string;
}

interface JobStore {
  jobs: Job[];
  addJob: (job: Job) => void;
  removeJob: (id: string) => void;
  getJob: (id: string) => Job | undefined;
}

// Mock data
export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team and help build the next generation of web applications. The ideal candidate will have strong experience with modern frontend technologies and a passion for creating exceptional user experiences.',
    requirements: ['5+ years React experience', 'TypeScript proficiency', 'Team leadership', 'Experience with Next.js', 'Strong UI/UX skills'],
    salary: '$120,000 - $150,000',
    postedDate: '2024-03-20',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'InnovateLabs',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our dynamic team building next-generation web applications. We need a versatile developer who can work across the entire stack and help us scale our platform.',
    requirements: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD experience'],
    salary: '$130,000 - $160,000',
    postedDate: '2024-03-19',
    companyLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop'
  },
  {
    id: '3',
    title: 'Backend Developer',
    company: 'DataFlow Systems',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Looking for a skilled Backend Developer to help us build and maintain our high-performance data processing systems. Experience with distributed systems is a plus.',
    requirements: ['Python', 'Go', 'MongoDB', 'Redis', 'Kubernetes', 'Microservices architecture'],
    salary: '$140,000 - $170,000',
    postedDate: '2024-03-18',
    companyLogo: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=200&h=200&fit=crop'
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'CreativeHub',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our creative team to design beautiful and intuitive user interfaces. We need someone who can translate complex requirements into elegant solutions.',
    requirements: ['Figma', 'Adobe Creative Suite', 'User research', 'Prototyping', 'Design systems'],
    salary: '$100,000 - $130,000',
    postedDate: '2024-03-17',
    companyLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain our cloud infrastructure. We need someone who can automate everything and ensure our systems are secure and scalable.',
    requirements: ['AWS', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'Security best practices'],
    salary: '$150,000 - $180,000',
    postedDate: '2024-03-16',
    companyLogo: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=200&h=200&fit=crop'
  },
  {
    id: '6',
    title: 'Mobile Developer',
    company: 'AppWorks',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Join our mobile team to build cross-platform applications that millions of users love. Experience with both iOS and Android development is required.',
    requirements: ['React Native', 'Swift', 'Kotlin', 'Mobile UI/UX', 'App Store/Play Store experience'],
    salary: '$110,000 - $140,000',
    postedDate: '2024-03-15',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop'
  },
  {
    id: '7',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Seattle, WA',
    type: 'Full-time',
    description: 'Help us analyze complex data sets and build predictive models. We need someone who can turn data into actionable insights.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Data visualization', 'Statistical analysis'],
    salary: '$130,000 - $160,000',
    postedDate: '2024-03-14',
    companyLogo: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=200&h=200&fit=crop'
  },
  {
    id: '8',
    title: 'Product Manager',
    company: 'ProductFlow',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead product development from conception to launch. We need someone who can balance user needs with business goals.',
    requirements: ['Product strategy', 'User research', 'Agile methodologies', 'Data analysis', 'Stakeholder management'],
    salary: '$140,000 - $170,000',
    postedDate: '2024-03-13',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop'
  },
  {
    id: '9',
    title: 'Security Engineer',
    company: 'SecureTech',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'Help us protect our systems and data from cyber threats. We need someone who can identify vulnerabilities and implement security measures.',
    requirements: ['Network security', 'Penetration testing', 'Security protocols', 'Incident response', 'Compliance'],
    salary: '$150,000 - $180,000',
    postedDate: '2024-03-12',
    companyLogo: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=200&h=200&fit=crop'
  },
  {
    id: '10',
    title: 'Content Strategist',
    company: 'ContentHub',
    location: 'Remote',
    type: 'Part-time',
    description: 'Create compelling content that engages our audience and drives growth. We need someone who can develop content strategies and create high-quality content.',
    requirements: ['Content writing', 'SEO', 'Social media', 'Content strategy', 'Analytics'],
    salary: '$60,000 - $80,000',
    postedDate: '2024-03-11',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop'
  },
  {
    id: '11',
    title: 'Blockchain Developer',
    company: 'CryptoTech',
    location: 'Remote',
    type: 'Contract',
    description: 'Build decentralized applications and smart contracts. We need someone who understands blockchain technology and can develop secure solutions.',
    requirements: ['Solidity', 'Web3.js', 'Smart contracts', 'Blockchain architecture', 'Security'],
    salary: '$160,000 - $200,000',
    postedDate: '2024-03-10',
    companyLogo: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=200&h=200&fit=crop'
  },
  {
    id: '12',
    title: 'AI/ML Engineer',
    company: 'AI Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Develop cutting-edge AI and machine learning solutions. We need someone who can build and deploy ML models at scale.',
    requirements: ['TensorFlow', 'PyTorch', 'Deep learning', 'MLOps', 'Python'],
    salary: '$170,000 - $210,000',
    postedDate: '2024-03-09',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop'
  }
];

export const useJobStore = create<JobStore>((set, get) => ({
  jobs: mockJobs,
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  removeJob: (id) => set((state) => ({ jobs: state.jobs.filter((job) => job.id !== id) })),
  getJob: (id) => get().jobs.find((job) => job.id === id),
}));

// Export the mock jobs for initial data
export const jobOpenings = mockJobs;