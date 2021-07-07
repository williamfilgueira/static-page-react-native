import React from 'react';
import { View, } from 'react-native';
import Topo from './components/Topo/Topo';
import Texto from './components/Texto/texto';
import Card from './components/Cards/cards';

export default function App(){
  return(
    <View>
      <Topo/>
      <Texto/>
      <Card/>
    </View>
  );
}