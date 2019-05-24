import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { View } from './Pane';
import styled from 'styled-components/macro';

const PopoverContent = styled(View)`
    position: absolute;
`;

export const Popover = ({
    children,
    onClose,
    anchor,
    padding = 0,
    open,
    closeOnClick = false,
    position = 'bottom',
    positionOffset = 4,
    align = 'center',
    alignOffset = 0,
}) => {
    const [top, setTop] = useState(-300);
    const [left, setLeft] = useState(-1000);
    const cardDom = useRef(null);
    // Using Memos here because otherwise the functions get regenerated each render,
    // and event handlers would not identify them
    const clickHandler = useMemo(() => handleClick, [handleClick]);
    const positionFunction = useMemo(() => updatePortalPosition, [updatePortalPosition]);

    function handleClick(e) {
        if (
            // Make sure they are not null
            cardDom.current &&
            e.target &&
            anchor &&
            !// Check if we are clicking in the card and
            // whether we should close it if we do click in it
            (
                (!closeOnClick && cardDom.current.contains(e.target)) ||
                // or clicking the anchor
                e.target === anchor.current
            )
        ) {
            onClose();
        }
    }

    function updatePortalPosition() {
        const margin = positionOffset;
        const anc = anchor.current || anchor;
        const card = cardDom.current;
        if (anc && card) {
            const box = anc.getBoundingClientRect();
            const cardBox = card.getBoundingClientRect();
            let t = top;
            let l = left;

            const getAlignValue = axis => {
                switch (align) {
                    case 'start':
                        if (axis === 'horizontal') {
                            return 0;
                        } else {
                            return 0;
                        }

                    case 'end':
                        if (axis === 'horizontal') {
                            return box.width - cardBox.width;
                        } else {
                            return box.height - cardBox.height;
                        }

                    case 'center':
                    default:
                        if (axis === 'horizontal') {
                            return box.width / 2 - cardBox.width / 2;
                        } else {
                            return box.height / 2 - cardBox.height / 2;
                        }
                }
            };
            switch (position) {
                case 'left':
                    t = box.top + alignOffset + getAlignValue('vertical');
                    l = box.left - cardBox.width - margin;
                    break;
                case 'right':
                    t = box.top + alignOffset + getAlignValue('vertical');
                    l = box.left + box.width + margin;
                    break;
                case 'top':
                    t = box.top - cardBox.height - margin;
                    l = box.left + alignOffset + getAlignValue('horizontal');
                    break;
                case 'bottom':
                default:
                    t = box.top + box.height + margin;
                    l = box.left + alignOffset + getAlignValue('horizontal');
                    break;
            }
            // console.log(window.innerHeight, t + cardBox.height);
            //Make sure values are not off the screen. If they are, move them to the other side
            if (t < 0) {
                //Was top, now bottom
                t = box.top + box.height + margin;
            } else if (t + cardBox.height > window.innerHeight) {
                // Was bottom, now top
                t = box.top - cardBox.height - margin;
            }
            if (l + cardBox.width > window.innerWidth) {
                // Was right, now left
                l = box.left - cardBox.width - margin;
            } else if (l < 0) {
                // Was left, now right
                l = box.left + box.width + margin;
            }
            setTop(t);
            setLeft(l);
        }
    }

    useEffect(
        () => {
            if (open) {
                updatePortalPosition();
                document.addEventListener('mousedown', clickHandler, true);
                window.addEventListener('scroll', positionFunction, true);
            } else {
                document.removeEventListener('mousedown', clickHandler, true);
                window.removeEventListener('scroll', positionFunction, true);
            }
            return () => {
                document.removeEventListener('mousedown', clickHandler, true);
                window.removeEventListener('scroll', positionFunction, true);
            };
        },
        [open],
    );

    return open
        ? ReactDOM.createPortal(
              <PopoverContent ref={cardDom} padding={padding} style={{ top, left }}>
                  {children}
              </PopoverContent>,
              document.body,
          )
        : null;
};
