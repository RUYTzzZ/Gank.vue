/**
 * webpack 基础配置
 */
const path = require('path');
const rules = require('./rules');  // webpack loader rules
const context = path.resolve(__dirname, '../');

const modules = [
    `${context}/src`,
    'node_modules',
];

let config = {
    context,
    /**
     * entry 对象是用于 webpack 查找启动并构建 bundle。
     */
    entry: {
        main: ['webpack-hot-middleware/client', './src/index.js'],
    },
    /**
     * 这些选项能设置模块如何被解析。webpack 提供合理的默认值，
     * 但是还是可能会修改一些解析的细节。
     * 关于 resolver 具体如何工作的更多解释说明，请查看模块解析。
     * https://webpack.docschina.org/concepts/module-resolution
     */
    resolve: {
        modules,
        extensions: ['.js', '.vue'],
    },
    resolveLoader: {modules: ['node_modules']},
    module: {},
    plugins: [],
};

/** wrap rules for configurations */
rules.wrap(config);

module.exports = config;
