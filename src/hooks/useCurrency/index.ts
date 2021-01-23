import { useQuery, gql } from "@apollo/client";

export const useCurrency = () => {
      const currencies = gql`
      query currencies {
        Currency(orderBy: name_asc) {
            _id
            name
          }
      }
      `
      const { data } = useQuery(currencies);

    return { currencyData: data }
}