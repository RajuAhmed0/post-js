document.getElementById('input').addEventListener('keyup', function (event) {
    if (event.target.value.length >= 8) {
        document.getElementById('btn').removeAttribute('disabled');
    }  
    else{
        document.getElementById('btn').setAttribute('disabled', ""); 
    }
})

document.getElementById('btn').addEventListener('click', function () {
    const ol = document.getElementById('ol-list');
    const text = document.getElementById('input').value;
    const liTag = document.createElement('li');
    liTag.innerText = text
    ol.appendChild(liTag)
    document.getElementById('input').value = '';
    document.getElementById('btn').setAttribute('disabled', "")
})

document.getElementById('ol-list').addEventListener('click', function (e) {
    e.target.parentNode.removeChild(e.target);
})


/* document.getElementById('content').addEventListener('keyup', function (e) {  
    if (e.target.value.length >= 6) {
         document.getElementById('btn').removeAttribute('disabled')
        }
        else{
            document.getElementById('btn').setAttribute('disabled', "")
        }   
 })

document.getElementById('btn').addEventListener('click', function () {
    const olList = document.getElementById('ol-list');
    const contentInput = document.getElementById('content').value;
    const li = document.createElement('li');
    li.innerText = contentInput;
    olList.appendChild(li);
    document.getElementById('content').value = '';
    document.getElementById('btn').setAttribute('disabled', "")
  
})

document.getElementById('ol-list').addEventListener('click', function (e) {
    console.log('click');
    e.target.parentNode.removeChild(e.target)    
}) */