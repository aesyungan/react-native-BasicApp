import {
    StackNavigator,
} from 'react-navigation';

//vistas que puede tener el perfil
import {ComponentPerfil} from '../Perfil/ComponentPerfil';
export const RouterPerfil = StackNavigator({
    Perfil: { screen: ComponentPerfil },
});