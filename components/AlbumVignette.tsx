import {StyleSheet, Text, View} from "react-native";
import React from "react";


type AlbumProps = {
    title: string
}

export function AlbumVignette(props: AlbumProps): JSX.Element {
    const {title} = props

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 8,
        width: 80,
        height: 80
    },
    title: {
        fontSize: 32,
    },
});