import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions
} from "@material-ui/core";
function DeleteProductModal({ openDeleteModal, closeModal, name, deleteProduct, id }) {

  function handleDeleteProdcut() {
    deleteProduct(id);
    closeModal();
  }

  return (
    <Dialog open={openDeleteModal} onClose={closeModal} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this?
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary">
          No
        </Button>
        <Button onClick={handleDeleteProdcut} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteProductModal;
