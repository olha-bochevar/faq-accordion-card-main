

class Faq {
  constructor(container) {
    this.container = container;
    this.questions = container.querySelectorAll(".question");
    this.answers = container.querySelectorAll(".answer");
  }
  init() {
    this.questions.forEach(question => {
      question.addEventListener("click", e => {
        console.log(e.target);
        if (e.target == question && e.target.classList.contains("active")) {
          e.target.classList.remove("active");
          e.target.nextElementSibling.classList.remove("active");
        } 
        else {
          this.questions.forEach(q => q.classList.remove("active"));
          this.answers.forEach(a => a.classList.remove("active"));

          e.target.classList.add("active");
          e.target.nextElementSibling.classList.add("active");
        }
      });
    });
    this.container.addEventListener('click', e => {
        console.log(e);
        if(e.target.className === 'answer active') {
            e.target.classList.remove("active");
            e.target.previousElementSibling.classList.remove("active");
        }
    })
  }
}

const faq = new Faq(document.querySelector(".faq-cards"));
faq.init();
