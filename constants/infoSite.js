const info = {
    titleSite: 'Heimdall.dev',
    titleDescription: 'Featured as Portal Developer Presentation in NextJs',
    owner: 'Conductor Tecnologia',
    linkOwner: 'http://www.conductor.com.br/'
}

const linksMenu = [
    { name: 'About', subLinks: [
        { name: 'Platform', link: '/platform' },
        { name: 'How do', link: '/how-do'},
        { name: 'Updates history', link: '/updates-api' }
    ], authentication: false },
    { name: 'Documentation', subLinks: [
        { name: 'Get started', link: '/get-started'},
        { name: 'Roles of Authentication', link: '/authentication'},
    ], authentication: false },
    { name: 'Tools', subLinks: [
        { name: 'Api Browser', link: '/api-browser' },
    ], authentication: false },
    { name: 'Contact', link: '/contact', authentication: false }
]

const functionsDev = [
    { name: 'Create app', link: '/newApp'},
    { name: 'My applications', link: '/apps' },
]

export default {
    info,
    linksMenu,
    functionsDev
}