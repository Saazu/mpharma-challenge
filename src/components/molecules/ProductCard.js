import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { Payment, DateRange } from "@material-ui/icons";
import DeleteProductModal from './DeleteProductModal';
import EditProductModal from './EditProductModal';

const useStyles = makeStyles({
  card: {
    margin: "8px"
  },
  buttonPosition: {
    margin: "auto"
  },
  price: {
    marginTop: "4px",
    marginBottom: "4px"
  },
  elementPadding: {
    paddingLeft: "4px",
    paddingRight: "4px"
  }
});

function ProductCard({ name, price, date, deleteProduct, editProduct, id }) {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  function showDeleteModal() {
    setOpenDeleteModal(true)
  }

  function showEditModal() {
    setOpenEditModal(true)
  }

  function closeModal() {
    setOpenEditModal(false);
    setOpenDeleteModal(false);
  }

  function formatDate(date) {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Grid
          className={classes.price}
          container
          justifyContent="center"
          alignItems="center"
        >
          <DateRange className={classes.elementPadding} />
          <Typography className={classes.elementPadding} variant="body2" color="textSecondary" component="p">
            {formatDate(date)}
          </Typography>
        </Grid>

        <Grid
          className={classes.price}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Payment className={classes.elementPadding} />
          <Typography className={classes.elementPadding} variant="body2" color="textSecondary" component="p">
            GH&#8373;{price}
          </Typography>
        </Grid>

      </CardContent>
      <CardActions className={classes.buttonPosition}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item>
            <DeleteProductModal openDeleteModal={openDeleteModal} closeModal={closeModal} deleteProduct={deleteProduct} id={id} name={name} />
            <EditProductModal openEditModal={openEditModal} closeModal={closeModal} editProduct={editProduct} name={name} price={price} id={id} />
            <Button size="small" color="primary" onClick={showEditModal}>
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" color="primary" onClick={showDeleteModal}>
              Delete
            </Button></Grid>

        </Grid>


      </CardActions>
    </Card>
  );
}
export default ProductCard;
