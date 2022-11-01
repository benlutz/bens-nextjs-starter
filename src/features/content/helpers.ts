import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'

type ContentType = 'articles' | 'projects'

const computeContentDirectory = (type: ContentType) => {
  return path.join(process.cwd(), 'src', 'content', type)
}

export const getAllContentSlugs = (type: ContentType) => {
  const paths: any = []

  fs.readdirSync(computeContentDirectory(type)).map((fileName: any) => {
    paths.push({
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    })
  })

  return paths
}

export const getAllContentData = (type: ContentType) => {
  const fileNames = fs.readdirSync(computeContentDirectory(type))

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(
      path.join(process.cwd(), 'src', 'content', type),
      fileName
    )
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the slug
    return {
      slug,
      ...matterResult.data,
    }
  })
  return allPostsData
}

export const getContentData = async (
  type: ContentType,
  slug: StringConstructor
) => {
  const dir = computeContentDirectory(type)
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
