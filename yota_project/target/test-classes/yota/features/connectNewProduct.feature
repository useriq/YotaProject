# language: ru
Функционал: Вход и выход
  Сценарий: Вход и выход
    Пусть запущен тестовый сервис
    Когда открыт браузер
    И введен url веб-приложения
    То открыта стартовая страница
    Когда выбран новый продукт
    То "новые условия" соответствуют "новому" продукту
    Когда пополнен счет на сумму подключения нового продукта
    То баланс увеличился на сумму пополнения
    Когда нажата кнопка "Подключить"
    То баланс уменьшился на стоимость продукта
    И "текущие условия" соответствуют подключенному продукту
    И кнопка "Подключить" неактивна


