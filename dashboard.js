const authDialog = document.getElementById("authDialog");
const helpDialog = document.getElementById("helpDialog");
document
  .getElementById("openAuthBtn")
  .addEventListener("click", () => authDialog.showModal());
document
  .getElementById("closeAuthBtn")
  .addEventListener("click", () => authDialog.close());
document
  .getElementById("helpBtn")
  .addEventListener("click", () => helpDialog.showModal());
document
  .getElementById("closeHelpBtn")
  .addEventListener("click", () => helpDialog.close());
document.getElementById("helpContactBtn").addEventListener("click", () => {
  helpDialog.close();
  document.getElementById("contactBtn").click();
});
for (const dialog of [authDialog, helpDialog]) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    }
  });
}
document.getElementById("quickExpenseBtn").addEventListener("click", () => {
  const target = state.participants.length
    ? document.getElementById("expTitle")
    : document.getElementById("participantName");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.focus({ preventScroll: true });
});
document.querySelectorAll("nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll("nav .nav-link")
      .forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Search the current expense rows without changing stored expenses or totals.
const expenseSearch = document.getElementById("expenseSearch");
const searchMessage = document.createElement("p");
searchMessage.className = "search-empty";
searchMessage.textContent = "검색 결과가 없습니다.";
searchMessage.hidden = true;
document.getElementById("expenseList").append(searchMessage);
function filterExpenseRows() {
  const query = expenseSearch.value.trim().toLocaleLowerCase();
  let matches = 0;
  document.querySelectorAll("#expensesTable tbody tr").forEach((row) => {
    row.hidden = !row.textContent.toLocaleLowerCase().includes(query);
    if (!row.hidden) matches++;
  });
  searchMessage.hidden = !query || matches > 0 || state.expenses.length === 0;
}
expenseSearch.addEventListener("input", filterExpenseRows);
document.addEventListener("expensesupdated", filterExpenseRows);
expenseSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter")
    document
      .getElementById("expenseList")
      .scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey &&
    !event.target.closest("input, textarea, select, [contenteditable], dialog")
  ) {
    event.preventDefault();
    expenseSearch.focus();
  }
});
