class CustomColumnManager {
  static init() {
    document.getElementById("addCustomColumnBtn").addEventListener("click", () => {
      CustomColumnManager.addCustomColumn();
    });

    // Event listener for default column buttons
    const defaultColumnButtons = document.querySelectorAll(".default-column");
    defaultColumnButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const columnName = button.getAttribute("data-column");
        CustomColumnManager.addDefaultColumn(columnName);
      });
    });
  }

  static addCustomColumn() {
    const customColumnName = document.getElementById("customColumnNameinput").value.trim();
    if (customColumnName) {
      CustomColumnManager.addDefaultColumn(customColumnName);
      document.getElementById("customColumnNameinput").value = '';
    }
  }

  static addDefaultColumn(columnName) {
    const tableHead = document.querySelector("table thead tr");
    const newColumn = document.createElement("th");
    newColumn.textContent = columnName;
    tableHead.insertBefore(newColumn, tableHead.lastElementChild);

    // Add null cells to each row
    const tableBody = document.querySelector("table tbody");
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach((row) => {
      const newCell = document.createElement("td");
      newCell.textContent = "null";
      newCell.style.color = "lightgray";
      row.insertBefore(newCell, row.lastElementChild);
    });
  }
}

// Export the CustomColumnManager class
export default CustomColumnManager;
