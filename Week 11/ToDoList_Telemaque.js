
              // Creates a new list item when the add button is pressed.
              function addTask() {
                var li = document.createElement("li");
                var inputValue = document.getElementById("taskInput").value;
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                
                // Alert when nothing is typed is give a message to the user to type something.
                if (inputValue === '') {
                  alert("There must be a task typed here!");
                } else {
                  document.getElementById("unorderedList").appendChild(li);
                }
                document.getElementById("taskInput").value = "";
              }
             
            // When a user clicks on an item in the list, cross through the item and toggles "checked" class.
            var list = document.querySelector('ul');
            list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
             }
            }, false);

          // Function to empty the UL when clear list button is clicked.
              function clearButton() {
                
                $('#unorderedList').empty();
            
              }