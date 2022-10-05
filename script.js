let arr = [];
const createListItem = (className, name) => {
	const listItem = document.createElement('label');
	listItem.classList = className;
	listItem.innerHTML = `
	<input type="checkbox" class="item-checkbox">
	<p class="item-name">${name}</p>
	
	`;
	const deleteItemLink = document.createElement('a')
	deleteItemLink.setAttribute('href','#')
	deleteItemLink.classList = 'delete-link'
	deleteItemLink.innerText = 'Удалить'
	deleteItemLink.addEventListener('click',(e) => {
		e.preventDefault()
		let deleteItemInd = arr.indexOf(deleteItemLink.parentElement.innerText.split('\n')[0]);
		console.log(deleteItemInd)
		arr.splice(deleteItemInd,1)
		console.log(arr)
		console.log(deleteItemLink.parentElement.innerText.split('\n')[0])
		deleteItemLink.parentElement.remove();
	})
	listItem.appendChild(deleteItemLink)
	return listItem;
}
const itemsList = document.getElementById('list');
const itemName = document.getElementById('name');
const itemForm = document.getElementById('form');
const rstBtn = document.querySelector('.reset-list').addEventListener('click', () => {
	itemsList.innerHTML = ''
	itemId = 0;
	arr = []
})
itemForm.onsubmit = () => {
	itemsList.appendChild(createListItem('item', itemName.value.charAt(0).toUpperCase() + itemName.value.slice(1)))
	arr.push(itemName.value.charAt(0).toUpperCase() + itemName.value.slice(1))
	console.log(arr)
	itemName.value = '';
}

const srtBtn = document.querySelector('.sort-btn').addEventListener('click', () => {
	arr.sort();
	console.log(arr)
	itemsList.innerHTML = ''
	for(let i = 0; i < arr.length; i++) {
		itemsList.appendChild(createListItem('item',arr[i]))
	}
})