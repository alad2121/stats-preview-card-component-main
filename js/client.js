const timeline = new TimelineMax();


timeline.from(".header",1,{
    y:800
}).from(".text", 1,{
    y:700
}).from(".item-1",0.5,{
    y:30,
    opacity:0
},"+=0.5").from(".item-2", 0.5,{
    y:30,
    opacity:0
}).from(".item-3",0.5,{
    y:30,
    opacity:0
})


  
