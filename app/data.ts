type Project = {
  link?: string
  name: string
  description: string
  technologies?: string[]
  github?: string
  image?: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  status: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    id: "suarakatrip",
    link: "https://www.suarakatrip.com",
    name: "Suarakatrip",
    description: "Suaraka Trip is a tour and travel agency ready to take you to explore Indonesia’s top destinations with authentic experiences and professional service. Based on sustainable tourism values, we are committed to providing memorable journeys that also have a positive impact on the environment and local communities.",
    // technologies: Laravel, MySQL, Redis, Next JS, Tailwind CSS.
    technologies: ['Laravel', 'MySQL', 'Redis', 'Next.js', 'Tailwind CSS'],
    image: "images/projects/suarakatrip.png",
  },
  {
    id: "multi-warehouse",
    github: "https://github.com/muhammadaskar/warehouse-commerce",
    name: "Multi Warehouse",
    description: "A multi-warehouse e-commerce platform that allows users to purchase products from multiple warehouses. The platform is designed to provide a seamless shopping experience, with a focus on quality products and customer satisfaction.",
    // Java, Spring, Kafka, Kong API Gateway, PostgreSQL, Redis, Next JS, Tailwind CSS.
    technologies: ['Java', 'Spring', 'Kafka', 'Kong API Gateway', 'PostgreSQL', 'Redis', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: "ngegame-store",
    link: "https://www.store.ngegame.net",
    name: "Ngegame Store",
    description: "Ngegame Store is an online platform that allows users to purchase game credits and digital products. The platform is designed to provide a seamless shopping experience, with a focus on quality products and customer satisfaction.",
    // Golang, MySQL, Docker, Redis, Next JS, Tailwind CSS.
    technologies: ['Golang', 'MySQL', 'Docker', 'Redis', 'Next.js', 'Tailwind CSS'],
    image: "images/projects/ngegame-store.png",
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Mbizmarket.co.id',
    title: 'Software Engineer',
    status: 'Fulltime',
    start: '2023',
    end: 'Present',
    link: 'https://www.mbizmarket.co.id',
    id: 'work1',
  },
  {
    company: 'BPJS Ketenagakerjaan',
    title: 'Software Engineer',
    status: 'Fulltime',
    start: '2022',
    end: '2023',
    link: 'https://www.bpjsketenagakerjaan.go.id',
    id: 'work2',
  },
  // {
  //   company: 'Freelance',
  //   title: 'Front-end Developer',
  //   start: '2017',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work3',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/muhammadaskar',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/muhammad-askarrr/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/muhammad.askarrr',
  },
]

export const EMAIL = 'mhmmdaskar11@gmail.com'
