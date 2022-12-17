import React from "react";
import { Link } from "react-router-dom";
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
            Jobify is the Job tracking application for the Student or working
            professional who want to track his/her job status. Once the Job
            status is change you can change status of your application by
            updating Job status. Also you can update your profile and add job as
            many as you want!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        {/* img */}
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
