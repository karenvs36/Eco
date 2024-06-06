import React from 'react';
import Container from './Container';
import Title from './Title';
import { DesktopView, MobileView } from './DesktopView';


const Feature = () => {
  return (
    <section
        id="features"
        aria-label="Features for taking care of the environment"
        className="bg-[#F2EBDE] bg-opacity-90 py-20 sm:py-32"
    >
        <Container>
            <div>
                <Title
                title="Every feature you need. Try it for yourself."
                className="text-[#232E26] text-2xl font-bold ml-32"/>
                <p className="mt-2 text-lg text-customDark-400 ml-32">
                EcoTrack was created for environmentally conscious individuals like you who are determined to make a difference 
                <br/>and won't let anything stand in the way of a greener future. 
                <br />If other apps hesitate to push boundaries, EcoTrack Social embraces innovation.

                </p>
            </div>
        </Container>
        {/* Desktop view */}
        <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
          <DesktopView />
        </div>
        
        {/* Mobile view*/}
        <div className="mt-16 md:hidden">
          <MobileView />
        </div>
    </section>
  )
}

export default Feature;
