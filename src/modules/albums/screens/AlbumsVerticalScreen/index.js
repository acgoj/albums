import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import AlbumList from '../../components/AlbumList';
import { getAlbumsVertical } from '../../state/actions';

const mapStateToProps = state => ({
      isLoading: state.albums.albumsVertical.isLoading,
      error: state.albums.albumsVertical.error,
      albums: state.albums.albumsVertical.albums
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAlbumsVertical
    },
    dispatch
);

class AlbumsVerticalScreen extends PureComponent {
    async componentDidMount() {
        await this.props.getAlbumsVertical();
    }

    render() {
        const { isLoading, error, albums } = this.props;

        if (isLoading) return <View><Text>Carregando</Text></View>;
        else if (error) return <View><Text>Deu Erro</Text></View>;
        return (
            <View>
                <Header headerText={'Albums Vertical'} />
                <AlbumList albums={albums} />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AlbumsVerticalScreen);
