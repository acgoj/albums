import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AlbumsHorizontalScreen from '../screens/AlbumsHorizontalScreen';
import AlbumsVerticalScreen from '../screens/AlbumsVerticalScreen';
import AlbumDetailScreen from '../screens/AlbumDetailScreen';


const TabNavigator = createBottomTabNavigator({
    AlbumsHorizontalScreen: {
        screen: AlbumsHorizontalScreen
    },
    AlbumsVerticalScreen: {
        screen: AlbumsVerticalScreen
    }
});

const AlbumStackNavigator = createStackNavigator({
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
          }
    },
    AlbumDetailScreen: {
        screen: AlbumDetailScreen
    }
});

export default AlbumStackNavigator;
