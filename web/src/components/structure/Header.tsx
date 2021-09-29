import React, { ReactElement, useState } from 'react';
import { HeaderMenuItem, SanityKeyed } from 'schema';
import { Link } from 'gatsby';
import { upperCase } from 'lodash';
import { Transition } from '@headlessui/react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container px-8 mx-auto pt-[1.9375rem]">
        <div className="">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link className="w-[10.625rem] text-xs" to="/">
                <img
                  src={darkTheme ? 'images/logo.png' : 'images/logo-white.png'}
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden-hotfix md:block">
                <ul className="flex items-center justify-end gap-2 lg:gap-8 ml-auto">
                  {items.map((item: HeaderMenuItem) => {
                    return (
                      <li
                        className={`px-2 lg:px-4 py-3 flex justify-center items-center h-[2.625rem] ${
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
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-200 rounded-sm bg-red-gradient hover:text hover:bg-gray-600 focus:outline-none focus:ring-offset-gray-800 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="mt-2 md:hidden " id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 rounded-sm sm:px-3 bg-red-gradient"
              >
                {items.map((item: HeaderMenuItem) => {
                  return (
                    <Link
                      key={item.linkTo}
                      className="block px-3 py-2 text-xs font-bold text-white hover:text-gray-200"
                      to={`${item.linkTo}`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {upperCase(item.title)}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Header;
