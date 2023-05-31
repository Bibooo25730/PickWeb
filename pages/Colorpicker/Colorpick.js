import Colorcs from "./Colorpick..module.css"
import { useEffect, useState, useRef } from "react"
import Image from 'next/image'
import pick from '../../public/b8fcbf2f86e5fca8.webp'
import { useRequest } from 'alova'
import alovaInstance from '../api/hello'
import {ComPressPost} from "../api/api"
export default function ColorPick() {
    let [ctx, setCtx] = useState(null);
    // 控制预览
    let [prfboolen, setprefboolen] = useState('none');
    let refim = useRef(0);
    let refims = useRef(0);
    let cards = useRef(0);
    // 上传
    let inpref = useRef(0);
    // 预览图
    let pref = useRef(0);
    // 图片
    let [imgs, setimgs] = useState(null);
    // 判断是否重新
    let [uplaod, setuplaod] = useState(false);
    useEffect(() => {
        drawIm();
    }, [])
    // 画图 function 
function drawIm() {
        var c = document.getElementById("canvas");
        let ctxs = c.getContext("2d");
        var img = document.getElementById("imgol");
        let w = img.width;
        let h = img.height;
        console.log(ctx)
        if (ctx) {
            ctx.clearRect(0, 0, 1000, 800)
            ctxs.drawImage(img, 0, 0,w,h);
            setCtx(ctx = ctxs)
           
        }else{
        ctxs.drawImage(img, 0, 0,w,h);
        setCtx(ctx = ctxs)
        }
      
        
    }
    function handleTouch(event) {
        drawIm()
        var x = event.nativeEvent.offsetX;
        var y = event.nativeEvent.offsetY;
        console.log(ctx,x,y)
        let pxArr = ctx.getImageData(x, y, 1, 1).data;
        let rgba = 'rgba(' + pxArr[0] + ',' + pxArr[1] + ',' + pxArr[2] + ',' + (pxArr[3] / 255) + ')';
        refim.current.style.backgroundColor = rgba;
        cards.current.style.backgroundColor = rgba;
        refims.current.textContent = rgba;
    }
    function handleDropper() {
        const resultElement = document.getElementById("cards");
        const resulthElement = document.getElementById("resulth");
        const btn1 = document.getElementById("btn1");
        if(typeof window !== 'undefined'){
            if (!window.EyeDropper) {
                resulthElement.textContent =
                    "您的浏览器不支持EyeDropper API";
                return;
            }
        }
     
        const eyeDropper = new EyeDropper();
        eyeDropper
            .open()
            .then((result) => {
                resultElement.style.backgroundColor = result.sRGBHex;
                resulthElement.textContent = result.sRGBHex;
                btn1.style.color = result.sRGBHex;
            })
            .catch((e) => {
                console.log(e)
                resulthElement.textContent = e;
            });
    }

   function handleUpload() {
        inpref.current.click()
    }
    async function handleUploads(e){
        inpref.current.click()
        // 删除请求
        handleRemoveTodo()
    }
    async function handleChange(e) {
            sedFile(e)
    }
    // 发送图片函数
   async function sedFile(e){
        const { files } = e.target;
        console.log(files)
        //  FileRender 异步读取计算机文件
        const reader = new FileReader();
        const formData = new FormData();
        formData.append('image', files[0])
        setimgs(imgs = files[0]);
        //  readAsDataURL 指定 bold内容或file
        console.log(files[0])
        if(typeof files[0] !== 'undefined'){
            reader.readAsDataURL(files[0])
            reader.onload = (evt) => {
                // 上传展示图片
                pref.current.src = evt.currentTarget.result;
                var img = document.getElementById("imgol");
                console.log(img)
                img.srcset = '';
                img.src = evt.currentTarget.result
                setprefboolen(prfboolen = 'block')
                drawIm()
            }
        }
       
        handleAddTodo(formData)
    }
    // 上传请求
      const {send: addTodo} = useRequest(formData => alovaInstance.Post('/api/ComPress', formData), {
        immediate: false
      });
      
      // 手动发送请求
      const handleAddTodo = (formData) => {
        // send函数返回一个Promise对象，可接收响应数据
        addTodo(formData)
      };
    // 取消
    async function handleExit() {
        pref.current.src = '';
        // 输出第一次上传的文件，再次上传相同文件，无法触发 change 事件
        inpref.current.value = '';
        setprefboolen(prfboolen = 'none'); 
        // 删除请求
         handleRemoveTodo()
    }
    //取消并删除图片
    const {send: RemoveTodo} = useRequest(newTodo => alovaInstance.Post('/api/remove', newTodo), {
        immediate: false
      });
      
      // 手动发送请求
      const handleRemoveTodo = () => {
        console.log(imgs)
       if(imgs){
        let newTodo = {
            imgName: imgs.name,
          };
          RemoveTodo(newTodo)
       }
        // send函数返回一个Promise对象，可接收响应数据
        
      };
    // 下载压缩图片接口
    async function handleUploadServer() {
        let img = {
            imgName: imgs.name
        }
        let res = await fetch('http://162.14.108.172:3001/api/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(img)
        })
        if (res.ok) {
            let resule = await res.arrayBuffer()
            //   转 bolb
            let bolb = new Blob([resule]);
            let a = document.createElement('a');
            if(typeof window !== 'undefined'){
                let url = window.URL.createObjectURL(bolb);
                a.href = url;
                let time = new Date().getTime()
                a.download = time + 'compression.jpg';
                a.click();
                window.URL.revokeObjectURL(bolb);
            }
           
        } else {
            throw new Error('error')
        }

    }
    return (
        <div className={Colorcs.Colorcontainer}>
            <div className={Colorcs.name}>
                <div className={Colorcs.Contas}>
                    <i className={'iconfont icon-yanse'}></i> <h1>图片拾色器+压缩</h1>
                </div>

                <div className={Colorcs.ShangC}>
                    <i title="点击我" onClick={handleUpload} className={' iconfont icon-shangchuantupian'}>
                        <input ref={inpref} style={{ display: 'none' }} className={Colorcs.file} onChange={handleChange} type='file' accept="image/*"></input>
                    </i>
                    <span className={Colorcs.ftp}>上传图片</span>
                </div>
            </div>
            <div id="cards" className={Colorcs.cardCon}>
                <div ref={cards} className={Colorcs.card} >
                    <div className={Colorcs.imgol}   >
                        <Image src={pick} id="imgol" alt="upload"   onClick={handleTouch}
                       priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  width={640}
                  height={386}></Image>
                        {/* <img id="imgol" style={{display:'none'}}   src="http://localhost:3000/_next/static/media/bg.a99082d1.png"></img> */}
                        <canvas style={{ display: 'none',marginTop:'80px' }} id="canvas" width="965" height="497" ></canvas>
                        
                        <div ref={refim} className={Colorcs.cardsm}>

                        </div>
                    </div>
                    <h2 ref={refims}>rgba()</h2>
                </div>
                <div className={Colorcs.cards}>
                    <h3>拾色器</h3>
                    <p>点击下面的按钮，在你的屏幕上任何地方选择一种颜色！</p>
                    <button className={Colorcs.btn} onClick={handleDropper}>
                        <i id="btn1" title="点击我" className={' iconfont icon-bi'}></i>
                    </button>
                    <p id="result">Selected colour:</p>
                    <h3 id="resulth">rgba()</h3>

                    <div className={Colorcs.colorFiex}>
                        <div className={Colorcs.yello}></div>
                        <div className={Colorcs.origin}></div>
                        <div className={Colorcs.purper}></div>
                    </div>
                </div>
            </div>
            {/* 弹窗预览图片 */}

            <div style={{ display: prfboolen }} className={Colorcs.Preview}>
                <div className={Colorcs.Prevs}>
                    <div className={Colorcs.title}>
                        <div className={Colorcs.icon}>
                            <i className={' iconfont icon-point'}></i>
                            <span className={Colorcs.toolip}>本网站会保障你的隐私安全，数据会在一定时间内自动删除，并且会帮你压缩图片下载到你的电脑上面。</span>
                        </div>

                        <h3>下载压缩图片</h3>
                        <a title="点击我下载" onClick={handleUploadServer}>确定下载</a>



                    </div>

                    <img ref={pref} className={Colorcs.privimg} />
                    {/* 重新选择，取消 */}
                    <div className={Colorcs.re}>
                        <div className={Colorcs.res}>
                            <i title="重新上传" onClick={handleUploads} className={' iconfont icon-shangchuantupian'}></i>
                        </div>
                        <a onClick={handleExit}>取消</a>
                    </div>
                </div>

            </div>
        </div>
    )
}