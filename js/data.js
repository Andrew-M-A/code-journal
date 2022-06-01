/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('form-entries');

if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}

window.addEventListener('beforeunload', saveEntries);

function saveEntries(event) {

  var $storage = JSON.stringify(data);

  localStorage.setItem('form-entries', $storage);

}
