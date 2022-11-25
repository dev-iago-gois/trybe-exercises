// const notePerson = 2;
const notePerson = 80;

if (notePerson >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (notePerson < 80 && notePerson >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (notePerson < 60) {
  console.log("Você foi reprovada(o)");
}
