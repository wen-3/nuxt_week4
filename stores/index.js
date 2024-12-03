import { defineStore } from "pinia";
import axios from "axios";

export const useAddressStore = defineStore("address", () => {
    const roomArr = ref([]);

    const Id = ref(0);

    const IdTitle = computed(() => `當前 ID: ${Id.value}`);

    const getDataList = async () => {
        const res = await axios.get(
            "https://nuxr3.zeabur.app/api/v1/rooms/"
        );
        roomArr.value = res.data;
    };

    return {
        roomArr,
        Id,
        IdTitle,
        getDataList,
    };
});
