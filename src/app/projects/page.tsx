import Projects from '@/components/Projects'
import Layout from '@/components/Layout'
import { ReactNode } from 'react';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  icon: ReactNode;
  animationDelay?: string;
}

export const projects: Project[] = [
  // ... (copy the projects array from Projects.tsx here, minus the export default function)
];

export default function ProjectsPage() {
  return (
    <Layout>
      <Projects />
    </Layout>
  )
} 