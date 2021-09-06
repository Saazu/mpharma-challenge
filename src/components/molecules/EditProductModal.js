import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputMargin: {
    marginTop: "8px"
  }
}));

function EditProductModal({ openEditModal, closeModal, id, editProduct, name, price }) {
  const classes = useStyles();
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  function handleEditProduct() {
    editProduct(id, { name: newName, price: Number(newPrice) });
    closeModal();
  }

  function handleNameInput(event) {
    setNewName(event.target.value);
  }

  function handlePriceInput(event) {
    setNewPrice(event.target.value);
  }

  return (
    <Dialog open={openEditModal} onClose={closeModal} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit name
        </DialogContentText>
        <TextField
          margin="dense"
          id="price"
          label="New Name"
          type="text"
          fullWidth
          value={newName}
          onChange={handleNameInput}
        />
        <DialogContentText className={classes.inputMargin}>
          Edit price
        </DialogContentText>
        <TextField
          margin="dense"
          id="price"
          label="New Price"
          type="number"
          fullWidth
          onChange={handlePriceInput}
          value={newPrice}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditProduct} color="primary">
          save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditProductModal;
