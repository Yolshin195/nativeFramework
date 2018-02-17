class Http {
    get(url) {
        return sendRequest('GET', url)
    }
}

function sendRequest(method, url) {
    return fetch(url, {method})
        .then(respons => respons.json())
}

export const http = new Http()
