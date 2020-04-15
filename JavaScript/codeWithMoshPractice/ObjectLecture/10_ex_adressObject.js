//street
//city
//zipcode
//showAdress(adress)

let adress = {
  street: "a",
  city: "b",
  zipcode: "c",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAdress(address);
