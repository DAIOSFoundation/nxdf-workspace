import React, { useState, useEffect } from 'react';
// NPM Modules (firebase remote message)
import messaging from '@react-native-firebase/messaging';
// Push Configure
import NotifService from './pushConfig/NotifService';

// firebase push notification
const Push = () => {
  const [registerToken, setRegisterToken] = useState(null);
  const [fcmRegistered, setFcmRegistered] = useState(false);

  console.log('Push');

  const onRegister = (token) => {
    setRegisterToken(token.token);
    setFcmRegistered(true);
  };

  const onNotif = (notif) => {
    console.log('title ==> ', notif.title);
    console.log('message ==> ', notif.message);
  };

  const handlePerm = (perms) => {
    console.log('Permissions', JSON.stringify(perms));
  };

  const notif = new NotifService(onRegister, onNotif);

  const notificationListener = async () => {
    await messaging().onMessage((message) => {
      const { title, body } = message.notification;
      notif.localNotif(title, body);
    });
  };

  // only Android
  const notificationBackgroundListener = async () => {
    await messaging().setBackgroundMessageHandler((message): any => {
      const { title, body } = message.notification;
      notif.localNotif(title, body);
    });
  };

  useEffect(() => {
    notificationListener();
    notificationBackgroundListener();
  }, []);

  return null;
};

export default Push;
