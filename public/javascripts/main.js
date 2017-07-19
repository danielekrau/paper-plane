$(function() {

  $("#mainForm").submit(function(e) {
    var url = "/search";
    $.post(url, $("#mainForm").serialize(), function(data) {
      injectResults(data);
    });
    e.preventDefault();
  });

  $("#continentSelect").change(function(e) {
    var url = "/countries/" + $("#continentSelect").val();
    $.get(url, function(data) {
      injectCountries(data);
    }, 'json');
  });

})

/*
  Inject search results into DOM
*/
function injectResults(data) {
  if(!data) return;
  $('#resultsContainer').html('');
  $('#resultsContainer').html(data);
}

/*
  Inject countries select options into DOM
*/
function injectCountries(data) {
  if(!data) return;
  $('#countrySelect option').not(':first-child').remove();
  for(var i = 0; i < data.length; i++) {
    $('<option/>', {
      text: data[i].name,
      value: data[i].name
    }).appendTo("#countrySelect");
  }
}

/*
  Clear the search
*/
function cancelSearch() {
  $('#resultsContainer').html('');
}
