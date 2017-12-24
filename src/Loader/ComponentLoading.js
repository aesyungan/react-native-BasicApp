
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator
} from 'react-native';
export class ComponentLoading extends Component {
    render() {
        return (
            <View style={styles.content2} >
                <ActivityIndicator size="large" color="white" />
            </View>
        )
    };

}
const styles = StyleSheet.create({
    content2: {

        justifyContent: "center",
        alignItems: "center",

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
