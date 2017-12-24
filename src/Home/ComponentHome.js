import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  NavigatorIOS,
  TouchableHighlight,
  TextInput

} from 'react-native';
import PropTypes from 'prop-types';
import { FormInput } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
//mis componentesrom
import { ComponentText } from './ComponenteTexto';
import { ComponentMovie } from './ComponentMovie';
import { Navbar } from './Navbar';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu by Ayungan',
});*/
export class ComponentHome extends Component {
  //routing fin
  constructor(props) {
    super(props);
    //console.warn("constructor");
    this.state = {
      data: null,
      textBuscar: ''
    };
  }
  //routing
  static datosAll;//todos los datos
  static navigationOptions = {
    header: null,
    title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={20}
        style={{ color: tintColor }}
      />
    ),
  };

  componentWillMount() {
    //se ejecuta luego de haber montado el componente
    //console.warn("cargado ..Component Will Mount");
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        datosAll = responseJson.movies;//guarda todos los datos sirve para busqueda
        //console.warn(responseJson.movies);
        this.setState({
          data: responseJson.movies,
          textBuscar: ''
        });
      });
  }
  //inicio busqueda
  filterSearch(text) {
    this.setState({ text })
    let newData = this.dataFilter(text);
    //console.warn(newData);
    this.setState({
      data: newData,
      textBuscar: text,
    });
  }
  dataFilter(text) {
    //busca en datosAll ya q contiene todos los datos y no solo datos filtrados o no 
    return datosAll.filter(function (item) {
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
  }
  //fin busqueda
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <View style={styles.contentBuscar}>
            <View style={styles.icon_buscar}>
              <IconFontAwesome name="search" size={20} color="#b3afaf" />
            </View>

            <View style={styles.textInput}>
              <TextInput
              
                placeholder={'buscar'}
                onChangeText={(text) => this.filterSearch(text)}
                value={this.state.text}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerList}>
          <ComponentMovie navigation={this.props.navigation} result={this.state.data} ></ComponentMovie>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  icon_buscar: {
    marginLeft: 10,
    marginRight:10,

  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.95
  }
  , contentHeader: {
    //display:'none',
    marginTop: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f7f7f7',
    paddingBottom: 10
  }
  , contentBuscar: {
    marginTop:25,
    paddingTop:3,
    paddingBottom:3,
    flexDirection: 'row',
    backgroundColor: '#ecebeb',
    borderRadius:2,
  }
});