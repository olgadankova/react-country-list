import { ICountry } from "../types";
import { CountryItem } from "./CountryItem";

interface ICountryList {
  countries: ICountry[];
}

export const CountryList = ({ countries }: ICountryList) => {
  return (
    <ul className="list-group m-0 p-0">
      {countries.map((country) => {
        return <CountryItem key={country.name} country={country} />;
      })}
      ;
    </ul>
  );
};
