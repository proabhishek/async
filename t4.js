// let obj1=setInterval(()=>{console.log("call dominos")},8000)
// setTimeout(()=>{clearInterval(obj)},9000)

// let obj2=setInterval(()=>{console.log("pizza is getting prepared")},5000)
// setTimeout(()=>{clearInterval(obj2)},9000)
// let obj3=setInterval(()=>{console.log("Pizza is deliverd")},3000)



setTimeout(()=>{console.log("call domino");setTimeout(()=>{console.log("prepared");setTimeout(()=>{console.log("delivered")},2000)},2000)},2000)