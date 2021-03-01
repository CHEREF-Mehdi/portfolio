function mapItemPortfolio(item) {
  return `
      <div
        class="${"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix " + item.filter}"
      >
        <div class="portfolio-item">
          <div class="shot-item">
            <img src="${item.img}" alt="CHEREF Mehdi" />
            <div class="overlay">
              <div class="icons">
                <a class="lightbox preview" href="${item.img}">
                  <i class="icon-eye"></i>
                </a>
                ${
                  item.link
                    ? `<a
                    class="link"
                    rel="noopener noreferrer"
                    href="${item.link}"
                    target="_blank"
                  >
                    <i class="icon-link"></i>
                  </a>`
                    : ``
                }
              </div>
            </div>
          </div>
        </div>
      </div>`;
}

const Portfolio = portfolio => {
  let p = ``;
  {
    Object.keys(portfolio).forEach(async item => {
      p += mapItemPortfolio(portfolio[item]);
    });
  }
  return p;
};
