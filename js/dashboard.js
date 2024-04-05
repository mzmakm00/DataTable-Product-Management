import { authorized_user  } from "../auth/auth.js";
import { SidebarManager , UserDataDisplayer} from "./dashboardFuctions/sidebarToggle.js";
import  Filterization from "./dashboardFuctions/filtertable.js";
import  ColumnSorter  from "./dashboardFuctions/sortcolumns.js";
import modalManager from "../showErrorModal/dashboardErrorModal.js"
import CustomColumnManager  from "./dashboardFuctions/customcolumn.js";
import ModalManager from "./crud/viewModal.js";
import editModalManager from "./crud/editModal.js";
import ProductDelete from "./crud/deleteproduct.js";
import  ProductAdder  from "./crud/addproduct.js";
import  RowRender from "./dashboardFuctions/showrow.js"


// Instantiate the class
// const customColumnManager = new CustomColumnManager();
const filterization = new Filterization();

const modalManageer = new modalManager();


// calling static function
CustomColumnManager.init();

// Setup sidebar toggle
SidebarManager.setupSidebarToggle();

// Logout user
SidebarManager.logoutUser();

// Show user data
UserDataDisplayer.showUserData();



let currentUser = null;

const currentUserString = localStorage.getItem("LoggedInUser");

if (currentUserString) {

  const userEmail = JSON.parse(currentUserString);

  currentUser = userEmail.email; // Update the global currentUser variable   

  console.log(currentUser); 
}
else {
   console.log("User is not logged in"); // Or handle the case where user is not logged in
}


let product = JSON.parse(localStorage.getItem("Product-Details")) || [];
const userProducts = product.filter(item => item.email === currentUser);



function populateTable() {
  
  const tableBody = document.getElementById("tbody1");
  
  tableBody.innerHTML = "";

  authorized_user(currentUser)

  userProducts.forEach(function (item, index) {
  
    let row = document.createElement("tr");
    
    row.innerHTML = RowRender.showRow(item,index)

    tableBody.appendChild(row);
  });


  const editmodalManager = new editModalManager(userProducts,populateTable,modalManageer)  
  const modalManager = new ModalManager(userProducts);

  const deleteproduct = new ProductDelete(userProducts, populateTable , modalManageer)

  // Adjust the style for description elements
  let descriptionElements = document.querySelectorAll(".description");
  descriptionElements.forEach(function (element) {
    element.style.maxWidth = "200px";
    element.style.maxHeight = "100px";
    element.style.textOverflow = "ellipsis";
    element.style.overflow = "hidden";

    element.addEventListener("mouseover", function () {
      element.style.overflow = "visible";
      element.style.whiteSpace = "normal";
    });

    element.addEventListener("mouseout", function () {
      element.style.overflow = "hidden";
      element.style.whiteSpace = "nowrap";
    });
  });
}


// Apply filters on the datable columns

const columnSorter = new ColumnSorter(populateTable, userProducts);

const Addproducts= new ProductAdder (currentUser,userProducts,populateTable,modalManageer)  