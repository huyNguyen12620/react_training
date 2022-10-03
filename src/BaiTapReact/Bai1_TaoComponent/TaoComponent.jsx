import React, { Component } from 'react'
import './assets/css/styles.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />


export default class TaoComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
