import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import RadioGroup from './RadioGroup';
import { DatePicker,Cascader } from 'antd';
import CityData from '../../utils/CityData';
import { routerRedux } from 'dva/router';


const { MonthPicker, RangePicker } = DatePicker;
const CITY_DATA = require('../../utils/CityData').cityData;

class SchoolFrom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        useStatus: '正式购买(已认证)',
        regular: false,
        higher: false,
        secondary: false,
        selectedIndex: 0,
        valueName: '',

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
  }

  //改变
  onChange(event){
      this.setState({
          valueName:  event.target.value,
      });
      console.log(this.state.valueName);
  }

  onChangeDate(date, dateString) {
      console.log(date, dateString);
  }

  onChangeAddress(value) {
    console.log(value);
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
                          <input
                            className=" form-control"
                            type="text"
                            value={this.state.valueName}
                            onChange={this.onChange.bind(this)}/>
                      </div>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="firstname" className="control-label col-lg-2"><span className="required">* </span>专属域名</label>
                      <div className="col-lg-10">
                          <input
                            className=" form-control"
                            type="text"
                            value={this.state.valueName}
                            onChange={this.onChange.bind(this)}/>
                      </div>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="firstname" className="control-label col-lg-2"><span className="required">* </span>组织结构ID</label>
                      <div className="col-lg-10">
                          <input
                            className=" form-control"
                            type="text"
                            value={this.state.valueName}
                            onChange={this.onChange.bind(this)}/>
                      </div>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="firstname" className="control-label col-lg-2"><span className="required">* </span>学校代码</label>
                      <div className="col-lg-10">
                          <input
                            className=" form-control"
                            type="text"
                            value={this.state.valueName}
                            onChange={this.onChange.bind(this)}/>
                      </div>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="username" className="control-label col-lg-2"><span className="required">* </span>详细地址</label>
                      <div className="col-lg-10">

                      <Cascader options={CITY_DATA} onChange={this.onChangeAddress.bind(this)} placeholder="请选择所属区域" />

                          <input className="form-control address" id="username" name="username" type="text" placeholder="请输入详细地址" />
                      </div>
                  </div>
             </div>
             <div className="right_content">
                <img src="images/77.jpg" alt="" />
                <button className="btn btn-success submit">上传</button>
             </div>
         </div>
          {renderCheckBox}
          {renderRaioGroup}
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">使用时长</label>
              <div className="col-lg-10">
                <RangePicker onChange={this.onChangeDate.bind(this)} />
              </div>
          </div>
          <div className="form-group">
              <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">使用人数</label>
              <div className="col-lg-10 user_count">
                  <input
                    className=" form-control"
                    type="num"
                    value={this.state.valueName}
                    onChange={this.onChange.bind(this)}/>
              </div>
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
