import React, { PropsWithChildren } from 'react';
import SEO from 'components/structure/Seo';
import Header from 'components/structure/Header';
import useDarkMode from 'hooks/useDarkMode';
import { PageContext } from 'types/types';
export interface LayoutProps {
  pageContext: PageContext;
}

const Layout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  pageContext,
  children,
}: PropsWithChildren<LayoutProps>): React.ReactElement => {
  const { page } = pageContext;

  const image: any = page.headerBackgroundImage?.asset;

  useDarkMode(page.darkTheme);
  return (
    <div
      className="bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url('${image?.url}')`,
      }}
    >
      <div className="container relative mx-auto bg-transparent dark:text-white dark:bg-black -top-px">
        <SEO
          title={page.title}
          description={page.description}
          image={page.seoMetaImage}
        />
        <Header items={page.menuItems} slug={page.slug?.current} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
