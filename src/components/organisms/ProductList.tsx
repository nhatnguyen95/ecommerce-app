import React from 'react';
import ProductCard from '../molecules/ProductCard';
import {Product} from '../../types/product';
import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';

interface ProductListProps
  extends Omit<FlatListProps<Product>, 'data' | 'renderItem'> {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onDelete,
  ...props
}) => {
  const _renderItem = ({item}: {item: Product}) => {
    return (
      <ProductCard style={styles.item} product={item} onDelete={onDelete} />
    );
  };

  return (
    <FlatList
      {...props}
      data={products}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Divider}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
  },
});

export default ProductList;
