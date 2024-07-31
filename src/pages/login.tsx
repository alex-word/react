import { styled } from "styled-components"
import Banner from "../assets/images/banner.jpg"
import loginImg from "../assets/images/login.jpg"
import registerImg from "../assets/images/register.jpg"
import { useRef } from "react";
const Login = () => {
  let register = useRef(null)
  let login = useRef(null)
  // 绑定事件
  let formBox = useRef<any>(null)
  let registerBox = useRef<any>(null)
  let loginBox = useRef<any>(null)

  const handleClick = (type: 'login' | 'register') => {
    // 表格盒子向右平移
    formBox.current.style.transform = type === 'login' ? 'translateX(0)' : 'translateX(100%)';
    if (type === 'register') {
      loginBox.current.classList.add('hidden');
      registerBox.current.classList.remove('hidden');
    } else {
      registerBox.current.classList.add('hidden');
      loginBox.current.classList.remove('hidden');
    }
  }
  return (
    <Container>
      <div className="container">
        <div className="form-box" ref={formBox}>
          <div className="register-box hidden" ref={registerBox}>
            <h1>register</h1>
            <input type="text" name="用户名" placeholder="用户名" />
            <input type="email" name="邮箱" placeholder="邮箱" />
            <input type="password" name="密码" placeholder="密码" />
            <input type="password" name="确认密码" placeholder="确认密码" />
            <button>注 册</button>
          </div>
          <div className="login-box" ref={loginBox}>
            <h1>login</h1>
            <input type="text" name="用户名" placeholder="用户名" />
            <input type="password" name="密码" placeholder="密码" />
            <button>登 录</button>
          </div>
        </div>
        <div className="con-box left">
          <h2>欢迎来到<span>前端星球</span></h2>
          <p>快来开启你的<span>设计</span>旅程吧</p>
          <img src={loginImg} alt="登录" />
          <p>已有账号</p>
          <button id="login" ref={login} onClick={() => handleClick('login')}>去登录</button>
        </div>
        <div className="con-box right">
          <h2>欢迎来到<span>前端星球</span></h2>
          <p>提升你的<span>设计·编程</span>能力</p>
          <img src={registerImg} alt="登录" />
          <p>没有账号？</p>
          <button id="register" ref={register} onClick={() => handleClick('register')}>去注册</button>
        </div>
      </div>
    </Container>
  )
}

export default Login
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Banner}) no-repeat ;
  background-color: #fff;
  background-size: 100% 100%;
  .container{
    width: 620px;
    height: 400px;
    border-radius: 10px;
    /* 阴影 */
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    /* 相对定位 */
    position: relative;
    z-index: 2;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .form-box {
    /* 绝对定位 */
    position: absolute;
    /* 上面突出来一小节 */
    top: -12px;
    left: 10px;
    background-color: rgb(255, 205, 219);
    width: 300px;
    height: 424px;
    z-index: 2;
    border-radius: 10px;
    box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.6);
    /* 弹性布局 */
    display: flex;
    /* 内容水平居中显示 */
    align-items: center;
    transition: 1s ease-in-out;
}

.register-box,
.login-box {
    /* 弹性布局 */
    display: flex;
    /* 决定伸缩盒子内的项目排列方式 垂直排列 主轴为垂直方向 */
    flex-direction: column;
    /* 中点对齐 */
    align-items: center;
    width: 100%;
}
/* 标题 */
h1 {
    text-align: center;
    margin-bottom: 25px;
    /* 转换为大写 */
    text-transform: uppercase;
    color: #fff;
    /* 设置字间距 */
    letter-spacing: 3px;
}

input {
    /* 将输入框背景改为透明 */
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    border-bottom: 1.5px solid #fff;
    /* height: 32px; */
    margin: 10px;
    border-radius: 6px;
    padding: 10px 4px;
    font-size: 14px;

}
.hidden{
  display: none;
}
/* 将输入框中的占位字改为白色 */
input::placeholder {
    color: #fff;
}

/* 当输入框被选中时 */
input:focus {
    color: rgb(222, 142, 165);
    /* 不要默认的选中框 */
    outline: none;
    border-bottom: 2.5px solid rgba(222, 142, 165, 0.662);
}

/* 当选中该输入框时 里面的文字消失 */
input:focus::placeholder {
    opacity: 0;
}

/* 渲染注册/登录按钮 */
.form-box button {
    margin-top: 20px;
    width: 70%;
    height: 40px;
    background: #f6f6f6;
    font-size: 15px;
    font-weight: 700;
    color: rgb(222, 142, 165);
    /* 不要边框 */
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    /* 当鼠标悬浮在按钮上时 变为指针手势 */
    cursor: pointer;
}

/* 鼠标悬浮在按钮上时 背景&字体颜色改变 并且有0.5秒的过渡 */
.form-box button:hover {
    background: rgb(222, 114, 145);
    color: #f3f3f3;
    transition: 0.5s ease;
}
.con-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 绝对定位 */
    position: absolute;
    top: 50%;
    /* css3  将盒子进行平移操作 向y轴负方向也就是上方 平移半个盒子高度距离*/
    transform: translateY(-50%);
    /* 这两个操作实现盒子的水平居中 */
}

.con-box.left {
    left: 0%;
}

.con-box.right {
    right: 0%;
}
.con-box * {
    margin-top: 10px;
}

.con-box h2 {
    color: rgb(154, 154, 154);
    letter-spacing: 3px;
    text-align: center;
}

.con-box h2 span {
    color: rgba(232, 134, 162, 0.87);
    letter-spacing: 3px;
    text-align: center;
}

.con-box p {
    color: rgb(154, 154, 154);
    letter-spacing: 1px;
    text-align: center;
    font-weight: 500;
}

.con-box span {
    font-weight: 700;
}

.con-box img {
    width: 160px;
    /* 之前写过 现在加上这两行即可 */
    /* 设置透明度 */
    opacity: 0.9;
    margin: 20px 0;
    border-radius: 20px;
}

.con-box button {
    margin-top: 12px;
    background-color: #fff;
    margin-top: 20px;
    width: 30%;
    height: 30px;
    background: #f6f6f6;
    font-size: 13px;
    font-weight: 600;
    color: rgb(222, 142, 165);
    border: none;
    outline: none;
    border-radius: 8px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.con-box button:hover {
    background: rgba(222, 114, 145, 0.687);
    color: #f3f3f3;
    transition: 0.5s ease;
}

`