import React from "react";

import './MainFooterComponent.css';

//Import Assets
import granSorteoAsset from '../../assets/gransorteo.svg';
import cuyVoladorAsset from '../../assets/cuy-volador.svg';
import usaTusLlavesAsset from '../../assets/group-22.svg';

function MainFooterComponent(){

  return(
    <footer>

      <div className="footerRow">

        <a href='' target='_blank'>
          <img src={granSorteoAsset} alt='' className="footerImg"/>
        </a>

        <a href='' target='_blank'>
          <img src={cuyVoladorAsset} alt='' className="footerImg"/>
        </a>

        <a href='' target='_blank'>
          <img src={usaTusLlavesAsset} alt='' className="footerImg"/>
        </a>

      </div>

    </footer>
  )

}

export default MainFooterComponent;