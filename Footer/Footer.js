import React from 'react';
import '../../SCSS/Footer.scss';
import { Link } from 'react-router-dom';
import ReactFBLike from 'react-fb-like';
export const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-container">
        <div id="kontakt-info" className="footer-text-containers">
          <h3 className="footer-title">Kontakt Info</h3>
          <a href="tel:+4561721901" className="footer-text">
            Telefon: 61 72 19 01
          </a>
          <a
            href="mailto:christianlykke@oddermassage.dk"
            className="footer-text"
          >
            <br />
            E-mail: christianlykke@oddermassage.dk
          </a>
          <p className="footer-text">
            Har du nogen spørgsmål, er du velkommen til at kontakte mig
          </p>
          <h4 id="footer-address-title">Addresse</h4>
          <p className="footer-text">8300, Odder</p>
          <p className="footer-text">Rosensgade 41, 1 tv</p>
        </div>
        <div id="open-hours" className="footer-text-containers">
          <h3 className="footer-title">Åbnings Tider</h3>
          <p className="footer-text">Mandag - Fredag</p>
          <p className="footer-text">Jeg dækker Odder omegen (15km radius)</p>
        </div>
        <div id="free-treatmment" className="footer-text-containers">
          <h3 className="footer-title">Gratis Behandling</h3>
          <p className="footer-text">
            Henvis 3 og du vil få en gratis behandling
          </p>
          <Link to="/free-treatment" exact className="footer-text footer-link">
            Læs Mere...
          </Link>
        </div>
        <div id="satisfaction" className="footer-text-containers">
          <h3 className="footer-title">Jeg ønsker tilfredse kunder</h3>
          <p className="footer-text">Har du haaft en god oplevelse?</p>
          <a
            href="https://www.facebook.com/pg/Oddermassagevedchristianlykke/reviews/"
            target="_blank"
            className="footer-text footer-link"
          >
            Skriv en anmeldelse her
          </a>
          <div id="like-btn">
            <ReactFBLike
              language="da_DK"
              appId="717589285046812"
              share="true"
              href="https://www.facebook.com/Oddermassagevedchristianlykke/?eid=ARA-mwGf4v2Puj6zO9V6HsPeUoPDeSCM39SWcgeYDsgnWwqIa6peUyot2YelhGKRPBhXvFz3oiI8elyN&timeline_context_item_type=intro_card_work&timeline_context_item_source=100001629242269&fref=tag"
              version="v2.12"
            />
          </div>
        </div>
      </div>
      <div id="img-cookie-container">
        <figure id="mobilepay-container">
          <img
            src="Mobilepay-logo-hvid.png"
            alt="Mobile pay logo i hvid"
            id="mobilepay"
          />
        </figure>
        <Link id="cookie-link" to="/cookie-privatliv" exact>
          Cookie- & privatlivspolitik Handelsbetingelser
        </Link>
      </div>
    </div>
  );
};
