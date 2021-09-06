import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions
} from "@material-ui/core";

function AddProductModal({ openAddProductMpdal, closeModal, addNewProduct }) {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);

  function handleSaveProdcut() {
    const newProduct = {
      name: newProductName,
      price: Number(newProductPrice),
    }
    addNewProduct(newProduct);
    closeModal();
  }

  function handleNameInput(event) {
    setNewProductName(event.target.value);
  }

  function handlePriceInput(event) {
    setNewProductPrice(event.target.value);
  }

  return (
    <Dialog open={openAddProductMpdal} onClose={closeModal} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add new product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the name and price of the product you want to add
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Product Name"
          type="text"
          fullWidth
          value={newProductName}
          onChange={handleNameInput}
        />
        <TextField
          margin="dense"
          id="price"
          label="Price"
          type="number"
          fullWidth
          value={newProductPrice}
          onChange={handlePriceInput}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSaveProdcut} color="primary">
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddProductModal;
