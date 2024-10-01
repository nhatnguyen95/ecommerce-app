import React, {useCallback, useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProductTemplate from '../components/templates/ProductTemplate';
// import NaverMapView from '@mj-studio/react-native-naver-map';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {
  addProduct,
  deleteProduct,
  productSlice,
} from '../redux/slices/productSlice';
import {Product} from '../types/product';

const ListProductScreen: React.FC = () => {
  // const ref = useRef(null);
  const products = useAppSelector(productSlice.selectors.selectProducts);
  const dispatch = useAppDispatch();

  const _handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteProduct({id}));
    },
    [dispatch],
  );

  const _handleAddProduct = useCallback(
    (product: Product) => {
      dispatch(addProduct(product));
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <NaverMapView ref={ref} style={{flex: 1}} /> */}
      <ProductTemplate
        products={products}
        onDelete={_handleDelete}
        onPressAdd={_handleAddProduct}
        style={styles.content}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});

export default ListProductScreen;
