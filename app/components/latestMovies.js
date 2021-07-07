import React, { Component } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import getMovies from "../actions/actions";

export default class LatestMovies extends Component {
  state = {
    value: [],
  };
  constructor(props) {
    super(props);

    getMovies().then((res) => this.setState({ value: res }));
  }

  render() {
    const { value } = this.state;
    return (
      <ImageBackground
        source={require("../cool.png")}
        style={styles.backgroundImage}
      >
        <View>
          <FlatList
            data={value}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.containter}>
                <Image style={styles.image} source={{ uri: item.imageUrl }} />
                <Text style={styles.header}>{item.name}</Text>
                <Button
                  title="Details"
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate("Movie Details", item);
                  }}
                />
              </View>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    display: "flex",
    flexDirection: "column",
  },
  items: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#f9c2ff",
  },
  header: {
    fontSize: 32,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
  image: {
    height: 350,
    width: 240,
    alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "gray",
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch", // or 'stretch'
  },
});
