const input = document.querySelector('.search');
const items = Array.from(document.querySelectorAll('.item-list ul li'));
const emptyInfo = document.querySelector('.item-list p')

const searchEngine = () => {
    const searchedItems = [];
    items.forEach(item => {

        itemValue = item.textContent.toLowerCase()
        inputValue = input.value.toLowerCase()

        if(itemValue.includes(inputValue)){
            item.style.display = 'block'
            searchedItems.push(item)
        }
        else{
            item.style.display = 'none'
        }
    
        if(searchedItems.length === 0){
            emptyInfo.style.display = 'block'
        }
        else{
            emptyInfo.style.display = 'none'
        }
    })
}

input.addEventListener('keyup', searchEngine)