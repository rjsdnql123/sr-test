import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { CommonInputProps } from "./CommonInput.type";

function CommonInput({ onChange, label, id, type, value }: CommonInputProps) {
  return (
    <FormControl sx={{ mb: 1 }} variant="outlined" required>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <OutlinedInput
        value={value}
        id={id}
        type={type}
        label={label || ""}
        onChange={onChange}
      />
    </FormControl>
  );
}

export { CommonInput };
