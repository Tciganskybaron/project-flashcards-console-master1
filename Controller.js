const readlineSync = require('readline-sync');

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  run() {
    this.model.getFilesAllname('./topics').then((el) => {
      const cat = readlineSync.keyInSelect(el, 'Выберите тему;)');
      return console.log(cat);
    });
    // console.log(`Ok, ${el[index]} goes to your room.`));
    // ...rfefgerfgerferf
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом
    // this.model.readTopics(this.printTopicsController)
  }

  printTopicsController(topicsMenu) {
    // Тут нужно попросить экземпляр класса view вывести меню пользователю,
    // а также дождаться ответа последнего
  }
}

module.exports = Controller;
