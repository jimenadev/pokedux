export const logger = (store) => (next) => (action) =>{
    console.log(action)
    next(action)
} 

export const featuring = (store) => (next) => (actionInfo) =>{
    const featured = [{ name: "eddie" }, ...actionInfo.action.payload]
    const updatedActioninfo = {
        ...actionInfo,
        action: {...actionInfo.action, payload: featured}}
    next(updatedActioninfo)
}