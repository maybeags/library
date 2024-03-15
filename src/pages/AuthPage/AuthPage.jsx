/** @jsxImportSource @emotion/react */
import SigninPage from "../Signin/SigninPage";
import SignupPage from "../SignupPage/SignupPage";
import * as s from "./style";
import { Route, Routes } from 'react-router-dom';

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signup' element={ <SignupPage /> } />
                <Route path='/signin' element={ <SigninPage /> } />
                <Route path='/signup/oauth' />

            </Routes>


        </div>
    );
}

export default AuthPage;