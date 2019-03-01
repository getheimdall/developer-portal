export const getFileByResource = async (resource, file) => {
    return await import(/* webpackMode: "eager" */ `../static/content/${resource.toLowerCase()}/${file}`)
}