// Load saved preferences on page load
window.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  
    // Apply saved font size
    const fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
      document.body.style.fontSize = fontSize;
      document.getElementById("fontSize").value = fontSize;
    }
  
    // Apply saved accent color
    const accentColor = localStorage.getItem("accentColor");
    if (accentColor) {
      document.documentElement.style.setProperty("--accent-color", accentColor);
      document.getElementById("accentColor").value = accentColor;
    }
  });
  
  // Toggle theme on button click
  const toggleBtn = document.getElementById("toggleBtn");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  
    // Add animation
    toggleBtn.classList.add("animate-button");
  
    // Save theme
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
  
    // Cleanup animation class after run
    toggleBtn.addEventListener(
      "animationend",
      () => {
        toggleBtn.classList.remove("animate-button");
      },
      { once: true }
    );
  });
  
  // Handle preferences form
  document.getElementById("preferencesForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const fontSize = document.getElementById("fontSize").value;
    const accentColor = document.getElementById("accentColor").value;
  
    // Save preferences
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("accentColor", accentColor);
  
    // Apply preferences
    document.body.style.fontSize = fontSize;
    document.documentElement.style.setProperty("--accent-color", accentColor);
  
    alert("Preferences saved!");
  });
  