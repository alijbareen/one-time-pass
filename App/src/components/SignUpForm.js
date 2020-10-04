import axios from "axios";
import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";

const ROOT_URL =
  "https://us-central1-one-time-password-b8290.cloudfunctions.net/";

class SignUpForm extends Component {
  state = { phone: "" };

  handleSubmit = () => {
    axios
      .post(`${ROOT_URL}/createUser`, {
        phone: this.state.phone,
      })
      .then(() => {
        axios.post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: this.state.phone,
        });
      });
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Text>Enter Your Phone Number</Text>
          <TextInput
            onChangeText={(phone) => this.setState({ phone })}
            value={this.state.phone}
            placeholder="phone"
          />
        </View>
        <Button onPress={this.handleSubmit.bind(this)} title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
