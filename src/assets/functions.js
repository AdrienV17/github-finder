

export const changeStateToFalse = (setState,time) =>setTimeout(()=> setState(false),time)

export const typeAction = (type)=>({type})
export const payloadAction = (type,payload) =>({type,payload})