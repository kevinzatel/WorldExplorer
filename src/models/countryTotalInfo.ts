import { Location }from '../models/location';

export interface CountryTotalInfo{
    _id: string
    name: string
    alpha2Code: string
    capital: string
    population: string
    flag: {
        emoji: string
    }
    officialLanguages:{
        _id: string
        name:string
    }[]
    currencies:{
        _id: string
        name: string
    }[]
    subregion:{
        _id: string
        name:string
    }
    location: Location
}