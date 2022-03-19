import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Elotte from './images/Klima-elotte.jpg';
import Utana from './images/klima-utana.jpg';

function fooldal(){

    return(
        <div id="fooldal">
            <div id="szolgaltatasHeader">
                <h1>Szolgáltatások</h1>
                <a href="/szolgaltatasok_es_arak"><h3>Bővebben..</h3></a>
            </div>
            <p id="foglaljon">Foglaljon időpontot online:</p>
            <div id="szolgaltatasContainer">
                <a href={"https://klima-cleaning.reservio.com/booking/business/service/resource/time?businessId=1821c2fb-8db8-4b30-8edf-4a32fdfbac0c&serviceId=5bc9bdaa-0d01-4d28-a04b-3e219f051200&resourceId=3c48fa8c-1299-4951-ae47-d5455b752c8b"} target="_blank" className="szolgaltatas">
                    <h2><i className="fa-solid fa-leaf"></i> Beltéri egység fertőtlenítése</h2>
                    <p>Új vagy alig használt berendezés esetén ajánljuk a fertőtlenítést. ...</p>
                    <span className="ar">6.900Ft/db</span>
                </a>

                <a href={"https://klima-cleaning.reservio.com/booking/business/service/resource/time?businessId=1821c2fb-8db8-4b30-8edf-4a32fdfbac0c&serviceId=8ea91502-c9c8-4258-8449-1f1280d145e5&resourceId=3c48fa8c-1299-4951-ae47-d5455b752c8b"} target="_blank" className="szolgaltatas">
                    <h2><i className="fa-solid fa-droplet"></i> Beltéri egység mosása</h2>
                    <p>Beltéri egység (oldalfali split klíma) vegyszeres és vízsugaras mosása + fertőtlenítés </p>
                    <span className="ar">14.000Ft/db</span>
                </a>

                <a href={"https://klima-cleaning.reservio.com/booking/business/service/resource/time?businessId=1821c2fb-8db8-4b30-8edf-4a32fdfbac0c&serviceId=84d4458f-2905-4a8b-a166-50be2e160736&resourceId=3c48fa8c-1299-4951-ae47-d5455b752c8b"} target="_blank" className="szolgaltatas">
                    <h2><i className="fa-solid fa-droplet"></i> Kültéri egység mosása</h2>
                    <p>Kültéri egység vegyszeres és vízsugaras mosás a tökéletes teljesítmény érdekében.</p>
                    <span className="ar">2.900Ft/db</span>
                </a>
            </div>

            <hr/>
            
            <div id="elerhetoseg">
                <div id="info">
                    <h1>Kérdése van?</h1>
                    <p>Ha a <b>"Kérdések és válaszok"</b> fül  elolvasása után is kérdése adódna, bátran vegye fel velünk a kapcsolatot!</p>
                    <h2>benkepremiumkft@gmail.com <br /> <span>+3630/3168-312</span></h2>
                </div>
                            
                <div id="face_insta">
                    <h1>Keressen minket Facebookon vagy Instagramon!</h1>
                    <a href={'https://www.facebook.com/klimacleaning/'} target='_blank'>www.facebook.com/klimacleaning</a>
                    <a href={'https://www.instagram.com/klimacleaning/'} target='_blank'>www.instagram.com/klimacleaning</a>
                </div>
            </div>


            <hr/>

            <div>
            <h1 id="technologia">Technológiánk</h1>
            <div id="bemutatas">
                <div id="carousel" width="500px">
                <Carousel>
                        <div>
                            <img src={ Elotte } />
                            <p className="legend">Klíma tisztítás előtt</p>
                        </div>
                        <div>
                            <img src={ Utana } />
                            <p className="legend">Klíma tisztítás után</p>
                        </div>
                </Carousel>
                </div>
                <div id="bemutatas-text">
                    <p><i className="fa-solid fa-arrow-right"></i> Az oldalfali split klímák alapos tisztítása kizárólag csak megfelelő anyagok és eszközök használatával valósítható meg. Bár az év közbeni klíma fertőtlenítő habbal való fertőtlenítés és a szűrök leöblítése is sokat segít, de az alapos évenkénti tisztítást nem helyettesíti.</p>
                    <p><i className="fa-solid fa-arrow-right"></i> A beltéri egység szűrőinek eltávolítása után azokat klíma tisztító és fertőtlenítő szerrel permetezzük be, majd állni hagyjuk, hogy a szer kitudja fejteni hatását.
                    Eközben a klíma hőcserélőjét és ventilátorát (az úgynevezett mókuskereket) szennyoldó szerrel permetezzük be. Ameddig itt is hat a szer, addig a már korábban befújt szűröket alaposan kimossuk, hogy a beletapadt szennyeződéseket (pl. por) eltávolítsuk. Ezután száradni hagyjuk.</p>
                    <p><i className="fa-solid fa-arrow-right"></i> A készülékre permetezett szennyoldó behatási idejének lejárta után professzionális gépünk segítségével vízsugárral alaposan átmossuk. Azután kimondottan beltéri klíma berendezéshez alkalmazható fertőtlenítő szert juttatunk a felületekre, amelyet 10-15 perc hatásidő alatt erős védőréteget is alkot a rendszer belső felületein, ezzel megnehezítve a vírusok, gombák, baktériumok ismételt megtelepedését.
                    10-15 perc után alaposan átöblítjük (lemossuk) a berendezést. Amennyiben már nem távozik szennyeződés (pl. penész darabok), a szárazra törlés után visszaszereljük a már tiszta szűrőket és egyéb korábban eltávolított alkatrészeket, majd a legmagasabb fordulaton járatjuk a klímát hogy tökéletesen kitudjon száradni a maradék nedvesség is.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default fooldal;