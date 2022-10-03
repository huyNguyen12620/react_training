import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    let {itemCar,viewDetail} = this.props;
    return (
      <div className='card'>
        <img src={itemCar.img} alt="..." className='w-100'/>
        <div className="card-body">
            <h3>{itemCar.name}</h3>
            <p>{itemCar.price}</p>
            <button className='btn btn-success' onClick={()=>{
                viewDetail(itemCar)
            }} data-bs-toggle="modal" data-bs-target="#modalId">View detail</button>
        </div>

      </div>
    )
  }
}
