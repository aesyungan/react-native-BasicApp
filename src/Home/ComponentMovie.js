
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ListView,
    TouchableHighlight,
    Alert,
    NavigatorIOS
} from 'react-native';
import { ComponentLoading } from '../Loader/ComponentLoading';
import { ComponentMovieDetails } from './ComponentMovieDetails';
import { Card, Button, FormLabel, FormInput,Rating } from "react-native-elements";

export class ComponentMovie extends Component {

    //para q pase los props del padre pasen al momento o en el constructor o q existan desde el constructor 
    //por q si no existira en el render
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),//se crea sin datos
        };
        //veo si llego la naegacion
        //console.warn(this.props.navigation);
        //console.warn(this.props.result);
    }

    componentWillReceiveProps(data) {
        //console.warn(data.result);
        //cuando se acttualizan los props
        if (data.result != this.props.result) {

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data.result)
            });
        }
    }
    //funcion press
    press = (rowData) => {
        const { navigate } = this.props.navigation;//optengp Navigation 
        //console.warn(navigate);
        navigate('Details', { rowData: rowData })
    };

    render() {
        //navegacion 
        //const { navigate } = this.props.navigation;
        //el render se esta acutualizando solo asi q siempre estara viendo si hay un cambio o no
        //si hay datos
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        if (this.props.result) {
           
            var res =
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Card
                            title={rowData.title}
                            image={pic}>
                            <Rating imageSize={25} showRating fractions={1} startingValue={3.4} />
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                             </Text>
                            <Button
                                onPress={() => this.press(rowData)}
                                icon={{ name: 'remove-red-eye' }}
                                backgroundColor='#03A9F4'
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Ver Ahora' />
                        </Card>

                    }
                />
        }
        return (
            <View style={styles.content2} >
                {/* si no existe result o es null mostrara cargando y si no mustra datos */}
                {this.props.result ? res : <ComponentLoading />}
            </View>
        )
    };

}
const styles = StyleSheet.create({
    content2: {
        flex: 1
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
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center'

    }
    , title: {

    }
    , img: {
        flex: 0.2,
        paddingLeft: 5,


    },
    data: {
        flex: 0.79,
        alignItems: 'center',

    }
    , imagen: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }

});
