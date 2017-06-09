import request from '../utils/request';

export async function schoolBaseInfoAdd() {
  return request('/api/users');
}
/**
 * 创建学校信息
 * @param  {object}  payload 参数，包括planningCourseId
 * @return {Promise}        [description]
 */
export async function schoolBaseInfoAdd (payload) {
    const request = new Request();

    const params = {
			userName: 1,
			planningCourseId: payload.planningCourseId
		};

    request.setParams(params, APIMethodName.getPcChaptersForCMS);
    return request.startPOST();
}
