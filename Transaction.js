import React, {Component} from "react";
import{
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image
} from "react-native";
import* as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

const bgImage = require ("../assets/background2.png");
const appIcon = require("../assets appIcon.png");
const appName = require("../assets/appName.png");

export default class TransactionScreen extends Component {}
constructor(props) {
  super(props);
  this.state = {
    bookId: "",
    studentId: "",
    domState: "normal",
    hasCameraPermissions: null,
    scanned: false
  };
}

getCameraPermissions = async domState => {
  const {status} = await Permissions.askAsync(Permissions.CAMERA);
}