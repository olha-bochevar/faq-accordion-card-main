//DOM
const faqCards = document.querySelector('.faq-cards');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answers');

faqCards.addEventListener('click', e => {
    
})


questions.forEach(question => {
    question.addEventListener('click', e => {
        if(!question.classList.contains('active')){
            question.classList.add('active');
            question.children[0].classList.add('active');
            question.nextElementSibling.classList.add('active');
        } else{
            question.classList.remove('active');
            question.children[0].classList.remove('active');
            question.nextElementSibling.classList.remove('active');
        }
        
    });
});