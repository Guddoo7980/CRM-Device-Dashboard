import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addInstallation } from "../store/slices/installationSlice";

function Installation() {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.list);

  const formik = useFormik({
    initialValues: {
      deviceId: "",
      checklist1: false,
      checklist2: false,
      checklist3: false,
      notes: "",
      file: null,
    },
    validationSchema: Yup.object({
      deviceId: Yup.string().required("Device is required"),
      notes: Yup.string().required("Please provide notes"),
      file: Yup.mixed().required("Photo upload is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addInstallation({ ...values, date: new Date().toISOString() }));
      alert("Installation submitted!");
      resetForm();
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue("file", file);
  };

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: "auto" }}>
        <Typography variant="h5" mb={2}>Installation & Training Form</Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            select
            label="Select Device"
            name="deviceId"
            value={formik.values.deviceId}
            onChange={formik.handleChange}
            error={formik.touched.deviceId && Boolean(formik.errors.deviceId)}
            helperText={formik.touched.deviceId && formik.errors.deviceId}
            margin="normal"
          >
            {devices.map((d) => (
              <MenuItem key={d.id} value={d.id}>
                {d.id} - {d.type}
              </MenuItem>
            ))}
          </TextField>

          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.checklist1}
                onChange={formik.handleChange}
                name="checklist1"
              />
            }
            label="Unboxing completed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.checklist2}
                onChange={formik.handleChange}
                name="checklist2"
              />
            }
            label="Training delivered"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.checklist3}
                onChange={formik.handleChange}
                name="checklist3"
              />
            }
            label="Device tested successfully"
          />

          <TextField
            fullWidth
            label="Installation Notes"
            multiline
            rows={4}
            name="notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
            error={formik.touched.notes && Boolean(formik.errors.notes)}
            helperText={formik.touched.notes && formik.errors.notes}
            margin="normal"
          />

          <Button variant="contained" component="label">
            Upload Unboxing Photo
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {formik.errors.file && (
            <Typography variant="caption" color="error" display="block">
              {formik.errors.file}
            </Typography>
          )}

          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Installation;
