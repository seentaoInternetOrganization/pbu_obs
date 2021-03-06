/**
* @author zhaowenhui
* @descripion 中间内容
**/
import React from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
import SchoolFrom from '../CreateSchool/SchoolFrom';
import SchoolList from '../schoolManage/SchoolList';

function Container ({ children, location }){
    return(
      <section id="main-content">
          <section className="wrapper site-min-height">
              <div className="row">
                  <div className="col-lg-12">
                      <section className="panel">
                          <div className="panel-body">
                              <div className="form">
                                  {children}
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </section>
      </section>
    );
}
export default Container
