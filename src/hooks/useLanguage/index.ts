import { useQuery, gql } from "@apollo/client";

export const useLanguage = () => {
      const languajes = gql`
      query languajes {
        Language(orderBy: name_asc) {
            _id
            name
          }
      }
      `
      const { data } = useQuery(languajes);

    return { languageData: data }
}

