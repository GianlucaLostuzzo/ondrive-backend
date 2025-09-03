import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAddress extends Struct.ComponentSchema {
  collectionName: 'components_common_addresses';
  info: {
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    cap: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    citta: Schema.Attribute.String & Schema.Attribute.Required;
    lat: Schema.Attribute.String;
    lon: Schema.Attribute.String;
    nazione: Schema.Attribute.String;
    numero: Schema.Attribute.String & Schema.Attribute.Required;
    place_id: Schema.Attribute.String;
    provincia: Schema.Attribute.String & Schema.Attribute.Required;
    via: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonEnterpriseData extends Struct.ComponentSchema {
  collectionName: 'components_common_enterprise_data';
  info: {
    displayName: 'enterprise_data';
    icon: 'archive';
  };
  attributes: {
    email: Schema.Attribute.Email;
    fb: Schema.Attribute.String;
    ig: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    vatnumber: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 11;
      }>;
    whatsapp: Schema.Attribute.String;
  };
}

export interface CommonServices extends Struct.ComponentSchema {
  collectionName: 'components_common_services';
  info: {
    displayName: 'services';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface CommonType extends Struct.ComponentSchema {
  collectionName: 'components_common_types';
  info: {
    displayName: 'type';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'Meccanico',
        'Elettrauto',
        'Carrozzeria',
        'Gommista',
        'Soccorso stradale',
        'Moto',
        'Clima',
        'Cambio automatico',
        'Diagnosi',
        'Revisione',
        'Tagliando',
      ]
    > &
      Schema.Attribute.DefaultTo<'Meccanico'>;
  };
}

export interface CommonWorkTime extends Struct.ComponentSchema {
  collectionName: 'components_common_work_times';
  info: {
    displayName: 'work_time';
    icon: 'clock';
  };
  attributes: {
    closing_hour: Schema.Attribute.String;
    days: Schema.Attribute.Enumeration<['Lun - Ven', 'Sab']>;
    opening_hour: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.address': CommonAddress;
      'common.enterprise-data': CommonEnterpriseData;
      'common.services': CommonServices;
      'common.type': CommonType;
      'common.work-time': CommonWorkTime;
    }
  }
}
