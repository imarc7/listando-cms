import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface MetaMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'Meta';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaImageUrl: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface NearMeFaqSectionNearMeFaqSection
  extends Struct.ComponentSchema {
  collectionName: 'components_near_me_faq_section_near_me_faq_sections';
  info: {
    displayName: 'Near-me-faq-section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'faq.faq', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface NearMeHeroSectionNearMeHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_near_me_hero_section_near_me_hero_sections';
  info: {
    displayName: 'Near-me-hero-section';
  };
  attributes: {
    ctaBoxPoint1: Schema.Attribute.String;
    ctaBoxPoint2: Schema.Attribute.String;
    ctaBoxPoint3: Schema.Attribute.String;
    ctaBoxTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h1: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
  };
}

export interface NearMeMainContentNearMeMainContent
  extends Struct.ComponentSchema {
  collectionName: 'components_near_me_main_content_near_me_main_contents';
  info: {
    displayName: 'Near-me-main-content';
  };
  attributes: {
    h2: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface ProsLandingAppSectionProsLandingAppSection
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_app_section_pros_landing_app_sections';
  info: {
    displayName: 'Pros-landing-app-section';
  };
  attributes: {
    sectionSubtitle: Schema.Attribute.Text;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface ProsLandingBenefitsProsLandingBenefits
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_benefits_pros_landing_benefits';
  info: {
    displayName: 'Pros-landing-benefits';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'text-icon-description.text-icon-description',
      true
    >;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface ProsLandingFaqSectionProsLandingFaqSection
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_faq_section_pros_landing_faq_sections';
  info: {
    displayName: 'Pros-landing-faq-section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'faq.faq', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface ProsLandingHeroProsLandingHero extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_hero_pros_landing_heroes';
  info: {
    displayName: 'Pros-Landing-Hero';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaSubtext: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    items: Schema.Attribute.Component<'text-icon.text-icon', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProsLandingRelatedServicesSectionProsLandingRelatedServicesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_related_services_section_pros_landing_related_services_sections';
  info: {
    displayName: 'Pros-landing-related-services-section';
  };
  attributes: {
    relatedServices: Schema.Attribute.Component<
      'pros-landing-related-services.pros-landing-related-services',
      true
    >;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface ProsLandingRelatedServicesProsLandingRelatedServices
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_related_services_pros_landing_related_services';
  info: {
    displayName: 'Pros-landing-related-services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProsLandingTaskCardProsLandingTaskCard
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_task_card_pros_landing_task_cards';
  info: {
    displayName: 'Pros-landing-task-card';
  };
  attributes: {
    budget: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    guests: Schema.Attribute.String;
    location: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface ProsLandingTaskExamplesProsLandingTaskExamples
  extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_task_examples_pros_landing_task_examples';
  info: {
    displayName: 'Pros-landing-task-examples';
  };
  attributes: {
    remainingTasks: Schema.Attribute.String;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    serviceDisplayName: Schema.Attribute.String;
    tasks: Schema.Attribute.Component<
      'pros-landing-task-card.pros-landing-task-card',
      true
    >;
  };
}

export interface RelatedArticleRelatedArticle extends Struct.ComponentSchema {
  collectionName: 'components_related_article_related_articles';
  info: {
    displayName: 'Related-article';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RelatedLinkRelatedLink extends Struct.ComponentSchema {
  collectionName: 'components_related_link_related_links';
  info: {
    displayName: 'Related-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface TextIconDescriptionTextIconDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_text_icon_description_text_icon_descriptions';
  info: {
    displayName: 'Text-icon-description';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TextIconTextIcon extends Struct.ComponentSchema {
  collectionName: 'components_text_icon_text_icons';
  info: {
    displayName: 'Text-Icon';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.faq': FaqFaq;
      'meta.meta': MetaMeta;
      'near-me-faq-section.near-me-faq-section': NearMeFaqSectionNearMeFaqSection;
      'near-me-hero-section.near-me-hero-section': NearMeHeroSectionNearMeHeroSection;
      'near-me-main-content.near-me-main-content': NearMeMainContentNearMeMainContent;
      'pros-landing-app-section.pros-landing-app-section': ProsLandingAppSectionProsLandingAppSection;
      'pros-landing-benefits.pros-landing-benefits': ProsLandingBenefitsProsLandingBenefits;
      'pros-landing-faq-section.pros-landing-faq-section': ProsLandingFaqSectionProsLandingFaqSection;
      'pros-landing-hero.pros-landing-hero': ProsLandingHeroProsLandingHero;
      'pros-landing-related-services-section.pros-landing-related-services-section': ProsLandingRelatedServicesSectionProsLandingRelatedServicesSection;
      'pros-landing-related-services.pros-landing-related-services': ProsLandingRelatedServicesProsLandingRelatedServices;
      'pros-landing-task-card.pros-landing-task-card': ProsLandingTaskCardProsLandingTaskCard;
      'pros-landing-task-examples.pros-landing-task-examples': ProsLandingTaskExamplesProsLandingTaskExamples;
      'related-article.related-article': RelatedArticleRelatedArticle;
      'related-link.related-link': RelatedLinkRelatedLink;
      'text-icon-description.text-icon-description': TextIconDescriptionTextIconDescription;
      'text-icon.text-icon': TextIconTextIcon;
    }
  }
}
