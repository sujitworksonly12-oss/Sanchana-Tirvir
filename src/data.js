// All site content lives here. Edit this file to change text, links and projects.
// TODO: replace the placeholder email and social links with your real ones.

export const site = {
  logo: 'Sanchana T®',
  name: 'Sanchana Tirvir',
  heroLines: ['Organised chaos,', 'real', 'impact.'],
  heroRole: 'Project Manager',
  heroSub: 'Operations & Social Media',
  heroTagline: 'Production, operations and social media for festivals, brands and sports teams in Goa.',
  email: 'hello@example.com', // TODO: your real email
  location: 'Goa, India',
}

export const navLinks = [
  { label: 'Home', to: '/', hash: '' },
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Works', to: '/', hash: 'works' },
  { label: 'Contact', to: '/', hash: 'contact' },
]

export const serviceLinks = [
  { label: 'Event Production', hash: 'services' },
  { label: 'Operations', hash: 'services' },
  { label: 'Social Media', hash: 'services' },
  { label: 'Post-Production', hash: 'services' },
]

export const socials = [
  { label: 'Instagram', href: '#' }, // TODO: your Instagram URL
  { label: 'LinkedIn', href: '#' }, // TODO: your LinkedIn URL
  { label: 'X/Twitter', href: '#' }, // TODO: your X URL
]

export const about = {
  paragraphs: [
    "Hello, I'm Sanchana. I'm a project manager who keeps events, production and social media moving at the same time.",
    'From film festivals to sports franchises, I turn complex plans into smooth execution with teams that stay on track.',
    "Let's create!",
  ],
}

export const services = [
  { title: 'Event Production', note: 'Team deployment and coverage planning across multi-venue events.' },
  { title: 'Operations', note: 'Timelines, stakeholder alignment and on-ground coordination.' },
  { title: 'Social Media', note: 'Campaign planning, content calendars and real-time coverage.' },
  { title: 'Post-Production', note: 'Footage handovers, edit timelines and revisions.' },
]

export const works = [
  {
    slug: 'iffi-2024-2025',
    title: 'IFFI 2024 & 2025',
    subtitle: 'Production & Post-Production',
    cover: '/images/iffi-cover.jpg',
    tagline: "Managing production across one of India's major film festivals.",
    client: 'Waves OTT',
    agency: 'GrowthGravy',
    role: 'Project Manager — Production & Post-Production',
    timeline: '2024 & 2025',
    location: 'Goa, India',
    about:
      "Waves OTT is an official OTT platform launched by Prasar Bharati, India's public broadcaster. The platform launched at IFFI 2024, with GrowthGravy supporting its team as a production and post-production partner.",
    challenge:
      'IFFI operates across multiple venues, with celebrity appearances, screenings and events happening simultaneously. With different Waves OTT teams working across the 2024 and 2025 editions, aligning stakeholders, navigating local logistics and managing tight content delivery timelines became key challenges.',
    approach: [
      ['Production coordination', 'Managed team deployment across venues to ensure key events and celebrity appearances were covered.'],
      ['Post-production management', 'Coordinated footage handovers, editing timelines, feedback and revisions.'],
      ['Data management', 'Oversaw end-of-day footage transfers and ensured assets reached the relevant teams.'],
      ['Stakeholder alignment', 'Addressed communication gaps, clarified operational requirements and worked towards a shared execution plan.'],
      ['Daily planning', 'Coordinated upcoming schedules and coverage priorities to keep production organised throughout the festival.'],
    ],
    outcome:
      "Across both editions, we supported Waves OTT's festival coverage through on-ground production and post-production, delivering the required video content and coordinating the aftermovie process. The project strengthened my experience in managing fast-paced production environments, aligning multiple stakeholders and keeping teams moving under tight deadlines.",
    gallery: [
      { src: '/images/iffi-2.jpg', alt: 'IFFI festival still' },
      { src: '/images/iffi-3.jpg', alt: 'IFFI team photo' },
      { src: '/images/iffi-4.jpg', alt: 'IFFI event coverage' },
    ],
  },
  {
    slug: 'international-purple-fest-2025',
    title: 'International Purple Fest 2025',
    subtitle: 'Operations & Social Media',
    cover: '/images/purple-cover.jpg',
    tagline: 'Taking an inclusive celebration from campaign planning to on-ground execution.',
    client: 'International Purple Fest',
    agency: 'GrowthGravy',
    role: 'Operations & Social Media Coordination',
    timeline: 'January 2023, January 2024 & October 2025',
    location: 'Goa, India',
    about:
      'International Purple Fest is an inclusive celebration of persons with disabilities, bringing together communities, organisations and stakeholders to promote accessibility and inclusion. What began as a national event in 2023 evolved into an international platform in 2024. I was first associated with the festival as a student media contributor in 2023 and 2024, and returned in 2025 as part of GrowthGravy\'s execution team.',
    challenge:
      'Build anticipation for a large-scale, multi-location event while managing communication across digital and physical touchpoints. This meant preparing months in advance, coordinating multiple creative deliverables and ensuring seamless real-time coverage across three days of simultaneous events.',
    approach: [
      ['Campaign coordination', 'Coordinated team activities across the pre-event campaign and festival period, keeping timelines and deliverables on track.'],
      ['Social media', 'Coordinated the digital campaign, content planning and real-time coverage across Instagram, Facebook and X.'],
      ['Team management', 'Followed up with designers, social media executives and team members so responsibilities and deadlines were clear.'],
      ['On-ground operations', 'Managed team deployment across multiple venues during the three-day festival and responded to last-minute changes.'],
      ['Live updates', 'Supported high-volume publishing, with about 25–30 posts and stories going out on busy event days.'],
    ],
    outcome:
      'The festival\'s digital and physical communication was executed across its pre-event campaign and three-day celebration. The client appreciated the proactive coordination and smooth execution, particularly noting that they did not need to constantly follow up on social media updates or deliverables. It was especially meaningful to go from writing articles about Purple Fest as a college student to coordinating its event execution as part of an agency team.',
    gallery: [
      { src: '/images/purple-2.jpg', alt: 'Purple Fest crowd' },
      { src: '/images/purple-3.jpg', alt: 'Purple Fest stage' },
    ],
  },
  {
    slug: 'goa-guardians',
    title: 'Goa Guardians',
    subtitle: 'Operations & Social Media',
    cover: '/images/logo-goa-guardians.png',
    coverContain: true,
    tagline: "Building a new franchise's digital presence, from auction day to launch.",
    client: 'Goa Guardians — Prime Volleyball League, Season 4',
    agency: 'GrowthGravy',
    role: 'Operations & Social Media',
    timeline: 'June 2025 onwards',
    location: 'Goa, India',
    about:
      'Goa Guardians joined the Prime Volleyball League as its ninth franchise in Season 4, representing Goa on India\'s professional volleyball stage. GrowthGravy partnered with the team to develop its brand identity, launch campaign and digital presence.',
    challenge:
      'As a new franchise, Goa Guardians had to establish its identity and build audience interest before the season began. With limited player access and content assets in the early months, the team needed a steady stream of engaging content across multiple platforms, plus real-time coverage of key announcements.',
    approach: [
      ['Brand launch', 'Collaborated with the team on logo development and launch campaign planning.'],
      ['Real-time auction coverage', 'Coordinated live content during the player auction, turning player announcements into creatives for timely publishing across Instagram, Facebook, Threads, X and YouTube.'],
      ['Content production', 'Helped ideate and coordinate an executive podcast with the franchise chairman, and a two-day shoot with player Chirag Yadav with studio segments, rapid-fire games and a carpool-style video.'],
      ['Celebrity-led campaigns', 'Contributed concepts for content around KL Rahul joining the franchise as co-owner, with selected ideas moving into production.'],
      ['Social media management', 'Managed social media execution for the initial months across platforms, supporting the handover to a dedicated team member.'],
    ],
    outcome:
      'The project established the foundation for Goa Guardians\' digital launch and early content pipeline, bringing together brand development, real-time sports coverage and personality-led content. One of my biggest highlights was seeing ideas I contributed to for the KL Rahul campaign move from ideation to execution.',
    gallery: [],
  },
]

export const clientLogos = [
  { src: '/images/logo-novotel.png', alt: 'Novotel Goa Panjim' },
  { src: '/images/logo-navtara.png', alt: 'Navtara' },
  { src: '/images/logo-heritage-village.png', alt: 'Heritage Village' },
  { src: '/images/logo-aadhvay.png', alt: 'Aadhvay' },
  { src: '/images/logo-bash.png', alt: 'Bash' },
  { src: '/images/logo-zantyes.png', alt: 'Zantyes' },
  { src: '/images/logo-goa-guardians.png', alt: 'Goa Guardians' },
  { src: '/images/logo-purple-fest.png', alt: 'International Purple Fest' },
  { src: '/images/logo-iffi-2025.png', alt: 'IFFI 2025' },
  { src: '/images/logo-melhor-stays.png', alt: 'Melhor Stays' },
  { src: '/images/logo-w-goa.png', alt: 'W Goa' },
  { src: '/images/logo-katha.png', alt: 'Katha Kitchen' },
  { src: '/images/logo-cashew-fest.png', alt: 'Cashew Fest' },
  { src: '/images/logo-montego-bay.png', alt: 'Montego Bay' },
  { src: '/images/logo-terminal.png', alt: 'Terminal' },
]
