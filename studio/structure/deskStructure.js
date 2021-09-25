import S from '@sanity/desk-tool/structure-builder';
import PreviewIFrame from './previewIFrame';

// const hiddenDocTypes = listItem => !['localePage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Locale Pages')
        .schemaType('localePage')
        .child(
          S.documentTypeList('localePage')
            .title('Locale Page')
            .child(
              S.document()
                .schemaType('localePage')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
    ]);
