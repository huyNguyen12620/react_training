import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {

    // this.props : thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào

    /*

    So sánh : state & props

    + Giống nhau: đều là thuộc tính của react class component dùng để binding dữ liệu ra giao diện

    + Khác nhau: state có thể gán lại giá trị thông qua phương thức setState, props không thể gán lại giá trị (readonly) dùng để nhận giá trị từ component cha truyền vào.

     */

      const {person} = this.props;

    return (
      <div className='card'>
        <img src={`https://i.pravatar.cc?u=${person?.age}`} alt="..." />
        <div className="card-body">
          <p>Name: {person?.name}</p>
          <p>Age:{person?.age}</p>
          <p>Id:{person.id}</p>
        </div>
      </div>
    )
  }
}
