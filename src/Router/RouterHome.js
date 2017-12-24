import {
    StackNavigator,
} from 'react-navigation';

//vistas
import {ComponentHome} from '../Home/ComponentHome';
import {ComponentMovieDetails} from '../Home/ComponentMovieDetails';

export const RouterHome = StackNavigator({
    Movies: { screen: ComponentHome },
    Details: { screen: ComponentMovieDetails }
});