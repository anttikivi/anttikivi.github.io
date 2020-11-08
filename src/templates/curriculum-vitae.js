// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {useIntl} from "react-intl";

import CurriculumVitaeSection from "../components/CurriculumVitaeSection";
import Intl from "../components/Intl";
import Layout from "../components/Layout";

import {createIntl} from "../utils/createIntl";

import cvStyles from "./curriculum-vitae.module.scss";

import styles from "../components/Common.module.scss";
import imageStyles from "../components/Image.module.scss";

import frontPageProfile from "../images/front-page-profile-2.jpg";

const CurriculumVitaePage = props => {
  const i = createIntl(useIntl());

  return (
    <Layout
      title={i("cv_title")}
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <div className={`${styles.contentMargin} ${cvStyles.content}`}>
        <p className={`${styles.alignCenter} ${cvStyles.nameLine}`}>
          Antti Kivi
        </p>

        <h2 className={styles.alignCenter}>{i("cv_summary_title")}</h2>

        <figure className={`${styles.alignCenter} ${imageStyles.circleMask}`}>
          <img
            src={frontPageProfile}
            className={`${cvStyles.cvImage} ${styles.alignCenter}`}
          />
        </figure>

        <div>
          <ul>
            {i("cv_summary", {
              li: (...chunk) => <li>{chunk}</li>
            })}
          </ul>
        </div>

        <div className={cvStyles.columns}>
          <div className={cvStyles.mainColumn}>
            <h2>{i("cv_work_experience_title")}</h2>

            <h3 className={cvStyles.subHeading}>
              {i("cv_work_experience_defence_force_title")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_work_experience_defence_force_job")}
            </h4>
            <p>
              <em>{i("cv_work_experience_defence_force_time")}</em>
            </p>

            <h3 className={cvStyles.subHeading}>
              {i("cv_work_experience_visiosto_title")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_work_experience_visiosto_job")}
            </h4>
            <p>
              <em>{i("cv_work_experience_visiosto_time")}</em>
            </p>
            {i("cv_work_experience_visiosto", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <h3 className={cvStyles.subHeading}>
              {i("cv_work_experience_lukiolaiset_title")}
            </h3>

            <h4 className={cvStyles.subHeading}>
              {i("cv_work_experience_lukiolaiset_job")}
            </h4>
            <p>
              <em>{i("cv_work_experience_lukiolaiset_time")}</em>
            </p>
            {i("cv_work_experience_lukiolaiset", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <CurriculumVitaeSection title={i("cv_work_experience_other_title")}>
              <h3 className={cvStyles.subHeading}>
                {i("cv_work_experience_frank_title")}
              </h3>

              <h4 className={cvStyles.subHeading}>
                {i("cv_work_experience_frank_job")}
              </h4>
              <p>
                <em>{i("cv_work_experience_frank_time")}</em>
              </p>
              {i("cv_work_experience_frank", {p: (...chunk) => <p>{chunk}</p>})}

              <h3 className={cvStyles.subHeading}>
                {i("cv_work_experience_lidl_title")}
              </h3>
              <h4 className={cvStyles.subHeading}>
                {i("cv_work_experience_lidl_job")}
              </h4>
              <p>
                <em>{i("cv_work_experience_lidl_time")}</em>
              </p>
              {i("cv_work_experience_lidl", {
                p: (...chunk) => {
                  <p>{chunk}</p>;
                }
              })}

              <h3 className={cvStyles.subHeading}>
                {i("cv_work_experience_palloliitto_title")}
              </h3>

              <h4 className={cvStyles.subHeading}>
                {i("cv_work_experience_palloliitto_job")}
              </h4>
              <p>
                <em>{i("cv_work_experience_palloliitto_time")}</em>
              </p>
            </CurriculumVitaeSection>

            <h2>{i("cv_positions_of_trust_title")}</h2>

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_reserve_officer_school_title")}
            </h3>

            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_reserve_officer_school_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_reserve_officer_school_time")}</em>
            </p>

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_kokoomusnuoret_helsinki_title")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_kokoomusnuoret_helsinki_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_kokoomusnuoret_helsinki_time")}</em>
            </p>

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_lukiolaiset_title")}
            </h3>

            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_lukiolaiset_board_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_lukiolaiset_board_time")}</em>
            </p>
            {i("cv_positions_of_trust_lukiolaiset_board", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_lukiolaiset_districts_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_lukiolaiset_districts_time")}</em>
            </p>
            {i("cv_positions_of_trust_lukiolaiset_districts", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_uudenmaan_lukiolaiset_title")}
            </h3>

            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_uudenmaan_lukiolaiset_vp_job")}
            </h4>
            <p>
              <em>
                {i("cv_positions_of_trust_uudenmaan_lukiolaiset_vp_time")}
              </em>
            </p>
            {i("cv_positions_of_trust_uudenmaan_lukiolaiset_vp", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_uudenmaan_lukiolaiset_board_job")}
            </h4>
            <p>
              <em>
                {i("cv_positions_of_trust_uudenmaan_lukiolaiset_board_time")}
              </em>
            </p>
            {i("cv_positions_of_trust_uudenmaan_lukiolaiset_board", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_jef_helsinki_title")}
            </h3>

            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_jef_helsinki_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_jef_helsinki_time")}</em>
            </p>

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_vantaa_title")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_vantaa_youth_council_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_vantaa_youth_council_time")}</em>
            </p>
            {i("cv_positions_of_trust_vantaa_youth_council", {
              p: (...chunk) => <p>{chunk}</p>
            })}

            <h3 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_lukio_title")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_positions_of_trust_lukio_job")}
            </h4>
            <p>
              <em>{i("cv_positions_of_trust_lukio_time")}</em>
            </p>
            {i("cv_positions_of_trust_lukio", {
              p: (...chunk) => <p>{chunk}</p>
            })}
          </div>

          <div className={cvStyles.sideColumn}>
            <h2>{i("cv_education_title")}</h2>

            <h3 className={cvStyles.subHeading}>
              {i("cv_education_university_of_helsinki_social_sciences_degree")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_education_university_of_helsinki_title")}
            </h4>
            <p>
              <em>
                {i("cv_education_university_of_helsinki_social_sciences_time")}
              </em>
            </p>
            <h4 className={cvStyles.subHeading}>
              {i("cv_education_university_of_helsinki_open_ayoik_101_name")}
            </h4>
            <p>
              <em>
                {i("cv_education_university_of_helsinki_open_ayoik_101_time")}
              </em>
            </p>
            <p>
              {i("cv_education_university_of_helsinki_open_ayoik_101_mark")}
            </p>
            <h4 className={cvStyles.subHeading}>
              {i("cv_education_university_of_helsinki_open_aytkt10002_name")}
            </h4>
            <p>
              <em>
                {i("cv_education_university_of_helsinki_open_aytkt10002_time")}
              </em>
            </p>
            <p>
              {i("cv_education_university_of_helsinki_open_aytkt10002_mark")}
            </p>

            <h3 className={cvStyles.subHeading}>
              {i("cv_education_reserve_officer_degree")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_education_reserve_officer_course_title")}
            </h4>

            <h3 className={cvStyles.subHeading}>
              {i("cv_education_tikkurilan_lukio_degree")}
            </h3>
            <h4 className={cvStyles.subHeading}>
              {i("cv_education_tikkurilan_lukio_title")}
            </h4>
            <p>
              <em>{i("cv_education_tikkurilan_lukio_time")}</em>
            </p>
            <p>{i("cv_education_tikkurilan_lukio_mark")}</p>
            {i("cv_education_tikkurilan_lukio", {
              p: (...chunk) => <p>{chunk}</p>,
              vs: (...chunk) => (
                <a
                  key={1}
                  rel="noreferrer noopener"
                  href="https://vantaansanomat.fi/paikalliset/1501296"
                  target="_blank"
                >
                  {chunk}
                </a>
              )
            })}

            <h2>{i("cv_languages_title")}</h2>
            <ul>
              {i("cv_languages_list", {li: (...chunk) => <li>{chunk}</li>})}
            </ul>

            <h2>{i("cv_ict_title")}</h2>
            <h3 className={cvStyles.subHeading}>
              {i("cv_ict_computer_sciences_title")}
            </h3>
            {i("cv_ict_computer_sciences", {p: (...chunk) => <p>{chunk}</p>})}
            <h3 className={cvStyles.subHeading}>
              {i("cv_ict_software_title")}
            </h3>
            {i("cv_ict_software", {p: (...chunk) => <p>{chunk}</p>})}
            <h3 className={cvStyles.subHeading}>
              {i("cv_ict_social_media_title")} media
            </h3>
            {i("cv_ict_social_media", {p: (...chunk) => <p>{chunk}</p>})}

            <h2>{i("cv_other_title")}</h2>
            {i("cv_other", {
              p: (...chunk) => <p>{chunk}</p>,
              ul: (...chunk) => <ul>{chunk}</ul>,
              li: (...chunk) => <li>{chunk}</li>
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

CurriculumVitaePage.propTypes = {pageContext: PropTypes.object};

const CurriculumVitae = props => (
  <Intl locale={props.pageContext.lang}>
    <CurriculumVitaePage {...props} />
  </Intl>
);

CurriculumVitae.propTypes = {pageContext: PropTypes.object};

export default CurriculumVitae;
