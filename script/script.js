window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let tab = document.querySelectorAll('.info-header-tab'), //elem nav tab
      info = document.querySelector('.info-header'), //nav tab
      tabContent = document.querySelectorAll('.info-tabcontent'); //content tab

      function hideTabeContent(a) {
         for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
         }
      }
      hideTabeContent(1);

      function showTabContent(b) {
         if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
         }
      }
      info.addEventListener('click', function(event) {
         let target = event.target;
         if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++){
               if(target == tab[i]){
                  hideTabeContent(0);
                  showTabContent(i);
                  break;
               }
            }
         }
      });
});