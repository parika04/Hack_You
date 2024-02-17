// Sample progress milestones (replace with actual data if available)
const progressMilestones = [
    { milestone: "Idea Submission", date: "January 1, 2024" },
    { milestone: "Initial Review", date: "February 1, 2024" },
    { milestone: "Approval for Development", date: "March 1, 2024" },
    { milestone: "Implementation Started", date: "April 1, 2024" },
    { milestone: "Testing and Refinement", date: "May 1, 2024" },
    { milestone: "Launch", date: "June 1, 2024" }
  ];
  
  // Function to generate progress milestones dynamically
  function generateProgressMilestones() {
    const milestonesList = document.getElementById("milestonesList");
    progressMilestones.forEach(milestone => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="milestone">${milestone.milestone}</span>
        <span class="date">${milestone.date}</span>
      `;
      milestonesList.appendChild(listItem);
    });
  }
  
  // Call the function to generate progress milestones when the page loads
  window.onload = generateProgressMilestones;