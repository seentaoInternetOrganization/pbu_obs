import React from 'react';
import { connect } from 'dva';
import { Form, Select, Input, Button } from 'antd';

function SchoolList({ dispatch, schools }) {
  console.log(schools);
  function get() {
    dispatch({
      type: 'schoolList/fetch'
    });
  }
    return(
        <section id="main-content">
            <section className="wrapper site-min-height">
                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <div className="panel-body">
                                <div className="form">
                                    <form className="cmxform form-horizontal tasi-form" id="signupForm" method="get" action="">
                                                <div className="form-group noborder ">
                                                    <div className="col-lg-10">
                                                        <select className="form-control m-bot15 city" >
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                            <option>Option 3</option>
                                                        </select>
                                                        <select className="form-control m-bot15 city" >
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                            <option>Option 3</option>
                                                        </select>
                                                        <input type="text" className="form-control search search_new" placeholder="请输入用户名"/>
                                                        <button type="button" className="btn btn-success btn-success-new" onClick={get}>创建新学校</button>
                                                    </div>

                                                </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <div className="panel-body">
                                <section id="unseen">
                                  <table className="table table-bordered table-striped table-condensed">
                                    <thead>
                                    <tr>
                                        <th >学校名称</th>
                                        <th >基本信息</th>
                                        <th >管理员信息</th>
                                        <th >授权详情</th>
                                        <th >购买状态</th>
                                        <th >操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {schools.map((school, index)=>
                                      <tr key={index} className="content">
                                          <td >
                                            <a href="#">{school.schoolName}</a>
                                            <a href="#">ISO999999</a>
                                            <a href="#">ID:99999999</a>
                                          </td>
                                          <td >
                                            <a href="#">{school.schoolName}</a>
                                            <a href="#">ISO999999</a>
                                            <a href="#">ID:99999999</a>
                                          </td>
                                          <td >$1.38</td>
                                          <td >-0.01</td>
                                          <td >已购买</td>
                                          <td >
                                            <a className="edit">编辑</a>
                                            <a className="edit">停用</a>
                                            <a className="edit">课程授权</a>
                                            <a className="edit">服务授权</a>
                                            <a className="edit">变更管理员</a>
                                          </td>
                                      </tr>
                                    )}

                                    </tbody>
                                </table>
                                <div>分页</div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    );
}
function mapStateToProps(state) {
  const { schools } = state.schoolList;
  return {
    schools,
  };
}

export default connect(mapStateToProps)(SchoolList);
