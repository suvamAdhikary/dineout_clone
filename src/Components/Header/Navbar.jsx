import Dineout_Logo from "../Images/Dineout_Logo.png";
import Location_Logo from "../Images/Location_Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavbarStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 72px;
  left: 0px;
  box-shadow: 0px 0px 4px gray;
  top: 0px;
  display: flex;
  align-items: center;
  .header_logo {
    width: 96px;
    height: 32px;
    position: relative;
    left: 120px;
  }
  .search_bar {
    width: 209px;
    height: 32px;
    position: relative;
    left: 170px;
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 13px;
      height: 12px;
      margin-left: 7px;
    }
    select {
      width: 100%;
      margin-right: 10px;
      margin-left: 1px;
      border: none;
      height: 100%;
      border-radius: 4px;
      padding-left: 2px;
      font-size: 14px;
      color: #797979;
      line-height: 16px;
    }
    select::after {
      border: none;
    }
  }
  .pages_link {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    heigth: 100%;
    justify-content: space-between;
    margin: auto;
    a {
      font-size: 14px;
      line-height: 16px;
      color: #333333;
    }
    .links {
      width: 100%;
      height: 72px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  button {
    width: 103px;
    height: 32px;
    background: #ff645a;
    position: absolute;
    top: 20px;
    right: 100px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  .selected {
    a {
      color: #ff645a !important;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      position: relative;
      top: -3px;
    }
    span {
      width: 20%;
      background: #ff645a;
      position: relative;
      top: -25px;
      marign: auto;
      height: 3px;
    }
  }
`;

export const Navbar = () => {
  const [home, setHome] = useState(true);
  const [table, setTable] = useState(false);
  const [dineout, setDineout] = useState(false);
  const [passport, setPassport] = useState(false);
  const [saver, setSaver] = useState(false);
  const [blog, setBlog] = useState(false);
  return (
    <NavbarStyle>
      <img src={Dineout_Logo} className="header_logo" alt="" />
      <div className="search_bar">
        <img src={Location_Logo} alt="" />
        <select name="search" id="">
          <option value="abc">Delhi</option>
        </select>
      </div>
      <div className="pages_link">
        <div className={home ? "links selected" : "links"}>
          <span></span>
          <Link onClick={()=>{
            setHome(true)
            setTable(false)
            setDineout(false)
            setPassport(false)
            setSaver(false)
            setBlog(false)
          }} to="/#">Home</Link>
        </div>
        <div className={table ? "links selected" : "links"}>
          <span></span>
          <Link onClick={()=>{
            setHome(false)
            setTable(true)
            setDineout(false)
            setPassport(false)
            setSaver(false)
            setBlog(false)
          }} to="/#">Book a Table</Link>
        </div>
        <div className={dineout ? "links selected" : "links"}>
          <span></span>
          <Link onClick={()=>{
            setHome(false)
            setTable(false)
            setDineout(true)
            setPassport(false)
            setSaver(false)
            setBlog(false)
          }} to="/#">Dineout Play</Link>
        </div>
        <div className={passport ? "links selected" : "links"}>
          <span></span>
          <Link onClick={()=>{
            setHome(false)
            setTable(false)
            setDineout(false)
            setPassport(true)
            setSaver(false)
            setBlog(false)
          }} to="/#">Dineout Passport</Link>
        </div>
        <div className={saver ? "links selected" : "links"}>
          <span></span>
          <Link onClick={()=>{
            setHome(false)
            setTable(false)
            setDineout(false)
            setPassport(false)
            setSaver(true)
            setBlog(false)
          }} to="/#">Super Saver</Link>
        </div>
        <div className={blog ? "links selected" : "links"}>
          <span></span>
          <Link onClick={()=>{
            setHome(false)
            setTable(false)
            setDineout(false)
            setPassport(false)
            setSaver(false)
            setBlog(true)
          }} to="/#">Blog</Link>
        </div>
      </div>
      <button>Login</button>
    </NavbarStyle>
  );
};
