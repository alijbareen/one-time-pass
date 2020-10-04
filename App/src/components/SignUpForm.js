import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";

class SignUpForm extends Component {
  state = { phone: "" };

  handleSubmit = () => {};

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
