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

      if (cat === -1) console.clear() || console.log('😱 GAME OVER!!! 😱');

      const newArrey = [];
      if (cat === 0) {
        newArrey.push(fs.readFileSync('./topics/Singer', 'utf-8'));
      }
      if (cat === 1) {
        newArrey.push(fs.readFileSync('./topics/Star_Wars', 'utf-8'));
      }
      if (cat === 2) {
        newArrey.push(fs.readFileSync('./topics/География', 'utf-8'));
      }
      let questions = newArrey.join().split('\n').slice(0, -1);

      ////////////////////////////////////////////////////////

      let scores = 0;

      const answer = readlineSync.question(`${questions[0]}`);
      answer.toLowerCase() === questions[1].toLowerCase()
        ? console.log(`👍 scores + ${(scores += 10)}`)
        : console.log(`💩 scores ${scores}`);

      const answer1 = readlineSync.question(`${questions[2]}`);
      answer1.toLowerCase() === questions[3].toLowerCase()
        ? console.log(`🤗 scores + ${(scores += 10)}`)
        : console.log(`👹 scores ${scores}`);

      const answer2 = readlineSync.question(`${questions[4]}`);
      answer2.toLowerCase() === questions[5].toLowerCase()
        ? console.log(`😁 scores + ${(scores += 10)}`)
        : console.log(`🤬 scores ${scores}`);

      console.log('Final score :', scores);
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
