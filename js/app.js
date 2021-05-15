const button = document.querySelector('button');


let confirmationModal;
let thankYouModal;
let backdrop;
button.addEventListener('click', showModalHandler);

// showModalHandler() function run once the "Book" button is clicked and generates the popup modal for conformation.
function showModalHandler() {
    if (confirmationModal) {
        return;
    }
    // create the modal markup
    confirmationModal = document.createElement('div');
    confirmationModal.className = 'modal';

    const TextDiv = document.createElement('div');
    TextDiv.className = 'modal__text-container';

    const modalCheckImg = document.createElement('img');
    modalCheckImg.setAttribute("src", "./images/check.png");
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
    // adds transition when modal shows
    transition(confirmationModal);

    TextDiv.append(modalCheckImg);
    TextDiv.append(modalTextbold);
    TextDiv.append(modalText);

    ButtonDiv.append(modalCancelAction);
    ButtonDiv.append(modalConfirmAction);


    confirmationModal.append(TextDiv);
    confirmationModal.append(ButtonDiv);

    document.body.append(confirmationModal);

    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', closeModalHandler);

    document.body.append(backdrop);
}

// closeModalHandler() removes modal & dropback
function closeModalHandler() {
    confirmationModal.remove();
    confirmationModal = null;

    backdrop.remove();
    backdrop = null;
}

// removeCard() function removes the card element in back ground if the user click the confirmation button.
function removeCard() {
    const card = document.querySelector('.card');
    card.remove();
}
// add transition function
function transition($popup) {
    setTimeout(() => {
        $popup.classList.add("modal__active");
    }, 200)
}
// ThanksModalHandler() function runs once the "confirm" button is clicked and generates the  thankYouModal.
function ThanksModalHandler() {
    closeModalHandler();
    removeCard();
    setTimeout(() => {

        if (thankYouModal) {
            return;
        }

        thankYouModal = document.createElement('div');
        thankYouModal.className = 'modal';

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

        thankYouModal.append(TextDiv);
        thankYouModal.append(ButtonDiv);


        document.body.append(thankYouModal);

        backdrop = document.createElement('div');
        backdrop.className = 'backdrop';

        backdrop.addEventListener('click', closeModalHandler);

        document.body.append(backdrop);
        transition(thankYouModal);

    }, 500);



}