/**
 * Navigation utilities for smooth scrolling and section management
 */

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.warn(`Section with id "${sectionId}" not found`);
  }
};

export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  PROJECTS: 'projects',
  SERVICES: 'services', 
  TRAINING: 'training',
  SKILLS: 'skills',
  TESTIMONIALS: 'testimonials',
  BLOG: 'blog',
  CONTACT: 'contact'
} as const;

export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS];