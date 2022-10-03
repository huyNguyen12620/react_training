import React, { Component } from "react";
import Modal from '../BaiTapShoesShop/Modal';


export default class ProductList extends Component {
    
    renderShoes = () =>{
    let {shoesData,viewDetail} = this.props;
        return shoesData.map((shoes,index)=>{
            return (
                <div className="col-4" key={index}>
                  <Modal shoes={shoes} viewDetail={viewDetail}/>
                </div>
            )
        })    
    }
  render() {

    return (
      <div>
        <div className="container">
          <h2>Shoes shop</h2>
          <div className="row" >
            {this.renderShoes()}
          </div>
        </div>
      </div>
    );
  }
}
