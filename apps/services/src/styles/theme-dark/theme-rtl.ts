/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from '@mui/material/styles';
// import Fade from "@mui/material/Fade";

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'styles/theme-dark/base/colors';
import breakpoints from 'styles/theme-dark/base/breakpoints';
import typography from 'styles/theme-dark/base/typography';
import boxShadows from 'styles/theme-dark/base/boxShadows';
import borders from 'styles/theme-dark/base/borders';
import globals from 'styles/theme-dark/base/globals';

// Material Dashboard 2 PRO React TS Helper Functions
import boxShadow from 'styles/theme-dark/functions/boxShadow';
import hexToRgb from 'styles/theme-dark/functions/hexToRgb';
import linearGradient from 'styles/theme-dark/functions/linearGradient';
import pxToRem from 'styles/theme-dark/functions/pxToRem';
import rgba from 'styles/theme-dark/functions/rgba';

// Material Dashboard 2 PRO React TS components base styles for @mui material components
import sidenav from 'styles/theme-dark/components/sidenav';
import list from 'styles/theme-dark/components/list';
import listItem from 'styles/theme-dark/components/list/listItem';
import listItemText from 'styles/theme-dark/components/list/listItemText';
import card from 'styles/theme-dark/components/card';
import cardMedia from 'styles/theme-dark/components/card/cardMedia';
import cardContent from 'styles/theme-dark/components/card/cardContent';
import button from 'styles/theme-dark/components/button';
import iconButton from 'styles/theme-dark/components/iconButton';
import input from 'styles/theme-dark/components/form/input';
import inputLabel from 'styles/theme-dark/components/form/inputLabel';
import inputOutlined from 'styles/theme-dark/components/form/inputOutlined';
import textField from 'styles/theme-dark/components/form/textField';
import menu from 'styles/theme-dark/components/menu';
import menuItem from 'styles/theme-dark/components/menu/menuItem';
import switchButton from 'styles/theme-dark/components/form/switchButton';
import divider from 'styles/theme-dark/components/divider';
import tableContainer from 'styles/theme-dark/components/table/tableContainer';
import tableHead from 'styles/theme-dark/components/table/tableHead';
import tableCell from 'styles/theme-dark/components/table/tableCell';
import linearProgress from 'styles/theme-dark/components/linearProgress';
import breadcrumbs from 'styles/theme-dark/components/breadcrumbs';
import slider from 'styles/theme-dark/components/slider';
import avatar from 'styles/theme-dark/components/avatar';
import tooltip from 'styles/theme-dark/components/tooltip';
import appBar from 'styles/theme-dark/components/appBar';
import tabs from 'styles/theme-dark/components/tabs';
import tab from 'styles/theme-dark/components/tabs/tab';
import stepper from 'styles/theme-dark/components/stepper';
import step from 'styles/theme-dark/components/stepper/step';
import stepConnector from 'styles/theme-dark/components/stepper/stepConnector';
import stepLabel from 'styles/theme-dark/components/stepper/stepLabel';
import stepIcon from 'styles/theme-dark/components/stepper/stepIcon';
import select from 'styles/theme-dark/components/form/select';
import formControlLabel from 'styles/theme-dark/components/form/formControlLabel';
import formLabel from 'styles/theme-dark/components/form/formLabel';
import checkbox from 'styles/theme-dark/components/form/checkbox';
import radio from 'styles/theme-dark/components/form/radio';
import autocomplete from 'styles/theme-dark/components/form/autocomplete';
import flatpickr from 'styles/theme-dark/components/flatpickr';
import container from 'styles/theme-dark/components/container';
import popover from 'styles/theme-dark/components/popover';
import buttonBase from 'styles/theme-dark/components/buttonBase';
import icon from 'styles/theme-dark/components/icon';
import svgIcon from 'styles/theme-dark/components/svgIcon';
import link from 'styles/theme-dark/components/link';
import dialog from 'styles/theme-dark/components/dialog';
import dialogTitle from 'styles/theme-dark/components/dialog/dialogTitle';
import dialogContent from 'styles/theme-dark/components/dialog/dialogContent';
import dialogContentText from 'styles/theme-dark/components/dialog/dialogContentText';
import dialogActions from 'styles/theme-dark/components/dialog/dialogActions';

import type { CustomThemeOptions } from 'types/mui-theme';

const themeOptions: CustomThemeOptions = {
  direction: 'rtl',
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
};

export default createTheme(themeOptions);
