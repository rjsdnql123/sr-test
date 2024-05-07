import { Box, colors } from "@mui/material";
import { IconListWraaper } from "./IconBoxWraaper.style";
import { IIconBoxWraaperProps } from "./IconBoxWraaper.type";

function IconBoxWraaper({ title, list, onIconClick }: IIconBoxWraaperProps) {

  return (
    <Box>
      <div>{title}</div>
      <IconListWraaper>
        {list.map((item) => (
          <Box
            onClick={() => onIconClick && onIconClick(item)}
            key={item.name}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 100,
              height: 100,
              border: 1,
              borderColor: colors.grey[300],
              borderRadius: 1,
              color: item.status ? colors.green[200] : null,
              "&:hover": {
                bgcolor: colors.green[50]
              }
            }}
          >
            <item.icon />
          </Box>
        ))}
      </IconListWraaper>
    </Box>
  );
}

export default IconBoxWraaper;
