
ActiveClass= (key)=> (key===0)? "active": "";

const Recommandation =(recoms)=>{
    let indicators="";
    let slides="";
    recoms.forEach((item,key) => {
        const activeC=ActiveClass(key);
        indicators+=`<li data-target="#carouselExampleControls" data-slide-to="${key}" class="${activeC}"></li>`
        
        slides+=`<div class="carousel-item item item ${activeC}">
                    <img class="mx-auto d-block" src="${item.src}" >
                    <div class="carousel-caption d-md-block">
                    <h5><a href="${item.refProfile}" target="_blank" rel="noopener noreferrer">Refrent profile</a></h5>
                    </div>
                </div>`;
    });
    return {indicators,slides}
}