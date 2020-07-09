import React from "react";
import { graphql } from "gatsby";
import styles from "./project.module.css";
import createDOMPurify from "dompurify";
import Header from "../components/Header";
let DOMPurify;
if (typeof window !== "undefined") {
  // it's safe to use window now
  DOMPurify = createDOMPurify(window);
}

export const querry = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        ld
        link
        bd
        pictures
        available
      }
    }
  }
`;

export default function Project(props) {
  console.log(props);
  let frontmatter = props.data.markdownRemark.frontmatter;
  let images = frontmatter.pictures.map((picture, idx) => (
    <img
      key={idx}
      src={picture}
      className={styles.sideGalleryImage}
      alt="product-image"
    />
  ));
  return (
    <div className={styles.Project}>
      <Header />
      <div className={styles.container}>
        <div className={styles.rowOne}>
          <div className={styles.sideGallery}>{images}</div>
          <div className={styles.projectInfo}>
            <img
              src={frontmatter.pictures[0]}
              className={styles.projectImage}
              alt="product-image"
            />
            <div className={styles.projectTextInfo}>
              <h2 className={styles.projectTitle}>{frontmatter.title}</h2>
              <p className={styles.projectDescription}>
                {frontmatter.description}
              </p>
              <div className={styles.status}>
                Status :{" "}
                <span
                  className={frontmatter.available ? styles.green : styles.red}
                >
                  {frontmatter.available ? "Available" : "Unavailable"}
                </span>
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>Toolkit</span>
                <span className={`${styles.tag} ${styles.marBot}`}>
                  Completed Project
                </span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.showDetails}>Show Details</button>
                <button className={styles.getProject}>Get Project</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rowTwo}>
          <h2 className={styles.ldTitle}>{frontmatter.title}</h2>
          {typeof DOMPurify !== "undefined" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(frontmatter.ld),
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.rowThree}>
          <div className={styles.blockD}>
            <img className={styles.bd} src={frontmatter.bd} alt="bd" />
          </div>
          <div className={styles.yt}>
            <iframe
              className={styles.iframe}
              width="100%"
              height="100%"
              src={frontmatter.link.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
