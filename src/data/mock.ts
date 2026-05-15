import { Campaign, Stat, Testimonial } from "@/types";

export const campaigns: Campaign[] = [
  {
    id: "camp-1",
    title: "Clean Water for Eastern Villages",
    description: "Provide sustainable access to clean drinking water for communities currently walking miles daily for unsafe water sources.",
    category: "Clean Water",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200",
    goalAmount: 25000,
    raisedAmount: 18750,
    donorCount: 423,
    story: "In many parts of the world, access to clean water is still a luxury. This campaign aims to build 5 new solar-powered water filtration systems in rural villages. The impact goes beyond just hydration—it means children can attend school instead of walking miles for water, and community health improves dramatically by reducing waterborne illnesses.",
    organizer: "HopeWater Initiative",
    createdAt: "2024-03-15T00:00:00Z",
  },
  {
    id: "camp-2",
    title: "Education For Every Child",
    description: "Help us build classrooms and provide essential learning materials for children in underserved regions.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    goalAmount: 50000,
    raisedAmount: 32100,
    donorCount: 890,
    story: "Education is the most powerful weapon which you can use to change the world. Yet, millions of children still lack access to basic primary education. We are raising funds to construct three new primary schools and supply them with necessary educational materials, desks, and certified teachers for the next two years.",
    organizer: "Global EduFund",
    createdAt: "2024-04-02T00:00:00Z",
  },
  {
    id: "camp-3",
    title: "Emergency Medical Relief",
    description: "Deploy mobile clinics to provide urgent medical care and vaccinations to remote populations.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
    goalAmount: 75000,
    raisedAmount: 68400,
    donorCount: 1245,
    story: "Remote populations often suffer from easily treatable diseases due to a lack of nearby medical facilities. This campaign funds the deployment of two fully-equipped mobile medical clinics that will travel between 15 villages, providing life-saving treatments, prenatal care, and essential vaccinations.",
    organizer: "MedRelief Borders",
    createdAt: "2024-05-10T00:00:00Z",
  },
  {
    id: "camp-4",
    title: "Reforestation & Climate Action",
    description: "Plant 100,000 trees to restore destroyed habitats and combat climate change.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    goalAmount: 40000,
    raisedAmount: 12000,
    donorCount: 210,
    story: "Our forests are the lungs of our planet. Due to illegal logging and recent wildfires, thousands of acres of critical habitat have been lost. We are organizing a massive community-led effort to plant 100,000 native tree species over the next year to restore biodiversity and create carbon sinks.",
    organizer: "EarthGuardians",
    createdAt: "2024-06-01T00:00:00Z",
  },
];

export const stats: Stat[] = [
  { id: "stat-1", label: "Total Raised", value: "2.4", suffix: "M+" },
  { id: "stat-2", label: "Lives Impacted", value: "150", suffix: "K+" },
  { id: "stat-3", label: "Global Projects", value: "84", suffix: "" },
  { id: "stat-4", label: "Active Volunteers", value: "1,200", suffix: "+" },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Monthly Donor",
    content: "Seeing the direct impact of my small monthly contributions has been incredibly rewarding. HopeBridge makes the donation process transparent and meaningful.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "test-2",
    name: "David Chen",
    role: "Campaign Organizer",
    content: "We raised our goal in record time thanks to this platform. The modern interface and seamless checkout experience definitely helped increase our conversion rate.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "test-3",
    name: "Elena Rodriguez",
    role: "Volunteer & Donor",
    content: "I've used many donation platforms, but HopeBridge feels different. It's emotionally engaging, beautifully designed, and most importantly, trustworthy.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];
