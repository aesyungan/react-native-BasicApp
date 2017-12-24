import React, { Component } from 'react';
import { onSignOut, isSignedIn } from '../config/global';
import { ComponentLoading } from '../Loader/ComponentLoading';
import {
    StyleSheet,
    View,
    Image,
    Text,
    NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
export class ComponentPerfil extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Perfil',
        
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name={focused ? 'user' : 'user'}
                size={20}
                style={{ color: tintColor }}
            />
        ),
    });

    constructor(props) {
        super(props);
        // console.warn(this.props);
        // console.warn(this.props.navigation.state.params.rowData);
        this.state = {
            user: null,
        };
    }
    //recupera datos de usuario logeado
    componentWillMount() {
        //usuario Logeado
        isSignedIn()
            .then(res => {
                this.setState({ user: res.data });
                // console.warn(this.state.user);
            })
            .catch(err => alert("An error occurred"));
    }

    render() {
        if (this.state.user) {//si usuario esta diferende de null osea si ya ha optenido datos de storage
            var res = <Card title={this.state.user.email}>
                <View
                    style={{
                        backgroundColor: "#bcbec1",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        alignSelf: "center",
                        marginBottom: 20
                    }}
                >
                    <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
                </View>
                <Button
                    backgroundColor="#03A9F4"
                    title="SIGN OUT"
                    onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))}
                />
            </Card>
        }
        return (
            <View style={{ paddingVertical: 20 }}>
                {this.state.user ? res : <ComponentLoading />}
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
