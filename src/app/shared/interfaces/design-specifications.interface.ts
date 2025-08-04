export interface ContentCardData {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  layout?: 'left' | 'right';
  backgroundColor?: string;
}

export interface BannerData {
  title: string;
  description: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  link?: string;
  active?: boolean;
}

export interface TechnicalCalculationData {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export interface BimCadData {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SpecificationAdviceData {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export interface DesignSupportData {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
} 