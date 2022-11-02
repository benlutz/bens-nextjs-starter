import Link from "next/link";
import { getAllContentData } from "../../features/content/helpers";

const Projects = ({ allProjectsData }: any) => {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {allProjectsData.map(({ slug, title }: any, i: number) => (
          <Link href={`projects/${slug}`} key={i}>
            <li>
              {title}
              <br />
              {slug}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const allProjectsData = getAllContentData("projects");
  return {
    props: {
      allProjectsData,
    },
  };
}
