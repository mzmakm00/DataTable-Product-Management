class ProductDeleter {
  constructor(userProducts, populateTable, modalManageer) {
    this.userProducts = userProducts;
    this.populateTable = populateTable;
    this.modalManageer = modalManageer;
    this.initEventListeners();
  }

  initEventListeners() {
    document.querySelectorAll('.deleteProduct').forEach(button => {
      button.addEventListener('click', (event) => {
        const row = event.target.closest("tr");
        const index = Array.from(row.parentNode.children).indexOf(row);
        this.deleteProduct(index);
      });
    });
  }

    deleteProduct(index) {
      this.userProducts.splice(index, 1);
      localStorage.setItem("Product-Details", JSON.stringify(this.userProducts));
      this.populateTable();
      this.modalManageer.showSuccessMessage("DeleteMessage");
    }
}

export default ProductDeleter;
