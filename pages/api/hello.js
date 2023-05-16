// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createAlova, useRequest } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';

const alovaInstance = createAlova({
  baseURL: 'http://127.0.0.1:8080/api/',
  statesHook: ReactHook,
  requestAdapter: GlobalFetch()
});
export default alovaInstance;
