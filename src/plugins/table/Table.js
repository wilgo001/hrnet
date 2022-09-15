import { useEffect } from "react";
import { useState } from "react";
import "./table.css";

const Table = (props) => {
    const data = props.data;
    const headerData = props.header;
    const [rowNbr, setRowNbr] = useState(10);
    const [page, setPage] = useState(1);
    const [showedData, setShowedData] = useState(data.slice(0, 10));
    const [sortedData, setSortedData] = useState(data);
    const [filteredData, setFilteredData] = useState(data);
    const [sort, setSort] = useState({index: 0, asc: true});
    const [search, setSearch] = useState('');

    const getMaxPage = () => {
        let maxPage = Math.floor(data.length / rowNbr);
        let r = data.length % rowNbr;
        if(r > 0){
            maxPage++;
        }
        return maxPage
    }

    const nextOrPreviousPage = (isNext) => {
        const maxPage = getMaxPage();
        let currentPage;
        isNext ? currentPage = page + 1 : currentPage = page - 1;
        if(currentPage < 1)
            currentPage = 1;
        else if(currentPage > maxPage)
            currentPage = maxPage;
        setPage(currentPage);
    }
    /**
     * launch when the filter parameter change, to update the sorted data
     */
    useEffect(() => {
        if(search === '') return;
        let list = data.filter((value) => {
            let datas = Object.values(value);
            let containFilter = false;
            datas.forEach((el) => {
                containFilter = containFilter || el.includes(search);
            })
            return containFilter;
        })
        setFilteredData(list);
    }, [search])

    /**
     * launch when the sort parameters change, to update the sorted data
     */
    useEffect(() => {
        if(data.length > 0) {
            let list = [...filteredData]
            list.sort((a, b) => {
                let aList = Object.values(a);
                let bList = Object.values(b);
                let aItem = aList[sort.index];
                let bItem = bList[sort.index];
                if(sort.asc) {
                    if(aItem > bItem)
                        return 1
                    if(aItem < bItem)
                        return -1
                    return 0
                } else
                    if(aItem > bItem)
                        return -1
                    if(aItem < bItem)
                        return 1
                    return 0
            })
            setSortedData(list);
        }
    }, [sort, filteredData])

    /**
     * Launch when the current page, the number of row by page or the sorted datas change to update the table
     */
    useEffect(() => {
        const startIndex = (page - 1) * rowNbr;
        const endIndex = startIndex + rowNbr;
        setShowedData(sortedData.slice(startIndex, endIndex));
    }, [page, rowNbr, sortedData])

    return(
        <div className="TablePlugin global-container">
            <label htmlFor="row-nbr">nombre de lignes</label>
            <select name="row-nbr" id="row-nbr" value="10" onChange={(e) => (setRowNbr(parseInt(e.target.value)))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            <label htmlFor="search">Recherche</label>
            <input id="search" type="text" onInput={(e) => {setSearch(e.target.value)}}/>
            <table className="table-container">
                <thead>
                    <tr>
                        {headerData.map((value, index) => <th key={index} className="header-cell">
                            <i 
                                className={sort.index === index && sort.asc ? "arrow-up selected-sort" : "arrow-up"}
                                onClick={(e) => {setSort({index: index, asc: true})}}
                            />
                            <i 
                                className={sort.index === index && !sort.asc ? "arrow-down selected-sort" : "arrow-down"}
                                onClick={(e) => {setSort({index: index, asc: false})}}
                                />
                            {value}
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {showedData.map((value, index) => <Row data={value} key={index} />)}
                </tbody>
            </table>
            <span className="page-selection">
                <i className="arrow-left" onClick={(e) => {nextOrPreviousPage(false)}}/>
                <p>{page + ' / ' + getMaxPage()}</p>
                <i className="arrow-right"onClick={(e) => {nextOrPreviousPage(true)}}/>
            </span>
        </div>
    )
}

const Row = (props) =>{
    const data = Object.values(props.data);
    return(
            <tr>
                {data.map((value, index) => 
                    <td key={index}>{value}</td>
                )}
            </tr>
    )
}

export default Table;