// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import {Link} from "gatsby";

import Layout from "../components/Layout";
import MediaText from "../components/MediaText";
import SEO from "../components/SEO";

import indexStyles from "./index.module.scss";

import styles from "../components/Common.module.scss";
import imageStyles from "../components/Image.module.scss";

/* eslint-disable max-len */
import frontPageProfile from "../images/front-page-profile-2.jpg";
import referenceAatuItkonen from "../images/home/reference_aatuitkonen-1536x864.png";
import referenceLukio from "../images/home/reference_lukio-1536x864.png";
import referenceSofiaJulin from "../images/home/reference_sofiajulin-1536x864.png";
import referenceOppilaskunta from "../images/home/reference_reserve_officer_school_student_body.png";
/* eslint-enable max-len */

const Index = () => (
  <Layout isHome={true} title="Etusivu">
    <SEO title="Etusivu" />
    <div className={styles.contentMargin}>
      <figure className={`${styles.alignCenter} ${imageStyles.circleMask}`}>
        <img
          src={frontPageProfile}
          className={`${indexStyles.frontPageImage} ${styles.alignCenter}`}
        />
      </figure>
      <p className={`${styles.alignCenter} ${indexStyles.ledeParagraph}`}>
        Helsinkiläinen viestintäalan yrittäjä
      </p>
      <p className={styles.alignCenter}>
        Verkkosivustoni on vielä hieman keskentekoinen
      </p>
      <p className={styles.alignCenter}>
        Löydät täältä kuitenkin jo esimerkiksi{" "}
        <Link to="/ansioluettelo">ansioluetteloni</Link>
      </p>
      <p className={styles.alignCenter}>
        Valmistumista odottaessa voi esimerkiksi tutustua{" "}
        <a rel="noreferrer noopener" href="https://visiosto.fi" target="_blank">
          yritykseni verkkosivustoon
        </a>
      </p>
      <h2 className={`${indexStyles.homeTitle} ${styles.alignCenter}`}>
        Muutama projekti, jossa näkyy kädenjälkeni
      </h2>
      <MediaText image={referenceAatuItkonen}>
        <h3>Aatu Itkonen &ndash; Taikuri, juontaja &amp; esiintyjä</h3>
        <p>
          Teimme yritykseni kanssa nuorelle kouvolalaislähtöiselle esiintyjälle
          Aatu Itkoselle uudet kotisivut. Sivustoon voit tutustua osoitteessa{" "}
          <a
            rel="noreferrer noopener"
            href="https://aatuitkonen.fi"
            target="_blank"
          >
            aatuitkonen.fi
          </a>
          .
        </p>
      </MediaText>
      <MediaText image={referenceLukio}>
        <h3>Suomen Lukiolaisten Liitto</h3>
        <p>
          Olin mukana liiton varapuheenjohtajana tiimissä, joka osallistui
          liiton verkkosivuston suunnitteluun ja ostoon. Sivuston löydät
          osoitteesta{" "}
          <a rel="noreferrer noopener" href="https://lukio.fi" target="_blank">
            lukio.fi
          </a>
          .
        </p>
      </MediaText>
      <MediaText image={referenceSofiaJulin}>
        <h3>Sofia Julin</h3>
        <p>
          Tein nuorelle poliitikolle ja kansanedustajan eduskunta-avustajalle
          Sofia Julinille verkkosivuston. Voit käydä katsomassa sivustoa
          osoitteessa{" "}
          <a
            rel="noreferrer noopener"
            href="https://sofiajulin.fi"
            target="_blank"
          >
            sofiajulin.fi
          </a>
          .
        </p>
      </MediaText>
      <MediaText image={referenceOppilaskunta}>
        <h3>Reserviupseerikoulun oppilaskunta</h3>
        <p>
          Uudistin pro bono&nbsp;-työnä Reserviupseerikoulun oppilaskunnan
          verkkosivuston ilmeen. Reserviupseerikoulu on Suomen suurin
          johtajakoulu, joka kouluttaa vuodessa yli tuhat varusmiesjohtajaa.
          Reserviupseerikoulun oppilaskunnan sivuston näet osoitteessa{" "}
          <a
            rel="noreferrer noopener"
            href="https://oppilaskunta.net"
            target="_blank"
          >
            oppilaskunta.net
          </a>
          .
        </p>
      </MediaText>
    </div>
  </Layout>
);

export default Index;
