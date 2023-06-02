import {FlatList, StyleSheet, View} from "react-native";
import React from "react";

import {featuredPlaylists} from "../services/spotify";

import Title from "../components/Title";
import {PlaylistVignette} from "../components/PlaylistVignette";
import {Background} from "./Background";


type AllPlaylistsProps = {
    playlists: featuredPlaylists | null
}

/**
 * Home will display the list of Spotify featured playlists
 * @param props
 * @constructor
 */
export default function AllPlaylists(props: AllPlaylistsProps): JSX.Element {
    const {playlists} = props

    //TODO move here fetch all playlists logic



    return (
        <View style={styles.container}>
            <Background/>
            <Title title={"All playlists"} pos={"top"} color={'black'}/>
            <FlatList
                numColumns={3}
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