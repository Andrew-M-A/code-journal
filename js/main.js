var $photoUrl = document.getElementById('photo-url');

var $img = document.querySelector('img');

function updateImg(event) {
  $img.setAttribute('src', event.target.value);
}

$photoUrl.addEventListener('input', updateImg);

function getEntries(event) {
  event.preventDefault();

}
var $form = document.querySelector('form');
$form.addEventListener('submit', getEntries);
