import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setPriceGames } from "../../store/slice/catalogPageState"
import { setPriceSlider } from "../../store/slice/PaginationSlider"
import { AiFillDollarCircle } from "react-icons/ai"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./PriceFilter.css"

function valuetext(value) {
    return `${value}`;
}

const minDistance = 500;

export default function MinimumDistanceSlider() {
    const dispatch = useDispatch()
    const paginationSlider = useSelector(state => state.PriceSlider.paginationSlider)
    const [value2, setValue2] = React.useState(paginationSlider);


    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 45000 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);


                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };


    const handleClick = () => {
        dispatch(setPriceGames(value2))
        dispatch(setPriceSlider(value2))
    }


    return (
        <>
            <Box sx={{ width: 200, m: 1, mt: 2 }}>
                <Slider
                    size='small'
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={45000}
                    min={5000}
                    disableSwap
                    sx={{ color: "red" }}

                />
            </Box>
            <button className='price-filter-btn' onClick={handleClick}>
                ПО ЦЕНЕ
                <AiFillDollarCircle className='price-filter-btn-icon' size={17} />
            </button>
        </>

    );
}
