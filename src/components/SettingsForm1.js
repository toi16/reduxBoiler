import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { settingsLoad } from '../actions';
import {
    ButtonGroup,
    Button,
    Fieldset,
    Form,
    Input,
    Switch
} from './ui';

const enhancer = withFormik({

});

const SettingsForm1 = props => {
    const { handleSubmit, setFieldValue, values } = props;

    return (
        <Form>
            <Fieldset label="Company Settings">
                <Input 
                name="companyName" 
                label="Company Name" 
                placeholder="Bitshares"
                onChangeText={text => setFieldValue('company', text)} 
                value={values.company} 
                />

                <Input 
                name="holStart" 
                label="Start of Holiday Year" 
                placeholder="01/04/2018" 
                onChangeText={text => setFieldValue('holStart', text)} 
                value={values.holStart} 
                />

                <Input 
                name="holEnd" 
                label="End of Holiday Year" 
                placeholder="31/03/2019" 
                keyboardType="numeric" 
                returnKeyType="next" 
                blurOnSubmit={false} 
                onChangeText={text => setFieldValue('holEnd', text)} 
                value={values.holEnd} 
                />
            </Fieldset>

            <Fieldset label="My Settings" last>
                <Input 
                name="myName" 
                label="My Name" 
                placeholder="Harold Flynn" 
                onChangeText={text => setFieldValue('myName', text)} 
                value={values.myName} 
                />

                <Input 
                name="holDays" 
                label="Holiday Entitlement" 
                placeholder="20" 
                onChangeText={text => setFieldValue('holDays', text)} 
                value={values.holDays} 
                />

                <Input 
                name="bankDays" 
                label="Bank Holiday Days" 
                placeholder="8" 
                onChangeText={text => setFieldValue('bankDays', text)} 
                value={values.bankDays} 
                />

                <Switch 
                label="Bank Holidays Included" 
                name="bankInc" 
                onChangeText={text => setFieldValue('bankInc', text)} 
                value={values.bankInc} 
                />
            </Fieldset>

            <Fieldset label="My Working Days">
                <Switch 
                label="Monday" 
                name="monday"
                onChangeText={text => setFieldValue('monday', text)} 
                value={values.monday}  
                />

                <Switch 
                label="Tuesday" 
                name="tuesday"
                onChangeText={text => setFieldValue('tuesday', text)} 
                value={values.tuesday}  
                />

                <Switch 
                label="Wednesday" 
                name="wednesday" 
                onChangeText={text => setFieldValue('wednesday', text)} 
                value={values.wednesday} 
                />

                <Switch 
                label="Thursday" 
                name="thursday" 
                onChangeText={text => setFieldValue('thursday', text)} 
                value={values.thursday} 
                />

                <Switch 
                label="Friday" 
                name="friday" 
                onChangeText={text => setFieldValue('friday', text)} 
                value={values.friday} 
                />

                <Switch 
                label="Saturday" 
                name="saturday" 
                onChangeText={text => setFieldValue('saturday', text)} 
                value={values.saturday} 
                />

                <Switch 
                label="Sunday" 
                name="sunday"
                onChangeText={text => setFieldValue('sunday', text)} 
                value={values.sunday} 
                />
            </Fieldset>

            <ButtonGroup>
                <Button icon="md-folder" iconPlacement="left" onPress={handleSubmit}>Save Settings</Button>
            </ButtonGroup>
        </Form>

    );
};


export default enhancer(SettingsForm1);
