import React, { ReactElement } from 'react';
import { HeaderMenuItem, SanityKeyed } from 'schema';

export interface HeaderProps {
  items?: Array<SanityKeyed<HeaderMenuItem>>;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  items,
}: HeaderProps): ReactElement => {
  if (!items) return <></>;

  return (
    <div style={{ border: '1px solid black' }}>
      <h1>Header</h1>
      {items.map((item: HeaderMenuItem) => {
        return (
          <strong style={{ padding: '20px' }} key={item.linkTo}>
            {item.title}
          </strong>
        );
      })}
    </div>
  );
};

export default Header;
