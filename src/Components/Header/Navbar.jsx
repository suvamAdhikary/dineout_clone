import Dineout_Logo from "../Images/Dineout_Logo.png";
import Location_Logo from "../Images/Location_Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Popup } from "../Pages/Home/Popup";
import { VerifyOtp } from "./VerifyOtp";
import { Signup } from "../Pages/Signup/Signup";
import { Signin } from "../Pages/signin/Signin";
import { useContext,useEffect } from "react";
import { SigninContext } from "../../Context/SignInContext";
import { auth } from "../../Utils/Firebase";
import {NewNavbar} from './NewNavbar'
import { useAuthState } from "react-firebase-hooks/auth";
const NavbarStyle = styled.div`
  width: 100%;
  height: 72px;
  box-shadow: 0px 0px 4px gray;
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
    /* flex-direction: row; */
    align-items: center;
    width: 55%;
    heigth: 100%;
    /* justify-content: space-around; */
    margin: auto;
    a {
      font-size: 14px;
      line-height: 16px;
      color: #333333;
    }
    .links {
      width: 130px;
      height: 72px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .forpos {
      position: relative;
      left: -40px;
    }
    .forhome {
      position: relative;
      left: 30px;
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
    width: 100%;
    a {
      color: #ff645a !important;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      position: relative;
      top: -3px;
    }
    span {
      width: 23%;
      background: #ff645a;
      position: relative;
      top: -26px;
      marign: auto;
      height: 3px;
    }
  }
  .links:hover {
    a {
      color: #ff645a !important;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      position: relative;
      top: -3px;
    }
    span {
      width: 23%;
      background: #ff645a;
      position: relative;
      top: -26px;
      marign: auto;
      height: 3px;
    }
  }
  .userAccount {
    height: 32px;
    width: 200px;
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 20px;
    right: 10px;
    div {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      line-height: 16px;
      background: #fff4f4;
      color: #ff645a;
      border-radius: 20px;
      border: 1px solid #ff645a;
    }
    p {
      font-size: 14px;
      line-height: 16px;
      color: #797979;
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
  const { handleModel } = useContext(SigninContext);
  const [user] = useAuthState(auth);
  const logout = () => {
    auth.signOut();
  };
  const [nav,setNav] = useState(false)
const changeNavbarColor = ()=>{
  let windowHeight = window.scrollY;
  if(windowHeight > 200){
    setNav(true)
  }
  else setNav(false)
}
console.log(nav);

window.addEventListener('scroll', changeNavbarColor)
  return (
    <>
      <Popup />
      <VerifyOtp />
      <Signup />
      <Signin />
      <NavbarStyle>
        <img src={Dineout_Logo} className="header_logo" alt="" />
        <div className="search_bar">
          <img src={Location_Logo} alt="" />
          <select name="search" id="">
            <option value="abc">Delhi</option>
          </select>
        </div>
        <div className="pages_link">
          <div className={home ? "links forhome selected" : "forhome links"}>
            <span></span>
            <Link
              onClick={() => {
                setHome(true);
                setTable(false);
                setDineout(false);
                setPassport(false);
                setSaver(false);
                setBlog(false);
              }}
              to="/#"
            >
              Home
            </Link>
          </div>
          <div className={table ? "links selected" : "links"}>
            <span></span>
            <Link
              onClick={() => {
                setHome(false);
                setTable(true);
                setDineout(false);
                setPassport(false);
                setSaver(false);
                setBlog(false);
              }}
              to="/#"
            >
              Book a Table
            </Link>
          </div>
          <div className={dineout ? "links selected" : "links"}>
            <span></span>
            <Link
              onClick={() => {
                setHome(false);
                setTable(false);
                setDineout(true);
                setPassport(false);
                setSaver(false);
                setBlog(false);
              }}
              to="/#"
            >
              Dineout Play
            </Link>
          </div>
          <div className={passport ? "links selected" : "links"}>
            <span></span>
            <Link
              onClick={() => {
                setHome(false);
                setTable(false);
                setDineout(false);
                setPassport(true);
                setSaver(false);
                setBlog(false);
              }}
              to="/#"
            >
              Dineout Passport
            </Link>
          </div>
          <div className={saver ? "links selected" : "links"}>
            <span></span>
            <Link
              onClick={() => {
                setHome(false);
                setTable(false);
                setDineout(false);
                setPassport(false);
                setSaver(true);
                setBlog(false);
              }}
              to="/#"
            >
              Super Saver
            </Link>
          </div>
          <div className={blog ? "links selected forpos" : "forpos links"}>
            <span></span>
            <Link
              onClick={() => {
                setHome(false);
                setTable(false);
                setDineout(false);
                setPassport(false);
                setSaver(false);
                setBlog(true);
              }}
              to="/#"
            >
              Blog
            </Link>
          </div>
        </div>
        {!user ? (
          <button onClick={() => handleModel()}>Login</button>
        ) : (
          <div onClick={logout} className="userAccount">
            <div>
              <p>AB</p>
            </div>
            <p>{auth.currentUser.phoneNumber}</p>
          </div>
        )}
        {/* <button onClick={() => handleModel()}>Login</button> */}
      </NavbarStyle>
    </>
  );
};
