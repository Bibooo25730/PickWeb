import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../header/Header';
// import EssayList from '../essayList/EssayList';
import Color from "../Colorpicker/Colorpick"
import PotPlay from '../potPlay/potplay';
import Rtc from "../rtc/rtc"
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            < Header full={fullpageApi}/>
          </div>
          <div className="section">
          {/* <EssayList/> */}
          < Color/>
          </div>
          <div className='section'>
            <PotPlay/>
          </div>
          <div className='section'>
            <Rtc/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage