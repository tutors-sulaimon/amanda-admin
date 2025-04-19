import type { Schema, Struct } from '@strapi/strapi';

export interface BocadillosBocadillosExtra extends Struct.ComponentSchema {
  collectionName: 'components_bocadillos_bocadillos_extras';
  info: {
    description: '';
    displayName: 'BocadillosItems';
  };
  attributes: {
    others: Schema.Attribute.Component<'others.other', true>;
    priceLabel: Schema.Attribute.Component<'one.group1', false>;
  };
}

export interface CategoryItemsCategory extends Struct.ComponentSchema {
  collectionName: 'components_category_items_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InformationAdditionalInfo extends Struct.ComponentSchema {
  collectionName: 'components_information_additional_infos';
  info: {
    displayName: 'AdditionalInfo';
  };
  attributes: {
    name: Schema.Attribute.Text;
  };
}

export interface MainMainComponent extends Struct.ComponentSchema {
  collectionName: 'components_main_main_components';
  info: {
    description: '';
    displayName: 'MainComponent';
  };
  attributes: {
    BocadillosItems: Schema.Attribute.Component<
      'bocadillos.bocadillos-extra',
      true
    >;
    category: Schema.Attribute.Component<'category-items.category', true>;
    images: Schema.Attribute.Component<'menu-image.images', true>;
    products: Schema.Attribute.Component<'products.product-info', true>;
  };
}

export interface MenuImageImages extends Struct.ComponentSchema {
  collectionName: 'components_menu_image_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface NoteInfoNote extends Struct.ComponentSchema {
  collectionName: 'components_note_info_notes';
  info: {
    displayName: 'note';
  };
  attributes: {
    name: Schema.Attribute.Text;
  };
}

export interface OneGroup1 extends Struct.ComponentSchema {
  collectionName: 'components_one_group1s';
  info: {
    description: '';
    displayName: 'priceLabels';
  };
  attributes: {
    label: Schema.Attribute.JSON;
  };
}

export interface OthersOther extends Struct.ComponentSchema {
  collectionName: 'components_others_others';
  info: {
    description: '';
    displayName: 'Items';
  };
  attributes: {
    name: Schema.Attribute.String;
    prices: Schema.Attribute.JSON;
  };
}

export interface ProductsProductInfo extends Struct.ComponentSchema {
  collectionName: 'components_products_product_infos';
  info: {
    description: '';
    displayName: 'ProductInfo';
  };
  attributes: {
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TableInfoTable extends Struct.ComponentSchema {
  collectionName: 'components_table_info_tables';
  info: {
    description: '';
    displayName: 'table';
  };
  attributes: {
    name: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bocadillos.bocadillos-extra': BocadillosBocadillosExtra;
      'category-items.category': CategoryItemsCategory;
      'information.additional-info': InformationAdditionalInfo;
      'main.main-component': MainMainComponent;
      'menu-image.images': MenuImageImages;
      'note-info.note': NoteInfoNote;
      'one.group1': OneGroup1;
      'others.other': OthersOther;
      'products.product-info': ProductsProductInfo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'table-info.table': TableInfoTable;
    }
  }
}
