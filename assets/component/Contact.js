const Contact = (contact) => {
  const ct = `<div class="col-md-12 col-lg-12 col-sm-12 footer-right-area wow fadeIn" >
        <h2>Contact Address</h2>
        <div class="footer-right-contact" style="flex:1;">
            <div class="single-contact">
            <div class="contact-icon">
                <i class="fa fa-map-marker"></i>
            </div>
            <p>${contact.adress}</p>
            </div>
            <div class="single-contact">
            <div class="contact-icon">
                <i class="fa fa-envelope"></i>
            </div>
            <p>
                ${contact.email1}
            </p>
            </div>
            <div class="single-contact">
            <div class="contact-icon">
                <i class="fa fa-phone"></i>
            </div>
            <a href="${contact.call}">${contact.tel}</a>
            </div>
        </div>
        </div>`;
  return ct;
};
