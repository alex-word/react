import { styled } from "styled-components"
import Banner from "@/assets/images/banner.jpg"
import loginImg from "@/assets/images/login.jpg"
import registerImg from "@/assets/images/register.jpg"
import { useEffect, useRef, useState } from "react";
import { getPortList, postLogin, postRegister } from "@/api/modules/user";
import { message } from "antd";
import { handleRequest } from "@/utils/handle-request";
import { addToken } from "@/redux/userSlice";
const Login = () => {
  let formParams = useRef({ username: '', password: '' })
  let formRegister = useRef({ username: '', password: '', email: '', check_password: '' })
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState<'login' | 'register'>('login')

  const handleLogin = () => {
    setLoading(true)
    postLogin(formParams.current).then(res => {
      addToken(res.data.token)
      message.success('登录成功')
    }).catch(err => {
      message.error(err.message)
    }).finally(() => { setLoading(false) })
  }
  const handleRegister = () => {
    setLoading(true)
    postRegister(formRegister.current).then(res => {
      message.success('注册成功')
      setType('login')
    }).catch(err => {
      message.error(err.message)
    }).finally(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    handleRequest(getPortList, setLoading).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <Container>
      <div className="container">
        <div className="form-box" style={{ transform: type === 'login' ? 'translateX(0)' : 'translateX(100%)' }}>
          <div className={`register-box ${type === 'login' ? ' hidden' : ''}`} >
            <h1>register</h1>
            <input type="text" name="用户名" placeholder="用户名" onChange={(e: { target: { value: any; }; }) => formRegister.current.username = e.target.value} />
            <input type="email" name="邮箱" placeholder="邮箱" onChange={e => formRegister.current.email = e.target.value} />
            <input type="password" name="密码" placeholder="密码" onChange={e => formRegister.current.password = e.target.value} />
            <input type="password" name="确认密码" placeholder="确认密码" onChange={e => formRegister.current.check_password = e.target.value} />
            <button onClick={handleRegister} disabled={loading}>注 册</button>
          </div>
          <div className={`register-box ${type === 'login' ? '' : ' hidden'}`} >
            <h1>login</h1>
            <input type="text" name="用户名" placeholder="用户名" onChange={(e) => formParams.current.username = e.target.value} />
            <input type="password" name="密码" placeholder="密码" onChange={(e) => formParams.current.password = e.target.value} />
            <button onClick={handleLogin} disabled={loading}>登 录</button>
          </div>
        </div>
        <div className="con-box left">
          <h2>欢迎来到<span>前端星球</span></h2>
          <p>快来开启你的<span>设计</span>旅程吧</p>
          <img src={loginImg} alt="登录" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 0 }}>
            <div>已有账号</div>
            <span className="link" onClick={() => setType('login')}>
              去登录</span>
          </div>
        </div>
        <div className="con-box right">
          <h2>欢迎来到<span>前端星球</span></h2>
          <p>提升你的<span>设计·编程</span>能力</p>
          <img src={registerImg} alt="登录" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 0 }}>
            <div>没有账号？</div>
            <span className="link" onClick={() => setType('register')}>
              去注册</span>
          </div>
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
  background-size: 100% 100%;
  opacity: 0.9;
  .container{
    width: 620px;
    height: 400px;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    background-color:#e9f6ff;
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
    background-color: #fff;
    width: 300px;
    height: 424px;
    z-index: 2;
    border-radius: 10px;
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
    margin-bottom: 50px;
    /* 转换为大写 */
    text-transform: uppercase;
    color: #435ee8;
    /* 设置字间距 */
    letter-spacing: 3px;
}
.register-box h1{
  margin-bottom: 20px;
}
.link{
  color: #435ee8;
  cursor: pointer;
}
input {
    /* 将输入框背景改为透明 */
    background-color: transparent;
    width: 70%;
    color: #333;
    border: 1.5px solid #D9D9D9;
    /* height: 32px; */
    margin: 12px;
    border-radius: 6px;
    padding: 10px 4px;
    font-size: 14px;
    padding-left: 10px;
}
.hidden{
  display: none;
}
/* 将输入框中的占位字改为白色 */
input::placeholder {
    color: #999;
}

input:focus{
  border-color: #435ee8;
}
/* 当选中该输入框时 里面的文字消失 */
input:focus::placeholder {
    opacity: 0;
}

/* 渲染注册/登录按钮 */
.form-box button {
    margin-top: 20px;
    width: 220px;
    height: 40px;
    background: #435ee8;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    /* 不要边框 */
    border: none;
    border-radius: 6px;
    /* 当鼠标悬浮在按钮上时 变为指针手势 */
    cursor: pointer;
}

/* 鼠标悬浮在按钮上时 背景&字体颜色改变 并且有0.5秒的过渡 */
.form-box button:hover {
    background: #435fe8ce;
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
    color: #000;
    letter-spacing: 3px;
    text-align: center;
}

.con-box h2 span {
    color: #435ee8;
    letter-spacing: 3px;
    text-align: center;
}

.con-box p {
    color: #666;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 500;
}

.con-box span {
    font-weight: 700;
}

.con-box img {
    width: 120px;
    /* 之前写过 现在加上这两行即可 */
    /* 设置透明度 */
    opacity: 0.9;
    margin: 20px 0;
    margin-top: 30px;
    border-radius: 10px;
}

.con-box button {
  margin-top: 10px;
    width: 220px;
    height: 40px;
    background: #435ee8;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    /* 不要边框 */
    border: none;
    border-radius: 6px;
    /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1); */
    /* 当鼠标悬浮在按钮上时 变为指针手势 */
    cursor: pointer;
}

.con-box button:hover {
  background: #435fe8ce;
    color: #f3f3f3;
    transition: 0.5s ease;
}

`
