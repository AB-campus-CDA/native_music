import {Image, StyleSheet, View} from "react-native";
import React from "react";


type PlaylistProps = {
    data: any
}

export function PlaylistVignette(props: PlaylistProps): JSX.Element {
    const {data} = props
    console.log(data.images[0].url)
    //{href, name, id, tracks}


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: data.images[0].url}} />
        </View>
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