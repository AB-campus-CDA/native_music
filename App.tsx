import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, StackNavigator} from "react-native-url-router";

import {spotifyToken, getAccessToken, featuredPlaylists, getAllPlaylists} from "./services/spotify";

import AllPlaylists from "./layouts/AllPlaylists";
import {storeStr} from "./utils/storage";
import OnePlaylist from "./layouts/OnePlaylist";


export default function App(): JSX.Element {
    const [spotifyCredentials, setSpotifyCredentials] = useState<spotifyToken|null>(null)
    const [allPlayLists, setAllPlayLists] = useState<featuredPlaylists|null>(null)


    useEffect(() => {
        console.log("useEffect !!")
        if (!spotifyCredentials) {
            console.log("getting access token")
            getAccessToken()
                .then(sptfTkn => {
                    setSpotifyCredentials(sptfTkn)
                    storeStr('token',sptfTkn.access_token)
                        .then(() => console.log("access token successfully added"))                })
        } else {
            // TODO move this section to AllPlaylists componaent
            console.log("getting all playlists")
            getAllPlaylists(spotifyCredentials?.access_token || "notoken")
                .then(freshList => {
                    setAllPlayLists(freshList)
                })
                .catch(err => {
                    console.error("une erreur s'est produite :",err)
                    setSpotifyCredentials(null)
                })
        }
    }, [spotifyCredentials])


    return (
        <View style={styles.container}>

            {spotifyCredentials
                ?
                // @ts-ignore
                <NativeRouter>
                    <StackNavigator>
                        <Route
                            path="/"
                            element={<AllPlaylists playlists={allPlayLists} />}
                        />
                        <Route
                            path="playlist/:playlistId"
                            element={<OnePlaylist />}
                        />

                    </StackNavigator>
                </NativeRouter>



                //TODO change the text for a nice spinning loader
                : <Text style={{color: 'white'}}>not connected :(</Text>
            }

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
      color: 'white',
      margin: 50
    }
});