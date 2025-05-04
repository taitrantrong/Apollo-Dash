document.querySelectorAll('.metric').forEach(metric => {
    metric.addEventListener('mouseover', function() {
        document.getElementById('metric-title').textContent = this.textContent;
        document.getElementById('metric-info').textContent = `Showing insights for ${this.textContent}`;
        document.getElementById('metric-details').style.display = 'block';
        document.getElementById('metric-details').style.opacity = '1';
    });
    metric.addEventListener('mouseleave', function() {
        document.getElementById('metric-details').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('metric-details').style.display = 'none';
        }, 300);
    });
});
document.getElementById('login-btn').addEventListener('click', function() {
    // Show the modal and the backdrop
    const modal = document.getElementById('login-modal');
    const backdrop = document.getElementById('backdrop');
    
    modal.style.display = 'block';
    backdrop.style.display = 'block';

    // Position the modal above the button
    const buttonPosition = this.getBoundingClientRect();
    modal.style.top = `${buttonPosition.top + window.scrollY + this.offsetHeight + 10}px`;
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('backdrop').style.display = 'none'; // Hide backdrop
});

document.getElementById('submit-login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful');
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('backdrop').style.display = 'none'; // Hide backdrop
    } else {
        alert('Please fill in both fields');
    }
});
