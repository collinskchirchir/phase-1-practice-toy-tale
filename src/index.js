let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// Fetch Data from JSON db.json
function fetchToys()
{
  return fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(data => renderToys(data))
}

// Add each toy to card div``
function renderToys(toys)
{
  const toyCollection = document.querySelector('#toy-collection')
  toys.forEach(toy => {
    // Create Toy Name  Attribute
    const h2 = document.createElement('h2')
    h2.textContent = toy.name
    
    // Create Image Section
    const img = document.createElement('img');
    img.src = toy.image;
    img.setAttribute('class', 'toy-avatar');

    // Create Like Section
    const like = document.createElement('p')
    like.textContent = `${toy.likes} Likes`;
    
    // Create Button
    const btn = document.createElement('button');
    btn.setAttribute('class', 'like-btn');
    btn.setAttribute('id', `${toy.id}`);
    btn.textContent = 'Like ❤️'
    
    // Add to Card Items
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.appendChild(h2)
    card.appendChild(img)
    card.appendChild(like)
    card.appendChild(btn)
    
    // Add to container
    toyCollection.appendChild(card)
  })
  // console.log(toys)
}



document.addEventListener('DOMContentLoaded',function()
{
  fetchToys()})