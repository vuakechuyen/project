//ứng dụng closure để che đi nội dung
function botRun(){
    let contents=[]
    fetch( "http://localhost:3000/contentsRobot")
    .then(function(dat){
        return dat.json()
    })
    .then(function(content){
        contents=content
    })

    function botShow(){
    let index=Math.floor(Math.random()*contents.length)
    showElement.innerText=contents[index]
    }
    return botShow
}
var showElement=document.querySelector("#content_robot")
//gọi botRun 1 lần duy nhất
var run=botRun()


setInterval(function(){
    run()
},6000)