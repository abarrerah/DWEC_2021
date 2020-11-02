const typeMusic = {
  Rock: "Rock",
  Pop: "Pop",
  Punk: "Punk",
  Indie: "Indie",
  Metal: "Metal",
};

function Disk() {
  this.name = "";
  this.group = "";
  this.year = "";
  this.type = "";
  this.location = 0;
  this.lend = false;

  this.properties = function (name, author, year, typeM, loc, lend) {
    this.name = name;
    this.group = author;
    this.year = year;
    this.type = typeM;
    this.location = loc;
    this.lend = lend;
  };
  this.changePosition = function (loc) {
    this.location = loc;
  };
  this.isLend = function (lend) {
    this.lend = lend;
  };
  this.showInfo = function () {
    alert(
      "NAME: " +
        this.name +
        "\n" +
        " GROUP/AUTHOR: " +
        this.group +
        "\n" +
        " YEAR: " +
        this.year +
        "\n" +
        " TYPE: " +
        this.type +
        "\n" +
        " LOCATION: " +
        this.location +
        "\n" +
        " LEND: " +
        this.lend
    );
  };
}

let TwilightOfTheThunderGod = new Disk();
let Deustchland = new Disk();
let Magma = new Disk();

TwilightOfTheThunderGod.properties(
  "Twilight of The Thunder God",
  "Amon Amarth",
  "2008",
  typeMusic.Metal,
  5,
  false
);
Deustchland.properties(
  "Deustchland",
  "Rammstein",
  "2019",
  typeMusic.Metal,
  4,
  false
);
Magma.properties("Magma", "Gojira", "2016", typeMusic.Metal, 7, false);

let diskArray = [];

diskArray.push(TwilightOfTheThunderGod);
diskArray.push(Deustchland);
diskArray.push(Magma);

onload = application();

function application() {
  let info = prompt(
    "1.-Show number of records \n 2.-List all records \n 3.-Inteval of records \n 4.-Add a new record \n 5.-Delete a record \n 6.-Ask for a record"
  );

  switch (info) {
    case "1":
      alert(diskArray.length);
      break;
    case "2":
      let options = prompt(
        "1.-Normal order \n 2.-Reverse order \n 3.-Alphabetic order"
      );
      switch (options) {
        case "1":
          for (let index = 0; index < diskArray.length; index++) {
            document.write(diskArray[index].showInfo());
          }
          break;
        case "2":
          for (let index = diskArray.length - 1; index >= 0; index--) {
            document.write(diskArray[index].showInfo());
          }
          break;
        case "3":
          let newArray = diskArray.slice();

          newArray.sort(function (a, b) {
            let infoA = a.name;
            let infoB = b.name;
            return infoA < infoB ? -1 : infoA > infoB ? 1 : 0;
          });
          for (let i = 0; i < newArray.length; i++) {
            document.write(newArray[i].showInfo());
          }
          break;
        default:
          alert("Wrong number. The application is going to close ");
          break;
      }
      break;

    case "3":
      let init = prompt(
        "Please, tell me where do you want to start the interval: "
      );
      init = Number(init);
      let end = prompt(
        "Please, tell me where do you want to finish the interval: "
      );
      end = Number(end);

      for (let i = init; i <= end; i++) {
        document.write(diskArray[i].showInfo());
      }
      break;
    case "4":
      alert("Let´s create a new record");
      let newDiskName = prompt("NAME: ");

      let newDiskGroup = prompt("GROUP OR AUTHOR: ");
      let newDiskYear = prompt("RELEASE YEAR: ");
      let newDiskType = prompt(
        "Type of music. I will show all the available options\n 1.ROCK \n 2.POP \n 3.INDIE \n 4.PUNK \n 5.METAL "
      );
      switch (newDiskType) {
        case "1":
          newDiskType = typeMusic.Rock;
          break;
        case "2":
          newDiskType = typeMusic.Pop;
          break;
        case "3":
          newDiskType = typeMusic.Indie;
          break;
        case "4":
          newDiskType = typeMusic.Punk;
          break;
        case "5":
          newDiskType = typeMusic.Metal;
          break;
      }
      let newDiskLocation = prompt("Insert the location in number");
      newDiskLocation = Number(newDiskLocation);
      let newDiskLend = prompt("Is lend? Insert 1 if is true or 2 if is false");
      switch (newDiskLend) {
        case "1":
          newDiskLend = true;
          break;
        case "2":
          newDiskLend = false;
          break;
      }
      let newRecord = new Disk();
      newRecord.properties(
        newDiskName,
        newDiskGroup,
        newDiskYear,
        newDiskType,
        newDiskLocation,
        newDiskLend
      );
      let insert = prompt(
        "Do you want insert a new record at start(option 1) or in the end(option 2)?."
      );
      switch (insert) {
        case "1":
          diskArray.unshift(newRecord);

          for (let i = 0; diskArray.length; i++) {
            document.write(diskArray[i].showInfo());
          }
          break;
        case "2":
          diskArray.push(newRecord);
          for (let i = 0; diskArray.length; i++) {
            document.write(diskArray[i].showInfo());
          }
          break;
        default:
          alert("Wrong number. The application is going to close");
          break;
      }
      break;
    case "5":
      let destroy = prompt(
        "Do you want to delete a record at start(option 1) or in the end(option 2)?"
      );
      switch (destroy) {
        case "1":
          diskArray.shift();
          for (let index = 0; index < diskArray.length; index++) {
            document.write(diskArray[index].showInfo());
          }
          break;
        case "2":
          diskArray.pop();
          for (let index = 0; index < diskArray.length; index++) {
            document.write(diskArray[index].showInfo());
          }
          break;
      }
      break;
    case "6":
      let ask = prompt(
        "Do you want to ask for some record by position(option 1) or by name(option 2)?"
      );
      switch (ask) {
        case "1":
          let askPos = prompt("Insert the number");
          askPos = Number(askPos);
          document.write(diskArray[askPos].showInfo());
          break;
        case "2":
          let askName = prompt("Insert the name");
          for (let i = 0; i < diskArray.length; i++) {
            if (diskArray[i].name == askName) {
              document.write(diskArray[i].showInfo());
            }
          }
          break;
      }
      break;
  }
}
