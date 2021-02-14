/*
function linearSearch(x,item){
    var boolean = false;
    for (i in x){
        if (i==item){
            boolean = true;
            break
        }
        else{
            boolean = false;
        }
    }
    return boolean;
}

let list = ["Satyam", "Aditi", "Sampda", "Chesta", "Arapna"];
let a = prompt("Search here.....");
if (linearSearch(list,a)){
    alert("Data found");
}
else{
    alert("No data found");
}
*/

function binarySearch(x, item) {
    var boolean = false;
    var beg = 0;
    var end = (x.length) - 1;
    while (beg <= end) {
        var mid = Math.round((beg + end)/2);
        if (x[mid] == item) {
            boolean = true;
            break
        }
        else if (item > x[mid]) {
            beg = mid + 1;
        }
        else if (item < x[mid]) {
            end = mid - 1;
        }
    }
    return boolean;
}

let lst = [1,2,3,4,5];
let obj = {
    12101 : "Aditi",
    12102 : "Arapna",
    12103 : "Chesta",
    12104 : "Sampda",
    12105 : "Satyam",
}
let a = prompt("Search here....");
if (obj[1] === a){
    alert("Data found")
    console.log(obj)
}
else{
    alert("No Data found");
}