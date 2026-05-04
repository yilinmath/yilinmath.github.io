import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

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

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Participants");
const headers = ["Name", "Chinese Name", "Affiliation", "Title"];
const rows = [headers, ...participants];

sheet.getRange(`A1:D${rows.length}`).values = rows;
sheet.getRange("A1:D1").style = {
  fontWeight: "bold",
  fillColor: "#f6f2e7",
  fontColor: "#093f46",
};

sheet.getRange("A:D").style = {
  verticalAlign: "top",
};

const notes = workbook.worksheets.add("Readme");
notes.getRange("A1:B4").values = [
  ["Workbook", "TSIMF 2027 proposed participants"],
  ["Source", "Application form supplied by the user"],
  ["Web usage", "participants.html reads this workbook at runtime"],
  ["Public contact details", "Email addresses are intentionally omitted from this public list"],
];

await fs.mkdir("outputs/participants", { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save("participants.xlsx");
await exported.save("outputs/participants/participants.xlsx");

const inspection = await workbook.inspect({
  kind: "table",
  range: "Participants!A1:D8",
  include: "values",
  tableMaxRows: 8,
  tableMaxCols: 4,
});
console.log(inspection.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);
