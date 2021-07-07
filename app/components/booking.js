import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
} from "react-native";

export default class Booking extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  render() {
    const { modalVisible } = this.state;

    console.log(this.props);
    const ticketNumber = this.props.route.key;
    const { movie, seat, time, date, imageUrl } = this.props.route.params;
    return (
      <ImageBackground
        source={require("../cool.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              alert("Redirecting you to ticket page");
              this.props.navigation.navigate("Movie Details");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.view1}>
                  <Text style={styles.text1}>Name:</Text>

                  <Text style={styles.modalText}>{movie}</Text>
                </View>

                <View style={styles.view1}>
                  <Text style={styles.text1}>Date:</Text>

                  <Text style={styles.modalText}>{date}</Text>
                </View>

                <View style={styles.view1}>
                  <Text style={styles.text1}>Time:</Text>

                  <Text style={styles.modalText}>{time}</Text>
                </View>

                <View style={styles.view1}>
                  <Text style={styles.text1}>Seats:</Text>

                  <Text style={styles.modalText}>{seat}</Text>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    alert(
                      "Tickets generated. Your ticket number is: " +
                        ticketNumber
                    );
                    this.props.navigation.navigate("Latest Movies");
                  }}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
    backgroundColor: "wheat",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    height: 300,
    width: 240,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "sans-serif-medium",
  },
  text1: { marginBottom: 10, marginRight: 10, fontFamily: "sans-serif-medium" },
  view1: {
    display: "flex",
    flexDirection: "row",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "sans-serif-medium",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // or 'stretch'
  },
});
