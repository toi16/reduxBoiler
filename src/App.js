import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import SettingsForm from './components/SettingsForm';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <SettingsForm />
                </View>
            </Provider>
        );
    }
}

export default App; 
