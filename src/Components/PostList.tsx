import { PostItem } from "./PostItem"

const posts = [
    {
      id: 1,
      title: 'this is first',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Per ea omnis decore, eu mei appareat tincidunt. Nibh detracto incorrupte eos eu, iuvaret perfecto eam in, his eu possit dolorum temporibus. Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit. Eos verear percipit ex, eos ne eligendi inimicus. Vivendum intellegat et qui, ei denique consequuntur vix. Ad doctus gubergren duo, mel te postea suavitate. Sit fugit nostrum et. Harum repudiandae sea at. Quas scaevola postulant id vis, tincidunt assueverit et pro, quo et alii scripta accommodare. Scripta periculis ei eam, te pro movet reformidans. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. No epicuri hendrerit consetetur sit, sit dicta adipiscing ex, in facete detracto deterruisset duo. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec',
    },
    {
      id: 2,
      title: 'this is second',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Per ea omnis decore, eu mei appareat tincidunt. Nibh detracto incorrupte eos eu, iuvaret perfecto eam in, his eu possit dolorum temporibus. Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit. Eos verear percipit ex, eos ne eligendi inimicus. Vivendum intellegat et qui, ei denique consequuntur vix. Ad doctus gubergren duo, mel te postea suavitate. Sit fugit nostrum et. Harum repudiandae sea at. Quas scaevola postulant id vis, tincidunt assueverit et pro, quo et alii scripta accommodare. Scripta periculis ei eam, te pro movet reformidans. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. No epicuri hendrerit consetetur sit, sit dicta adipiscing ex, in facete detracto deterruisset duo. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec',
    },
    {
      id: 3,
      title: 'this is third',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Per ea omnis decore, eu mei appareat tincidunt. Nibh detracto incorrupte eos eu, iuvaret perfecto eam in, his eu possit dolorum temporibus. Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit. Eos verear percipit ex, eos ne eligendi inimicus. Vivendum intellegat et qui, ei denique consequuntur vix. Ad doctus gubergren duo, mel te postea suavitate. Sit fugit nostrum et. Harum repudiandae sea at. Quas scaevola postulant id vis, tincidunt assueverit et pro, quo et alii scripta accommodare. Scripta periculis ei eam, te pro movet reformidans. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. No epicuri hendrerit consetetur sit, sit dicta adipiscing ex, in facete detracto deterruisset duo. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec',
    },
  ]
  const PostList = posts.map((item) => {
    return (
      <PostItem
      key={item.id}
      title={item.title}
      description={item.description}/>
    )
  })
  export default PostList;