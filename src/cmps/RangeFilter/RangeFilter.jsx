import './RangeFilter.scss'

export const RangeFilter = ({ handleChangeCarat }) => {

    return (
        <div className="filter carat flex column align-center">
            <h1>carat</h1>
            <div className="inputs-container flex">
                <input type="number" placeholder="Min" name="min" onChange={handleChangeCarat} />
                <input type="number" placeholder="Max" name="max" onChange={handleChangeCarat} />
            </div>
        </div>
    )
}

