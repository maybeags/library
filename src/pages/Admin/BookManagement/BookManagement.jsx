/** @jsxImportSource @emotion/react */
import Select from "react-select";
import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import * as s from "./style";

function BookManagement(props) {

    const selectStyle = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        })
    }

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>도서 관리</h1>
            </div>
                <div css ={s.topLayout}>
                    <table css={s.registerTable}>
                        <tbody>
                            <tr>
                                <th css={s.registerTh}>도서코드</th>
                                <td>
                                    <BookRegisterInput />
                                </td>
                                <th css={s.registerTh}>ISBN</th>
                                <td>
                                    <BookRegisterInput />
                                </td>
                                <td rowSpan={6} css={s.preview}>
                                    <div css={s.imageBox}>
                                        <img src="https://ebook.seocholib.or.kr/upload/20553/content/ebook/4801197112820/L4801197112820.jpg" alt="" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>도서형식</th>
                                <td>
                                    <Select styles={selectStyle} options={
                                        [{
                                            value: "test", label: "test"
                                        }]
                                    }/>
                                </td>
                                <th css={s.registerTh}>카테고리</th>
                                <td>
                                    <Select styles={selectStyle} options={
                                        [{
                                            value: "test", label: "test"
                                        }]
                                    }/>
                                </td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>도서명</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>저자명</th>
                                <td>
                                    <BookRegisterInput />
                                </td>
                                <th css={s.registerTh}>출판사</th>
                                <td>
                                    <BookRegisterInput />
                                </td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>표지URL</th>
                                <td colSpan={3}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div></div>
        </div>
    );
}

export default BookManagement;