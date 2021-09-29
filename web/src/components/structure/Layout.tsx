import React, { PropsWithChildren } from 'react';
import SEO from 'components/structure/Seo';
import Header from 'components/structure/Header';
import useDarkMode from 'hooks/useDarkMode';
import { PageContext } from 'types/types';
import FooterDark from './FooterDark';
import FooterLight from './FooterLight';
export interface LayoutProps {
  pageContext: PageContext;
}

const Layout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  pageContext,
  children,
}: PropsWithChildren<LayoutProps>): React.ReactElement => {
  const { page } = pageContext;

  const image: any = page.headerBackgroundImage?.asset;
  useDarkMode(page.darkTheme, page.backgroundColor);

  return (
    <div
      className="bg-no-repeat bg-auto sm:bg-contain"
      style={{
        backgroundImage: image?.url ? `url('${image?.url}')` : 'none',
      }}
    >
      <div className="relative bg-transparent dark:text-white dark:bg-black -top-px sm:px-0">
        <SEO
          title={page.title}
          description={page.description}
          image={page.seoMetaImage}
        />
        <Header
          items={page.menuItems}
          slug={page.slug?.current}
          darkTheme={page.darkTheme}
        />
        <div>{children}</div>
        {page.darkTheme ? <FooterDark /> : <FooterLight />}
      </div>
    </div>
  );
};

export default Layout;
