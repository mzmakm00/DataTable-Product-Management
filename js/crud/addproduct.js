class ProductAdder {
  constructor(currentUser, userProducts, populateTable, modalManageer) {
    this.currentUser = currentUser;
    this.userProducts = userProducts;
    this.populateTable = populateTable;
    this.modalManageer = modalManageer;
    this.initEventListeners();
  }

  initEventListeners() {
    const AddModal = document.getElementById("AddProductModal");
    const AddButton = document.querySelector(".AddProductButton");

    AddButton.addEventListener("click", () => {
      AddModal.style.display = "block";
    });

    document.querySelector(".closeProduct").addEventListener("click", () => {
      AddModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === AddModal) {
        AddModal.style.display = "none";
      }
    });

    const ProductForm = document.getElementById("addform");
    ProductForm.addEventListener("submit", (e) => {
      this.handleFormSubmit(e);
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const ProductName = document.getElementById("addProductName");
    const ProductTitle = document.getElementById("addProductTitle");
    const ProductDescrip = document.getElementById("addProductDescrip");
    const ProductVendor = document.getElementById("addProductVendor");
    const instock = document.getElementById("addinStock");
    const BuyingPrice = document.getElementById("addbuyingPrice");
    const SalePrice = document.getElementById("addsalePrice");
    const PurchaseQuantity = document.getElementById("addpurchaseQuantity");
    const ProductType = document.getElementById("addproductType");
    const Shipping = document.getElementById("addshipping");
    const RefillLimit = document.getElementById("addRefillLimit");
    const AddlocationAdress = document.getElementById("addlocationAdress");

    if (!ProductName.value || !ProductTitle.value || !ProductDescrip.value || !ProductVendor.value || !instock.value ||
      !BuyingPrice.value || !SalePrice.value || !PurchaseQuantity.value || !ProductType.value ||
      !Shipping.value || !RefillLimit.value || !AddlocationAdress.value) {
      this.modalManageer.showErrorModal();
      return;
    }

    const data = {
      email: this.currentUser,
      productName: ProductName.value,
      productTitle: ProductTitle.value,
      productDescription: ProductDescrip.value,
      productVendor: ProductVendor.value,
      inStock: instock.value,
      buyingPrice: BuyingPrice.value,
      salePrice: SalePrice.value,
      purchaseQuantity: PurchaseQuantity.value,
      productType: ProductType.value,
      shippingRates: Shipping.value,
      refillLimit: RefillLimit.value,
      productAddress: AddlocationAdress.value,
    };

    this.userProducts.push(data);
    localStorage.setItem("Product-Details", JSON.stringify(this.userProducts));

    ProductName.value = "";
    ProductTitle.value = "";
    ProductDescrip.value = "";
    ProductVendor.value = "";
    instock.value = "";
    BuyingPrice.value = "";
    SalePrice.value = "";
    PurchaseQuantity.value = "";
    ProductType.value = "";
    Shipping.value = "";
    RefillLimit.value = "";
    AddlocationAdress.value = "";

    const AddModal = document.getElementById("AddProductModal");
    AddModal.style.display = "none";

    this.populateTable();
    this.modalManageer.showSuccessMessage("AddsuccessMessage");
  }
}

export default ProductAdder;
