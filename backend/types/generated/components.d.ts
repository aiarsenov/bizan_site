import type { Attribute, Schema } from '@strapi/strapi';

export interface SectionsContacts extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B';
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B';
  };
  attributes: {
    address: Attribute.Text;
    email: Attribute.Email;
    phone: Attribute.String;
    socialLinks: Attribute.JSON;
    workingHours: Attribute.String;
  };
}

export interface SectionsFaqItem extends Schema.Component {
  collectionName: 'components_sections_faq_items';
  info: {
    description: '\u0412\u043E\u043F\u0440\u043E\u0441 \u0438 \u043E\u0442\u0432\u0435\u0442 \u0434\u043B\u044F \u0441\u0435\u043A\u0446\u0438\u0438 FAQ';
    displayName: 'FAQ \u044D\u043B\u0435\u043C\u0435\u043D\u0442';
  };
  attributes: {
    answer: Attribute.Text & Attribute.Required;
    question: Attribute.String & Attribute.Required;
  };
}

export interface SectionsFaqSection extends Schema.Component {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432';
    displayName: '\u0421\u0435\u043A\u0446\u0438\u044F FAQ';
  };
  attributes: {
    list: Attribute.Component<'sections.faq-item', true>;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u0439';
    displayName: 'Hero \u0441\u0435\u043A\u0446\u0438\u044F';
  };
  attributes: {
    stats: Attribute.Component<'sections.stats'>;
    subtitle: Attribute.Text & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsMediaItem extends Schema.Component {
  collectionName: 'components_sections_media_items';
  info: {
    description: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0435\u043A\u0446\u0438\u0438 \u041C\u0435\u0434\u0438\u0430 (\u043D\u043E\u0432\u043E\u0441\u0442\u0438, \u0441\u0442\u0430\u0442\u044C\u0438)';
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    excerpt: Attribute.Text;
    image: Attribute.Media<'images'>;
    link: Attribute.String;
    publishedDate: Attribute.Date;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsMediaSection extends Schema.Component {
  collectionName: 'components_sections_media_sections';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u043C\u0435\u0434\u0438\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432';
    displayName: '\u0421\u0435\u043A\u0446\u0438\u044F \u043C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    list: Attribute.Component<'sections.media-item', true>;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsPartnerItem extends Schema.Component {
  collectionName: 'components_sections_partner_items';
  info: {
    description: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0435\u043A\u0446\u0438\u0438 \u041F\u0430\u0440\u0442\u043D\u0451\u0440\u044B';
    displayName: '\u041F\u0430\u0440\u0442\u043D\u0451\u0440';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
    website: Attribute.String;
  };
}

export interface SectionsPartnersSection extends Schema.Component {
  collectionName: 'components_sections_partners_sections';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432';
    displayName: '\u0421\u0435\u043A\u0446\u0438\u044F \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432';
  };
  attributes: {
    list: Attribute.Component<'sections.partner-item', true>;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsProjectItem extends Schema.Component {
  collectionName: 'components_sections_project_items';
  info: {
    description: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0435\u043A\u0446\u0438\u0438 \u041F\u0440\u043E\u0435\u043A\u0442\u044B';
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    link: Attribute.String;
    technologies: Attribute.JSON;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsProjectsSection extends Schema.Component {
  collectionName: 'components_sections_projects_sections';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432';
    displayName: '\u0421\u0435\u043A\u0446\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432';
  };
  attributes: {
    list: Attribute.Component<'sections.project-item', true>;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsServiceItem extends Schema.Component {
  collectionName: 'components_sections_service_items';
  info: {
    description: '\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u043B\u0438\u0442\u043A\u0430 \u0443\u0441\u043B\u0443\u0433\u0438';
    displayName: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0443\u0441\u043B\u0443\u0433\u0438';
  };
  attributes: {
    icon: Attribute.String;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface SectionsServicesSection extends Schema.Component {
  collectionName: 'components_sections_services_sections';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0443\u0441\u043B\u0443\u0433';
    displayName: '\u0421\u0435\u043A\u0446\u0438\u044F \u0443\u0441\u043B\u0443\u0433';
  };
  attributes: {
    list: Attribute.Component<'sections.service-item', true>;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsStats extends Schema.Component {
  collectionName: 'components_sections_stats';
  info: {
    description: '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F Hero \u0441\u0435\u043A\u0446\u0438\u0438';
    displayName: '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430';
  };
  attributes: {
    employees: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    projects: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    years: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
  };
}

export interface SectionsTeamMember extends Schema.Component {
  collectionName: 'components_sections_team_members';
  info: {
    description: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0435\u043A\u0446\u0438\u0438 \u041A\u043E\u043C\u0430\u043D\u0434\u0430';
    displayName: '\u0427\u043B\u0435\u043D\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u044B';
  };
  attributes: {
    bio: Attribute.Text;
    email: Attribute.Email;
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String;
    photo: Attribute.Media<'images'>;
    position: Attribute.String & Attribute.Required;
  };
}

export interface SectionsTeamSection extends Schema.Component {
  collectionName: 'components_sections_team_sections';
  info: {
    description: '\u0421\u0435\u043A\u0446\u0438\u044F \u0441 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C, \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0447\u043B\u0435\u043D\u043E\u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u044B';
    displayName: '\u0421\u0435\u043A\u0446\u0438\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B';
  };
  attributes: {
    list: Attribute.Component<'sections.team-member', true>;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.contacts': SectionsContacts;
      'sections.faq-item': SectionsFaqItem;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.media-item': SectionsMediaItem;
      'sections.media-section': SectionsMediaSection;
      'sections.partner-item': SectionsPartnerItem;
      'sections.partners-section': SectionsPartnersSection;
      'sections.project-item': SectionsProjectItem;
      'sections.projects-section': SectionsProjectsSection;
      'sections.service-item': SectionsServiceItem;
      'sections.services-section': SectionsServicesSection;
      'sections.stats': SectionsStats;
      'sections.team-member': SectionsTeamMember;
      'sections.team-section': SectionsTeamSection;
    }
  }
}
