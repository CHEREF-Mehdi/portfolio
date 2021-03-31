$(document).ready(function () {
  const {
    socialMedia,
    contact,
    about,
    service,
    resume,
    portfolio,
    jobTitle,
    quotes,
    recommandations,
  } = data;
  $("#jobTitle").text(jobTitle);
  $("#Copyright").text(
    "Copyright © " + new Date().getFullYear() + " UIdeck All Right Reserved"
  );

  $("#about").html(About(about, contact));
  $("#servicesDiv").html(Service(service));
  $(".socialMediaDiv").html(SocialMedia(socialMedia));
  $("#resumeDiv").html(Resume(resume));
  $("#portfolio").html(Portfolio(portfolio));
  $("#contactDiv").html(Contact(contact));
  const recomsHtml = Recommandation(recommandations);
  $("#ol-carou-indic").html(recomsHtml.indicators);
  $("#slideContainer").html(recomsHtml.slides);

  $(function () {
    $("#firstButton").popover({
      container: "body",
      html: true,
      content: function () {
        let r = getRandomInt(quotes.length);
        while (r === RandomQuote) {
          r = getRandomInt(quotes.length);
        }
        RandomQuote = r;
        return (
          '<div style="text-align: justify; text-justify: inter-word; class="popover-message">' +
          quotes[r] +
          "</div>"
        );
      },
    });
  });

  $(".div-rotate").click(function (e) {
    $(this).find("i").toggleClass("down");
  });
}); //document.ready

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let RandomQuote = 0;
