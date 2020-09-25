import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles' 
import carteiraImage from '../../assets/carteira.png';

export default function Principal() {
    return (
        <View style={styles.containerCarteira}>

            <Image style={styles.carteira} source={carteiraImage} />
           
        </View>
    )
}