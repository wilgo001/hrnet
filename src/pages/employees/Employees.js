import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Navigation } from "../../components";
import Table from "../../plugins/table/Table";


const Employees = () => {
    const links = [{title:'Home', path:'/'}]
    const data = useSelector((state) => state.employees.employeeList);
    const header = [ 'Prenom', 'Nom', 'Date de naissance', 'Date de début', 'Rue', 'Ville', 'Etat', 'Code postal', 'Departement'];
    return(
        <div>
            <Header title='Current Employees' />
            <Navigation links={links} />
            <Table header={header} data={data} />
        </div>
    )
}

export default Employees;