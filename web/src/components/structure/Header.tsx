import React, { ReactElement } from 'react';
import { HeaderMenuItem, SanityKeyed } from 'schema';
import { Link } from 'gatsby';
export interface HeaderProps {
  items?: Array<SanityKeyed<HeaderMenuItem>>;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  items,
}: HeaderProps): ReactElement => {
  if (!items) return <></>;

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

      <Link className="float-right px-4" to="/vn">
        VN
      </Link>
      <Link className="float-right px-4" to="/en">
        EN
      </Link>
    </div>
  );
};

export default Header;
