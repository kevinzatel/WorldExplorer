export interface SubRegion{
    _id: string
    name: string 
}

export interface Region{
    _id: string
    name: string
    subregions:SubRegion[]
}