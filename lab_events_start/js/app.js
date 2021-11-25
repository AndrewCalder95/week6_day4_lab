document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (e) {
  e.preventDefault();
  // Get data from form
  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;
  // create a new li for submitted data
  const newListItem = document.createElement('li');
  // create div for title
  const innerTitle = document.createElement('div')
  innerTitle.classList.add('show-title');
  innerTitle.textContent = title;
  // create div for author
  const innerAuthor = document.createElement('div')
  innerAuthor.classList.add('show-author');
  innerAuthor.textContent = author;
  // create div for category
  const innerCategory = document.createElement('div')
  innerCategory.classList.add('show-category');
  innerCategory.textContent = category;
  // add divs as children to li
  newListItem.appendChild(innerTitle);
  newListItem.appendChild(innerAuthor);
  newListItem.appendChild(innerCategory);
  // add class to new li
  newListItem.classList.add('list-item');
  newListItem.classList.add('flex');
  // add new li to the existing ul
  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);
  // resets form
  this.reset();
}