import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'Malcolm Blog',
  }),
  getRoutes: async () => {
    const { posts, home, about } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          ...home,
        }),
      },
      {
        path: '/about',
        component: 'src/pages/About',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/blog',
        component: 'src/pages/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/pages/${post.slug}`,
          component: 'src/pages/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
}
