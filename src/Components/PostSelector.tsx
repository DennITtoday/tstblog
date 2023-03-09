import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react'

const PostSelector = ({ options, defaultValue }: any) => {
  return (
    <div>
      <div className="m-6 grid place-items-end mr-14">
        <select className="select select-bordered w-full max-w-xs">
          <option className="disabled" value={defaultValue}>
            {defaultValue}
          </option>
          {options.map(
            (option: {
              value: string | number | readonly string[] | undefined
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined
            }) => (
              <option value={option.value}>{option.name}</option>
            ),
          )}
        </select>
      </div>
    </div>
  )
}
export default PostSelector
