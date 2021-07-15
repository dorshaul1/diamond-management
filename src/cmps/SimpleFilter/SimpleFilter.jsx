import tableService from '../../services/tableService'
import './SimpleFilter.scss'
import Select from 'react-select'

export const SimpleFilter = ({ terms, handleChange }) => {
    const options = [{ value: "All", label: "All", name: terms }, ...tableService.getFilterOptions(terms).map(opt => {
        return { value: opt, label: opt, name: terms }
    })]

    return (
        <div className="filter flex column align-center">
            <h1>{terms}</h1>
            <Select className="filter-select" placeholder="All" name={terms} options={options} onChange={handleChange} />
        </div>
    )
}

