import axios from 'axios';
import { graphEndpoint } from './../../constants';

export const getPosts = async (): Promise<any> => {
  var data =  await axios.post(graphEndpoint, {
    query: `
    {
        posts(orderDirection: desc) {
          id
          data
          blockTime
          author
          name
        }
      }
    `,
  });

  return data.data.data.posts;
};
