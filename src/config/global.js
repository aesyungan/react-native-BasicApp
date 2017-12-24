import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-key";

export const onSignIn = (data) => AsyncStorage.setItem(USER_KEY, data);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                //si existe res ya si no hay dattos estara en null Porlo cuºl no esta logeado
                let resData = { success: res ? true : false, data: JSON.parse(res) };
               // console.warn(resData);
                resolve(resData);
            })
            .catch(err => reject(err));
    });
};

//METHOD deprecated
export let config = {
    logeado: false
};
