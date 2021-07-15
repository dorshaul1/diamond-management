import { useEffect, useState } from 'react'
import { RangeFilter } from '../../cmps/RangeFilter/RangeFilter'
import { SimpleFilter } from '../../cmps/SimpleFilter/SimpleFilter'
import { Table } from '../../cmps/Table'
import tableService from '../../services/tableService'
import './HomePage.scss'
export const HomePage = () => {

    const [json, setJson] = useState(null)
    const [carat, setCarat] = useState({
        min: null,
        max: null
    })

    const [filterby, setfilterby] = useState({
        Color: null,
        Shape: null,
        Cut: null,
        Polish: null,
        Symmetry: null,
        Fluorescent: null,
        "Stock NO": null
    })

    useEffect(() => {
        setDiamonds()
    }, [filterby, carat])

    const setDiamonds = async () => {
        const diamonds = await tableService.getFilteredJson({ filterby, carat })
        setJson(diamonds)
    }

    const handleChange = ({ name, value, target = null }) => {
        if (target) {
            value = target.value
            name = target.name
        }
        if (value === "All") value = null
        setfilterby({ ...filterby, [name]: value })
    }

    const handleChangeCarat = ({ target }) => {
        setCarat({ ...carat, [target.name]: target.value })
    }

    const reduceNumbers = (column) => {
        const numbers = json && json.map((item) => item[column])
        const total = numbers && numbers.reduce((acc, num) => {
            return acc + (+num)
        }, 0)
        return (total)
    }

    return (
        <section className="homePage flex column align-center">
            <div className="home-title flex">
                <h1>Total diamonds:</h1>
                {json && <h3 className="total-diamonds">{json.length}</h3>}
            </div>
            <div className="home-title flex align-center">
                <h1>Total price:</h1>
                {json && <h3 className="total-price">{reduceNumbers("Total Price")}</h3>}
            </div>

            <div className="filters-container flex wrap">
                <SimpleFilter terms={"Shape"} handleChange={handleChange} />
                <RangeFilter handleChangeCarat={handleChangeCarat} />
                <SimpleFilter terms={"Color"} handleChange={handleChange} />
                <SimpleFilter terms={"Cut"} handleChange={handleChange} />
                <SimpleFilter terms={"Polish"} handleChange={handleChange} />
                <SimpleFilter terms={"Symmetry"} handleChange={handleChange} />
                <SimpleFilter terms={"Fluorescent"} handleChange={handleChange} />
            </div>

            <div className="search-input">
                <input type="number" placeholder="Search diamond by id" name="Stock NO" onChange={handleChange} />
            </div>

            {json && <Table json={json} />}
        </section>
    )

}
