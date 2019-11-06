export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const buyItem = payload => ({
  type: BUY_ITEM,
  payload
});

export const removeItem = payload => ({
  type: REMOVE_FEATURE,
  payload
});
