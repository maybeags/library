import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { principalState } from "../atoms/principalAtom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import { useCallback, useEffect } from "react";
import { getPrinciaplRequest } from "../apis/api/principal";
import { useQuery } from "react-query";
import RootSideMenuLeft from "../components/RootSideMenuLeft/RootSideMenuLeft";
import RootHeader from "../components/RootHeader/RootHeader";
import { GridLoader } from "react-spinners";
import FullSizeLoader from "../components/FullSizeLoader/FullSizeLoader";
import MyPage from "../pages/MyPage/MyPage";
import PageContainer from "../components/PageContainer/PageContainer";
import PasswordEditPage from "../pages/PasswordEditPage/PasswordEditPage";
import BookManagement from "../pages/Admin/BookManagement/BookManagement";



// useQuery => GET 요청시에 사용
// 첫번째 매개변수 => 배열 ["key값", dependency]
// 두번째 매개변수 => 요청메서드(async, await)
/* 세번째 매개변수 -> 옵션(
    {    
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: 함수,
        onError: 함수,
        enabled: true or false
    }
)
*/
function AuthRoute(props) {
    // const [ principal, setPrincipal ] = useRecoilState(principalState);

    const principalQuery = useQuery(["principalQuery"], getPrinciaplRequest, 
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: error => {
            console.log("오류");
            console.log(error);
        }
    });

    // useEffect(() => {
    //     getPrinciapl();
    // },[]);

    // const getPrinciapl = useCallback(() => {
    //     getPrinciaplRequest()
    //     .then(response => {
    //         setPrincipal(() => response.data);
    //         console.log(response);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }, []);

    return (
        <>
            <RootSideMenuLeft />
            <RootHeader />
            <PageContainer>
                {
                    principalQuery.isLoading 
                    ? <FullSizeLoader size={20}/>
                    : <Routes>
                        <Route path="/auth/*" element={ <AuthPage /> } />
                        <Route path="/" element={ <HomePage /> }  />    
                        <Route path="/account/mypage" element={ <MyPage /> }  />    
                        <Route path="/account/edit/password" element={ <PasswordEditPage /> }  /> 
                        <Route path="/admin/book/management" element={ <BookManagement /> } />   
                    </Routes>
                }
            </PageContainer>
        </>    
    );
}

export default AuthRoute;