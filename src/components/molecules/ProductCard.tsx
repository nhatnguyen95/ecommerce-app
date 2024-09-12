import React from 'react';

import Text from '../atoms/Text';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Product} from '../../types/product';

interface ProductCardProps extends ViewProps {
  product: Product;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onDelete,
  ...props
}) => {
  const _onDelete = () => onDelete(product.id);

  return (
    <Card style={[styles.container, props.style]}>
      <View style={styles.infoContainer}>
        <Text variant="titleMedium">Name: {product.name}</Text>
        <Text variant="bodyMedium">Price: {product.price}</Text>
      </View>
      <Button onPress={_onDelete}>
        <Text>Delete</Text>
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
  },
});

export default ProductCard;
