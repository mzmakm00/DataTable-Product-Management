class RowRenderer {
  static showRow(item, index) {
    return `
      <td class="fixed-column"><input type="checkbox"></td>
      <td class="id">${index + 1}</td>
      <td class="productName">${item.productName}</td>
      <td class="productTitle">${item.productTitle}</td>
      <td class="productDescription description">${item.productDescription}</td>
      <td class="productVendor">${item.productVendor}</td>
      <td class="inStock">${item.inStock}</td>
      <td class="buyingPrice">${item.buyingPrice}</td>
      <td class="salePrice">${item.salePrice}</td>
      <td class="purchaseQuantity">${item.purchaseQuantity}</td>
      <td class="productType">${item.productType}</td>
      <td class="shippingRates">${item.shippingRates}</td>
      <td class="refillLimit">${item.refillLimit}</td>
      <td class="productAddress">${item.productAddress}</td>
      <td class="fixedaction">
        <div class="dropdown">
          <button class="dropbtn">&#8286;</button>
          <div class="dropdown-content">
            <a href="#"><button class="viewproduct"><i class="fa-solid fa-user-plus vendor"></i><span style="margin-left: 0.5rem;">View Product</span></button></a>
            <a href="#"><button class="editproductBtn"><i class="fa-solid fa-pen-to-square editproduct"></i><span style="margin-left: 0.5rem;">Edit product</span></button></a>
            <a href="#"><button class="deleteProduct"><i class="fa-solid fa-cart-shopping product"></i><span style="margin-left: 0.5rem;">Delete Product</span></button></a>
          </div>
        </div>
      </td>`;
  }
}

// Export the RowRenderer class
export default RowRenderer;
