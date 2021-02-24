import React from 'react'
import { addDecorator,addParameters } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

//添加主题
addDecorator((storyFn) => {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
})

//添加storybook分区
addParameters({
  options: {
    showRoots: true
  }
})