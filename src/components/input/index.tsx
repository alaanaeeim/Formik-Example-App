import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

interface IpropsInput {
  value: string;
  placeholder: string;
  onChangeText: any;
  onBlur: any;
  error: any;
  keyboardType?: any;
  secureTextEntry?: boolean;
}

const Input = ({
  value,
  placeholder,
  onChangeText,
  onBlur,
  error,
  keyboardType,
  secureTextEntry,
}: IpropsInput) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          keyboardType={keyboardType || 'default'}
          style={styles.inp}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry || false}
        />
      </View>
      <View>
        <Text style={styles.errorMsg}>{error}</Text>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
  },
  inp: {
    fontSize: 15,
    fontWeight: '500',
    color: 'blue',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    borderRadius: 7,
    backgroundColor: '#F1F2F2',
  },
  errorMsg: {
    color: 'red',
    fontSize: 12,
    marginStart: 5,
    marginTop: 5,
  },
});
