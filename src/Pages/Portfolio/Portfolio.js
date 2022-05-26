import React from "react";
import PortfolioPic from "../../assets/main_pic.jpg";
const Portfolio = () => {
  return (
    <div className="porfolio flex justify-center bg-base-200">
        <div class="card max-w-md w-96 bg-base-100 shadow-2xl my-12  ">
      <figure class="m-10 ">
        <img
          src={PortfolioPic}
          alt="pic"
          class="rounded-box "
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Name: Anamul Haque</h2>
        <p class="font-base text-ghost">Email: anamulhaque0198877@gmail.com</p>
        <p>Study: Completed BSC IN CSE from City Universiy</p>
        <h3>Skill:</h3>
        <div className="skill flex justify-around">
          <div className="left">
            <p>css</p>
            <p>Bootstrap</p>
            <p>Javascript</p>
            <p>SQL</p>
            <p>Java</p>
            <p></p>
          </div>
          <div className="right">
            <p>Html</p>

            <p>Tailwind</p>
            <p>React </p>
            <p>Mongodb</p>
            <p>Express js</p>
            <p>Git</p>
          </div>
        </div>

        <h3 class="text-center font-bold my-3">Project Link</h3>
        <p>Live Link: https://app.netlify.com/sites/screen-recording-and-downloading-app/overview</p>
        <p>Live Link: https://jannah-travel-responsive-front-end-site.netlify.app/</p>
        <p>Live Link: https://anme-app.netlify.app/</p>
      </div>
    </div>
    </div>
   
  );
};

export default Portfolio;
