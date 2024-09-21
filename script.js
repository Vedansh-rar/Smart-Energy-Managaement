document.addEventListener('DOMContentLoaded', () => {
    scrollToSection('home');
    renderDailyUsageChart();
    renderApplianceUsageChart();
    loadEnergyTips();
    formValidation();
    handleUserAuthentication();
    displayLoadingSpinner();
});

//Sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
    });
}

//Daily Usage
function renderDailyUsageChart() {
    const ctx = document.getElementById('dailyUsageChart').getContext('2d');
    const dailyUsageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: [12, 19, 3, 5, 2, 3, 9],
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return ` ${tooltipItem.formattedValue} kWh`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Pie Chart
function renderApplianceUsageChart() {
    const ctx = document.getElementById('applianceUsageChart').getContext('2d');
    const applianceUsageChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Fridge', 'AC', 'Lights', 'Heating', 'Others'],
            datasets: [{
                label: 'Appliance Usage',
                data: [30, 20, 15, 10, 25],
                backgroundColor: [
                    'rgba(40, 167, 69, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return ` ${tooltipItem.formattedValue}% Usage`;
                        }
                    }
                }
            }
        }
    });
}

//Energy Tips
function loadEnergyTips() {
    const tipsContainer = document.getElementById('tips-container');
    const tips = [
        "Turn off lights when not in use.",
        "Use energy-efficient appliances.",
        "Unplug devices that are not in use.",
        "Use natural light whenever possible.",
        "Set your thermostat efficiently."
    ];

    tips.forEach((tip, index) => {
        const tipElement = document.createElement('p');
        tipElement.textContent = `${index + 1}. ${tip}`;
        tipsContainer.appendChild(tipElement);
    });
}

//Contact and Login Forms
function formValidation() {
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');

    // Contact Form
    contactForm.addEventListener('submit',

        function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    
        // Login Form
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            if (!username || !password) {
                alert('Please enter your login details.');
            } else {
                alert('Login successful!');
                loginForm.reset();
            }
        });
    }
    
    // Email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    //User Authentication
    function handleUserAuthentication() {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            if (username === 'admin' && password === 'password123') {
                alert('Welcome, Admin!');
            } else {
                alert('Invalid username or password.');
            }
        });
    }
    
    // Loading Spinner
    function displayLoadingSpinner() {
        const loadingSpinner = document.getElementById('loading');
        loadingSpinner.style.display = 'flex';
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
        }, 2000); 
    }
    
    //Hover and Animation
    const icons = document.querySelectorAll('.feature-card img');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        });
    
        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'scale(1)';
        });
    });
    