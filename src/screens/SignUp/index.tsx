/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import Input from '../../components/input';

const SignUp = () => {
  const initValue = {
    email: '',
    phone: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required('Please Enter Write Email')
      .min(8)
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please Enter Valid Email'),
    password: yup.string().required('Please Enter Valid Password').min(8),
    phone: yup.string().required('Please Enter Valid Phone').min(8),
  });

  const handleSubmitForm = (values: any, setSubmitting: any) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      console.log('values ---------> ', values);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>SignUp Form</Text>
      <View>
        <Formik
          initialValues={initValue}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) =>
            handleSubmitForm(values, setSubmitting)
          }>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            touched,
            errors,
          }) => (
            <View>
              <Input
                placeholder="Enter Email"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
              />

              <Input
                placeholder="Enter Phone"
                keyboardType="number-pad"
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                error={touched.phone && errors.phone}
              />

              <Input
                secureTextEntry={true}
                placeholder="Enter Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={touched.password && errors.password}
              />

              <View style={styles.btnContainer}>
                <TouchableOpacity
                  disabled={isSubmitting || !isValid}
                  style={[
                    styles.submitBtn,
                    {
                      backgroundColor:
                        isSubmitting || !isValid ? 'grey' : 'green',
                    },
                  ]}
                  onPress={handleSubmit}>
                  <Text style={styles.title}>Register</Text>
                </TouchableOpacity>
              </View>

              {isValid && values.email && values.password && values.phone && (
                <View style={styles.cardUSer}>
                  <Text style={styles.userDetails}>User Details</Text>
                  <Text style={styles.details}>Email: {values.email}</Text>
                  <Text style={styles.details}>Phone: {values.phone}</Text>
                  <Text style={styles.details}>
                    Password: {values.password}
                  </Text>
                </View>
              )}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;
