import Rtclss from "./rtc.module.css";
import { useEffect, useRef, useState } from "react";

export default function Rtc() {
    // const peer = new Peer("Pick-an-id");
    let inRef = useRef();
    let secction = useRef();
    let chatcom = useRef();
    let [peer, setPeer] = useState(null);
    // id 
    let [Pid, setId] = useState('');
    let drops = useRef();
    let [fileArr, setfileArr] = useState();
    // section
    let [connser, setConn] = useState(null);
    useEffect(() => {
        const fn = async () => {
            const PeerJs = (await import('peerjs')).default;
            let peers = new PeerJs();
            setPeer(peer = peers)
            peers.on("open", function (id) {
                console.log(id)
                secction.current.innerText = `状态为：对等ID:${id}`

            })
            console.log(peers)
            peer.on('connection', function (conn) {
                // 接受对方传来的数据
                secction.current.innerText = `状态为：:连接成功 `
                conn.on('data', function (data) {

                    if (typeof (data) === 'object') {
                        let blob = new Blob([data.files[0]]);
                        let reader = new FileReader();
                        reader.readAsText(blob, "utf-8");
                        if (typeof window !== "undefined") {
                            let url = window.URL.createObjectURL(blob)
                            const link = document.createElement("a");
                            link.style.display = 'none';
                            link.href = url;
                            link.setAttribute('download', data.name);
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }

                    } else {
                        let lefttp = document.createElement('div');
                        lefttp.classList = [`${Rtclss.leftp}`];
                        let span = document.createElement('span');
                        span.innerText = '：' + data;
                        lefttp.appendChild(span);
                        chatcom.current.appendChild(lefttp);
                    }
                    // let conn = peer.connect(data);
                    // setConn(connser = conn);
                    console.log('收到的数据', typeof (data))

                })
                setConn(connser = conn)

            })

            peer.on('DataConnection', function (conn) {
                conn.on('open', function () {
                    // Receive messages
                    conn.on('data', function (data) {
                        console.log('Received', data);
                    });
                });
            });
            peer.on('error', function (err) {
                secction.current.innerText = `状态为：:${err.message}`
                console.log(err)
            })
            const browserSupportsMedia = () => {
                return navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mzGetUserMedia
            }
           
            peer.on('call', function(call) {
                console.log(call)
                browserSupportsMedia({video: true, audio: true}, function(stream) {
                call.answer(stream); // Answer the call with an A/V stream.
                call.on('stream', function(remoteStream) {
                    console.log(remoteStream)
                    const video = document.getElementById('video');
                        video.srcObject = remoteStream;
                });
              }, function(err) {
                console.log('Failed to get local stream' ,err);
              });
            });
            return peers;

        }
        fn();

        drop()
       
    }, [])
    function handleServer() {
        //   获取房间号
        let value = inRef.current.value;
        setId(Pid = value)
        let conn = peer.connect(value);
        conn.on("open", () => {
            secction.current.innerText = `状态为：:连接成功}`
            console.log('server', conn)
            conn.on('data', function (data) {
                if (typeof (data) === 'object') {
                    let blob = new Blob([data.files[0]]);
                    let reader = new FileReader();
                    reader.readAsText(blob, "utf-8");
                    if (typeof window !== "undefined") {
                        let url = window.URL.createObjectURL(blob)
                        const link = document.createElement("a");
                        link.style.display = 'none';
                        link.href = url;
                        link.setAttribute('download', data.name);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }

                } else {
                    let lefttp = document.createElement('div');
                    lefttp.classList = [`${Rtclss.leftp}`];
                    let span = document.createElement('span');
                    span.innerText = '：' + data;
                    lefttp.appendChild(span);
                    chatcom.current.appendChild(lefttp);
                }
                // let conn = peer.connect(data);
                // setConn(connser = conn);
                console.log('收到的数据', typeof (data))

            })
        })
        setConn(connser = conn)

        // console.log(peer)
    }
    function handleChange(e) {
        if (e.keyCode == 13) {
            let value = e.target.value;
            console.log('connser',connser)
            if (connser) {
                connser.send(value)
                let rightp = document.createElement('div');
                rightp.classList = [`${Rtclss.rightp}`];
                let span = document.createElement('span');
                span.innerText = value + ':';
                rightp.appendChild(span);
                chatcom.current.appendChild(rightp);
                console.log('打字', value);
            } else {
                alert('没连接')
            }
        }
    }
    // function handleDrag(e) {
    //     console.log(e)
    // }
    // 上传文件
    function upload() {
        console.log(fileArr, connser)
        let file = {
            files: fileArr,
            name: fileArr[0].name
        }
        connser ? connser.send(file) : alert('没连接')
    }
    // 拖拽事件
    function drop() {
        let fileArrx = [];
        function handleEvent(event) {
            // 阻止事件的默认行为
            drops.current.style.borderColor = '#a89b9b';
            event.preventDefault();
            if (event.type === 'drop') {
                // 文件进入并松开鼠标,文件边框恢复正常
                drops.current.style.borderColor = '#FEEDE1'
                for (let file of event.dataTransfer.files) {
                    console.log(file)
                    // 把文件保存到文件数组中
                    fileArrx.push(file)
                    setfileArr(fileArr = fileArrx);
                    // 初始化文件
                }
            } else if (event.type === 'dragleave') {
                // 离开时边框恢复
                drops.current.style.borderColor = '#a89b9b'
            } else {
                // 进入边框变为红色
                drops.current.style.borderColor = 'red'
            }
        }
        console.log(fileArr)
        drops.current.addEventListener("dragenter", handleEvent);
        drops.current.addEventListener("dragover", handleEvent);
        drops.current.addEventListener("drop", handleEvent);
        drops.current.addEventListener("dragleave", handleEvent)
    }
    // 摄像头
    function handledeep() {
        if (connser) {
            const browserSupportsMedia = () => {
                return navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mzGetUserMedia
            }
           
            browserSupportsMedia({ video: true, audio: true }, function (stream) {
                var call = peer.call(Pid, stream);
                call.on('stream', function (remoteStream) {
                    // Show stream in some video/canvas element.
                    console.log('stream', remoteStream)
                    const video = document.getElementById('video');
                    video.srcObject = remoteStream;
                });
            }, function (err) {
                console.log('Failed to get local stream', err);
            });
        } else {
            alert('没连接')
        }
    }
    return (
        <div className={Rtclss.container}>
            <div className={Rtclss.wrapContainer}>
                <div className={Rtclss.left}>
                    <div className={Rtclss.wrap}>
                        <video id="video" webkit-playsinline="true" playsinline x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" className={Rtclss.video} x5-video-orientation="portraint" controls></video>
                        <div className={Rtclss.shext}><button onClick={handledeep}>摄像头</button></div>
                    </div>
                </div>
                <div className={Rtclss.right}>
                    <div ref={chatcom} className={Rtclss.chatcom} >
                        {/* <div ref={lefttp} className={play.leftp}> <span ></span></div>
                     <div ref={rightp} className={play.rightp}><span></span></div> */}
                    </div>
                    <div className={Rtclss.edit}>
                        <input id={Rtclss.paragraph} onKeyDown={handleChange} placeholder="发送消息" rows="1" ></input>

                    </div>
                    <div className={Rtclss.main}>
                        <p className={Rtclss.drop_text}>拖拽文件到此上传文件/
                            <span onClick={upload}>点击上传</span>
                        </p>
                        <div ref={drops} className={Rtclss.drop_box}>
                        </div>

                    </div>
                </div>
            </div>

            <div className={Rtclss.Rooms}>
                <h3>.对.视频会议</h3>
                <div className={Rtclss.server}>
                    <input ref={inRef} id={Rtclss.recId} ></input>
                    <button onClick={handleServer} className={Rtclss.btn}>连接</button>
                </div>
                <div ref={secction}>状态:</div>
            </div>

        </div>
    )
}