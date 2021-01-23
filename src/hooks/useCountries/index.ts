import { useQuery, gql } from "@apollo/client";

export const useCountries = () => {
       const fetchCountries = gql`
        query {
            Country{
                _id
                 name
                alpha2Code
                capital
                population
                flag{
                  emoji
                }
                officialLanguages{
                  _id
                  name
                }
                currencies{
                  _id
                  name
                }
                subregion{
                  _id
                  name
                }
              }
        }
        `
    
      const { loading, error, data } = useQuery(fetchCountries);

    return {
        countryData: data,
        countryLoading: loading,
        countryError: error
    }
}

