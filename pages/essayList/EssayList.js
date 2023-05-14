// 此文章页面无用
import essayList from './Essaylist.module.css'
import Image from 'next/image'
import {useRouter}  from 'next/router';
export default function EssayList() {
     const router = useRouter();
     
     // 文章详情
     const goTob = ()=>{
          router.push('/essayList/Essaycom')
     }
     return (

          <article id='article' className={[`${essayList.container} animate__animated animate__bounceInUp `]}>
               <div>
                    <h1 className={essayList.h1}>文章列表</h1>
               </div>
                <div className={essayList.posts}>
                         <div className={essayList.cardContainer}>
                              <div className={essayList.cardLeft}>
                                   <a>
                                   <Image src='https://img.timelessq.com/images/2022/07/26/c22bb7736559a7554506b05203018145.jpg' alt="leftPic" priority width={350}
                                        height={185}></Image>
                                   </a>
                                  
                              </div>
                              <div className={essayList.cardRight}>
                                   <div className={essayList.info}>
                                        <div>
                                             <div className={essayList.calendarL}>
                                                  <i className={'ic  i-calendar'} title='2022-2-12'>
                                                  </i>
                                                  <span>2022-2-12</span>
                                                  <i className={'ic  i-pen'} title='220字'>
                                                  </i>
                                                  <span>220字</span>
                                             </div>
                                        </div>
                                        <div className={essayList.title} onClick={goTob}>
                                             <h1>hello word</h1>
                                             <p>tdsadsaaaaaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdas</p>
                                        </div>
                                        <div className={essayList.btn}>
                                             <a>Go</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className={essayList.cardContainer}>
                              <div className={essayList.cardLeft}>
                                   <a>
                                   <Image src='https://img.timelessq.com/images/2022/07/26/c22bb7736559a7554506b05203018145.jpg' alt="leftPic" priority width={350}
                                        height={185}></Image>
                                   </a>
                                  
                              </div>
                              <div className={essayList.cardRight}>
                                   <div className={essayList.info}>
                                        <div>
                                             <div className={essayList.calendarL}>
                                                  <i className={'ic  i-calendar'} title='2022-2-12'>
                                                  </i>
                                                  <span>2022-2-12</span>
                                                  <i className={'ic  i-pen'} title='220字'>
                                                  </i>
                                                  <span>220字</span>
                                             </div>
                                        </div>
                                        <div className={essayList.title}>
                                             <h1>hello word</h1>
                                             <p>tdsadsaaaaaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdas</p>
                                        </div>
                                        <div className={essayList.btn}>
                                             <a>Go</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className={essayList.cardContainer}>
                              <div className={essayList.cardLeft}>
                                   <a>
                                   <Image src='https://img.timelessq.com/images/2022/07/26/c22bb7736559a7554506b05203018145.jpg' alt="leftPic" priority width={350}
                                        height={185}></Image>
                                   </a>
                                  
                              </div>
                              <div className={essayList.cardRight}>
                                   <div className={essayList.info}>
                                        <div >
                                             <div className={essayList.calendarL}>
                                                  <i className={'ic  i-calendar'} title='2022-2-12'>
                                                  </i>
                                                  <span>2022-2-12</span>
                                                  <i className={'ic  i-pen'} title='220字'>
                                                  </i>
                                                  <span>220字</span>
                                             </div>
                                        </div>
                                        <div className={essayList.title}>
                                             <h1>hello word</h1>
                                             <p>tdsadsaaaaaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaasaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdastdsadsaaaaaaaaaadsadasdas</p>
                                        </div>
                                        <div className={essayList.btn}>
                                             <a>Go</a>
                                        </div>
                                   </div>
                              </div>
          
                         </div>
                            {/* 分页 */}
                            <div className={essayList.paging}>
                            <div className={essayList.pagingLeft}> ← NEWER POSTS</div>
                    <div className={essayList.pagingRight}> OLDER POSTS → </div>
                            </div>
                   
                         </div>
                    
          </article>
          
     )
}

