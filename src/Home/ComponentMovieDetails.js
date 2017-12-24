import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tile } from "react-native-elements";
export class ComponentMovieDetails extends Component {

    static navigationOptions = {
        title: 'Details',
        //tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={20}
                style={{ color: tintColor }}
            />
        ),
    };

    constructor(props) {
        super(props);
        // console.warn(this.props);
        // console.warn(this.props.navigation.state.params.rowData);
    }
    render() {
        //optiene los datos de los props desde navigation
        let data = this.props.navigation.state.params.rowData;
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.content} >
                <Tile  
                    imageSrc={pic}
                    title={data.title}
                    featured
                    caption={data.releaseYear}
                />
                <View style={styles.separador}>
                    <Text style={styles.txt}>Detalles:</Text>
                </View>
                {<Text>{data.title}</Text>}
            </View >
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
        padding: 20,
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
