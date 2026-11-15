import './App.css'

function App() {
  const appTitle = "Task Manager";

  return (
    <main className='min-h-screen bg-slate-50 p-6'>
      <div className='mx-auto max-w-2xl'>
        <h1 className='text-3xl font-bold text-slate-900'>{appTitle}</h1>
        <p className='mt-2 text-slate-600'>Organisez vos tâches au quotidien</p>
      </div>
    </main>
  )
}

export default App
