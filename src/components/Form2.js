import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm } from 'redux-form';
import {
    ButtonGroup,
    Button,
    Fieldset,
    Form,
    Select
} from './ui';
import {
    Input,
    //Select,
    Switch
} from './ui/src/redux-form';

const onSubmit = (values, dispatch) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(values);
        resolve();
    }, 1500);
});

// const countryOptions = [
//     { label: 'Denmark', value: 'DK' },
//     { label: 'Germany', value: 'DE' },
//     { label: 'United State', value: 'US' }
// ];

class FormView extends Component {
    render() {
        const { handleSubmit, submitting } = this.props;

        return (
           
              <Form>  
                                    
                    <Fieldset label="Contact details">
                        <Input name="first_name" label="First name" placeholder="John" />
                      
                        <Input name="last_name" label="Last name" placeholder="Doe" />
                        <Input name="email" label="Email" placeholder="something@domain.com" keyboardType="email-address" returnKeyType="next" blurOnSubmit={false} />
                        <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" dataDetectorTypes="phoneNumber" keyboardType="phone-pad" />
                        <Input name="message" label="Message" placeholder="" multiline numberOfLines={5} inlineLabel={false} />
                        
                    </Fieldset>
                    
                    <Fieldset label="Shipping details" last>
                        <Input name="address" label="Address" placeholder="Hejrevej 33" />
                        <Input name="city" label="City" placeholder="Copenhagen" />
                        <Input name="zip" label="ZIP Code" placeholder="2400" />
                        {/* <Select
                            name="country"
                            label="Country"
                            options={countryOptions}
                            placeholder="Denmark"
                        /> */}
                        <Switch label="Save my details" border={false} name="save_details" />
                    </Fieldset>
                
                <ButtonGroup>
                    <Button icon="md-checkmark" iconPlacement="right" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
                </ButtonGroup>
                </Form> 
           
        );
    }
}

export default reduxForm({
    form: 'firstForm'

})(FormView);
