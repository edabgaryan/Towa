import React from 'react';

export default function About() {
  return (
    <div className="about">
        <div className="about__block">
          <div className='about__work'>
              <div className='about__work-block'>
                <p className='about-w-b__p'>WHY US</p>
                <h3 className='about-w-b__t'>24/7 towing services is what we do</h3>
                <h5 className='about-w-b__sb'>We are a well-equipped towing service available to help with towing a car 24/7 we provide a fast, affordable, friendly, and reliable car towing service.</h5>
                <div className='about-w-b__text'>
                    <div className='about-w-b__text-block-first'>
                        <div><img className='about-w-b__t-b__img' src="https://i.ibb.co/hC5m72P/3rf3r.png" alt="" /></div>
                        <div className='about-w-b__box-text'>
                          <h3 className='box__title'>We can tow any vehicle</h3>
                          <p className='box__paragraph'>We operate new, clean and professional towing vehicles and equipment.</p>
                        </div>
                    </div>
                    <div className='about-w-b__text-block-second'>
                        <div><img className='about-w-b__t-b__img' src="https://i.ibb.co/hC5m72P/3rf3r.png" alt="" /></div>
                        <div className='about-w-b__box-text'>
                          <h3 className='box__title'>
                            Fast, safe and affordable
                          </h3>
                          <p className='box__paragraph'>We provide a fast, affordable, friendly, and reliable car towing service.</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className='about-w-b__mimages'>
                <img className='about-w-b__img' src="https://i.ibb.co/XSXq5w0/4tg4tg-1024x1024.png" alt="" />
              </div>
           </div>
           <div className='about__service'>
              <div className='about-s-b__mimages'>
                <img className='about-s-b__img' src="https://i.ibb.co/XFBxYkx/g4tg4tg-1024x1024.png" alt="" />
              </div>
              <div className='about__work-block'>
                <p className='about-w-b_p'>WHY US</p>
                <h3 className='about-w-b__t'>Emergency towing service</h3>
                <h5 className='about-w-b__sb'>Towing a car can be difficult to attempt on your own if you do not have the right equipment or a powerful enough Towing Vehicle, so do not risk further damage to your car by trying to tow it yourself.</h5>
                <div className="s-btn__btn">
                Call us now
              </div>
              </div>

           </div>
        </div>
    </div>
  );
}
