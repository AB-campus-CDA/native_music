import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";

import {spotifyToken, getAccessToken, featuredPlaylists, getAllPlaylists} from "./services/spotify";

import {LinearGradient} from "expo-linear-gradient";
import AllPlaylists from "./layouts/AllPlaylists";
import {storeStr} from "./utils/storage";

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
            <LinearGradient
                colors={[ '#fcb045', 'black', 'black']}
                style={styles.gradient}
            />

            {spotifyCredentials
                ? null
                : <Text style={{color: 'white'}}>not connected :(</Text>
            }

            {allPlayLists?.length
                ? <AllPlaylists playlists={allPlayLists} />
                : <Text style={{color: 'white'}}>no playlist</Text>
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
    gradient: {
      position: "absolute",
      zIndex:0,
        width: '100%',
        height: '100%'
    },
    text: {
      color: 'white',
      margin: 50
    }
});
