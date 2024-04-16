const $ = document;

const closeMenuButton = $.querySelector('#closeMenuButton');
const openMenuButton = $.querySelector('#openMenuButton');
const menuItemsContainer = $.querySelector('#menuItemsContainer');

const mobileMenu = $.querySelector('#mobileMenu');

openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden-menu');
  // close menu when click outside
})

document.addEventListener('click', (e) => {
  const items = [...menuItemsContainer.children]
  items.forEach(item => {
    if (e.target === item.firstChild) {
      mobileMenu.classList.add('hidden-menu');
    }
  })
})
closeMenuButton.onclick = () => {
  mobileMenu.classList.toggle('hidden-menu');
}
