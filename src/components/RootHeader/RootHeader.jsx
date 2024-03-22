/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi"
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { principalState } from "../../atoms/principalAtom";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../../apis/untils/instance";


function RootHeader() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setLogin ] = useState(false);
    // const [ principal, setPrincipal ] = useRecoilState(principalState);
    const queryClient = useQueryClient();
    // const principal = queryClient.getQueryData("principalQuery");
    // const principalState = queryClient.getQueryState("principalQuery")
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        // console.log("useEffect");
        // console.log(principal);
        // console.log(principalState);
        setLogin(() => principalQueryState.status === "success" );
    }, [principalQueryState.status]);
    

    const handleOpenClick = (e) => {
        e.stopPropagation();
        setShow(() => true);
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.invalidateQueries("principalQuery");
        window.location.replace("/auth/signin");
    }



    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            {
                !isLogin
                ?  <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
            
                :
                <div css={s.accountItems}>
                    <button css={s.logout} onClick={handleLogoutClick}>
                        <FiLogOut />
                    </button>
                    <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>
                </div> 

                    
            }
            
        </div>
    );
}

export default RootHeader;