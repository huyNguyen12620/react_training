import React, { Component } from 'react'

export default class HandleEvent extends Component {


  handleClick = ()=>{
    alert('hello cybersoft')
  }

    showMess = (name) =>{
      alert(`Hello ${name}`)
    }
  


  render() {
    return (
      <div className='container'>
        <button id='btnClick' onClick={(e)=>{
              alert('hello cybersoft')
        }}>Click me</button>

        <button className='btn btn-success mx-2' onClick={this.handleClick}>Click</button>
        <hr />
        <h3>Handle click params</h3>
        <button onClick={(e)=>{
          //  Gọi các hàm khác thực thi khi click
            this.showMess('Huy mentor')
        }}>Show mess</button>

      <button className='btn btn-success mx-2' onClick={this.showMess.bind(this,'Mentor Huy')}>Click</button>

      </div>
    )
  }
}
