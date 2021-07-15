import './Table.scss'
import tableService from '../../services/tableService'
import videoIcon from '../../assets/images/icons/play-button.png'
import certificate from '../../assets/images/icons/diploma.png'

export const Table = ({ json }) => {

    const titles = ["Stock NO", "Shape", "Carat", "Clarity", "Color", "Cut", "Polish", "Symmetry", "Fluorescent", "CULET", "Location", "ImageLink", "CertificateLink", "VideoLink", "PPC", "Total Price"]
    const tableColumn = (object, value, idx) => {
        const key = tableService.getKeyByValue(object, value)
        switch (key) {
            case "ImageLink":
                return <td key={idx} className="table-cell diamond-image">{value && <a href={value} target="_blank"><img src={value} alt="" /></a>}</td>
            case "CertificateLink":
                return <td key={idx} className="table-cell diamond-link"><a href={value} target="_blank"><img src={certificate} alt="" /></a></td>
            case "VideoLink":
                return <td key={idx} className="table-cell diamond-video"><a href={value} target="_blank"><img src={videoIcon} alt="" /></a></td>
            default:
                return <td key={idx} className="table-cell">{value}</td>
        }
    }
    return (
        <section className="table-container flex column">
            <table>
                <thead >
                    <tr className="table-header">
                        {titles.map((title, idx) => {
                            return <th key={idx} className="title">{title}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {json.map((item, idx) => {
                        return <tr key={idx} >
                            {Object.values(item).map((value, idx) => {
                                return tableColumn(item, value, idx)
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            {json.length === 0 && <h1 className="no-results">No Results</h1>}
        </section>
    )
}

