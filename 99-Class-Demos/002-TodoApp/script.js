// THIS CODE RUNS IN THE BROWSER

// UPDATE
$('ul').on('click', 'li', function() {
  $(this).toggleClass('abcd');
});

// DELETE
$('ul').on('click', 'span', function(event) {
  $(this).parent().remove();
});

// CREATE
$('input').keypress(function(event) {
  if (event.which === 13) {
    var todoItem = $(this).val();
    $('ul').append(
      `<li>
          ${todoItem}
          <span>
             <i class='fa fa-times'></i>
          </span>
        </li>`
    );
    $('input').val(""); // moved the "" to within the parentheses
  }
});