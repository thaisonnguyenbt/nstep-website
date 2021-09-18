import { languages, baseLanguage } from './languages';

// We need to figure out which language to map the preview
// of this document to. Use the 'localizedPreview' object
// to point to the base language properties. This does not
// support custom previews, only the build in 'title', 'subtitle'
// and 'media' properties.
const localizePreview = preview => {
  if (!preview) return null;
  const { select } = preview;
  if (!select) return null;
  return {
    select: {
      ...(select.title && { title: `${select.title}.${baseLanguage.name}` }),
      ...(select.subtitle && {
        subtitle: `${select.subtitle}.${baseLanguage.name}`,
      }),
      ...(select.media && { media: `${select.media}.${baseLanguage.name}` }),
    },
  };
};

const getLocaleTypeName = name => {
  if (!name || typeof name !== 'string') {
    throw new Error('Invalid type');
  }
  return 'locale' + name.charAt(0).toUpperCase() + name.slice(1);
};

export const translateTypes = docs => {
  const typesMap = {};

  return docs.reduce((docAcc, doc) => {
    const types = doc.fields.reduce((fieldAcc, field) => {
      const shouldLocalize =
        field.type !== 'reference' && (doc.localize || field.localize);
      if (!shouldLocalize || field.localize === false) return fieldAcc;

      if (typesMap[field.type]) {
        return fieldAcc;
      } else {
        const localizedType = {
          name: getLocaleTypeName(field.type),
          title: getLocaleTypeName(field.type),
          type: 'object',
          fieldsets: [
            {
              title: 'Translations',
              name: 'translations',
              options: { collapsible: true },
            },
          ],
          fields: languages.map(lang => ({
            ...field,
            title: lang.title,
            name: lang.name,
            type: field.type,
            fieldset: lang.isDefault ? null : 'translations',
          })),
        };
        typesMap[field.type] = localizedType;
        return [...fieldAcc, localizedType];
      }
    }, []);

    return [...docAcc, ...types];
  }, []);
};

export const translateFields = docs => {
  const documents = docs.map(doc => {
    // Change all the fields to object versions with properties for each
    // language, if either the document has localize: true or individual fields
    const fields = doc.fields.map(field => {
      const shouldLocalize =
        field.type !== 'reference' && (doc.localize || field.localize);
      // Use the field defined as-is if its not to be translated
      if (!shouldLocalize || field.localize === false) return field;

      return {
        ...field,
        name: field.name,
        type: getLocaleTypeName(field.type),
      };
    });

    return {
      ...doc,
      preview: localizePreview(doc.preview) || doc.preview,
      fields,
    };
  });

  return documents;
};
