// Submit click function for each category of data.
$(document).ready(function(){
    $("#submit").click(function()
    {
      var name = ($("#name").val());
       var title = ($("#title").val());
       var hiredate = $("#hiredate").val();
       

       // Adds a new row of data for the employee.
       if(name ==="" || title ==="" ||hiredate ==="")
       {
          // Validation for if input box is empty. ("")
          alert("Must fill each textbox!")
           
               $('#name').val("");
               $('#title').val("");
               $('#hiredate').val("");
       }
       else
       {
           $('#myTable').append('<tr><td>'+name+'</td><td>'+title+'</td><td>'+hiredate+'</td>');
               $('#name').val("");
               $('#title').val("");
               $('#hiredate').val("");
       }
       
      
// Function for class to stort each row of data.
$('.sortable').each(function() {
    var $table = $(this);                     
    var $tbody = $table.find('tbody');       
    var $controls = $table.find('th');        
    var rows = $tbody.find('tr').toArray();   
  
    $controls.on('click', function() {        
      var $header = $(this);                  
      var order = $header.data('sort');      
      var column;                             
  
    
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

