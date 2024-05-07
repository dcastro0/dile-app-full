import { createRequestHandler } from '@expo/server/adapter/vercel';

export default createRequestHandler({
  build: require('path').join(__dirname, '../dist/server'),
  mode: process.env.NODE_ENV,
});
