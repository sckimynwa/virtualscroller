export async function fetchItem(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const retArr = [];
      for (let i = page * 60; i < (page + 1) * 60; i++) {
        retArr.push({
          url: "https://source.unsplash.com/random/400x400",
          idx: i,
        });
      }
      resolve(retArr);
    }, 100);
  });
}
