import React from 'react';
import { View, Text, Image } from 'react-native';

import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import logoImage from '../../assets/logo.png';
import { styles } from './styles';

import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
    const nav = useNavigation();

    interface usuario {
        email: string;
        senha: string;
    }



    async function logar(data: usuario) {
        console.log("Logado com Sucesso")
        await new Promise(resolve => setTimeout(() => resolve(), 1000))
        if (data.email == 'teste@teste.com' && data.senha == '123456') {
            nav.navigate('Principal')
        } else {
            // setErro('Email ou senha invalido');
        }
    }

    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={logoImage} />

          

            <Formik
                initialValues={{ email: '', senha: '' }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('O campo E-mail é obrigatório!').email('Precisa ser um email válido!'),
                    senha: Yup.string().required('O campo Senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!')
                })}
                onSubmit={logar}
            >
                {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                    <View>
                        <Input
                            placeholder="Digite seu E-mail"
                            placeholderTextColor="black"
                            value={values.email}
                            leftIcon={{ type: 'font-awesome', name: 'user', color: 'blue' }}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                        />
                        {touched.email && <Text style={{color:"red", fontSize: 20}}>{errors.email}</Text>}
                        
                        <Input
                            placeholder="Digite sua Senha"
                            placeholderTextColor="black"
                            value={values.senha}
                            secureTextEntry = {true}
                            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'blue' }}
                            onChangeText={handleChange("senha")}
                            onBlur={handleBlur("senha")}
                        />
                        {touched.senha && <Text style={{color:"red", fontSize: 20}}>{errors.senha}</Text>}


                        <Button title="Logar" style={{ width: 200, alignSelf: 'center' }} onPress={() => handleSubmit()} />
                    </View>
                )}
            </Formik>
            <Button title="Cadastre-se" style={{ width: 200 }} onPress = {() => nav.navigate ('Cadastro')}  />
        </View>
    );
}