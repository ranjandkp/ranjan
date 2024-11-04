import React, { useState } from "react";
import "./Letter.css";
import EnterPasswordImg from "../assets/password.gif";

import tImg from "../assets/t.gif";
const Letter = () => {
  const [currentPage, setCurrentPage] = useState("intro");
  const [currentPassword, setCurrentPassword] = useState("");
  const correctPassword = "2823";

  const goToPasswordPage = () => setCurrentPage("password");
  // const goToHomePage = () => setCurrentPage("home");
  // const showGallery = () => setCurrentPage("gallery");
  // const showTimeTogether = () => setCurrentPage("time");
  // const showLetter = () => setCurrentPage("letter");

  const enterNumber = (number) => {
    setCurrentPassword((prev) => prev + number);
  };

  const deleteLast = () => {
    setCurrentPassword((prev) => prev.slice(0, -1));
  };

  const submitPassword = () => {
    if (currentPassword === correctPassword) {
      setCurrentPage("about");
      setCurrentPassword("");
    } else {
      alert("Incorrect password! Try again.");
      setCurrentPassword("");
    }
  };

  const calculateTimeTogether = () => {
    const startDate = new Date("October 22, 2022");
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return `${daysTogether} days together.`;
  };

  return (
    <div className="Letter flex justify-center overflow-scroll m-5">
      {currentPage === "intro" && (
        <div className="page active w-[400px]" id="introPage">
          <img src={tImg} alt="" className="" />
          <h1 className="">
            Hi, I am contacting you for the last time, I swear. Please, at least
            consider me worthy enough to read what I wanted to say.
            <br />
            <br />
            {
              "(and please don't say anything to teju i forced her to send this link)"
            }
          </h1>
          <button
            className="start-btn text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={goToPasswordPage}
          >
            Okay!
          </button>
        </div>
      )}

      {currentPage === "password" && (
        <div className="page active w-[400px]" id="passwordPage">
          <img src={EnterPasswordImg} alt="" />
          <h2>Enter the Password</h2>
          <div className="password-display" id="passwordDisplay">
            {currentPassword}
          </div>
          <div className="password-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button key={num} onClick={() => enterNumber(num)}>
                {num}
              </button>
            ))}
          </div>
          <button
            onClick={deleteLast}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            backspace
          </button>
          <button
            onClick={submitPassword}
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
        </div>
      )}

      {currentPage === "about" && (
        <div className="page active" id="aboutPage">
          <div className="letter-content">
            <p>Dear Trupthi,</p>
            <br />
            <p>
              To begin with, I love you with a depth and passion that I have
              felt for no one else in this life and if it astonishes you it
              astonishes me as well.{" "}
            </p>
            <br />
            <p>
              It’s just that, first of all, I swore I would not get involved
              with another woman.{" "}
            </p>
            <br />
            <p>
              Secondly, I have never had such a feeling before and it’s almost
              frightening.
            </p>
            <br />
            <p>
              {" "}
              Thirdly, I would never have thought it possible that another human
              being could occupy my waking (and sleeping) thoughts to the
              exclusion of almost everything else.{" "}
            </p>
            <br />
            <p>
              Fourthly, I never hoped, aspired, dreamed that one could find
              everything one wanted in a person. I was not such an idiot as to
              believe this was possible. Yet, in you, I have found everything I
              want: you are beautiful, giving, gentle, idiotically and
              deliciously feminine, sexy, wonderfully intelligent and
              wonderfully silly as well. I want nothing else in this life than
              to be with you, to listen and watch you (your beautiful voice,
              your beauty), to argue with you, to laugh with you, to show you
              things and share things with you, to explore your magnificent
              mind, to explore your wonderful body, to help you, protect you,
              serve you, and bash you on the head when I think you are wrong…
              not to put too fine a point on it I consider that I am the only
              man outside mythology to have found the crock of gold at the
              rainbow’s end.
            </p>
            <br />
            <p>
              I know things are not that easy for you to acknowledge and
              consider me as your next chapter in your life, but I must tell you
              that chapter which we, maybe, in some parallel universe, we will
              write is the most beautiful, most lovable and most delightful and
              most pleasing ever.
            </p>
            <br />
            <p>
              {" "}
              And lastly, I want to say that I’m not the protagonist of your
              story; you are the one who makes choices, whether they’re wrong or
              right. You’re like a free bird, soaring high in the sky, never
              wishing to come back. But for now and forever, I assure you I will
              wait for the day you miss the nest and want to come down. I’ll be
              here for you with the same desire, the same passion, filled with
              love, with no complaints, and demands. whether it takes you 10
              years, 100, or even millions.
            </p>
            <br />
            <p>
              And all this I’m doing for the sake of one minute of your company,
              for your laugh, your voice, your eyes, hair, lips and above
              all for your sweet, ever-surprising mind which is an enchanting
              quarry in which it is my privilege to delve.
            </p>
          </div>
          {/* <button className="home-btn" onClick={goToHomePage}>Home</button> */}
        </div>
      )}

      {/* {currentPage === 'home' && (
          <div className="page active" id="homePage">
            <div className="choices">
              <div className="choice" onClick={showGallery}>
                <img src="gallery-icon.png" alt="Gallery" />
                <p>Gallery</p>
              </div>
              <div className="choice" onClick={showTimeTogether}>
                <img src="calendar-icon.png" alt="Time Together" />
                <p>Time Together</p>
              </div>
              <div className="choice" onClick={showLetter}>
                <img src="letter-icon.png" alt="Letter" />
                <p>Letter</p>
              </div>
            </div>
          </div>
        )}
  
        {currentPage === 'gallery' && (
          <div className="page active" id="galleryPage">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg', 'gallery5.jpg', 'gallery6.jpg'].map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 1}`} />
              ))}
            </div>
            <button className="back-btn" onClick={goToHomePage}>Back to Home</button>
          </div>
        )}
  
        {currentPage === 'time' && (
          <div className="page active" id="timePage">
            <h2>Time Together</h2>
            <p>We've been together since October 22, 2022, which means:</p>
            <div id="timeTogether">{calculateTimeTogether()}</div>
            <button className="back-btn" onClick={goToHomePage}>Back to Home</button>
          </div>
        )}
  
        {currentPage === 'letter' && (
          <div className="page active" id="letterPage">
            <h2>A Letter for You</h2>
            <div className="letter-content">
              <p>Dear [Name],</p>
              <p>From the day we met until now, my love for you has only grown stronger. I cherish every moment we share, and I'm so grateful to have you in my life. Here's to many more memories together!</p>
              <p>Love, [Your Name]</p>
            </div>
            <button className="back-btn" onClick={goToHomePage}>Back to Home</button>
          </div>
        )} */}
    </div>
  );
};

export default Letter;
