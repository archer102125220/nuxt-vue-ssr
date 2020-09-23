const clientConfig = {
    APP_PROTOCOL:process.env.APP_PROTOCOL || 'http',
    APP_HOST: process.env.APP_HOST || 'localhost',
    APP_PORT: process.env.APP_PORT || 3000,
};
const apiConfig = {
    SERVER_PREFIX: process.env.SERVER_PREFIX,
    SERVER_PORT: process.env.SERVER_PORT || 8000,
    SERVER_HOST: process.env.SERVER_HOST || 'localhost',
    SERVER_PROTOCOL: process.env.SERVER_PROTOCOL || 'http'
};


export default {
    client: clientConfig.APP_PROTOCOL + '://' + clientConfig.APP_HOST + ':' + clientConfig.APP_PORT ,
    api: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT + '/' + apiConfig.SERVER_PREFIX,
    socket: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT
};
