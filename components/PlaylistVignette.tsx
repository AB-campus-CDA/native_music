import React from "react";
import {Image, StyleSheet} from "react-native";
import {Link} from "react-native-url-router";


type PlaylistProps = {
    data: any
}

export function PlaylistVignette(props: PlaylistProps): JSX.Element {
    const {data} = props
    //{href, name, id, tracks}


    return (
        // @ts-ignore
        <Link to={'playlist/'+data.id.toString()} style={styles.container}>
            <Image style={styles.image} source={{uri: data.images[0].url}} />
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