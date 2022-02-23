//Import Hooks
import { useEffect } from "react";

// import Libreria swiper para hacer slider de planetas
import Swiper from 'swiper';
import 'swiper/css';

//Import styles
import './ChooseGameComponent.css';

//Import assets
import playButtonAsset from '../../assets/bot-n.svg';//Boton de Jugar
import planetaCarrerasAsset from '../../assets/planeta-carreras.svg';//Planeta
import planetaRobotAsset from '../../assets/planeta-robot.svg';//Planeta
import planetaCanicasAsset from '../../assets/planeta-canicas.svg';//Planeta

//Styles
const playButtonStyles = {
  background: `url(${playButtonAsset})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '190px 50px'

}

export function ChooseGameComponent(){


  useEffect(() => {
    
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      //Asi elegimos el principal
      initialSlide: 1,
      freeMode: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

  } , []);

  return(
    <section>


        
      {/*Para hacer el slider de los planetas utilizamos la libreria swiper*/}
      <div className="mySwiper swiper">
        <div className="swiper-wrapper">

          {/*--------------------Primer planeta----------------------*/}
          <div className="swiper-slide">

            <a className="planetaLink">
              <img src={planetaCarrerasAsset} alt="" />
              <span>Proximamente</span>
            </a>
            
          </div>

          {/*--------------------Segundo planeta----------------------*/}
          <div className="swiper-slide">
  
            <a href="" className="planetaLink">
              <img src={planetaRobotAsset} alt="" />
              <span>PLANETA LUNAR</span>
            </a>
            
          </div>

          {/*--------------------Tercer planeta----------------------*/}
          <div className="swiper-slide">

            <a className="planetaLink">
              <img src={planetaCanicasAsset} alt="" />
              <span>Proximamente</span>
            </a>

          </div>


        </div>

        

        <div className="swiper-pagination"></div>
      </div>

      {/*Boton para jugar*/}
      <button href="" style={playButtonStyles} className='playButton'>
          ¡Jugar Ahora!
      </button>
      

    </section>
  )
}

export default ChooseGameComponent;