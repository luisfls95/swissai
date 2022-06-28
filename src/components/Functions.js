let proxy_url = 'https://swissai-proxy.herokuapp.com'

const getToken = (username, password) => {
    
    return fetch(proxy_url +  '/gettoken/',{	
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            url: 'https://apidemo.swissai.com/api/v1/login',
            username: username,
            password: password
          }),
    })
    .then(r=>r.json())
}


const proxyRequest = (url) => {
    
    return fetch(proxy_url + '/proxygets/',{	
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            url: url,
          }),
    })
    .then(r=>r.json())
}

const getImage = (params) => {

    let {center, zoom} = params
    //31.823603597204716,130.25867126487287

    let url =  `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=700x350&key=`
    
    return fetch(proxy_url + '/getimage/',{	
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            url: url,
          }),
    })
    .then(r=>r.json())
}

export {getToken, proxyRequest, getImage}