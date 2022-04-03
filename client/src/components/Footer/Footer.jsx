import React from "react";
import FooterCSS from "./Footer.module.css";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";

export const Footer = () => {
  function handleAppStore(value) {
    if (value === "app") {
      window.open(
        "https://apps.apple.com/app/apple-store/id1451094657?pt=118425599&mt=8&ct=footer&utm_source=calendly&utm_medium=marketing_site&utm_campaign=footer&utm_content=ios&utm_term=ios",
        "_blank"
      );
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=com.calendly.app&hl=en_US&gl=US&utm_source=calendly&utm_medium=marketing_site&utm_campaign=footer&utm_content=android&utm_term=android",
        "_blank"
      );
    }
  }
  function handleSocials(value) {
    if (value === "T") {
      window.open("https://twitter.com/calendly", "_blank");
    }
    if (value === "F") {
      window.open("https://www.facebook.com/Calendly", "_blank");
    }
    if (value === "I") {
      window.open("https://www.instagram.com/calendlyhq/", "_blank");
    }
    if (value === "L") {
      window.open(
        "https://www.linkedin.com/company/calendly/life/lifeatcalendly/",
        "_blank"
      );
    }
  }
  return (
    <div className={FooterCSS.footerContainer}>
      <div className={FooterCSS.firstBox}>
        <h2 style={{ width: "30%", fontSize: "35px", fontWeight: "900" }}>
          Easy <span style={{ color: "rgb(0, 107, 255)" }}>ahead</span>{" "}
        </h2>
        <p>
          We take the work out of connecting with others so you can accomplish
          more.
        </p>
        <select name="" className={FooterCSS.firstBoxInput}>
          <option value="">English</option>
          <option value="">Francais</option>
          <option value="">Espanol</option>
          <option value="">Deutsch</option>
          <option value="">Portugues</option>
        </select>
        <div className={FooterCSS.storeIcons}>
          <div onClick={() => handleAppStore("app")}>
            {" "}
            <AiFillApple style={{ fontSize: "35px" }}></AiFillApple>{" "}
            <p
              style={{
                fontSize: "8px",
                lineHeight: "0.6rem",
              }}
            >
              Download on the{" "}
              <span style={{ fontSize: "12px" }}> App Store</span>
            </p>{" "}
          </div>
          <div onClick={() => handleAppStore("play")}>
            <FaGooglePlay
              style={{ fontSize: "24px", padding: "0.2rem" }}
            ></FaGooglePlay>{" "}
            <p
              style={{
                fontSize: "8px",
                lineHeight: "0.6rem",
              }}
            >
              Get it on <span style={{ fontSize: "12px" }}>Google play</span>
            </p>
          </div>
        </div>
        <div className={FooterCSS.socialIcons}>
          <span>
            <GrTwitter onClick={() => handleSocials("T")}></GrTwitter>
          </span>
          <span>
            {" "}
            <GrFacebookOption
              onClick={() => handleSocials("F")}
            ></GrFacebookOption>
          </span>
          <span>
            <BsInstagram onClick={() => handleSocials("I")}></BsInstagram>
          </span>
          <span>
            <ImLinkedin2 onClick={() => handleSocials("L")}></ImLinkedin2>
          </span>
        </div>
      </div>
      <div className={FooterCSS.secondBox}>
        <div>
          <h3>About</h3>
          <p>About Calendly</p>
          <p>Contact Sales</p>
          <p>Newsrooms</p>
          <p>Careers</p>
          <p>Security</p>
        </div>
        <div>
          <h3>Solutions</h3>
          <p>Customer Success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>
        <div>
          <h3>Popular Features</h3>
          <p>Embed Calendly</p>
          <p>Availability</p>
          <p>Sending Notifications</p>
          <p>Using Calendly Mobile</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Vidoe Tutorials</p>
          <p>Cookie Settings</p>
        </div>
        <div>
          <h3>Add-Ons</h3>
          <p>Download for Chrome</p>
          <p>Download for Firefox</p>
        </div>
        <div>
          <h3>Developers</h3>
          <p>Developer Tools</p>
        </div>
      </div>
      <div className={FooterCSS.lastDiv}>
        <p
          style={{
            marginBottom: "2rem",
            fontSize: "10px",
            marginTop: "4rem",
            color: "rgb(78, 71, 71)",
          }}
        >
          Copyright Calendly 2022
        </p>
      </div>
      <div
        className={FooterCSS.finalPprivacy}
      >
        <p className={FooterCSS.finalBoxPtag}>Privacy / Terms and Conditions</p>
      </div>
    </div>
  );
};
