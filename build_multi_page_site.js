const fs = require("fs");
const path = require("path");

const outDir = __dirname;
const assetsDir = path.join(outDir, "assets");
fs.mkdirSync(assetsDir, { recursive: true });

const navItems = [
  ["overview", "Overview", "overview.html"],
  ["topics", "Topics", "topics.html"],
  ["program", "Program", "program.html"],
  ["organizers", "Organizers", "organizers.html"],
  ["participants", "Participants", "participants.html"],
  ["contact", "Contact", "contact.html"],
];

const organizers = [
  {
    name: "Xiao-Wu Chen",
    chinese: "陈小伍",
    affiliation: "Professor, University of Science and Technology of China",
    email: "xwchen@mail.ustc.edu.cn",
    web: "http://home.ustc.edu.cn/~xwchen/",
  },
  {
    name: "Bernhard Keller",
    chinese: "孔博恩",
    affiliation: "Professor, Université de Paris Cité, France",
    email: "bernhard.keller@imj-prg.fr",
    web: "https://webusers.imj-prg.fr/~bernhard.keller/indexe.html",
  },
  {
    name: "Yu Qiu",
    chinese: "邱宇",
    affiliation: "Professor, Tsinghua University",
    email: "yu.qiu@bath.edu",
    web: "https://www.math.tsinghua.edu.cn/info/1125/1630.htm",
  },
  {
    name: "Zhengfang Wang",
    chinese: "汪正方",
    affiliation: "Professor, Nanjing University",
    email: "zhengfangw@gmail.com",
    web: "https://math.nju.edu.cn/jzyg/apypl/20240416/i264159.html",
  },
  {
    name: "Guodong Zhou",
    chinese: "周国栋",
    affiliation: "Professor, East China Normal University",
    email: "gdzhou@math.ecnu.edu.cn",
    web: "https://math.ecnu.edu.cn/~gdzhou/intro.html",
  },
];

const participants = [
  ["Xiao-Wu Chen", "陈小伍", "University of Science and Technology of China", "Professor"],
  ["Vladimir Dotsenko", "", "Université de Strasbourg, France", "Professor"],
  ["Yang Han", "韩阳", "Chinese Academy of Sciences", "Professor"],
  ["Bernhard Keller", "孔博恩", "Université de Paris Cité, France", "Professor"],
  ["Yu Qiu", "邱宇", "Tsinghua University", "Professor"],
  ["Sibylle Schroll", "", "Universität zu Köln, Germany", "Professor"],
  ["Andrea Solotar", "", "Universidad de Buenos Aires, Argentina", "Professor"],
  ["Zhengfang Wang", "汪正方", "Nanjing University", "Professor"],
  ["Guodong Zhou", "周国栋", "East China Normal University", "Professor"],
  ["Pieter Belmans", "", "Utrecht University, The Netherlands", "Assistant Professor"],
  ["Petter Andreas Bergh", "", "Norwegian University of Science and Technology, Norway", "Professor"],
  ["Matt Booth", "", "Imperial College London, UK", "Research Fellow"],
  ["Ricardo Campos", "", "Université Paul Sabatier, France", "Chargé de Recherche"],
  ["Claude Cibils", "", "Université de Montpellier, France", "Professor"],
  ["Karin Erdmann", "", "University of Oxford, UK", "Professor"],
  ["Gustavo Jasso", "", "Universität zu Köln, Germany", "Professor"],
  ["Lander Hermans", "", "University of Antwerpen, Belgium", "Postdoc"],
  ["Dmitry Kaledin", "", "Steklov Mathematical Institute, Russia", "Professor"],
  ["Henning Krause", "", "Universität Bielefeld, Germany", "Professor"],
  ["Eduardo N. Marcos", "", "Universidade de Sao Paulo, Brazil", "Professor"],
  ["Arne Mertens", "", "University of Antwerpen, Belgium", "Postdoc"],
  ["Alessandro Lehmann", "", "University of Antwerpen, Belgium", "Postdoc"],
  ["Wendy Lowen", "", "University of Antwerpen, Belgium", "Professor"],
  ["Fernando Muro", "", "Universidad de Sevilla, Spain", "Professor"],
  ["Pablo Ocal", "", "The University of British Columbia, Canada", "Postdoc"],
  ["Julia Pevtsova", "", "University of Washington, USA", "Professor"],
  ["Lleonard Rubio y Degrassi", "", "University of Padua, Italy", "Assistant Professor"],
  ["Greg Stevenson", "", "Aarhus Universitet, Denmark", "Associate Professor"],
  ["Travis Schedler", "", "Imperial College London, UK", "Professor"],
  ["Mariano Suarez-Alvarez", "", "Universidad de Buenos Aires, Argentina", "Professor"],
  ["Oeyvind Solberg", "", "Norwegian University of Science and Technology, Norway", "Professor"],
  ["Yu Wang", "王钰", "Taiyuan Normal University", "Lecturer"],
  ["Sarah Witherspoon", "", "Texas A&M University, USA", "Professor"],
  ["Alexander Zimmermann", "", "Université de Picardie Jules Verne, France", "Professor"],
  ["Paul Balmer", "", "UCLA, USA", "Professor"],
  ["Chris Brav", "", "SIMIS", "Professor"],
  ["Benjamin Briggs", "", "Imperial College London, UK", "Associate Professor"],
  ["Ming Fang", "方明", "Chinese Academy of Sciences", "Professor"],
  ["Zhengping Gui", "桂政平", "SIMIS", "Assistant Professor"],
  ["Jiwei He", "何济位", "Hangzhou Normal University", "Professor"],
  ["Estanislao Herscovich", "", "Université Grenoble Alpes, France", "Associate Professor"],
  ["Zheng Hua", "华诤", "University of Hong Kong", "Associate Professor"],
  ["Tomohiro Itagaki", "", "Takasaki City University of Economics, Japan", "Associate Professor"],
  ["Srikanth B. Iyengar", "", "University of Utah, USA", "Professor"],
  ["Niels Kowalzig", "", "University of Rome Tor Vergata, Italy", "Associate Professor"],
  ["Ulrich Krähmer", "", "Technische Universität Dresden, Germany", "Professor"],
  ["Si Li", "李思", "Tsinghua University", "Professor"],
  ["Yuming Liu", "刘玉明", "Beijing Normal University", "Associate Professor"],
  ["Cris Negron", "", "University of Southern California, USA", "Associate Professor"],
  ["María Julia Redondo", "", "Universidad Nacional del Sur, Argentina", "Professor"],
  ["Junwu Tu", "涂君武", "ShanghaiTech University", "Professor"],
  ["Satoshi Usui", "", "Tokyo Metropolitan College of Industrial Technology, Japan", "Assistant Professor"],
  ["Kai Wang", "王凯", "University of Science and Technology of China", "Associate Researcher"],
  ["Quan-Shui Wu", "吴泉水", "Fudan University", "Professor"],
  ["Fei Xu", "徐斐", "Shantou University", "Professor"],
  ["Yu Ye", "叶郁", "University of Science and Technology of China", "Professor"],
  ["Hang Yuan", "袁航", "BIMSA", "Assistant Professor"],
];

const facts = [
  ["Suggested Dates", "Jan 18-22, 2027", "Five-day workshop, Monday through Friday."],
  ["Alternative Dates", "Jan 25-Feb 2, 2027", "Alternative schedule listed in the application form."],
  ["Participants", "50", "International meeting with broad geographic representation."],
  ["Talks", "21 + 10", "Twenty-one one-hour talks and ten ten-minute talks."],
];

const topics = [
  "16E40 Hochschild and cyclic homology",
  "16S80 Deformations of associative rings",
  "13D03 Homology of commutative rings",
  "13D10 Deformations in commutative ring theory",
  "14D15 Formal methods in algebraic geometry",
  "14J33 Mirror symmetry",
  "32Gxx Deformations of analytic structures",
  "53D37 Homological mirror symmetry",
  "53D55 Deformation quantization",
  "58H15 Deformations of structures on manifolds",
];

const programDays = [
  ["2027-01-18", "Monday, Jan 18", "Opening and foundations", "Opening remarks, plenary lectures and focused discussions on Hochschild theory and deformation problems."],
  ["2027-01-19", "Tuesday, Jan 19", "Algebra and representation theory", "One-hour talks and short communications on derived invariants, support varieties and related algebraic structures."],
  ["2027-01-20", "Wednesday, Jan 20", "Geometry and quantization", "Sessions on noncommutative geometry, formal methods, deformation quantization and star products."],
  ["2027-01-21", "Thursday, Jan 21", "Topology and mirror symmetry", "Lectures connecting Hochschild invariants with Fukaya categories, homological mirror symmetry and topology."],
  ["2027-01-22", "Friday, Jan 22", "Open problems and collaboration", "Final talks, short presentations, problem sessions and concluding discussion."],
];

const programSchedule = [
  {
    date: "Mon, 18 Jan 2027",
    items: [
      ["08:30 - 09:00", "Registration", "TSIMF Lobby", "Participant check-in"],
      ["09:00 - 09:15", "Opening", "TSIMF Lecture Hall", "Opening remarks"],
      ["09:15 - 10:15", "Invited Lecture 1", "TSIMF Lecture Hall", "Hochschild cohomology and deformation theory"],
      ["10:15 - 10:45", "Tea Break", "Tea Room", ""],
      ["10:45 - 11:45", "Invited Lecture 2", "TSIMF Lecture Hall", "Derived invariants and noncommutative geometry"],
      ["12:00 - 14:00", "Lunch Break", "", ""],
      ["14:00 - 15:00", "Invited Lecture 3", "TSIMF Lecture Hall", "Hochschild methods in algebra and geometry"],
      ["15:15 - 16:15", "Invited Lecture 4", "TSIMF Lecture Hall", "Open problems and perspectives"],
      ["16:15 - 16:45", "Tea Break", "Tea Room", ""],
      ["16:45 - 17:45", "Discussion Session", "Seminar Room", "Foundations and shared questions"],
    ],
  },
  {
    date: "Tue, 19 Jan 2027",
    items: [
      ["09:00 - 10:00", "Invited Lecture 5", "TSIMF Lecture Hall", "Representation theory and derived equivalences"],
      ["10:00 - 10:30", "Tea Break", "Tea Room", ""],
      ["10:30 - 11:30", "Invited Lecture 6", "TSIMF Lecture Hall", "Support varieties and homological invariants"],
      ["11:30 - 12:30", "Invited Lecture 7", "TSIMF Lecture Hall", "Associative algebras and deformation problems"],
      ["12:30 - 14:30", "Lunch Break", "", ""],
      ["14:30 - 15:30", "Invited Lecture 8", "TSIMF Lecture Hall", "Triangulated categories and Hochschild theory"],
      ["15:30 - 16:00", "Tea Break", "Tea Room", ""],
      ["16:00 - 17:00", "Invited Lecture 9", "TSIMF Lecture Hall", "Noncommutative geometry and algebraic structures"],
      ["17:00 - 17:40", "Short Communications", "Seminar Room", "Four ten-minute talks"],
    ],
  },
  {
    date: "Wed, 20 Jan 2027",
    items: [
      ["09:00 - 10:00", "Invited Lecture 10", "TSIMF Lecture Hall", "Formal methods in algebraic geometry"],
      ["10:00 - 10:30", "Tea Break", "Tea Room", ""],
      ["10:30 - 11:30", "Invited Lecture 11", "TSIMF Lecture Hall", "Deformation quantization and star products"],
      ["11:30 - 12:30", "Invited Lecture 12", "TSIMF Lecture Hall", "Hochschild-Kostant-Rosenberg phenomena"],
      ["12:30 - 14:30", "Lunch Break", "", ""],
      ["14:30 - 15:30", "Invited Lecture 13", "TSIMF Lecture Hall", "Operads, braces and Gerstenhaber structures"],
      ["15:30 - 16:00", "Tea Break", "Tea Room", ""],
      ["16:00 - 17:00", "Problem Session", "Seminar Room", "Deformation theory and quantization"],
    ],
  },
  {
    date: "Thu, 21 Jan 2027",
    items: [
      ["09:00 - 10:00", "Invited Lecture 14", "TSIMF Lecture Hall", "Homological mirror symmetry"],
      ["10:00 - 10:30", "Tea Break", "Tea Room", ""],
      ["10:30 - 11:30", "Invited Lecture 15", "TSIMF Lecture Hall", "Fukaya categories and Hochschild invariants"],
      ["11:30 - 12:30", "Invited Lecture 16", "TSIMF Lecture Hall", "Topology, field theory and categorical traces"],
      ["12:30 - 14:30", "Lunch Break", "", ""],
      ["14:30 - 15:30", "Invited Lecture 17", "TSIMF Lecture Hall", "Open and closed string structures"],
      ["15:30 - 16:00", "Tea Break", "Tea Room", ""],
      ["16:00 - 17:00", "Short Communications", "Seminar Room", "Six ten-minute talks"],
    ],
  },
  {
    date: "Fri, 22 Jan 2027",
    items: [
      ["09:00 - 10:00", "Invited Lecture 18", "TSIMF Lecture Hall", "Emerging links in Hochschild theory"],
      ["10:00 - 10:30", "Tea Break", "Tea Room", ""],
      ["10:30 - 11:30", "Invited Lecture 19", "TSIMF Lecture Hall", "Current directions in algebra and geometry"],
      ["11:30 - 12:30", "Invited Lecture 20", "TSIMF Lecture Hall", "Mathematical physics and categorical structures"],
      ["12:30 - 14:30", "Lunch Break", "", ""],
      ["14:30 - 15:30", "Invited Lecture 21", "TSIMF Lecture Hall", "Recent advances and future questions"],
      ["15:30 - 16:00", "Tea Break", "Tea Room", ""],
      ["16:00 - 17:00", "Closing Discussion", "Seminar Room", "Open problems, collaboration and concluding remarks"],
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function nav(active) {
  return navItems
    .map(([key, label, href]) => {
      const attrs = active === key ? ' class="active" aria-current="page"' : "";
      return `<a${attrs} href="${href}">${label}</a>`;
    })
    .join("\n        ");
}

function layout({ title, description, active, pageTitle, pageIntro, content, home = false }) {
  const heroClass = home ? "hero" : "page-hero";
  const heroInner = home
    ? `<div class="hero-content">
      <p class="eyebrow">Tsinghua Sanya International Mathematics Forum</p>
      <h1>Hochschild (Co)homology in Algebra, Geometry, Topology and Mathematical Physics</h1>
      <p class="hero-summary">
        The seventh meeting in an international conference series devoted to Hochschild cohomology and its applications across deformation theory, noncommutative geometry, representation theory, homological mirror symmetry and algebraic topology.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="program.html">View Program Outline</a>
        <a class="button secondary" href="http://www.tsimf.cn/" target="_blank" rel="noopener">Visit TSIMF ↗</a>
      </div>
    </div>`
    : `<div class="page-hero-content">
      <p class="eyebrow">TSIMF 2027</p>
      <h1>${pageTitle}</h1>
      <p>${pageIntro}</p>
    </div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="stylesheet" href="assets/site.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="index.html">
        TSIMF 2027
        <span>International Mathematics Conference</span>
      </a>
      <div class="nav-links">
        ${nav(active)}
      </div>
    </nav>
  </header>

  <section class="${heroClass}">
    <div class="math-background" aria-hidden="true">
      <span class="math-symbol symbol-one">HH<sup>*</sup>(A)</span>
      <span class="math-symbol symbol-two">C<sup>n</sup>(A,A)=Hom(A<sup>⊗n</sup>,A)</span>
      <span class="math-symbol symbol-three">D<sup>b</sup>Coh(X) ≃ Fuk(Y)</span>
      <span class="math-symbol symbol-four">f ★ g = fg + ℏ{f,g}+⋯</span>
      <span class="math-symbol symbol-five">Ext<sub>A<sup>e</sup></sub><sup>*</sup>(A,A)</span>
      <span class="math-symbol symbol-six">HKR: HH<sub>*</sub>(X) ≅ ⊕Ω<sup>p</sup><sub>X</sub>[p]</span>
      <span class="math-symbol symbol-seven">𝒪(k) ⊗ 𝒪(n<sub>1</sub>)⊗⋯⊗𝒪(n<sub>k</sub>) → 𝒪(Σn<sub>i</sub>)</span>
      <span class="math-symbol symbol-eight">γ(μ; x<sub>1</sub>,…,x<sub>k</sub>)</span>
      <span class="math-symbol symbol-nine">E<sub>2</sub> ≃ Ger</span>
      <span class="math-symbol symbol-ten">x ∘<sub>i</sub> y</span>
      <div class="math-diagram">
        <span class="node node-a">A</span>
        <span class="node node-b">B</span>
        <span class="node node-c">C</span>
        <span class="node node-d">D</span>
      </div>
      <div class="operad-tree">
        <span class="tree-dot tree-root">𝒪</span>
        <span class="tree-dot tree-left">𝒪</span>
        <span class="tree-dot tree-mid">𝒪</span>
        <span class="tree-dot tree-right">𝒪</span>
      </div>
    </div>
    ${heroInner}
  </section>

  <main id="main">
${content}
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <span>TSIMF International Mathematics Conference, 2027</span>
      <span>Based on the submitted conference application form.</span>
    </div>
  </footer>
</body>
</html>
`;
}

function section({ id = "", alt = false, body }) {
  return `    <section class="section${alt ? " alt" : ""}"${id ? ` id="${id}"` : ""}>
      <div class="container">
${body}
      </div>
    </section>`;
}

function heading(title, copy) {
  return `        <div class="section-heading">
          <h2>${title}</h2>
          <p>${copy}</p>
        </div>`;
}

function factsHtml() {
  return `<div class="facts">
${facts.map(([label, value, copy]) => `          <article class="fact">
            <span>${label}</span>
            <strong>${value}</strong>
            <p>${copy}</p>
          </article>`).join("\n")}
        </div>`;
}

function topicChips() {
  return `<ul class="chips" aria-label="Mathematics subject classifications">
${topics.map((item) => `          <li>${item}</li>`).join("\n")}
        </ul>`;
}

function programGrid() {
  return `<div class="program-grid">
${programDays.map(([date, label, title, copy]) => `          <article class="program-day">
            <time datetime="${date}">${label}</time>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>`).join("\n")}
        </div>`;
}

function programScheduleHtml() {
  return `<div class="schedule-board">
${programSchedule.map((day) => `          <article class="schedule-day">
            <h3>${escapeHtml(day.date)}</h3>
            <div class="schedule-list">
${day.items.map(([time, label, venue, note]) => `              <div class="schedule-row">
                <time>${escapeHtml(time)}</time>
                <div class="schedule-detail">
                  ${venue ? `<p class="schedule-venue">${escapeHtml(venue)}</p>` : ""}
                  <p class="schedule-title">${escapeHtml(label)}</p>
                  ${note ? `<p class="schedule-note">${escapeHtml(note)}</p>` : ""}
                </div>
              </div>`).join("\n")}
            </div>
          </article>`).join("\n")}
        </div>`;
}

function organizerCards() {
  return `<div class="people-grid">
${organizers.map((person) => `          <article class="person-card">
            <div>
              <h3>${person.name} <span class="name-cn">${person.chinese}</span></h3>
              <p>${person.affiliation}</p>
            </div>
            <div class="person-links">
              <a href="mailto:${person.email}">Email</a>
              <a href="${person.web}" target="_blank" rel="noopener">Web ↗</a>
            </div>
          </article>`).join("\n")}
        </div>`;
}

function participantsTable() {
  const fallbackRows = participants.map(([name, chinese, affiliation]) => ({
    Name: name,
    "Chinese Name": chinese,
    Affiliation: affiliation,
  }));
  const fallbackJson = JSON.stringify(fallbackRows).replace(/</g, "\\u003c");

  return `<div class="table-wrap participants-table-wrap">
          <table class="participants-table">
            <colgroup>
              <col class="col-name">
              <col class="col-chinese">
              <col class="col-affiliation">
            </colgroup>
            <thead>
              <tr>
                <th>Name</th>
                <th>Chinese Name</th>
                <th>Affiliation</th>
              </tr>
            </thead>
            <tbody id="participants-body">
            </tbody>
          </table>
        </div>
        <p class="table-status" id="participants-status" hidden></p>
        <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
        <script>
          (function () {
            var sourceFile = "participants.xlsx";
            var tbody = document.getElementById("participants-body");
            var status = document.getElementById("participants-status");
            var fallbackRows = ${fallbackJson};

            function cell(value) {
              return value == null ? "" : String(value);
            }

            function renderRows(rows) {
              tbody.innerHTML = "";
              rows.forEach(function (row) {
                var tr = document.createElement("tr");
                var values = [
                  cell(row.Name),
                  cell(row["Chinese Name"]),
                  cell(row.Affiliation),
                ];

                values.forEach(function (value, index) {
                  var td = document.createElement("td");
                  if (index === 0) {
                    var strong = document.createElement("strong");
                    strong.textContent = value;
                    td.appendChild(strong);
                  } else {
                    td.textContent = value;
                  }
                  tr.appendChild(td);
                });
                tbody.appendChild(tr);
              });
              status.hidden = true;
              status.textContent = "";
            }

            fetch(sourceFile)
              .then(function (response) {
                if (!response.ok) {
                  throw new Error("Unable to load " + sourceFile);
                }
                return response.arrayBuffer();
              })
              .then(function (buffer) {
                var workbook = XLSX.read(buffer, { type: "array" });
                var sheet = workbook.Sheets.Participants || workbook.Sheets[workbook.SheetNames[0]];
                var rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
                renderRows(rows);
              })
              .catch(function (error) {
                renderRows(fallbackRows);
                console.warn(error);
              });
          })();
        </script>`;
}

const homeContent = [
  section({
    body: `${heading("Conference Overview", "Core information adapted from the TSIMF international mathematics conference application form.")}
        ${factsHtml()}
        <div class="gateway-grid">
          <a class="gateway" href="overview.html"><strong>Overview</strong><span>Dates, scale and abstract</span></a>
          <a class="gateway" href="topics.html"><strong>Topics</strong><span>MSC areas and research scope</span></a>
          <a class="gateway" href="program.html"><strong>Program</strong><span>Five-day workshop outline</span></a>
          <a class="gateway" href="organizers.html"><strong>Organizers</strong><span>Organizing team and committees</span></a>
          <a class="gateway" href="participants.html"><strong>Participants</strong><span>Preliminary proposed list</span></a>
          <a class="gateway" href="contact.html"><strong>Contact</strong><span>Organizer email and TSIMF link</span></a>
        </div>`,
  }),
].join("\n");

const overviewContent = [
  section({
    body: `${heading("Conference Overview", "The main conference facts are separated into this page so the menu can link to a dedicated overview.")}
        ${factsHtml()}`,
  }),
  section({
    alt: true,
    body: `<div class="two-column">
          <div class="section-heading">
            <h2>Abstract</h2>
            <p>This meeting continues a series of international conferences devoted to Hochschild cohomology and its applications.</p>
          </div>
          <div class="prose">
            <p>This conference is the seventh of a series of international conferences devoted to Hochschild cohomology with applications in algebra, geometry, topology and mathematical physics, following previous editions at BIRS Canada, CIRM France, Buenos Aires Argentina, Oberwolfach Germany and other venues.</p>
            <p>The conference will bring together researchers working on Hochschild cohomology, deformation theory, noncommutative geometry, representation theory, homological mirror symmetry and algebraic topology, fostering interdisciplinary dialogue and collaboration.</p>
            <p>Emphasis will be placed on recent advances, open problems and emerging connections to other research fields.</p>
          </div>
        </div>`,
  }),
].join("\n");

const topicsContent = [
  section({
    body: `<div class="two-column">
          <div>
            ${heading("Research Scope", "The conference focuses on Hochschild theory as a shared language across algebra, geometry, topology and mathematical physics.")}
            <div class="callout">
              <p>Emphasis will be placed on recent advances, open problems and emerging connections among deformation theory, noncommutative geometry, representation theory, homological mirror symmetry and algebraic topology.</p>
            </div>
          </div>
          <div>
            ${topicChips()}
          </div>
        </div>`,
  }),
  section({
    alt: true,
    body: `<div class="two-column">
          <div class="section-heading">
            <h2>Aim and Background</h2>
            <p>Hochschild cohomology has grown from an invariant of associative algebras into a versatile tool for modern mathematics.</p>
          </div>
          <div class="prose">
            <p>Hochschild cohomology measures aspects of the noncommutative geometry of an algebra, probing deformation theory, smoothness and hidden homological structure. In deformation problems, its second group classifies infinitesimal deformations, and it forms part of the foundation for Kontsevich's deformation quantization.</p>
            <p>In algebraic and noncommutative geometry, the Hochschild-Kostant-Rosenberg theorem links Hochschild homology of smooth algebras with differential forms, allowing Hochschild theory to act as a noncommutative analogue of de Rham theory.</p>
            <p>The conference also highlights applications in topology and mathematical physics, especially through string theory and mirror symmetry, where Hochschild cohomology of categories such as the Fukaya category connects open-string structures with closed-string invariants.</p>
          </div>
        </div>`,
  }),
].join("\n");

const programContent = [
  section({
    body: `${heading("Program Outline", "Detailed speaker order can be added after confirmation. The schedule below follows the five-day workshop format and the proposed talk counts in the application form.")}
        ${programScheduleHtml()}`,
  }),
].join("\n");

const organizersContent = [
  section({
    body: `${heading("Organizers", "The organizing team combines mathematicians from Chinese mainland and international institutions.")}
        ${organizerCards()}`,
  }),
  section({
    alt: true,
    body: `${heading("Committees", "Committee names are adapted from the application form, with spelling normalized for web presentation.")}
        <div class="committee-list">
          <article class="committee">
            <h3>Scientific Committee</h3>
            <p>Bernhard Keller, Vladimir Dotsenko, Yang Han, Sibylle Schroll, Andrea Solotar</p>
          </article>
          <article class="committee">
            <h3>Local Organizing Committee</h3>
            <p>Xiao-Wu Chen, Yu Qiu, Zhengfang Wang, Guodong Zhou</p>
          </article>
        </div>`,
  }),
].join("\n");

const participantsContent = section({
  body: `${heading("Proposed Participants", "A preliminary participant list from the application form. Public contact details can be added only after confirmation.")}
        ${participantsTable()}`,
});

const contactContent = [
  section({
    body: `<div class="contact-band">
          <div>
            <h2>Contact</h2>
            <p>For conference-related questions, please contact the organizing team.</p>
          </div>
          <a class="button primary" href="mailto:xwchen@mail.ustc.edu.cn">Email the Organizers</a>
        </div>`,
  }),
  section({
    alt: true,
    body: `<div class="committee-list">
          <article class="committee">
            <h3>TSIMF</h3>
            <p><a href="http://www.tsimf.cn/" target="_blank" rel="noopener">www.tsimf.cn</a></p>
          </article>
          <article class="committee">
            <h3>Main Contact</h3>
            <p>Xiao-Wu Chen · <a href="mailto:xwchen@mail.ustc.edu.cn">xwchen@mail.ustc.edu.cn</a></p>
          </article>
        </div>`,
  }),
].join("\n");

const pages = [
  ["index.html", layout({
    title: "Hochschild (Co)homology Conference | TSIMF 2027",
    description: "TSIMF international mathematics conference on Hochschild (Co)homology in algebra, geometry, topology and mathematical physics.",
    active: "",
    home: true,
    content: homeContent,
  })],
  ["conference_site.html", layout({
    title: "Hochschild (Co)homology Conference | TSIMF 2027",
    description: "TSIMF international mathematics conference on Hochschild (Co)homology in algebra, geometry, topology and mathematical physics.",
    active: "",
    home: true,
    content: homeContent,
  })],
  ["overview.html", layout({
    title: "Overview | Hochschild (Co)homology Conference",
    description: "Overview page for the TSIMF 2027 Hochschild (Co)homology conference.",
    active: "overview",
    pageTitle: "Overview",
    pageIntro: "Dates, scale, abstract and basic details for the TSIMF international mathematics conference.",
    content: overviewContent,
  })],
  ["topics.html", layout({
    title: "Topics | Hochschild (Co)homology Conference",
    description: "Research topics and MSC areas for the TSIMF 2027 Hochschild (Co)homology conference.",
    active: "topics",
    pageTitle: "Topics",
    pageIntro: "Mathematics subject classifications and the research background of the conference.",
    content: topicsContent,
  })],
  ["program.html", layout({
    title: "Program | Hochschild (Co)homology Conference",
    description: "Program outline for the TSIMF 2027 Hochschild (Co)homology conference.",
    active: "program",
    pageTitle: "Program",
    pageIntro: "A five-day workshop outline based on the proposed January 18-22, 2027 schedule.",
    content: programContent,
  })],
  ["organizers.html", layout({
    title: "Organizers | Hochschild (Co)homology Conference",
    description: "Organizers and committees for the TSIMF 2027 Hochschild (Co)homology conference.",
    active: "organizers",
    pageTitle: "Organizers",
    pageIntro: "Organizing team, scientific committee and local organizing committee.",
    content: organizersContent,
  })],
  ["participants.html", layout({
    title: "Participants | Hochschild (Co)homology Conference",
    description: "Proposed participants for the TSIMF 2027 Hochschild (Co)homology conference.",
    active: "participants",
    pageTitle: "Participants",
    pageIntro: "Preliminary proposed participants adapted from the application form.",
    content: participantsContent,
  })],
  ["contact.html", layout({
    title: "Contact | Hochschild (Co)homology Conference",
    description: "Contact page for the TSIMF 2027 Hochschild (Co)homology conference.",
    active: "contact",
    pageTitle: "Contact",
    pageIntro: "Conference contact information and the TSIMF website link.",
    content: contactContent,
  })],
];

const css = `:root {
  --ink: #182422;
  --muted: #5b6864;
  --paper: #fbfaf5;
  --cloud: #f0f4ee;
  --teal: #0f6d6a;
  --teal-dark: #093f46;
  --coral: #c95c3f;
  --gold: #c79a32;
  --line: #d9dfd5;
  --white: #ffffff;
  --shadow: 0 16px 48px rgba(24, 36, 34, 0.12);
}

* {
  box-sizing: border-box;
  letter-spacing: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: var(--coral);
}

.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 20;
  padding: 0.6rem 0.9rem;
  color: var(--white);
  background: var(--teal-dark);
  border-radius: 6px;
}

.skip-link:focus {
  top: 1rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(251, 250, 245, 0.94);
  backdrop-filter: blur(16px);
}

.nav {
  width: min(1180px, calc(100% - 32px));
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: grid;
  gap: 0.1rem;
  font-weight: 800;
  line-height: 1.1;
}

.brand span {
  color: var(--teal);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.35rem;
  color: var(--muted);
  font-size: 0.94rem;
  font-weight: 650;
}

.nav-links a {
  padding: 0.55rem 0.65rem;
  border-radius: 6px;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--teal-dark);
  background: var(--cloud);
}

.hero,
.page-hero {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--white);
  isolation: isolate;
  background:
    linear-gradient(112deg, rgba(7, 47, 55, 0.98), rgba(13, 104, 99, 0.9) 48%, rgba(142, 119, 57, 0.7)),
    linear-gradient(22deg, transparent 0 46%, rgba(255, 255, 255, 0.18) 47%, transparent 49%),
    linear-gradient(115deg, transparent 0 57%, rgba(255, 255, 255, 0.12) 58%, transparent 60%),
    linear-gradient(140deg, #093f46, #0f6d6a 56%, #c95c3f);
}

.hero {
  min-height: 650px;
}

.page-hero {
  min-height: 330px;
}

.hero::before,
.page-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.36;
  background-image:
    linear-gradient(30deg, transparent 0 48%, rgba(255, 255, 255, 0.38) 49%, transparent 51%),
    linear-gradient(120deg, transparent 0 55%, rgba(255, 255, 255, 0.22) 56%, transparent 58%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 220px 220px, 280px 280px, 92px 92px, 92px 92px;
  mask-image: linear-gradient(90deg, transparent, #000 28%, #000);
}

.hero::after,
.page-hero::after {
  content: "";
  position: absolute;
  right: -8rem;
  top: -10rem;
  z-index: 0;
  width: 36rem;
  height: 36rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  transform: rotate(18deg);
}

.math-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

.math-symbol {
  position: absolute;
  max-width: 34rem;
  color: rgba(255, 255, 255, 0.2);
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 12px 34px rgba(0, 0, 0, 0.18);
  white-space: nowrap;
}

.math-symbol sup,
.math-symbol sub {
  font-size: 0.62em;
  line-height: 0;
}

.symbol-one {
  right: 5%;
  top: 21%;
  font-size: 4.4rem;
  transform: rotate(-8deg);
}

.symbol-two {
  right: 4%;
  bottom: 19%;
  font-size: 1.85rem;
  transform: rotate(2deg);
}

.symbol-three {
  left: 45%;
  top: 10%;
  font-size: 2.15rem;
  color: rgba(255, 255, 255, 0.18);
  transform: rotate(7deg);
}

.symbol-four {
  left: auto;
  right: 8%;
  bottom: 4%;
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.14);
}

.symbol-five {
  left: 6%;
  bottom: 12%;
  font-size: 2.45rem;
  color: rgba(255, 255, 255, 0.18);
  transform: rotate(-5deg);
}

.symbol-six {
  right: 15%;
  top: 46%;
  font-size: 1.55rem;
  color: rgba(255, 255, 255, 0.18);
  transform: rotate(-3deg);
}

.symbol-seven {
  right: 5%;
  top: 54%;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.09);
  transform: rotate(-4deg);
}

.symbol-eight {
  left: 16%;
  top: 16%;
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.14);
  transform: rotate(-7deg);
}

.symbol-nine {
  right: 33%;
  top: 40%;
  font-size: 2.1rem;
  color: rgba(255, 255, 255, 0.12);
  transform: rotate(-5deg);
}

.symbol-ten {
  left: 39%;
  bottom: 21%;
  font-size: 1.65rem;
  color: rgba(255, 255, 255, 0.14);
  transform: rotate(8deg);
}

.page-hero .symbol-one {
  font-size: 3.15rem;
}

.page-hero .symbol-two,
.page-hero .symbol-four,
.page-hero .symbol-six,
.page-hero .symbol-seven,
.page-hero .symbol-ten {
  display: none;
}

.page-hero .symbol-three {
  left: auto;
  right: 10%;
  top: 17%;
  font-size: 1.9rem;
}

.page-hero .symbol-five {
  bottom: 8%;
  font-size: 1.9rem;
}

.page-hero .symbol-eight {
  left: auto;
  right: 6%;
  top: 54%;
  font-size: 1.45rem;
}

.page-hero .symbol-nine {
  right: 44%;
  top: 64%;
  font-size: 1.45rem;
}

.math-diagram {
  position: absolute;
  right: 9%;
  top: 30%;
  width: 19rem;
  height: 11rem;
  opacity: 0.3;
  transform: rotate(-6deg);
}

.math-diagram::before,
.math-diagram::after {
  content: "";
  position: absolute;
  left: 2.1rem;
  right: 2.1rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.58);
}

.math-diagram::before {
  top: 2.15rem;
  transform: rotate(14deg);
}

.math-diagram::after {
  bottom: 2.15rem;
  transform: rotate(-14deg);
}

.node {
  position: absolute;
  display: grid;
  width: 2.4rem;
  height: 2.4rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.72);
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
}

.node-a {
  left: 0;
  top: 0.6rem;
}

.node-b {
  right: 0;
  top: 0.6rem;
}

.node-c {
  left: 0;
  bottom: 0.6rem;
}

.node-d {
  right: 0;
  bottom: 0.6rem;
}

.operad-tree {
  position: absolute;
  right: 18%;
  top: 9%;
  width: 12rem;
  height: 10rem;
  opacity: 0.23;
  transform: rotate(8deg);
}

.operad-tree::before,
.operad-tree::after {
  content: "";
  position: absolute;
  left: 2.4rem;
  top: 4.4rem;
  width: 7.2rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.62);
  transform-origin: left center;
}

.operad-tree::before {
  transform: rotate(28deg);
}

.operad-tree::after {
  transform: rotate(-28deg);
}

.tree-dot {
  position: absolute;
  display: grid;
  width: 2.6rem;
  height: 2.6rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.56);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.72);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 800;
}

.tree-root {
  left: 4.7rem;
  top: 0;
}

.tree-left {
  left: 0;
  bottom: 0;
}

.tree-mid {
  left: 4.7rem;
  bottom: 0;
}

.tree-right {
  right: 0;
  bottom: 0;
}

.hero-content,
.page-hero-content {
  position: relative;
  z-index: 2;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.hero-content {
  padding: 5rem 0 6rem;
}

.page-hero-content {
  padding: 4rem 0;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 1.1rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 2.1rem;
  height: 2px;
  background: var(--gold);
}

h1 {
  width: min(900px, 100%);
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 4.2rem;
  line-height: 1.04;
  font-weight: 760;
}

.page-hero h1 {
  font-size: 3.1rem;
}

.hero-summary,
.page-hero p:not(.eyebrow) {
  width: min(780px, 100%);
  margin: 1.4rem 0 2rem;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.1rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.68rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  font-weight: 800;
}

.button.primary {
  color: var(--ink);
  border-color: var(--white);
  background: var(--white);
}

.button.secondary {
  color: var(--white);
  background: rgba(255, 255, 255, 0.08);
}

.section {
  padding: 5rem 0;
}

.section.alt {
  background: var(--cloud);
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 2rem;
}

.section-heading p {
  margin: 0.7rem 0 0;
  color: var(--muted);
  font-size: 1.03rem;
}

h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.35rem;
  line-height: 1.15;
}

h3 {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.25;
}

.facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.fact,
.program-day,
.person-card,
.committee,
.gateway {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0 8px 26px rgba(24, 36, 34, 0.06);
}

.fact {
  min-height: 150px;
  padding: 1.15rem;
}

.fact span {
  display: block;
  color: var(--coral);
  font-size: 0.78rem;
  font-weight: 850;
  text-transform: uppercase;
}

.fact strong {
  display: block;
  margin-top: 0.55rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.65rem;
  line-height: 1.15;
}

.fact p,
.program-day p,
.person-card p,
.committee p,
.gateway span {
  margin: 0.55rem 0 0;
  color: var(--muted);
  font-size: 0.96rem;
}

.gateway-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.gateway {
  display: grid;
  min-height: 118px;
  align-content: start;
  padding: 1rem;
}

.gateway strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.3rem;
}

.two-column {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 2.2rem;
  align-items: start;
}

.callout {
  padding: 1.25rem;
  border-left: 4px solid var(--coral);
  border-radius: 0 8px 8px 0;
  background: var(--white);
  box-shadow: 0 8px 26px rgba(24, 36, 34, 0.06);
}

.callout p {
  margin: 0;
  color: var(--muted);
}

.prose p {
  margin: 0 0 1rem;
  color: #26312f;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.chips li {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.38rem 0.62rem;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--white);
  color: var(--teal-dark);
  font-size: 0.9rem;
  font-weight: 720;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.9rem;
}

.program-day {
  min-height: 180px;
  padding: 1rem;
}

.program-day time {
  display: block;
  color: var(--coral);
  font-size: 0.84rem;
  font-weight: 850;
}

.schedule-board {
  display: grid;
  gap: 1.15rem;
  max-width: 920px;
}

.schedule-day {
  padding: 1.05rem 1.2rem;
  border: 1px solid var(--line);
  border-left: 4px solid var(--teal);
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0 8px 26px rgba(24, 36, 34, 0.06);
}

.schedule-day h3 {
  margin: 0 0 0.65rem;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.35rem;
}

.schedule-list {
  display: grid;
}

.schedule-row {
  display: grid;
  grid-template-columns: 7.4rem minmax(0, 1fr);
  gap: 1.15rem;
  padding: 0.56rem 0;
  border-top: 1px solid var(--line);
}

.schedule-row:first-child {
  border-top: 0;
}

.schedule-row time {
  color: var(--ink);
  font-size: 0.9rem;
  line-height: 1.35;
  white-space: nowrap;
}

.schedule-detail {
  min-width: 0;
}

.schedule-detail p {
  margin: 0;
}

.schedule-venue {
  color: var(--teal);
  font-size: 0.88rem;
  font-weight: 800;
}

.schedule-title {
  color: #164fa3;
  font-size: 0.98rem;
  font-weight: 820;
  line-height: 1.35;
}

.schedule-note {
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.45;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.person-card {
  display: flex;
  min-height: 250px;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
}

.person-card .name-cn {
  color: var(--teal);
  font-weight: 800;
}

.person-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 800;
}

.person-links a {
  padding: 0.34rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--teal-dark);
  background: var(--cloud);
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0 8px 26px rgba(24, 36, 34, 0.06);
}

.table-status {
  margin: 1rem 0 0;
  color: var(--muted);
  font-size: 0.94rem;
}

.table-status a {
  color: var(--teal);
  font-weight: 800;
}

.table-status.error {
  color: var(--coral);
  font-weight: 750;
}

.table-status.warning {
  color: #84621a;
  font-weight: 750;
}

table {
  width: 100%;
  min-width: 860px;
  border-collapse: collapse;
}

.participants-table {
  min-width: 760px;
  table-layout: fixed;
}

.participants-table .col-name {
  width: 28%;
}

.participants-table .col-chinese {
  width: 17%;
}

.participants-table .col-affiliation {
  width: 55%;
}

th,
td {
  padding: 0.78rem 0.9rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--line);
}

th {
  color: var(--teal-dark);
  background: #f6f2e7;
  font-size: 0.86rem;
  text-transform: uppercase;
}

tr:last-child td {
  border-bottom: 0;
}

td {
  color: var(--muted);
  font-size: 0.95rem;
}

td strong {
  color: var(--ink);
}

.participants-table th,
.participants-table td {
  padding: 0.78rem 1rem;
}

.participants-table th:first-child,
.participants-table td:first-child {
  padding-left: 1.15rem;
}

.participants-table th:nth-child(2),
.participants-table td:nth-child(2) {
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}

.participants-table td {
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.participants-table td:nth-child(2) {
  white-space: nowrap;
}

.committee-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.committee {
  padding: 1.2rem;
}

.contact-band {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  color: var(--white);
  background: linear-gradient(110deg, var(--teal-dark), var(--teal) 62%, var(--coral));
}

.contact-band p {
  margin: 0.35rem 0 0;
  color: rgba(255, 255, 255, 0.82);
}

.site-footer {
  padding: 2rem 0;
  color: rgba(255, 255, 255, 0.75);
  background: #182422;
}

.footer-inner {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.92rem;
}

@media (max-width: 980px) {
  .hero {
    min-height: 600px;
  }

  .symbol-one {
    right: 2%;
    top: 24%;
    font-size: 3.5rem;
  }

  .symbol-two {
    right: 2%;
    font-size: 1.45rem;
  }

  .symbol-three {
    display: none;
  }

  .symbol-five {
    font-size: 1.9rem;
  }

  .math-diagram {
    right: 2%;
    top: 35%;
  }

  .operad-tree {
    right: 4%;
    top: 8%;
  }

  .symbol-seven {
    right: 1rem;
    font-size: 1rem;
  }

  .symbol-eight {
    left: 8%;
    font-size: 1.35rem;
  }

  h1 {
    font-size: 3.1rem;
  }

  .page-hero h1 {
    font-size: 2.55rem;
  }

  .facts,
  .program-grid,
  .people-grid,
  .gateway-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .two-column,
  .committee-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .nav {
    align-items: flex-start;
    flex-direction: column;
    padding: 0.9rem 0;
  }

  .nav-links {
    justify-content: flex-start;
  }

  .hero {
    min-height: 580px;
  }

  .page-hero {
    min-height: 280px;
  }

  .hero::after,
  .page-hero::after {
    right: -12rem;
    top: -12rem;
    width: 28rem;
    height: 28rem;
  }

  .math-diagram,
  .operad-tree,
  .symbol-two,
  .symbol-four,
  .symbol-six,
  .symbol-seven,
  .symbol-eight,
  .symbol-ten,
  .page-hero .symbol-three {
    display: none;
  }

  .symbol-one,
  .page-hero .symbol-one {
    right: -2rem;
    top: 16%;
    font-size: 2.8rem;
  }

  .symbol-three {
    display: block;
    left: auto;
    right: 1rem;
    top: 58%;
    font-size: 1.25rem;
  }

  .symbol-five,
  .page-hero .symbol-five {
    left: 1rem;
    bottom: 8%;
    font-size: 1.45rem;
  }

  .hero-content {
    padding: 4rem 0 5rem;
  }

  .page-hero-content {
    padding: 3rem 0;
  }

  h1,
  .page-hero h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  .section {
    padding: 3.4rem 0;
  }

  .facts,
  .program-grid,
  .people-grid,
  .gateway-grid {
    grid-template-columns: 1fr;
  }

  .contact-band {
    align-items: flex-start;
    flex-direction: column;
  }

  .schedule-board {
    max-width: none;
  }

  .schedule-day {
    padding: 0.95rem 1rem;
  }

  .schedule-row {
    grid-template-columns: 1fr;
    gap: 0.2rem;
    padding: 0.68rem 0;
  }

  .schedule-row time {
    font-weight: 800;
  }
}
`;

fs.writeFileSync(path.join(assetsDir, "site.css"), css);
for (const [filename, html] of pages) {
  fs.writeFileSync(path.join(outDir, filename), html);
}

console.log(`Generated ${pages.length} HTML files and assets/site.css`);
