import React, { Component } from "react";
import "./scss/style.scss";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class BaiTapGlasses extends Component {
         
  
  state ={
    glasses :{
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    }
  }

    renderGlassList = () =>{
      return data.map((glass,index)=>{
          return (
            <div className="col-2" style={{backgroundColor:'black'}} key={index}>
                    <div className="glass_render">
                      <img src={glass.url} width={100} alt="" onClick={()=>{
                            this.wearGlass(glass)
                      }}    />
                    </div>
            </div>
          )
      })
    }

    wearGlass = (newGlass)=>{
      this.setState({
        glasses:newGlass,
      })
    }

  render() {
          let {name,url,desc} = this.state.glasses;
    return (
      <div className="bg">
        <h2>Try glass app online</h2>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-4">
              <div className="model">
                <img src="./img/model.jpg" alt="" />
              </div>
              <div className="glasses">
                <img className="img_glass" src="./img/v1.png" alt="" />
                <div className="glass_content">
                  <h3>FENDI F4300</h3>
                  <p>
                    Light pink square lenses define these sunglasses, ending
                    with amother of pearl effect tip.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 gla_item_edit">
              <div className="model_edit">
                <img src="./img/model.jpg" alt="" className="model_img_edit" />
              </div>
              <div className="glasses_img_edit">
                <img src={url} alt="" />
                <div className="glass_content_edit">
                  <h3>{name}</h3>
                  <p>
                      {desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass_list">
            <div className="row gy-4">{this.renderGlassList()};</div>
          </div>
        </div>
      </div>
    );
  }
}
