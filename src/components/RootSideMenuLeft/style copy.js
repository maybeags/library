import { css } from "@emotion/react";


export const layout = (show) => css`
    transition: all 0.5s ease-in-out;
    opacity: ${show ? 1 : 0};
    position: absolute;
    top: 0;
    left: ${show ? "0px" : "-200px"};
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    padding: 15px 0px;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 10px;
    width: 100%;
    height: 50px;
`;

export const menuButton = css`
    box-sizing: border-box;
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;

    & > * {
        font-size: 16px;
    }
`;

export const profile = css`
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 150px;
    cursor: pointer;
`;

export const profileImage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    margin-right: 20px;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    font-size: 80px;
`;

export const profileBox = css`
    border: 1px solid blue;
    justify-content: center;
    align-content: center;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
`;

export const menuList = css`

`;

export const menuLink = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 20px;
    height: 40px;
    background-color: #fdfdfd;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #222222;
`;