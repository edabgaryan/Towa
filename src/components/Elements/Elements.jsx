import React from 'react';

export default function Elements() {
  return (
    <div className="elements">
        <div className="elements__section">

            <div className="elements__s-block">
                    <div className='s-block__main '>
                        <div  className='s-block-li'>
                            <span className='elementor-icon'>
                                <img className="section__block-img" src="https://i.ibb.co/JyrKdRF/icons8-call-24-3.png" alt="" />
                            </span>
                            <a className="section__block-title" href="">9097982752</a>
                        </div>
                        <div  className='s-block-li'>
                            <span className='elementor-icon'>
                                <img className="section__block-img" src="https://i.ibb.co/BLGF5JH/icons8-clock-24-1.png" alt="" />
                            </span>
                                <a className="section__block-title" href="">Arriving in 30 min</a>
                        </div>
                        <div  className='s-block-li'>
                            <span className='elementor-icon e-icon-w'>
                                <img className="section__block-img" src="https://i.ibb.co/njffDTg/icons8-check-24.png" alt="" />
                            </span>
                                <a className="section__block-title" href="">No hidden fees</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}
