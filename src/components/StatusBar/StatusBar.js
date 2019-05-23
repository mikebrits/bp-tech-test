import React, { useState} from 'react';
import { Container } from './StatusBar.styled-components';
import IconButton from "../IconButton";
import {Popover} from "../UI/Popover";
import {Card} from "../UI/Pane";

const StatusBar = ({ status, onArchive, onAutoAssign, onSchedule, onSelectWorkers }) => {
    const anchorRef = React.createRef();
    const [popoverOpen, setPopoverOpen] = useState(false);
    return <Container>
        <IconButton ref={anchorRef} name="cog" />
        <Popover
            position="bottom"
            align="center"
            anchor={anchorRef}
            onClose={() => setPopoverOpen(false)}
            open={popoverOpen}
        >
            <Card> Heyo! </Card>
        </Popover>
        {status}
    </Container>;
};

export default StatusBar;
