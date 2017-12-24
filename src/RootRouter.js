import { StackNavigator, TabNavigator,DrawerNavigator } from "react-navigation";
import {RouterAutentication} from './RouterAutentication';
import {RouterApp} from './RouterApp';
export const createRootNavigator = (logeado = false) => {
    return StackNavigator(
      {
        SignedIn: {//quiere decir que esta logeado
          screen: RouterApp,
          navigationOptions: {
            gesturesEnabled: false
          }
        },
        SignedOut: {//no esta logeado
          screen: RouterAutentication,
          navigationOptions: {
            gesturesEnabled: false
          }
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: logeado ? "SignedIn" : "SignedOut"
      }
    );
  };