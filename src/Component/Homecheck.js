import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import Formbutton from "./Formbutton";


export default function Homecheck(props) {
  const { data, Test, item, _onNextScreen, _onClickCart } = props;
  return (
    <TouchableOpacity onPress={() => _onNextScreen(data.id)}>
      <View style={{ justifyContent: "space-between", margin: 10 }}>
        <Image style={styles.card} source={data.image} />
      </View>
      <View>
        <Formbutton  style={{backgroundColor: "#f2288c",
    padding: 10,
    width: 100,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
   marginLeft:40,
   marginTop:10}} buttonName="Add to cart" />
        {/* <TouchableOpacity style={styles.buttonStyle} onPress={()=>{_onClickCart(data.id)}}>
          <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>
            Click to Buy
          </Text>
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 160,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 10,
    width: 100,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
   marginLeft:40,
   marginTop:10
  },
});


