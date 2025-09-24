import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBackground extends Struct.ComponentSchema {
  collectionName: 'components_component_backgrounds';
  info: {
    displayName: 'background';
  };
  attributes: {
    content: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageUrl: Schema.Attribute.Enumeration<
      [
        '/uploads/mountain_fernanda_corso_3830e2634d.jpg',
        '/uploads/corworking_2_2805e307f8.jpeg',
        '/uploads/mountain_with_men_b7e8fa8001.jpeg',
      ]
    >;
    link: Schema.Attribute.Enumeration<
      [
        '/videos/formation.mp4',
        '/videos/judoka_artem_podrez.mp4',
        '/videos/kampus_production_hypnose.mp4',
        '/videos/meeting_tima_miroshnichenko.mp4',
        '/videos/men_training_2_tarin_golden.mp4',
        '/videos/men_training_ketut_subiyanto.mp4',
        '/videos/men_walking_through_forest_peter_fowler.mp4',
        '/videos/mountain_hiking.mp4',
        '/videos/psycholog_kampus_production.mp4',
        '/videos/women_climbing_mountain_yaroslav_shuraev.mp4',
        '/videos/women_runing_igor_vieira.mp4',
        '/videos/women_training_pressmaster.mp4',
        '/videos/faces_smiling.mp4',
      ]
    >;
    type: Schema.Attribute.Enumeration<['image', 'video']>;
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

export interface ComponentFaq extends Struct.ComponentSchema {
  collectionName: 'components_component_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface ComponentFeature extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Psychology',
        'PsychologyAlt',
        'ModeStandby',
        'AddReaction',
        'BatteryChargingFull',
        'Campaign',
        'Cyclone',
        'Diversity1',
        'Diversity2',
        'Diversity3',
        'FitnessCenter',
        'FlagCircle',
        'Handshake',
        'HotelClass',
        'Interests',
        'Looks',
        'Merge',
        'OpenWith',
        'RemoveRedEye',
        'RocketLaunch',
        'SentimentVerySatisfied',
        'Star',
        'StarBorder',
        'TheaterComedy',
        'ThumbUp',
        'WavingHand',
        'Workspaces',
        'WorkspacesOutline',
        'Autorenew',
        'Functions',
        'PersonalInjury',
        'ThumbDownOffAlt',
        'SentimentVeryDissatisfied',
        'CastForEducation',
        'InterpreterMode',
        'CorporateFare',
        'SensorOccupied',
      ]
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentFormProps extends Struct.ComponentSchema {
  collectionName: 'components_component_form_props';
  info: {
    displayName: 'formProps';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    email: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    isSubmitting: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    message: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface ComponentNavbar extends Struct.ComponentSchema {
  collectionName: 'components_component_navbars';
  info: {
    displayName: 'navItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    subItem: Schema.Attribute.Component<'component.sub-item', true>;
  };
}

export interface ComponentQuestion extends Struct.ComponentSchema {
  collectionName: 'components_component_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    answers: Schema.Attribute.Component<'component.responses', true>;
    question: Schema.Attribute.String;
  };
}

export interface ComponentQuestionFaq extends Struct.ComponentSchema {
  collectionName: 'components_component_question_faqs';
  info: {
    displayName: 'questionFAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface ComponentQuote extends Struct.ComponentSchema {
  collectionName: 'components_component_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ComponentResponses extends Struct.ComponentSchema {
  collectionName: 'components_component_responses';
  info: {
    displayName: 'Responses';
  };
  attributes: {
    answer: Schema.Attribute.String;
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

export interface ComponentSuccess extends Struct.ComponentSchema {
  collectionName: 'components_component_successes';
  info: {
    displayName: 'success';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textContact: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTexts extends Struct.ComponentSchema {
  collectionName: 'components_component_texts';
  info: {
    displayName: 'texts';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ComponentVideoLink extends Struct.ComponentSchema {
  collectionName: 'components_component_video_links';
  info: {
    displayName: 'videoLink';
  };
  attributes: {
    link: Schema.Attribute.Enumeration<
      [
        '/videos/formation.mp4',
        '/videos/judoka_artem_podrez.mp4',
        '/videos/kampus_production_hypnose.mp4',
        '/videos/meeting_tima_miroshnichenko.mp4',
        '/videos/men_training_2_tarin_golden.mp4',
        '/videos/men_training_ketut_subiyanto.mp4',
        '/videos/men_walking_through_forest_peter_fowler.mp4',
        '/videos/mountain_hiking.mp4',
        '/videos/psycholog_kampus_production.mp4',
        '/videos/women_climbing_mountain_yaroslav_shuraev.mp4',
        '/videos/women_runing_igor_vieira.mp4',
        '/videos/women_training_pressmaster.mp4',
      ]
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
  attributes: {};
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
    displayName: 'FAQSection';
  };
  attributes: {
    faq: Schema.Attribute.Component<'component.faq', true>;
    title: Schema.Attribute.Text;
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
    displayName: 'menu';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageAlternativeText: Schema.Attribute.Text;
    imageUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionMenuSection2 extends Struct.ComponentSchema {
  collectionName: 'components_section_menu_section2s';
  info: {
    displayName: 'MenuSection2';
  };
  attributes: {
    menu: Schema.Attribute.Component<'section.menu-section', true>;
  };
}

export interface SectionQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_section_quote_sections';
  info: {
    displayName: 'quoteSection';
  };
  attributes: {
    quote: Schema.Attribute.Component<'component.quote', true>;
  };
}

export interface SectionReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_section_review_sections';
  info: {
    displayName: 'Reviews';
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
    reverse: Schema.Attribute.Boolean;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionTextSection extends Struct.ComponentSchema {
  collectionName: 'components_section_text_sections';
  info: {
    displayName: 'textSection';
  };
  attributes: {
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
      'component.faq': ComponentFaq;
      'component.feature': ComponentFeature;
      'component.form-props': ComponentFormProps;
      'component.navbar': ComponentNavbar;
      'component.question': ComponentQuestion;
      'component.question-faq': ComponentQuestionFaq;
      'component.quote': ComponentQuote;
      'component.responses': ComponentResponses;
      'component.review': ComponentReview;
      'component.seo': ComponentSeo;
      'component.style': ComponentStyle;
      'component.sub-item': ComponentSubItem;
      'component.success': ComponentSuccess;
      'component.texts': ComponentTexts;
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
      'section.menu-section2': SectionMenuSection2;
      'section.quote-section': SectionQuoteSection;
      'section.review-section': SectionReviewSection;
      'section.text-image-section': SectionTextImageSection;
      'section.text-section': SectionTextSection;
    }
  }
}
