import React, {useState, useRef} from 'react';
import { Container } from './ActionsMenu.styled-components';
import IconButton from "../IconButton";
import {Popover} from "../UI/Popover";
import {Menu, MenuItem} from "../UI/Pane";
import PrioritySetter from "../PrioritySetter";

const ActionsMenu = ({
                         onArchive,
                         onSchedule,
                         onSelectWorkers,
                         onSetPriority,
                     }) => {
    const anchorRef = useRef(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [settingPriority, setSettingPriority] = useState(false);
    return (
        <Container>
            <div style={{ marginRight: 8 }} ref={anchorRef} onClick={() => setPopoverOpen(true)}>
                <IconButton name="ellipsis-h" highlight />
            </div>
            <Popover
                position="bottom"
                align="center"
                anchor={anchorRef}
                onClose={() => setPopoverOpen(false)}
                open={popoverOpen}
            >
                <Menu>
                    {settingPriority ? (
                        <PrioritySetter onSetPriority={onSetPriority} />
                    ) : (
                        <>
                            <MenuItem onClick={() => setSettingPriority(true)}>
                                Auto Assign
                            </MenuItem>
                            <MenuItem onClick={onSelectWorkers}>Select Workers</MenuItem>
                            <MenuItem onClick={onSchedule}>Schedule</MenuItem>
                            <MenuItem onClick={onArchive}>Archive</MenuItem>
                        </>
                    )}
                </Menu>
            </Popover>
        </Container>
    );
};

export default ActionsMenu;
