const axios = require('axios')

module.exports = class RssService {
    retrieve(rssUrl) {
        return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
            .then(response => {
                console.log("rss2json service was called")
                return response.data})
            .catch(err => {
                const error = new Error(err.message)
                error.statusCode = 500

                throw error
            })
    }
}