// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.sourceExts = [
  ...config.resolver.assetExts,
  "js",
  "jsx",
  "json",
  "ts",
  "tsx",
  "cjs",
  "mjs",
];
config.resolver.assetExts = [
  ...config.resolver.assetExts,
  "glb",
  "gltf",
  "png",
  "jpg",
];

module.exports = config;
