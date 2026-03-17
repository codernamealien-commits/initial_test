document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');

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
            
            // 색상 지정 (보통 로또 번호 대역별 색상)
            if (number <= 10) ball.classList.add('yellow');
            else if (number <= 20) ball.classList.add('blue');
            else if (number <= 30) ball.classList.add('red');
            else if (number <= 40) ball.classList.add('gray');
            else ball.classList.add('green');

            // 애니메이션 지연 효과
            ball.style.animationDelay = `${index * 0.1}s`;
            lottoNumbersContainer.appendChild(ball);
        });
    }

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });
});
