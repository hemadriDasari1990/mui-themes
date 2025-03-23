import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';

const ThemeProviderWrapper = ({ themeName, children }) => {
  const theme = themeCreator(themeName);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
