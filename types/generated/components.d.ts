import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
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

export interface ProsLandingHeroProsLandingHero extends Struct.ComponentSchema {
  collectionName: 'components_pros_landing_hero_pros_landing_heroes';
  info: {
    displayName: 'Pros-Landing-Hero';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    items: Schema.Attribute.Component<'text-icon.text-icon', true>;
    subtitle: Schema.Attribute.String;
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
      'pros-landing-hero.pros-landing-hero': ProsLandingHeroProsLandingHero;
      'text-icon.text-icon': TextIconTextIcon;
    }
  }
}
