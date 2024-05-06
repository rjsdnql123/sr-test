import { Box, colors } from "@mui/material";
import { IconListWraaper } from "./IconBoxWraaper.style";
import { IModeList } from "../../../pages/home/index.type";

interface IIconBoxWraaperProps {
  title: string;
  list: IModeList[];
  onIconClick?: (e: unknown) => void;
}

function IconBoxWraaper({ title, list }: IIconBoxWraaperProps) {

  return (
    <Box>
      <div>{title}</div>
      <IconListWraaper>
        {list.map((item) => (
          <Box
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
