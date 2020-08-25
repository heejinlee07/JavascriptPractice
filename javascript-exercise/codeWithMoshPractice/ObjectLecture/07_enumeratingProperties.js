const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key);
for (let key in circle) console.log(key, circle[key]);
//bracket notation to get the value of this key or this property.

//for (let key of circle) console.log(key);
//TypeError: because circle is not iterable.
//REMIND: object is not iterable.
//for...of loop can only be used with iterables such as arrays,maps.

/**
 * using Object.keys method, we can get all the keys in object.
 * this will return an array. since array are iterable.
 * this method returns a string array which contains
 * all the properties and method in this object.
 * */
for (let key of Object.keys(circle)) console.log(key);

/**
 * using this method, instead of returning the keys as a string array
 * it returns each value pair as an array.
 */
for (let entry of Object.entries(circle)) console.log(entry);

//if a given object has a given property or method
//exists in an object
if ("radius" in circle) console.log("yes");
