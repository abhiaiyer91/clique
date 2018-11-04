export interface searchLocations_locations_address {
    __typename: "Address";
    address1: string | null;
    address2: string | null;
    city: string | null;
    country: string | null;
    zipcode: string | null;
    state: string | null;
}
export interface searchLocations_locations {
    __typename: "Location";
    id: string;
    name: string;
    avatar: string | null;
    rating: number | null;
    reviewCount: number | null;
    url: string | null;
    address: searchLocations_locations_address | null;
}
export interface searchLocations {
    locations: (searchLocations_locations | null)[] | null;
}
export interface searchLocationsVariables {
    searchText: string;
}
