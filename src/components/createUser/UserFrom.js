import React from 'react';
import { connect } from 'dva';
import { Form, Select, Input, Button } from 'antd';
import { Link } from 'react-router';

function UserFrom() {
    return(


                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <div className="panel-body">
                                <div className="form">
                                    <form className="cmxform form-horizontal tasi-form form_box" id="signupForm" method="get" action="">
                                          <div className="form-group noborder ">
                                              <label for="firstname" className="control-label col-lg-2">姓名<span className="required">* </span></label>
                                              <div className="col-lg-10">
                                                  <input className=" form-control" id="firstname" name="firstname" type="text" />
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label for="lastname" className="control-label col-lg-2">手机号<span className="required">* </span></label>
                                              <div className="col-lg-10">
                                                  <input className=" form-control" id="lastname" name="lastname" type="text" />
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label className="control-label col-lg-2">邮箱</label>
                                              <div className="col-lg-10">
                                                  <input className=" form-control" id="lastname" name="lastname" type="text" />
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label for="lastname" className="control-label col-lg-2">教学身份<span className="required">* </span></label>
                                              <div className="col-lg-10">
                                                  <select className="form-control m-bot15" >
                                                      <option>Option 1</option>
                                                      <option>Option 2</option>
                                                      <option>Option 3</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label className="control-label col-lg-2">学号/教工号<span className="required">* </span></label>
                                              <div className="col-lg-10">
                                                  <input className=" form-control" id="lastname" name="lastname" type="text" />
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label for="lastname" className="control-label col-lg-2">学院</label>
                                              <div className="col-lg-10">
                                                  <select className="form-control m-bot15" >
                                                      <option>Option 1</option>
                                                      <option>Option 2</option>
                                                      <option>Option 3</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label className="control-label col-lg-2">专业</label>
                                              <div className="col-lg-10">
                                                  <select className="form-control m-bot15" >
                                                      <option>Option 1</option>
                                                      <option>Option 2</option>
                                                      <option>Option 3</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="form-group noborder ">
                                              <label className="control-label col-lg-2">班级</label>
                                              <div className="col-lg-10">
                                                  <select className="form-control m-bot15" >
                                                      <option>Option 1</option>
                                                      <option>Option 2</option>
                                                      <option>Option 3</option>
                                                  </select>
                                              </div>
                                          </div>
                                        <div className="form-group noborder">
                                            <div className="col-lg-offset-2 col-lg-10">
                                                <button className="btn btn-danger btn_create" type="button"><a className="mem_edit" data-toggle="modal" href="#myModal">确认添加</a></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>



    );
}


export default UserFrom
