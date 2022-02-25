import React from "react";

import './ModalVidasComponent.css';

//Import assets
import backgroundTitleAsset from '../../assets/group-37.svg';
import backgroundContentAsset from '../../assets/oval.png';
import imgModalAsset from '../../assets/group-35.png';
import modalBtnBackground from '../../assets/oval-copy-17.svg';

//Styles
const modalTitleStyle = {
  background: `url(${backgroundTitleAsset})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '184px 57px'
}

const modalContentStyle = {
  background: `url(${backgroundContentAsset})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '320px 400px'
}

const modalBtnStyle = {
  background: `url(${modalBtnBackground})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '146px 62px'
}

export function ModalVidasComponent(){

  

  return(
    <div className="modalBody">
      <div className="modalTitle" style={modalTitleStyle}>
        <h2>VIDAS</h2>
      </div>

      <div className="modalContent" style={modalContentStyle}>
        
        <p className="modalParagraph">
          ¡Adquiere tus paquetes de Bitel Aventuras y sigue con la diversión!
        </p>

        <img className="imgModal" src={imgModalAsset} alt=""/>

        <a href="" target='_blank'  className="modalBtn" style={modalBtnStyle}>
          LO QUIERO
        </a>
        

      </div>
      {/*La clase between modal esta en index.css, es para tapar el modal*/}
      <div className="betweenModal"></div>
    </div>
  )

}

export default ModalVidasComponent;