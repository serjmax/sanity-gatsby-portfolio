export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e528add985d27d90f71b2db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u6ej3rr3',
                  apiId: '95371957-6da8-4dc0-91dc-0acacc86e22e'
                },
                {
                  buildHookId: '5e528addee454f4cadf92e81',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fjdc58fs',
                  apiId: '6ad780e3-652a-48fd-9fb8-581a7abcae76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/serjmax/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fjdc58fs.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
