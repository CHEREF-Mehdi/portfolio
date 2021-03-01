const Service = service => {
  let services = "";
  Object.keys(service).forEach(function(item) {
    services += `<div class="col-md-6 col-lg-3 col-xs-12">
                <div
                class="services-item wow fadeInDown"
                data-wow-delay="0.3s"
                >
                <div class="icon">
                    <i class="${service[item].icon}" aria-hidden="true"></i>
                </div>
                <div class="services-content">
                    <h3>
                    <a href="#services">${service[item].name}</a>
                    </h3>
                    <p>${service[item].detail}</p>
                </div>
                </div>
            </div>`;
  });
  return services;
};
