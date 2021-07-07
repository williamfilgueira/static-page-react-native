import React from 'react';
import { View, Image, Text } from 'react-native';


import churrasco from '../../assets/churrasco.png';
import estilo from './style';

export default function Topo(){
    return(
        <View style= {estilo.box}>
            <Image style= {estilo.boxIcone} source={churrasco}/>

            <View >
                <Text style= {estilo.boxTitulo}>Churrasco em casa</Text>
                <Text style= {estilo.boxSubtitulo}>Calculando a comida e bebida</Text>
            </View>
        </View>
    );
}