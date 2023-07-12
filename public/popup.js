
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

    $('.pledge-card').click(function(){
        $(this).addClass('border-primary-100').siblings().removeClass('border-primary-100');
    });

    // const cards = document.querySelectorAll('.pledge-card');

    // let pledgeCard = document.querySelector('#pledge-card');
    // let pledgeAmount = document.querySelector('#enter-pledge-amount');
    // let continueButton = document.querySelector('#continue-btn');

    // pledgeCard.addEventListener('click', ()=>{
    //     pledgeCard.classList.add('border-primary-100')
    //     pledgeAmount.classList.remove('hidden');
    // });

    // continueButton.addEventListener('click', ()=>{
    //     backupPopup.classList.add('visible');
    //     overlayDiv.classList.remove('hidden');
    //     backupPopup.classList.remove('hidden');
    //     content.classList.add('overflow-hidden');
    //     content.classList.add('h-[100vh]');
    //     backProjectPopUp.classList.add('hidden')
    // });

    // popupHidden.addEventListener('click', ()=>{
    //     backupPopup.classList.add('hidden');
    //     overlayDiv.classList.add('hidden');
    //     content.classList.remove('h-[100vh]');
    // });


    // cards.forEach(card=>{
        
    //     const pledgeAmount = document.querySelector('#enter-pledge-amount');
    //     const continueButton = document.querySelector('#continue-btn');
    //     const backProjectPopUp = document.querySelector('#back-this-project-popup');
    //     const backupPopup = document.querySelector('#thank-you-backup-popup');
    //     const popupHidden = document.querySelector('#popup-hide');
    //     const overlayDiv = document.querySelector('#overlay-div');

    //     card.addEventListener('click', ()=>{
    //         card.classList.add('border-primary-100');
    //         pledgeAmount.classList.remove('hidden');
    //     });

    //     continueButton.addEventListener('click', ()=>{
    //         backProjectPopUp.classList.add('hidden');
    //         backupPopup.classList.remove('hidden');
    //     });

    //     popupHidden.addEventListener('click', ()=>{
    //         backupPopup.classList.add('hidden');
    //         overlayDiv.classList.add('hidden');
    //     });
    // });

    // $('.pledge-card').click(()=>{
    //     $(this).addClass('border-primary-100').siblings().removeClass('border-primary-100');
    // });

    








    // const backProjectContainer = document.getElementById('back-this-project-popup');
    // const cards = document.querySelectorAll('.pledge-card')

    // let selectedElement = null;

    // backProjectContainer.addEventListener('click', function(event){
    //     if(event.target.classList.contains('pledge-card')){
    //         const clickedElement = event.target;

    //         if(selectedElement !== null){
    //             selectedElement.classList.remove('border-primary-100');
    //         }

    //         clickedElement.classList.add('border-primary-200'); 

    //         selectedElement = clickedElement;
    //     }
    // });