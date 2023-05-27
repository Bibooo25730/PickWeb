// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';

const alovaInstance = createAlova({
  baseURL: 'https://rtc.bibooo.top/',
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  responded: {
    onSuccess: async (response, method) => {
      if (response.status >= 400) {
        console.log(response)
      }
      const json = await response.json();
      console.log(json)
      // if (json.code !== 200) {
      //   // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
      //   throw new Error(json.message);
      // }

      return json;
    },
    onError: (err, method) => {
      console.log(err)
    }
  }
});
export default alovaInstance;
