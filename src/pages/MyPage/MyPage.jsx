/** @jsxImportSource @emotion/react */
import { useQueryClient } from "react-query";
import * as s from "./style";

function MyPage() {

    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.imgBox}>
                    <div css={s.profileImg}>
                        <img src="https://photos5.appleinsider.com/gallery/58467-119087-Driver-avp-xl.jpg" alt="" />
                    </div>
                </div>
                <div css={s.infoBox}>
                    <div css={s.infoText}>사용자이름: {principalData.data.username}</div>
                    <div css={s.infoText}>이름: {principalData.data.name}</div>
                    <div css={s.emailBox}>
                        <div css={s.infoText}>이메일: {principalData.data.email}</div>
                        {
                            principalData.data.authorities.filter(auth => auth.authority === "ROLE_USER").length === 0
                            ?
                            <button css={s.infoButton}>인증하기</button>
                            :
                            <>체크</>
                        }
                    </div>
                    <div>
                        <button css={s.infoButton}>정보 수정</button>
                        <button css={s.infoButton}>비밀번호 수정</button>
                    </div>
                </div>
            </div>
            <div css={s.bottom}>
            
            </div>
        </div>
    );
}

export default MyPage;