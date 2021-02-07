import React from 'react';
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        bottom: 20,
        height: 80,
        width: 80,
    }
})
export default NewListingButton;