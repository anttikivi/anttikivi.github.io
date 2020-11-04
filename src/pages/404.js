// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";

import Intl from "../components/Intl";
import Layout from "../components/Layout";

import styles from "../components/Common.module.scss";

const NotFoundPage = () => (
  <Intl locale="fi">
    <Layout title="404" notFound lang="fi" pageKey="404">
      <div className={styles.contentMargin}>
        <h2 className={styles.alignCenter}>
          Pyytämääsi sivua ei valitettavasti ole.
        </h2>
        <p className={styles.alignCenter}>
          URL-osoite saattaa olla väärin kirjoitettu tai etsimäsi sivu ei ole
          enää käytettävissä.
        </p>
        <h2 className={styles.alignCenter}>
          The page you requested doesn&rsquo;t exist
        </h2>
        <p className={styles.alignCenter}>
          The URL might be misspelt or the page might not exist anymore.
        </p>
      </div>
    </Layout>
  </Intl>
);

export default NotFoundPage;
