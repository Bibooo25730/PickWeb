import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../header/Header';
// import EssayList from '../essayList/EssayList';
import Color from "../Colorpicker/Colorpick"
import PotPlay from '../potPlay/potplay';
import Rtc from "../rtc/rtc"
import Lottie from '@/components/lottie'
import { useEffect,useState } from 'react';
import list from "./list.module.css";



const FullPage = () =>{
    // 全屏滚动
    // 每次切换25%
    const [currentSlide,setCurrentSlide] = useState(0);
    const [scrolling,setScrolling] = useState(false)
    useEffect(()=>{
         const handleScroll =(event) =>{
            if(!scrolling){
                setScrolling(true)
                if(event.deltaY>0){
                    console.log(currentSlide)
                    setCurrentSlide((prevState)=>(prevState<75?prevState+25:prevState))
                }else{
                    setCurrentSlide((prevState)=>(prevState<=75?prevState-25:prevState))
                }
            }
         }
        window.addEventListener("wheel",handleScroll);
         return ()=>{
             window.removeEventListener("wheel",handleScroll)
         }
    },[scrolling]);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
              setScrolling(false)
        },1000)
        return ()=>{
            clearTimeout(timeout)
        }
    },[currentSlide])




return (
    <React.Fragment>
        <div className={list.slide} style={{transform:`translateY(-${currentSlide}%)`}}>
            <div className={list.section}>
                < Header />
            </div>

            <div className={list.section}>
                < Color/>

            </div>
            <div className={list.section}>
                <PotPlay/>
            </div>
            <div className={list.section}>
                <Rtc/>
            </div>
        </div>

    </React.Fragment>
)
}
export default FullPage