document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const themeBtn = document.getElementById('theme-btn');
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');

    // Theme Logic
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);

    themeBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });

    function updateThemeButton(theme) {
        themeBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    // Lotto Logic
    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers.sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        lottoNumbersContainer.innerHTML = '';
        numbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = number;
            
            if (number <= 10) ball.classList.add('yellow');
            else if (number <= 20) ball.classList.add('blue');
            else if (number <= 30) ball.classList.add('red');
            else if (number <= 40) ball.classList.add('gray');
            else ball.classList.add('green');

            ball.style.animationDelay = `${index * 0.1}s`;
            lottoNumbersContainer.appendChild(ball);
        });
    }

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });
});
