import styled from 'styled-components';

type WrapperType = {
    paddingTop?: number;
};

const Wrapper = styled.div<WrapperType>`
    display: flex;
    width: 400px;
    justify-content: space-between;
    align-items: center;
    padding-top: ${(props) => (props.paddingTop ? `${props.paddingTop.toString()}px` : '0px')};
`;

export default Wrapper;
