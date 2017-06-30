
let count1 = $("#count-val-1").text();

let count2 = $("#count-val-2").text();

$("#click-img-1").click(function(){
 $("#count-val-1").text(++count1);
});

$("#click-img-2").click(function(){
 $("#count-val-2").text(++count2);
});
