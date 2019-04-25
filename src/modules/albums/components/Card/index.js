import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { navigate } from '../../../../navigation';

export default class Card extends PureComponent {
  onPress = () => {
    navigate('AlbumDetailScreen', { url: this.props.url });
  }  

  render() {
    return (
      <TouchableOpacity style={styles.containerStyle} onPress={this.onPress}>
        {this.props.children}
      </TouchableOpacity>
  );
  }
}

