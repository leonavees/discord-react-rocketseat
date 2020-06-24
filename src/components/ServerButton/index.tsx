import React from 'react';

import { Button } from './styles';

import logo from '~/assets/logo.svg';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
}) => {
    return (
        <Button
            selected={selected}
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
        >
            {isHome && <img src={logo} alt="Home" />}
        </Button>
    );
};

export default ServerButton;
