import React, { useEffect } from "react";
import { LogBox } from "react-native";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { enableFreeze, enableScreens } from "react-native-screens";
import * as Sentry from "@sentry/react-native";
import { withIAPContext } from "react-native-iap";
import { useSelector } from "react-redux";

import MobileAds from "react-native-google-mobile-ads";
import SocketProvider from "./src/context/SocketContext";
import StackNavigations from "./src/Navigations/StackNavigation";
import configureStore from "./src/store";
// import { OneSignal } from "react-native-onesignal";
import OneSignal from "react-native-onesignal";

import ConnectyCube from "react-native-connectycube";
import CallService from "./src/services/call-service";
import pushNotificationService from "./src/services/PushNotificationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import Toast from "react-native-toast-message";

enableFreeze();
enableScreens();

LogBox.ignoreAllLogs();

Sentry.init({
  dsn: "https://a3d1de0d9f9b4f028cf02bfe934bc868@o4504494817345536.ingest.sentry.io/4504497048322048",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  ignoreErrors: ["Non-Error exception captured"],
});

const { store } = configureStore();
CallService.getStore(store);
pushNotificationService.getStore(store);

const checkToken = async () => {
  let login = await AsyncStorage.getItem("login");
  let cred = await AsyncStorage.getItem("cred");

  if (login != null && cred != null) {
    cred = await JSON.parse(cred);
    // createConnectyCubeSession(cred, login);
  }
};

const createConnectyCubeSession = () => {
  const CREDENTIALS = {
    appId: 6703,
    authKey: "7eQODLX7ZG2eSxZ",
    authSecret: "RLAjfBYRt9gSFfs",
  };
  const CONFIG = {
    debug: { mode: 1 },
  };

  ConnectyCube.init(CREDENTIALS, CONFIG);

  // const userCredentials = {
  //   login: login,
  //   password: "12345678",
  // };

  // ConnectyCube.createSession(userCredentials)
  //   .then(session => {
  //     ConnectyCube.chat
  //       .connect({
  //         userId: session.id,
  //         password: session.token,
  //       })
  //       .then(() => {
  //         CallService.init();
  //         pushNotificationService.init();
  //       })
  //       .catch(error => {
  //         console.log("error: ", error);
  //       });
  //   })
  //   .catch(err => console.log("createSession err:", err));
};

// const requestUserPermission = async () => {
//   await messaging().requestPermission();
//   await messaging().getToken();
// };

// const notificationListener = async () => {
//   messaging().onNotificationOpenedApp(() => {});

//   messaging().onMessage(async () => {});

//   messaging()
//     .getInitialNotification()
//     .then(() => {});
// };

const App = () => {
  const navigationRef = createNavigationContainerRef();
  const { mobileNumber, email } = useSelector(store => store.userReducer);

  useEffect(() => {
    // let isMounted = true;

    const initializeOneSignal = async () => {
      OneSignal.setLogLevel(6, 0);
      OneSignal.initialize("04e507aa-792a-45f8-9d6d-55859c8dbd92");
      OneSignal.Notifications.requestPermission(true);
      OneSignal.Notifications.addEventListener(
        "click",
        handleNotificationClick
      );
    };

    const handleNotificationClick = event => {
      console.log("OneSignal: notification clicked:", event);
      if (mobileNumber || email) {
        if (event.notification.body.includes("received")) {
          navigate("moves");
        } else if (
          event.notification.additionalData.hasOwnProperty("chatRecord")
        ) {
          navigate("chat", event.notification.additionalData.chatRecord);
        }
      }
    };

    const navigate = (name, param = null) => {
      if (navigationRef.isReady()) {
        if (name == "moves") {
          setTimeout(() => {
            navigationRef.navigate("BottomTab", {
              screen: "Interactions",
            });
          }, 2700);
        } else if (name == "chat") {
          setTimeout(() => {
            navigationRef.navigate("BottomTab", {
              screen: "UserChatList",
              params: {
                screen: "UserChatListScreen",
                params: {
                  chatHeadId: param.chatHeadId,
                },
              },
            });
          }, 2700);
        }
      }
    };

    const requestUserPermission = async () => {
      await messaging().requestPermission();
      await messaging().getToken();
    };

    const notificationListener = async () => {
      messaging().onNotificationOpenedApp(() => {});

      messaging().onMessage(async () => {});

      messaging()
        .getInitialNotification()
        .then(() => {});
    };

    createConnectyCubeSession();
    initializeOneSignal();
    requestUserPermission();
    notificationListener();

    MobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log("adapterStatuses", adapterStatuses);
      })
      .catch(err => console.log("adapter err", err));

    return () => {
      // isMounted = false;
      OneSignal.Notifications.removeEventListener(
        "click",
        handleNotificationClick
      );
      // Add cleanup for any other subscriptions or async tasks here
    };
  }, []);

  // const navigate = (name, param = null) => {
  //   if (navigationRef.isReady()) {
  //     if (name == "moves") {
  //       setTimeout(() => {
  //         navigationRef.navigate("BottomTab", {
  //           screen: "Interactions",
  //         });
  //       }, 2700);
  //     } else if (name == "chat") {
  //       setTimeout(() => {
  //         navigationRef.navigate("BottomTab", {
  //           screen: "UserChatList",
  //           params: {
  //             screen: "UserChatListScreen",
  //             params: {
  //               chatHeadId: param.chatHeadId,
  //             },
  //           },
  //         });
  //       }, 2700);
  //     }
  //   }
  // };

  return (
    <SocketProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigations />
        <Toast />
      </NavigationContainer>
    </SocketProvider>
  );
};

// export default Sentry.wrap(App);
export default withIAPContext(App);
