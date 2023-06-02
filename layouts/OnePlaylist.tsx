import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";

import {getOnePlaylist, PL} from "../services/spotify";

import Title from "../components/Title";
import {PlaylistVignette} from "../components/PlaylistVignette";
import {Background} from "./Background";
import {getStr} from "../utils/storage";
import {AlbumVignette} from "../components/AlbumVignette";
import {useParams, useRoutes} from "react-router";



/**
 * Home will display the list of Spotify featured playlists
 * @constructor
 */
export default function OnePlaylist(): JSX.Element {
    //const {id} = props
    const [token, setToken] = useState<string>("")
    const [playlist, setPlaylist] = useState(null)

    const params = useParams()


    useEffect(() => {
        getStr('token').then(value => setToken(value))
    }, [])

    useEffect(() => {
        if (token!=="") {
            getOnePlaylist(token, params.playlistId)
                .then(resp => {
                    setPlaylist(resp)
                })
        }
    }, [token])


    return (
        <View style={styles.container}>
            <Background/>
            <Title title={playlist?.name} pos={"top"} color={'black'}/>
            <FlatList
                numColumns={3}
                // @ts-ignore
                data={playlist?.tracks.items}
                renderItem={ ({item}) => <AlbumVignette data={item}/>}
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