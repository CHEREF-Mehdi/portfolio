const ListResume = (list, title, type) => {
  let lr = `<ul class="timeline">
            <li>
                <i class=${list.icon}></i>
                <h2 class="timelin-title">${title}</h2>
            </li>`;
  {
    Object.keys(list.items).forEach(function (i) {
      lr += mapItemLR(
        list.items[i].title,
        list.items[i].year,
        list.items[i].content,
        type,
        list.items[i].id
      );
    });
  }

  lr += `</ul>`;
  return lr;
};

function linkTag(link) {
  return `<a href=${link} target="_blank" rel="noopener noreferrer">
            <i class="fa fa-link" aria-hidden="true"></i>
            Link
          </a>`;
}

function mapLinkList(links) {
  let render = "";
  links.forEach((link) => {
    render += linkTag(link);
  });
  return render;
}

function mapItemLR(title, year, content, type, id) {
  let li = `<li>
        <div class="content-text" style="position: relative;">
        ${
          id || content["item1"].abstract
            ? `<div style="position:absolute; top:10px; right:10px; ">
                ${
                  id ? (
                    `<i
                      class="fas fa-chevron-circle-left rotate"
                      data-toggle="collapse"
                      data-target="#collapse${id}"
                      aria-expanded="true"
                      aria-controls="collapse${id}"
                    />`
                  ) : (
                    `<p class="abstract" 
                      data-toggle="collapse" 
                      data-target="#collapse${content["item1"].id}" 
                      aria-expanded="true" 
                      aria-controls="collapse${content["item1"].id}">
                        <small><u>Read abstract</u></small>
                      </p>`
                  )
                }
                </div>`
            : ""
        }
        <h3 class="line-title">${title}</h3>
        ${year ? `<span>${year}</span>` : ""}
        ${
          id
            ? `<div id="#accordion${id}"> <div id="collapse${id}" class="collapse" data-parent="#accordion${id}">`
            : ""
        }`;
  {
    Object.keys(content).forEach(function (c) {
      li += `<div ${
        content[c].abstract ? `id="#accordion${content[c].id}"` : ""
      }>
                <p class="line-text">
                  ${content[c].describtion}
                  ${type === 0 ? mapLinkList(content[c].links) : ""}
                </p>
                ${
                  content[c].tools !== null
                    ? `<p class="line-text" style="font-weight: bold;" >
                    ${content[c].tools}
                    ${type === 1 ? mapLinkList(content[c].links) : ""} 
                  </p>`
                    : ""
                }
                
                ${
                  content[c].abstract
                    ? `
                    <div id="collapse${content[c].id}" class="collapse" data-parent="#accordion${content[c].id}">
                      <div style="margin-top:10px;">
                        <p class="smallLineHeight"><small>${content[c].abstract}</small></p>
                      </div>
                    </div>
                  `
                    : ""
                }
              </div>`;
    });
  }
  li += id ? `</div></div>` : "";
  li += `</div></li>`;
  return li;
}
