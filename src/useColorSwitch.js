import React from 'react'

function useColorSwitch(defaultColor, newColor){
    const [color, setColor] = React.useState(defaultColor)

    const handleClick = () => {
      setColor(newColor)
    }

    return [color, handleClick]
}

export default useColorSwitch