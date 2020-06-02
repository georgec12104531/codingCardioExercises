document.querySelector('.one').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('one has been clicked');
})

document.querySelector('.two').addEventListener('click', () => {
  console.log('two has been clicked')
})

document.querySelector('.three').addEventListener('click', () => {
  console.log('three has been clicked')
})

document.querySelector('.four').addEventListener('click', () => {
  console.log('four has been clicked')
})
