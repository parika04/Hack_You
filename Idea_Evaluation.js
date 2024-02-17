// Sample evaluation criteria (replace with actual data if available)
const evaluationCriteria = [
    { name: "Feasibility", description: "Assessing the practicality and likelihood of success of the idea." },
    { name: "Impact", description: "Determining the potential positive outcomes and benefits of implementing the idea." },
    { name: "Alignment", description: "Evaluating how well the idea aligns with the organization's strategic objectives and goals." },
    { name: "Scalability", description: "Considering the ability of the idea to be expanded or replicated on a larger scale." }
  ];
  
  // Function to generate evaluation criteria dynamically
  function generateEvaluationCriteria() {
    const criteriaContainer = document.getElementById("criteriaContainer");
    evaluationCriteria.forEach(criteria => {
      const criteriaCard = document.createElement("div");
      criteriaCard.classList.add("criteria-card");
      criteriaCard.innerHTML = `
        <h3>${criteria.name}</h3>
        <p>${criteria.description}</p>
      `;
      criteriaContainer.appendChild(criteriaCard);
    });
  }
  
  // Call the function to generate evaluation criteria when the page loads
  window.onload = generateEvaluationCriteria;
  