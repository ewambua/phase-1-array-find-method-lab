// code your solution here


let foundItem = record.find(superbowlWin)


function superbowlWin(record){
    for(let item of record){
        if(item.result === "W"){
            return item.year;
        }
    }
}