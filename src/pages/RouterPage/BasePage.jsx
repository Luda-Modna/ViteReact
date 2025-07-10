import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/RouterPageComponents/Header';
import Footer from '../../components/RouterPageComponents/Footer';
import styles from '../../components/RouterPageComponents/RouterPage.module.sass';

function BasePage () {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default BasePage;
