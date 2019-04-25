import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import styles from './styles';

const AlbumDetail = ({ album }) => {
  // eslint-disable-next-line camelcase
  const { title, artist, thumbnail_image, url, image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card url={url}>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
