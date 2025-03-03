/* const fs = require('fs');

console.log("first");

fs.readFile(`${__dirname}/test.txt`, 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log("second");

  console.log(data);
});
console.log(result);

console.log("third"); */

const fs = require('fs/promises');

const getData = async () => {
  /* try {
    const result = await fs.readFile(`${__dirname}/testt.txt`, 'utf8');
    return result;
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log("nem találom a fájlt");
    }
  } */

  return fs.readFile(`${__dirname}/test.json`, 'utf8')
    .then(result => JSON.parse(result))
    .catch(err => {
      if (err.code === 'ENOENT') console.log("nem találom a fájlt")
    })
    .finally(() => {
      console.log("i am running anyways")
    })
}

const processData = async () => {
  const data = await getData();
  if (data === undefined) {
    console.log("404, cannot find data");
  } else {
    console.log("data: ", data);
  }
}

processData();