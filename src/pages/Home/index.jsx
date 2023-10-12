import React from 'react';
import styles from './home.module.css';
import { Button, Inputs, Modal, ToolTip, Navbar } from '@/components';
import { Header, Footer } from '@/layout';

const index = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Header />
      Home Pag
      <h1>hi</h1>
      <br className="name" />
      {/* <Button/>
      <Inputs/>
      <Modal/>
      <ToolTip/> */}
    </div>
  );
};

export default index;
