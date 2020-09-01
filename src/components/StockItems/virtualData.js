export const virtualData = {
  0: {
    id: "0",
    name: "NIKE",
    productNumber: "00-00-ABCD",
    size: "L",
  },
};

export let nextId = Object.keys(virtualData).length;

export const setNextId = () => {
  nextId++;
};
