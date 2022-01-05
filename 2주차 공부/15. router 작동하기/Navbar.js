import React from "react";
import {
    Link
  } from 'react-router-dom'

  // 1. 원래 링크였던, a태그를 Link로 전부변경
  // 2. href 속성을 to로바꾸고 그 뒤에 실제로 url 붙일 내용전개
  // 그 안의 값은 출력되는 메뉴이름임
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/users">Users</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
 