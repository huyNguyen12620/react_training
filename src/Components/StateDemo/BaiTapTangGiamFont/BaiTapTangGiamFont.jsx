import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {

    state = {
      fSize:16, //default 16px 
    }

  render() {
    return (
      <div className='container'>
        <h3>Bài tập tăng giảm fontSize</h3>
        <p style={{fontSize:this.state.fSize +'px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At minima nisi sunt consequatur, laborum perspiciatis, porro voluptatum temporibus pariatur dolorem illo ab! Harum sunt dolore explicabo repudiandae saepe? Temporibus, corporis?</p>
        <button className='btn btn-primary mx-2' onClick={()=>{
          this.setState({
            fSize:this.state.fSize + 5
          })
        }}>+</button>
        <button className='btn btn-primary mx-2' onClick={()=>{
          this.setState({
            fSize:this.state.fSize - 5
          })
        }}>-</button>

      </div>
    )
  }
}
