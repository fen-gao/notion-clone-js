const showDropdown = () => {
  console.log("showDropdown called");
  const inputField = document.getElementById("inputField");
  const dropdown = document.getElementById("dropdown");
  if (!inputField || !dropdown) {
    console.error("Erro: The dropdown or inputField element is not found.");
    return;
  }

  const rect = inputField.getBoundingClientRect();
  dropdown.style.top = `${rect.bottom + window.scrollY}px`;
  dropdown.style.left = `${rect.left + window.scrollX}px`;
  dropdown.style.display = "block";
  console.log("Showing dropdown");
  document.getElementById("filterInput").focus();
};

const hideDropdown = () => {
  console.log("hideDropdown called");
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    dropdown.style.display = "none";
    document.getElementById("filterInput").value = "";
    filterDropdown();
    console.log("Dropdown hid");
  } else {
    console.error("Erro: The dropdown element is not found.");
  }
};

const handleDropdownSelection = (type) => {
  console.log("handleDropdownSelection chamada com tipo:", type);
  selectedType = getSelectedType(type);
  hideDropdown();
  addContent(selectedType);
  resetInputField();
};

const filterDropdown = () => {
  console.log("filterDropdown chamada");
  const filterInput = document.getElementById("filterInput");
  if (!filterInput) {
    console.error("Erro: Elemento filterInput não encontrado.");
    return;
  }

  const filterValue = filterInput.value.toLowerCase();
  const items = document.querySelectorAll(".dropdown-item");

  let count = 0;
  items.forEach((item) => {
    const text = item.querySelector(".title").textContent.toLowerCase();
    if (text.includes(filterValue)) {
      item.style.display = "flex";
      count++;
    } else {
      item.style.display = "none";
    }
  });

  document.querySelector(".filtering-type").textContent = count;
  console.log("Dropdown filtrado, itens visíveis:", count);
};
