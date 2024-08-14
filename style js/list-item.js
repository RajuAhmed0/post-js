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


