import { TableBody, TableCell, TableRow } from "@dhis2/ui-core"

const Body = ({ rows }) => {

    return <TableBody>

        {rows.map((row, i) => {
            return <TableRow key={i}>
                {row.map((r, j) => {
                    return <TableCell key={j}>{r}</TableCell>
                })}
            </TableRow>
        })}

    </TableBody>
}

export default Body