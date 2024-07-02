import { Grid, TextField } from "@mui/material";
import MainHeader from "./MainHeader";
import styles from "../styles/Grid.module.css";
import { useFormContext } from "react-hook-form";
const Form1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <MainHeader label="Form 1" />
      <Grid container className={styles.GridContainer}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <TextField
            id="emailId"
            className={styles.FiledWidth}
            label={"Email Id"}
            variant="standard"
            {...register("emailId")}
            error={!!errors?.emailId}
            helperText={errors?.emailId ? errors?.emailId?.message : null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <TextField
            id="password"
            label={"Password"}
            className={styles.FiledWidth}
            variant="standard"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password ? errors?.password?.message : null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}></Grid>
      </Grid>
    </>
  );
};

export default Form1;
