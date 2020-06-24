import React from 'react';

import ChannelButton from '~/components/ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton selected channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="valorant" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="mk11" />
        </Container>
    );
};

export default ChannelList;
