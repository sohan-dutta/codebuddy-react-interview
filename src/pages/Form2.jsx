import { Grid, TextField } from "@mui/material";
import MainHeader from "./MainHeader";
import styles from "../styles/Grid.module.css";
import { useFormContext } from "react-hook-form";
const Form2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <MainHeader label="Form 2" />
      <Grid container className={styles.GridContainer}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <TextField
            id="firstName"
            label={"First Name"}
            variant="standard"
            className={styles.FiledWidth}
            {...register("firstName")}
            error={!!errors?.firstName}
            helperText={errors?.firstName ? errors?.firstName?.message : null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <TextField
            id="lastName"
            label={"Last Name"}
            className={styles.FiledWidth}
            variant="standard"
            {...register("lastName")}
            error={!!errors?.lastName}
            helperText={errors?.lastName ? errors?.lastName?.message : null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <TextField
            id="address"
            label={"Address"}
            className={styles.FiledWidth}
            variant="standard"
            {...register("address")}
            error={!!errors?.address}
            helperText={errors?.address ? errors?.address?.message : null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}></Grid>
      </Grid>
    </>
  );
};

export default Form2;
