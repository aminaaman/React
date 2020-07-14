import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
function Home (){
    
        return (
            <Carousel>
                <div>
                    <img src="https://www.ilapak.com/var/plain_site/storage/images/news-events/news/there-s-map-and-there-s-vacmap-long-life-short-ingredient-list/83950-1-eng-GB/There-s-MAP-and-there-s-VACMAP-long-life-short-ingredient-list.jpg" alt=" "/>
                    <p className="legend">Delicious pizzas are only here</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/media/DpzyfYMUcAAWIE2.jpg" alt=" "/>
                    <p className="legend">Fresh pizzas from the oven</p>
                </div>
                <div>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal2-1542822781.png?crop=1.00xw:0.752xh;0,0.139xh&resize=480:*" alt=" "/>
                    <p className="legend">The best pizzaria in Almaty</p>
                </div>
            </Carousel>
        );
    }



export default Home;
