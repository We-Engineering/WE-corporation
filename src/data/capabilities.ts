import {
  Wrench,
  ShieldCheck,
  Cpu,
  Megaphone,
  Layers,
  Network,
  Boxes,
  Target,
  Search,
  Compass,
  Cog,
  BadgeCheck,
} from 'lucide-react';

export const capabilityAreas = [
  {
    id: 'engineering',
    title: 'Engineering & Infrastructure',
    headline: 'Design. Build. Connect.',
    description:
      'Engineering and technical solutions that connect systems, infrastructure, and real-world requirements.',
    services: [
      'Electrical engineering and technical studies.',
      'Electrical installations and industrial networks.',
      'Renewable energy solutions.',
      'Technical integration and implementation support.',
    ],
    icon: Wrench,
    image: 'capabilities/engineering.jpg',
  },
  {
    id: 'quality',
    title: 'Quality & Operational Execution',
    headline: 'Control. Coordinate. Improve.',
    description:
      'Industrial quality control and coordinated operational support designed around defined requirements and practical execution.',
    services: [
      'Quality inspection, sorting, and containment.',
      'Industrial workforce deployment and coordination.',
      'Operational supervision and field support.',
      'Process improvement and quality follow-up.',
    ],
    icon: ShieldCheck,
    image: 'capabilities/quality.jpg',
  },
  {
    id: 'digital',
    title: 'Digital & Technology Solutions',
    headline: 'Develop. Automate. Integrate.',
    description:
      'Digital and intelligent solutions that connect software, systems, data, and business processes.',
    services: [
      'Software development.',
      'AI-enabled solutions and business automation.',
      'Electronics and embedded systems.',
      'IoT and connected technologies.',
    ],
    icon: Cpu,
    image: 'capabilities/digital.jpg',
  },
  {
    id: 'marketing',
    title: 'Marketing & Creative Solutions',
    headline: 'Position. Communicate. Grow.',
    description:
      'Creative and digital solutions that help businesses shape their identity, communicate their value, and strengthen their market presence.',
    services: [
      'Brand identity and positioning.',
      'Digital marketing and advertising.',
      'Creative content and campaign development.',
      'Social media management and communication.',
    ],
    icon: Megaphone,
    image: 'capabilities/marketing.jpg',
  },
];

export const integrationPairs = [
  {
    title: 'Engineering + Operations',
    description:
      'Connecting technical requirements with practical implementation and field coordination.',
    icon: Layers,
  },
  {
    title: 'Quality + Workforce',
    description:
      'Aligning inspection activities, workforce coordination, and operational priorities.',
    icon: Network,
  },
  {
    title: 'Technology + Processes',
    description:
      'Applying software and automation to connect systems and improve workflows.',
    icon: Boxes,
  },
  {
    title: 'Strategy + Communication',
    description:
      'Connecting brand positioning, marketing activity, and creative execution to business objectives.',
    icon: Target,
  },
];

export const processSteps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'Clarify objectives, technical requirements, constraints, and expected outcomes.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Identify the relevant expertise, evaluate practical options, and establish the scope of work.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'Coordinate the necessary activities, resources, technical work, and communication.',
    icon: Cog,
  },
  {
    num: '04',
    title: 'Verify & Improve',
    desc: 'Review deliverables against agreed requirements, address gaps, and identify opportunities for improvement.',
    icon: BadgeCheck,
  },
];

export const expertiseThemes = [
  {
    title: 'Technical Foundations',
    desc: 'Engineering principles, technical analysis, system design, and practical problem-solving.',
  },
  {
    title: 'Industrial & Field Execution',
    desc: 'Inspection, coordination, operational follow-up, and work carried out against defined requirements.',
  },
  {
    title: 'Digital & Technical Development',
    desc: 'Software, automation, electronics, and connected technical solutions.',
  },
  {
    title: 'Creative & Business Understanding',
    desc: 'Brand positioning, communication, digital execution, and business objectives.',
  },
];