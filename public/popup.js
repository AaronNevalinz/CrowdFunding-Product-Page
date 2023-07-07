
    let backupBtn = document.querySelector('#backup-btn');
    let backupPopup = document.querySelector('#backup-popup');
    let popupHidden = document.querySelector('#popup-hide');

    backupBtn.addEventListener('click', ()=>{
        backupPopup.classList.add('visible');
        backupPopup.classList.remove('hidden')
    });

    popupHidden.addEventListener('click', ()=>{
        backupPopup.classList.add('hidden');
    });
