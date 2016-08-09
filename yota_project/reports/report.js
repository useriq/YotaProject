$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1checkProducts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Проверка информации по всем продуктам",
  "description": "",
  "id": "проверка-информации-по-всем-продуктам",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 47043968,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Проверка информации по всем продуктам",
  "description": "",
  "id": "проверка-информации-по-всем-продуктам;проверка-информации-по-всем-продуктам",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "запущен тестовый сервис",
  "keyword": "Пусть "
});
formatter.step({
  "line": 5,
  "name": "получена информация по продуктам",
  "keyword": "И "
});
formatter.step({
  "line": 6,
  "name": "открыт браузер",
  "keyword": "Когда "
});
formatter.step({
  "line": 7,
  "name": "введен url веб-приложения",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "открыта стартовая страница",
  "keyword": "То "
});
formatter.step({
  "line": 9,
  "name": "\"текущие условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "\"новые условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 11,
  "name": "\"новые условия\" по всем продуктам верны",
  "keyword": "И "
});
formatter.step({
  "line": 12,
  "name": "перемещен слайдер на \"бесплатный\" продукт",
  "keyword": "Когда "
});
formatter.step({
  "line": 13,
  "name": "\"новые условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.match({
  "location": "CommonYotaSteps.startApp()"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003e------ Запуск сервиса приложения -------\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess PID: 832\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess Name: java.exe\u003c/b\u003e");
formatter.write("\u003cb\u003eFull command: java  -jar test-slider-1.0.0-SNAPSHOT.jar\u003c/b\u003e");
formatter.write("\u003cb\u003e------------------\u003c/b\u003e");
formatter.write("\u003cb\u003e832\u003c/b\u003e");
formatter.write("\u003cb\u003eПроцессYOTA успешно ЗАПУЩЕН\u003c/b\u003e");
formatter.write("\u003cb\u003ePID процесса832\u003c/b\u003e");
formatter.result({
  "duration": 15129735762,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.getInfoAllProducts()"
});
formatter.write("\u003cb\u003eПолучаем информацию о продуктах\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 0 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 64 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 0 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 1 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 320 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 300 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 2 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 416 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 350 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 3 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 512 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 400 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 4 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 640 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 450 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 5 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 768 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 500 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 6 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 896 Кбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 550 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 7 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 1.0 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 600 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 8 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 1.3 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 650 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 9 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 1.7 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 700 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 10 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 2.1 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 750 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 11 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 3.1 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 800 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 12 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 4.1 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 850 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 13 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 5.0 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 900 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 14 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 5.7 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 950 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 15 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 6.4 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1000 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 16 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 7.1 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1050 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 17 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 7.8 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1100 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 18 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 8.5 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1150 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 19 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 9.2 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1200 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 20 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 10.0 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1250 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 21 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 12.0 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1300 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 22 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : 15.0 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1350 руб. в месяц\u003c/b\u003e");
formatter.write("\u003cb\u003eИнформация о продукте 23 : \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость : Макс Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость : 1400 руб. в месяц\u003c/b\u003e");
formatter.result({
  "duration": 40928945,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openedBrowser()"
});
formatter.write("\u003cb\u003eОткрываем браузер\u003c/b\u003e");
formatter.result({
  "duration": 5941515472,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openApplication()"
});
formatter.write("\u003cb\u003eПереходим на http://localhost:4567\u003c/b\u003e");
formatter.result({
  "duration": 16306045880,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница тестового приложения Yota] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded0.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 643717567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "бесплатному",
      "offset": 33
    }
  ],
  "location": "CommonYotaPageSteps.checkCurrentConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"текущие условия\" соответствуют бесплатному продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded2.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 692787212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "бесплатному",
      "offset": 31
    }
  ],
  "location": "CommonYotaPageSteps.checkNewConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"новые условия\" соответствуют бесплатному  продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded3.png");
formatter.write("\u003cb\u003eНовые условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 684033027,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.checkNewConditionsAllProducts()"
});
formatter.write("\u003cb\u003eПроверяем, \"новые условия\" у всех продуктов\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded4.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded5.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded6.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 1 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded7.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded8.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded9.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 2 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded10.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded11.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded12.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 3 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded13.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded14.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded15.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 4 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded16.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded17.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded18.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 5 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded19.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded20.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded21.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 6 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded22.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded23.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded24.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 7 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded25.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded26.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded27.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 8 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded28.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded29.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded30.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 9 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded31.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded32.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded33.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 10 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded34.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded35.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded36.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 11 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded37.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded38.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded39.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 12 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded40.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded41.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded42.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 13 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded43.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded44.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded45.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 14 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded46.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded47.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded48.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 15 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded49.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded50.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded51.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 16 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded52.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded53.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded54.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 17 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded55.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded56.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded57.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 18 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded58.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded59.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded60.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 19 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded61.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded62.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded63.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 20 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded64.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded65.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded66.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 21 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded67.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded68.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded69.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 22 продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded70.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded71.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded72.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 23 продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 28214395685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "бесплатный",
      "offset": 22
    }
  ],
  "location": "CommonYotaPageSteps.moveToNewProductString(String)"
});
formatter.write("\u003cb\u003eПеремещаем слайдер на бесплатный продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 23\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded73.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 22\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 22\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded74.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 21\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 21\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded75.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 20\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 20\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded76.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 19\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 19\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded77.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 18\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 18\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded78.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 17\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 17\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded79.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 16\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 16\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded80.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 15\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 15\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded81.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 14\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 14\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded82.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 13\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 13\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded83.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 12\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 12\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded84.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 11\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 11\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded85.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 10\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 10\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded86.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 9\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 9\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded87.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 8\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 8\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded88.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 7\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 7\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded89.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 6\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 6\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded90.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 5\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 5\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded91.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 4\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 4\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded92.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 3\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 3\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded93.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 2\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 2\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded94.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 1\u003c/b\u003e");
formatter.write("\u003cb\u003eтекущая позиция : 1\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded95.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на предыдущий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eновая позиция : 0\u003c/b\u003e");
formatter.result({
  "duration": 4887527326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "бесплатному",
      "offset": 31
    }
  ],
  "location": "CommonYotaPageSteps.checkNewConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"новые условия\" соответствуют бесплатному  продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded96.png");
formatter.write("\u003cb\u003eНовые условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 348474178,
  "status": "passed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.after({
  "duration": 3196202590,
  "status": "passed"
});
formatter.uri("2fillUpAccount.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Пополнение счета",
  "description": "",
  "id": "пополнение-счета",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 1666413,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Пополнение счета на положительную сумму",
  "description": "",
  "id": "пополнение-счета;пополнение-счета-на-положительную-сумму",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "запущен тестовый сервис",
  "keyword": "Пусть "
});
formatter.step({
  "line": 5,
  "name": "открыт браузер",
  "keyword": "Когда "
});
formatter.step({
  "line": 6,
  "name": "введен url веб-приложения",
  "keyword": "И "
});
formatter.step({
  "line": 7,
  "name": "открыта стартовая страница",
  "keyword": "То "
});
formatter.step({
  "line": 8,
  "name": "введено \"положительное целое число\" в поле \"Пополнить счет\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 9,
  "name": "нажата кнопка \"Пополнить счет\"",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "баланс изменился на сумму пополнения",
  "keyword": "То "
});
formatter.match({
  "location": "CommonYotaSteps.startApp()"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003e------ Запуск сервиса приложения -------\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess PID: 4236\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess Name: java.exe\u003c/b\u003e");
formatter.write("\u003cb\u003eFull command: java  -jar test-slider-1.0.0-SNAPSHOT.jar\u003c/b\u003e");
formatter.write("\u003cb\u003e------------------\u003c/b\u003e");
formatter.write("\u003cb\u003e4236\u003c/b\u003e");
formatter.write("\u003cb\u003eПроцессYOTA успешно ЗАПУЩЕН\u003c/b\u003e");
formatter.write("\u003cb\u003ePID процесса4236\u003c/b\u003e");
formatter.result({
  "duration": 14551503333,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openedBrowser()"
});
formatter.write("\u003cb\u003eОткрываем браузер\u003c/b\u003e");
formatter.result({
  "duration": 6850545530,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openApplication()"
});
formatter.write("\u003cb\u003eПереходим на http://localhost:4567\u003c/b\u003e");
formatter.result({
  "duration": 16294638285,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница тестового приложения Yota] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded97.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded98.png");
formatter.result({
  "duration": 720247964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "положительное целое число",
      "offset": 9
    }
  ],
  "location": "CommonYotaPageSteps.filledAmount(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded99.png");
formatter.write("\u003cb\u003eВведено значение2262\u003c/b\u003e");
formatter.result({
  "duration": 273397596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Пополнить счет",
      "offset": 15
    }
  ],
  "location": "CommonYotaPageSteps.clickButton(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded100.png");
formatter.write("\u003cb\u003eНажата кнопка Пополнить\u003c/b\u003e");
formatter.result({
  "duration": 3404546947,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.chechkedBallance()"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded101.png");
formatter.write("\u003cb\u003eПроверяем, что балланс изменился на сумму пополнения\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма старого баланса и суммы пополнения: 2262\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса после пополнения: 2262\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на сумму пополнения\u003c/b\u003e");
formatter.result({
  "duration": 333452436,
  "status": "passed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.after({
  "duration": 2999284825,
  "status": "passed"
});
formatter.before({
  "duration": 1303239,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Пополнение счета на положительную сумму",
  "description": "",
  "id": "пополнение-счета;пополнение-счета-на-положительную-сумму",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 13,
  "name": "запущен тестовый сервис",
  "keyword": "Пусть "
});
formatter.step({
  "line": 14,
  "name": "открыт браузер",
  "keyword": "Когда "
});
formatter.step({
  "line": 15,
  "name": "введен url веб-приложения",
  "keyword": "И "
});
formatter.step({
  "line": 16,
  "name": "открыта стартовая страница",
  "keyword": "То "
});
formatter.step({
  "line": 17,
  "name": "пополнен счет на \"сумму достаточную выполнения для сценария\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 18,
  "name": "баланс изменился на сумму пополнения",
  "keyword": "То "
});
formatter.step({
  "line": 19,
  "name": "введено \"отрицательное целое число\" в поле \"Пополнить счет\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 20,
  "name": "нажата кнопка \"Пополнить счет\"",
  "keyword": "И "
});
formatter.step({
  "line": 21,
  "name": "баланс изменился на сумму пополнения",
  "keyword": "То "
});
formatter.match({
  "location": "CommonYotaSteps.startApp()"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003e------ Запуск сервиса приложения -------\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess PID: 5668\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess Name: java.exe\u003c/b\u003e");
formatter.write("\u003cb\u003eFull command: java  -jar test-slider-1.0.0-SNAPSHOT.jar\u003c/b\u003e");
formatter.write("\u003cb\u003e------------------\u003c/b\u003e");
formatter.write("\u003cb\u003e5668\u003c/b\u003e");
formatter.write("\u003cb\u003eПроцессYOTA успешно ЗАПУЩЕН\u003c/b\u003e");
formatter.write("\u003cb\u003ePID процесса5668\u003c/b\u003e");
formatter.result({
  "duration": 14737770303,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openedBrowser()"
});
formatter.write("\u003cb\u003eОткрываем браузер\u003c/b\u003e");
formatter.result({
  "duration": 6924498226,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openApplication()"
});
formatter.write("\u003cb\u003eПереходим на http://localhost:4567\u003c/b\u003e");
formatter.result({
  "duration": 15645716983,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница тестового приложения Yota] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded102.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded103.png");
formatter.result({
  "duration": 448449734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "сумму достаточную выполнения для сценария",
      "offset": 18
    }
  ],
  "location": "CommonYotaPageSteps.filledUpAccount(String)"
});
formatter.write("\u003cb\u003eПополнение счета на сумму выбранного продукта. Сумма: \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded104.png");
formatter.write("\u003cb\u003eВведено значение20000\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded105.png");
formatter.write("\u003cb\u003eНажата кнопка Пополнить\u003c/b\u003e");
formatter.result({
  "duration": 3572516060,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.chechkedBallance()"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded106.png");
formatter.write("\u003cb\u003eПроверяем, что балланс изменился на сумму пополнения\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма старого баланса и суммы пополнения: 20000\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса после пополнения: 20000\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на сумму пополнения\u003c/b\u003e");
formatter.result({
  "duration": 264716326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "отрицательное целое число",
      "offset": 9
    }
  ],
  "location": "CommonYotaPageSteps.filledAmount(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded107.png");
formatter.write("\u003cb\u003eВведено значение-141\u003c/b\u003e");
formatter.result({
  "duration": 212528408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Пополнить счет",
      "offset": 15
    }
  ],
  "location": "CommonYotaPageSteps.clickButton(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded108.png");
formatter.write("\u003cb\u003eНажата кнопка Пополнить\u003c/b\u003e");
formatter.result({
  "duration": 3333053224,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.chechkedBallance()"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded109.png");
formatter.write("\u003cb\u003eПроверяем, что балланс изменился на сумму пополнения\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма старого баланса и суммы пополнения: 19859\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса после пополнения: 19859\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на сумму пополнения\u003c/b\u003e");
formatter.result({
  "duration": 338398036,
  "status": "passed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.after({
  "duration": 2968361901,
  "status": "passed"
});
formatter.uri("3connectNewProduct.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Подключение нового продукта",
  "description": "",
  "id": "подключение-нового-продукта",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 942298,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Подключение нового продукта",
  "description": "",
  "id": "подключение-нового-продукта;подключение-нового-продукта",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "запущен тестовый сервис",
  "keyword": "Пусть "
});
formatter.step({
  "line": 5,
  "name": "открыт браузер",
  "keyword": "Когда "
});
formatter.step({
  "line": 6,
  "name": "введен url веб-приложения",
  "keyword": "И "
});
formatter.step({
  "line": 7,
  "name": "открыта стартовая страница",
  "keyword": "То "
});
formatter.step({
  "line": 8,
  "name": "выбран новый продукт",
  "keyword": "Когда "
});
formatter.step({
  "line": 9,
  "name": "перемещен слайдер на \"выбранный\" продукт",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "\"новые условия\" соответствуют \"новому\" продукту",
  "keyword": "То "
});
formatter.step({
  "line": 11,
  "name": "пополнен счет на \"сумму стоимости выбранного продукта\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 12,
  "name": "баланс изменился на сумму пополнения",
  "keyword": "То "
});
formatter.step({
  "line": 13,
  "name": "кнопка \"Подключить\" \"активна\"",
  "keyword": "И "
});
formatter.step({
  "line": 14,
  "name": "нажата кнопка \"Подключить\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 15,
  "name": "баланс уменьшился на стоимость продукта",
  "keyword": "То "
});
formatter.step({
  "line": 16,
  "name": "\"текущие условия\" соответствуют \"подключенному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "кнопка \"Подключить\" \"неактивна\"",
  "keyword": "И "
});
formatter.match({
  "location": "CommonYotaSteps.startApp()"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003e------ Запуск сервиса приложения -------\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess PID: 5328\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess Name: java.exe\u003c/b\u003e");
formatter.write("\u003cb\u003eFull command: java  -jar test-slider-1.0.0-SNAPSHOT.jar\u003c/b\u003e");
formatter.write("\u003cb\u003e------------------\u003c/b\u003e");
formatter.write("\u003cb\u003e5328\u003c/b\u003e");
formatter.write("\u003cb\u003eПроцессYOTA успешно ЗАПУЩЕН\u003c/b\u003e");
formatter.write("\u003cb\u003ePID процесса5328\u003c/b\u003e");
formatter.result({
  "duration": 14624701464,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openedBrowser()"
});
formatter.write("\u003cb\u003eОткрываем браузер\u003c/b\u003e");
formatter.result({
  "duration": 6814538161,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openApplication()"
});
formatter.write("\u003cb\u003eПереходим на http://localhost:4567\u003c/b\u003e");
formatter.result({
  "duration": 15302249867,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница тестового приложения Yota] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded110.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded111.png");
formatter.result({
  "duration": 650242978,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.selectNewProduct()"
});
formatter.write("\u003cb\u003eВыбираем новый продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eНовый продукт 21\u003c/b\u003e");
formatter.write("\u003cb\u003eНовые условия: \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость: 12.0 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость: 1300 руб. в месяц\u003c/b\u003e");
formatter.result({
  "duration": 721600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "выбранный",
      "offset": 22
    }
  ],
  "location": "CommonYotaPageSteps.moveToNewProductString(String)"
});
formatter.write("\u003cb\u003eПеремещаем слайдер на выбранный продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded112.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded113.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded114.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded115.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded116.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded117.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded118.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded119.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded120.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded121.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded122.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded123.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded124.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded125.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded126.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded127.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded128.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded129.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded130.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded131.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded132.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.result({
  "duration": 5032842163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "новому",
      "offset": 31
    }
  ],
  "location": "CommonYotaPageSteps.checkNewConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"новые условия\" соответствуют новому  продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded133.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 21 продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 658068833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "сумму стоимости выбранного продукта",
      "offset": 18
    }
  ],
  "location": "CommonYotaPageSteps.filledUpAccount(String)"
});
formatter.write("\u003cb\u003eПополнение счета на сумму выбранного продукта. Сумма: \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded134.png");
formatter.write("\u003cb\u003eВведено значение1300\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded135.png");
formatter.write("\u003cb\u003eНажата кнопка Пополнить\u003c/b\u003e");
formatter.result({
  "duration": 3645373644,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.chechkedBallance()"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded136.png");
formatter.write("\u003cb\u003eПроверяем, что балланс изменился на сумму пополнения\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма старого баланса и суммы пополнения: 1300\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса после пополнения: 1300\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на сумму пополнения\u003c/b\u003e");
formatter.result({
  "duration": 356585544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "активна",
      "offset": 21
    }
  ],
  "location": "CommonYotaPageSteps.checkConnectBtnDisabled(String)"
});
formatter.write("\u003cb\u003eПроверяем что кнопка \"Подключить\" активна\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded137.png");
formatter.write("\u003cb\u003eКнопка \"Поключить\" активна\u003c/b\u003e");
formatter.result({
  "duration": 258821163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Подключить",
      "offset": 15
    }
  ],
  "location": "CommonYotaPageSteps.clickButton(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded138.png");
formatter.write("\u003cb\u003eНажата кнопка подключить\u003c/b\u003e");
formatter.result({
  "duration": 252713403,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.checkBalanceAfterConnect()"
});
formatter.write("\u003cb\u003eПроверяем баланс после подключения продукта\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса до списания: 1300\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма списания: 1300.0\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на стоимость продукта\u003c/b\u003e");
formatter.result({
  "duration": 103867391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "подключенному",
      "offset": 33
    }
  ],
  "location": "CommonYotaPageSteps.checkCurrentConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"текущие условия\" соответствуют подключенному продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded139.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют 21 продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 719768015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "неактивна",
      "offset": 21
    }
  ],
  "location": "CommonYotaPageSteps.checkConnectBtnDisabled(String)"
});
formatter.write("\u003cb\u003eПроверяем что кнопка \"Подключить\" неактивна\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded140.png");
formatter.write("\u003cb\u003eКнопка \"Поключить\" неактивна\u003c/b\u003e");
formatter.result({
  "duration": 265151856,
  "status": "passed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.after({
  "duration": 2984751414,
  "status": "passed"
});
formatter.uri("4resetData.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Сброс данных",
  "description": "",
  "id": "сброс-данных",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 1012978,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Сброс данных",
  "description": "",
  "id": "сброс-данных;сброс-данных",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "запущен тестовый сервис",
  "keyword": "Пусть "
});
formatter.step({
  "line": 5,
  "name": "открыт браузер",
  "keyword": "Когда "
});
formatter.step({
  "line": 6,
  "name": "введен url веб-приложения",
  "keyword": "И "
});
formatter.step({
  "line": 7,
  "name": "открыта стартовая страница",
  "keyword": "То "
});
formatter.step({
  "line": 8,
  "name": "выбран новый продукт",
  "keyword": "Когда "
});
formatter.step({
  "line": 9,
  "name": "перемещен слайдер на \"выбранный\" продукт",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "\"новые условия\" соответствуют \"новому\" продукту",
  "keyword": "То "
});
formatter.step({
  "line": 11,
  "name": "пополнен счет на \"сумму стоимости выбранного продукта\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 12,
  "name": "баланс изменился на сумму пополнения",
  "keyword": "То "
});
formatter.step({
  "line": 13,
  "name": "кнопка \"Подключить\" \"активна\"",
  "keyword": "И "
});
formatter.step({
  "line": 14,
  "name": "нажата кнопка \"Подключить\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 15,
  "name": "баланс уменьшился на стоимость продукта",
  "keyword": "То "
});
formatter.step({
  "line": 16,
  "name": "\"текущие условия\" соответствуют \"подключенному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "кнопка \"Подключить\" \"неактивна\"",
  "keyword": "И "
});
formatter.step({
  "line": 18,
  "name": "нажата кнопка \"Сброс\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 19,
  "name": "баланс равен \"0\"",
  "keyword": "То "
});
formatter.step({
  "line": 20,
  "name": "\"текущие условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 21,
  "name": "\"новые условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.match({
  "location": "CommonYotaSteps.startApp()"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003e------ Запуск сервиса приложения -------\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess PID: 4100\u003c/b\u003e");
formatter.write("\u003cb\u003eProcess Name: java.exe\u003c/b\u003e");
formatter.write("\u003cb\u003eFull command: java  -jar test-slider-1.0.0-SNAPSHOT.jar\u003c/b\u003e");
formatter.write("\u003cb\u003e------------------\u003c/b\u003e");
formatter.write("\u003cb\u003e4100\u003c/b\u003e");
formatter.write("\u003cb\u003eПроцессYOTA успешно ЗАПУЩЕН\u003c/b\u003e");
formatter.write("\u003cb\u003ePID процесса4100\u003c/b\u003e");
formatter.result({
  "duration": 14722355774,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openedBrowser()"
});
formatter.write("\u003cb\u003eОткрываем браузер\u003c/b\u003e");
formatter.result({
  "duration": 7281482982,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.openApplication()"
});
formatter.write("\u003cb\u003eПереходим на http://localhost:4567\u003c/b\u003e");
formatter.result({
  "duration": 15282998537,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница тестового приложения Yota] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded141.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded142.png");
formatter.result({
  "duration": 429271039,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.selectNewProduct()"
});
formatter.write("\u003cb\u003eВыбираем новый продукт\u003c/b\u003e");
formatter.write("\u003cb\u003eНовый продукт 16\u003c/b\u003e");
formatter.write("\u003cb\u003eНовые условия: \u003c/b\u003e");
formatter.write("\u003cb\u003eСкорость: 7.1 Мбит/сек (макс.)\u003c/b\u003e");
formatter.write("\u003cb\u003eСтоимость: 1050 руб. в месяц\u003c/b\u003e");
formatter.result({
  "duration": 246679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "выбранный",
      "offset": 22
    }
  ],
  "location": "CommonYotaPageSteps.moveToNewProductString(String)"
});
formatter.write("\u003cb\u003eПеремещаем слайдер на выбранный продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded143.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded144.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded145.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded146.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded147.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded148.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded149.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded150.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded151.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded152.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded153.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded154.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded155.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded156.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded157.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка increase найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded158.png");
formatter.write("\u003cb\u003eНажата кнопка перехода на следующий продукт\u003c/b\u003e");
formatter.result({
  "duration": 4088660431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "новому",
      "offset": 31
    }
  ],
  "location": "CommonYotaPageSteps.checkNewConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"новые условия\" соответствуют новому  продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded159.png");
formatter.write("\u003cb\u003eНовые условия соответствуют 16 продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 669981241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "сумму стоимости выбранного продукта",
      "offset": 18
    }
  ],
  "location": "CommonYotaPageSteps.filledUpAccount(String)"
});
formatter.write("\u003cb\u003eПополнение счета на сумму выбранного продукта. Сумма: \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded160.png");
formatter.write("\u003cb\u003eВведено значение1050\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded161.png");
formatter.write("\u003cb\u003eНажата кнопка Пополнить\u003c/b\u003e");
formatter.result({
  "duration": 3820189717,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.chechkedBallance()"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded162.png");
formatter.write("\u003cb\u003eПроверяем, что балланс изменился на сумму пополнения\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма старого баланса и суммы пополнения: 1050\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса после пополнения: 1050\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на сумму пополнения\u003c/b\u003e");
formatter.result({
  "duration": 317814415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "активна",
      "offset": 21
    }
  ],
  "location": "CommonYotaPageSteps.checkConnectBtnDisabled(String)"
});
formatter.write("\u003cb\u003eПроверяем что кнопка \"Подключить\" активна\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded163.png");
formatter.write("\u003cb\u003eКнопка \"Поключить\" активна\u003c/b\u003e");
formatter.result({
  "duration": 262363792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Подключить",
      "offset": 15
    }
  ],
  "location": "CommonYotaPageSteps.clickButton(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded164.png");
formatter.write("\u003cb\u003eНажата кнопка подключить\u003c/b\u003e");
formatter.result({
  "duration": 346876488,
  "status": "passed"
});
formatter.match({
  "location": "CommonYotaPageSteps.checkBalanceAfterConnect()"
});
formatter.write("\u003cb\u003eПроверяем баланс после подключения продукта\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма баланса до списания: 1050\u003c/b\u003e");
formatter.write("\u003cb\u003eСумма списания: 1050.0\u003c/b\u003e");
formatter.write("\u003cb\u003eБаланс изменился на стоимость продукта\u003c/b\u003e");
formatter.result({
  "duration": 74706981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "подключенному",
      "offset": 33
    }
  ],
  "location": "CommonYotaPageSteps.checkCurrentConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"текущие условия\" соответствуют подключенному продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded165.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют 16 продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 524532029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "неактивна",
      "offset": 21
    }
  ],
  "location": "CommonYotaPageSteps.checkConnectBtnDisabled(String)"
});
formatter.write("\u003cb\u003eПроверяем что кнопка \"Подключить\" неактивна\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded166.png");
formatter.write("\u003cb\u003eКнопка \"Поключить\" неактивна\u003c/b\u003e");
formatter.result({
  "duration": 427487013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Сброс",
      "offset": 15
    }
  ],
  "location": "CommonYotaPageSteps.clickButton(String)"
});
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded167.png");
formatter.write("\u003cb\u003eНажата кнопка Сброс\u003c/b\u003e");
formatter.result({
  "duration": 3244913250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "CommonYotaPageSteps.copmareBalance(String)"
});
formatter.write("\u003cb\u003eПроверяем баланас на совпадение с числом 0\u003c/b\u003e");
formatter.write("\u003cb\u003eЗначние в поле баланс: 0\u003c/b\u003e");
formatter.write("\u003cb\u003eСравниваемое значение: 0\u003c/b\u003e");
formatter.result({
  "duration": 81539693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "бесплатному",
      "offset": 33
    }
  ],
  "location": "CommonYotaPageSteps.checkCurrentConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"текущие условия\" соответствуют бесплатному продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded168.png");
formatter.write("\u003cb\u003eТекущий условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 476880721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "бесплатному",
      "offset": 31
    }
  ],
  "location": "CommonYotaPageSteps.checkNewConditions(String)"
});
formatter.write("\u003cb\u003eПроверяем, \"новые условия\" соответствуют бесплатному  продукту\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded169.png");
formatter.write("\u003cb\u003eНовые условия соответствуют \"бесплатному\" продукту как и ожидалось\u003c/b\u003e");
formatter.result({
  "duration": 558322636,
  "status": "passed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.after({
  "duration": 2963202586,
  "status": "passed"
});
});