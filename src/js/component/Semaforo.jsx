import React, {useState} from 'react'
import generalStyles from './general.module.css'
import style from './Semaforo.module.css'
import './Boton.luzVioleta.css';
import imageStyle from '/workspaces/Kara--trafficLight/src/img/ladrillo.module.css'
import ladrillos from '/workspaces/Kara--trafficLight/src/img/ladrillos.jpg'

const Semaforo = () => {

  const [selected, setSelected] = useState("none");

  const shadow = (color) => {
    setSelected(color)
  }

  const [divExist, setDivExist] = useState("false")


  return (
    <div style={{backgroundImage: `url(${ladrillos})`}} className={imageStyle.backImageSize}>
      <div className='containter-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className='boton1'>
              <p>Quieres agregar/quitar una luz violeta?</p>
            </div>
            <div className='boton' onClick={() => setDivExist(!divExist)}>
              <p>Agregar/quitar luz violeta</p>
            </div>
          </div>
          <div className='col-6'>
            <div className={generalStyles.centeringDivs}>
              <div className={generalStyles.soporte}></div>
            </div>
            <div className={generalStyles.centeringDivs}>
              <div tag="baseDeSemaforo" className={generalStyles.soporteAndShadow}>

                  <div tag="luzSuperior" onMouseOver={() => shadow("red")} onMouseOut={() => shadow("none")} className={selected === "red"? style.lightOnRed : style.lightOffRed}>

                  </div>

                  <div tag="luzMedia" onMouseOver={() => shadow("yellow")} onMouseOut={() => shadow("none")} className={selected === "yellow"? style.lightOnYellow : style.lightOffYellow}>
                      
                  </div>

                  <div tag="luzInferior" onMouseOver={() => shadow("green")} onMouseOut={() => shadow("none")} className={selected === "green"? style.lightOnGreen : style.lightOffGreen}>
                      
                  </div>

                  {divExist && <div tag="luzInferior" onMouseOver={() => shadow("purple")} onMouseOut={() => shadow("none")} className={selected === "purple"? style.lightOnPurple : style.lightOffPurple}>
                      
                  </div>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Semaforo