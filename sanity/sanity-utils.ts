import { createClient, groq } from 'next-sanity'

import { Page } from '@/types/Page'
import { Project } from '@/types/Project'

import config from './config/client-config'

const getProjects = async (): Promise<Project[]> => {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  )
}

const getProject = async (slug: string): Promise<Project> => {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  )
}

const getPages = async (): Promise<Page[]> => {
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  )
}

const getPage = async (slug: string): Promise<Page> => {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

export { getPage, getPages, getProject, getProjects }
