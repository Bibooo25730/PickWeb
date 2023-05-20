import alovaInstance from "./hello";

const StardescListGetter = alovaInstance.Get('/api/Stardesc', {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
});

export { StardescListGetter }