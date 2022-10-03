import React, { Component } from 'react'
import ProductCard from './ProductCard'


const data =[
  {id:1,name:'Quan',age:18},
  {id:2,name:'Hau',age:19},
  {id:3,name:'Sang',age:20},


]

export default class DemoProps extends Component {

  renderPerSon = () =>{
    return data.map((person,index)=>{
        return <div className="col-3" key={index}>
              <ProductCard person={person}/>
        </div>
    })
  }
  render() {

    // let person = {
    //   id:1,
    //   name:'Huy',
    //   age:22
    // };

    // let person2 = {
    //   id:2,
    //   name:'Chí',
    //   age:17
    // }

    return (
      <div className='container'>
        {/* <div className="w-25">
          <ProductCard item={person}/>
        </div>

        <div className="w-25">
          <ProductCard item={person2}/>
        </div> */}


        <div className="row">
          {this.renderPerSon()}
        </div>
      </div>

    )
  }
}
