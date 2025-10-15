//sessionstorage

// let like = seesionStorage.getItem('like')
// if (seesionStorage.getItem.getItem('like') === null)
//     sessionStorage.setItem('like', like)
// alert(sessionStorage.getItem('like'))

//localStorage
let like = localStorage.getItem('like')
if (like === null) localStorage.setItem('like', like)
else localStorage.setItem('like', ++like)
alert(localStorage.getItem('like'))