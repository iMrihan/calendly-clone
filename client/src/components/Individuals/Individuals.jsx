import { useEffect } from "react";
import "./Individuals.module.css";

export const Individuals = () => {

  const arrw = ">";
  return (
    <div className="individuals-container">
      <div className="first-div">
        <div className="one-content">
          <h1>
            The genius way to work <span className="blue-color"> better</span>
          </h1>
          <p>
            Calendly makes it easy to work smarter when you’re working solo.
            Meetings, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <span className="button-shape">
            <button className="first-div-button">Sign up for free</button>{" "}
          </span>
        </div>

        <div className="second-img-div">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/e9808f922920947d64e0ffe4fbf18a45/Calendly-Individuals-Hero.png?w=1472&h=1232&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>
      <div className="second-div">
        <div className="second-img-div2">
          <img
            src="https://images.ctfassets.net/eh05n0xjhplz/4IHqvPCGa5HLOI1VvRC2rT/d3d04b6116ad46166ec8440c14179dbf/021021_Calendly_Lifestyle_Coffee_Shop_Setting-4775.jpg"
            alt=""
          />
        </div>
        <div className="second-content">
          <p className="blue-color2">A CURATED CALENDAR</p>
          <h2 className="second-div-content-h3">Book up efficiently</h2>
          <p>
            When invitees select a meeting slot from your schedule, they only
            see the times you’re available, and only the length and type of
            meeting you want to have. Your schedule fills up efficiently, and
            everyone avoids excess email exchanges.
          </p>
          <p className="blue-color2">Learn more {arrw} </p>
        </div>
      </div>
      <div className="first-div">
        <div className="one-content">
          <p className="blue-color2">AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
          <h2 className="second-div-content-h3">
            Work like you have a personal assistant
          </h2>
          <p>
            Because Calendly automates administrative tasks like sending
            reminder emails and follow-ups, you can focus on the work that
            builds your business and brings customers back for more.
          </p>
          <p className="blue-color2">Learn more {arrw} </p>
        </div>

        <div className="second-img-div3">
          <img
            src="https://cdn2.momjunction.com/wp-content/uploads/2021/01/How-To-Start-A-Conversation-With-A-Girl-21-Simple-Ways-To-Do-Banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="second-div">
        <div className="second-img-div2">
          <img
            src="https://i.pinimg.com/originals/f8/c4/22/f8c422a0a0e6793b3f9113d419c5143a.gif"
            alt=""
          />
        </div>
        <div className="second-content">
          <p className="blue-color2">COLLECT PAYMENTS</p>
          <h2 className="second-div-content-h3">Erase billing hassles</h2>
          <p>
            Stripe and PayPal integrations enable your clients to submit payment
            as soon as they schedule a meeting. You get paid on time, every
            time, without dealing with bills or invoices.
          </p>
          <p className="blue-color2">Learn more {arrw} </p>
        </div>
      </div>
      <div className="first-div">
        <div className="one-content">
          <p className="blue-color2">SCHEDULING AT SCALE</p>
          <h2 className="second-div-content-h3">Retain more clients</h2>
          <p>
            Happy clients are long-term clients. With Calendly, prospects can
            schedule with you instantly so no one slips through the cracks, and
            everything about your interaction is personal, professional, and
            respectful of their time.
          </p>
        </div>

        <div className="second-img-div3">
          <img
            src="https://static.wixstatic.com/media/fe4848_5c60b06af5bc45c99a4e7a71a6d92e7e~mv2.gif"
            alt=""
          />
        </div>
      </div>

      <div className="black-background-div">
        <h1>Do more with our integrations</h1>
        <p>Smart scheduling will change the way you – and your tools – work</p>
        <div className="view-all-button">
          <button className="first-div-button">View All</button>
        </div>
      </div>
      <div className="empty-div"></div>
      <div className="black-background-div">
        <h1 style={{ width: "60%", margin: "auto", paddingTop: "1rem" }}>
          Find just-right plans for individuals and small teams
        </h1>
        <div className="view-all-button">
          <button className="first-div-button">See our plans</button>
        </div>
      </div>

      <div className="solutions-div">
        <div className="solutions-title">
          <p className="blue-color2">SOLUTIONS</p>
          <h2 className="second-div-content-h3">
            The right Calendly for the work you do
          </h2>
        </div>
        <div className="solutions-category-div">
          <div>
            <div className="solutions-sub-div-images">
              <img
                style={{ width: "100%" }}
                src="https://images.ctfassets.net/k0lk9kiuza3o/5ledlZLIfg5Ufl5aV7mP43/f4e9ff1c8e56ac1c9ce6416114c4b522/Calendly-Reps.png?w=1480&h=832&q=50&fm=webp"
                alt=""
              />
            </div>
            <div className="solutions-sub-div-details">
              <h3>Sales</h3>
              <p>Get to your best leads faster.</p>
              <br />
              <p className="blue-color2">Learn more {arrw} </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="solutions-sub-div-images">
              <img
                style={{ width: "100%" }}
                src="https://images.ctfassets.net/k0lk9kiuza3o/2CHdvyXqFe8FfVLRvlEtwP/431464dd95b0b51a773a3082b5a3b432/Recruiting.jpg?w=1920&h=1081&q=50&fm=webp"
                alt=""
              />
            </div>
            <div className="solutions-sub-div-details">
              <h3>Recruting</h3>
              <p>Less emailing, more interviewing.</p>
              <br />
              <p className="blue-color2">Learn more {arrw} </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="solutions-sub-div-images">
              <img
                style={{ width: "100%" }}
                src="https://images.ctfassets.net/k0lk9kiuza3o/4L2IHsOUMgTUjPxcUbzoyz/2111a84d62f23ade75054f48bdeda0b2/Customer_Success.jpg?w=1920&h=1081&q=50&fm=webp"
                alt=""
              />
            </div>
            <div className="solutions-sub-div-details">
              <h3>Customer Success</h3>
              <p>Connect with customers when it matters.</p>
              <p className="blue-color2">Learn more {arrw} </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="solutions-sub-div-images">
              <img
                style={{ width: "100%" }}
                src="https://images.ctfassets.net/k0lk9kiuza3o/Zrdp4mX39AA8cXWx4J41s/1fba6102b32f86275c89e15c84ceab55/Education.jpg?w=1920&h=1081&q=50&fm=webp"
                alt=""
              />
            </div>
            <div className="solutions-sub-div-details">
              <h3>Education</h3>
              <p>Boost student success.</p>
              <br />
              <p className="blue-color2">Learn more {arrw} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="try-Calendly-div">
        <h1>Try Calendly free</h1>
        <p>
          After your 14-day trial of our Teams plan, enjoy the Free version of
          Calendly – forever.
        </p>
        <button className="first-div-button">Sign up</button>
        <p>
          To inquire about our Enterprise plans, click{" "}
          <span style={{ color: "rgb(0, 107, 255)" }}>here</span>{" "}
        </p>
      </div>
    </div>
  );
};
