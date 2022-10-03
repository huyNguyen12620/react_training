import React, { Component } from 'react'
import style from './StyleWithJSX.module.scss';


export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className='container'>
        <h3>StyleWithJSX</h3>
        <p className='text-red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora optio veniam amet natus nemo repudiandae iste a reprehenderit veritatis laboriosam eos voluptate odio aspernatur, provident excepturi impedit hic voluptatem!</p>

        <h3 className={`p-2 bg-dark  ${style['text-blue']}`}>Hello FE28</h3>

        <hr />
        <p style={{color:'red' , background:`url(https://picsum.photos/500/500)`,height:500}}>Hello cybersoft</p>
      </div>
    
    )
  }
}
