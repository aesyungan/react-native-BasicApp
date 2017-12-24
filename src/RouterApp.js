import {
    DrawerNavigator, TabNavigator
} from 'react-navigation';

//vistas
import { RouterHome } from './Router/RouterHome';
import { RouterPerfil } from './Router/RouterPerfil';
export const RouterApp = TabNavigator({
    Home: { screen: RouterHome },
    Perfil: { screen: RouterPerfil },
},
    {
        initialRouteName: 'Home'
    }
);