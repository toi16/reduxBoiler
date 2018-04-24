import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import SettingsForm1 from './components/SettingsForm1';
import MyForm from './components/formikForm';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <MyForm />
                </View>
            </Provider>
        );
    }
}

export default App; 
