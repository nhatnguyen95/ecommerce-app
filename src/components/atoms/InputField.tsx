import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface InputFieldProps extends TextInputProps {}

const InputField: React.FC<InputFieldProps> = props => {
  return <TextInput {...props} style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default InputField;
