import { WindowControls } from '#components'
import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react/dist/esm/icons'
import React from 'react'

const Terminal = () => {
  return (
    <>
      <div id='window-header' className='window-drag-handle'>
        <div>
          <WindowControls target='terminal' />
        </div>
        <h2>
          技术栈
        </h2>
      </div>
      <div className='techstack'>
        <p>
          <span className='font-bold'>@swastik % </span>
          显示技术栈
        </p>
        <div className='label'>
          <p className='w-32'>
            类别
          </p>
          <p>
            技术
          </p>
        </div>

        <ul className='content'>
          {techStack.map(({ category, items }) => (
            <li className='flex items-center' key={category}>
              <Check className='check' size={20} />
              <h3>
                {category}
              </h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? ',' : ''}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className='footnote'>
          <p>
            <Check size={20} /> 5 of 5 stacks loaded successfully
          </p>
          <p className='text-black'>
            <Flag size={15} fill='black'/>
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow