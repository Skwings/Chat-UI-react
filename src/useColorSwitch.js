import React from 'react'

function useColorSwitch(){
    const [color, setColor] = React.useState('#ff0000')

    const handleClick = () => {
      console.log('点击事件  ');
      setColor('#00ff00')
    }

    return [color, handleClick]
}

export default useColorSwitch