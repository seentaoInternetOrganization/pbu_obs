import React from 'react';
import { connect } from 'dva';
import { Form, Select, Input, Button } from 'antd';
import { Link } from 'react-router';
import { RadioGroup } from '../CreateSchool/RadioGroup';

function UserList() {
    const Search = Input.Search;
    const TITLE = ['序号','姓名','手机','邮箱','所在学校','所在专业','所在班级','身份','操作'];
    const RADIO_TITLE = ['在职','离职'];
    function renderTableItem() {
            return(
                TITLE.map((title,index)=>
                    <th key={index} style={{textAlign:'center'}}>{title}</th>
                )
            );
    }

    function renderTable(){
        return(
            <table className="table table-bordered table-striped table-condensed">
                <thead>
                  <tr>
                        {renderTableItem()}
                  </tr>
                </thead>
                <tbody>
                  <tr className="content">
                        {renderTableItem()}

                  </tr>
                </tbody>
            </table>
        );
    }
    return(

                  <div>
                  <h2 className="current_school">当前学校：北京大学</h2>
                  <div className="identity">
                    <span>身份</span>
                    <a  className="current">全部</a>
                    <a href="">教师</a>
                    <a href="">学生</a>
                    <a href="">管理员</a>
                  </div>
                  <Search
                      placeholder="请输入用户名"
                      style={{ width: 300 ,borderColor: '#e2e2e4',marginTop:10}}
                      onSearch={()=>{}}
                    />
                    <div className="btn-group block">
                      <button className="btn btn-success" type="button">在职</button>
                      <button className="btn btn-white" type="button">离职</button>
                      <Link to='/CreateUser'>
                        <a href="#"><i className="fa fa-plus-square"></i>添加新成员</a>
                      </Link>
                  </div>
                  {renderTable()}
                  <p className="countall">用户授权小计：38个教师、2个管理员、150个学生</p>
                  <button className="paging">翻 页</button>
                  </div>
    );
}


export default UserList
