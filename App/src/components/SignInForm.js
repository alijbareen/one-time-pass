import axios from "axios";
import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";

const ROOT_URL =
  "https://us-central1-one-time-password-b8290.cloudfunctions.net/";

class SignInForm extends Component {
  state = { phone: "", code: "" };

  handleSubmit = async () => {
    try {
      const { phone, code } = this.state;
      let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone,
        code,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
        <View style={{ marginBottom: 10 }}>
          <Text>Enter Your Code</Text>
          <TextInput
            onChangeText={(code) => this.setState({ code })}
            value={this.state.code}
            placeholder="phone"
          />
        </View>
        <Button onPress={this.handleSubmit.bind(this)} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
