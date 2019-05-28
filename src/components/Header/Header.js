import React, { useRef, useState } from 'react';
import { Container } from './Header.styled-components';
import IconButton from '../IconButton';
import SearchBar from '../SearchBar';
import { Divider } from '../UI/Divider';
import { Popover } from '../UI/Popover';
import { Menu, MenuItem } from '../UI/Pane';
import { useLocale } from '../../i18n/LocaleHooks';

const Header = ({ setTheme }) => {
    const anchorRef = useRef(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [locale, setLocale] = useLocale();
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Divider />
            <Container>
                <IconButton name="bars" highlight size="1.4em" />
                <SearchBar />
                <span>
                    <select onChange={e => setLocale(e.target.value)} value={locale.key}>
                        <option value="en">🇬🇧 </option>
                        <option value="jap">🇯🇵 </option>
                    </select>
                    <div ref={anchorRef} onClick={() => setPopoverOpen(true)}>
                        <IconButton name="ellipsis-h" size="1.4em" highlight />
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
                </span>
            </Container>
            <Divider border />
        </div>
    );
};

export default Header;
