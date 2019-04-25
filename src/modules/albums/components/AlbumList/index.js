import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from '../AlbumDetail';
import styles from './styles';

class AlbumList extends Component {
  // eslint-disable-next-line no-undef
  renderAlbums = () => this.props.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    )

  render() {
    return (
      <ScrollView horizontal={this.props.horizontal} contentContainerStyle={styles.containerStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
