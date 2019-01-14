const info = {
    titleSite: 'Developer Portal',
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
        { name: 'Sandbox and Production', link: '/sandbox-production' },
        { name: 'Modeling Patterns', link: '/modeling'},
        { name: 'Roles of Authentication', link: '/authentication'},
        { name: 'Get started', link: '/get-started'}
    ], authentication: false },
    { name: 'Tools', subLinks: [
        { name: 'Api Browser', link: '/api-browser' },
        { name: 'Libraries SDKs', link: '/libs-sdk' }
    ], authentication: false },
    { name: 'Developer', subLinks: [
        { name: 'Create app', link: '/newApp'},
        { name: 'My applications', link: '/apps' },
        { name: 'Dashboard Dev', link: '/dashboard' }
    ], authentication: true },
    { name: 'Contact', link: '/contact', authentication: false }
]


export default {
    info,
    linksMenu
}