//ứng dụng closure để che đi nội dung
function botRun(){
    let contents=[]
    let contentAll=[]
    fetch( "https://my-json-server.typicode.com/vuakechuyen/t1/contentsRobot")
    .then(function(dat){
        return dat.json()
    })
    .then(function(content){
        contents=content
        content.forEach(function(x){
            contentAll=contentAll.concat(x)
        })
        
    })
    function botShow(){
    let index=Math.floor(Math.random()*contentAll.length)
    showElement.innerText=contentAll[index]
    }
    return botShow
}
var showElement=document.querySelector("#content_robot")
//gọi botRun 1 lần duy nhất
var run=botRun()


setInterval(function(){
    run()
},6000)
