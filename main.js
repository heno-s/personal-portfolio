import { github, facebook, linkedin, externalLink } from "./icons.js";

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
