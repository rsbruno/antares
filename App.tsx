import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container,Title } from './src/global/styles/common';

export default function App() {
  return (
    <Container>
      <Title>Hello World!!</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

