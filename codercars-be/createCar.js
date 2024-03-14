const fs = require("fs");
const csv = require("csvtojson");

const createCar = async () => {
  let newData = await csv().fromFile(
    "D:\\Github\\CoderCars\\codercars-be\\data.csv"
  );

  newData = newData.map((e) => {
    return {
      make: e.Make,
      model: e.Model,
      size: e["Vehicle Size"],
      transmission_type: e["Transmission Type"],
      price: e.MSRP,
      release_date: e.Year,
      isDeleted: false,
    };
  });

  fs.writeFileSync(
    "D:\\Github\\CoderCars\\codercars-be\\cars.json",
    JSON.stringify(newData)
  );
  console.log("done");
};

createCar();
