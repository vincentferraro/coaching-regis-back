import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBackground extends Struct.ComponentSchema {
  collectionName: 'components_component_backgrounds';
  info: {
    displayName: 'background';
  };
  attributes: {
    content: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['image', 'video']>;
    videoLink: Schema.Attribute.Component<'component.video-link', false>;
  };
}

export interface ComponentBackgroundColor extends Struct.ComponentSchema {
  collectionName: 'components_component_background_colors';
  info: {
    displayName: 'backgroundColor';
  };
  attributes: {
    hex: Schema.Attribute.String;
    rgb: Schema.Attribute.JSON;
  };
}

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ComponentFeature extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentNavbar extends Struct.ComponentSchema {
  collectionName: 'components_component_navbars';
  info: {
    displayName: 'navItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    subItem: Schema.Attribute.Component<'component.sub-item', true>;
    text: Schema.Attribute.String;
  };
}

export interface ComponentQuestion extends Struct.ComponentSchema {
  collectionName: 'components_component_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ComponentReview extends Struct.ComponentSchema {
  collectionName: 'components_component_reviews';
  info: {
    displayName: 'review';
  };
  attributes: {
    location: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    user: Schema.Attribute.String;
  };
}

export interface ComponentSeo extends Struct.ComponentSchema {
  collectionName: 'components_component_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.Text;
    noIndex: Schema.Attribute.Boolean;
  };
}

export interface ComponentStyle extends Struct.ComponentSchema {
  collectionName: 'components_component_styles';
  info: {
    displayName: 'style';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Component<
      'component.background-color',
      false
    >;
    colorText: Schema.Attribute.String;
  };
}

export interface ComponentSubItem extends Struct.ComponentSchema {
  collectionName: 'components_component_sub_items';
  info: {
    displayName: 'subItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ComponentVideoLink extends Struct.ComponentSchema {
  collectionName: 'components_component_video_links';
  info: {
    displayName: 'videoLink';
  };
  attributes: {
    link: Schema.Attribute.Enumeration<
      ['/videos/mountain_hiking.mp4', '/videos/surfing.mp4']
    >;
  };
}

export interface SectionAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_section_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface SectionCarrousselSection extends Struct.ComponentSchema {
  collectionName: 'components_section_carroussel_sections';
  info: {
    displayName: 'carrousselSection';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SectionCta2Section extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_2_sections';
  info: {
    displayName: 'CTA2Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    text: Schema.Attribute.String;
  };
}

export interface SectionCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_sections';
  info: {
    displayName: 'CTASection';
  };
  attributes: {
    background: Schema.Attribute.Component<'component.background', false>;
    button: Schema.Attribute.Component<'component.button', false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_sections';
  info: {
    displayName: 'faqSection';
  };
  attributes: {
    question: Schema.Attribute.Component<'component.question', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_section_feature_sections';
  info: {
    displayName: 'featureSection';
  };
  attributes: {
    feature: Schema.Attribute.Component<'component.feature', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionFormationSection extends Struct.ComponentSchema {
  collectionName: 'components_section_formation_sections';
  info: {
    displayName: 'formationSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    navItem: Schema.Attribute.Component<'component.navbar', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Component<'component.video-link', false>;
  };
}

export interface SectionMenuSection extends Struct.ComponentSchema {
  collectionName: 'components_section_menu_sections';
  info: {
    displayName: 'menuSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_section_quote_sections';
  info: {
    displayName: 'quoteSection';
  };
  attributes: {
    quote: Schema.Attribute.String;
  };
}

export interface SectionReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_section_review_sections';
  info: {
    displayName: 'ReviewSection';
  };
  attributes: {
    review: Schema.Attribute.Component<'component.review', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionTextImageSection extends Struct.ComponentSchema {
  collectionName: 'components_section_text_image_sections';
  info: {
    displayName: 'textImageSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.background': ComponentBackground;
      'component.background-color': ComponentBackgroundColor;
      'component.button': ComponentButton;
      'component.feature': ComponentFeature;
      'component.navbar': ComponentNavbar;
      'component.question': ComponentQuestion;
      'component.review': ComponentReview;
      'component.seo': ComponentSeo;
      'component.style': ComponentStyle;
      'component.sub-item': ComponentSubItem;
      'component.video-link': ComponentVideoLink;
      'section.about-section': SectionAboutSection;
      'section.carroussel-section': SectionCarrousselSection;
      'section.cta-2-section': SectionCta2Section;
      'section.cta-section': SectionCtaSection;
      'section.faq-section': SectionFaqSection;
      'section.feature-section': SectionFeatureSection;
      'section.formation-section': SectionFormationSection;
      'section.header': SectionHeader;
      'section.hero-section': SectionHeroSection;
      'section.menu-section': SectionMenuSection;
      'section.quote-section': SectionQuoteSection;
      'section.review-section': SectionReviewSection;
      'section.text-image-section': SectionTextImageSection;
    }
  }
}
