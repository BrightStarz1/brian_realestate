import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

// was c
export default function
// t h
Layout({ children }) {
// const Layout = ({ children }) => (
  // w c
  return (
    // t h
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
  // w c
};
// t h

// i commented this
// export default Layout;
