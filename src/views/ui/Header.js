import { TableCellHead, TableHead } from "@dhis2/ui-core";
import { TableRowHead } from "@dhis2/ui-core/build/cjs/Table/TableRowHead";


const Header = ({ headers }) => {

    return <TableHead>
        <TableRowHead>
            {headers.map((head) => {
                return <TableCellHead key={head.name}>{head.column}</TableCellHead>
            })}
        </TableRowHead>
    </TableHead>

}

export default Header;