import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({}) {
  return (
    <Layout>
      <p>Demo</p>
    </Layout>
  );
}

// export async function getStaticProps({ params }) {
//     const postData = await getPostData(params.id)
//     return {
//       props: {
//         postData
//       }
//     }
//   }

// export async function getStaticPaths() {
//     const ids = await getAllPostIds()
//     const paths = ids.map(id => { return { params: id } });
//     return {
//       paths,
//       fallback: false
//     }
//   }
