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
import { createTheme } from '@mui/material';

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'styles/theme/base/colors';
import breakpoints from 'styles/theme/base/breakpoints';
import typography from 'styles/theme/base/typography';
import boxShadows from 'styles/theme/base/boxShadows';
import borders from 'styles/theme/base/borders';
import globals from 'styles/theme/base/globals';

// Material Dashboard 2 PRO React TS Helper Functions
import boxShadow from 'styles/theme/functions/boxShadow';
import hexToRgb from 'styles/theme/functions/hexToRgb';
import linearGradient from 'styles/theme/functions/linearGradient';
import pxToRem from 'styles/theme/functions/pxToRem';
import rgba from 'styles/theme/functions/rgba';

// Material Dashboard 2 PRO React TS components base styles for @mui material components
import sidenav from 'styles/theme/components/sidenav';
import list from 'styles/theme/components/list';
import listItem from 'styles/theme/components/list/listItem';
import listItemText from 'styles/theme/components/list/listItemText';
import card from 'styles/theme/components/card';
import cardMedia from 'styles/theme/components/card/cardMedia';
import cardContent from 'styles/theme/components/card/cardContent';
import button from 'styles/theme/components/button';
import iconButton from 'styles/theme/components/iconButton';
import input from 'styles/theme/components/form/input';
import inputLabel from 'styles/theme/components/form/inputLabel';
import inputOutlined from 'styles/theme/components/form/inputOutlined';
import textField from 'styles/theme/components/form/textField';
import menu from 'styles/theme/components/menu';
import menuItem from 'styles/theme/components/menu/menuItem';
import switchButton from 'styles/theme/components/form/switchButton';
import divider from 'styles/theme/components/divider';
import tableContainer from 'styles/theme/components/table/tableContainer';
import tableHead from 'styles/theme/components/table/tableHead';
import tableCell from 'styles/theme/components/table/tableCell';
import linearProgress from 'styles/theme/components/linearProgress';
import breadcrumbs from 'styles/theme/components/breadcrumbs';
import slider from 'styles/theme/components/slider';
import avatar from 'styles/theme/components/avatar';
import tooltip from 'styles/theme/components/tooltip';
import appBar from 'styles/theme/components/appBar';
import tabs from 'styles/theme/components/tabs';
import tab from 'styles/theme/components/tabs/tab';
import stepper from 'styles/theme/components/stepper';
import step from 'styles/theme/components/stepper/step';
import stepConnector from 'styles/theme/components/stepper/stepConnector';
import stepLabel from 'styles/theme/components/stepper/stepLabel';
import stepIcon from 'styles/theme/components/stepper/stepIcon';
import select from 'styles/theme/components/form/select';
import formControlLabel from 'styles/theme/components/form/formControlLabel';
import formLabel from 'styles/theme/components/form/formLabel';
import checkbox from 'styles/theme/components/form/checkbox';
import radio from 'styles/theme/components/form/radio';
import autocomplete from 'styles/theme/components/form/autocomplete';
import flatpickr from 'styles/theme/components/flatpickr';
import container from 'styles/theme/components/container';
import popover from 'styles/theme/components/popover';
import buttonBase from 'styles/theme/components/buttonBase';
import icon from 'styles/theme/components/icon';
import svgIcon from 'styles/theme/components/svgIcon';
import link from 'styles/theme/components/link';
import dialog from 'styles/theme/components/dialog';
import dialogTitle from 'styles/theme/components/dialog/dialogTitle';
import dialogContent from 'styles/theme/components/dialog/dialogContent';
import dialogContentText from 'styles/theme/components/dialog/dialogContentText';
import dialogActions from 'styles/theme/components/dialog/dialogActions';

import type { CustomThemeOptions } from 'types/mui-theme';
const themeOptions: CustomThemeOptions = {
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
