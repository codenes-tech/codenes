export interface Service {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  includes: string[];
}

export interface SiteContent {
  hero: { eyebrow: string; hook: string; value: string; ctaPrimary: string; ctaSecondary: string };
  steps: { title: string; text: string }[];
  services: Service[];
  about: { title: string; paragraphs: string[] };
  faq: { q: string; a: string }[];
  /** Real client cases only; stays hidden while published is false. */
  proof: { published: boolean; items: { name: string; quote: string }[] };
  finalCta: { title: string; text: string };
}
