$(function() {

  $("#mainForm").submit(function(e) {
    e.preventDefault();
    var url = "/search";
    var postData = $("#mainForm").serializeArray();
    if(postData.length < 2) return;
    var indexedData = {};
    $.map(postData, function(n, i){
        indexedData[n['name']] = n['value'];
    });
    $.post(url, indexedData, function(data) {
      injectResults(data);
    });
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
