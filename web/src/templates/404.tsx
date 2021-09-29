import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

const PageNotFound: React.FunctionComponent = (): ReactElement => {
  return (
    <div className="flex">
      <div className="mx-auto my-8">
        <h2>404</h2>
        <h2>Page not found</h2>
        <Link to="/">
          <button className="mt-4 bg-red-gradient rounded-sm text-white font-bold py-2 px-4">
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
