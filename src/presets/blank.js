const size = 44;
const blank = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

export default blank;