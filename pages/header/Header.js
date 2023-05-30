import header from './Header.module.css'
import 'animate.css'
import Image from 'next/image'
import ActivePic from '../../public/activew.webp'


import { useState } from 'react';
import { useRef } from 'react';
export default function Header(props) {
  let full = props.full;
  let [show, setshow] = useState(true);
  const leRef = useRef(null);
  function handleClick() {
    setshow(show = !show);
   
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
      }
      else {
        document.documentElement.setAttribute('theme', 'dark');
      }
    // console.log(show)
  }
  function handleLeft(e) {
    leRef.current.style.left = 0 + '%';
    e.stopPropagation();
    console.log(leRef.current.style.left)
  }
  function handleContaer(e) {
    leRef.current.style.left = -60 + '%';
  }
  //指定位置
  function loction() {
    if (typeof window !== 'undefined') {
      if (window.location.hash = '#Essaycom') {
        window.location.hash = ''
      }
      window.location.hash = "#Essaycom";
    }

  }

  function handlePage() {
    full ? full.moveSectionDown() : loction();

  }

  return (

    <header onClick={handleContaer} className={header.header}>
      {/* 左边 */}

      <div ref={leRef} className={header.leftdiv}>
        <div className={header.leftContainer}>
          <div className={header.leftTop}>
            <a href='#'><Image className={header.img} src={ActivePic} alt="headPic" priority width={120}
              height={120}></Image></a>
          </div>
          <div className={header.leftbody}>
            <ul className={header.leftContainers}>
              <li> <a >工具箱</a> </li>
              <li><a href='https://bibooo.top/s/about'>关于</a></li>
              <li> <a href='https://bibooo.top/archives'>归档</a></li>
              <li> <a href='https://bibooo.top/links'>友链</a></li>
              <li><i className={'icon icon-paper-plane'}></i>  </li>

            </ul>
          </div>
          <div className={header.leftfotter}>
            <a href='https://github.com/Bibooo25730'> <i className={'ic icon i-github'}></i> </a>

          </div>
        </div>


      </div>
      <nav>
        <ul className={header.nav_container}>
          <div className={[`${header.leftButton} animate__animated animate__fadeInLeft`]}>
            <li className={header.li} onClick={handleClick}><i className={`icon icon-brightness-moon ${show ? 'hidden' : 'show'}`}></i>
              <i className={`icon icon-brightness-sun  ${show ? 'show' : 'hidden'}`}></i>
            </li>
            <li className={header.li}> <a >工具箱</a> </li>
            <li className={header.li}><a href='https://bibooo.top/s/about'>关于</a></li>


          </div>
          {/* 手机端展示 这里写的有问题 */}
          <li className={header.Phone_SITE}>
            <div onClick={handleLeft} className={header.lines} >
              <span className={header.line}></span>
              <span className={header.line}></span>
              <span className={header.line}></span>
            </div>
            <div className={header.title}>
              <h3>Bibooo</h3>
            </div>
            <div className={'ic  i-search'}></div>
          </li>

          <li className={header.li, header.liimg}>
            <a href='#'><Image className={header.img} src={ActivePic} alt="headPic" priority width={120}
              height={120}></Image></a>
          </li>
          <div className={[`${header.rightButton} animate__animated animate__fadeInRight`]}>
            <li className={header.li}> <a href='https://bibooo.top/archives'>归档</a></li>
            <li className={header.li}> <a href='https://bibooo.top/links'>友链</a></li>
            <li className={header.li}><i className={'icon icon-paper-plane'}></i>  </li>
          </div>
        </ul>
      </nav>
      <div className={header.titleName}>
        <h3 >Angel eyes</h3>
        <p>Our dignity is not worth much, but  the only thing we deserve.</p>

      </div>
      <div className={header.xia} title="下滑"><b onClick={handlePage}>↓</b></div>
    </header>

  )
}