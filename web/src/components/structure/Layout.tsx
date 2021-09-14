import React, { PropsWithChildren } from 'react';

export interface LayoutProps {
  pageContext: any;
}

const Layout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  pageContext,
  children,
}: PropsWithChildren<LayoutProps>): React.ReactElement => {
  console.log(pageContext);

  return <>{children}</>;
};

export default Layout;
