import React, { ReactElement } from 'react';
import { HeaderMenuItem, SanityKeyed } from 'schema';
import { Link } from 'gatsby';
export interface HeaderProps {
  items?: Array<SanityKeyed<HeaderMenuItem>>;
  slug?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  items,
  slug,
}: HeaderProps): ReactElement => {
  if (!items) return <></>;

  let path = slug || '';

  if (path && !path.startsWith('/')) {
    path = '/' + path;
  }

  return (
    <div className="h-20">
      <div className="w-10 h-10 bg-logo"></div>
      {items.map((item: HeaderMenuItem) => {
        return (
          <strong
            className={`p-5 ${item.isHighLight ? 'bg-red-400' : ''}`}
            key={item.linkTo}
          >
            {item.title}
          </strong>
        );
      })}

      <Link className="float-right px-4" to={path + '/vn'}>
        VN
      </Link>
      <Link className="float-right px-4" to={path + '/en'}>
        EN
      </Link>
    </div>
  );
};

export default Header;
