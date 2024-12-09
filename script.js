
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});









        // Скрипт для проверки логина и пароля
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение формы

            // Получаем значения логина и пароля
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            // Проверка логина и пароля
            if (login === "89153379253" && password === "Krasik@814972!") {
                // Если данные верны, переходим на lk.html
                window.location.href = "lk.html";
            } else {
                // Если данные неверны, показываем сообщение
                alert("Неверный логин или пароль!");
            }
        });
