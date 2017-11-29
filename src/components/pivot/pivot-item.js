import React, { Component } from 'react';

export const PivotItem = ({ title, children, style }) => {
    return <div title={title} style={style}>{children}</div>;
};