// // src/components/Hero.js
// import React from "react";
// // import "./Hero.css"; // If you want to add additional styling for the hero
// import Header from "./Header";
// function Hero() {
//   return (
//     <div>
//     <Header />
//     <section className="hero">
//       <div className="hero-content">
//         <h2>We Work to Bridge the Gap Between Law and Implementation</h2>
//         <p>
//           Chat with us to get an idea of the welfare schemes available for you
//           and how we can help you navigate through legal documentation and
//           bureaucracy.
//         </p>
//       </div>
//     </section>
    
//     </div>
//   );
// }

// export default Hero;

// src/components/Hero.js
// src/components/Hero.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Header from "./Header";
import './Hero.css'
function Hero() {
  const navigate = useNavigate(); // Hook to enable navigation

  const handleButtonClick = () => {
    navigate("/chatbot"); // Navigate to the /chatbot URL when button is clicked
  };

  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h2>We Work to Bridge the Gap Between Law and Implementation</h2>
          <p>
            Chat with us to get an idea of the welfare schemes available for you
            and how we can help you navigate through legal documentation and
            bureaucracy.
          </p>
          <button className="hero-button" onClick={handleButtonClick}>
            Click Here to View Schemes
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;

