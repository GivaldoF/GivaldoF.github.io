// Anchor links now has a smooth movement
document.querySelectorAll('.navbar_link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

emailjs.init("J8FhEQh_HSo13NNxF");

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_qrbfrch', 'template_2wdmq79', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message:', error);
        });
});