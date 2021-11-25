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

  const innerTitle = document.createElement('div')
  innerTitle.classList.add('show-title');
  innerTitle.textContent = title;

  const innerAuthor = document.createElement('div')
  innerAuthor.classList.add('show-author');
  innerAuthor.textContent = author;

  const innerCategory = document.createElement('div')
  innerCategory.classList.add('show-category');
  innerCategory.textContent = category;

  newListItem.appendChild(innerTitle);
  newListItem.appendChild(innerAuthor);
  newListItem.appendChild(innerCategory);
  newListItem.classList.add('list-item');
  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);

  this.reset();
}