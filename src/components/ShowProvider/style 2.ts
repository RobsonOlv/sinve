import styled from 'styled-components';

interface ContainerProps {
    width: string;
}

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width};

    border: 2px dashed ${(props) => props.theme.colors.pineTree};

    border-radius: 24px;

    margin: 0 auto !important;
    margin-top: 40px !important;

    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding-bottom: 45px !important;
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 89%;
    gap: 24px;
`;

export const TitleContainer = styled.div`

    width: 89%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px !important;
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 34px;
    line-height: 39.84px;
    color: ${(props) => props.theme.colors.pineTree}
`;
