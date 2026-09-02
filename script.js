const projects = [
  [
    "Shu Uemura Japan",
    "https://www.shuuemura.jp/",
    // "React, TypeScript, Responsive Design",
    "Worked on the frontend implementation and responsive UI for the Japanese beauty brand website."
  ],
  [
    "YSL Beauty Japan",
    "https://www.yslb.jp/",
    // "React, TypeScript, Responsive Design",
    "Contributed to frontend development and responsive web implementation for the Japanese luxury beauty brand website."
  ],
  [
    "Waseda Zemi",
    "https://www.wasedazemi.com/",
    // "React, Responsive Design",
    "Developed responsive frontend components and maintained website UI consistency."
  ],
  [
    "Yoshida Fukushi",
    "https://yoshida-fukushi.jp/",
    // "Responsive Design",
    "Implemented frontend features and responsive UI improvements."
  ],
  [
    "Lipple",
    "https://lipple.co.jp/",
    // "Responsive Web Design",
    "Implemented responsive layouts and frontend website updates."
  ],
  [
    "Yoshida Koumuin Houka",
    "https://yoshida-koumuinhouka.jp/",
    // "Responsive Design",
    "Worked on responsive frontend development and website maintenance."
  ],
  
  [
    "Mr. Motegi",
    "https://www.mr-motegi.jp/",
    // "HTML, CSS, JavaScript",
    "Built and maintained responsive frontend website components."
  ],
  [
    "Shibuya JUE Academy",
    "https://shibuya.jue.ac.jp/",
    // "Responsive Design",
    "Developed responsive layouts and frontend UI sections."
  ],
  [
    "Albion Japan",
    "https://albion.co.jp/site/albion/c/c10/",
    // "React, TypeScript",
    "Worked on frontend UI implementation for the Albion Japan website."
  ],
  [
    "Mitsui Credit",
    "https://www.mitsui-credit.com/",
    // "Responsive Design",
    "Supported frontend development and UI enhancements for the financial services website."
  ],
  
  [
    "Okawa Kagu",
    "https://www.okawa-kagu.net/",
    // "Responsive Design",
    "Contributed to frontend implementation and website responsiveness."
  ],
  [
    "The Company PH",
    "https://thecompany.ph/",
    // "React, Responsive Design",
    "Developed responsive website sections and frontend UI components."
  ],
  [
    "The Company SG",
    "https://thecompany.sg/",
    // "React, Responsive Design",
    "Worked on frontend development and responsive design implementation."
  ],
  [
    "Allied Pallets",
    "https://alliedpallets.com/",
    // "Responsive Design",
    "Implemented frontend UI improvements and responsive layouts."
  ]
];

const featuredProjects = projects.slice(0, 6);
const moreProjects = projects.slice(6);

const thumbnailPaths = [
  "assets/project-thumbnails/01-shu-uemura-japan.png",
  "assets/project-thumbnails/02-ysl-beauty-japan.png",
  "assets/project-thumbnails/03-waseda-zemi.png",
  "assets/project-thumbnails/04-yoshida-fukushi.png",
  "assets/project-thumbnails/05-lipple.png",
  "assets/project-thumbnails/06-yoshida-koumuin-houka.png",
  "assets/project-thumbnails/07-mr-motegi.png",
  "assets/project-thumbnails/08-shibuya-jue-academy.png",
  "assets/project-thumbnails/09-albion-japan.png",
  "assets/project-thumbnails/10-mitsui-credit.png",
  "assets/project-thumbnails/11-okawa-kagu.png",
  "assets/project-thumbnails/12-the-company-ph.png",
  "assets/project-thumbnails/13-the-company-sg.png",
  "assets/project-thumbnails/14-allied-pallets.png"
];

function projectSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getDomain(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function createFeaturedCard(project, index) {
  const [name, url, description] = project;
  const thumb = thumbnailPaths[index];

  return `
    <article class="featured-project-card reveal">
      <a class="project-thumbnail" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${name} website">
        <img src="${thumb}" alt="${name} website preview thumbnail" loading="lazy">
        <span class="thumbnail-overlay">Open Website ↗</span>
      </a>
      <div class="featured-project-content">
        <div class="project-number">0${index + 1}</div>
        <div class="project-meta">
          <span class="project-category">Frontend Development</span>
        </div>
        <h3>${name}</h3>
        <p>${description}</p>
        <a class="view-website-btn" href="${url}" target="_blank" rel="noopener noreferrer">
          <span>View Website</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  `;
}

function createMoreCard(project, index) {
  const [name, url, description] = project;
  const thumb = thumbnailPaths[index + 6];

  return `
    <article class="more-project-card reveal">
      <a class="more-project-thumb" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${name} website">
        <img src="${thumb}" alt="${name} website preview thumbnail" loading="lazy">
      </a>
      <div class="more-project-content">
        <div>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
        <a class="more-project-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="View ${name} website">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  `;
}

document.getElementById("featuredProjectsGrid").innerHTML =
  featuredProjects.map(createFeaturedCard).join("");

document.getElementById("moreProjectsGrid").innerHTML =
  moreProjects.map(createMoreCard).join("");

const header = document.getElementById("siteHeader");
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
}, {passive:true});

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.08});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
