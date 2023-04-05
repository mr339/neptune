import PrimaryButton from '@shared/components/buttons/primary-button';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const BtnLogin = () => {
  // HOOKS
  const router = useRouter();

  //STATES
  const [btnLabel, setBtnLabel] = useState('');

  //FUNCTIONS
  const handleLogout = () => {
    deleteCookie('isLoggedIn');
  };

  return (
    <>
      <div className="">
        {btnLabel === 'Go Back' && (
          <Link
            href={'/'}
            className="btn btn-primary"
          >
            {btnLabel}
          </Link>
        )}
        {btnLabel === 'Login' && (
          <Link href={'/auth/login'} className="btn btn-primary">
            {btnLabel}
          </Link>
        )}
        {btnLabel === 'Logout' && (
          <PrimaryButton
            btnFunction={handleLogout}
            type="button"
            btnLabel={btnLabel}
          />
        )}
      </div>
    </>
  );
};

export default BtnLogin;
