import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container,Title } from './src/global/styles/common';
import {SignIn} from './src/screens/SignIn'


export default function App() {
  return (
    <SignIn />
  );
}

