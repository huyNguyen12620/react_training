import React, { Component } from 'react';
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

  state={
    arrProduct:[
      {id:1, name:'product 1', price:1000,img:'https://picsum.photos/200/200',description:'description 1' , productType:'mobile'},

      {id:2, name:'product 2', price:2000,img:'https://picsum.photos/200/200',description:'description 2' , productType:'tablet'},
    ]
  }
  
addProduct = (newProduct)=>{
  // console.log(newProduct);
 let arrProductUpdate = [...this.state.arrProduct, {...newProduct}]
  // setState
  this.setState({
      arrProduct:arrProductUpdate
  },()=>{
    this.luuStore()
  })
    
}

delProduct = (idDel)=>{
        console.log(idDel);

        let arrProductUpdate = this.state.arrProduct.filter(prod => prod.id !== idDel)
        // this.setState
          this.setState({
            arrProduct:arrProductUpdate
          },()=>{
            this.luuStore()
          })
}

layStore(){
  if(localStorage.getItem('arrProduct')){
  let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
  return arrProduct;

  }
  return [];

}

luuStore(){
  let value = JSON.stringify(this.state.arrProduct);
  localStorage.setItem('arrProduct',value);
}
  
  render() {
    return (
      <div className='container'>
        <h3>Product management</h3>
        <FormProduct addProduct={this.addProduct}/>
       <TableProduct  arrProduct={this.state.arrProduct} delProduct ={this.delProduct}/>
      </div>
    )
  }

 componentDidMount(){
  // Hàm này sẽ thực thi sau khi nội dung được render
  this.setState({
    arrProduct:this.layStore()
  })
 }
  
}
