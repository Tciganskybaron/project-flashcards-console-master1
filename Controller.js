const readlineSync = require('readline-sync');
const fs = require('fs');

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  run() {
    this.model.getFilesAllname('./topics').then((el) => {
      const cat = readlineSync.keyInSelect(el, 'Выберите тему;)');
      const newArrey = [];
      if (cat === 0) {
        newArrey.push(fs.readFileSync('./topics/Singer', 'utf-8'));
      } if (cat === 1) {
        newArrey.push(fs.readFileSync('./topics/Star_Wars', 'utf-8'));
      } if (cat === 2) {
        newArrey.push(fs.readFileSync('./topics/География', 'utf-8'));
      }
      console.log(newArrey.join().split('\n').slice(0, -1));
    });
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
