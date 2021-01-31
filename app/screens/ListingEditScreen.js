import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';


import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/Forms';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3}
];

function ListingEditScreen(props) {
    return (
        <Screen>
            <AppForm
                 initialValues={{title: '', price: '', description: '', category: null}}
                 onSubmit={values => console.log(values)}
                 validationSchema={validationSchema}
            >
            <AppFormField 
                    maxLength={255}
                    name="title"
                    autoCapitalize="none"
                    placeholder="Title"
            />
            <AppFormField 
                    name="price"
                    maxLength={8}
                    placeholder="Price"
                    keyboardType="numeric"
            />
            <AppFormPicker 
                items={categories}
                name="Category"
                placeholder="Category"
            />
            <AppFormField 
                maxLength={255}
                name="description"
                multiline
                autoCapitalize="none"
                numberOfLines={3}
                autoCorrect={false}
                placeholder="Description"
            />
                <SubmitButton title="POST"/>
            </AppForm>

        </Screen>
    );
}

export default ListingEditScreen;