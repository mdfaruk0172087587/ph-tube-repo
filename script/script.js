const buttonCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await response.json();
    buttonsCategories(data.categories)
}
buttonCategories();
const buttonsCategories = (button) => {
    const btnContainer = document.getElementById('btn-container');
    button.forEach(btn => {
        // console.log(btn)
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-red-600 hover:text-white">${btn.category}</button>
    `;
        btnContainer.appendChild(btnDiv);
    })
}