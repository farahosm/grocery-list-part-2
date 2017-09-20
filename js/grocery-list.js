const listCount = document.getElementById("count");

const listTarget = document.getElementById("grocery-list");

const newButton = document.getElementById("btn-new");

const addItemButton = document.getElementById("btn-add-item");

const itemTextInput = document.getElementById("input-item");

const form = document.getElementById("form-add-item");


newButton.addEventListener("click", function() {
    form.removeAttribute("class");
    newButton.setAttribute("class", "hide");
});


addItemButton.addEventListener("click", function(event) {
    newButton.removeAttribute("class");
    form.setAttribute("class", "hide");
    let itemText = itemTextInput.value.trim();
    if (itemText != ""){
        createListItem(itemText);
        updateCountBy(1);
    }
    itemTextInput.value = "";
    event.preventDefault();
	savelistItem();
});


function createListItem(text){
    let listItem = document.createElement("li");
    let span = document.createElement("span");
    let spanText = document.createTextNode(text);
    span.appendChild(spanText);
    listItem.appendChild(span);
	savelistItem();
    
    let icon = document.createElement("i");
    icon.setAttribute("class", "glyphicon glyphicon-remove");
    listItem.appendChild(icon);
    
    listTarget.appendChild(listItem);
    listItem.addEventListener("click", function(){
        removeListItem(listItem);
    });
}

function removeListItem(item){
    listTarget.removeChild(item);
    updateCountBy(-1);
	savelistItem();
}

function updateCountBy(num){
    let text = listCount.childNodes[0].nodeValue;
    let count = parseInt(text);
    listCount.childNodes[0].nodeValue = count + num;
}


function savelistItem(){
		var str = localStorage.setItem(itemTextInput.value.trim(), str);
		listItem = JSON.stringify(str);
		if (listItem = ""){
    	let listItem = document.createElement("li");
    	let span = document.createElement("span");
    	let spanText = document.createTextNode(text);
    	span.appendChild(spanText);
    	listItem.appendChild(span);
		console.log(listItem);
}
}


function getSavetItem(){
var str = localStorage.getItem(itemTextInput.value.trim(), str);
	listItem = JSON.parse(str);
    if (listItem = "" ){
	let text = listCount.childNodes[0].nodeValue;
    let count = parseInt(text);
    let listItem = document.createElement("li");
    let span = document.createElement("span");
    let spanText = document.createTextNode(text);
    span.appendChild(spanText);
    listItem.appendChild(span);
	console.log(listItem);
}
}

savelistItem();
