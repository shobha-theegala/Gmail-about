const accordion = document.getElementsByClassName('containers');
console.log("kjhwddwdd",accordion)
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
