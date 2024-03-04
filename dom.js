const first = document.getElementById('one')
const second = document.getElementById('one')


first.textContent = 'univelcity'
first.textContent = 'montgomery'

const val = 'ol li'
const third = document.querySelector(val)

const fourth = document.querySelectorAll('ol li')

third.innerText = 'aramide'

fourth[0].innerHTML = 'adebare'
fourth[3].innerText = 'kosi'
fourth[4].innerText = 'ebade'
fourth[1].innerText = 'efosa'

const lists = document.querySelectorAll('ul li')
lists[6].textContent = 'yes it is seventh'
lists[4].textContent = 'yes it is fifth'

const listId = document.querySelectorAll('#one')
listId[1].textContent = 'i\'m an Id'

const listClass = document.getElementsByClassName('two')
listClass[2].innerText = 'habeeb'

const qClass = document.querySelectorAll('.two')
qClass[3].innerText = 'aisha'

qClass[1].innerHTML = 'My name is <strong>Habeeb</strong>'