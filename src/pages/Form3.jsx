import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import MainHeader from "./MainHeader";
import styles from "../styles/Grid.module.css";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
const Form3 = () => {
  const {
    register,
    control,
    clearErrors,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [countryCodes] = useState(["+91", "+1"]);
  return (
    <>
      <MainHeader label="Form 3" />
      <Grid container className={styles.GridContainer}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <FormControl variant="standard" sx={{ marginTop: 0 }} error={!!errors?.countryCode}>
            <InputLabel id="countryCode">Country Code</InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  className={styles.FiledWidth}
                  value={field?.value}
                  onChange={(value) => field?.onChange(value)}
                  label="Country Code"
                >
                  {countryCodes &&
                    countryCodes?.map((countryCode, index) => (
                      <MenuItem key={`countryCode-${index}`} value={countryCode}>
                        {countryCode}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name="countryCode"
              control={control}
              defaultValue={null}
            />
            <FormHelperText>
              {errors?.countryCode ? errors?.countryCode?.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <TextField
            id="phoneNumber"
            className={styles.FiledWidth}
            label={"Phone Number"}
            variant="standard"
            {...register("phoneNumber")}
            error={!!errors?.phoneNumber}
            helperText={errors?.phoneNumber ? errors?.phoneNumber?.message : null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}>
          <FormControlLabel
            className={styles.acceptTermsAndConditionButton}
            control={
              <Controller
                name="acceptTermsAndCondition"
                control={control}
                defaultValue={false}
                render={({ field: { value, ref, ...field } }) => (
                  <Checkbox
                    {...field}
                    inputRef={ref}
                    checked={!!value}
                    onChange={(e) => {
                      console.log("EtargetChekced", e?.target?.checked);
                      setValue("acceptTermsAndCondition", e?.target?.checked);
                      clearErrors("acceptTermsAndCondition");
                    }}
                  />
                )}
              />
            }
            label={
              <span className={styles.acceptTermsAndConditionButtonSpan}>
                Accept Terms And Conditions
              </span>
            }
            labelPlacement="end"
          />
          <FormHelperText error>
            {errors?.acceptTermsAndCondition ? errors?.acceptTermsAndCondition?.message : null}
          </FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={styles.GridItemCenter}></Grid>
      </Grid>
    </>
  );
};

export default Form3;
