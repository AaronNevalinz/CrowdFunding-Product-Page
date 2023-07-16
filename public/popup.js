
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
        
        $(this).addClass('border-primary-100 showme').siblings().removeClass('border-primary-100');
        
        $(this).children('#enter-pledge-amount').removeClass('hidden');
   
    });

    $('#continue-btn').click(function(){
        $('#back-this-project-popup').addClass('hidden');
        $('#thank-you-backup-popup').removeClass('hidden');
    })

    $('#hamburger').click(function(){
        $(this).addClass('hidden');
        $('#close-menu').removeClass('hidden');
        $('#menu').removeClass('hidden')
        $('#overlay-div').removeClass('hidden')
    });
    $('#close-menu').click(function(){
        $(this).addClass('hidden');
        $('#hamburger').removeClass('hidden');
        $('#menu').addClass('hidden');
        $('#overlay-div').addClass('hidden')
    });
