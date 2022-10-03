import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
      let {phone,xemChiTiet} = this.props;
    return (
      <div className="col-4"  >
      <div className="card" >
        <img src={phone.hinhAnh} alt="..." height={400}/>
        <div className="card-body">
          <h3>{phone.tenSP}</h3>
          <p>{phone.giaBan}</p>
          <button className="btn btn-success" onClick={()=>{
                xemChiTiet(phone);
          }}>View detail</button>
        </div>
      </div>
  </div>
      
    );
  }
}
