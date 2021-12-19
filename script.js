var win;
function exit(param) {
    param.alert('Внимание! Окно будет закрыто!');
    param.close();
}
function new_form() {
    var x, y;
    x = (window.outerWidth - 300) / 2 + window.screenX;
    y = (window.outerHeight - 200) / 2 + window.screenY;
    win = window.open('', 'w1', 'height=200, width=300, left=' + x + ',top=' + y);
    win.document.write('<h2>Заголовок текста</h2>');
    win.document.write(
        '<p>JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.</p>'
    );
    win.document.write('<p align="center"><a href="http://dstu.education" target="_blank">ДонГТУ</a></p>');

    win.document.write('<p align="center"><input type="button" value="Закрыть" name="B1" onclick="opener.exit(opener.win);"></p>');
}
function start() {
    //переменные для координат окна
    var x, y;
    //window.outerWidth, window.outerHeight - ширина ивысота всего окна браузера
    //window.screenX, window.screenY - положение окна браузера на экране
    w = (window.outerWidth - 350) / 2 + window.screenX;
    h = (window.outerHeight - 270) / 2 + window.screenY;
    //открываем окно с координатами по центру экрана
    //в переменную win записываем ссылку на окно
    var win = window.open('', 'w1', 'height=270, width=350, left = ' + w + ', top = ' + h);
    //через переменную выводим текст в окно
    win.document.write('<h2>Новое окно</h2>');
    win.document.write('<p>JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб - страницам.</p>');
    //выводим гиперссылку
    win.document.write('<p align="center">  <a href = "http://alit.16mb.com" target = "_blank"> ИТ ДонГТУ </a></p>');
    //выводим кнопку. Код закрытия вставим в сам тег
    win.document.write('<p align="center"><input type="button" value="Закрыть" name="B1" onclick="opener.exit(opener.win);"></p>');
}