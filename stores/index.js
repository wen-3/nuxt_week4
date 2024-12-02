import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", {
 state: () => ({ 
    count: 0,
    name: "Mike",
}), 
 getters: {
   double: (state) => state.count * 2,
 },
 actions: {
   addCount() {
     this.count++;
   },
 },
});
