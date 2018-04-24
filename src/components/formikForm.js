import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please! email?')
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, 'pretty sure this will be hacked'),
});

const MyForm = props => (
  <Formik
  initialValues={{ email: 'jared' }}
    onSubmit={values => console.log(values)}
    validationSchema={validationSchema}
    render={props => {
      return (
        <View>
          <Text>Email</Text>
          <TextInput 
          name="email" 
          type="email" 
          onChangeText={text => props.setFieldValue('email', text)}
          value={props.values.email}
          />
          <Text>{props.errors.email}</Text>

          <Text>Password</Text>
          <TextInput 
          secureTextEntry
          name="password" 
          type="password" 
          onChangeText={text => props.setFieldValue('password', text)}
          value={props.values.password}
          />
          <Text>{props.errors.password}</Text>

          <TextInput label="First Name" name="firstName" type="name" />
          <TextInput label="Last Name" name="lastName" type="name" />
          <Button onPress={props.handleSubmit} title="SUBMIT" />
        </View>
      );
    }}
  />
);

export default MyForm;

