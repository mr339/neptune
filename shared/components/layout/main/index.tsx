import React from 'react';

import Footer from '@shared/components/layout/main/footer';
import Header from '@shared/components/layout/main/header';
import styles from './main.module.scss';

import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      <header>
        <Header></Header>
      </header>
      <main className={styles.main_height}>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
