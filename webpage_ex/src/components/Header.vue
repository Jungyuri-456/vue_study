<script setup></script>

<template>
  <header class="header">
    <div class="inner">
      <!-- 로고 -->
      <div class="logo">LOGO</div>
      <!-- 네비게이션 -->
      <nav class="nav">
        <ul>
          <li class="menu-item">
            <a href="#">메뉴1</a>
            <ul class="submenu">
              <li><a href="#">서브메뉴 1-1</a></li>
              <li><a href="#">서브메뉴 1-2</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#">메뉴2</a>
            <ul class="submenu">
              <li><a href="#">서브메뉴 2-1</a></li>
              <li><a href="#">서브메뉴 2-2</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#">메뉴3</a>
            <ul class="submenu">
              <li><a href="#">서브메뉴 3-1</a></li>
              <li><a href="#">서브메뉴 3-2</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- 로그인&회원가입 -->
      <div class="auth">
        <button class="login">로그인</button>
        <button class="signup">로그인</button>
      </div>
    </div>
  </header>
</template>

<style scope>
.header {
  background-color: #007bff;
}
.header .inner {
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #fff;
  padding: 15px 20px;
  z-index: 2;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
/* 네비게이션 */
.nav > ul {
  display: flex;
  gap: 20px;
  
}
.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  display: block;
  
}
.menu-item {
  position: relative;
}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 10px 0;
  min-width: 120px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translate(10px);
  transition: all 0.3s ease-in-out;
  z-index: 999;
}
.submenu a {
  color: #333;
  padding: 8px 15px;
  display: block;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.submenu a:hover{
    background-color: #f1f1f1;
}
.menu-item:hover .submenu{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
/* 로그인 & 회원가입 버튼 */
.auth button {
  background: white;
  border: none;
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.auth .login {
  color: #007bff;
}

.auth .signup {
  background: #0056b3;
  color: white;
}
</style>
