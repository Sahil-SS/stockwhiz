declare module 'react-select-country-list' {
  export interface CountryData {
    label: string;
    value: string;
  }

  const countryList: () => CountryData[];
  export default countryList;
}
