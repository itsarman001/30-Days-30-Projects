const items = [
  { name: "Dolphin", class: "WaterAnimal" },
  { name: "Cucumber", class: "Vegetable" },
  { name: "Tesla Model S", class: "Car" },
  { name: "Tiger", class: "Animal" },
  { name: "Apple", class: "Fruit" },
  { name: "Salmon", class: "WaterAnimal" },
  { name: "Broccoli", class: "Vegetable" },
  { name: "Ford Mustang", class: "Car" },
  { name: "Elephant", class: "Animal" },
  { name: "Orange", class: "Fruit" },
  { name: "Shark", class: "WaterAnimal" },
  { name: "Spinach", class: "Vegetable" },
  { name: "Porsche 911", class: "Car" },
  { name: "Lion", class: "Animal" },
  { name: "Banana", class: "Fruit" },
  { name: "Octopus", class: "WaterAnimal" },
  { name: "Carrot", class: "Vegetable" },
  { name: "Chevrolet Corvette", class: "Car" },
  { name: "Giraffe", class: "Animal" },
  { name: "Strawberry", class: "Fruit" },
];

const listItems = (item) => {
    
}

const showItems = () => {
  const listCont = document.getElementById("list-cont");
  listCont.innerHTML = "";
  items.map((item) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    listCont.appendChild(div);
  });
};


const filterItems = (e) => {
  const listCont = document.getElementById("list-cont");
  listCont.innerHTML = "";
  const item = items.filter((item) => item.class === e);
  console.log(item);
  item.map((item) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    listCont.appendChild(div);
  });
};
