var val=[]
var credits=[3,4,4,3,1,1,1,1]
var finVal=[]
function credPoint(x) {
    var unit = 1
    let count = 1
    if (x != 100) {
        for (let a = 10; a <= 100; a = a + 10) {
            if ((x / a) < unit) {
                return count;
                break;
            }
            count++
        }
    }
    else if(x==100)
    {
        return 10;
    }
}
function fun(){
    let c
    Array.from(document.getElementsByTagName("input")).forEach((element)=>{
        c=element.value
        c=Number.parseInt(c)
        val.push(c)
    })
    console.log(val)

    for(let i=0;i<val.length;i++){
        finVal.push(credPoint(val[i])*credits[i])
    }
    
    document.getElementById("result").innerHTML=finVal
    
    let sum=finVal.reduce((x1,x2)=>{
       return x1+x2
    })

    let sgpa=(sum/180)*10
    sgpa=sgpa.toFixed(2)
    document.getElementById("result").innerHTML = sgpa

}


