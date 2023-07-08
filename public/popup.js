
    let backupBtn = document.querySelector('#backup-btn');
    let backupPopup = document.querySelector('#backup-popup');
    let popupHidden = document.querySelector('#popup-hide');
    let content = document.querySelector('#all-content');

    backupBtn.addEventListener('click', ()=>{
        backupPopup.classList.add('visible');
        content.classList.toggle('blur-bg')
        backupPopup.classList.remove('hidden')
    });

    popupHidden.addEventListener('click', ()=>{
        backupPopup.classList.add('hidden');
        content.classList.remove('blur-bg')
    });
