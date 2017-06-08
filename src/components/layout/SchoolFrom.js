import React from 'react';
import { Form, Select, Input, Button } from 'antd';


class SchoolFrom extends React.Component {


  render() {
    return(
      <form className="cmxform form-horizontal tasi-form" id="signupForm" method="get" action="">
         <div className="content">
             <div className="left_content">
                  <div className="form-group ">
                      <label for="firstname" className="control-label col-lg-2"><span className="required">* </span>学校名称</label>
                      <div className="col-lg-10">
                          <input className=" form-control" id="firstname" name="firstname" type="text" />
                      </div>
                  </div>
                  <div className="form-group ">
                      <label for="lastname" className="control-label col-lg-2"><span className="required">* </span>组织结构ID</label>
                      <div className="col-lg-10">
                          <input className=" form-control" id="lastname" name="lastname" type="text" />
                      </div>
                  </div>
                  <div className="form-group ">
                      <label for="username" className="control-label col-lg-2"><span className="required">* </span>详细地址</label>
                      <div className="col-lg-10">

                          <select className="form-control m-bot15 city" >
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                          </select>
                          <input className="form-control address" id="username" name="username" type="text" placeholder="请输入详细地址" />
                      </div>
                  </div>
             </div>
             <div className="right_content"><img src="images/77.jpg" alt="" /></div>
         </div>
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" for="inputSuccess"><span className="required">* </span>办学类型</label>
              <div className="col-lg-10">
                  <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox1" value="option1"/> 本科
                  </label>
                  <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox2" value="option2"/> 高职
                  </label>
                  <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox3" value="option3"/> 中职
                  </label>
              </div>
          </div>
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" for="inputSuccess">使用状态</label>
              <div className="col-lg-10">
                  <div className="radio">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                          正式购买（已认证）
                      </label>
                  </div>
                  <div className="radio">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          试用（未认证）
                      </label>
                  </div>
              </div>
          </div>
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" for="inputSuccess">使用状态</label>
              <div className="col-lg-10">
                  <div className="radio radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                          12个月
                      </label>
                  </div>
                  <div className="radio  radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          24个月
                      </label>
                  </div>

                  <div className="radio  radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          36个月
                      </label>
                  </div>
              </div>
          </div>
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" for="inputSuccess">使用人数</label>
              <div className="col-lg-10">
                  <div className="radio radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                          50人
                      </label>
                  </div>
                  <div className="radio  radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          100人
                      </label>
                  </div>
                  <div className="radio  radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          150人
                      </label>
                  </div>
                  <div className="radio  radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          200人
                      </label>
                  </div>
                  <div className="radio  radio-btn">
                      <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                          200人以上
                      </label>
                  </div>
              </div>
          </div>
          <div className="form-group">
              <div className="col-lg-offset-2 col-lg-10">
                  <button className="btn btn-danger btn-create" type="button">创建学校</button>
                  <button className="btn btn-default btn-save" type="submit">保存</button>
              </div>
          </div>
      </form>
    );
  }
}
export default SchoolFrom
