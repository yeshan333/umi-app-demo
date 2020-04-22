interface Products{
  name: string,
  id: string
}


export default {
    namespace: 'products',
    state: [
      { name: 'dva', id: 'dva' },
      { name: 'antd', id: 'antd' },
    ],
    reducers: {
      delete(state: Array<Products>, { payload: id}: any) {
        return state.filter(item => item.id !== id);
      },
    },
  };