import instance from "../untils/instance";

export const sendAuthMailRequest = async () => {
    return await instance.post("/mail/send");
}