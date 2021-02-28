import Constants from 'expo-constants';
import { set } from 'react-native-reanimated';

const settings = { 
    dev: {
        apiUrl: "http://192.168.18.18:9000/api"
    },
    staging: {
        apiUrl: "http://192.168.18.18:9000/api"
    },
    prod: {
        apiUrl: "http://192.168.18.18:9000/api"
    }
}

const getCurrentSettings = () => { 
    if(__DEV__) return settings.dev;
    if(Constants.manifest.releaseChannel === 'stating') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();