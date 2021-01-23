import { useQuery, gql } from "@apollo/client";

export const useRegion = () => {
      const regions = gql`
      query regions{
        Region(orderBy: name_asc){
          _id
          name
          subregions(orderBy: name_asc){
            _id
            name
          }
        }
      }
      `
      const { data } = useQuery(regions);

    return { regionData: data }
}

