export default function createProject({
    title,
    img,
    repository,
    live,
    description,
    tags,
}) {
    const projectDOM = document.createElement("div");
    projectDOM.classList.add("project");
    const projectInnerHtml = `
  <a href="${live}" target="_blank">
      <img
          src="${img}"
          alt="project name"
      />
      <div class="project-header">
          <span class="project-title">${title}</span>
          <div class="project-links">
              <a
                  href="${repository}"
                  class="github"
                  target="_blank"
              >
              </a>
              <a
                  href="${live}"
                  class="external-link"
                  target="_blank"
              >
              </a>
          </div>
      </div>
      <div class="project-body">
          <p>
              ${description}
          </p>
          <div class="tags"></div>
      </div>
      </a>
`;
    projectDOM.innerHTML = projectInnerHtml;

    const tagsDOM = projectDOM.querySelector(".tags");
    tags.map((tagName) => tagsDOM.appendChild(createTag(tagName)));

    return projectDOM;
}

function createTag(name) {
    const tagDOM = document.createElement("div");
    tagDOM.classList.add("tag");
    tagDOM.textContent = name;
    return tagDOM;
}
