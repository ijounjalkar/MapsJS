var map1 = new Map();
var map2 = new Map();
for(var i = 0; i < 12; i++){
    map2.set(i, new Array());
}
console.log(map2.values());
start = new Date(92, 0, 1);
end = new Date(93, 11, 31); 
for(var i = 0 ; i < 50; i++){
    map1.set(i+1, randomDate(start,end));
}
console.log(map1);
for(var i = 0; i < 12; i++){
    var prev = map2.get(i);
    for(let [key,value] of map1){
        if(value.getMonth() == i){
            prev.push(key);
        }
    }
    map2.set(i,prev);
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
console.log(map2);