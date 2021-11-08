import { Button } from "./composition/Button"

export const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}
