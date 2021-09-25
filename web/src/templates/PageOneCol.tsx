import Layout from 'components/structure/Layout';
import React, { ReactElement } from 'react';
import RichText from 'components/structure/RichText';
import { CreatePageProps } from 'types/types';

const PageOneCol: React.FunctionComponent<CreatePageProps> = ({
  pageContext,
}: CreatePageProps): ReactElement => {
  const { page } = pageContext;

  if (
    !page ||
    (!page.isMultiSectionsBoby && !page._rawBody) ||
    (page.isMultiSectionsBoby && !page._rawSections)
  ) {
    return <></>;
  }
  return (
    <Layout pageContext={pageContext}>
      {!page.isMultiSectionsBoby && (
        <div className="container mx-auto">
          <RichText blocks={page._rawBody} />
        </div>
      )}
      {page.isMultiSectionsBoby &&
        page._rawSections?.map(section => {
          return (
            <div
              key={section?._key}
              style={{
                backgroundColor: section?.backgroundColor?.hex || 'inherit',
              }}
              className={!section?.isFullScreenWidth ? 'container mx-auto' : ''}
            >
              <div
                className={
                  section?.isFullScreenWidth && section.withNestedContainer
                    ? 'container mx-auto'
                    : ''
                }
              >
                <RichText blocks={section?.body} />
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default PageOneCol;
