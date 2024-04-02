import React, { useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

// Your layerStyles array and toggleVisibility function should be here...

const VisibilityToggle = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            {layerStyles.map((layer, index) => (
                <Row
                    key={layer.nameFragment}
                    style={{ padding: '0.25rem', width: '80%' }}
                >
                    <Button
                        variant={layer.visible ? 'success' : 'outline-secondary'}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => toggleVisibility(index)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color:
                                layer.visible || hoveredIndex === index
                                    ? 'white'
                                    : 'gray',
                        }}
                    >
                        {layer.visible ? (
                            <MdVisibility
                                size={25}
                                color={
                                    layer.visible || hoveredIndex === index
                                        ? 'white'
                                        : 'gray'
                                }
                            />
                        ) : (
                            <MdVisibilityOff
                                size={25}
                                color={
                                    layer.visible || hoveredIndex === index
                                        ? 'white'
                                        : 'gray'
                                }
                            />
                        )}
                        {layer.nameFragment}
                    </Button>
                </Row>
            ))}
        </div>
    );
};
