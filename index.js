var readlineSync = require('readline-sync');
const chalk = require('chalk');

const questionsList = [
  {
    question: `
        How many hashira are there?
        a: 4
        b: 8
        c: 3
        d: 9
    `,
    answer: 'd',
  },
  {
    question: `
        What sword style does Zenitsu have?
        a:  thunder breathing style
        b:  flame breathing style
        c:  water breathing style
        d:  no style
    `,
    answer: 'a',
  },

  {
    question: `
        What sword style does Tanjiro have?
        a:  thunder breathing style
        b:  flame breathing style
        c:  water breathing style
        d:  no style
    `,
    answer: 'c',
  },
  {
    question: `
        Is rengoku a hashira or zenitsu?
        a:  rengoku
        b:  zenitsu
        
    `,
    answer: 'a',
  },
  {
    question: `
        How many sword styles does tanjiro have?
        a:  water & flame
        b:  just water
        c:  thunder & flame
        d:  just flame
    `,
    answer: 'a',
  },
  {
    question: `
        Who is the youngest Hashira?
        a:  Mitsuri Kanroji, Love Pillar
        b:  Shinobu Kocho, Insect Pillar
        c:  Muichiro Tokito, Mist Pillar
        d:  Giyu Tomioka, Water Pillar
    `,
    answer: 'c',
  },
  {
    question: `
        Who is the slayer that has a self-taught breathing style??
        a:  Inosuke Hashibira
        b:  Kanao Tsuyuri
        c:  Zenitsu Agatsuma
        d:  Murata
    `,
    answer: 'a',
  },
  {
    question: `
        What is Rui’s rank?
        a:  Lower Rank 3
        b:  Lower Rank 1
        c:  Lower Rank 2
        d:  Lower Rank 5
    `,
    answer: 'd',
  },
  {
    question: `
        What is Nezuko's blood demon art?
        a:  Explosive blood
        b:  blood burst
        c:  Exploding blood
        
    `,
    answer: 'c',
  },
];

let score = 0;

const highScores = [4, 5]; //these are the high scores

//name of the user
const userName = readlineSync.question("Hi, what's your name? ");

console.log(
  chalk.yellowBright(
    `Welcome to Demon Slayer Quiz game ${chalk.cyan.bold.italic(
      userName.toUpperCase()
    )}`
  )
);

//Rules for the game
console.log(chalk.yellow('------------------------------'));
console.log(chalk.yellow.inverse('Rules:'));
console.log(chalk.yellow('This is a quiz game'));
console.log(chalk.yellow('If you answer right your score will increase by 1'));
console.log(chalk.yellow('If you answer wrong your score will decrease by 1'));
console.log(chalk.yellow('Please type a,b,c or d for answer'));

const play = (question, answer) => {
  let ans = readlineSync.question(question);
  if (ans.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(chalk.green.bold('Right answer!'));
  } else {
    score--;
    console.log(chalk.red.bold('Wrong answer'));
  }
  console.log(chalk.yellowBright(`current score: ${score}`));
}; // function to check the answers.

const checkWithHighScores = (score) => {
  for (let i = 0; i < highScores.length; i++) {
    if (highScores[i] < score) {
      if (highScores[i + 1] < score) {
        console.log(
          chalk.green.bold.inverse(
            `Congrats!! ${userName.toUpperCase()} You have a new high score`
          )
        );
        console.log(
          chalk.green.bold.inverse(
            `Please send a screenshot of your score to update the High Scores list!`
          )
        );
      }
      break;
    }
  }
};

for (let item of questionsList) {
  console.log('----------------------------');
  play(item.question, item.answer);
} // loop to start the Quiz

checkWithHighScores(score); //comparing user's score with the high scores

console.log(chalk.yellow(`High scores: ${highScores}`));
console.log(chalk.blue.bold(`Your Final score: ${score}`));
