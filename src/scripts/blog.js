function filterArticles(category){
    const articles = document.querySelectorAll('.blog-article')
    
    articles.forEach(article => {
        const articleCategory = article.getAttribute('data-category')
        
        if (category === 'All' || articleCategory === category) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none'; 
            
        }

    });

    const buttons = document.querySelectorAll('.tags-switcher button');

    buttons.forEach(button => {
        if (button.textContent.trim() === category || (category === 'All' && button.textContent.trim() === 'Todos los artículos')){
            button.classList.add('active');
        
        }
        else{
            button.classList.remove('active')
        }
    });
}


filterArticles('All');
