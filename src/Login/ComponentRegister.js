import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
export class ComponentRegister extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Register',
    });

    constructor(props) {
        super(props);
        // console.warn(this.props);
        // console.warn(this.props.navigation.state.params.rowData);
    }
    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="Email address..." />
                    <FormLabel>Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Password..." />
                    <FormLabel>Confirm Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Confirm Password..." />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN UP"
                        onPress={() => this.props.navigation.navigate("SignedIn")}
                    />
                
                </Card>
            </View>
        )
    };

}
const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 400,
        flex: 0.35
    },
    content: {
        flex: 1,
        paddingTop: 0,
        alignItems: "center",
        backgroundColor: "#ccc"
    },
    separador: {
        alignSelf: 'stretch',
        padding: 3,
        flex: 0.05,
        backgroundColor: '#4c4a4a'
    },
    txt: {
        color: 'white'
    },
    on: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    off: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }

});
