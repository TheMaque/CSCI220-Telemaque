$(document).ready(function(){
    $("#submit").click(function()
    {
      var name = ($("#name").val());
       var title = ($("#title").val());
       var hiredate = $("#hiredate").val();
       

       // Adds a new row of data for the employee.
       if(name ==="" || title ==="" ||hiredate ==="")
       {
           
           alert("Must fill each textbox!")
           
               $('#name').val("");
               $('#title').val("");
               $('#hiredate').val("");
       }
       else
       {
           $('#myTable').append('<tr><td>'+name+'</td><td>'+title+'</td><td>'+hiredate+'</td><td><a href="javascript:void(0);"class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');

               $('#name').val("");
               $('#title').val("");
               $('#hiredate').val("");
       }
       
       $(document).on('click','.remCF1',function(){
        $(this).parent().parent().remove();
        $('#myTable tbody tr').each(function(i){            
    $($(this).find('td')[0]).html(i+1);          
});
});

$('.sortable').each(function() {
    var $table = $(this);                     // This sortable table
    var $tbody = $table.find('tbody');        // Store table body
    var $controls = $table.find('th');        // Store table headers
    var rows = $tbody.find('tr').toArray();   // Store array containing rows
  
    $controls.on('click', function() {        // When user clicks on a header
      var $header = $(this);                  // Get the header
      var order = $header.data('sort');       // Get value of data-sort attribute
      var column;                             // Declare variable called column
  
    
      // If selected item has ascending or descending class, reverse contents
      if ($header.is('.ascending') || $header.is('.descending')) {  
        $header.toggleClass('ascending descending');    
        $tbody.append(rows.reverse());               
      } else {                                                               
        $header.addClass('ascending');               
        // Remove asc or desc from all other headers
        $header.siblings().removeClass('ascending descending'); 
        if (compare.hasOwnProperty(order)) {  
          column = $controls.index(this);        
  
          rows.sort(function(a, b) {              
            a = $(a).find('td').eq(column).text();
            b = $(b).find('td').eq(column).text(); 
            return compare[order](a, b);          
          });
  
          $tbody.append(rows);
        }
      }
    });
  });
      
});

});

