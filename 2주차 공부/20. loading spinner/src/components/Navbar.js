import React from "react";
import '../App.css';
import {
    Link, NavLink 
  } from 'react-router-dom'

  // 1. 원래 링크였던, a태그를 Link로 전부변경
  // 2. href 속성을 to로바꾸고 그 뒤에 실제로 url 붙일 내용전개
  // 그 안의 값은 출력되는 메뉴이름임
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies"  activeClassName = "active">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users" activeClassName = "active">Users</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
 