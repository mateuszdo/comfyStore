import axios from 'axios';

const comfyURL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
   baseURL: comfyURL,
});

export const priceFormat= (price) => {
   const pounds = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
   }).format((price / 100).toFixed(2));
   return pounds
} 

export const generateAmountOptions = (number) => {
   return Array.from({length: number}, (_, index) => {
      const amount = index + 1;

      return (
         <option key={amount} value={amount}>
            {amount}
         </option>
      )
   })
}