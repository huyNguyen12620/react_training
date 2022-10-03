import React, { Component } from "react";
import ProductItem from "./ProductItem";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class DemoXemChiTiet extends Component {

  state={
    productDetail:{
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  }

  renderProductItem = ()=>{
      return data.map((phone,index)=>{

        return(
          <ProductItem phone={phone} xemChiTiet={this.xemChiTiet} key={index}/>
        )

    
      })
  }


  xemChiTiet = (productClick) =>{
        this.setState({
              productDetail:productClick,
        })
  }
   



  render() {
    let {maSP,tenSP,manHinh,heDieuHanh,cameraSau,cameraTruoc,ram,rom,giaBan,hinhAnh} = this.state.productDetail;
   
    return (
      <div className="container">
            <div className="row">
               
              {this.renderProductItem()}
             
            </div>

            <div className="detail-product mt-2">
                <div className="row">
                  <h3>{tenSP}</h3>
                  <div className="col-3">
                    <img src={hinhAnh} className="w-100" alt="..." />
                  </div>
                  <div className="col-9">
                    <h3>Thông tin chi tiết</h3>
                          <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Màn hình</td>
                                    <td>{manHinh}</td>
                                  </tr>

                                  <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{heDieuHanh}</td>
                                  </tr>

                                  <tr>
                                    <td>Camera trước</td>
                                    <td>{cameraTruoc}</td>
                                  </tr>

                                  <tr>
                                    <td>Camera sau</td>
                                    <td>{cameraSau}</td>
                                  </tr>

                                  <tr>
                                    <td>Ram</td>
                                    <td>{ram}</td>
                                  </tr>

                                  <tr>
                                    <td>Rom</td>
                                    <td>{rom}</td>
                                  </tr>
                                </tbody>
                          </table>
                  </div>
                </div>
            </div>
      </div>
    );
  }
}
