import axios from 'axios';
import {CLIENT_ID, CLIENT_SECRET} from '@env';

// first get a token
/*
curl -X POST https://accounts.spotify.com/api/token \
     -H Content-Type: application/x-www-form-urlencoded \
     -d grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret
*/

export type spotifyToken = {
    access_token: string,
    token_type: string,
    expires_in: number
}

export async function getAccessToken(): Promise<spotifyToken> {

    return await axios
        .post('https://accounts.spotify.com/api/token',
            {
                'grant_type':'client_credentials',
                'client_id':CLIENT_ID,
                'client_secret':CLIENT_SECRET,
            },
            {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(resp => {
            //console.log("* RESP :", resp.data)
            return resp.data
        })
        .catch(err => {
            console.log("getAccessToken ERROR :", err.message)
        })

}



// next get a playlist to populate home view

export type PL = {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string
    },
    href: string;
    id: string;
    images: [
        {
            url: string;
            height: number;
            width: number;
        }
    ],
        name: string,
    owner: {
    external_urls: {
        spotify: string
    };
    followers: {
        href: string;
        total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string
},
public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    },
    type: string;
    uri: string

}

export type featuredPlaylists = PL[]

export async function getAllPlaylists(token: string): Promise<featuredPlaylists> {
    const config = {headers: { 'Authorization': 'Bearer '+token }}

    return await axios
        .get('https://api.spotify.com/v1/browse/featured-playlists', config)
        .then(resp => {
            console.log("get all playlists RESP :", resp.data.playlists.items[0])
            return resp.data.playlists.items
        })
        .catch(err => {
            console.error("get all playlists ERROR :", err.message)
        })
}




export async function getOnePlaylist(token: string, id: string): Promise<any> {
    const config = {headers: { 'Authorization': 'Bearer '+token }}

    return await axios
        .get('https://api.spotify.com/v1/playlists/'+id, config)
        .then(resp => {
            console.log("get ONE playlist RESP :", resp.data)
            const {href, name, id, tracks} = resp.data
            return {href, name, id, tracks}

        })
        .catch(err => {
            console.error("get ONE" +
                " playlist ERROR :", err.message)
        })
}
