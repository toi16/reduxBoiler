import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Form from './components/Form';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Form />
                </View>
            </Provider>
        );
    }
}

export default App; 
