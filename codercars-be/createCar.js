const fs = require("fs");
const csv = require("csvtojson");

const createCar = async () => {
  let newData = await csv().fromFile(
    "D:\\Github\\CoderCars\\codercars-be\\data.csv"
  );

  newData = newData.map((e) => {
    return {
      Name: e.Make,
      Style: e.Model,
      Size: e["Vehicle Size"],
      Transmission: e["Transmission Type"],
      Price: e.MSRP,
      Year: e.Year,
    };
  });

  fs.writeFileSync(
    "D:\\Github\\CoderCars\\codercars-be\\cars.json",
    JSON.stringify(newData)
  );
  console.log("done");
};

createCar();
