import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import "./StaffPage.css";
export default class StaffPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <div className="trainer-page">
        <header className="trainer-page-header">
          <h3>Trainers</h3>
        </header>

        <div className="trainer-header-1">
          <h4>Kelly Rempe (Allen)</h4>
        </div>
        <div className="trainer-1">
          <div className="trainer-img-1">
            <img
              src="https://i.imgur.com/Ve9pBHj.jpg"
              alt="Trainer Kelly Rempe lifting weighted ball"
            />
          </div>
          <div className="trainer-content-1">
            <p>
              From an early age I took a liking to sports and physical
              activities. I grew up playing soccer, basketball, softball,
              volleyball, or anything else to stay active. I played sports in
              high school and college and after college tried to stay active but
              found it hard to find something to keep my interest. Like most
              people I gave up did nothing and the pounds piled on. After a few
              years I decided to do something about it, so I joined a local gym
              and had some progress, but found myself lacking motivation and
              getting bored with the machine weights and treadmills. I was
              approached about trying CrossFit and thought sure why not. I came
              in the next day thinking nothing of it, but that day changed my
              life forever.
            </p>
          </div>
        </div>
        <div className="trainer-header-2">
          <h4>Brian Rempe</h4>
        </div>
        <div className="trainer-2">
          <div className="trainer-img-2">
            <img
              src="https://i.imgur.com/C5GvssG.jpg"
              alt="Trainer Brian Rempe doing a pull-up"
            />
          </div>
          <div className="trainer-content-2">
            <p>
              {" "}
              I love sports and love to compete, but have never been a stellar
              athlete. I try harder than most people but I’m not gifted like a
              lot of people. I have been part of phenomenal programs like the
              2000-2001 CHS Wrestling team, but I contributed more in the
              practice room than I did anywhere else. Regardless I’m still a
              competitive person and have a passion for athletics and fitness. I
              guess the phrase “those that can’t do… teach” applies to me. Which
              is completely fine with me. I love obsessing over all the little
              details when it comes to CrossFit movements or Olympic lifts or
              anything that can make someone a more efficient athlete. I get a
              huge sense of accomplishment when I can help someone struggling
              with a particular movement and I give them advice or cues and you
              see the “lightbulb” go on!. Seeing people make personal gains and
              knowing you helped is an amazing feeling. I believe that CrossFit
              is not just a fad or the next big thing, but in fact the next
              major sport! I love CrossFit and everything that it stands for and
              just want to share my passion for it with anyone who is willing to
              listen and is not afraid of a little pain.
            </p>
          </div>
        </div>
        <div className="trainer-header-3">
          <h4>Angela Walker</h4>
        </div>
        <div className="trainer-3">
          <div className="trainer-img-3">
            <img
              src="https://i.imgur.com/vsdcVWy.jpg"
              alt="Trainer Angela W. Lifting overhead"
            />
          </div>

          <div className="trainer-content-3">
            {" "}
            <p>
              {" "}
              I am a wife and mother of 2 boys who keep things lively. I’ve
              always loved anything to do with athletics, growing up I was
              always active and had to be moving around. I played volleyball
              from Jr High through College and loved the competitiveness that
              went along with it. After college I spent most of the time doing a
              lot of cardio and popping into the weight room to do a bicep curl
              followed by a lateral pull down or two but never getting that
              thrill of competition. After years of doing the same movements and
              repeating the same types of workouts I wanted more, I was bored
              with my normal routine. I was introduced to CrossFit by a friend.
              I taught fitness classes and thought I was in decent shape walking
              in the door January 2012, boy was I wrong. I have been challenged
              and pushed past what I thought I was ever capable of. The daily
              nerves before a workout and wanting to push myself to compete with
              myself gives me the competitiveness that I had been missing.
            </p>
          </div>
        </div>
        <div className="trainer-header-4">
          <h4>Shelli Miles </h4>
        </div>
        <div className="trainer-4">
          <div className="trainer-img-4">
            <img
              src="https://i.imgur.com/KzsI6da.jpg"
              alt="Trainer Angela W. Lifting overhead"
            />
          </div>
          <div className="trainer-content-4">
            <p>
              {" "}
              When I turned 40, I had a goal to do a triathlon. I turned 41, and
              still had never done anything. During that year, I started
              exercising regularly and did a few triathlons and a few races. I
              was never athletic or into fitness before that time. Then a new
              gym opened in Clinton. CrossFit Influence. I went and was
              immediately addicted. I have now gotten my family to participate
              in CrossFit with me. I am proof that you can begin anything at any
              age.
            </p>
          </div>
        </div>
        <div className="trainer-header-5">
          <h4>Jeremiah Jensen </h4>
        </div>
        <div className="trainer-5">
          <div className="trainer-img-5">
            <img
              src="https://i.imgur.com/RoQInhQ.jpg"
              alt="Trainer Jeremiah J.doing some drills"
            />
          </div>
          <div className="trainer-content-5">
            <p>
              {" "}
              As long as I can remember I have always loved being active but I
              never played any sports growing up. I started going to the high
              school gym around the age of 16 and randomly teaching myself how
              to lift weights. I continued this throughout high school and until
              September 2013. I had just turned 28 years old and I needed a
              change. That’s when I started at CrossFit Influence. CrossFit
              brought back my desire that had been lost over the years of the
              same old monotonous routines. The environment is irreplaceable and
              the community aspect of it is what kept me coming back every day.
              Now at almost 30, I am stronger, faster, and in better shape than
              I’ve ever been. CrossFit changed my life for the better, so I
              decided to get my Level 1 trainer certificate so that maybe I can
              help change someone else’s life as well. For me, there is no
              better feeling than knowing that I can help someone improve their
              quality of life through coaching. Whether you are looking to back
              squat 500lbs or to just get up off the couch with less pain, I
              100% believe that CrossFit is right for you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
