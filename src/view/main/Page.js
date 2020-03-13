import React from 'react';
import Header from 'view/main/Header';
import Conntent from 'view/main/Content';
import Footer from 'view/main/Footer';
import 'view/main/Root.scss';

const Page = () => {
  return (
    <>
      <Header className='header' />
      <Conntent className='main'>almafa</Conntent>
      <Footer className='footer' />
    </>
  );
};

export { Page as default };
