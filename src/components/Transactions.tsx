import React from 'react'

type Props = {
    title: string,
    value: string,
    changeValue: string
}

type Props2 = {
    data: Props,
}

const Transactions = (props: Props2) => {
    const {data} = props;

    return (
        <div>Transactions</div>
    )
}

export default Transactions