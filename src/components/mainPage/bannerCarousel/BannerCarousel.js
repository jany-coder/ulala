import React from 'react';
import image1 from '../../../assets/image4.jpg';
import image2 from '../../../assets/image2.jpg';
import image3 from '../../../assets/image3.jpg';
import image4 from '../../../assets/image1.jpg';
import BackgroundSlider from 'react-background-slider';



export default function BannerCarousel () {

    return (
        <div>
            <div className="vh-100">
                <BackgroundSlider images={[image1,image2,image3, image4]} duration={4}transition={1}/>
            </div>
            <div>
               {/* custom text */}
            </div>
        </div>
    );
};