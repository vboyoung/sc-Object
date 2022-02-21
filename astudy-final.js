<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> 나만의 객체 만들기 - Prototype, Object</title>
</head>

<script>

    //basic 객체 만들기
    let MyMath =  {

        PI : Math.PI, 
        random : function() {
            return Math.random();
        },
        floor : function(val) {
            return Math.floor(val);
        }

    }
    console.log(MyMath.floor(3.9));




    //prototype, this 객체 만들기 : 파라미터 받아서 처리하고 싶을때 적용 (class는 IE 11ver 사용불가)
    let MyPerson =  function(name, first, second){
    
        this.name = name;
        this.first = first;
        this.second = second;


        var memberObject = {
            member : 'egoing',
            developer : 'graphittie',
            designer : 'leezhce',
        }

        MyPerson.prototype.sum  = function() {
            return 'prototype : ' + (this.first + this.second)
        }

        MyPerson.prototype.random  = function() {
            return Math.random();
        }

        MyPerson.prototype.floor  = function(val) {
            return Math.floor(val);
        }

        MyPerson.prototype.test = function() {
            return console.log("test");
        }

        MyPerson.prototype.memberObject = function() {
            return console.log(memberObject);
        }
   
        
    }


    console.group("kim Object");
        var kim = new MyPerson('kim', 10, 10);
        console.log(kim);
        console.log(kim.sum());
        console.log(kim.random());
        console.log(kim.floor(3.9));
        console.log(kim.memberObject());

    

    console.group("lee Object");
        var lee = new MyPerson('lee', 30, 30);
        console.log(lee);
        console.log(lee.sum());
        console.log(lee.random());


</script>


<body>
    
</body>
</html>