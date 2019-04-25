import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

const Card = (props) => (
    <TouchableOpacity style={styles.containerStyle}>
      {props.children}
    </TouchableOpacity>
  );

export default Card;
