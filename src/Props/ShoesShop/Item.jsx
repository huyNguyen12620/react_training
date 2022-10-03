import React, { Component } from 'react'

export default class Item extends Component {


  render() {
  const {shoes} = this.props;

    return (

            <div className='card'>
              <img src={shoes.image} alt="..." />
              <div className="card-body">
                <h3>{shoes.name}</h3>
                <p>Price: {shoes.price}$</p>
                <button className='btn btn-success '>Add to cart</button>
              </div>
            
              </div>

          
    
  
    )
  }
}
