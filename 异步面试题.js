/* (async()=>{
    console.log('1');
    setTimeout(()=>{
    console.log('2');
    },0);
    await new Promise((resolve) => {
        resolve();
        console.log('3');
        
    }).then(() => {
        console.log('4');
        
    });
    console.log('5');
    
})() */

/**
 * 实现一个 sleep 函数，暂停当前执行一段时间
 */
async function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
})
}
(async() => {
    console.log(1);
    await sleep(2000)
    console.log(2);
})()
