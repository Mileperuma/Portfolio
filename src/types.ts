export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'featured' | 'ai-llm' | 'ml-dl' | 'cyber-nlp';
  categoryLabel: string;
  badge?: string;
  featured?: boolean;
  shortDesc: string;
  fullDesc: string;
  architecture: string;
  status: string;
  keyMetrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  interactiveDemoType?: 'recommendation' | 'categorizer' | 'stock' | 'rag';
}

export interface SkillCategory {
  name: string;
  iconName: string;
  color: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}
