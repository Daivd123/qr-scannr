import React, {Component} from "react";
import {View, Text, Stylesheet} from "react-native";

export default class SearchScreen extends Component {
  render() {
    return( 
      <View style={Stylesheet.container}>
        <Text style ={Stylesheet.text}>Search Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent : "center",
    alignItems: "center",
    backgroundColor: "#51678a"
  },
  text: { 
    color: "#ffff",
    fontSize: 30
  }
});