import * as schoolListService from '../services/schoolList';
export default {

  namespace: 'schoolList',

  state: {
    schools: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(schoolListService.fetch, payload);
      yield put({
        type: 'save',
        payload: {data}
     });
    },

  },

  reducers: {
    save(state, {payload: {data: {schools}}}) {
      return { ...state, schools };
    },
  },

};
