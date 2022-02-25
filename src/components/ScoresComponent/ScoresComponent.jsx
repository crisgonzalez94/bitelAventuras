//Import styles
import './ScoresComponent.css';

//Libreria para los popups
import Popup from 'reactjs-popup';

//Import assets
import moneyIcon from '../../assets/group-55.svg';
import heartIcon from '../../assets/group-113.svg';
import ovalIcon from '../../assets/oval_2.svg';

/*Los popups abrirarn componentes de tipo modal
(cada modal es un componente individual con sus propias caracteristicas,)
No hay componentes modales genericos */
import ModalMonedasComponent from '../ModalMonedasComponent/ModalMonedasComponent';
import ModalVidasComponent from '../ModalVidasComponent/ModalVidasComponent';

export function ScoresComponent(){

  return(
    <div className='box'>
      <br />



      <Popup modal nested trigger={
        /*Boton del popup*/
        <div className="scoreBox">
          <a>
            <img src={moneyIcon} alt="" className='firstIcon'/>
            <img src={ovalIcon} alt="" className='lastIcon'/>
            <div className="scoreTextBox">
              {/*Aqui muestra el puntaje*/}
              <span>08</span>
            </div>
          </a>
        </div>
      }>
        {close => (
          <div className="modal">
            
            {/*Boton de cerrar popup*/}
            <button className="close" onClick={close}> &times; </button>
            {/*Contenido del popup (llamamos con los parametros al componente popup)*/}
            <div className="content">
              <ModalMonedasComponent></ModalMonedasComponent>
            </div>
            
          </div>
        )}
      </Popup>

    
      <Popup modal nested trigger={
        /*Boton del popup*/
        <div className="scoreBox">
          <a>
            <img src={heartIcon} alt="" className='firstIcon'/>
            <img src={ovalIcon} alt="" className='lastIcon'/>
            <div className="scoreTextBox">
              {/*Aqui muestra el puntaje*/}
              <span>08</span>
            </div>
          </a>
        </div>
      }>
        {close => (
          <div className="modal">

            {/*Boton de cerrar popup*/}
            <button className="close" onClick={close}> &times; </button>
            {/*Contenido del popup (llamamos con los parametros al componente popup)*/}
            <div className="content">
              <ModalVidasComponent></ModalVidasComponent>
            </div>

          </div>
        )}
      </Popup>

    </div>
  )
}

export default ScoresComponent;