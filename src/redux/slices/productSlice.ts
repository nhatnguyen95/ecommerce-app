import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types/product';

export interface ProductSliceState {
  products: Product[];
}

const initialState: ProductSliceState = {
  products: [
    {
      id: '1',
      name: 'test',
      price: 100,
    },
    {
      id: '2 ',
      name: 'test 2',
      price: 200,
    },
  ],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: create => ({
    addProduct: create.reducer((state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    }),
    deleteProduct: create.reducer(
      (state, action: PayloadAction<{id: string}>) => {
        state.products = state.products.filter(i => i.id !== action.payload.id);
      },
    ),
  }),

  selectors: {
    selectProducts: s => s.products,
  },
});

export const {addProduct, deleteProduct} = productSlice.actions;
