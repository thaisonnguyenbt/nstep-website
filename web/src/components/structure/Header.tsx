import React, { ReactElement } from 'react';
import { HeaderMenuItem, SanityKeyed } from 'schema';
import { Link } from 'gatsby';
import { upperCase } from 'lodash';
export interface HeaderProps {
  items?: Array<SanityKeyed<HeaderMenuItem>>;
  slug?: string;
  darkTheme?: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  items,
  slug,
  darkTheme,
}: HeaderProps): ReactElement => {
  if (!items) return <></>;

  let path = slug || '';

  if (path && !path.startsWith('/')) {
    path = '/' + path;
  }

  return (
    <nav className="container mx-auto flex pt-[1.9375rem]">
      <a className="w-[10.625rem] text-xs" href="/">
        <img src={darkTheme ? 'images/logo.png' : 'images/logo-white.png'} />
      </a>
      <ul className="flex items-center justify-end gap-8 ml-auto">
        {items.map((item: HeaderMenuItem) => {
          return (
            <li
              className={`px-4 py-3 flex justify-center items-center h-[2.625rem] ${
                item.isHighLight ? 'bg-red-gradient rounded-sm' : ''
              }`}
              key={item.linkTo}
            >
              <Link
                className="text-xs font-bold text-white"
                to={`${item.linkTo}`}
              >
                {upperCase(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
