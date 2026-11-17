/* Data for the supervision sub-pages and the Research Assistant page.
   Add a new record by copying one block inside the right list. */

/* Master's thesis supervision (bimbingan tesis) */
window.MASTERS_THESES = [
  // { year: "2026", name: "Student name", title: "Thesis title", program: "Magister Ilmu Komputer", role: "Primary" }
];

/* Competition supervision (bimbingan lomba) */
window.COMPETITIONS = [
  {
    date: "Oct 2026", year: "2026",
    result: "Winner",
    event: "NESCO 3",
    title: "ALVA — an innovation for early detection of Alzheimer’s disease",
    team: "FILKOM UB student team",
    note: "",
    url: "https://filkom.ub.ac.id/2026/10/07/tim-filkom-ub-raih-juara-di-nesco-3-melalui-inovasi-alva-untuk-deteksi-dini-alzheimer/"
  },
  {
    date: "Nov 2025", year: "2025",
    result: "Best Presenter",
    event: "1st International Conference on Data Science and Geoinformatics (ICDSG 2025), Bali",
    title: "A Lightweight Convolutional Neural Network Architecture for Intelligent Classification of Patient Food Leftovers’ Levels",
    team: "Sekar Parameswara Meilia Soegiharto",
    note: "Co-supervised with Sigit Adinugroho, Ph.D. Students Ahmad Jawahirul Islami, Baghas Rizaluddin, Diah Wahyu Fitrianingsih, and Nico Arya Divano also presented at the conference.",
    url: "https://filkom.ub.ac.id/2025/12/05/mahasiswa-filkom-ub-tunjukkan-keunggulan-riset-di-icdsg-2025-best-presenter-diraih/"
  }
];

/* Internship supervision (bimbingan magang / PKL) */
window.INTERNSHIPS = [
  // { year: "2026", name: "Student name", company: "Company / institution", topic: "Internship topic", program: "MBKM / PKL" }
];

/* Research assistants — shown on research-assistant.html.
   For each member: name, period, research topic, and the achievements earned while in the team.
   Each achievement: year, title (award / paper / competition), and an optional url (news, DOI, certificate). */
window.RESEARCH_ASSISTANTS = [
  // {
  //   name: "Student name",
  //   period: "2025–now",
  //   topic: "Smart Nutrition — food segmentation",
  //   achievements: [
  //     { year: "2025", title: "Best Presenter, ICDSG 2025", url: "https://..." },
  //     { year: "2026", title: "Paper published in ...", url: "https://doi.org/..." }
  //   ]
  // },
];

/* ---- rendering helpers (no need to edit) ---- */
window.svEsc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
window.svEmpty = function (msg) { return '<div class="empty">' + msg + '</div>'; };
