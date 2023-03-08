export const PostItem = (props: any, pos:any,) => {
  return (
    <div key={props.id} className="grid place-items-center justify-center">
      <div className="card w-11/12 m-8 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-bold">{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <button className="btn gap-2" onClick={() => alert(pos)}>
          Do you like it?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
