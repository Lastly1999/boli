import React from 'react'
import { Route } from "react-router-dom"

type Props = {}

const AuthRoute: React.FC = (props: Props) => {
	return (
		<Route component={() => (<div>test</div>)}></Route>
	)
}

export default AuthRoute