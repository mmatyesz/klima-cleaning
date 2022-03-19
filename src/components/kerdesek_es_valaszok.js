import React from 'react'
let qna = [
  {
    id:1,
    question:"Látta Ön már belülről klímaberendezését???",
    answer:"Nyissa le a klíma légterelőjét és világítson be egy erős lámpával. Megfelelő tisztítás nélkül már egy szezon alatt is annyi szennyeződés képes felgyűlni a klímában, ami rontja a berendezés hatásfokát és veszélyt jelenthet Ön és családja egészségére is."
  },
  {
    id:2,
    question:"Évek óta klíma szerelő tisztítja egy egyszerű fertőtlenítő spray segítségével???",
    answer:"Akkor van egy rossz hírünk! A fertőtlenítő szer nem képes eltávolítani a klíma berendezés alkatrészeire tapadt port, penészt és egyéb szennyeződéseket. Ahogy a nevében is benne van, FERTŐTLENÍT! De hiába fertőtlenít, ha vastag penész réteg borítja a klímát ami alatt továbbra is vígan élnek a gombák, vírusok, baktériumok amik minden egyes elindításnál a levegőbe is kerülnek és durva megfázásszerű tüneteket okozhatnak."
  },
  {
    id:3,
    question:"Milyen betegségeket okozhat a klíma?",
    answer:"Az egyik legrosszabb betegség amit a klímaberendezéstől kaphatunk, az az úgy nevezett légiós betegség, vagyis a legionella. Ez a baktérium leginkább tavakban, patakokban fordul elő, de akár ivóvízzel is a szervezetünkbe kerülhet. Sőt, még fürdünk is benne! Még sem okoz semmi problémát. (De a tüdőbe kerülve már igen!)Sajnos a klímában található nedvesség tökéletes táptalaj a legionellának. A berendezés elindításakor a ventilátor apró kis cseppekként juttatja a levegőbe, amit belélegzünk és így a tüdőbe jutva tüdőgyulladás alakul ki, emellett számos egyéb megfázásszerű tüneteket okozó betegségeket is kaphatunk a nem megfelelően tisztított és fertőtlenített klímától."
  },
  {
    id:4,
    question:"Hogy és miért kezdtük el???",
    answer:"Mi is használunk légkondicionáló berendezést! A nyári hőségben igazi kincs! Évekig a telepítést végző céggel végeztettük a berendezés tisztítását. Bár elég furcsa volt, hogy mindössze 3-5 perc alatt végzett a szakember a feladattal, de nem foglalkoztam többet a dologgal mert bíztam benne és a szaktudásában.Egy alkalommal megfigyeltem a műveletet. Kiszedi a szűröket, lemossa, befújja a fertőtlenítőt a klímába, szűrők vissza, kicsit áttörölget és kész.Gondoltam nem is olyan nehéz feladat, ezt én is megtudom oldani mostantól. Vígan használtuk a klímát, mondván hogy rendszeresen tisztítva van, nem lehet gond. A következő klíma szezon közeledtével nekiláttam a tisztításnak. Ekkor tűnt fel hogy néhány év alatt mennyi penész borítja a klíma belsejét. Kicsit utána járva kiderítettem, hogy az az eljárás amit a klímaszerelő 5 perc alatt elvégzett (horror áron), nem nevezhető tisztításnak. Esetleg egy jó adag túlzással portalanításnak, fertőtlenítésnek.Ez önmagában nem elég!!! Ekkor döntöttem el, hogy a klíma mosás technológiáját igyekszem a lehető legtöbb emberrel megismertetni, mivel elengedhetetlen az alapos tisztítás!!! Sok-sok utánajárás, képzés és tanulás után értem el azt, hogy mára már számos split klímát mi (kis csapatommal) takarítunk évről-évre az ügyfelek teljes megelégedésére."
  },
  {
    id:5,
    question:"Hol vállalunk klíma mosást és fertőtlenítést?",
    answer:"Baranya megyében végezzünk megbízásaink 95%-át. De természetesen szívesen megyünk bárhová, ahol szükség van ránk és a klíma által befújt hűvös de egészséges levegőre."
  },
  {
    id:6,
    question:"Vállalunk-e telepítést vagy szerelés?",
    answer:"NEM! Kizárólag csak meglévő és működőképes split klímák tisztításával és fertőtlenítésével foglalkozunk."
  },
  {
    id:7,
    question:"Mennyi időt vesz igénybe a klíma alapos tisztítása?",
    answer:"Beltéri egység alapos mosása/tisztítása/fertőtlenítése nagyjából 45 percet, 1 órát vesz igénybe. Természetesen ez függ a klíma szennyezettségének mértékétől. (Jártunk már úgy, hogy egy 15 éve használt de egyszer sem tisztított klímával találkoztunk. Az a berendezés 2,5 órás feladatot adott! De megoldottuk!) :) Beltéri és kültéri egység tisztításának esetén kb. 2 órával kell számolni!"
  },
  {
    id:8,
    question:"Mennyire koszolunk munkavégzés alatt?",
    answer:"Munkánk során igyekszünk nagyon ügyelni a tisztaságra! A lakásba lépés előtt lábzsákot húzunk cipőnkre, ezzel is megkímélve a tulajdonost a plusz munkától."
  },
  {
    id:9,
    question:"Kell-e tartani a falon végigfolyó víztől?",
    answer:"NEM! Saját magunk által legyártott vízfogónk segítségével a klímából kifolyó össze vizet és szennyeződést összegyűjtjük, nagy figyelmet fordítva a fal és a klíma alatt található eszközök épségére."
  },
  {
    id:10,
    question:"Milyen gyakorisággal szükséges elvégezni a tisztítást?",
    answer:"Amennyiben csak hűtésre használják a klímát, úgy évente egyszer elegendő tisztítani, a klíma szezon előtt (tavasszal). Ha fűtenek is a berendezéssel, akkor kétszer ajánlott a klíma alapos takarítása (hűtési szezon elején és a fűtési szezon előtt)."
  },
  {
    id:11,
    question:"Minden típusú klíma tisztításával foglalkozunk?",
    answer:"Kizárólag oldalfali split klímák mosásával, tisztításával foglalkozunk! Az átlagostól eltérően nyíló légterelővel szerelt beltéri egységű berendezések tisztítását, mosását nem minden esetben tudjuk vállalni! (Ilyen klíma pl. a Fujitsu Nocria és a Fischer Art)"
  },
  {
    id:12,
    question:"Festés/takarítás előtt vagy után hívjuk?",
    answer:"Bár nagy figyelmet fordítunk a tisztaságra és odafigyelünk arra is hogy a fal ne kapjon vizet, mégis sokkal egyszerűbb dolgunk van ha még a festés/nagytakarítás előtt tudjuk elvégezni a klíma tisztítását. Ezért kérjük, amennyiben megoldható, festés vagy nagytakarítás előtt keressen minket!"
  },
]
const kerdesek_es_valaszok = () => {
  const qnaList = qna.map(block => {
    return(
      <div className="qna-card" key={block.id}>
        <h3>{block.question}</h3>
        <p>{block.answer}</p>
        {block.id < 12 ? <hr className="hr"/> : ""}
      </div>
    )
  })

  return (
      <div className="qna">
        <h1 id="cim"><i className="fa-solid fa-circle-question"></i> kérdések és válaszok</h1>
        <div id="qna-container">{qnaList}</div>
      </div>
  );
};

export default kerdesek_es_valaszok;