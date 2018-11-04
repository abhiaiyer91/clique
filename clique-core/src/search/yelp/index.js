import yelp from "yelp-fusion";
import { YELP_API_KEY } from "../../settings";

const client = yelp.client(YELP_API_KEY);

export function search({
  text,
  location = "Los Angeles",
  offset = 0,
  limit = 10
}) {
  return client
    .search({
      term: `${text} happy hour`,
      location,
      categories: "food",
      sort_by: "rating",
      offset,
      limit
    })
    .then(response => {
      const body = response.jsonBody;

      const businesses = body.businesses || [];

      return businesses.map(item => {
        return {
          id: item.id,
          name: item.name,
          url: item.url,
          rating: item.rating || 0,
          reviewCount: item.review_count,
          avatar: item.image_url,
          address: Object.assign(item.location, {
            zipcode: item.location.zip_code
          })
        };
      });
    })
    .catch(e => {
      console.error(e);
      return [];
    });
}
