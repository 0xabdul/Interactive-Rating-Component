let numberone = document.getElementById('listone');
let numbertwo = document.getElementById('listtwo');
let numberthree = document.getElementById('listthree');
let numberfour = document.getElementById('listfour');
let numberfive = document.getElementById('listfive');
let submit = document.getElementById('submit-btn');
let boxone = document.getElementById('box-1');
let boxtwo = document.getElementById('box-2');
let use = document.getElementById('user');
let img  =  document.getElementById('outside-img');
numberone.addEventListener('click',()=>{
    use.innerHTML = '1';
})
numbertwo.addEventListener('click',()=>{
    use.innerHTML = '2';
})
numberthree.addEventListener('click',()=>{
    use.innerHTML = '3';
})
numberfour.addEventListener('click',()=>{
    use.innerHTML = '4';
})
numberfive.addEventListener('click',()=>{
    use.innerHTML = '5';
})
submit.addEventListener('click',()=>{
boxone.style.display = 'none';
boxtwo.style.display = 'flex';
})
img.addEventListener('click',()=>{
    boxone.style.display = 'flex';
    boxtwo.style.display = 'none';
})