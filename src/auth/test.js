import createAuth0Client from '@auth0/auth0-spa-js';
import {audience, clientID, domain} from "../../auth_config";

const auth0 = async ()=> await createAuth0Client({
    client_id: '2Jiu7mqUz3D4Uu6zgCpwus3UQTMq8ZK2',
    domain,
    clientID,
    redirectUri: 'http://localhost:8080/callback',
    audience,
    responseType: 'token id_token',
    scope: 'openid profile'
});

export const login = ()=>{
    auth0().then(auth => {
        auth.loginWithPopup({
            redirectUri: 'http://localhost:8080/callback'
        }).then( () =>{
            auth.getUser().then(user =>{
                console.log(user)
            })
        })
    })
}


export const logout =  () =>{
    auth0().logout()
}
