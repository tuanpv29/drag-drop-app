function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
}