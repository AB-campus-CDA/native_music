import {Image, StyleSheet} from "react-native";
import React from "react";
import {Link} from "react-native-url-router";


type AlbumProps = {
    data: any
}

export function AlbumVignette(props: AlbumProps): JSX.Element {
    const {data} = props

    return (
        // @ts-ignore
        <Link to={'album/'+data.track.album.id.toString()} style={styles.container}>
            <Image style={styles.image} source={{uri: data.track.album.images[0].url}} />
        </Link>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 8,
        width: 80,
        height: 80
    },
    image: {
        width: 80,
        height: 80
    },
    title: {
        fontSize: 32,
    },
});