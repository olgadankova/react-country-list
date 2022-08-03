export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Succes = "succes",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Ligth = "ligth",
  Dark = "dark",
}

export type BadgeLabel = "area" | "population";

export interface INativName {
  [key: string]: { common: string; official: string } | undefined;
}

export interface ICountryApi {
  capital: string[];
  population: number;
  area: number;
  region: string;
  flags: ICountryFlagApi;
  name: ICountryNameApi;
}

interface ICountryFlagApi {
  png: string;
  svg: string;
}

interface ICountryNameApi {
  common: string;
  official: string;
  nativeName: {
    [key: string]:
      | {
          official: string;
          common: string;
        }
      | undefined;
  };
}
