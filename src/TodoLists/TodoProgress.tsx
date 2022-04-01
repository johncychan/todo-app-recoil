import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStats } from './selector';

export default function TodoProgress(): React.ReactElement {
    const { todoNum, completedNum } = useRecoilValue(todoListStats);
    return (
        <label>{`${completedNum} / ${todoNum}`}</label>
    );
};
