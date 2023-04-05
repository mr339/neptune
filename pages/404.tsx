import Link from 'next/link';
import { FC } from 'react';
import { AiFillBug } from 'react-icons/ai';

const NotFound: FC = () => {
  return (
    <div className="page-not-found">
      <div>
        <h3>
          <AiFillBug /> 404
        </h3>
        <h6>PAGE NOT FOUND</h6>
        <p className="mb-5">
          Sorry, the page you requested could not be found. Get in touch with
          the company owner.
        </p>

        <Link href="/" className="btn btn-secondary">
          Go back to home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
