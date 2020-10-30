// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";

import Layout from "../../src/components/Layout";
import SEO from "../../src/components/SEO";

import styles from "../components/Common.module.scss";

const NotFoundPage = () => (
  <Layout isNotFound={true} title="404">
    <SEO title="404" />
    <div className={styles.contentMargin}>
      <h2 className={styles.alignCenter}>
        Pyytämääsi sivua ei valitettavasti ole.
      </h2>
      <p className={styles.alignCenter}>
        URL-osoite saattaa olla väärin kirjoitettu tai etsimäsi sivu ei ole enää
        käytettävissä. Kenties kannattaa koettaa jotakin alla olevista
        linkeistä.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
