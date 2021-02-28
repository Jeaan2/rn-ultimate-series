import { useEffect } from 'react'
import expoPushTokensApi from '../api/expoPushTokens';
import Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default useNotifications = (notificationListener) => { 
    useEffect(() => {
        registerForPushNotifications();
    
        if(notificationListener) Notifications.addListener(notificationListener);
      }, [])
    
      const registerForPushNotifications = async () => {
    
        try {
          const permission = Permissions.askAsync(Permissions.NOTIFICATIONS);
          if(!permission.granted) return;
      
          const token = await Notifications.getExpoPushTokenAsync();
          expoPushTokensApi.register(token);
        } catch (error) {
          console.log("error get push token", error)
        }
    
      }
}