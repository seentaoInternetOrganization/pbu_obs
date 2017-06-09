import React from 'react';
import classnames from 'classnames';
import request from '../../utils/request'

function Header(){
  return(
    <header className="header white-bg">
        <div className="sidebar-toggle-box">
            <div data-original-title="Toggle Navigation" data-placement="right" className="fa fa-bars tooltips"></div>
        </div>
        <a href="index.html" className="logo" >运营后台</a>
        <div className="nav notify-row" id="top_menu">
          学校管理
        </div>
        <div className="top-nav ">
            <ul className="nav pull-right top-menu">
                <li className="dropdown" onClick={()=>{request('test', {})}}>
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="username">注册</span>
                    </a>
                </li>
                <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="username">登录</span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
  );
}
export default Header
