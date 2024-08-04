// rafc

import React from 'react'
import { Header } from './Header'
import { HeaderYellow } from './HeaderYellow'
// props: property

export const DemoProps = () => {
    return (
        <div className="container mt-5">
            <h1>Demo Props</h1>

            <Header bgColor="red" />

            <Header bgColor="yellow" fontSize={16} />

            <Header
                bgColor="green"
                fontSize={16}
                color="white"
                padding={{
                    top: 20,
                    bottom: 30,
                }}
                productsABC={[1, 2, 3]}
                func={() => {
                    console.log('demo func props')
                }}
            />

            {/* <Header /> */}
            {/* <HeaderYellow /> */}
        </div>
    )
}
