import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';

import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
   {label: "Furniture", value: 1},
   {label: "Clothing", value: 2},
   {label: "Cameras", value: 3},
]

export default function App() {
const [category, setCategory] = useState(categories[0]);
 const [firstName, setFirstName] = useState('');
 const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} icon="apps"placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}


