import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id:1,
        name:'product 1',
        price:1000,
        img:'https://picsum.photos/id/2/200/200'
    }


    renderCardProduct = () =>{
        return (<div className='card'>
            {/* Nội dung render phải là string, boolean, number hoặc jsx (Có thẻ bao phủ) */}
                    <img src={this.product.img} alt="..." />
                    <div className="card-body bg-dark text-white">
                        <p>{this.product.name}</p>
                        <p>{this.product.price}</p>
                    </div>
        </div>)
    }
    

  render() {
    const title = 'cybersoft';
    const person = {
        name: 'Huy',
        age:22
    }

    const renderText = (tenLop) =>{
        return `hello ${tenLop}`
    }
   
    return (
      <div className='container'>
            <p id='pText'>{title}</p>
            <hr />

            <div className='card w-25 mt-2'>
                <img src="https://i.pravatar.cc?u=1"  alt="..." />
                <div className="card-body">
                    <p>name:{person.name}</p>
                    <p>age: {person.age}</p>
                </div>
            </div>
            <hr />
            <h3>Binding gọi hàm: Chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return. Cú pháp: {`{goiHam()}`}</h3>
            {renderText('Bootcamp28')}

            <hr />
            <h3>Binding thuộc tính tương tự binding biến và có thêm this.tenThuocTinh</h3>
            <div className="alert alert-primary">
                Product info:
                <p>id:{this.product.id}</p>
                <p>name: {this.product.name}</p>
                <p>price:{this.product.price}</p>
                <img src={this.product.img} alt="..." />
            </div>
            <hr />
            <h3>Card product</h3>
            <div className='w-25'>
            {this.renderCardProduct()}
            </div>
      </div>    
    )
  }
}
