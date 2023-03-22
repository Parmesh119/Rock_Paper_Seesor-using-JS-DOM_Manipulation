let first = document.getElementById('one')
let secone = document.getElementById('two')
let third = document.getElementById('three')
let p1 = "",p2 = "", p3 = ""
let c1 = 0,c2 = 0,c3 = 0
let cnt1 = 0, cnt2 = 0,cnt3 = 0
// 1 = rock, 2 = seesor, 3 = paper
red = () => {
     cnt1=cnt1 + 1
     document.getElementById('one').innerHTML = `click ${cnt1} time`
     console.log('you choose rock')
     p1 = 'Rock'
     c1 = Math.floor(Math.random() * 2)
     if(c1 == 0){
          c1 = 'Rock'
     }else if(c1 == 1){
          c1 = 'Seesor'
     }else{
          c1 = 'Paper'
     }
     console.log('Computer choose', c1);
     test(p1, c1)
}
green = () => {
     cnt2+=1
     document.getElementById('two').innerHTML = `click ${cnt2} time`
     console.log('you choose seesor')
     p2 = 'Seesor'
     c2 = Math.floor(Math.random() * 3)
     if(c2 == 0){
          c2 = 'Rock'
     }else if(c2 == 1){
          c2 = 'Seesor'
     }else{
          c2 = 'Paper'
     }
     console.log('Computer choose', c2);
     test(p2, c2)
}
blue = () => {
     cnt3+=1
     document.getElementById('three').innerHTML = `click ${cnt3} time`
     console.log('you choose paper')
     p3 = 'Paper'
     c3 = Math.floor(Math.random() * 3)
     if(c3 == 0){
          c3 = 'Rock'
     }else if(c3 == 1){
          c3 = 'Seesor'
     }else{
          c3 = 'Paper'
     }
     console.log('Computer choose', c3);
     test(p3, c3)
}
function reset(){
     document.getElementById('one').innerHTML="";
     document.getElementById('two').innerHTML="";
     document.getElementById('three').innerHTML="";
     cnt1=cnt2=cnt3=0
}
function test(s1, s2){
     if(s1 === s2){
          document.getElementById('one').innerHTML = 'Draw'
     }else if((s1 == 'Rock' && s2 == 'Paper')){
          document.getElementById('one').innerHTML = 'Computer wins' 
     }
     else if((s1 == 'Rock' && s2 == 'Seesor')){
          document.getElementById('one').innerHTML = 'You wins'
     }else if((s1 == 'Seesor' && s2 == 'Paper')){
          document.getElementById('one').innerHTML = 'You wins'
     }else if((s1 == 'Seesor' && s2 == 'Rock')){
          document.getElementById('one').innerHTML = 'Computer wins'
     }else if((s1 == 'Paper' && s2 == 'Seesor')){
          document.getElementById('one').innerHTML = 'Computer wins'
     }else if((s1 == 'Paper' && s2 == 'Rock')){
          document.getElementById('one').innerHTML = 'you wins'
     }
}