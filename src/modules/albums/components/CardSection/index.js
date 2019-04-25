import React, { PureComponent } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class CardSection extends PureComponent {
  render() {
    return ( 
    <View style={styles.containerStyle}>
      {this.props.children}
    </View> 
    );
  }
}

