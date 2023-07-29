import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'si0srb3o',
  dataset: 'production',
  title: 'Portfolio website',
  apiVersion: '2023-07-27',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config
