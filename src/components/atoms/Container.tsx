import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

const Container: React.FC<SafeAreaViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Container;
