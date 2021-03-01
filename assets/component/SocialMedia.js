const SocialMedia = socialMedia => {
  let sm = "";

  Object.keys(socialMedia).forEach(function(item) {
    sm += `<li>
                <a
                    class="${socialMedia[item].class}"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="${socialMedia[item].link}"
                >
                    <i class="${socialMedia[item].icon}"></i>
                </a>
            </li>`;
  });
  return sm;
};
