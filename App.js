import React, {Component} from "react";
import {Rajdhani_600SemiBold} from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

async loadFonts() {
  await Font.loadAsynce({
    Rajdhani_600SemiBold: Rajdhani_600SemiBold
  });
  this.setState({fontLoaded: true});
}

componentDidMount() {
  this.loadFonts();
}

render() {
  const {fontloaded} = this.state;
  if (fontLoaded){
    return <BottomTabNavigator/>;
  }
  return null;
}
}