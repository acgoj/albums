import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class InitialPage extends Component {
    onPress() {
        this.props.navigation.navigate('AlbumStack');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <Text>Ir para os albums</Text>
            </TouchableOpacity>
        );
    }
}
