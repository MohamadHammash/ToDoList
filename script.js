const inBox = document.querySelector('#inBox');
const btn = document.querySelector('#addButton');
btn.className = ('btn bg-primary text-light btn-outline-secondary mr-2')
inBox.className = ('form-control');
const form = document.querySelector('#inputForm');

AddItems();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    btn.click();
    form.reset();

})



function AddItems() {

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let list = document.querySelector('#lista');
        const userInput = inBox.value;


        if (userInput !== ''.trim() && userInput !== null) {
            console.log(userInput);

            let li = document.createElement('li');
            let checkBox = document.createElement('input');
            let removeButton = document.createElement('button');
            let span = document.createElement('span');
            removeButton.setAttribute('type', 'button');
            removeButton.innerHTML = 'Remove &times';
            removeButton.className = ('btn btn-primary float-right');
            removeButton.addEventListener('click', function(r) {
                this.parentElement.remove();
            })
            let editButton = document.createElement('button');
            editButton.setAttribute('type', 'button');
            editButton.innerHTML = 'Edit';
            editButton.className = ('btn btn-primary float-right mr-2 px-4');
            let ToDoText;
            checkBox.setAttribute('type', 'checkbox');
            checkBox.className = ('checkBox');
            li.appendChild(checkBox)
            li.className = ('list-group-item bg-danger text-light m-1');
            li.appendChild(span);
            ToDoText = span.innerHTML = userInput.trim().charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
            li.appendChild(removeButton);
            li.appendChild(editButton);
            list.appendChild(li);
            editButton.addEventListener('click', function(ed) {
                console.log(this.previousSibling.previousSibling);
                this.previousSibling.previousSibling.contentEditable = true;

            })
            checkBox.addEventListener('change', function() {
                if (this.checked) {
                    li.className = ('list-group-item bg-success text-light  m-1 done')
                    console.log("Checkbox is checked..");

                } else {
                    li.className = ('list-group-item bg-danger text-light  m-1')
                    console.log("Checkbox is not checked..");
                }
            })
        } else {
            alert('no input found');
        }

        form.reset();
    })

}