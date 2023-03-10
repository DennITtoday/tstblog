import { useEffect } from 'react'
import { IPost, ISortOption } from '../utils/types/Post'

export const SortSelector = ({
  options,
  currentOption,
  setCurrentOption,
  sort,
}: {
  options: ISortOption[]
  sort: () => void
  currentOption: ISortOption
  setCurrentOption: React.Dispatch<React.SetStateAction<ISortOption>>
  posts: IPost[]
}) => {
  useEffect(() => {
    sort()
  }, [currentOption])

  return (
    <div className="grid place-items-center mt-6">
      <select
        className="select select-bordered w-full max-w-xs"
        value={currentOption.title}
        onChange={(event) => {
          const targetOption = options.find(
            (opt) => opt.title === event.target.value,
          )
          setCurrentOption(targetOption!)
        }}
      >
        {options.map((option: ISortOption) => (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}
