const About = (about, contact) => {
  return `<section id="about" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="display:flex; justify-content:center; align-items:center;">
            <div class="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
              <img class="img-fluid" src="${about.imgUrl}" alt="CHEREF Mehdi" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div
              class="profile-wrapper wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h3>Hi Guys!</h3>
              <p style="text-align: justify; text-justify: inter-word;">${about.description}</p>
              <div class="about-profile">
                <ul class="admin-profile">
                  <li>
                    <span class="pro-title"> Age </span>
                    <span class="pro-detail">${about.age}</span>
                  </li> 

                  <li>
                    <span class="pro-title">I'm reading </span>
                    <span class="pro-detail">${about.book}</span>
                  </li>

                  <li>
                    <span class="pro-title"> Music </span>
                    <span class="pro-detail">
                      <a href="${about.song1}" target="_blank" rel="noopener noreferrer">Cheb Khaled</a> , 
                      <a href="${about.song2}" target="_blank" rel="noopener noreferrer">Lynyrd Skynyrd</a> , 
                      <a href="${about.song3}" target="_blank" rel="noopener noreferrer">Rag'n'Bone Man</a>
                    </span>
                  </li>

                  <li>
                    <span class="pro-title"> Location </span>
                    <span class="pro-detail">${about.location}</span>
                  </li>

                  <li>
                    <span class="pro-title"> e-mail </span>
                    <span class="pro-detail">${contact.email1}</span>
                  </li>

                  <li>
                    <span class="pro-title"> Phone </span>
                    <span class="pro-detail">
                      <a href="${contact.call}">${contact.tel}</a>
                    </span>
                  </li>

                  <li>
                    <span class="pro-title"> Freelance </span>
                    <span class="pro-detail">
                      <a href="${contact.malt}" target="_blank" rel="noopener noreferrer">${contact.malt.substring(12)}</a>
                    </span>
                  </li>
                  
                  <!--li>
                    <span class="pro-title"> Name </span>
                    <span class="pro-detail">${about.name}</span>
                  </li-->
                  <!--li><span class="pro-title"> Experience </span> <span class="pro-detail">4 Years</span></!--li-->                  
                  <!--li><span class="pro-title"> Freelance </span> <span class="pro-detail">Available</span>
                  </!--li-->            
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
};
