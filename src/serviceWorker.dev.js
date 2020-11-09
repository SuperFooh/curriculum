export default () => {
    let url = `${process.env.PUBLIC_URL}/serviceWorker.js`;
    navigator.serviceWorker.register(url).then(res=>{
        console.log('response', res)
    })
}