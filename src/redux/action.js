export const changeTabActive = (data) => ({
    type: 'ACTIVE_TAB',
    payload: data
})

// export const changeTabActive = ({type, payload})=>{
//     if(!type || !payload){
//         throw new Error('Invalid data object')
//     };
//     return {
//         type:'ACTIVE_TAB',
//         payload: payload
//     }
// }