import ConverterComponent from '@features/converter';
import { NextPageWithLayout } from '@pages/_app';
import MainLayout from '@shared/components/layout/main';
import React from 'react';

const Login: NextPageWithLayout = () => {
  return <ConverterComponent />;
};

export default Login;

Login.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
