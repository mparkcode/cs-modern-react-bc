const getNewColor = (oldColor, arr) => {
    let newColor = arr[Math.floor(Math.random() * arr.length)]
    while(oldColor === newColor){
        newColor = arr[Math.floor(Math.random() * arr.length)]
    }
    return newColor
}

export {getNewColor}