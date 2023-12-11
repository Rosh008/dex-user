import { ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Border from './Common/Border';
import Home from './pages/Home';

export default function App() {

  return (
    <React.StrictMode>
      <ChakraProvider>
        <Border>
          <Home />
        </Border>
      </ChakraProvider>
    </React.StrictMode>
  );
}