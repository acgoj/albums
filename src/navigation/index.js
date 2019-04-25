import { NavigationActions, createSwitchNavigator } from 'react-navigation';
import InitialPage from '../InitialPage';
import AlbumStackNavigator from '../modules/albums/navigation';

const SwitchNavigator = createSwitchNavigator({
    InitialPage,
    AlbumStack: AlbumStackNavigator
});

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params, action) {
    console.log(params);
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
        action
      })
    );
  }
  
  function dispatch(action) {
    navigator.dispatch(action);
  }
  
  function back() {
    navigator.dispatch(NavigationActions.back());
  }

export { setTopLevelNavigator, back, dispatch, navigate, SwitchNavigator };
