// Sample resource allocation details (replace with actual data if available)
const resourceAllocationDetails = [
    { type: "Funding", amount: "$100,000" },
    { type: "Manpower", amount: "10 team members" },
    { type: "Technology Support", amount: "Access to cutting-edge tools and platforms" }
  ];
  
  // Function to generate resource allocation details dynamically
  function generateResourceAllocationDetails() {
    const allocationDetails = document.getElementById("allocationDetails");
    resourceAllocationDetails.forEach(detail => {
      const detailItem = document.createElement("div");
      detailItem.classList.add("allocation-detail");
      detailItem.innerHTML = `
        <span class="type">${detail.type}:</span>
        <span class="amount">${detail.amount}</span>
      `;
      allocationDetails.appendChild(detailItem);
    });
  }
  
  // Call the function to generate resource allocation details when the page loads
  window.onload = generateResourceAllocationDetails;
  