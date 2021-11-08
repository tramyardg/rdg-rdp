export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? 32 : 9,
            fontSize: size === 'large' ? 32 : 16,
            backgroundColor: color
        }, { ...props }}>
            {text}
        </button>
    )
}