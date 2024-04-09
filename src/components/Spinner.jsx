
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="fixed animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary z-50"></div>
    </div>
    // <div className='animate-ping w-16 h-16 m-8 rounded-full bg-orange-600'></div>
  )
}

export default Spinner 