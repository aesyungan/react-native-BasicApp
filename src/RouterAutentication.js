import {ComponentLogin} from './Login/ComponentLogin';
import {ComponentRegister} from './Login/ComponentRegister';
import {
    TabNavigator,StackNavigator
  } from 'react-navigation';
  
  export  const RouterAutentication =StackNavigator ({
    Login: {screen: ComponentLogin},
    Register: {screen: ComponentRegister},
  });