import { reloadRoutes } from 'react-static/node'
import chokidar from 'chokidar'

import renderToHtml from './src/modules/render-styles'
import Document from './src/components/document'
import jdown from './src/modules/get-content'

chokidar.watch('content').on('all', () => reloadRoutes())

const getRoutes = async () => {
  const { posts, home, about } = await jdown('../../content')
  const { PUBLIC_URL } = process.env

  return [
    {
      path: `${PUBLIC_URL}/`,
      component: 'src/pages/Home',
      getData: () => ({
        ...home,
      }),
    },
    // {
    //   path: '/about',
    //   component: 'src/pages/About',
    //   getData: () => ({
    //     about,
    //   }),
    // },
    // {
    //   path: '/blog',
    //   component: 'src/pages/Blog',
    //   getData: () => ({
    //     posts,
    //   }),
    //   children: posts.map(post => ({
    //     path: `/pages/${post.slug}`,
    //     component: 'src/pages/Post',
    //     getData: () => ({
    //       post,
    //     }),
    //   })),
    // },
    {
      is404: true,
      component: 'src/pages/404',
    },
  ]
}


export default {
  getSiteData: () => ({
    title: 'Malcolm Blog',
  }),
  getRoutes,
  renderToHtml,
  Document,
}
