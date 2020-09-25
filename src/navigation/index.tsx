import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screen/login';
import Principal from '../screen/Principal';
import Cadastro from '../screen/Cadastro';


const Stack = createStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
           
                <Stack.Screen component={Login} name="Login" />
                <Stack.Screen component={Principal} name="Principal" />
                
                <Stack.Screen component={Cadastro} name="Cadastro" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}