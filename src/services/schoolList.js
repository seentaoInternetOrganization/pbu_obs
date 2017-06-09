import request from '../utils/request';

export function fetch({}) {
  return request('schools.cms.list.get');
}
