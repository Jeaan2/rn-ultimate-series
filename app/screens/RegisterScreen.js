import React from 'react';
import * as Yup from 'yup';

import { StyleSheet } from 'react-native'
import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/Forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})
function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    name="name"
                    autoCapitalize="sentences"
                    autoCorrect={false}
                    icon="account"
                    placeholder="Name"
                    textContentType="name"
                />
                <AppFormField 
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            placeholder="Email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton title="Register"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 10,
    }
})

export default RegisterScreen;