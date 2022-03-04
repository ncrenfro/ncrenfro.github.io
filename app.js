document.addEventListener('DOMContentLoaded', () =>{
    //card options
    const cardArray =  [

        {
            name: 'Guild',
            img: 'images/Guild.png'
        },
        {
            name: 'Guild',
            img: 'images/Guild.png'
        },
        {
            name: 'House',
            img: 'images/House.png'
        },
        {
            name: 'House',
            img: 'images/House.png'
        },
        {
            name: 'Lich',
            img: 'images/Lich.png'
        },
        {
            name: 'Lich',
            img: 'images/Lich.png'
        },
        {
            name: 'Metal Sheild',
            img: 'images/Metal Shield.png'
        },
        {
            name: 'Metal Sheild',
            img: 'images/Metal Shield.png'
        },
        {
            name: 'Wood Sheild',
            img: 'images/Metal Wood.png'
        },
        {
            name: 'Wood Sheild',
            img: 'images/Wood Shield.png'
        },
        {
            name: 'Spider Chair',
            img: 'images/Spider Chair.png'
        },
        {
            name: 'Spider Chair',
            img: 'images/Spider Chair.png'
        }
    ]

    const grid = document.querySelector('grid');

    function createBoard(){
        for (let i=0; cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/Book.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    createBoard();
})