/**
* @author zhaowenhui
* @descripion 新建表单
**/
import React from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
import SchoolFrom from './SchoolFrom';

class Container extends React.Component{



  render(){
    return(
      <section id="main-content">
          <section className="wrapper site-min-height">
              <div className="row">
                  <div className="col-lg-12">
                      <section className="panel">
                          <div className="panel-body">
                              <div className="form">
                                  <SchoolFrom />
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </section>
      </section>
    );
  }
}
export default Container
