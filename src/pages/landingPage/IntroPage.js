import './introPage.scss';
import imgBar from '../../assets/img/bar.jpg';
import imgRunning from '../../assets/img/running.jpg';
import {useEffect, useState } from 'react';

const IntroPage = ()=>{

    let mainImgArr = [imgBar,imgRunning]
    const [imgIndex, setImgIndex] = useState(0)
    
    useEffect(()=>{
    let currnetIndex = 0; 
    const intervalId = setInterval(() => {

        if(currnetIndex < mainImgArr.length -1){
            setImgIndex(prevIndex => prevIndex + 1);
            currnetIndex += 1 ;
        }else{
            setImgIndex(0);
            currnetIndex = 0;
        }

      }, 4000);
  
      return () => {
        clearInterval(intervalId);
      };
      
    },[mainImgArr.length])


    return(
    <section className='hero_section'>
        {/* <div className="container">
            <div className="row align-items-center">
                <img className='main_img' src={mainImgArr[imgIndex]} alt=''/>
            </div>
        </div> */}
    </section>
    )
}

export default IntroPage