import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm } from 'redux-form';
import {
    ButtonGroup,
    Button,
    Fieldset,
    Form,
} from './ui';
import {
    Input,
    Switch
} from './ui/src/redux-form';

const onSubmit = (values, dispatch) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(values);
        resolve();
    }, 1500);
});

class SettingsForm extends Component {
    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <Form>
                <Fieldset label="Company Settings">
                    <Input name="company_name" label="Company Name" placeholder="Bitshares" />
                    <Input name="hol_start" label="Start of Holiday Year" placeholder="01/04/2018" />
                    <Input name="hol_end" label="End of Holiday Year" placeholder="31/03/2019" keyboardType="numeric" returnKeyType="next" blurOnSubmit={false} />
                </Fieldset>

                <Fieldset label="My Settings" last>
                    <Input name="my_name" label="My Name" placeholder="Harold Flynn" />
                    <Input name="hol_days" label="Holiday Entitlement" placeholder="20" />
                    <Input name="bank_days" label="Bank Holiday Days" placeholder="8" />
                    <Switch label="Bank Holidays Included" name="bank_inc" />
                </Fieldset>

                <Fieldset label="My Working Days">
                    <Switch label="Monday" name="monday" />
                    <Switch label="Tuesday" name="tuesday" />
                    <Switch label="Wednesday" name="wednesday" />
                    <Switch label="Thursday" name="thursday" />
                    <Switch label="Friday" name="friday" />
                    <Switch label="Saturday" name="saturday" />
                    <Switch label="Sunday" name="sunday" />
                </Fieldset>

                <ButtonGroup>
                    <Button icon="md-folder" iconPlacement="left" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save Settings</Button>
                </ButtonGroup>
            </Form>

        );
    }
}

export default reduxForm({
    form: 'settingsForm'

})(SettingsForm);
