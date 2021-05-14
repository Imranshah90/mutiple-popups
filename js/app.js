const button = document.querySelector('button');


let modal;
let modal2;
let backdrop;
button.addEventListener('click', showModalHandler);

function showModalHandler() {
    if (modal) {
        return;
    }

    modal = document.createElement('div');
    modal.className = 'modal';

    const TextDiv = document.createElement('div');
    TextDiv.className = 'modal__text-container';

    const modalCheckImg = document.createElement('img');
    modalCheckImg.setAttribute("src", "/images/check.png");
    modalCheckImg.setAttribute("alt", "Ticked");

    const modalTextbold = document.createElement('h2');
    modalTextbold.textContent = 'Congratulations your jet2 holiday booking has been confirmed';

    const modalText = document.createElement('p');
    modalText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos facilis dolorum nemo recusandae molestias ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos facilis dolorum!';
    const ButtonDiv = document.createElement('div');
    ButtonDiv.className = 'btn-container text-center';


    const modalCancelAction = document.createElement('button');
    modalCancelAction.textContent = 'Cancel';
    modalCancelAction.className = 'btn btn--alt';
    modalCancelAction.addEventListener('click', closeModalHandler);

    const modalConfirmAction = document.createElement('button');
    modalConfirmAction.textContent = 'Confirm';
    modalConfirmAction.className = 'btn';
    modalConfirmAction.addEventListener('click', ThanksModalHandler);
    transition(modal);

    TextDiv.append(modalCheckImg);
    TextDiv.append(modalTextbold);
    TextDiv.append(modalText);

    ButtonDiv.append(modalCancelAction);
    ButtonDiv.append(modalConfirmAction);


    modal.append(TextDiv);
    modal.append(ButtonDiv);

    document.body.append(modal);

    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', closeModalHandler);

    document.body.append(backdrop);
}


function closeModalHandler() {
    modal.remove();
    modal = null;

    backdrop.remove();
    backdrop = null;
}


function removeCard() {
    const card = document.querySelector('.card');
    card.remove();
}

function transition($popup) {
    setTimeout(() => {
        $popup.classList.add("modal__active");
    }, 200)
}

function ThanksModalHandler() {
    closeModalHandler();
    removeCard();
    setTimeout(() => {

        if (modal2) {
            return;
        }

        modal2 = document.createElement('div');
        modal2.className = 'modal';

        const TextDiv = document.createElement('div');
        TextDiv.className = 'text-container text-center';

        const modalTextbold = document.createElement('h2');
        modalTextbold.textContent = 'Thank you for using our service.';

        const modalText = document.createElement('p');
        modalText.textContent = 'Please visit our site for more information';

        const ButtonDiv = document.createElement('div');
        ButtonDiv.className = 'btn-container text-center';
        const modalCancelAction = document.createElement('a');
        modalCancelAction.setAttribute("href", "https://www.jet2holidays.com/");
        modalCancelAction.textContent = 'Visit';
        modalCancelAction.className = 'btn';

        TextDiv.append(modalTextbold);
        TextDiv.append(modalText);
        ButtonDiv.append(modalCancelAction);

        modal2.append(TextDiv);
        modal2.append(ButtonDiv);


        document.body.append(modal2);

        backdrop = document.createElement('div');
        backdrop.className = 'backdrop';

        backdrop.addEventListener('click', closeModalHandler);

        document.body.append(backdrop);
        transition(modal2);

    }, 500);



}