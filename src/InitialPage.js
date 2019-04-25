import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { navigate } from './navigation';

export default class InitialPage extends Component {
    onPress() {
        navigate('AlbumStack');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress} style={{width:200, height:200}}>
                <Text style={{fontSize:60}}>Ir para os albums</Text>
             </TouchableOpacity>
        );
    }
}
