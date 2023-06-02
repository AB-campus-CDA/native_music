import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";

import {featuredPlaylists, getOnePlaylist} from "../services/spotify";

import Title from "../components/Title";
import {PlaylistVignette} from "../components/PlaylistVignette";


type HomeProps = {
    playlists: featuredPlaylists | null
}

/**
 * Home will display the list of Spotify featured playlists
 * @param props
 * @constructor
 */
export default function OnePlaylist(props: HomeProps): JSX.Element {
    const {playlists} = props



    return (
        <View style={styles.container}>
            <Title title={"All playlists"} pos={"top"} color={'black'}/>
            <FlatList
                data={playlists}
                renderItem={ ({item}) => <PlaylistVignette data={item}/>}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});