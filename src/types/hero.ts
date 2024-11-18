export interface Feature {
  title: string;
  description: string;
  animationDelay: number;
}

export interface Profile {
  name: string;
  role: string;
  experience: string;
  country: string;
  skills: string[];
  avatar: string;
  badge: string;
}

export interface Category {
  title: string;
  icon: string;
  index: number;
}

export interface Tooltip {
  data: string;
  icon: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  highlight: string;
  heroTooltip: string;
  profiles: Profile[];
  features: Feature[];
  categories: Category[];
  tooltip: Tooltip;
}
