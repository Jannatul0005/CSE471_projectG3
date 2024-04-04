window.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/items');
    const items = await response.json();

    const itemsList = document.getElementById('items-list');

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.description}`;
        itemsList.appendChild(li);
    });
});
