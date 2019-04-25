import React from 'react';
import { PureComponent, View } from 'react-native';
import Header from '../../components/Header';
import AlbumList from '../../components/AlbumList';

export default class AlbumsHorizontalScreen extends PureComponent {
render() {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
    }
}
