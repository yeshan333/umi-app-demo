import React from 'react';
import { connect } from 'umi';
import ProductList from './components/ProductList';

const Products: React.FC<{dispatch: any, products: any}> = ({ dispatch, products }) => {
  function handleDelete(id: string) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }: {products: any}) => ({
  products,
}))(Products);//与 products 的 state 连接

//理解 redux 的 connect：https://juejin.im/entry/59b105585188252430288a34