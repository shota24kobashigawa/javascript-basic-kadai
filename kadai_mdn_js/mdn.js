const date = new Date();
const [mouth, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

console.log(year + '年' + mouth + '月' + day + '日');