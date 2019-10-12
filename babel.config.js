const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "10",
                firefox: "60",
                chrome: "49",
                safari: "11.1",
            },
            useBuiltIns: "usage", // 会只加载代码中为支持的api, 没有使用的不会加载进来
        },
    ],
];
const plugins = [
    "@babel/plugin-transform-arrow-functions",
    // "./my-plugins/index.js"
];
console.log(process.env.env)

module.exports = function(api){
    // console.log(api);
    api.cache(true);
    return {
        presets,
        plugins
    };
}