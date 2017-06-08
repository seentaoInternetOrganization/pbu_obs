import React from 'react';

class Aside extends React.Component{
  render(){
    return(
      <aside>
          <div id="sidebar"  className="nav-collapse ">
              <ul className="sidebar-menu" id="nav-accordion">
                  <li>
                      <a href="index.html">
                          <span>学校管理</span>
                      </a>
                  </li>

                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>用户管理</span>
                      </a>

                  </li>

                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>工作室管理</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>资源管理</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;" >
                          <span>课程授权</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>发布任务授权</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;" >
                          <span>服务授权</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>双师直播</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>订单管理</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;" >
                          <span>发票管理</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;">
                          <span>资金账户管理</span>
                      </a>
                  </li>
                  <li className="sub-menu">
                      <a href="javascript:;" className="active" >
                          <span>数据统计</span>
                      </a>
                  </li>


              </ul>
          </div>
      </aside>
    );
  }
}
export default Aside
