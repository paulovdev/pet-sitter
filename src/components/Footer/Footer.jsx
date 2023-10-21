import React from "react";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <h1>Informações de Contato</h1>
        <section className="field">
          <div className="contact" id="contact">
            <p>
              Telefone: <a href="tel:98845-2064">(15) 98845-2064</a>
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:elianepiresdecamargo@gmail.com">
                elianepiresdecamargo@gmail.com
              </a>
            </p>
            <div className="socials">
              <FaFacebookSquare size={40} />
              <AiFillInstagram size={50} />
              <AiFillTwitterSquare size={50} />
            </div>
          </div>

          <address>
            <div className="map">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  height="289"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=358&amp;height=289&amp;hl=en&amp;q=nezel+terezinha+fernandes,42&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://connectionsgame.org/">Connections NYT</a>
              </div>
              <style>
                {`
          .mapouter{position:relative;text-align:right;width:100%;height:289px;}
          .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:289px;}
          .gmap_iframe {height:289px!important;}
        `}
              </style>
            </div>
          </address>
        </section>

        <div className="copy">
          <p>Copyright © Hotel creche Tia Ly.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
