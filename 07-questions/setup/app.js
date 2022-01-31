// using selectors inside the element

// we are looping over each article and choosing its buttons
const questions = document.querySelectorAll('.question');
questions.forEach(function(q) {
    const btn = q.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        // item and q both reference the SAME article, here we are checking to see if the article is the one we're currently at. if it's not, hide it by removing show-text.
        questions.forEach(function(item) {
            if(item !== q){
                item.classList.remove('show-text');
            }
        });
        q.classList.toggle('show-text');
    });
});


/* // traversing the dom

// selects all the buttons
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // access to the parent of the parent of the button since the button lives in question-title but we need the entire question container itself. 
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */