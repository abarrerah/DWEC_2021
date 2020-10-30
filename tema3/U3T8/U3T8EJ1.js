alert("Let storage the record");

let n = prompt("Insert the name");
if (n instanceof String) {
  let g = prompt("Insert the group or author");
  if (g instanceof String) {
    let y = prompt("Insert the published year");
    if (!isNaN(y)) {
      let t = prompt("Insert the genre");

      let lc = prompt("Insert the location");
      if (!isNaN(lc)) {
        let l = prompt("The disk is lend? only yes or no");
      } else {
        alert("location not is a number");
      }
    } else {
      alert("The year is not a number");
    }
  } else {
    alert("Is not a string");
  }
} else {
  alert("Is not a string");
}

let disk = {
  name: n,
  group: g,
  year: y,
  type: t,
  loc: lc,
  lend: l,
};

console.log(disk);
