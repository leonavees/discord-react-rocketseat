import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

interface ContainerProps {
    selected: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: ${props =>
        props.selected ? 'var(--quinary)' : 'transparent'};
    transition: background-color 0.2s;

    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 5px;
            color: ${props =>
                props.selected ? 'var(--white)' : 'var(--senary)'};
        }
    }

    div:last-child {
        svg {
            display: ${props => (props.selected ? 'inline' : 'none')};
        }
    }

    &:hover {
        background-color: var(--quinary);

        div {
            span {
                color: var(--white);
            }
        }

        div:last-child {
            svg {
                display: inline;
            }
        }
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color 0.2s;
    margin-left: 4px;

    &:hover {
        color: var(--white);
    }
`;
