import {
  Building2,
  ShieldCheck,
  CodeXml,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

export interface Division {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  Icon: LucideIcon;
}

export const divisions: Division[] = [
  {
    id: '01',
    title: 'WE Infrastructure',
    tagline: 'Powering the infrastructure of progress.',
    category:
      'Electrical Engineering, Installations, Networks & Renewable Energy',
    description:
      'We deliver electrical engineering, installation, network, and renewable energy solutions for industrial and commercial environments, supporting reliable infrastructure, efficient operations, and sustainable energy use.',
    tags: [
      'Electrical Design',
      'Installations',
      'Industrial Networks',
      'Renewable Energy',
      'Project Coordination',
    ],
    image: 'divisions/infrastructure.jpg',
    Icon: Building2,
  },
  {
    id: '02',
    title: 'WE Quality',
    tagline: 'Quality in control. Operations in motion.',
    category:
      'Quality Management, Inspection & Industrial Field Engineering',
    description:
      'We provide industrial quality management, inspection, field engineering, and workforce support to help businesses maintain quality standards, meet operational requirements, and improve production performance.',
    tags: [
      'Quality Management',
      'Inspection & Sorting',
      'Field Engineering',
      'Process Improvement',
      'Industrial Workforce Support',
    ],
    image: 'divisions/quality.jpg',
    Icon: ShieldCheck,
  },
  {
    id: '03',
    title: 'WE Technologies',
    tagline: 'Connecting engineering and digital innovation.',
    category: 'Software, AI, IT Services & Automation',
    description:
      'We combine software development, artificial intelligence, automation, electronics, and connected technologies to create practical digital and technical solutions for modern business and industrial needs.',
    tags: [
      'Software Development',
      'AI & Automation',
      'IT Solutions',
      'Electronics',
      'Embedded Systems',
      'IoT',
    ],
    image: 'divisions/technologies.jpg',
    Icon: CodeXml,
  },
  {
    id: '04',
    title: 'WE Marketing',
    tagline: 'Building brands. Accelerating growth.',
    category:
      'Digital Marketing, Branding, Advertising & Business Consulting',
    description:
      'We deliver strategic branding, digital marketing, advertising, and creative communication solutions that help businesses strengthen their identity, engage target audiences, and expand their market presence.',
    tags: [
      'Branding',
      'Digital Marketing',
      'Creative Content',
      'Advertising',
      'Social Media',
      'Marketing Strategy',
    ],
    image: 'divisions/marketing.jpg',
    Icon: Megaphone,
  },
];

export const brandStatement = 'One Vision. Four Fields of Expertise.';