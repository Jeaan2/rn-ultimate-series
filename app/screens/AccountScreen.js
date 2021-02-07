import React from 'react';
import { StyleSheet,View, FlatList } from 'react-native'
import Icon from '../components/Icon';


import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES,
    }
]

function AccountScreen({ navigation }) {
    return (
       <Screen style={styles.screen}>
           <View style={styles.container}>
           <ListItem 
           title="Jean Carlo"
            subTitle="jean@jean.com.br"
            image={require('../assets/mosh.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) =>  
                <ListItem 
                    title={item.title}
                    IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    }
                    onPress={() => navigation.navigate(item.targetScreen)}
                />} />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    screen: {
        backgroundColor: colors.light
    }   
})

export default AccountScreen;