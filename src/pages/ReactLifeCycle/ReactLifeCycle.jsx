import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

  constructor(props){
    super(props);
    this.state={
        number : 1,
        like:1
    }
    console.log('constructor');
  }

  // Hàm nào có static thì không sử dụng được con trỏ this
  // currentState là state trước khi render
  static getDerivedStateFromProps(newProps,currentState){
    console.log('getDerivedStateFromProps');
    // currentState.number = 20;
    // return về state mới, nếu giữ state cũ thì return null;
    // return currentState;
    return null;
  }

  shouldComponentUpdate(newProps,newState){
    console.log('shouldComponentUpdate')
    return true;
  }


  render() {
    console.log('render')
    return (
        <div className="container">
          <h3>Number:{this.state.number} </h3>
          <button className='btn btn-success' onClick={()=>{
            this.setState({
              number:this.state.number + 1
            })
          }}>+</button>
          <h3>Like: {this.state.like}</h3>
          <button className='btn btn-success' onClick={()=>{
            this.setState({
              like:this.state.like + 1,
            })
          }}>Like</button>
          <Child number ={this.state.number}/>
        </div>
    )
  }

  componentDidMount(){
    console.log('componentdidmount ');
    /*
      Tương tự window.onload
      Chỉ chạy 1 lần khi component load lần đầu tiên
    */
  }

}


/*LifeCycle

  + Mouting: Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhằm mục đích xử lý state và props

  + Can thiệp thay đổi state trước render (Sử dụng getDerivedStateFromProps )

  + Can thiệp thay đổi state sau render (Sử dụng ComponentDidMount())
  
  + ComponentDidMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên (Thường để call api)
*/

// class Product {
//     props1 =1;
//     props2=2;

//  static phuongThuc(){
//       // Ví dụ phương thức này không sử dụng thuộc tính hoặc phương thức khác từ class

//   }


// }
// let prd = new Product();
// prd.phuongThuc()

// Product.phuongThuc()