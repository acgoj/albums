import React, { PureComponent } from 'react';
import { WebView } from 'react-native';
import { withNavigation } from 'react-navigation';

class AlbumDetailScreen extends PureComponent {
    render() {
        return (
            <WebView
                source={{ uri: this.props.navigation.state.params.url }}
                automaticallyAdjustContentInsets 
            />
        );
    }
}

export default withNavigation(AlbumDetailScreen);
