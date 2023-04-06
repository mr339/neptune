import ConverterComponent from '@features/converter';
import { NextPageWithLayout } from '@pages/_app';
import MainLayout from '@shared/components/layout/main';
import React from 'react';

const Converter: NextPageWithLayout = () => {
  return <ConverterComponent />;
};

export default Converter;

Converter.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
