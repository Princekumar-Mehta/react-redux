export const incNumber = (value) => {
  return {
    type: "INCREMENT",
    value: value,
  };
};
export const decNumber = (value) => {
  return {
    type: "DECREMENT",
    value: value,
  };
};
