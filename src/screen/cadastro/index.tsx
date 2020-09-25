import React from 'react';
import { View} from 'react-native';

import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro () {
    const nav = useNavigation();
    return (
        <View>
                <Input
                    placeholder="Digite seu E-mail"
                    placeholderTextColor="black"
                    leftIcon={{ type: 'font-awesome', name: 'user', color: 'blue' }}
                />
                
                <Input
                    placeholder="Escolha sua Senha"
                    placeholderTextColor="black"
                    secureTextEntry = {true}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: 'blue' }}
                />
            
    <Button title="Cadastrar" style={{ width: 200, alignSelf: 'center' }} onPress = {() => nav.navigate ('Login')}  />
    </View>
    )
}