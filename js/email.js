const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = "YOUR_TEAMPLATE_ID";

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      document.getElementById('form').reset(); 
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            var answer = document.getElementById('answer-' + index);
            var icon = this.querySelector('.fa-plus, .fa-minus');
            
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                question.style.background = 'var(--primary-500)'; 
                if (icon) {
                    icon.className = 'fas fa-minus';
                }
            } else {
                answer.style.display = 'none';
                question.style.background = 'white'; 
                if (icon) {
                    icon.className = 'fas fa-plus';
                }
            }
        });
    });
});
