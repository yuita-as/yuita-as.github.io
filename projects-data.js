/* Research projects. Add a new project by copying one block.
   Funding amounts are intentionally not published; only the funding scheme is shown. */
window.PROJECTS = {
  "nutrition-box": {
    year: "2026", area: "Smart Nutrition",
    title: "Multimodal AI Smart Nutrition Box",
    short: "Estimating hospital food leftovers and caloric intake through multimodal perception.",
    tags: ["Computer Vision", "RGB-D", "Health AI"],
    summary: "An intelligent meal-box ecosystem for estimating food leftovers and caloric intake from multimodal visual data.",
    problem: "Hospital nutrition monitoring still depends heavily on manual observation. That process is slow, subjective, and difficult to scale across patients and meal periods. This project develops an objective visual pipeline that connects what is served, what remains, and what is consumed.",
    methods: ["Food instance segmentation and recognition", "RGB-D geometry and food-volume estimation", "Multimodal fusion for calorie and nutrient inference", "Edge-ready inference for practical deployment"],
    impact: "Supports nutritionists and care teams with consistent intake evidence, enables longitudinal monitoring, and reduces the operational burden of dietary assessment.",
    funding: "Penelitian Unggulan DIPA",
    domain: "Health Informatics · Computer Vision",
    students: ["Ahmad Jawahirul Islami — visual food-leftover regression", "Baghas Rizaluddin — food segmentation and depth estimation", "Sekar P. M. Soegiharto — lightweight CNN classification", "Theresa Yolanda Sinaga — color and texture features"]
  },
  "disaster": {
    year: "2026", area: "Decision Support",
    title: "Adaptive Disaster Scale Intelligence",
    short: "Spatio-temporal context modeling for rapid, evidence-driven disaster assessment.",
    tags: ["Spatio-temporal AI", "DSS"],
    summary: "A context-aware decision-support system for identifying disaster scale using spatio-temporal evidence.",
    problem: "Disaster information arrives from multiple places, at different times, and with uneven reliability. Decision-makers need a structured way to interpret changing context without losing the geographic and temporal relationships between signals.",
    methods: ["Spatio-temporal feature modeling", "Adaptive context representation", "Multi-source evidence integration", "Interpretable decision-support scoring"],
    impact: "Faster, more consistent disaster-scale assessment that supports resource prioritization and coordinated response.",
    funding: "DRPM RKI PTN BH",
    domain: "Decision Support · Spatio-temporal AI",
    students: []
  },
  "food-ai": {
    year: "2025", area: "Food Intelligence",
    title: "Food & Ingredient Understanding",
    short: "Recognizing food types and predicting ingredient composition from meal imagery.",
    tags: ["Deep Learning", "CLIP"],
    summary: "Deep-learning methods for food recognition and ingredient-composition prediction from meal images.",
    problem: "Recognizing a dish is not the same as understanding what it contains. Real dietary support needs models that move beyond a single label and reason about composition, preparation variation, and visually ambiguous ingredients.",
    methods: ["Fine-grained food classification", "Vision-language representation learning", "Zero-shot ingredient prediction with CLIP", "Multi-label composition modeling"],
    impact: "Advances automatic dietary documentation and personalized dietary-compliance support, particularly after hospital discharge.",
    funding: "DIPA FILKOM",
    domain: "Deep Learning · Smart Nutrition",
    students: ["Connected to supervised undergraduate studies on food recognition."]
  },
  "blood-cell": {
    year: "2025", area: "Biomedical AI",
    title: "Blood Cell Quantification",
    short: "Contrastive representation learning to address limited biomedical image data.",
    tags: ["Contrastive Learning", "Microscopy"],
    summary: "Contrastive representation learning for robust blood-cell component quantification under limited-data conditions.",
    problem: "Biomedical-image models often face small, imbalanced, or difficult-to-annotate datasets. Direct regression can become unstable when image diversity is high and labels are expensive.",
    methods: ["Contrastive representation learning", "Fine-tuned visual backbones", "Direct image regression", "Limited-data evaluation protocols"],
    impact: "More data-efficient cell quantification to strengthen computer-assisted analysis in constrained biomedical settings.",
    funding: "Universitas Brawijaya",
    domain: "Biomedical Imaging · Representation Learning",
    students: ["Connected publication: Improving Direct Image Regression for Blood Cell Enumeration with a Fine-Tuned Backbone."]
  }
};
