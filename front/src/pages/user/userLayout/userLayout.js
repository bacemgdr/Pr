// UserLayout.js
import React from 'react';
import Footer from '../../../components/footer/footer';
import Header1 from '../../../components/header/Header1';
import Header2 from '../../../components/header/Header2';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode }  from '../../../theme';
import Hero from "../../../components/hero/Hero";
import Main from '../../../components/main/Main';
import ScrollToTop from '../../../components/main/scroll/ScrollToTop';
import Header3 from '../../../components/header/Header3';







const UserLayout = ({ children }) => {

  const [theme, colorMode] = useMode();

  return (
    
     <ColorModeContext.Provider value={colorMode}>
<ScrollToTop/>
<ThemeProvider theme={theme}>
<CssBaseline />

<Header1/>
<Header2/>
<Header3/>
<Box bgcolor={theme.palette.bg.main} >
<Hero/>

<Main/>


</Box >

      {/* <main>{children}</main> */}
      <Footer />

      </ThemeProvider>

      </ColorModeContext.Provider>
  );
};

export default UserLayout;
