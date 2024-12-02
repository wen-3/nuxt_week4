import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", () => {
    const count = ref(0);
    const name = ref('Mike');

    const double = computed(() => count.value * 2);

    const addCount = () => {
        count.value += 1;
    };

    return{
        count,
        name,
        double,
        addCount
    };
});

// export const useAddressStore = defineStore("address", {
//  state: () => ({ 
//     count: 0,
//     name: "Mike",
// }), 
//  getters: {
//    double: (state) => state.count * 2,
//  },
//  actions: {
//    addCount() {
//      this.count++;
//    },
//  },
// });