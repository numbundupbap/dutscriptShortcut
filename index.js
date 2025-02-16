let onUrlChange = () => {
    let title = document.querySelector("h3");
    
    if (title && !document.querySelector("h3 div")) {
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