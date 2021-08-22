import React, { useState } from 'react'

const Nav = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="p-4">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="/">TY寵物平台</a>
        <button onClick={() => setCollapsed(!collapsed)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapsed ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarMenu">
          <ul className="navbar-nav mt-2 mt-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/login">登入/註冊</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/public-adopt">公立領養</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/normal-adopt">一般領養</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/find-missing-pets">走失協尋</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/member/post/adopt">刊登送養</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}

export default Nav
