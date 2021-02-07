
import React from 'react';
import Screen from './app/components/Screen';
import {  Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppButton from './app/components/AppButton';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import ListingsScreen from './app/screens/ListingsScreen';


const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <AppButton title="View Tweet" onPress={() => navigation.navigate("TweetDetails")}/>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
  <Text>Tweet Details</Text>
</Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator> 
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)
export default function App() {
  
  return (
    // <ListingsScreen />
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

