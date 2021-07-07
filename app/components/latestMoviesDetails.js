import React, { Component } from "react";
import { Button, Card } from "react-native-elements";
import { AirbnbRating } from "react-native-ratings";
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Picker,
  ImageBackground,
} from "react-native";

export default class LatestMoviesDetails extends Component {
  state = {
    value: [],
    seats: "1",
    time: "7:30 pm",
    date: "07th July 2021",
    movie: "",
  };
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { name, rate, type, imageUrl, language } = this.props.route.params;
    return (
      <ImageBackground
        source={require("../cool.png")}
        style={styles.backgroundImage}
      >
        <ScrollView>
          <Card style={styles.container}>
            <Card.Title style={styles.header}>{name}</Card.Title>
            <Card.Divider />
            <View style={styles.col1}>
              <View style={styles.view1}>
                <Card.Image style={styles.image} source={{ uri: imageUrl }} />
              </View>
              <Card.Divider />
              <View style={styles.view2}>
                <View style={styles.view3}>
                  <Text style={styles.text1}>Type:</Text>

                  <Text style={styles.text2}>{type}</Text>
                </View>
                <View style={styles.view3}>
                  <Text style={styles.text1}>Language:</Text>

                  <Text style={styles.text2}>{language}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.text3}>Ratings:</Text>
                  <AirbnbRating
                    isDisabled={true}
                    count={5}
                    reviews={[
                      "Terrible",
                      "Bad",
                      "Good",
                      "Amazing",
                      "Unbelievable",
                    ]}
                    defaultRating={rate}
                    showRating={false}
                    size={20}
                  />
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text3}>No of Seats:</Text>

                  <Picker
                    selectedValue={this.state.seats}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ seats: itemValue })
                    }
                  >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                  </Picker>
                </View>
                <View style={styles.view4}>
                  <Text style={styles.text3}>Date:</Text>

                  <Picker
                    selectedValue={this.state.date}
                    style={styles.pickerDate}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ date: itemValue, movie: { name } })
                    }
                  >
                    <Picker.Item
                      label="07th July 2021"
                      value="07th July 2021"
                    />
                    <Picker.Item
                      label="21st August 2021"
                      value="21st August 2021"
                    />
                    <Picker.Item
                      label="19th January 2021"
                      value="19th January 2021"
                    />
                  </Picker>
                </View>
                <View style={styles.view4}>
                  <Text style={{ marginRight: 10, marginTop: 4 }}>Time:</Text>

                  <Picker
                    selectedValue={this.state.time ? this.state.time : ""}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ time: itemValue })
                    }
                  >
                    <Picker.Item label="7:30 pm" value="7:30 pm" />
                    <Picker.Item label="1:30 pm" value="1:30 pm" />
                    <Picker.Item label="5:00 pm" value="5:00 pm" />
                  </Picker>
                </View>
              </View>
              {console.log(this.state)}
            </View>
            <Button
              buttonStyle={styles.button}
              onPress={() => {
                const data = {
                  movie: name,
                  seat: this.state.seats,
                  imageUrl: imageUrl,
                  time: this.state.time,
                  date: this.state.date,
                };
                this.props.navigation.navigate("Book tickets", data);
              }}
              title="Book Now"
            />
          </Card>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  col1: {
    flexDirection: "column",
  },
  header: {
    fontSize: 28,
    fontFamily: "sans-serif-medium",
  },
  view1: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  view2: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginBottom: 10,
    paddingLeft: 10,
  },
  view3: {
    display: "flex",
    flexDirection: "row",
  },
  view4: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  image: { height: 300, width: 200, marginBottom: 20 },
  text1: { marginBottom: 10, marginRight: 10, fontFamily: "sans-serif-medium" },
  text2: { marginBottom: 10, fontFamily: "sans-serif-medium" },
  text3: { marginRight: 10, marginTop: 4, fontFamily: "sans-serif-medium" },
  picker: { height: 20, width: 150 },
  pickerDate: { height: 20, width: 200 },
  button: {
    borderRadius: 8,
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // or 'stretch'
  },
});
