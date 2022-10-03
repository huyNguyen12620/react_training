import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let {shoes,viewDetail} = this.props
    return (
      <div>
            <div className="card">
                <img src={shoes.image} alt="..." className='w-100' />
                <div className="card-body">
                  <h3>{shoes.name}</h3>
                  <p>{shoes.price}$</p>
                  <button className='btn btn-dark' onClick={()=>{
                        viewDetail(shoes)
                  }} data-bs-toggle="modal" data-bs-target="#modalId">View detail</button>
                </div>
            </div>
          </div>
           
     
      
    )
  }
}
