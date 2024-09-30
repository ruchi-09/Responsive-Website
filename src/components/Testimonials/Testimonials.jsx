import React, {useRef,useState} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
 

const Testimonials = () => {
    const slider = useRef(null);
    const [tx, setTx] = useState(0); // State to track translation
  
    const slideForward = () => {
      // Assuming each slide moves by 25%, and there are 4 slides
      if (tx > -75) { // Allow up to -75% to show the fourth slide
        const newTx = tx - 25;
        setTx(newTx);
        slider.current.style.transform = `translateX(${newTx}%)`;
      }
    };
  
    const slideBackward=()=>{
        if (tx<0){
            setTx(tx + 25);
        }
        slider.current.style.transform=`translateX(${tx}%)`
    };
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>California, USA</span>
                    </div>
                    </div>
                    <p>We encourage you to adapt and build upon the material in any medium or format to suit your individual teaching purposes (for non-commercial purposes only). If distributing your adapted material, we ask that you credit the Centre for Teaching and Learning.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                        <div>
                        <h3>Katty Anderson</h3>
                        <span>Texas, USA</span>
                    </div>
                    </div>
                    <p>We encourage you to adapt and build upon the material in any medium or format to suit your individual teaching purposes (for non-commercial purposes only). If distributing your adapted material, we ask that you credit the Centre for Teaching and Learning.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                        <div>
                        <h3>Brad Youg</h3>
                        <span>Indiana, USA</span>
                    </div>
                    </div>
                    <p>We encourage you to adapt and build upon the material in any medium or format to suit your individual teaching purposes (for non-commercial purposes only). If distributing your adapted material, we ask that you credit the Centre for Teaching and Learning.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                        <div>
                        <h3>James Rick</h3>
                        <span>Seattle, USA</span>
                    </div>
                    </div>
                    <p>We encourage you to adapt and build upon the material in any medium or format to suit your individual teaching purposes (for non-commercial purposes only). If distributing your adapted material, we ask that you credit the Centre for Teaching and Learning.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
