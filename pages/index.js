import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getAssetData, getAssetsWithUrls } from "../lib/assets";
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";

export default function Home({ allAssetData }) {
  const handleSaveImage = (imageData, imageName) => {
    saveAs(imageData, imageName);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is a sample site built using Next.js that displays content from
          an instance of University of Idaho's{" "}
          <a href="https://uoi-q-001.sitecorecontenthub.cloud/">
            Content Hub
          </a>{" "}
          via Experience Edge and deployed via Vercel
        </p>
        {/* <p>
          The source can be found on{" "}
          <a href="https://github.com/nvadera-sc/content-hub-blog-site-sample">
            GitHub
          </a>
          .
        </p> */}
      </section>
      {/* Section to display assets as cards */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Assets</h2>
        <div className={utilStyles.cardContainer}>
          {allAssetData && allAssetData.length > 0 ? (
            allAssetData.map(({ id, title, fileName, urls }) => {
              const previewUrl = Object.values(urls).find(
                (url) => url.resource === "preview",
              )?.url; // Get the image URL
              const downloadUrl = Object.values(urls).find(
                (url) => url.resource === "preview",
              )?.url;

              return (
                <div className={utilStyles.card} key={id}>
                  {/* Link to the detail page when image is clicked */}
                  {/* <Link href={`/posts/${id}`}> */}
                  {/* No need for <a> tag */}
                  <Image
                    src={previewUrl !== null ? previewUrl : downloadUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className={utilStyles.card.Img}
                  />
                  {/* </Link> */}
                  <div>
                    <h3 className={utilStyles.card.h3}>{title}</h3>
                    {/* Download icon */}
                    <div
                      href={downloadUrl ? downloadUrl : previewUrl}
                      download
                      onClick={() => handleSaveImage(downloadUrl, title)}
                      className={utilStyles.downloadIcon}
                    >
                      <FaDownload />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No assets available</p>
          )}
        </div>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          
          {allAssetData.map(({ id, fileName }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{fileName}</Link>
              <br />
              <small className={utilStyles.lightText}></small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  //const allPostsData = await getSortedPostsData();
  const allAssetData = await getAssetsWithUrls();

  // console.log("inside index.js", allAssetData);
  return {
    props: {
      allAssetData,
    },
  };
}
