import { ThemeColors } from "../../themes/themes";
import { TouchableOpacityBoxProps } from "../Box/Box";
import { ButtonPreset } from "./Button";

interface ButtonUI {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
  }
  
export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
    outline: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
  
    primary: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    }
};