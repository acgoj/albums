import { createStackNavigator } from 'react-navigation';
import initialPage from '../InitialPage';
import albumStack from '../modules/albums/navigation';

const SwitchNavigator = createStackNavigator({
    InitialPage: initialPage,
    AlbumStack: albumStack
});

export default SwitchNavigator;
