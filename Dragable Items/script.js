let items = document.getElementsByClassName('items');
let leftBox = document.querySelector('.left');
let rightBox = document.querySelector('.right');

for(item of items) {
    item.addEventListener('dragstart', (e) => {
        let selected = e.target;

        rightBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        });

        rightBox.addEventListener('drop', (e)=>{
            rightBox.appendChild(selected);
            selected = null;
        });

       leftBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        });

       leftBox.addEventListener('drop', (e)=>{
           leftBox.appendChild(selected);
            selected = null;
        });
    });
};