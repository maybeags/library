import instance from "../untils/instance";

export const getPrinciaplRequest = async () => {
    return await instance.get("/account/principal");
}