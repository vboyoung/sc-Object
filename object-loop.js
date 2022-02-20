
//array while
var memberArray = ['egoing', 'graphittie','leezhce'];

console.group('array loop');

var i = 0;
while(i < memberArray.length) {

    console.log(i, memberArray[i]);
    i = i + 1;
}

console.groupEnd('array loop');


// 객체 for in 
var obj = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}

console.group('object loop');

for(const key in obj) {
    console.log(key, obj); //0, 1, 2
    console.log(key, obj[key]); //manager egoing, developer graphittie, designer leezche
}

console.group('object loop');