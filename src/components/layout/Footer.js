import React from 'react';

class Footer extends React.Component{
  render(){
    return(
      <footer className="site-footer">
          <div className="text-center">
                Copyright &copy; 2017 新道科技股份有限公司 琼ICP备11002248号-3<br />
                北京市海淀区北清路68号用友软件园   三亚地址：海南省三亚市崖城镇创意产业园内
              <a href="#" className="go-top">
                  <i className="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
    );
  }
}
export default Footer
