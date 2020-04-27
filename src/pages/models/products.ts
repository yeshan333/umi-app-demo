import {getData} from '../services/products';

interface Products{
  title: string,
  id: string,
  userId?: string,
  completed?: boolean
}


export default {
    namespace: 'products',
    state: [
      { title: 'dva', id: 'dva' },
      { title: 'antd', id: 'antd' },
/*       {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }, */
    ],
    reducers: {
      delete(state: Array<Products>, { payload: id}: any) {
        return state.filter(item => item.id !== id);
      },
      save(state: Array<Products>, {payload: id}: any) {
        return [...state, id];
      },
    },
    effects: {
      * getProducts({payload}, {call, put}) {
        const data = yield call(getData);  // 重点
        yield put({ type: 'save', payload: data });
      }
    },
    subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/products') {
          dispatch({
            type: 'getProducts',
          });
        }
      });
    },
    },
  };