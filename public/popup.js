
    let backProjectButton = document.querySelector('#backup-btn');
    let backupPopup = document.querySelector('#thank-you-backup-popup');
    let popupHidden = document.querySelector('#popup-hide');
    let content = document.querySelector('#all-content');
    let overlayDiv = document.querySelector('#overlay-div');

    let backProjectPopUp = document.querySelector('#back-this-project-popup');
    let backProjectCloseIcon = document.querySelector('#close');

    backProjectButton.addEventListener('click', ()=>{
        backProjectPopUp.classList.add('visible');
        overlayDiv.classList.remove('hidden');
        backProjectPopUp.classList.remove('hidden');
        content.classList.add('overflow-hidden');
        content.classList.add('h-[100vh]');
    });

    backProjectCloseIcon.addEventListener('click', ()=>{
        backProjectPopUp.classList.add('hidden');
        overlayDiv.classList.add('hidden');
        content.classList.remove('h-[100vh]');
    });

    let pledgeCard = document.querySelector('#pledge-card');
    let pledgeAmount = document.querySelector('#enter-pledge-amount');
    let continueButton = document.querySelector('#continue-btn');

    pledgeCard.addEventListener('click', ()=>{
        pledgeCard.classList.add('border-primary-100')
        pledgeAmount.classList.remove('hidden');
    });

    continueButton.addEventListener('click', ()=>{
        backupPopup.classList.add('visible');
        overlayDiv.classList.remove('hidden');
        backupPopup.classList.remove('hidden');
        content.classList.add('overflow-hidden');
        content.classList.add('h-[100vh]');
        backProjectPopUp.classList.add('hidden')
    });

    popupHidden.addEventListener('click', ()=>{
        backupPopup.classList.add('hidden');
        overlayDiv.classList.add('hidden');
        content.classList.remove('h-[100vh]');
    });
