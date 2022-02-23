//Import styles
import './HeaderComponent.css';

//Import assets
import logoAsset from '../../assets/group-48.svg'//Logo
import instructionBackgroundAsset from '../../assets/group-61.svg'//Fondo del cuadro

//Styles
const instructionStyles = {
  background: `url(${instructionBackgroundAsset})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300px 100px'
}

export function HeaderComponent(){

  return(
    <header>

      {/*Logo principal bitelAventuras*/}
      <div className="logoLink">
        <a href="">
          <img src={logoAsset} alt="" />
        </a>
      </div>
      

      <div className='instruction' style={instructionStyles}>
        <p>Juega y gana en el Planeta Lunar <br />
        !Proximamente más planetas <br />
        Para Jugar!
        </p>
      </div>

    </header>
  )
}

export default HeaderComponent;