// Set the public email address that should receive artwork inquiries.
const artistEmail = "jacob.cruz.9353@gmail.com";

if (artistEmail.trim()) {
  document.querySelectorAll("[data-artwork]").forEach(link => {
    const title = link.dataset.artwork;
    const subject = `Purchase inquiry: ${title} — Ilona’s Art`;
    const body = `Hi Ilona,\n\nI’m interested in purchasing ${title}. Is it available? Please let me know the price and shipping or collection options.\n\nThank you!\n`;
    link.href = `mailto:${artistEmail.trim()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.removeAttribute("aria-disabled");
    link.setAttribute("aria-label", `Ask about purchasing ${title}`);
  });
  document.getElementById("email-help").textContent = "Opens your email app with a ready-to-edit inquiry. Send the email to contact Ilona; clicking does not reserve or purchase a piece.";
}
