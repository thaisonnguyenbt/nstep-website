// import { languages, baseLanguage } from './languages';

import { baseLanguage, languages } from './languages';

// This is configuration for whole-document translations via sanity-intl plugin
// See https://github.com/LiamMartens/sanity-plugin-intl-input/blob/master/docs/general-configuration.md
export const i18n = {
  base: baseLanguage.name,
  languages,
  fieldNames: {
    lang: '_lang',
    references: '_langRefs',
  },
};
