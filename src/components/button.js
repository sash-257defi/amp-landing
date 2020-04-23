import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const SharedButtonStyle = css`
    display: block;
    border-radius: 4px;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: normal;
    height: fit-content;
    width: fit-content;
    cursor: pointer;
    ${props => {
        if (props.primary)
            return css`
                color: var(--color-white);
                background: var(--color-green);

                &:hover {
                    background-color: var(--color-green-2);
                }
            `
        if (props.secondary)
            return css`
                color: var(--color-black);
                background: transparent;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.08);
                }
            `
    }}
    ${props => {
        if (props.disabled)
            return css`
                pointer-events: none;
                opacity: 0.32;
            `
    }}

    &:focus,
    &:active {
        outline: none;
        transform: scale(0.95);
    }
`

export const LinkButton = styled.a`
    ${SharedButtonStyle}
    text-align: center;
    text-decoration: none;
`

const Button = styled.button`
    ${SharedButtonStyle}
`

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button
