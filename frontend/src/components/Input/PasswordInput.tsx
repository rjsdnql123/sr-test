import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material";
import { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormControl sx={{ mb: 1 }} variant="outlined" required>
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={() => {}}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
export { PasswordInput };
