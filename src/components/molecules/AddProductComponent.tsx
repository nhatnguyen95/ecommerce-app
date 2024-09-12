import React, {useCallback, useState} from 'react';
import {View, StyleSheet, ViewProps, Alert} from 'react-native';
import Text from '../atoms/Text';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import {Product} from '../../types/product';

interface AddProductComponentProps extends ViewProps {
  onPressAdd: ({name, price}: Product) => void;
}

const AddProductComponent: React.FC<AddProductComponentProps> = ({
  onPressAdd,
  ...props
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const _handlePressAdd = useCallback(() => {
    if (!isFinite(parseFloat(price))) {
      Alert.alert('Price is not a number');
      return;
    }
    onPressAdd({
      name,
      price: parseFloat(price),
      id: new Date().getTime().toString(),
    });
  }, [name, onPressAdd, price]);

  return (
    <View {...props} style={[styles.container, props.style]}>
      <View style={styles.inputContainer}>
        <InputField placeholder="Name" onChangeText={setName} />
        <InputField placeholder="Price" onChangeText={setPrice} />
      </View>
      <Button onPress={_handlePressAdd}>
        <Text>Add</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
  },
});

export default AddProductComponent;
