/* show/hide sublevel elements */
function toggleList(btn) {
  elems = btn.id;
  let arr = Array.from(document.getElementsByClassName(elems));
  if (btn.classList.contains('more')) {
    arr.forEach(item => {
      item.style.display = 'grid'
    })
    btn.classList.remove('more')
  } else {
    arr.forEach(item => {
      item.style.display = 'none'
    })
    btn.classList.add('more')
  }
}

const hoverDivs = document.getElementsByClassName('hover-effect')
if (hoverDivs){
  const Arr = Array.from(hoverDivs)
  Arr.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
      console.log('mouseenter')
      const parent = item.parentElement
      const parentChildren = Array.from(parent.children);
      index = parentChildren.indexOf(item)
      console.log(index)

      const allRows = Array.from(document.getElementsByClassName('table-grid-row'))

      allRows.forEach(item => {
        item.children[index].classList.add('hover-column')
      })
    })
    item.addEventListener('mouseleave', (event) => {
      console.log('mouseleave')
      const parent = item.parentElement
      const parentChildren = Array.from(parent.children);
      index = parentChildren.indexOf(item)
      console.log(index)

      const allRows = Array.from(document.getElementsByClassName('table-grid-row'))

      allRows.forEach(item => {
        item.children[index].classList.remove('hover-column')
      })
    })
  })
}


const mobileMenu = document.getElementById('offcanvasMenu')
const bsMenu = new bootstrap.Offcanvas(mobileMenu)
function openMenu(btn) {
  bsMenu.toggle()
  mobileMenu.addEventListener('shown.bs.offcanvas', function () {
    btn.classList.add('close')
  })
  mobileMenu.addEventListener('hidden.bs.offcanvas', function () {
    btn.classList.remove('close')
  })
}


const swiper = new Swiper('.swiper-1', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});