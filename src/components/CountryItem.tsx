import { Color, ICountry } from "../types";
import { Badge } from "../components/Badge";

interface ICountryItem {
  country: ICountry;
}

export const CountryItem = ({ country }: ICountryItem) => {
  return (
    <li className="list-group-item row d-flex align-items-center gap-3">
      <img className="col-1" src={country.flag} alt="flag"></img>
      <p className="col-3">{country.name}</p>
      <p className="col-2">{country.capital}</p>
      <p className="col-1">{country.region}</p>
      <Badge color={Color.Primary} label="area" value={country.area} />
      <Badge
        color={Color.Secondary}
        label="population"
        value={country.population}
      />
    </li>
  );
};
