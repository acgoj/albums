import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import AlbumList from '../../components/AlbumList';
import { getAlbumsHorizontal } from '../../state/actions';

const mapStateToProps = state => ({
      isLoading: state.albums.albumsHorizontal.isLoading,
      error: state.albums.albumsHorizontal.error,
      albums: state.albums.albumsHorizontal.albums
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAlbumsHorizontal
    },
    dispatch
);

class AlbumsHorizontalScreen extends PureComponent {
    async componentDidMount() {
        await this.props.getAlbumsHorizontal();
    }

    render() {
        const { isLoading, error, albums } = this.props;

        if (isLoading) return <View><Text>Carregando</Text></View>;
        else if (error) return <View><Text>Deu Erro</Text></View>;
        return (
            <View>
                <Header headerText={'Albums Horizontal'} />
                <AlbumList horizontal albums={albums} />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AlbumsHorizontalScreen);
