let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  let title = document.querySelector('#main-title')

  title.textContent = 'Welcome!'


  // Part 2

  document.body.style.backgroundColor = 'red'


  // Part 3

  let fav = document.getElementById("favorite-things")

  fav.removeChild(fav.lastElementChild)


  // Part 4

 let font2 = document.querySelectorAll('.special-title')

 font2.forEach((element) => {
  element.style.fontSize = '2rem'
});


  // Part 5


  let past = document.querySelector("#past-races")

  past.removeChild(past.childNodes[7])
  
  // Part 6

  const li = document.createElement('li')
  li.textContent = 'CITY'

  const ul = document.querySelector("#past-races")
    ul.appendChild(li)

  // Part 7

  const div = document.createElement('div')

  div.className = 'blog-post'

  document.body.appendChild(div)

  const h2 = document.createElement('h2')
  h2.textContent = li.textContent


  const p = document.createElement('p')
  p.textContent = 'Lorem'

  
  div.appendChild(h2)
  div.appendChild(p)

  console.dir(div)
  console.log(document.querySelectorAll("h1"))
  console.log(document.querySelectorAll("h2"))

  // Part 8


  // Part 9




});
