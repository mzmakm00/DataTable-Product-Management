class ModalManager {
  constructor(userProducts) {
    this.userProducts = userProducts;
    this.initViewProductModal();
  }

  initViewProductModal() {
    document.querySelectorAll(".viewproduct").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const row = event.target.closest("tr");
        const index = Array.from(row.parentNode.children).indexOf(row);
        this.openViewModal(index);
      });
    });
  }

  openViewModal(index) {
    const item = this.userProducts[index];
    const viewModal = document.getElementById("viewModal");
    document.getElementById('viewProductName').value = item.productName;
    document.getElementById('viewProductTitle').value = item.productTitle;
    document.getElementById('viewProductDescrip').value = item.productDescription;
    document.getElementById('viewProductVendor').value = item.productVendor;
    document.getElementById('viewinStock').value = item.inStock;
    document.getElementById('viewbuyingPrice').value = item.buyingPrice;
    document.getElementById('viewsalePrice').value = item.salePrice;
    document.getElementById('viewpurchaseQuantity').value = item.purchaseQuantity;
    document.getElementById('viewproductType').value = item.productType;
    document.getElementById('viewshipping').value = item.shippingRates;
    document.getElementById('viewRefillLimit').value = item.refillLimit;
    document.getElementById('viewlocationAdress').value = item.productAddress;

    viewModal.style.display = 'block';

    document.querySelector('.Vclose').addEventListener('click', () => {
      viewModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target == viewModal) {
        viewModal.style.display = 'none';
      }
    });
  }
}

export default ModalManager;
