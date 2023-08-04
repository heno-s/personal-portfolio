import { github, facebook, linkedin, externalLink } from "./icons.js";
import createProject from "./project.js";
import projects from "./projects.js";

const projectsDOM = document.querySelector(".projects");

projects.forEach((project) =>
    projectsDOM.appendChild(createProject(project))
);

const githubsDOM = document.querySelectorAll(".github");
const facebooksDOM = document.querySelectorAll(".facebook");
const linkedinsDOM = document.querySelectorAll(".linkedin");
const externalLinksDOM = document.querySelectorAll(".external-link");

githubsDOM.forEach((githubA) => {
    githubA.innerHTML = github;
});

facebooksDOM.forEach((facebookA) => {
    facebookA.innerHTML = facebook;
});

linkedinsDOM.forEach((linkedinA) => {
    linkedinA.innerHTML = linkedin;
});

externalLinksDOM.forEach((externalLinkA) => {
    externalLinkA.innerHTML = externalLink;
});
