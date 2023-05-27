import Rtclss from "./rtc.module.css";
import { useEffect, useRef, useState } from "react";

export default function Rtc() {
    // const peer = new Peer("Pick-an-id");
    let inRef = useRef();
    let secction = useRef();
    let chatcom = useRef();
    let left = useRef();
    let [peer, setPeer] = useState(null);
    // id 
    let [Pid, setId] = useState('');
    let drops = useRef();
    let [fileArr, setfileArr] = useState();
    // section
    let [connser, setConn] = useState(null);
    let FileRef = useRef();
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
                console.log(conn)
                setId(Pid = conn.peer)
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
     
            peer.on('call', function (call) {
                
                left.current.style.display = 'none';
                    if (navigator.mediaDevices === undefined) {
                        navigator.mediaDevices = {};
                    }
                    if (navigator.mediaDevices.getUserMedia === undefined) {
                        navigator.mediaDevices.getUserMedia = function (constraints) {
                            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                            if (!getUserMedia) {
                                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                            }
                            return new Promise(function (resolve, reject) {
                                getUserMedia.call(navigator, constraints, resolve, reject);
                            });
                        }
                    }
                    navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 1000, height: 600 } })
                        .then(function (stream) {

                              call.answer(stream);
                            call.on('stream', function (remoteStream) {
                                console.log('remoteStrem',remoteStream)
                            if ("srcObject" in video) {
                                video.srcObject = remoteStream;
                            } else {
                                video.src = window.URL.createObjectURL(remoteStream);
                            }
                            });
                           
                            video.onloadedmetadata = function (e) {
                                video.play();
                            };
                        })
                        .catch(function (err) {
                            console.log(err.name + ": " + err.message);
                        });
               
                browserSupportsMedia({ video: true, video: { width: 1000, height: 600 } }, function (stream) {
                  
                }, function (err) {
                    console.log('Failed to get local stream', err);
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
            // conn.on('call', function (call) {
                
            //     left.current.style.display = 'none';
            //         if (navigator.mediaDevices === undefined) {
            //             navigator.mediaDevices = {};
            //         }
            //         if (navigator.mediaDevices.getUserMedia === undefined) {
            //             navigator.mediaDevices.getUserMedia = function (constraints) {
            //                 var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            //                 if (!getUserMedia) {
            //                     return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            //                 }
            //                 return new Promise(function (resolve, reject) {
            //                     getUserMedia.call(navigator, constraints, resolve, reject);
            //                 });
            //             }
            //         }
            //         navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 1000, height: 600 } })
            //             .then(function (stream) {

            //                   call.answer(stream);
            //                 call.on('stream', function (remoteStream) {
            //                     console.log('remoteStrem',remoteStream)
            //                 if ("srcObject" in video) {
            //                     video.srcObject = remoteStream;
            //                 } else {
            //                     video.src = window.URL.createObjectURL(remoteStream);
            //                 }
            //                 });
                           
            //                 video.onloadedmetadata = function (e) {
            //                     video.play();
            //                 };
            //             })
            //             .catch(function (err) {
            //                 console.log(err.name + ": " + err.message);
            //             });
               
            //     browserSupportsMedia({ video: true, video: { width: 1000, height: 600 } }, function (stream) {
                  
            //     }, function (err) {
            //         console.log('Failed to get local stream', err);
            //     });
            // });
        })
        setConn(connser = conn)

        // console.log(peer)
    }
    function handleChange(e) {
        // 安卓上“下一项、搜索、换行”等键相当于tab键，keycode=9，苹果手机换行键不变依旧相当于enter，keycode=13
        if (e.keyCode == 13 ||e.keyCode == 9) {
            let value = e.target.value;
            console.log('connser', connser)
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
        left.current.style.display = 'none';
        if (connser) {
            if (navigator.mediaDevices === undefined) {
                navigator.mediaDevices = {};
            }
            if (navigator.mediaDevices.getUserMedia === undefined) {
                navigator.mediaDevices.getUserMedia = function (constraints) {
                    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                    if (!getUserMedia) {
                        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                    }
                    return new Promise(function (resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                }
            }
            navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 1000, height: 600 } })
                .then(function (stream) {
                    const video = document.getElementById('video');
                    console.log(Pid)
                    var call = peer.call(Pid, stream);
                    call.on('stream', function (remoteStream) {
                    if ("srcObject" in video) {
                        video.srcObject = remoteStream;
                    } else {
                        video.src = window.URL.createObjectURL(remoteStream);
                    }
                    });
                   
                    video.onloadedmetadata = function (e) {
                        video.play();
                    };
                })
                .catch(function (err) {
                    console.log(err.name + ": " + err.message);
                });
        } else {
            alert('没连接')
        }
    }
    //上传文件
    function handleFile(){
        FileRef.current.click();
    }
    function handleFiles(e){
        let fileArrx = [];
        fileArrx.push(e.target.files[0]);
        setfileArr(fileArr = fileArrx);
    }
    return (
        <div className={Rtclss.container}>
            <div className={Rtclss.wrapContainer}>
                <div  className={Rtclss.left}>
                    <div className={Rtclss.wrap}>
                        <video id="video" webkit-playsinline="true" playsinline x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" className={Rtclss.video} x5-video-orientation="portraint" controls></video>
                        <div ref={left} className={Rtclss.shext}><button onClick={handledeep}>摄像头</button></div>
                    </div>
                </div>
                <div className={Rtclss.right}>
                    <div ref={chatcom} className={Rtclss.chatcom} >
                        {/* <div ref={lefttp} className={play.leftp}> <span ></span></div>
                     <div ref={rightp} className={play.rightp}><span></span></div> */}
                    </div>
                    <div className={Rtclss.edit}>
                        <input type={'search'} id={Rtclss.paragraph} onKeyDown={handleChange} placeholder="发送消息" rows="1" ></input>

                    </div>
                    <div className={Rtclss.main}>
                        <p className={Rtclss.drop_text}>拖拽文件到此或者点击
                            <span style={{'marginLeft':'20px','cursor':'pointer'}} onClick={upload}>点击上传</span>
                        </p>
                        <div ref={drops} onClick={handleFile}  className={Rtclss.drop_box}>
                        <input onChange={handleFiles} ref={FileRef} className={Rtclss.file} type="file"  name="file" />
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