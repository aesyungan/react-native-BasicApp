
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
export class ComponentText extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.content2} >
                <Text>Es un Componente {5 + 5}</Text>
                <Image source={pic} style={{ width: 193, height: 110 }} />
                <View style={this.props.status ? styles.on : styles.off}>

                </View>

            </View>
        )
    };

}
const styles = StyleSheet.create({
    content2: {

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc"
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
