import React, { Component } from 'react';
import { config, onSignIn } from '../config/global';
import {
    StyleSheet,
    View,
    Image,
    Text,
    NavigatorIOS,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
export class ComponentLogin extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    logear = () => {
        config.logeado = true;
        if (this.state.email && this.state.password) {
            let user = JSON.stringify(this.state);
            onSignIn(user).then(() => this.props.navigation.navigate("SignedIn"));

        } else {
            Alert.alert("Complete Todos Los Campos");

        }


    }

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };

    }
    render() {

        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>

                    <FormLabel>Email</FormLabel>
                    <FormInput value={this.state.email} onChangeText={(email) => this.setState({ email })} placeholder="Email address..." />

                    <FormLabel>Password</FormLabel>
                    <FormInput value={this.state.password} onChangeText={(password) => this.setState({ password })} secureTextEntry placeholder="Password..." />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={this.logear}
                    />
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="transparent"
                        textStyle={{ color: "#bcbec1" }}
                        title="Sign Up"
                        onPress={() => this.props.navigation.navigate("Register")}
                    />
                </Card>
            </View>
        )
    };

}
const styles = StyleSheet.create({
    img: {
        marginTop: 10,
        height: 100,
        width: 100,
        borderRadius: 20

    },
    content: {
        flex: 1,
        paddingTop: 0,
        alignItems: "center",
        backgroundColor: "#ccc"
    },
});
