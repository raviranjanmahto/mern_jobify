import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"; //Wrapper is only styles nothing logic

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            enim? Exercitationem eum quas amet molestias similique accusamus
            repudiandae, ad, possimus ullam suscipit pariatur consequuntur nobis
            delectus eos incidunt mollitia aliquam.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        {/* img */}
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
