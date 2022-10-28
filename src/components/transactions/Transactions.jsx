import css from './Transaction.module.css'

export default function Transactions({ items }) {
    return (
        <table className={css.transactionHistory}>
          <thead >
            <tr className={css.transactionString}>
              <th className={css.transactionTypes} >Type</th>
              <th className={css.transactionTypes} >Amount</th>
              <th className={css.transactionTypes} >Currency</th>
            </tr>
          </thead>
            
            <tbody className={css.transactionBody}>
                
                {items.map(({ id, type, amount, currency }) => {
                    return (<tr key={id} className={css.transactionData}>
                        <td className={css.transactionValue}>{type }</td>
                        <td className={css.transactionValue}>{amount }</td>
                        <td className={css.transactionValue}>{currency }</td>
                    </tr> )       
                }) }

            
            
          </tbody>
        </table>


    )
}