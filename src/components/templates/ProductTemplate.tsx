import React from 'react';

import ProductList from '../organisms/ProductList';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Product} from '../../types/product';
import AddProductComponent from '../molecules/AddProductComponent';

interface ProductTemplateProps extends ViewProps {
  products: Product[];
  onDelete: (id: string) => void;
  onPressAdd: (item: Product) => void;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  products,
  onDelete,
  onPressAdd,
  ...props
}) => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <AddProductComponent
        style={styles.addProductComponent}
        onPressAdd={onPressAdd}
      />
      <ProductList products={products} onDelete={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  addProductComponent: {
    marginTop: 16,
  },
});

export default ProductTemplate;
