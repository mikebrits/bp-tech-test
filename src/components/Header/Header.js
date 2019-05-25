import React, { useRef, useState } from 'react';
import { Container } from './Header.styled-components';
import IconButton from '../IconButton';
import SearchBar from '../SearchBar';
import { Divider } from '../UI/Divider';
import { Popover } from '../UI/Popover';
import { Menu, MenuItem } from '../UI/Pane';

const Header = ({ setTheme }) => {
    const anchorRef = useRef(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Divider />
            <Container>
                <IconButton name="bars" highlight />
                <SearchBar />
                <div ref={anchorRef} onClick={() => setPopoverOpen(true)}>
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
                        <MenuItem onClick={() => setTheme('light')}>Light Theme</MenuItem>
                        <MenuItem onClick={() => setTheme('dark')}>Dark Theme</MenuItem>
                    </Menu>
                </Popover>
            </Container>
            <Divider border />
        </div>
    );
};

export default Header;
