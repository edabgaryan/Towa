import React from 'react';
import Slider from '../../components/Slider/Slider';
import Elements from '../../components/Elements/Elements';
import About from '../../components/About/About';
import CallUs from '../../components/CallUs/CallUs';
import Service from '../../components/Service/Service';
import Reviews from '../../components/Reviews/Reviews';
import Faq from '../../components/Faq/Faq';
import FooterElements from '../../components/FooterElements/FooterElements';
import Footer from '../../components/Footer/Footer';


export default function Home() {
  return (
    <>
      <Slider />
      <Elements/>
      <About/>
      <CallUs/>
      <Service/>
      <Reviews/>
      <Faq/>
      <FooterElements/>
    </>
  );
}
