import { HTTPv1 } from "../utils/http"

const getApiSwagger = (id) => {
    return HTTPv1.get(`/apis/${id}/swagger`)
        .then(res => {
            return Promise.resolve(res.data)
        })
        .catch(error => {
            console.log('Error: ', error)
            if (error.response && error.response.status === 404) {
                return null;
            }
            throw error;
        })
}

const getApiById = (id) => {

    if (isNaN(id)) {
        return Promise.reject(new Error(i18n.t('invalid_parameter')))
    }

    return HTTPv1.get('/apis/' + id)
    .then(res => {

        return Promise.resolve(res.data)
    })
    .catch(error => {
        console.log('Error: ', error)
        if (error.response && error.response.status === 404) {
            return Promise.reject(new Error(i18n.t('resource_not_found')));
        }
        throw error;
    })
}

const getDescriptionResources = async () => {
    const result = await import ('../static/content/summary.json')
    const descriptions = result.default

    return descriptions
}

export const apiService = {
    getApiSwagger,
    getApiById,
    getDescriptionResources
}