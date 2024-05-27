import React from "react";
import "./Home.css";
import pug from "./pug.png";
import pug2 from "./pug2.png";
import farejador from "./farejador.png";
import sleep from "./sleep.png";
import osso from "./osso.png";
import osso2 from "./osso2.png";

function Home() {
  return (
    <div className="home">
      <header>
        <div className="h1hh">Here you learn about your best friend!</div>
      </header>
      <div className="all">
        <div className="divosso">
          <img className="osso" src={osso} alt="" />
          <img className="osso" src={osso} alt="" />
          <img className="osso" src={osso} alt="" />
        </div>
        <div className="meio">
          <div className="h1meio">
            <h1>
              Calling all dog lovers! <br />
              If you are looking for some great advice on ways to enhance your
              best friend’s life, then this is the blog for you.
            </h1>
          </div>

          <div className="imgpug">
            <img className="pug" src={pug2} alt="" />
          </div>
        </div>

        <section className="sechome">
          <div className="dyk">
            <div className="rest">
              <div className="h1imgrest">
                <h1>Did you Know?</h1>
              </div>

              <h4>
                <a
                  className="reatA"
                  href="https://www.akc.org/canine-partners/a-nose-for-ooze-dogs-put-scent-skills-to-good-work/"
                >
                  {" "}
                  A dog’s sense of smel{" "}
                </a>
                is legendary, but did you know that their nose has as many as
                300 million receptors? In comparison, a human nose has about 5
                million.
              </h4>
            </div>

            <div>
              <img src={farejador} className="farejadorcont" alt="" />
              <div className="hr"></div>
            </div>
          </div>
          <div className="dyk">
            <div className="rest">
              <div className="h1imgrest">
                <h1>Did you know?</h1>
              </div>

              <h4>
                A dog’s nose print is unique, much like a person’s fingerprint.
              </h4>
              <h4>
                Dogs’ noses can sense heat and thermal radiation, which explains
                why blind or deaf dogs can still hunt.
              </h4>
            </div>
            <div>
              <img src={pug} className="pugcont" alt="" />
              <div className="hr"></div>
            </div>
          </div>
          <div className="dyk">
            <div className="rest">
              <div className="h1imgrest">
                <h1>Did you know? </h1>
              </div>

              <h4>
                Forty-five percent of U.S. dogs{" "}
                <a
                  className="reatA"
                  href="https://www.akc.org/expert-advice/lifestyle/where-do-dogs-sleep-at-night-infographic/"
                >
                  sleep in their owner’s beds.
                </a>
              </h4>
              <h4>
                Speaking of sleeping …{" "}
                <a
                  className="reatA"
                  target="blank_"
                  href="https://www.akc.org/expert-advice/lifestyle/do-dogs-dream/"
                >
                  all dogs dream
                </a>
                , but puppies and senior dogs dream more frequently than adult
                dogs.
              </h4>
            </div>
            <div>
              <img src={sleep} className="sleepcont" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
