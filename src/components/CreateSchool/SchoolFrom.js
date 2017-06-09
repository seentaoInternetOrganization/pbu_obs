import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import RadioGroup from './RadioGroup';

const RADIOSTIME = ['12个月','24个月','36个月'];
const RADIOSNUMBER = ['50人','100人','150人','200人','200人以上'];
class SchoolFrom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        useStatus: '正式购买(已认证)',
        regular: false,
        higher: false,
        secondary: false,
        selectedIndex: 0,
    }
  }

  //改变RadioGroup状态
  handlerRadioGroupChange (event) {
　　this.setState({
        useStatus: event.target.value
    });
　}

  //改变CheckBox状态
  handlerCheckBoxChange (event) {
　　　　var type = event.target.value,
　　　　　　 checked = event.target.checked,
　　　　　　 newState = {};
　　　　newState[type] = checked;
　　　　this.setState(newState);
　}
  hanlerClick(index){
    this.setState({
        selectedIndex: index
    });
    console.log(this.state.regular);
    console.log(this.state.higher);
    console.log(this.state.secondary);

  }
  render() {

    const renderRaioGroup =
            <div className="form-group">
                <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">使用状态</label>
                <div className="col-lg-10">
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="useStatus"
                                value="正式购买(已认证)"
                                checked={this.state.useStatus == '正式购买(已认证)'}
                                onChange={this.handlerRadioGroupChange.bind(this)}
                            />
                            正式购买（已认证）
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="useStatus"
                                value="试用(未认证)"
                                checked={this.state.useStatus == '试用(未认证)'}
                                onChange={this.handlerRadioGroupChange.bind(this)}
                            />
                              试用（未认证）
                        </label>
                    </div>
                </div>
            </div>

        const renderCheckBox =
            <div className="form-group">
                <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">
                    <span className="required">* </span>办学类型
                </label>
                <div className="col-lg-10">
                    <label className="checkbox-inline">
                        <input type="checkbox"
                            value="regular"
                            checked={this.state.regular}
                            onChange={this.handlerCheckBoxChange.bind(this)}
                        /> 本科
                    </label>
                    <label className="checkbox-inline">
                        <input type="checkbox"
                            value="higher"
                            checked={this.state.higher}
                            onChange={this.handlerCheckBoxChange.bind(this)}
                        /> 高职
                    </label>
                    <label className="checkbox-inline">
                        <input type="checkbox"
                            value="secondary"
                            checked={this.state.secondary}
                            onChange={this.handlerCheckBoxChange.bind(this)}
                        /> 中职
                    </label>
                </div>
            </div>

    const renderRadioButton = (radios) =>{
        return(
            <RadioGroup
                radios={radios}
                onClick={(index)=>{this.hanlerClick(index)}}
            />
        );
    }

    return(
      <form className="cmxform form-horizontal tasi-form" id="signupForm" method="get" action="">
         <div className="content">
             <div className="left_content">
                  <div className="form-group ">
                      <label htmlFor="firstname" className="control-label col-lg-2"><span className="required">* </span>学校名称</label>
                      <div className="col-lg-10">
                          <input className=" form-control" id="firstname" name="firstname" type="text" />
                      </div>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="lastname" className="control-label col-lg-2"><span className="required">* </span>组织结构ID</label>
                      <div className="col-lg-10">
                          <input className=" form-control" id="lastname" name="lastname" type="text" />
                      </div>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="username" className="control-label col-lg-2"><span className="required">* </span>详细地址</label>
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
          {renderCheckBox}
          {renderRaioGroup}
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">使用时长</label>
              {renderRadioButton(RADIOSTIME)}
          </div>
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">使用人数</label>
              {renderRadioButton(RADIOSNUMBER)}
          </div>
          <div className="form-group">
              <div className="col-lg-offset-2 col-lg-10">
                  <button className="btn btn-danger btn-create" type="button">创建学校</button>
              </div>
          </div>
      </form>
    );
  }
}

export default SchoolFrom
