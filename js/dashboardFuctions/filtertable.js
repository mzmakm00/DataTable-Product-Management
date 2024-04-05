class Filterization {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      const columnSelect = document.getElementById("columnSelect");
      const searchInput = document.getElementById("searchInput");
  
      // Filter Table
      columnSelect.addEventListener("change", () => this.filterTable());
      searchInput.addEventListener("input", () => this.filterTable());    
    });
  }

  filterTable() {
    const columnSelect = document.getElementById("columnSelect");

    const searchInput = document.getElementById("searchInput");
    const selectedColumn = columnSelect.value
    console.log("columnSelected",selectedColumn);
    const searchText = searchInput.value.toLowerCase();
    const tableRows = document.querySelectorAll("#tbody1 tr");
    tableRows.forEach((row) => {
      const cells = row.querySelectorAll(`.${selectedColumn}`);
      let isMatch = false;
  
      cells.forEach((cell) => {
        const cellData = cell.textContent.toLowerCase();
        console.log(cellData);
        if (cellData.includes(searchText)) {
          isMatch = true;
        }
      });
  
      if (isMatch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
}

export default Filterization;
