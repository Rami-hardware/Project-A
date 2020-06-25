//insert all conrties
let dropdown = $('#contry-list');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Select your contry</option>');
dropdown.prop('selectedIndex', 0);

const url = '/JS/data.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.name).text(entry.name));
  })
});
