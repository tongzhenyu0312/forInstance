export const fn = () => {
  console.log('我原来是箭头函数');
}

export const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})