import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'

export const getAllArticleSlugs = () => {
  const paths: any = []

  fs.readdirSync(path.join(process.cwd(), 'src', 'content', 'articles')).map(
    (fileName: any) => {
      paths.push({
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      })
    }
  )

  return paths
}

export const getArticleData = async (slug: StringConstructor) => {
  const dir = path.join(process.cwd(), 'src', 'content', 'articles')
  const fullPath = path.join(dir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}
