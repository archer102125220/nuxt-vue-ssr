const clientConfig = {
    protocol:process.env.APP_PROTOCOL || 'http',
    host: process.env.APP_HOST || 'localhost',
    port: process.env.APP_PORT || 3000,
};
const apiConfig = {
    SERVER_PREFIX: process.env.SERVER_PREFIX,
    SERVER_PORT: process.env.SERVER_PORT ,
    SERVER_HOST: process.env.SERVER_HOST || 'localhost',
    SERVER_PROTOCOL: process.env.SERVER_PROTOCOL || 'http'
};
const clientEnv = {
    api: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ( apiConfig.SERVER_PORT ? ':' + apiConfig.SERVER_PORT : '') + '/' + apiConfig.SERVER_PREFIX,
    socket: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ( apiConfig.SERVER_PORT ? ':' + apiConfig.SERVER_PORT : ''),
    ...apiConfig
};

export default {
    server: clientConfig,
    clientEnv,
    ...clientEnv
};
