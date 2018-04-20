import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

class Form extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export { Form };
