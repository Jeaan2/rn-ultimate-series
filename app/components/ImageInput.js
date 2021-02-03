import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ImageInput({imageUri}) {
    return (
        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
            {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        width: 100,
        justifyContent: 'center',
        overflow: 'hidden',
       
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageInput;