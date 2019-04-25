import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { navigate } from './navigation';

export default class InitialPage extends Component {
    onPress() {
        navigate('AlbumStack');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.textStyle}>Ir para os albums</Text>
             </TouchableOpacity>
        );
    }
}

const styles = { textStyle: { alignSelf: 'center', marginTop: 200, fontSize: 60 } };
