import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="slider__photo slider-2"
          src="https://i.ibb.co/ZcfWc4q/avto3.png"
          alt="SliderImages2"
        />
        <Carousel.Caption>
          <div className="slider__block-text">
            <p className="slider__title__item">EMERGENCY ROAD SERVICE PROVIDER</p>
            <h1 className="title slider__title">Leading towing service provider.</h1>
            <p className="paragraph slider__paragraph">
            A leading towing company and emergency road service provider. We operate new, clean and professional towing vehicles and equipment.
            </p>
            <div className='slider__btn-block'>
              <div className="s-btn__btn">
                Call us now
              </div>
              <div className="s-btn__btn s__second-btn">
                Learn more
              </div>
            </div>
            <div className='slider__advice-block'>
              <img className='s-clock__img' src="https://i.ibb.co/xjg356J/clock.png" alt="" />
              <p className='s-clock'>Available 24/7 for emergency road service</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
