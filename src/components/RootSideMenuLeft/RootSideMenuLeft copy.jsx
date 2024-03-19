/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi"
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { QueryClient, useQueryClient } from "react-query";
import { useEffect, useState } from "react";

function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setLogin ] = useState(false)
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    const handleCloseClick = () => {
        setShow(() => false);
    }


    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>
            {
                !isLogin
                ?   <>
                        <Link css={s.profile} to={"/auth/signin"}>
                            <div css={s.profileImage}>
                                <FiUser />
                            </div>  
                            <FiUser />
                            
                        </Link>    
                    </>
            
                :   <>
                        <Link css={s.profile} to={"/account/mypage"}>
                            <div css={s.profileImage}>
                                <FiUser />
                            </div>  
                            <FiUser />
                    
                        </Link>
                                <div css={s.profileBox}>이름 :  </div>
                                <div css={s.profileBox}>이메일 : </div>
                    </>
            }

            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
                <Link css={s.menuLink}>
                    도서 등록
                </Link>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;