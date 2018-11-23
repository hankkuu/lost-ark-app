module.exports = function (api) {
  api.cache(true);
  const presets = [
    ['babel-preset-expo']
  ];
  const plugins = [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@app': './src',
        '@asset': './assets',       
        "@util": "./src/util",
        "@screen": "./src/components/screens",
        "@navigation": "./src/components/navigations",
        "@shared": "./src/components/shared", 
        "@kittenDesign": "./src/config",
        "@item": "./src/components/items",
        "@expo": "./node_modules/@expo",
      }
    }]
  ];
  return {
    presets,
    plugins
  };
 };