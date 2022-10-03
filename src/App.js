import logo from './logo.svg';
import './App.css';
import DemoFunctionCom from './Components/DemoComponents/DemoFunctionCom';
import DemoClassCom from './Components/DemoComponents/DemoClassCom';
import BaiTapLayout from './Components/DemoComponents/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './Components/StateDemo/StateDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import LayoutFilm from './RenderWithMap/LayoutFilm';
import TaoComponent from './BaiTapReact/Bai1_TaoComponent/TaoComponent';
import BaiTapGlasses from './BaiTapReact/BaiTapGlasses/BaiTapGlasses';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import DemoXemChiTiet from './Props/DemoXemChiTiet/DemoXemChiTiet';
import ExcerciseCarStore from './Props/ExcerciseCarStore/ExcerciseCarStore';
import ShoesStore from './BaiTapReact/BaiTapShoesShop/ShoesStore.jsx'
import { NavLink, Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <DemoFunctionCom/> */}
      {/* <div className='w-25'>
      <DemoClassCom/>

      </div> */}
      {/* <BaiTapLayout/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* <StyleWithJSX/> */}
      {/* <StateDemo/> */}
      {/* <RenderWithMap/>   */}
      {/* <LayoutFilm/> */}
      {/* <TaoComponent/> */}
      {/* <BaiTapGlasses/> */}
      {/* <DemoProps/> */}
      {/* <ShoesShop/> */}
      {/* <DemoXemChiTiet/> */}
      {/* <ExcerciseCarStore/> */}
      {/* <ShoesStore/> */}
{/* -------------------------Navbar--------------------------------- */}

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">CyberSoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

      <li className="nav-item">
        <NavLink style={({isActive})=> isActive ? {borderRadius:'5px'} : {}} className={({isActive})=>isActive ? 'nav-link bg-light text-dark' : 'nav-link'}  to="/home" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink style={({isActive})=> isActive ? {borderRadius:'5px'} : {}} className={({isActive})=> isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink style={({isActive})=> isActive ? {borderRadius:'5px'} : {}} className={({isActive})=> isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink style={({isActive})=> isActive ? {borderRadius:'5px'} : {}} className={({isActive})=> isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/reactform">React Form</NavLink>
      </li>

      <li className='nav-item'>
      <NavLink style={({isActive})=> isActive ? {borderRadius:'5px'} : {}} className={({isActive})=> isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/lifecycle">LifeCycle</NavLink>
      </li>

      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</NavLink>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="#">Action 1</NavLink>
          <NavLink className="dropdown-item" to="#">Action 2</NavLink>
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>



      {/* Vị trí component sẽ được load ở link con */}
      <Outlet/>
     

    </div>
  );
}

export default App;
