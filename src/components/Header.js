import Button from '../common/Button'

export default function Header(){

  return (
    <div className='header'>
      <Button text={Logout} color={green} type={logout}/>
      <h1>My Todo List</h1>
    </div>
  )
}