
var memberArray = ['egoing', 'graphittie','leezhce'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    member : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce',
}


console.log("memberObject designer", memberObject.designer);

memberObject.designer  = 'vboyoung';
console.log("memberObject designer", memberObject.designer);


//object 삭제
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);  //undefined
