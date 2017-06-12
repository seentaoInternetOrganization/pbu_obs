import React from 'react';
import { connect } from 'dva';
import { Form, Select, Input, Button} from 'antd';
import { Link } from 'react-router';

function SchoolList({ dispatch, schools }) {
  const Option = Select.Option;
  const Search = Input.Search;
  const USESTATUS = ['启用','过期','停用'];
  const BUYSTATUS = ['购买状态','最近一个月','最近一年','最近三年'];
  const TABLETITLE = ['学校名称','基本信息','管理员信息','授权详情','购买状态','操作'];
  console.log(schools);
  function get() {
    dispatch({
      type: 'schoolList/fetch',
      payload: {params:{}, needUserInfo:false}
    });
  }

  function handleChange(value) {
      console.log(`selected ${value}`);
  }

  function renderSelect (arr){
      return(
          <Select
              defaultValue={arr[0]}
              style={{ width: 120,marginTop:10,marginRight:15}}
              onChange={handleChange}>
              {arr.map((item,index)=>
                  <Option value={item}>{item}</Option>
              )}
          </Select>

    );
  }

  function renderTable (){
      return(
          <div className="row">
              <div className="col-lg-12">
                  <section className="panel">
                      <div className="panel-body">
                          <section id="unseen">
                            <table className="table table-bordered table-striped table-condensed">
                              <thead>
                              <tr>
                                  {TABLETITLE.map((title,index)=>
                                      <th style={{textAlign:'center'}}>{title}</th>
                                  )}
                              </tr>
                              </thead>
                              <tbody>
                              {USESTATUS.map((school, index)=>
                                <tr key={index} className="content">
                                    <td style={{justifyContent:"center"}}>
                                      <span className="tb_span">{school}</span>
                                      <span className="tb_span">ISO999999</span>
                                      <span className="tb_span">ID:99999999</span>
                                    </td>
                                    <td style={{justifyContent:"center"}}>
                                      <span className="tb_span">{school}</span>
                                      <span className="tb_span">ISO999999</span>
                                      <span className="tb_span">ID:99999999</span>
                                    </td>
                                    <td style={{justifyContent:"center"}}>$1.38</td>
                                    <td style={{justifyContent:"center"}}>-0.01</td>
                                    <td style={{justifyContent:"center"}}>已购买</td>
                                    <td style={{justifyContent:"center"}}>
                                    <a className="edit">编辑</a>
                                    <a className="edit">专营使用权</a>
                                      <a className="edit">停用</a>
                                      <a className="edit">课程授权</a>
                                      <a className="edit">服务授权</a>
                                      <Link to='/UserManage'>
                                          <a className="edit">成员管理</a>
                                      </Link>
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

      )
  }

    return(
        <div>
                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <div className="panel-body">
                                <div className="form">
                                    <form className="cmxform form-horizontal tasi-form" id="signupForm" method="get" action="">
                                                <div className="form-group noborder ">
                                                    <div className="col-lg-10">
                                                        {renderSelect(USESTATUS)}
                                                        {renderSelect(BUYSTATUS)}
                                                        <Search
                                                            placeholder="请输入用户名"
                                                            style={{ width: 300 ,borderColor: '#e2e2e4',marginTop:10}}
                                                            onSearch={get}
                                                          />
                                                    </div>
                                                  <Link to='/CreateSchool'>
                                                      <button type="button" className="btn btn-success btn-success-new" >
                                                          创建新学校
                                                      </button>
                                                  </Link>
                                                </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {renderTable()}
        </div>

    );
}
function mapStateToProps(state) {
  const { schools } = state.schoolList;
  return {
    schools,
  };
}

export default connect(mapStateToProps)(SchoolList);
