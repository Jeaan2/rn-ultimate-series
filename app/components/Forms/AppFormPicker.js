import React from 'react';
import {useFormikContext} from 'formik';

import  AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';


function AppFormPicker({items, name, numberOfColumns, PickerItemComponent, placeholder, width}) {
    const { setFieldValue, handleChange, errors, touched, values }  = useFormikContext();
    return (
        <>
            <AppPicker 
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent ={PickerItemComponent}
                numberOfColumns={numberOfColumns}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
             />
             <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </> 
    );
}

export default AppFormPicker;