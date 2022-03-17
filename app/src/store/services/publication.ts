import { Contract } from 'ethers';

export interface PostPayload {
  data: string;
  publicationContract: Contract;
  address: string;
  name: string;
  provider: any;
}

export async function post(payload : PostPayload) {
  const { data, name, address, publicationContract } = payload;
  
  
  return publicationContract
  .methods
  .post(data, name)
  .send({from: address})
  .catch((err: any) => console.log(err));
}
