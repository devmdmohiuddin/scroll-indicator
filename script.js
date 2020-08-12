// window.onscroll = () => {
//   myFuction()
// }

// const myFuction = () => {
//   let winScroll = document.body.scrollTop ||
//     document.documentElement.scrollTop
//   let height = document.documentElement.scrollHeight -
//     document.documentElement.clientHeight
//   let scrolled = (winScroll / height) * 100
  
//   let myBar = document.querySelector('#myBar')
//   myBar.style.width = scrolled + '%'
// }

window.onscroll = () => {
  scrollIndicator()
}

const scrollIndicator = () => {
  let scrollNumber = document.body.scrollTop ||
    document.documentElement.scrollTop
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let isScrolled = (scrollNumber / scrollHeight) * 100

  const myBar = document.querySelector('#myBar')
  myBar.style.width = `${isScrolled}%`
}