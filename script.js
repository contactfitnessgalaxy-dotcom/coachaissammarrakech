// ====== EDIT THESE DETAILS BEFORE PUBLISHING ======
const CONFIG = {
  whatsapp: "212600000000", // Replace with your WhatsApp number, country code included, no + or spaces.
  instagram: "https://instagram.com/", // Replace with your Instagram profile URL.
  email: "your@email.com",
  location: "Marrakech, Morocco"
};
// =================================================

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(window.scrollY / h) * 100}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function whatsappUrl(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
const float = document.getElementById("whatsappFloat");
float.href = whatsappUrl("Hi Aissam, I'm interested in personal training. I'd like to know more about your programs.");

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const goal = document.getElementById("goal").value;
  const message = document.getElementById("message").value.trim();
  const text = `Hi Aissam, I'm ${name}.%0A%0AMy goal: ${goal}%0AMy phone: ${phone}%0A${message ? "Message: " + message : ""}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
});
