class ColumnSorter {
  constructor(populateTable, userProducts) {
    this.populateTable = populateTable;
    this.userProducts = userProducts;
    this.sortDirection = {};
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.populateTable();
      document.querySelectorAll(".sort").forEach((header) => {
        header.addEventListener("click", () => this.sortTable(header));
      });
    });
  }

  sortTable(column) {
    const dataType = column.dataset.sort;
    const isAscending = this.sortDirection[dataType] === "asc";

    this.userProducts.sort((a, b) => {
      let valueA = a[dataType];
      let valueB = b[dataType];
      let comparison = 0;

      if (dataType === "buyingPrice" || dataType === "salePrice") {
        valueA = parseFloat(valueA.replace("$", ""));
        valueB = parseFloat(valueB.replace("$", ""));
      }

      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }

      return isAscending ? comparison : comparison * -1;
    });

    this.sortDirection[dataType] = isAscending ? "desc" : "asc";

    this.populateTable(this.userProducts);
  }
}

export default ColumnSorter;