import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material";
import { useState } from "react";
import { PasswordInputProps } from "./PasswordInput.type";

function PasswordInput({ value, id, label, onChange, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormControl sx={{ mb: 1 }} variant="outlined" required>
      {label && <InputLabel htmlFor={id}>Password</InputLabel>}
      <OutlinedInput
        id={id}
        type={showPassword ? "text" : "password"}
        defaultValue={value}
        onChange={onChange}
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
}
export { PasswordInput };
