module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["module-resolver", {
      "root": ["./"],
      "alias": {
         "@":"./src",
         "@components":"./src/components",
         "@pages":"./src/pages",
         "@images":"./src/images",
      }
    }]
  ]
};
