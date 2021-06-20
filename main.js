function change() {
    var btn = document.getElementById("LoginStatus");

                if (btn.value == "Login") {
                    btn.value = "Logout";
                    btn.innerHTML = "Logout";
                }
                else {
                    btn.value = "Login";
                    btn.innerHTML = "Login";
                }
}
const addProductModalToggler = document.getElementById(
    'addProductModalToggler'
  );
  const closeModalIcon = document.getElementById('closeModalIcon');
  const addNewProductModal = document.getElementById('addNewProductModal');
  const newProductForm = document.getElementById('newProductForm');
  const addProductBtn = document.getElementById('addProductBtn');
  
  const hideNewProductModal = () => {
    addNewProductModal.classList.add('hide-me');
  };
  const showNewProductModal = () => {
    addNewProductModal.classList.remove('hide-me');
  };
  const resetNewProductForm = () => {
    newProductForm.reset();
  };
  
  //Show Add New Product Modal on click
  addProductModalToggler.addEventListener('click', (e) => {
    e.preventDefault();
    showNewProductModal();
  });
  
  //Close Modal and reset form on click
  closeModalIcon.addEventListener('click', () => {
    hideNewProductModal();
    resetNewProductForm();
  });
  
  