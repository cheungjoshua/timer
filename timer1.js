const input = process.argv.slice(2);
const arr = input.sort();

let timer = 0;
for (const beep of arr) {
  timer = beep * 1000;
  console.log(timer);
  setTimeout(() => {
    process.stdout.write("\x07");
    console.log(".");
  }, timer);
}
