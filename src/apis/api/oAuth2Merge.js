import instance from "../untils/instance";

export const oAtuh2MergeRequest = async (data) => {
    return await instance.post("/auth/oauth2/merge", data);
}