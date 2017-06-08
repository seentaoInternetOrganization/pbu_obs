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
import SchoolFrom from '../components/layout/SchoolFrom';

function CreateSchool() {
  return (
    <section id="container" className="">
      <Header />
      <Aside />
      <Container />
      <Footer />
    </section>

  );
}

CreateSchool.propTypes = {
};

export default connect()(CreateSchool);
