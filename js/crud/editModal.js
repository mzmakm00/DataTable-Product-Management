class editModalManager {
  constructor(userProducts, populateTable, modalManageer) {
    this.userProducts = userProducts;
    this.populateTable = populateTable;
    this.modalManageer = modalManageer;
    this.initEventListeners();
  }

  initEventListeners() {
    document.querySelectorAll(".editproductBtn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        const index = Array.from(row.parentNode.children).indexOf(row);
        this.openEditModal(index);
      });
    });
  }

  openEditModal(index) {
    const item = this.userProducts[index];
    const editModal = document.getElementById("editModal");

    document.getElementById("editProductName").value = item.productName;
    document.getElementById("editProductTitle").value = item.productTitle;
    document.getElementById("editProductDescrip").value = item.productDescription;
    document.getElementById("editProductVendor").value = item.productVendor;
    document.getElementById("editinStock").value = item.inStock;
    document.getElementById("editbuyingPrice").value = item.buyingPrice;
    document.getElementById("editsalePrice").value = item.salePrice;
    document.getElementById("editpurchaseQuantity").value = item.purchaseQuantity;
    document.getElementById("editproductType").value = item.productType;
    document.getElementById("editshipping").value = item.shippingRates;
    document.getElementById("editRefillLimit").value = item.refillLimit;
    document.getElementById("editlocationAdress").value = item.productAddress;

    editModal.style.display = "block";

    document.querySelector(".Eclose").addEventListener("click", () => {
      editModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == editModal) {
        editModal.style.display = "none";
      }
    });

    document.getElementById("Updateform").onsubmit = () => {
      const inputs = document.querySelectorAll("#Updateform input[type='text']");
      let isEmpty = false;
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          isEmpty = true;
          return;
        }
      });

      if (isEmpty) {
        this.modalManageer.showErrorModal();
        return false;
      }

      this.updateForm(index);
      this.modalManageer.showSuccessMessage("UpdatesuccessMessage");
    };
  }

  updateForm(index) {
    const itemToUpdate = this.userProducts[index];

    itemToUpdate.productName = document.getElementById('editProductName').value;
    itemToUpdate.productTitle = document.getElementById('editProductTitle').value;
    itemToUpdate.productDescription = document.getElementById('editProductDescrip').value;
    itemToUpdate.productVendor = document.getElementById('editProductVendor').value;
    itemToUpdate.inStock = document.getElementById('editinStock').value;
    itemToUpdate.buyingPrice = document.getElementById('editbuyingPrice').value;
    itemToUpdate.salePrice = document.getElementById('editsalePrice').value;
    itemToUpdate.purchaseQuantity = document.getElementById('editpurchaseQuantity').value;
    itemToUpdate.productType = document.getElementById('editproductType').value;
    itemToUpdate.shippingRates = document.getElementById('editshipping').value;
    itemToUpdate.refillLimit = document.getElementById('editRefillLimit').value;
    itemToUpdate.productAddress = document.getElementById('editlocationAdress').value;

    localStorage.setItem("Product-Details", JSON.stringify(this.userProducts));

    const editModal = document.getElementById('editModal');
    editModal.style.display = 'none';

    this.populateTable();
  }

  showErrorModal() {
    // Show error modal logic here
  }
}

export default editModalManager;
