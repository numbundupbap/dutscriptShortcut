let onUrlChange = () => {
    let title = document.querySelector("#__next > div.css-8d1p21.ex89w681 > div > div > div > div.css-1oodiyi.e13pveor1 > div.css-16ignzz.e1kv7pg34 > div.css-1kffifj.e1kv7pg33 > h3");
    
    if (title && !document.querySelector("#__next > div.css-8d1p21.ex89w681 > div > div > div > div.css-1oodiyi.e13pveor1 > div.css-16ignzz.e1kv7pg34 > div.css-1kffifj.e1kv7pg33 > h3 > div")) {
        let id = window.location.href.split("/").pop();
        title.insertAdjacentHTML("beforeend", 
            `<div style="margin-left: 10px; display: inline; align-items: center; ">
            <a href="https://vlzi.vercel.app/dutscript/${id}" target="_blank" style="font-size: 14px; color: #000000;">
            <img src="https://vlzi.vercel.app/static/favicon2.svg" alt="" style="width:20px; height:20px; margin-top: 5px">
            둣스크립트 바로가기</a>
            </div>`
        );
    }
};

setInterval(onUrlChange, 1000) // 진짜겁내비효율인데뭐추가하기귀찮음
