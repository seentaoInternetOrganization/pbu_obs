/**
* @author zhaowenhui
* @descripion 新建学校
**/
import React from 'react';
import { connect } from 'dva';
import Header from '../components/layout/Header';
import Aside from '../components/layout/Aside';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import SchoolList from '../components/schoolManage/SchoolList';
import UserList from '../components/userManage/UserList';

function UserManage({ location }) {
  return (
    <section>
      <Header />
      <Aside />
      <Container location={location}>
        <UserList/>
      </Container>
      <Footer />
    </section>

  );
}

export default connect()(UserManage);
