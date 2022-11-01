import {
  getAllArticleSlugs,
  getArticleData,
} from '../../features/blog/articles'

const Article = ({ page }: any) => {
  return (
    <>
      <div style={styles.headerContainer}>
        <h1 style={styles.title}>{page.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
    </>
  )
}

export default Article

export async function getStaticPaths() {
  const paths = getAllArticleSlugs()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(props: any) {
  // Fetch necessary data for the blog post using params.slug
  const {
    params: { slug },
  } = props
  const page = await getArticleData(slug)
  return {
    props: {
      page,
    },
  }
}

const styles = {
  headerContainer: {
    backgroundImage: 'linear-gradient(145deg,#ff6600 0%,#ff9651 100%)',
    color: 'white',
    padding: '25px',
    marginBottom: '50px',
  },
  title: {
    fontSize: '30px',
    fontWeight: '200',
    paddingBottom: '0px',
    marginBottom: '0px',
  },
  subtitle: {},
  backgroundBlendMode: 'color-burn',
}
