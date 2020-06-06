export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edb6a474265ff371c4f10c5',
                  title: 'Sanity Studio',
                  name: 'Sanity-Gatsby-Blog-studio-n5p9xdyn',
                  apiId: 'ff8aa4b0-cffe-442e-9637-0cd17bbdc8f4'
                },
                {
                  buildHookId: '5edb6a47f7ef3ae5bda7dfc5',
                  title: 'Blog Website',
                  name: 'Sanity-Gatsby-Blog-web-zseqtj6f',
                  apiId: '238a5509-fc72-4475-a765-4818450bf042'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ekaone/Sanity-Gatsby-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://Sanity-Gatsby-Blog-web-zseqtj6f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
