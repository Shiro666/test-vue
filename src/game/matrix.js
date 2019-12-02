export const getMatrix = (rows = 10, cols = 14, n = 7) => {
    if(rows*cols%2 !== 0) throw Error('rows*cols必须为偶数');
    const halfArray = [...Array(rows*cols/2)].map(value => value = Math.floor(Math.random()*n) + 1)
    const array = [...halfArray, ...halfArray].sort((a, b) => Math.random() - 0.5)
    return [...Array(rows)].map((value, index) => 
      value = array.slice(cols*index, cols*(index + 1))
    )
}