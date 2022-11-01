import Link from 'next/link'
import { getAllContentData } from '../../features/content/helpers'

const Blog = ({ allPostsData }: any) => {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ slug, title }: any, i: number) => (
          <Link href={`blog/${slug}`} key={i}>
            <li>
              {title}
              <br />
              {slug}
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const allPostsData = getAllContentData('articles')
  return {
    props: {
      allPostsData,
    },
  }
}
