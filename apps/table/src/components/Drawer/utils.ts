import { green, amber, blue, brown, common, cyan, orange, indigo, lime, pink, purple, red, teal, yellow } from '@mui/material/colors';
import * as Icons from "@mui/icons-material";

export const icons = Object.keys(Icons);

export enum Examples {
  Generator = 'generator',
  Basic = "basic",
  ColumnSettings = "columnsettings",
  Compound = "compound",
  CustomCells = "customcells",
  ExpandedUserComponent = "expandedusercomponent",
  CustomRow = "cutomrow",
  CustomRowColors = "customrowcolors",
  RowId = "rowid",
  Editable = "editable",
  ExpandedRows = "expandedrows",
  Filters = "filters",
  Footer = "footer",
  GlobalFilter = "globalfilter",
  Groups = "groups",
  HorizontalCompound = "horizontalcompound",
  InfinityScroll = "infinityscroll",
  Loading = "loading",
  Paggination = "paggination",
  RowSelection = "rowselection",
  ColumnSelection = "columnselection",
  Size = "size",
  Translation = "translation",
  WithoutHeader = "withoutheader"
}

export const examples: Examples[] = Object.values(Examples);

export const titles: Record<Examples, string> = {
  "generator": "Generator",
  "basic": "Basic",
  "columnsettings": "ColumnSettings",
  "compound": "Compound",
  "customcells": "CustomCells",
  "expandedusercomponent": "ExpandedUserComponent",
  "cutomrow": "CutomRow",
  "customrowcolors": "CustomRowColors",
  "rowid": "RowId",
  "editable": "Editable",
  "expandedrows": "ExpandedRows",
  "filters": "Filters",
  "footer": "Footer",
  "globalfilter": "GlobalFilter",
  "groups": "Groups",
  "horizontalcompound": "HorizontalCompound",
  "infinityscroll": "InfinityScroll",
  "loading": "Loading",
  "paggination": "Paggination",
  "rowselection": "RowSelection",
  "size": "Size",
  "columnselection": "ColumnSelection",
  "translation": "Translation",
  "withoutheader": "WithoutHeader"
};

export const colors = [green, amber, blue, brown, common, cyan, orange, indigo, lime, pink, purple, red, teal, yellow];
