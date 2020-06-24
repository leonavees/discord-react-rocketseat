import React from 'react';

import { User, Avatar } from './styles';

interface Props {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar isBot={isBot ?? false} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
};

export default UserRow;
