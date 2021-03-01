const Resume = (resume) => {
  const { education, experience, personal_project } = resume;
  let r = `<div class="col-lg-6 col-md-6 col-sm-6">
            <div class="education wow fadeInRight" data-wow-delay="0.3s">`;

            {
              r += ListResume(experience, "Profesional experience", 1);
            }
      r += `</div>
            <div class="experience wow fadeInRight" data-wow-delay="0.6s">`;
            {
              r += ListResume(personal_project, "personal projects", 1);
            }

      r += `</div></div>
            <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="experience wow fadeInRight" data-wow-delay="0.6s">`;
            {
              Object.keys(education).forEach(function (item) {
                r += ListResume(education[item], item, 0);
              });
            }
      r += `</div></div>`;

  return r;
};
