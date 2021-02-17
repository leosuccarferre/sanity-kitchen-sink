export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '602d4e24854b330998233803',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5tmr1kqm',
                  apiId: '6ccae2f6-2adf-459f-be0f-033e68f53066'
                },
                {
                  buildHookId: '602d4e24854b330998233804',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kuyesmoi',
                  apiId: '57255d04-bb49-4053-9c74-7da593a9f590'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leosuccarferre/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kuyesmoi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
