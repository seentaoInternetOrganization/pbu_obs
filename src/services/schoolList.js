import request from '../utils/request';

export function fetch(payload) {
  return request('schools.cms.list.get', payload);
}
