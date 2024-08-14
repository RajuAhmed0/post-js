document.getElementById('submit').addEventListener('click', function () {
    const section1 = document.getElementById('article-list');
    const text = document.getElementById('text').value;
    const article = document.createElement('article');
    article.innerText = text
    article.style.marginBottom = '15px'
    section1.appendChild(article)
   document.getElementById('text').value = '';
})


