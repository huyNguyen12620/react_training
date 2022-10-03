import React, { Component } from "react";

const data = [
  { id: 1, name: "Red car", price: 1000, img: "../img/products/red-car.jpg" },
  {
    id: 2,
    name: "Black car",
    price: 2000,
    img: "../img/products/black-car.jpg",
  },
  {
    id: 3,
    name: "Silver car",
    price: 1000,
    img: "../img/products/silver-car.jpg",
  },
  {
    id: 4,
    name: "Steel car",
    price: 1000,
    img: "../img/products/steel-car.jpg",
  },
];

export default class RenderWithMap extends Component {
  renderProduct = () => {
    // output: [<tr></tr> , <tr></tr>]
    // const arrTrJsx = [];
    // for(let index = 0; index < data.length; index ++){
    //   // mỗi lần duyệt lấy ra 1 object
    //   let prod = data[index];

    //   let tr = <tr>
    //         <th>{prod.id}</th>
    //         <th>{prod.name}</th>
    //         <th>{prod.price}</th>
    //         <th><img src={prod.img} alt="" width={50} /></th>

    //   </tr>
    //    {/* Đưa vào mảng JSX */}
    //    arrTrJsx.push(tr);

    // }
    //   return  arrTrJsx;

    // Cách 2:  dùng map

    return data.map((prod, index) => {
      return <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="" width={50} />
          </td>
        </tr>
     
    });

  };

  render() {
    return (
      <div className="container">
        <h3>Render table product</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>

          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
