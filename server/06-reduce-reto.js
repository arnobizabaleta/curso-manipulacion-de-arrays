const list = [];
for(let index = 0; index < 30; index++){
    list.push(Math.floor(Math.random() * 11));
}

const rta = list.reduce((obj,num)=>{
    if(num < 5) obj["0-4"]++;
    else if(num < 9)obj["5-8"]++;
    else obj["9-10"]++;
    return obj;
},{
    ["0-4"]:0,
    ["5-8"]:0,
    ["9-10"]:0,
});

console.log(list);
console.log(rta);