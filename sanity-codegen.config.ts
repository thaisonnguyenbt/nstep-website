// eslint-disable-next-line import/named
import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './studio/schemas/schema.js',
  outputPath: './web/src/schema.ts',
};

export default config;
