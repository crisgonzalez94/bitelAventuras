//Import styles
import './ScoresComponent.css';

//Import assets
import moneyIcon from '../../assets/group-55.svg';
import heartIcon from '../../assets/group-113.svg';
import ovalIcon from '../../assets/oval_2.svg';


export function ScoresComponent(){

  return(
    <div className='box'>
      <br />
      <div className="scoreBox">
        <a href="">
          <img src={moneyIcon} alt="" className='firstIcon'/>
          <img src={ovalIcon} alt="" className='lastIcon'/>
          <div className="scoreTextBox">
            {/*Aqui muestra el puntaje*/}
            <span>124</span>
          </div>
        </a>
      </div>

      <div className="scoreBox">
        <a href="">
          <img src={heartIcon} alt="" className='firstIcon'/>
          <img src={ovalIcon} alt="" className='lastIcon'/>
          <div className="scoreTextBox">
            {/*Aqui muestra el puntaje*/}
            <span>08</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ScoresComponent;