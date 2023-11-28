console.log("Hello World, I am a Amazonian Bullfrog")

document.getElementById("currentyear").innerHTML = new Date(). getFullYear();

document.getElementById('btn-alert').addEventListener('click', function(){
    alert('Dogs and Muppets');
})

const button = document.getElementById('btn-alert');
button.addEventListener('mouseover', function(){
    button.innerText = 'Bark Bark!';
});

button.addEventListener('mouseleave', function() {
    button.innerText = 'Dogs and Muppets';
});




let count = 1;

const buttontwo = document.getElementById('btn-counter');
const countertext = document.getElementById('txt-counter');

window.onload = function()
{
    for(var i = 0; i < 100; i++){
        var list = document.getElementById('demo');
        var newnum = document.createElement('li');
        if (i % 2 == 1){
            var newval = document.createTextNode('Even');
        }
        else if (i % 2 == 0){
            var newval = document.createTextNode('Odd');
        }
        newnum.appendChild(newval);
        list.appendChild(newnum);
    }
}

buttontwo.addEventListener('click', function(){
    count = count + 1;
    countertext.innerHTML = 'There are this many muppets:' + count;

    if (count % 2 === 0) {
    console.log('Even')
    countertext.classList.remove('odd');
    countertext.classList.add('even');
    } else {
        console.log('Odd')
        countertext.classList.remove('even');
        countertext.classList.add('odd');
    }

});