window.onload = ()=>{
let up = document.getElementById('up_button');
let more = document.getElementById('more_info');
let hide = document.getElementById('hide');
let main = document.getElementById('main');
let transfer_link = document.getElementById('transfer_link');
let pre = document.getElementById('pre');
let transfer = document.getElementById('transfer');
let form = document.getElementById('form');
let form_link = document.getElementById('form_link');
let vac =  document.getElementById('vac');
let vac_link = document.getElementById('vac_link');
let work = document.getElementById('form_2');
let work_link = document.getElementById('work');
let limit_link = document.getElementById('limit_link');
let limit = document.getElementById('limit');
let comfort = document.getElementById('comfort');
let comfort_link = document.getElementById('comfort_link');

        up.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        }
        more.onclick = () =>{
            more.style.display = 'none';
            document.getElementById('text1').innerHTML = 'Страны Евросоюза, а также Украина, Беларусь со всеми документами. Вы можете оформить<br/> предзаказ на сайте<br/> либо связаться с нами<br/> по номеру телефона или электронной почте whitewings@gmail.com.'
            hide.style.display = 'block';
        }
        hide.onclick = () =>{
            more.style.display = 'inline';
            document.getElementById('text1').innerHTML = 'Страны Евросоюза, а также Украина, Беларусь со всеми документами.'
            hide.style.display = 'none';
        }
        transfer_link.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'none';
            document.getElementById('gallery').style.display = 'none';
            transfer.style.display = 'flex';
            form.style.display = 'none';
            comfort.style.display = 'none';
            limit.style.display = 'none';
        }
        form_link.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'none';
            document.getElementById('gallery').style.display = 'none';
            form.style.display = 'flex';
            transfer.style.display = 'none';
            comfort.style.display = 'none';
            limit.style.display = 'none';
        }
        work_link.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'none';
            document.getElementById('gallery').style.display = 'none';
            form.style.display = 'none';
            work.style.display = 'flex';
            transfer.style.display = 'none';
            vac.style.display = 'none';
            comfort.style.display = 'none';
            limit.style.display = 'none';
        }
        comfort_link.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'none';
            document.getElementById('gallery').style.display = 'none';
            form.style.display = 'none';
            comfort.style.display = 'flex';
            work.style.display = 'none';
            transfer.style.display = 'none';
            vac.style.display = 'none';
            limit.style.display = 'none';
        }
        limit_link.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'none';
            document.getElementById('gallery').style.display = 'none';
            form.style.display = 'none';
            comfort.style.display = 'none';
            work.style.display = 'none';
            transfer.style.display = 'none';
            vac.style.display = 'none';
            limit.style.display = 'flex';
        }
        vac_link.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'none';
            document.getElementById('gallery').style.display = 'none';
            form.style.display = 'none';
            transfer.style.display = 'none';
            vac.style.display = 'flex';
            comfort.style.display = 'none';
            limit.style.display = 'none';
        }
       
        main.onclick = () =>{
            window.scrollTo({
                top: 0,
                left: 0,
              });
            pre.style.display = 'flex';
            document.getElementById('gallery').style.display = 'block';
            transfer.style.display = 'none';
            form.style.display ='none';
            vac.style.display = 'none';
            work.style.display = 'none';
            comfort.style.display = 'none';
            limit.style.display = 'none';
        }
    }