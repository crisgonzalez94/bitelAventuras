import React from "react";

import './ModalMonedasComponent.css';

//Import assets
import backgroundTitleAsset from '../../assets/group-37.svg';
import backgroundContentAsset from '../../assets/group-94.png';
import imgModalAsset from '../../assets/group-21.svg';
import miBitelLogoAsset from '../../assets/mi-b-itel.svg';//Logo miBitel
import playStoreLogoAsset from '../../assets/google-play.svg';//Logo PlayStore
import appStoreLogoAsset from '../../assets/app-store.svg';//Logo Appstore
import huaweiStoreLogoAsset from '../../assets/app-gallery.svg';//Logo Huawei store

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
  backgroundSize: '320px 363px'
}

export function ModalMonedasComponent(){

  

  return(
    <div className="modalBody">
      <div className="modalTitle" style={modalTitleStyle}>
        <h2>MONEDAS</h2>
      </div>

      <div className="modalContent" style={modalContentStyle}>
        <img className="imgModalMoneda" src={imgModalAsset} alt="" />
        <p className="modalParagraph">
          ¡Participa del gran sorteo de cada mes!
        </p>
        <p className="modalFooter">
          Compra tus tickets descargando: 
        </p>

        {/*Logo de mi bitel*/}
        <a href="">
          <img src={miBitelLogoAsset} alt="" />
        </a>
        

        {/*Links de tiendas*/}
        <div className="storesBox">
          <a href="https://play.google.com/store/apps/details?id=com.bitel.selfcare&hl=es_AR&gl=US" target='_blank'>
            <img src={playStoreLogoAsset} alt="" />
          </a>
          <a href="https://apps.apple.com/pe/app/mi-bitel/id1172119104" target='_blank'>
            <img src={appStoreLogoAsset} alt="" />
          </a>
          <a href="https://appgallery.huawei.com/app/C101972307?locale=en_GB&shareFrom=appmarket&sharePrepath=ag&shareTo=com.google.android.apps.messaging&source=appshare&subsource=C101972307&utm_medium=affiliatetdb&utm_source=tradedoublertdb&tduid=43da96c347976b0fbe1f6da765500d2d&utm_content=adgoal%20DEtdb" target='_blank'>
            <img src={huaweiStoreLogoAsset} alt="" />
          </a>
        </div>
        

      </div>
      {/*La clase between modal esta en index.css, es para tapar el modal*/}
      <div className="betweenModal"></div>
    </div>
  )

}

export default ModalMonedasComponent;