// pages/services/[slug].js
import Template from "../../components/sections/Services/Template";

const DynamicPage = ({ data }) => {
  return <Template data={data} />;
};

export async function getStaticPaths() {
  // Generate dynamic paths based on available data
  const paths = getDynamicPaths(); // Implement this function based on your data
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific page based on the slug
  const data = fetchData(params.slug); // Implement this function based on your data
  return { props: { data } };
}

export default DynamicPage;
