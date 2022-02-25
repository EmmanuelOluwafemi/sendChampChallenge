import React from 'react';

import '@fontsource/nunito-sans/800.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/300.css'

import {
  ChakraProvider
} from '@chakra-ui/react';

import theme from './utils/theme';

import {
  RecoilRoot,
} from 'recoil';

import Pricing from './pages/Pricing';

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider resetCSS theme={theme}>
        <Pricing />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
