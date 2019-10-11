const a = e => {
    console.log(e);
};
function p1(){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(10);
        }, 100);
    })
}
async function b(){
    const num = await p1();
    console.log(num);
}