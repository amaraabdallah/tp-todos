$(function () {
    
    let $list, $newItemForm;{
        
    $list = $('ul').html(localStorage.getItem('todosList'));
    $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        let text = $('input:text').val();
        $list.append(`
        <li>
          <div class="item-body">${ text }</div>
          <button class="btn-done"  href="#">done</button>
          <button class="btn-delete"  href="#">delete</button>
        </li>
      
      `);
        localStorage.setItem('todosList', $('ul').html())
        $('input:text').val('');
        method: "POST",
        fetch(`https://localhost:3000/api/v1/:id ${$list, $newItemForm}`);
    }) };

    $(document).on("click", ".btn-done", function () {
        const $this = $(this);
        $this.parent().toggleClass('done');
    });
    $(document).on("click", ".btn-delete", function () {
        const $this = $(this);
        $this.parent().remove()('delete');
    });

});

const $todosList = document.getElementById("item-body"),
      $newtask = document.getElementById("newItemForm");
      method: "GET"
     
      

function updatetodosList($list, $newItemForm){
    fetch(`https://localhost:3000/api/v1/`)
      .then(res => res.json())
      .then(data => updateView(data))
      .catch(err => handleError(err));
  }
  function handleError(err){
      console.error(err);
  }