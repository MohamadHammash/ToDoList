const inBox = document.querySelector('#inBox');
const btn = document.querySelector('#addButton');
btn.className = ('btn bg-primary text-light btn-outline-secondary')
inBox.className = ('form-control');

AddItems();


inBox.addEventListener('submit', function(s) {
    btn.click();
})


function AddItems() {

    btn.addEventListener('click', function(e) {
        let list = document.querySelector('#lista');
        const userInput = inBox.value;
        //list.className = ('list-group');

        if (userInput !== ''.trim() && userInput !== null) {
            console.log(userInput);

            let li = document.createElement('li');
            let checkBox = document.createElement('input');
            let removeButton = document.createElement('button');
            removeButton.setAttribute('type', 'button');
            removeButton.innerHTML = 'Remove';
            removeButton.className = ('btn btn-primary float-right');
            removeButton.addEventListener('click', function(r) {
                this.parentElement.remove();
            })
            let ToDoText;
            checkBox.setAttribute('type', 'checkbox');
            checkBox.className = ('checkBox');
            li.appendChild(checkBox)
            li.className = ('list-group-item bg-danger text-light m-1');
            ToDoText = li.appendChild(document.createTextNode(userInput));
            li.appendChild(removeButton);
            list.appendChild(li);
            checkBox.addEventListener('change', function() {
                if (this.checked) {
                    li.className = ('list-group-item bg-success text-light done')
                    console.log("Checkbox is checked..");

                } else {
                    li.className = ('list-group-item bg-danger text-light')
                    console.log("Checkbox is not checked..");
                }

            })
        } else {
            alert('no input found');
        }

    })

}
// checkBox.className = ('checkBox');
// checkBox.classList.add('checkBox');