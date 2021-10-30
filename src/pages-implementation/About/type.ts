export interface TimelineItem {
  dates: string;
  company: string;
  stack: string[];
  experience: { text: string; href?: string; hreflang?: string }[];
  description: string;
}
