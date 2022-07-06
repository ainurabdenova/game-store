import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export const RatingGame = ({ rating }) => {
    return (
        <div>
            <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={rating || 0} precision={0.1} readOnly />
            </Stack>
        </div>
    )
}
