// Sample array of ideas (replace with actual data if available)
const ideas = [
    { title: "Virtual Innovation Marketplace", description: "A platform where users can buy, sell, or exchange intellectual property rights, patents, and innovative technologies. Facilitate transactions and negotiations between buyers and sellers to stimulate innovation ecosystem growth." },
    { title: "Innovation Newsfeed", description: "Curate a dynamic newsfeed featuring the latest innovation news, industry updates, and success stories from around the world. Enable users to personalize their feed based on their interests and preferences." },
    { title: "Innovation Podcast Series", description: "Launch a podcast series featuring interviews, discussions, and thought-provoking conversations on innovation topics. Invite guests from diverse backgrounds, including entrepreneurs, academics, policymakers, and thought leaders." }
  ];
  
  // Function to generate idea cards dynamically
  function generateIdeaCards() {
    const ideaContainer = document.getElementById("ideaContainer");
    ideas.forEach(idea => {
      const ideaCard = document.createElement("div");
      ideaCard.classList.add("idea-card");
      ideaCard.innerHTML = `
        <h3>${idea.title}</h3>
        <p>${idea.description}</p>
      `;
      ideaContainer.appendChild(ideaCard);
    });
  }
  
  // Call the function to generate idea cards when the page loads
  window.onload = generateIdeaCards;
  