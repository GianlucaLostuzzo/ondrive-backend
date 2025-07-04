import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonAddress extends Schema.Component {
  collectionName: 'components_common_addresses';
  info: {
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    cap: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    citta: Attribute.String & Attribute.Required;
    lat: Attribute.String;
    lon: Attribute.String;
    nazione: Attribute.String;
    numero: Attribute.String & Attribute.Required;
    place_id: Attribute.String;
    provincia: Attribute.String & Attribute.Required;
    via: Attribute.String & Attribute.Required;
  };
}

export interface CommonEnterpriseData extends Schema.Component {
  collectionName: 'components_common_enterprise_data';
  info: {
    displayName: 'enterprise_data';
    icon: 'archive';
  };
  attributes: {
    name: Attribute.String;
    vatnumber: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 11;
      }>;
  };
}

export interface CommonServices extends Schema.Component {
  collectionName: 'components_common_services';
  info: {
    displayName: 'services';
    icon: 'rocket';
  };
  attributes: {
    description: Attribute.Text;
    name: Attribute.String;
  };
}

export interface CommonWorkTime extends Schema.Component {
  collectionName: 'components_common_work_times';
  info: {
    displayName: 'work_time';
    icon: 'clock';
  };
  attributes: {
    closing_hour: Attribute.String;
    days: Attribute.Enumeration<
      ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
    >;
    opening_hour: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.address': CommonAddress;
      'common.enterprise-data': CommonEnterpriseData;
      'common.services': CommonServices;
      'common.work-time': CommonWorkTime;
    }
  }
}
