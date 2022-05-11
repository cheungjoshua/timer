const input = process.argv.slice(2);
const arr = input.sort();

let timer = 0;
for (let beep of arr) {
  beep = beep * 1000;
  timer = timer + beep;
  console.log(timer);
  setTimeout(() => {
    process.stdout.write("\x07");
  }, timer);
}
