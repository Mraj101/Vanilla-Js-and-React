const button = document.querySelector("#btn");
const item = document.querySelector("#item");

function appendItem() {
  const child = document.createElement("li");

  const itm = `
        <li>
            ${item.value} <button>delete</button>
        </li>
  `;
  child.innerHTML = itm;
  document.querySelector("ul").appendChild(child);
  item.value = "";
}
