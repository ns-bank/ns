const transactionDetails = {
  transaction1: {
    sender: '516780****8103',
    date: '3 декабря 2024, 15:19',
    amount: '+50 000 000 ₽',
    description: 'Перевод на карту',
  },
  transaction2: {
    sender: '516780****8103',
    date: '3 декабря 2024, 14:10',
    amount: '+10 500 000 ₽',
    description: 'Перевод на карту',
  },
};

function openTransactionDetails(transactionId) {
  const details = transactionDetails[transactionId];
  if (details) {
    document.getElementById('transaction-date').textContent = details.date;
    document.getElementById('transaction-amount').textContent = details.amount;
    document.getElementById('transaction-description').textContent = details.description;
    document.getElementById('transaction-sender').textContent = details.sender;

    // Показываем модальное окно
    document.getElementById('transaction-modal').classList.remove('hidden');
  }
}

function closeTransactionModal() {
  // Закрываем модальное окно
  document.getElementById('transaction-modal').classList.add('hidden');
}

function showTransactions(type) {
  const transactionsBlock = document.querySelector('.transaction-list');
  const tabs = document.querySelectorAll('.tab');

  // Убираем активный класс со всех кнопок
  tabs.forEach((tab) => tab.classList.remove('active'));

  // Добавляем активный класс к нажатой кнопке
  document.querySelector(`.tab[onclick="showTransactions('${type}')"]`).classList.add('active');

  if (type === 'expense') {
    // Скрываем блок переводов
    transactionsBlock.style.display = 'none';
  } else {
    // Показываем блок переводов
    transactionsBlock.style.display = 'block';
  }
}












// Обработчик нажатия на кнопку "Выйти"
document.getElementById('logoutButton').addEventListener('click', function() {
    // Перенаправляем на другую страницу (например, "login.html")
    window.location.href = 'index.html';
});







// Данные карты
const fullCardNumber = "4158 5678 9101 9368";
const maskedCardNumber = "**** ** ** 9368";

const fullCardCVV = "CVV   375";
const maskedCardCVV = "CVV   ***";

let isMasked = true;

function toggleCardDetails() {
    // Получаем элементы
    const cardNumberElement = document.getElementById("card-number");
    const cardCVVElement = document.getElementById("card-cvv");

    if (!cardNumberElement || !cardCVVElement) {
        console.error("Элементы 'card-number' или 'card-cvv' не найдены!");
        return;
    }

    // Переключение между замаскированным и полным видом
    if (isMasked) {
        cardNumberElement.textContent = fullCardNumber;
        cardCVVElement.textContent = fullCardCVV;
    } else {
        cardNumberElement.textContent = maskedCardNumber;
        cardCVVElement.textContent = maskedCardCVV;
    }

    isMasked = !isMasked; // Переключение состояния
}











function toggleModal() {
    const modal = document.getElementById('settingsModal');
    const modalBg = document.getElementById('modalBg');

    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        modalBg.style.display = 'none';
    } else {
        modal.style.display = 'block';
        modalBg.style.display = 'block';
    }
}













