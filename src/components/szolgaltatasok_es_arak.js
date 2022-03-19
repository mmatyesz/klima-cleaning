import React from 'react'
import kulteri from './images/kulteri.jpg';
import belteri from './images/belteri.jpg';
import fertotlenites from './images/fertotlenites.jpg';
import './style.css'


const szolgaltatasok_es_arak = () => {
  return (
    <div className="szolgaltatasok">
      <h1 id="cim"><i className="fa-solid fa-coins"></i> Szolgáltatások és árak</h1>
      <section>
        <img src={ fertotlenites } alt="" />
        <div>
        <h1>Klíma fertőtlenítés</h1>
        <h3>6.990Ft/db</h3>
        <p>Új vagy alig használt berendezés esetén ajánljuk a fertőtlenítést. Ekkor még nincs penész, por és egyéb szennyeződés a klíma belső egységében, így nincs szükség klíma mosásra. Ha viszonylag keveset van használva a klíma (pl. nyaralókba), akkor elég lehet 2-3 évente igénybe venni a klíma mosás/tisztítás szolgáltatásunkat, így évente elegendő csak a fertőtlenítést elvégeztetni!</p>
        </div>
        <a href={"https://klima-cleaning.reservio.com/booking/business/service/resource/time?businessId=1821c2fb-8db8-4b30-8edf-4a32fdfbac0c&serviceId=5bc9bdaa-0d01-4d28-a04b-3e219f051200&resourceId=3c48fa8c-1299-4951-ae47-d5455b752c8b"} target="_blank">Ezt választom <i className="fa-solid fa-arrow-right"></i></a>
      </section>
      <section>
        <img src={ belteri } alt="" />
        <div>
        <h1>Beltéri egység mosása</h1>
        <h3>14.990Ft/db</h3>
        <p>3db esetén már 12.990 Ft/db áron! Beltéri egység (oldalfali split klíma) vegyszeres és vízsugaras tisztítása + fertőtlenítés</p>
        </div>
        <a href={"https://klima-cleaning.reservio.com/booking/business/service/resource/time?businessId=1821c2fb-8db8-4b30-8edf-4a32fdfbac0c&serviceId=8ea91502-c9c8-4258-8449-1f1280d145e5&resourceId=3c48fa8c-1299-4951-ae47-d5455b752c8b"} target="_blank">Ezt választom <i className="fa-solid fa-arrow-right"></i></a>
      </section>
      <section>
        <img src={ kulteri } alt="" />
        <div>
        <h1>Kültéri egység mosása</h1>
        <h3>2.990Ft/db-tól</h3>
        <p>Kültéri egység vegyszeres és vízsugaras mosás a tökéletes teljesítmény érdekében.
        <br /><b>[Kültéri egység tisztítását csak abban az esetben vállaljuk, ha a mosás során keletkező koszos víz nem okoz problémát, kellemetlenséget.]</b></p>
        </div>
        <a href={"https://klima-cleaning.reservio.com/booking/business/service/resource/time?businessId=1821c2fb-8db8-4b30-8edf-4a32fdfbac0c&serviceId=84d4458f-2905-4a8b-a166-50be2e160736&resourceId=3c48fa8c-1299-4951-ae47-d5455b752c8b"} target="_blank">Ezt választom <i className="fa-solid fa-arrow-right"></i></a>
      </section>
    </div>
  )
}
export default szolgaltatasok_es_arak;