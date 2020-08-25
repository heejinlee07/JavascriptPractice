const person = {
  name: "mosh",
  age: 30
};

for (let key in person) console.log(key, person.key);
/*dot notation을 사용하면 프로퍼티의 값을 보여주는데, 
person 오브젝트 안에는 key라는 프로퍼티 키가 없으므로 사용할 수 없다.
따라서 undefined가 나온다.*/

for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

/*
//dot notation
person.name;
//bracket notation
person["name"]; //코드를 작성할 당시에는 어떤 property에 접근할지 모르고, runtime 때 계산된다.
*/

//for-of
for (let color of colors) console.log(color);
