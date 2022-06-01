/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

/* var parseArray = [];

var previousEntriesJSON = localStorage.getItem('form-entries');

if (previousEntriesJSON !== null) {
  parseArray.push(JSON.parse(previousEntriesJSON));
  console.log(parseArray);
} */

window.addEventListener('beforeunload', saveEntries);

function saveEntries(event) {

  var $storage = JSON.stringify(data);

  localStorage.setItem('form-entries', $storage);

}
